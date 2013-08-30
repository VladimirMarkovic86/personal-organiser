(ns personal-organiser.organism.jsorganism
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [goog.events :as events]
	    [goog.events.KeyCodes :as key-codes]
	    [goog.events.KeyHandler :as key-handler]
	    [valip.core :refer [validate]]
	    [valip.predicates :refer [matches]]
            [personal-organiser.organism.organism-validators :refer [create-organism-errors]]
	    [personal-organiser.utils.jsutils :as utils]))

(defn onready
  "Swap updated content from response with current"
  [content]
  (if (and (= (aget (aget content "currentTarget") "readyState") 4)
	   (= (aget (aget content "currentTarget") "status") 200))
	(js/alert (aget (aget content "currentTarget") "responseText"))
))

(defn check-email
  "Delete grocery XMLHttpReqest"
  [email]
  (let [xmlhttp (js/XMLHttpRequest.)]
	(aset xmlhttp "onreadystatechange" onready)
	(.open xmlhttp "POST" (str "/check-email/"email) true)
	(.send xmlhttp)))

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
		      (utils/valid-if-field-empty sel-node))
	       (if (= (:type sel-node) "number")
	           (swap! valid
			  conj
			  (utils/valid-if-field-number sel-node))))
	(swap! valid
	       conj
	       (utils/is-radio-checked sel-radio-gender "tdogender" "gender"))
	(swap! valid
	       conj
	       (utils/is-radio-checked sel-radio-activity "tdoactivity" "activity"))
	(swap! valid
	       conj
	       (utils/is-radio-checked sel-radio-diet "tdodiet" "diet"))
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
	(utils/numeric-field (dom/by-id "oheight"))
	(utils/numeric-field (dom/by-id "oweight"))
	(doseq [sel-node sel-nodes]
		(utils/numeric-field (dom/by-id (:id sel-node)))))))
