(ns personal-organiser.planishrane.planishrane-engine
  (:use (sandbar stateful-session))
  (:import [model Organizam
                  Obrok
                  Obrok_has_Namirnica
                  Namirnica]
           [enums NacinIshrane
                  FizickaAktivnost
                  VrstaObroka]
           [java.util ArrayList]
           [org.drools KnowledgeBase
                       KnowledgeBaseFactory]
           [org.drools.builder KnowledgeBuilder
                               KnowledgeBuilderError
                               KnowledgeBuilderErrors
                               KnowledgeBuilderFactory
                               ResourceType]
           [org.drools.logger KnowledgeRuntimeLogger
                              KnowledgeRuntimeLoggerFactory]
           [org.drools.runtime StatefulKnowledgeSession]
           [org.drools.io ResourceFactory])
  (:require [personal-organiser.utils :as utils]
            [personal-organiser.mongo :as mon]
            [personal-organiser.meal.meal-model :as m-model]))

(defn read-organizam
  [training-meal
   training-duration
   training-coef]
  (let [organizam (Organizam.)]
    (let [organism-from-db (mon/find-by-id (mon/organism-coll) (session-get :organism-id))]
      (.setId organizam (.toString (:_id organism-from-db)))
      (.setVisina organizam (:oheight organism-from-db))
      (.setTezina organizam (:oweight organism-from-db))
      (.setDatumRodjenja organizam (.parse (java.text.SimpleDateFormat. "dd.MM.yyyy")
                                           (:obirthday organism-from-db)))
      (.setPol organizam (:ogender organism-from-db))
      (.setNacinIshrane organizam (:odiet organism-from-db))
      (.setFizickaAktivnost organizam (:oactivity organism-from-db))
      (.setTreningObrok organizam training-meal)
      (def train-dur training-duration)
      (def train-index training-coef)
      (.setTrajanjeTreninga organizam training-duration)
      (.setTrening organizam training-coef))
    organizam))

(defn read-knowledge-base
  "Read rules from drl file and create knowledge base"
  []
  (let [kbuilder (KnowledgeBuilderFactory/newKnowledgeBuilder)]
    (.add kbuilder
          (ResourceFactory/newClassPathResource "drools/planishrane.drl")
          (ResourceType/DRL))
    (let [errors (.getErrors kbuilder)]
      (if (> (.size errors) 0)
        (do (doseq [error errors]
              (println error))
            true)
        false))
    (let [kbase (KnowledgeBaseFactory/newKnowledgeBase)]
      (.addKnowledgePackages kbase
                             (.getKnowledgePackages kbuilder))
      kbase)))

(defn create-meal-has-groceries
  "Create ArrayList of Obrok_has_Namirnica java classes for Obrok java class object"
  [meal meal-obj]
  (let [meal-has-groceries (ArrayList.)]
    (doseq [ingredient (mon/find-all-from-list (mon/grocery-coll) (:groceries meal))]
      (.add meal-has-groceries
            (Obrok_has_Namirnica. (:grams ingredient)
                                  (:quantity ingredient)
                                  (Namirnica. (:id ingredient)
                                              (:gname ingredient)
                                              (:gcalories ingredient)
                                              (:gproteins ingredient)
                                              (:gfats ingredient)
                                              (:gcarbohydrates ingredient)
                                              (:gwater ingredient)
                                              (:gdesc ingredient)
                                              (:gorigin ingredient))
                                  meal-obj)))
    meal-has-groceries))

(defn create-meal-obj
  "Create Obrok java class object"
  [meal]
  (let [meal-obj (Obrok. (.toString (:_id meal))
                         (:mlname meal)
                         (:mlcalories meal)
                         (:mltype-number meal)
                         (:mldesc meal)
                         (:mlimg meal))]
    (.setObrokHasNamirnicas meal-obj
                            (create-meal-has-groceries meal meal-obj))
    meal-obj))

(defn add-meal-obj
  "Add created meal to seqence"
  [acc meal]
  (conj acc
        (create-meal-obj meal)))

