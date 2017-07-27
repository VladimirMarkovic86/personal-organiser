(ns personal-organiser.grocery.jsgrocery
  (:require [domina :as dom]
            [domina.css :as domcss]
            [clojure.string :as cstring]
            [personal-organiser.grocery.grocery-validators :as gvalid]
            [personal-organiser.utils.jsutils :as utils]
            ))

(defn validate-form
  "Validate form"
  []
  (dom/destroy! (dom/by-class "help"))
  (if-let [grocery-errors (first (gvalid/create-grocery-errors {:gname          (dom/value (dom/by-id "gname")),
                                                                :gcalories      (utils/parse-number-nan (dom/value (dom/by-id "gcalories"))),
                                                                :gfats          (utils/parse-number-nan (dom/value (dom/by-id "gfats"))),
                                                                :gproteins      (utils/parse-number-nan (dom/value (dom/by-id "gproteins"))),
                                                                :gcarbohydrates (utils/parse-number-nan (dom/value (dom/by-id "gcarbohydrates"))),
                                                                :gwater         (utils/parse-number-nan (dom/value (dom/by-id "gwater"))),
                                                                :gorigin        (:value (first (map dom/attrs (dom/nodes (domcss/sel "input[name='gorigin']:checked"))))),
                                                                :gdesc          (dom/value (dom/by-id "gdesc"))
                                                                }))]
    (do
      (doseq [[k v] grocery-errors]
        (dom/append! (dom/by-class "middle-column")
                     (str "<div class=\"help\">" (dom/text (dom/by-id (str "l" (name k)))) (cstring/replace (first v) (name k) "") "</div>")))
      false)
    true)
  )

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (let [grocery-form (dom/by-id "grocery-form")]
      (set! (.-onsubmit grocery-form) validate-form)
      )))
