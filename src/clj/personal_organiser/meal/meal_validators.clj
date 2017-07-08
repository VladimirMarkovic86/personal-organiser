(ns personal-organiser.meal.meal-validators
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]
	    [clojure.test :refer :all]))

(with-test
(defn create-meal-errors [params]
  (validate params
	    [:mlname present? "Name can't be empty."]
	    [:mltype present? "Meal type can't be empty."]
	    [:mldesc present? "Description can't be empty."]))
 (is (= nil (create-meal-errors {:mlname "Meal name"
				 :mltype "Meal type"
				 :mldesc "Meal description"})))
 (is (= {:mlname ["Name can't be empty."]
	 :mltype ["Meal type can't be empty."]
	 :mldesc ["Description can't be empty."]} (create-meal-errors {})))
)
