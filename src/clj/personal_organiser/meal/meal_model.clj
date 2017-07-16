(ns personal-organiser.meal.meal-model)

(def meal-model-keys [:mlname
                      :mlcalories
                      :mltype
                      :mltype-number
                      :mldesc
                      :mlimg])

(def meal-model-keys-number [:mlcalories])

(defn meal-breakfast [] "Breakfast")

(defn meal-lunch [] "Lunch")

(defn meal-dinner [] "Dinner")
