(ns personal-organiser.organism.jsorganism
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [goog.events :as events]
	    [goog.events.KeyCodes :as key-codes]
	    [goog.events.KeyHandler :as key-handler]
	    [valip.core :refer [validate]]
	    [valip.predicates :refer [matches]]
            [personal-organiser.organism.organism-validators :refer [create-organism-errors]]))

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
      (do (dom/prepend! (dom/by-id (str "tdo"msg-selector))
                                   (str "<div class=\"help\">Select one option for " msg-selector "</div>"))
	  false)
	true))

(defn validate-email
  "Validate email address"
  [email]
  (if-let [errors (:oemail (create-organism-errors {:oemail email}))]
    (do (dom/prepend! (dom/by-id "tdoemail")
		      (str "<div class=\"help\">"(first errors)"</div>"))
	false)
    true))

(defn psw-confirmation
  "Check equality of password and confirm password in organism form"
  [psw confirm-psw]
  (if (= (dom/value psw) (dom/value confirm-psw))
      true
      (do (dom/prepend! (dom/by-id "tdoconfirm-password")
                        "<div class=\"help\">Password and confirm password<br/> must have same value</div>")
	  false)))

(defn validate-password
  "Validate password"
  [password]
  (if-let [errors (:password (validate {:password password}
			    [:password (matches #"^(?=.*\d).{4,8}$") "Password should contain at least<br/>one number, period and<br/>length should be 4 to 8 chars."]))]
    (do (dom/prepend! (dom/by-id "tdopassword") (str "<div class=\"help\">"(first errors)"</div>"))
      false)
    true))

(defn validate-form
  "Validate form"
  []
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value'],input[id^='o']")))
	sel-radio-gender (dom/nodes (domcss/sel "input[name='ogender']:checked"))
	sel-radio-activity (dom/nodes (domcss/sel "input[name='oactivity']:checked"))
	sel-radio-diet (dom/nodes (domcss/sel "input[name='odiet']:checked"))
	valid (atom [])]
	(dom/destroy! (dom/by-class "help"))
	(doseq [sel-node sel-nodes]
	       (swap! valid
		      conj
		      (valid-if-field-empty sel-node))
	       (if (= (:type sel-node) "number")
	           (swap! valid
			  conj
			  (valid-if-field-number sel-node))))
	(swap! valid
	       conj
	       (is-radio-checked sel-radio-gender "gender"))
	(swap! valid
	       conj
	       (is-radio-checked sel-radio-activity "activity"))
	(swap! valid
	       conj
	       (is-radio-checked sel-radio-diet "diet"))
	(swap! valid
	       conj
	       (psw-confirmation (dom/by-id "opassword")
				 (dom/by-id "oconfirm-password")))
	(swap! valid
	       conj
	       (validate-email (dom/value (dom/by-id "oemail"))))
	(swap! valid
	       conj
	       (validate-password (dom/value (dom/by-id "opassword"))))
	(.focus (dom/by-id "ofirst-name"))
	(every? true? @valid)))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [organism-form (dom/by-id "organism-form")
	  sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value']")))]
	(set! (.-onsubmit organism-form) validate-form)
	(numeric-field (dom/by-id "oheight"))
	(numeric-field (dom/by-id "oweight"))
	(doseq [sel-node sel-nodes]
		(numeric-field (dom/by-id (:id sel-node)))))))
