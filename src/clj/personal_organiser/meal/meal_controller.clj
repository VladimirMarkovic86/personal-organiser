(ns personal-organiser.meal.meal-controller
  (:use [clojure.string :only [split]])
  (:require [personal-organiser.meal.meal-validators :refer [create-meal-errors]]
	    [personal-organiser.meal.meal-view :refer [read-all-meals]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :refer [map-keys-to-str create-rels-for-node update-rels-for-node]]))

(defn cal-calc
  "Calculate ingredient calories in meal"
  [acc ingredient]
  (+ acc (* (* (:grams ingredient) (:quantity ingredient)) (/ (:gcalories (:data (n4j/read-node (:id ingredient)))) 100))))

(defn meal-cal-calc
  "Calculate meal calories of all ingredients"
  [ingredients]
  (reduce cal-calc 0 ingredients))

(defn get-value
  "Get value from params"
  [acc param-key ing-index]
  (get (first acc) (str param-key ing-index)))

(defn add-ingredient-params
  "Form ingredient params and add them to vector as map"
  [acc ing-index]
  (conj acc {:grams (read-string (get-value acc ":igrams" ing-index)),
	     :quantity (read-string (get-value acc ":iquantity" ing-index)),
	     :id (read-string (get-value acc ":ingredient" ing-index))}))

(defn form-map-of-ingredients
  "Form map of ingredients"
  [req-params]
  (let [ing-indexes (get req-params ":ingredient-indexes")]
    (into [] (rest (reduce add-ingredient-params [req-params] (split ing-indexes #";"))))))

(defn save-meal
  "Save meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:mlname (:mlname req-params)
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg (:mlimg req-params)})]
    (println (str "Meal errors: " meal-errors))
    (let [node-id (n4j/create-node "meal" {:mlname (:mlname req-params)
						 :mlcalories (meal-cal-calc (form-map-of-ingredients (map-keys-to-str req-params)))
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg (:mlimg req-params)})]
	(create-rels-for-node node-id
			      (form-map-of-ingredients (map-keys-to-str req-params))
			      :meal-has-grocery)))
  (read-all-meals))

(defn update-meal
  "Update meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:gname (:gname req-params)
						 :gcalories (:gcalories req-params)
						 :gfats (:gfats req-params)
						 :gproteins (:gproteins req-params)
						 :gcarbohydrates (:gcarbohydrates req-params)
						 :gwater (:gwater req-params)
						 :gdesc (:gdesc req-params)})]
    (println (str "Meal errors: " meal-errors))
    ((n4j/update-node
	(n4j/read-node (read-string (:idmeal req-params))) {:gname (:gname req-params)
					  		       :gcalories (read-string (:gcalories req-params))
					  		       :gfats (read-string (:gfats req-params))
					  		       :gproteins (read-string (:gproteins req-params))
					  		       :gcarbohydrates (read-string (:gcarbohydrates req-params))
					  		       :gwater (read-string (:gwater req-params))
					  		       :gdesc (:gdesc req-params)})
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idmeal req-params))") match n-[r:`meal-has-vitamin`]-() return ID(r)")))
			   (map-keys-to-str req-params))
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idmeal req-params))") match n-[r:`meal-has-mineral`]-() return ID(r)")))
			   (map-keys-to-str req-params))))
  (read-all-meals))

(defn delete-meal
  "Delete meal from neo4j database"
  [id]
  (n4j/delete-node "meal" id)
  (read-all-meals))
