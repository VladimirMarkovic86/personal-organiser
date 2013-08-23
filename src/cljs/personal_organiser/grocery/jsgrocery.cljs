(ns personal-organiser.grocery.jsgrocery
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
                                   (str "<div class=\"help\">Not a number " (:type field) "</div>"))
	  false)))

(defn is-radio-checked
  "Check if radio button is checked"
  [radio-node msg-selector]
  (if (= radio-node ())
      (do (dom/prepend! (dom/by-id (str "tdg"msg-selector))
                                   (str "<div class=\"help\">Select one option for " msg-selector "</div>"))
	  false)
	true))

(defn validate-form
  "Validate form"
  []
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value'],input[id^='g'],textarea")))
	sel-radio-origin (dom/nodes (domcss/sel "input[name='gorigin']:checked"))
	valid (atom [])]
	(dom/destroy! (dom/by-class "help"))
	(doseq [sel-node sel-nodes]
	       (swap! valid conj (valid-if-field-empty sel-node))
	       (if (= (:type sel-node) "number")
	           (swap! valid conj (valid-if-field-number sel-node))))
	(swap! valid
	       conj
	       (is-radio-checked sel-radio-origin "origin"))
	(every? true? @valid)))

(defn ^:export init []
  (if (and js/document
      (.-getElementById js/document))
      (let [grocery-form (dom/by-id "grocery-form")
	    sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value']")))]
	(set! (.-onsubmit grocery-form) validate-form)
	(numeric-field (dom/by-id "gcalories"))
	(numeric-field (dom/by-id "gfats"))
	(numeric-field (dom/by-id "gproteins"))
	(numeric-field (dom/by-id "gcarbohydrates"))
	(numeric-field (dom/by-id "gwater"))
	(doseq [sel-node sel-nodes]
		(numeric-field (dom/by-id (:id sel-node)))))))
