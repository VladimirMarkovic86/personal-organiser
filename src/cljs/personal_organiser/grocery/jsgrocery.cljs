(ns personal-organiser.grocery.jsgrocery
  (:require [domina :as dom]
[domina.css :as domcss]
[domina.xpath :as domxpath]))

;;(defn parse-number
;;"Reads a number from a string. Returns nil if not a number."
;; [s]
;; (if (re-find #"^-?\d+\.?\d*$" s)
;; (read-string s)))

(defn valid-if-field-empty
"Validate if field is empty"
 [field]
(if (> (count (dom/value (dom/by-id (:id field)))) 0)
true
(do (dom/prepend! (dom/by-id (str "td"(:id field)))
                                  (str "<div class=\"help\">Value for field "(dom/text (dom/by-id (str "l"(:id field))))" is required</div>"))
false)))

;;(defn is-value-num [value]
;; (number? (parse-number value)))

(defn valid-if-field-number
"Validate if field is number"
 [field]
(if (and (not (> (count (dom/value (dom/by-id (:id field)))) 0)) (= "number" (:type field)))
;; (is-value-num (dom/value (dom/by-id (:id field))))
true
(do (dom/prepend! (dom/by-id (str "td"(:id field)))
                                  (str "<div class=\"help\">Not a number " (:type field) "</div>"))
false)))

(defn validate-form
"Validate form"
 []
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value'],input[id^='g'],textarea")))
valid (atom [])]
(dom/destroy! (dom/by-class "help"))
(doseq [sel-node sel-nodes]
(swap! valid conj (valid-if-field-empty sel-node))
;; (swap! valid conj (valid-if-field-number sel-node))
)
(every? true? @valid)))

(defn ^:export init []
  (if (and js/document
(.-getElementById js/document))
    (let [grocery-form (.getElementById js/document "grocery-form")]
(set! (.-onsubmit grocery-form) validate-form))))

;; (set! (.-onload js/window) init)
