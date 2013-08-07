(ns personal-organiser.grocery.grocery-validators
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]))

(defn create-grocery-errors [params]
  (validate params
	    [:gname present? "Name can't be empty."]
	    [:gcalories present? "Calories can't be empty."]
	    [:gfats present? "Fats can't be empty."]
	    [:gproteins present? "Proteins can't be empty."]
	    [:gcarbohydrates present? "Carbohydrates can't be empty."]
	    [:gwater present? "Water can't be empty."]
	    [:gdesc present? "Description can't be empty."]))
