(ns personal-organiser.meal.jsmeal
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [domina.xpath :as domxpath]
	    [goog.events :as events]
	    [goog.events.KeyCodes :as key-codes]
	    [goog.events.KeyHandler :as key-handler]
	    [domina.events :as evts]
	    [clojure.string :as cstring]))

(defn numeric-field
  "Allow only digits and one period to be enetered in field"
  [field]
  (events/listen (events/KeyHandler. field) "key" (fn [evt] (when (not (or (= (.-keyCode evt) key-codes/ZERO)
									 (= (.-keyCode evt) key-codes/ONE)
									 (= (.-keyCode evt) key-codes/TWO)
									 (= (.-keyCode evt) key-codes/THREE)
									 (= (.-keyCode evt) key-codes/FOUR)
									 (= (.-keyCode evt) key-codes/FIVE)
									 (= (.-keyCode evt) key-codes/SIX)
									 (= (.-keyCode evt) key-codes/SEVEN)
									 (= (.-keyCode evt) key-codes/EIGHT)
									 (= (.-keyCode evt) key-codes/NINE)
									 (= (.-keyCode evt) key-codes/LEFT)
									 (= (.-keyCode evt) key-codes/RIGHT)
									 (= (.-keyCode evt) key-codes/UP)
									 (= (.-keyCode evt) key-codes/DOWN)
									 (= (.-keyCode evt) key-codes/TAB)
									 (= (.-keyCode evt) key-codes/BACKSPACE)
									 (= (.-keyCode evt) key-codes/DELETE)
									 (= (.-keyCode evt) key-codes/HOME)
									 (= (.-keyCode evt) key-codes/END)
									 (= (.-keyCode evt) key-codes/PERIOD)))
								(.preventDefault evt))
							  (if (and (re-find #"\." (dom/value field))
								   (= (.-keyCode evt) key-codes/PERIOD))
							      (.preventDefault evt)))))

(defn valid-if-field-empty
  "Validate if field is empty"
  [field]
  (if (not (= (:type (dom/attrs (dom/by-id (:id field)))) "radio"))
    (if (> (count (dom/value (dom/by-id (:id field)))) 0)
	true
	(do (dom/prepend! (dom/by-id (str "td"(:id field)))
			  (str "<div class=\"help\">Value for field "(dom/text (dom/by-id (str "l"(:id field))))" is required</div>"))
	    false))
    true))

(defn parse-number
  "Reads a number from a string. Returns nil if not a number."
  [s]
  (if (re-find #"^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$" s)
      (js/parseFloat s)
      s))

(defn is-value-num
  "Is passed value number"
  [value]
  (number? (parse-number value)))

(defn valid-if-field-number
  "Validate if field is number"
  [field]
  (if (is-value-num (dom/value (dom/by-id (:id field))))
      true
      (do (dom/prepend! (dom/by-id (str "td"(:id field)))
                                   (str "<div class=\"help\">Given value is not a number</div>"))
	  false)))

(defn is-radio-checked
  "Check if radio button is checked"
  [radio-node msg-selector]
  (if (= radio-node ())
      (do (dom/prepend! (dom/by-id (str "tdml"msg-selector))
                                   (str "<div class=\"help\">Select one option for " msg-selector "</div>"))
	  false)
	true))

(defn validate-form
  "Validate form"
  []
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id^='ml'],textarea")))
	sel-ingredients (map dom/attrs (dom/nodes (domcss/sel "input[id*='grams'],input[id*='quantity']")))
	sel-radio-type (dom/nodes (domcss/sel "input[name='mltype']:checked"))
	select-nodes (map dom/attrs (dom/nodes (domcss/sel "select[id*='ingredient']")))
	select-repeat (into [] (map dom/value (dom/nodes (domcss/sel "select[id*='ingredient']"))))
	valid (atom [])
	select-valid (atom [])
	ingredient-valid (atom [])]
	(dom/destroy! (dom/by-class "help"))
	(doseq [sel-node sel-nodes]
	  (swap! valid
		 conj
		 (valid-if-field-empty sel-node)))
	(doseq [ingredient sel-ingredients]
	  (swap! ingredient-valid
		 conj
		 (> (count (dom/value (dom/by-id (:id ingredient))))
			   0)))
	(swap! valid
	       conj
	       (every? true? @ingredient-valid))
	(if (not (every? true? @ingredient-valid))
	    (dom/prepend! (dom/by-id "error-msgs")
			  "<div class=\"help\">Value for ingredient grams and quantity is required</div>"))
	(doseq [select select-nodes]
	  (swap! select-valid
		 conj
		 (not (= (dom/value (dom/by-id (:id select)))
			 "- Select -"))))
	(swap! valid
	       conj
	       (every? true? @select-valid))
	(if (not (every? true? @select-valid))
	    (dom/prepend! (dom/by-id "error-msgs")
			      "<div class=\"help\">Choose grocery for every ingredient instead of \"- Select -\"</div>"))
	(swap! valid
	       conj
	       (is-radio-checked sel-radio-type "type"))
	(swap! valid
	       conj
	       (= (count select-repeat) (count (distinct select-repeat))))
	(if (not (= (count select-repeat) (count (distinct select-repeat))))
	    (dom/prepend! (dom/by-id "error-msgs")
			      "<div class=\"help\">Every grocery can be selected only once</div>"))
	(every? true? @valid)))

