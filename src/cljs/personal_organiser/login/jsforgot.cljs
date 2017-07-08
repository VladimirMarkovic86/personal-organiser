(ns personal-organiser.login.jsforgot
  (:require [domina :as dom]
	    [goog.events :as events]
            [personal-organiser.login.login-validators :refer [login-credential-errors]]))

(defn prepend-errors
  "Prepend error"
  [errors]
  (doseq [error errors]
	 (dom/prepend! (dom/by-id "error-msgs")
		       (str "<div class=\"help\">"error"</div>"))))

(def val-email false)

(defn onready
  "Swap updated content from response with current"
  [content]
  (if (and (= (aget (aget content "currentTarget") "readyState") 4)
	   (= (aget (aget content "currentTarget") "status") 200))
	(if (= (aget (aget content "currentTarget") "responseText") "no-exist")
	    (do (def val-email false)
		(prepend-errors ["Email does not exist in database"]))
	    (def val-email true))
))

(defn check-email
  "Delete grocery XMLHttpReqest"
  [email]
  (dom/destroy! (dom/by-class "help"))
  (let [xmlhttp (js/XMLHttpRequest.)]
	 (aset xmlhttp "onreadystatechange" onready)
	 (.open xmlhttp "POST" (str "/check-email/"email) true)
	 (.send xmlhttp)))

(defn validate-form
  "Validate form"
  []
  (do (dom/destroy! (dom/by-class "help"))
  (if-let [errors (:email (login-credential-errors {:email (dom/value (dom/by-id "email"))}))]
	(do (prepend-errors errors)
	    false)
	val-email)))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [forgot-form (dom/by-id "forgot-form")]
	(set! (.-onsubmit forgot-form) validate-form)
	(events/listen (dom/by-id "email")
		      "change"
		      (fn []
			  (check-email (dom/value (dom/by-id "email"))))))))
