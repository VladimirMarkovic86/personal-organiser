(ns personal-organiser.planishrane
  (:import [model Organizam]
	   [model Obrok]
	   [enums NacinIshrane]
	   [enums FizickaAktivnost]
	   [enums VrstaObroka]
	   [controller Controller]
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
	   [org.drools.io ResourceFactory]))

(defn read-organizam
  [training-meal]
  (let [organizam (Organizam.)]
    (.setId organizam 1)
    (.setVisina organizam 180)
    (.setTezina organizam 69)
    (.setDatumRodjenja organizam (.parse (java.text.SimpleDateFormat. "yyyy-MM-dd") "1986-10-16"))
    (.setPol organizam 0)
    (.setNacinIshrane organizam 1)
    (.setFizickaAktivnost organizam 0)
    (.setTreningObrok organizam training-meal)
    organizam))

(defn read-knowledge-base
  []
  (let [kbuilder (KnowledgeBuilderFactory/newKnowledgeBuilder)]
	(.add kbuilder (ResourceFactory/newClassPathResource "drools/planishrane.drl") (ResourceType/DRL))
	(let [errors (.getErrors kbuilder)]
	  (if (> (.size errors) 0)
	    (do (doseq [error errors]
		(println error))
	    true)
	    false))
	(let [kbase (KnowledgeBaseFactory/newKnowledgeBase)]
	  (.addKnowledgePackages kbase (.getKnowledgePackages kbuilder))
	kbase)))

(defn meal-groceries-list
  [meal-id])

(defn meal-to-java-obrok
  [meal-id meal]
  (let [java-meal (Obrok. meal-id
			  (:mlname meal)
			  (:mlcalories meal)
			  (:mltype meal)
			  (:mldesc meal)
			  (:mlimage meal)
			  (ArrayList. (meal-groceries-list meal-id)))]
  java-meal))

(defonce drools-meals-result {:breakfast (ArrayList.)
			      :lunch (ArrayList.)
			      :dinner (ArrayList.)
			      :training (ArrayList.)})

(defonce meals-from-db {:breakfast nil
			:lunch nil
			:dinner nil})

(defn knowledge-base-globals
  [ksession]
  (.setGlobal ksession "breakfast" (:breakfast drools-meals-result))
  (.setGlobal ksession "lunch" (:lunch drools-meals-result))
  (.setGlobal ksession "dinner" (:dinner drools-meals-result))
  (.setGlobal ksession "training" (:training drools-meals-result)))

(defn merge-meals-from-db
  []
  (reduce conj (:breakfast meals-from-db) (reduce conj (:lunch meals-from-db) (:dinner meals-form-db))))

(defn knowledge-base-meals-load
  [ksession organizam]
  (if (not= meals-from-db nil)
    (doseq [meal (merge-meals-from-db)]
	(if (= (.getNacinIshraneEnum organizam) (NacinIshrane/VEGETARIJANSKI))
	  (if (.isObrokVegetarijanski meal)
		(.insert ksession meal))
	  (.insert ksession meal)))))

(defn cal-per-meal-calc
  [training cal-precent-share organizam]
  (if training
    (/ (+ (* (.getEnergetskaPotrosnja organizam) cal-precent-share) (.getTreningPotrosnja organizam)) 2)
    (* (.getEnergetskaPotrosnja organizam) cal-precent-share)))

(defn calories-per-meal
  [organizam cal-precent-share meals training]
  (let [cal-per-meal (cal-per-meal-calc training cal-precent-share organizam)]
    (doseq [meal meals]
      (let [meal-coef (/ cal-per-meal (.getKalorije meal))]
	(doseq [meal-grocery (.getObrokHasNamirnicas meal)]
	  (.setKolicinaUGramima meal-grocery (* (.getKolicinaUGramima meal-grocery) meal-coef)))))))

(defn calories-per-meals
  [organizam]
  (calories-per-meal organizam
		     0.35
		     (:breakfast meals-from-db)
		     (and (> (.getTrening organizam) 0)
			  (> (.getTrajanjeTreninga organizam) 0)
			  (= (.getTreningObrok organizam) (VrstaObroka/DORUCAK))))
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

(defn knowledge-base-run
  [kbase training-meal]
  (let [ksession (.newStatefulKnowledgeSession kbase)]
    (calories-per-meals (read-organizam (VrstaObroka/DORUCAK)))
    (knowledge-base-globals ksession)
    (.insert ksession organizam)
    (knowledge-base-meals-load ksession organizam)
    (.fireAllRules ksession)))