(defn meal-objects-db
  "Create seqence of meals of particular type and its numeric value"
  [meal-type]
  (reduce add-meal-obj
          []
          (mon/find-by-filter (mon/meal-coll) {:mltype meal-type})
          ))

(defn read-meals-from-db
  "Read meals by type in map and define variable"
  []
  (def meals-from-db {:breakfast (meal-objects-db (m-model/meal-breakfast))
                      :lunch     (meal-objects-db (m-model/meal-lunch))
                      :dinner    (meal-objects-db (m-model/meal-dinner))}))

(defonce drools-meals-result {:breakfast (ArrayList.)
                              :lunch     (ArrayList.)
                              :dinner    (ArrayList.)
                              :training  (ArrayList.)})

(defn clear-drools-meals-result
  "Clear content of drools rules result lists"
  []
  (.clear (:breakfast drools-meals-result))
  (.clear (:lunch drools-meals-result))
  (.clear (:dinner drools-meals-result))
  (.clear (:training drools-meals-result)))

(defn knowledge-base-globals
  "Set lists as global variables to knowledge session for different types of meals"
  [ksession]
  (clear-drools-meals-result)
  (.setGlobal ksession "breakfast" (:breakfast drools-meals-result))
  (.setGlobal ksession "lunch" (:lunch drools-meals-result))
  (.setGlobal ksession "dinner" (:dinner drools-meals-result))
  (.setGlobal ksession "training" (:training drools-meals-result)))

(defn merge-meals-from-db
  "Merge meals in one sequence"
  []
  (reduce conj
          (:breakfast meals-from-db)
          (reduce conj
                  (:lunch meals-from-db)
                  (:dinner meals-from-db))))

(defn knowledge-base-meals-load
  "Load all meals to knowledge base"
  [ksession organizam]
  (if (not= meals-from-db nil)
    (doseq [meal (merge-meals-from-db)]
      (if (= (.getNacinIshraneEnum organizam)
             (NacinIshrane/VEGETARIJANSKI))
        (if (.isObrokVegetarijanski meal)
          (.insert ksession meal))
        (.insert ksession meal)))))

(defn cal-per-meal-calc
  "Calculate calories for meal adjusting its number to total amount of calories for that meal"
  [training
   cal-precent-share
   organizam]
  (if training
    (/ (+ (* (.getEnergetskaPotrosnja organizam)
             cal-precent-share)
          (.getTreningPotrosnja organizam))
       2)
    (* (.getEnergetskaPotrosnja organizam)
       cal-precent-share)))

(defn calories-per-meal
  "Calculate calories for meal adjusting its number to total amount of calories for that meal"
  [organizam
   cal-precent-share
   meals
   training]
  (let [cal-per-meal (cal-per-meal-calc training
                                        cal-precent-share
                                        organizam)]
    (doseq [meal meals]
      (let [meal-coef (if (> (.getKalorije meal) 0)
                        (/ cal-per-meal
                           (.getKalorije meal))
                        0)]
        (doseq [meal-grocery (.getObrokHasNamirnicas meal)]
          (.setKolicinaUGramima meal-grocery
                                (* (.getKolicinaUGramima meal-grocery)
                                   meal-coef)))))))

(defn calories-per-meals
  "Calculate calories number for every meal type"
  [organizam]
  (calories-per-meal organizam
                     0.35
                     (:breakfast meals-from-db)
                     (and (> (.getTrening organizam) 0)
                          (> (.getTrajanjeTreninga organizam) 0)
                          (= (.getTreningObrok organizam)
                             (VrstaObroka/DORUCAK))))
  (calories-per-meal organizam
                     0.40
                     (:lunch meals-from-db)
                     (and (> (.getTrening organizam) 0)
                          (> (.getTrajanjeTreninga organizam) 0)
                          (= (.getTreningObrok organizam) (VrstaObroka/RUCAK))))
  (calories-per-meal organizam
                     0.25
                     (:dinner meals-from-db)
                     (and (> (.getTrening organizam) 0)
                          (> (.getTrajanjeTreninga organizam) 0)
                          (= (.getTreningObrok organizam) (VrstaObroka/VECERA)))))

