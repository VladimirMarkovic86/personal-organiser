(ns personal-organiser.meal.meal-validators
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]))

(defn create-meal-errors [params]
  (validate params
	    [:mlname present? "Name can't be empty."]
	    [:mltype present? "Meal type can't be empty."]
	    [:mldesc present? "Description can't be empty."]))
