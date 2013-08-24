(ns personal-organiser.meal.meal-controller
  (:use [clojure.string :only [split]]
	[clojure.set :only [difference intersection]])
  (:require [personal-organiser.meal.meal-validators :refer [create-meal-errors]]
	    [personal-organiser.meal.meal-view :refer [read-all-meals]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :refer [map-keys-to-str create-rels-for-node update-rels-for-node delete-rels-for-node]]))

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

(defn add-ingredient-params-update
  "Form ingredient params and add them to vector as map"
  [acc ing-index]
  (conj acc {:grams (read-string (get-value acc ":igrams" ing-index)),
	     :quantity (read-string (get-value acc ":iquantity" ing-index)),
	     :id (read-string ing-index)}))

(defn form-map-of-ingredients
  "Form map of ingredients"
  [req-params ing-indexes]
  (into [] (rest (reduce add-ingredient-params [req-params] ing-indexes))))

(defn form-map-of-ingredients-update
  "Form map of ingredients"
  [req-params ing-indexes]
  (into [] (rest (reduce add-ingredient-params-update [req-params] ing-indexes))))

(defn save-meal
  "Save meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:mlname (:mlname req-params)
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg (:mlimg req-params)})]
    (println (str "Meal errors: " meal-errors))
    (let [node-id (n4j/create-node "meal" {:mlname (:mlname req-params)
						 :mlcalories (meal-cal-calc (form-map-of-ingredients (map-keys-to-str req-params)
												     (split (:ingredient-indexes req-params) #";")))
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg (:mlimg req-params)})]
	(create-rels-for-node node-id
			      (form-map-of-ingredients (map-keys-to-str req-params)
						       (split (:ingredient-indexes req-params) #";"))
			      :meal-has-grocery)))
  (read-all-meals))

(defn update-meal
  "Update meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:mlname (:mlname req-params)
					    :mltype (:mltype req-params)
					    :mldesc (:mldesc req-params)
					    :mlimg (:mlimg req-params)})]
    (println (str "Meal errors: " meal-errors))
    (let [params-map-str (map-keys-to-str req-params)]
	(n4j/update-node
	(n4j/read-node (read-string (:idmeal req-params))) {:mlname (:mlname req-params)
							    :mlcalories (meal-cal-calc (form-map-of-ingredients params-map-str
														(split (:ingredient-indexes req-params) #";")))
							    :mltype (:mltype req-params)
							    :mldesc (:mldesc req-params)
							    :mlimg (:mlimg req-params)})
	;When updating meal data:
	;	- delete existing relations to groceries that were removed from form
	;	- update existing relations with new data
	; 	- create new relations
     (delete-rels-for-node (reduce (fn [vec num] (conj vec (read-string num))) [] (into []
				 (difference (into #{}
						        (split (get params-map-str ":existing-ing-ind") #";"))
					          (into #{}
							(split (get params-map-str ":ingredient-indexes") #";"))))))
     (update-rels-for-node (form-map-of-ingredients-update params-map-str
						    (into []
							  (intersection (into #{}
										   (split (get params-map-str ":existing-ing-ind") #";"))
									     (into #{}
										   (split (get params-map-str ":ingredient-indexes") #";"))))))
     (create-rels-for-node (read-string (:idmeal req-params))
			   (form-map-of-ingredients params-map-str
			   			    (into []
							  (difference (into #{}
						        			 (split (get params-map-str ":ingredient-indexes") #";"))
									   (into #{}
										 (split (get params-map-str ":existing-ing-ind") #";")))))
			   :meal-has-grocery)))
  (read-all-meals))

(defn delete-meal
  "Delete meal from neo4j database"
  [id]
  (n4j/delete-node "meal" id)
  (read-all-meals))
