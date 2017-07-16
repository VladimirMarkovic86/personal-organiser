(ns personal-organiser.grocery.jsgrocery
  (:require [domina :as dom]
            [domina.css :as domcss]
            [domina.xpath :as domxpath]
            [goog.events :as events]
            [goog.events.KeyCodes :as key-codes]
            [goog.events.KeyHandler :as key-handler]
            [domina.events :as evts]
            [clojure.string :as cstring]
    ;[personal-organiser.utils.jsutils :as utils]
    ))

;(defn validate-form
;      "Validate form"
;      []
;      (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value'],input[id^='g'],textarea")))
;            sel-radio-origin (dom/nodes (domcss/sel "input[name='gorigin']:checked"))
;            valid (atom [])]
;           (dom/destroy! (dom/by-class "help"))
;           (doseq [sel-node sel-nodes]
;                  (swap! valid conj (utils/valid-if-field-empty sel-node))
;                  (if (= (:type sel-node) "number")
;                    (swap! valid conj (utils/valid-if-field-number sel-node))))
;           (swap! valid
;                  conj
;                  (utils/is-radio-checked sel-radio-origin "tdgorigin" "origin"))
;           (every? true? @valid)))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (let [grocery-form (dom/by-id "grocery-form")
          sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value']")))]
      ;(set! (.-onsubmit grocery-form) validate-form)
      ;(utils/numeric-field (dom/by-id "gcalories"))
      ;(utils/numeric-field (dom/by-id "gfats"))
      ;(utils/numeric-field (dom/by-id "gproteins"))
      ;(utils/numeric-field (dom/by-id "gcarbohydrates"))
      ;(utils/numeric-field (dom/by-id "gwater"))
      ;(doseq [sel-node sel-nodes]
      ;       (utils/numeric-field (dom/by-id (:id sel-node))))
      )))
