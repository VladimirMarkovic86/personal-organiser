(ns personal-organiser.grocery.grocery-validators
    "Validate grocery data from form"
    (:require [bouncer.core :as b]
      [bouncer.validators :as v]
      ;[clojure.test :refer :all]
              ))

(defn create-grocery-errors
      "Validate data sent from submitted form"
      [params]
      (b/validate params
                  :gname v/required
                  :gcalories [v/required v/number]
                  :gfats [v/required v/number]
                  :gproteins [v/required v/number]
                  :gcarbohydrates [v/required v/number]
                  :gwater [v/required v/number]
                  :gorigin v/required
                  :gdesc v/required))