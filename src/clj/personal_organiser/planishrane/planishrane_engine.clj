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
  (:require [personal-organiser.neo4j :as n4j]))

(defn organism-query
  "Read organism from db"
  [organism-id]
  (:data (n4j/cypher-query (str "start n=node("organism-id")
				 return ID(n),
					n.oheight,
					n.oweight,
					n.obirthday,
					n.ogender,
					n.odiet,
					n.oactivity"))))

(defn read-organizam
  [training-meal
   training-duration
   training-coef]
  (let [organizam (Organizam.)]
     (doseq [[id
	     height
	     weight
	     birthday
	     gender
	     diet
	     activity] (organism-query (session-get :organism-id))]
	(.setId organizam id)
	(.setVisina organizam height)
	(.setTezina organizam weight)
	(.setDatumRodjenja organizam (.parse (java.text.SimpleDateFormat. "yyyy-MM-dd")
					 birthday))
	(.setPol organizam gender)
	(.setNacinIshrane organizam diet)
	(.setFizickaAktivnost organizam activity)
	(.setTreningObrok organizam training-meal)
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

(defn meal-query
  "Read meals of particular type and set numeric value for that type"
  [meal-type meal-type-num]
  (:data (n4j/cypher-query (str "start n=node(*)
				 where n.mltype! =\""meal-type"\"
				 return ID(n),
					n.mlname,
					n.mlcalories,
					"meal-type-num",
					n.mldesc,
					n.mlimg"))))

(defn meal-has-grocery-query
  "Read all groceries and their realationships with meal of parameter meal-id"
  [meal-id]
  (:data (n4j/cypher-query (str "start n=node("meal-id")
				 match (n)-[r:`meal-has-grocery`]-(n2)
				 return ID(r),
					r.grams,
					r.quantity,
					ID(n2),
					n2.gname,
					n2.gcalories,
					n2.gproteins,
					n2.gfats,
					n2.gcarbohydrates,
					n2.gwater,
					n2.gdesc,
					n2.gorigin"))))

(defn create-meal-has-groceries
  "Create ArrayList of Obrok_has_Namirnica java classes for Obrok java class object"
  [meal-obj]
  (let [meal-has-groceries (ArrayList.)]
     (doseq [[mlhgid
	      mlgrams
	      mlquantity
	      gid
	      gname
	      gcalories
	      gproteins
	      gfats
	      gcarbohydrates
	      gwater
	      gdesc
	      gorigin]
	     (meal-has-grocery-query (.getId meal-obj))]
	(.add meal-has-groceries
	      (Obrok_has_Namirnica. mlhgid
				    mlgrams
				    mlquantity
				    (Namirnica. gid
						gname
						gcalories
						gproteins
						gfats
						gcarbohydrates
						gwater
						gdesc
						gorigin)
				     meal-obj)))
     meal-has-groceries))

(defn create-meal-obj
  "Create Obrok java class object"
  [id
   mlname
   mlcalories
   mltype
   mldesc
   mlimg]
  (let [meal-obj (Obrok. id
			 mlname
			 mlcalories
			 mltype
			 mldesc
			 mlimg)]
     (.setObrokHasNamirnicas meal-obj
			     (create-meal-has-groceries meal-obj))
     meal-obj))

(defn add-meal-obj
  "Add created meal to seqence"
  [acc [id
	mlname
	mlcalories
	mltype
	mldesc
	mlimg]]
  (conj acc
	(create-meal-obj id
			 mlname
			 mlcalories
			 mltype
			 mldesc
			 mlimg)))

(defn meal-objects-db
  "Create seqence of meals of particular type and its numeric value"
  [meal-type
   meal-type-num]
  (reduce add-meal-obj
	  []
	  (meal-query meal-type
		      meal-type-num)))

(defn read-meals-from-db
  "Read meals by type in map and define variable"
  []
  (def meals-from-db {:breakfast (meal-objects-db "Breakfast" 0)
		      :lunch (meal-objects-db "Lunch" 1)
		      :dinner (meal-objects-db "Dinner" 2)}))

(defonce drools-meals-result {:breakfast (ArrayList.)
			      :lunch (ArrayList.)
			      :dinner (ArrayList.)
			      :training (ArrayList.)})

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
      (let [meal-coef (/ cal-per-meal
			 (.getKalorije meal))]
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
	{:gid (.getId namirnica)
	 :gname (.getNaziv namirnica)
	 :gcalories (.getKalorija namirnica)
	 :gfats (.getMasti namirnica)
	 :gproteins (.getProteina namirnica)
	 :gcarbohydrates (.getUgljenihhidrata namirnica)
	 :gwater (.getVoda namirnica)
	 :gorigin (.getPorekloStr namirnica)
	 :gdesc (.getOpis namirnica)
	 :grams (.getKolicinaUGramima obrok-has-namirnica)
	 :quantity (.getKomad obrok-has-namirnica)}))

(defn add-converted-grocery
  "Add converted grocery from java to clojure data structure"
  [acc-seq obrok-has-namirnica]
  (conj acc-seq
	(convert-namirnica-to-grocery obrok-has-namirnica)))

(defn convert-obrok-to-meal
  "Convert java data object into clojure data structure"
  [obrok]
  {:mlid (.getId obrok)
   :mlname (.getIme obrok)
   :mlcalories (.getKalorije obrok)
   :mltype (.getVrstaObrokaStr obrok)
   :mldesc (.getOpis obrok)
   :mlimg (.getSlika obrok)
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
  [result-meals training-coef]
  (let [acc-seq (conj (conj (conj []
			  ["Breakfast" (convert-to-meals (:breakfast drools-meals-result))])
		    ["Lunch" (convert-to-meals (:lunch drools-meals-result))])
	      ["Dinner" (convert-to-meals (:dinner drools-meals-result))])]
       (println (.isEmpty (:training drools-meals-result)))
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
    (form-result-meals drools-meals-result training-coef)))
