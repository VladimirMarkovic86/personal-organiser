(ns personal-organiser.grocery.grocery-validators
  "Validate grocery data from form"
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]
	    [clojure.test :refer :all]))

(with-test
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
 (is (= {:gname ["Name can't be empty."],
	 :gcalories ["Calories can't be empty."],
	 :gfats ["Fats can't be empty."],
	 :gproteins ["Proteins can't be empty."],
	 :gcarbohydrates ["Carbohydrates can't be empty."],
	 :gwater ["Water can't be empty."],
	 :gorigin ["Select origin of grocery."],
	 :gdesc ["Description can't be empty."]} (create-grocery-errors {})))
 (is (= nil (create-grocery-errors {:gname "gname"
				      :gcalories "15"
				      :gfats "5"
				      :gproteins "3"
				      :gcarbohydrates "7"
				      :gwater "0"
				      :gorigin "All"
				      :gdesc "desc"})))
 (is (= {:gname ["Name can't be empty."],
	 :gcalories ["Calories can't be empty."],
	 :gwater ["Water can't be empty."],
	 :gorigin ["Select origin of grocery."],
	 :gdesc ["Description can't be empty."]} (create-grocery-errors {:gfats "5"
									 :gproteins "3"
									 :gcarbohydrates "7"})))
)
