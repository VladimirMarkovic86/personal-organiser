(ns personal-organiser.grocery.validators
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]))

(defn create-grocery-errors [gname gcalories gfats gproteins gcarbohydrates gwater gdesc]
  (validate {:gname gname :gcalories gcalories :gfats gfats :gproteins gproteins :gcarbohydrates gcarbohydrates :gwater gwater :gdesc gdesc}
	    [:gname present? "Name can't be empty."]
	    [:gcalories present? "Calories can't be empty."]
	    [:gfats present? "Fats can't be empty."]
	    [:gproteins present? "Proteins can't be empty."]
	    [:gcarbohydrates present? "Carbohydrates can't be empty."]
	    [:gwater present? "Water can't be empty."]
	    [:gdesc present? "Description can't be empty."]))