(defn calc-new-row-index
  "Increment last row index by one and return it"
  [ind]
  (let [lst-ind ((cstring/split ind ";") (- (count (cstring/split ind ";")) 1))]
    (+ (js/parseInt lst-ind) 1)))

(defn read-change-row-index
  "Append new row index in hidden input field of row indexes and return new row index"
  [ing-indexes]
  (let [new-row-index (calc-new-row-index (dom/value ing-indexes))]
    (dom/set-attr! ing-indexes
		   "value"
		   (str (dom/value ing-indexes)";"new-row-index))
    new-row-index))

(defn replace-string
  "Replace substring in html row as string"
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
  "Remove ingredient row"
  [row-index ing-indexes]
  (if (= (count (into [] (map dom/value (dom/nodes (domcss/sel "select[id*='ingredient']"))))) 1)
	(js/alert "Meal should contain at least one ingredient")
	(do (dom/destroy! (dom/by-id (str "ingredient-row"row-index)))
	    (dom/set-attr! ing-indexes
			   "value"
			 (cstring/replace
			   (cstring/replace
			     (cstring/replace (str ";"(dom/value ing-indexes)";")
					      (str ";"row-index";")
					      ";") #";$" "") #"^;" "")))))

(defn add-ingredient-row
  "Add ingredient row"
  [ing-indexes ing-row ing-table]
  (let [row-index (read-change-row-index ing-indexes)]
	(dom/append! ing-table
		     (str "<tr id=\"ingredient-row"row-index"\">"(change-row-index row-index
										   ing-row)"</tr>"))
	(evts/listen! (dom/by-id (str "iremove" row-index))
		      :click
		      (fn []
			  (remove-ingredient-row row-index
						 ing-indexes)))
	(numeric-field (dom/by-id (str "igrams"row-index)))
	(numeric-field (dom/by-id (str "iquantity"row-index)))
))

(defn remove-click-listener
  "Set listener on link remove in create meal form to remove ingredient row"
  [ing-indexes]
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "a[id*='remove']")))]
	  (doseq [sel-node sel-nodes]
	    (evts/listen! (dom/by-id (:id sel-node))
		          :click
			  (fn []
			      (remove-ingredient-row (js/parseInt (cstring/replace (:id sel-node)
										   "iremove"
										   ""))
						     ing-indexes))))))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [meal-form (dom/by-id "meal-form")
	  ing-indexes (dom/by-id "ingredient-indexes")
	  ing-row (dom/by-id "ingredient-row1")
	  ing-table (dom/by-class "ingredients-tbody")]
	(set! (.-onsubmit meal-form) validate-form)
	(evts/listen! (dom/by-id "add-ingredient")
		      :click
		      (fn []
			  (add-ingredient-row ing-indexes
					      ing-row
					      ing-table)))
	(remove-click-listener ing-indexes)
	(numeric-field (dom/by-id "igrams1"))
	(numeric-field (dom/by-id "igrams2"))
	(numeric-field (dom/by-id "iquantity1"))
	(numeric-field (dom/by-id "iquantity2"))
)))
