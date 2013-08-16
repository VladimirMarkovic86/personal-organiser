(ns personal-organiser.meal.jsmeal
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [domina.xpath :as domxpath]
	    [domina.events :as evts]
	    [clojure.string :as cstring]))

;;(defn parse-number
;;  "Reads a number from a string. Returns nil if not a number."
;;  [s]
;;  (if (re-find #"^-?\d+\.?\d*$" s)
;;   (js/parseInt s)))

(defn valid-if-field-empty
  "Validate if field is empty"
  [field]
  (if (> (count (dom/value (dom/by-id (:id field)))) 0)
    true
    (do (dom/prepend! (dom/by-id (str "td"(:id field)))
      (str "<div class=\"help\">Value for field "(dom/text (dom/by-id (str "l"(:id field))))" is required</div>"))
      false)))

;;(defn is-value-num [value]
;;  (number? (parse-number value)))

(defn valid-if-field-number
  "Validate if field is number"
  [field]
  (if (and (not (> (count (dom/value (dom/by-id (:id field)))) 0)) (= "number" (:type field)))
;;  (is-value-num (dom/value (dom/by-id (:id field))))
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
;;	  (swap! valid conj (valid-if-field-number sel-node))
)
	(every? true? @valid)))

(defn calc-new-row-index
  ""
  [ind]
  (let [lst-ind ((cstring/split ind ";") (- (count (cstring/split ind ";")) 1))]
    (+ (js/parseInt lst-ind) 1)))

(defn read-change-row-index
  ""
  [ing-indexes]
  (let [new-row-index (calc-new-row-index (dom/value ing-indexes))]
    (dom/set-attr! ing-indexes "value" (str (dom/value ing-indexes)";"new-row-index))
    new-row-index))

(defn replace-string
  ""
  [acc reg]
  (cstring/replace acc (reg 0) (reg 1)))

(defn change-row-index
  "Read row indexes, append and return new one"
  [row-index ing-row]
  (let [row-content-as-string (dom/html ing-row)]
    (reduce replace-string row-content-as-string [["ingredient1" (str "ingredient" row-index)]
						  ["igrams1" (str "igrams" row-index)]
						  ["iquantity1" (str "iquantity" row-index)]
						  ["iremove1" (str "iremove" row-index)]])))

(defn remove-ingredient-row
  ""
  [row-index ing-indexes]
  (dom/destroy! (dom/by-id (str "ingredient-row"row-index)))
  (dom/set-attr! ing-indexes
		 "value"
		 (cstring/replace
		   (cstring/replace
		     (cstring/replace (str ";"(dom/value ing-indexes)";")
				      (str ";"row-index";")
				      ";") #";$" "") #"^;" "")))

(defn add-ingredient-row
  "Add ingredient row"
  [ing-indexes ing-row ing-table]
  (let [row-index (read-change-row-index ing-indexes)]
	(dom/append! ing-table (str "<tr id=\"ingredient-row"row-index"\">"(change-row-index row-index ing-row)"</tr>"))
	(evts/listen! (dom/by-id (str "iremove" row-index)) :click (fn [] (remove-ingredient-row row-index ing-indexes)))
))

(defn remove-click-listener
  ""
  [ing-indexes]
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "a[id*='remove']")))]
	  (doseq [sel-node sel-nodes]
	    (evts/listen! (dom/by-id (:id sel-node)) :click (fn [] (remove-ingredient-row (js/parseInt (cstring/replace (:id sel-node) "iremove" "")) ing-indexes)))
	)))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [;meal-form (.getElementById js/document "meal-form")
	  ing-indexes (dom/by-id "ingredient-indexes")
	  ing-row (dom/by-id "ingredient-row1")
	  ing-table (dom/by-class "ingredients-tbody")]
;	(set! (.-onsubmit meal-form) validate-form)
	(evts/listen! (dom/by-id "add-ingredient") :click (fn [] (add-ingredient-row ing-indexes ing-row ing-table)))
	(remove-click-listener ing-indexes)
)))

;; (set! (.-onload js/window) init)
