(ns personal-organiser.login.login-validators
  (:require [valip.core :refer [validate]]
	    [valip.predicates :refer [present? matches email-address?]]
	    [clojure.test :refer :all]))

(with-test
(defn login-credential-errors
  "Credentials for login form"
  [params]
  (validate params
	    [:email present? "Email can't be empty."]
	    [:email email-address? "Email not in valid format."]
	    [:password present? "Password can't be empty."]))
 (is (= nil (login-credential-errors {:email "email@mail.com" :password "present"})))
 (is (= {:password ["Password can't be empty."],
	 :email ["Email can't be empty."
		 "Email not in valid format."]} (login-credential-errors {:email ""
									  :password ""})))
 (is (= {:email ["Email not in valid format."]} (login-credential-errors {:email "email@mail"
									  :password "present"})))
)
