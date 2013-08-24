(ns personal-organiser.grocery.grocery-validators
  "Validate grocery data from form"
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]))

(defn create-grocery-errors
  "Validate data sent from submited form"
  [params]
  (validate params
	    [:gname present? "Name can't be empty."]
	    [:gcalories present? "Calories can't be empty."]
	    [:gfats present? "Fats can't be empty."]
	    [:gproteins present? "Proteins can't be empty."]
	    [:gcarbohydrates present? "Carbohydrates can't be empty."]
	    [:gwater present? "Water can't be empty."]
	    [:gorigin present? "Select origin of grocery."]
	    [:gdesc present? "Description can't be empty."]))