(defn print-meals
  "Print meals"
  []
  (let [breakfast-res (:breakfast drools-meals-result)
        lunch-res (:lunch drools-meals-result)
        dinner-res (:dinner drools-meals-result)
        training-res (:training drools-meals-result)]
    (println "breakfast-res")
    (doseq [meal breakfast-res]
      (println (.getIme meal)
               (.getKalorije meal)))
    (println "lunch-res")
    (doseq [meal lunch-res]
      (println (.getIme meal)
               (.getKalorije meal)))
    (println "dinner-res")
    (doseq [meal dinner-res]
      (println (.getIme meal)
               (.getKalorije meal)))
    (println "training-res")
    (doseq [meal training-res]
      (println (.getIme meal)
               (.getKalorije meal)))))

(defn convert-namirnica-to-grocery
  "Convert grocery from java to clojure data structure"
  [obrok-has-namirnica]
  (let [namirnica (.getNamirnica obrok-has-namirnica)]
    {:gid            (.getId namirnica)
     :gname          (.getNaziv namirnica)
     :gcalories      (.getKalorija namirnica)
     :gfats          (.getMasti namirnica)
     :gproteins      (.getProteina namirnica)
     :gcarbohydrates (.getUgljenihhidrata namirnica)
     :gwater         (.getVoda namirnica)
     :gorigin        (.getPorekloStr namirnica)
     :gdesc          (.getOpis namirnica)
     :grams          (.getKolicinaUGramima obrok-has-namirnica)
     :quantity       (.getKomad obrok-has-namirnica)}))

(defn add-converted-grocery
  "Add converted grocery from java to clojure data structure"
  [acc-seq obrok-has-namirnica]
  (conj acc-seq
        (convert-namirnica-to-grocery obrok-has-namirnica)))

(defn convert-obrok-to-meal
  "Convert java data object into clojure data structure"
  [obrok]
  {:mlid               (.getId obrok)
   :mlname             (.getIme obrok)
   :mlcalories         (.getKalorije obrok)
   :mltype             (.getVrstaObrokaStr obrok)
   :mldesc             (.getOpis obrok)
   :mlimg              (.getSlika obrok)
   :mlproteins         (.getProteini obrok)
   :mlcarbohydrates    (.getUgljeniHidrati obrok)
   :mlfats             (.getMasti obrok)
   :train-dur          train-dur
   :train-index        train-index
   :meal-has-groceries (reduce add-converted-grocery
                               []
                               (.getObrokHasNamirnicas obrok))})

(defn add-converted-obrok-to-meal
  "Add converted java data object into clojure structure to sequence"
  [acc-seq obrok]
  (conj acc-seq
        (convert-obrok-to-meal obrok)))

(defn convert-to-meals
  "Converts java data objects into clojure data structures"
  [obroks]
  (reduce add-converted-obrok-to-meal
          []
          obroks))

(defn form-result-meals
  "Form sequence of result meals"
  [result-meals]
  (let [acc-seq (conj (conj (conj []
                                  ["Breakfast" (convert-to-meals (:breakfast drools-meals-result))])
                            ["Lunch" (convert-to-meals (:lunch drools-meals-result))])
                      ["Dinner" (convert-to-meals (:dinner drools-meals-result))])]
    (if (not (.isEmpty (:training drools-meals-result)))
      (conj acc-seq
            ["Training" (convert-to-meals (:training drools-meals-result))])
      acc-seq)))

(defn knowledge-base-run
  "Fire all rules of knowledge base"
  [[training-meal
    training-duration
    training-coef]]
  (let [kbase (read-knowledge-base)
        ksession (.newStatefulKnowledgeSession kbase)
        organizam (read-organizam training-meal
                                  training-duration
                                  training-coef)]
    (read-meals-from-db)
    (calories-per-meals organizam)
    (knowledge-base-globals ksession)
    (.insert ksession organizam)
    (knowledge-base-meals-load ksession organizam)
    (.fireAllRules ksession)
    (print-meals)
    (form-result-meals drools-meals-result)))
