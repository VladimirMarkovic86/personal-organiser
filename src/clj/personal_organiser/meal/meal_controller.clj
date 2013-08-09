(ns personal-organiser.meal.meal-controller
  (:require [personal-organiser.meal.meal-validators :refer [create-meal-errors]]
	    [personal-organiser.meal.meal-view :refer [read-all-meals]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :refer [map-keys-to-str create-rels-for-node update-rels-for-node]]))

(defn save-meal
  "Save meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:mlname (:mlname req-params)
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg (:mlimg req-params)})]
    (str "Meal errors: " meal-errors)
    (let [node-id (n4j/create-node "meal" {:mlname (:mlname req-params)
;;						 :mlcalories (meal-cal-calc ingredients)
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg (:mlimg req-params)})]
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*) where n.type! = 'vitamin' return n.idx"))))
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
    (str "Meal errors: " meal-errors)
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
