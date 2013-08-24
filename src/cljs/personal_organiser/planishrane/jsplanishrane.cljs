(ns personal-organiser.planishrane.jsplanishrane
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [goog.events :as events]
	    [goog.events.KeyCodes :as key-codes]
	    [goog.events.KeyHandler :as key-handler]
	    [domina.events :as evts]))

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
    (> (count (dom/value (dom/by-id (:id field)))) 0)
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

(defn validate-form
  "Validate form"
  []
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='training-duration']")))
	sel-radio-meal (dom/nodes (domcss/sel "input[name*='training-meal']:checked"))
	valid (atom [])]
	(dom/destroy! (dom/by-class "help"))
	(doseq [sel-node sel-nodes]
	       (swap! valid
		      conj
		      (valid-if-field-empty sel-node))
	       (if (= (:type sel-node) "number")
	           (swap! valid
			  conj
			  (is-value-num (dom/value (dom/by-id (:id sel-node)))))))
	(swap! valid
	       conj
	       (not (= sel-radio-meal ())))
	(if (every? true? @valid)
	    true
	    (do (dom/prepend! (dom/by-id "error-msgs")
			      "<div class=\"help\">Value for every training duration is required</div><div class=\"help\">Select one option for training in time of which meal</div>")
		false))
	(every? true? @valid)))

(defn disable-element
  "Disable element on form"
  [id]
  (do (dom/remove-attr! (dom/by-id id) "checked")
      (dom/set-attr! (dom/by-id id) "disabled" "disabled")))

(defn change-no-training
  "Change form elements for no training"
  [index]
  (do (disable-element (str "training-meal-breakfast" index))
      (disable-element (str "training-meal-lunch" index))
      (disable-element (str "training-meal-dinner" index))
      (dom/set-attr! (dom/by-id (str "training-duration" index)) "value" "0")
      (dom/set-attr! (dom/by-id (str "training-duration" index)) "readonly" "readonly")
      (dom/remove-attr! (dom/by-id (str "training-meal-no" index)) "disabled")
      (dom/set-attr! (dom/by-id (str"training-meal-no" index)) "checked" "checked")))

(defn change-training
  "Change form elements for training"
  [index]
  (do (disable-element (str "training-meal-no" index))
      (dom/set-attr! (dom/by-id (str "training-meal-breakfast" index)) "checked" "checked")
      (dom/remove-attr! (dom/by-id (str "training-meal-breakfast" index)) "disabled")
      (dom/remove-attr! (dom/by-id (str "training-meal-lunch" index)) "disabled")
      (dom/remove-attr! (dom/by-id (str "training-meal-dinner" index)) "disabled")
      (dom/remove-attr! (dom/by-id (str "training-duration" index)) "readonly")))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [planishrane-form (dom/by-id "planishrane-form")
	  sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='training-duration']")))]
	(set! (.-onsubmit planishrane-form) validate-form)
	(doseq [index [1 2 3 4 5 6 7]]
	   (dom/set-attr! (dom/by-id (str "training-meal-no" index))
			  "checked" "checked")
	   (evts/listen! (dom/by-id (str "training-coef"index))
			 :change
			 (fn [] (if (= (dom/value (dom/by-id (str "training-coef"index))) "0")
				    (change-no-training index)
				    (change-training index)))))
	(doseq [sel-node sel-nodes]
		(numeric-field (dom/by-id (:id sel-node)))))))
