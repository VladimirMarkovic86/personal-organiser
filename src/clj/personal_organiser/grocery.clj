(ns personal-organiser.grocery
  (:require [personal-organiser.grocery.validators :refer [create-grocery-errors]]
	    [personal-organiser.neo4j :as n4j]))

(defn create-grocery [gname gcalories gfats gproteins gcarbohydrates gwater gdesc]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    ((n4j/create-node "grocery" {:gname gname
			 :gcalories gcalories
			 :gfats gfats
			 :gproteins gproteins
			 :gcarbohydrates gcarbohydrates
			 :gwater gwater
			 :gdesc gdesc})
	(str "grocery inserted"))))

;; (str "Name: " gname " Calories: " gcalories " Fats:  " gfats " Proteins: " gproteins " Carbohydrates: " gcarbohydrates " Water: " gwater " Description: " gdesc)
