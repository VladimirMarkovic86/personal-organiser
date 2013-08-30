(ns personal-organiser.login.login-controller
  (:use (sandbar stateful-session))
  (:require [personal-organiser.neo4j :as n4j]))

(defn authenticate-user
  "Authenticate user if exists in databse"
  [req-params]
  (let [email (:email req-params)
	password (:password req-params)]
    (doseq [[id first-name last-name gender activity diet birthday weight height]
	    (:data (n4j/cypher-query (str "start n=node("(clojure.string/join ","(n4j/get-type-indexes "organism"))")
					   where n.oemail? = \""email"\" and
						 n.opassword? = \""password"\"
					   return ID(n),
						  n.`ofirst-name`,
						  n.`olast-name`,
						  n.ogender,
						  n.oactivity,
						  n.odiet,
						  n.obirthday,
						  n.oweight,
						  n.oheight")))]
	(session-put! :organism-id id)
	(session-put! :first-name first-name)
	(session-put! :last-name last-name)
	(session-put! :email email)
	(session-put! :gender gender)
	(session-put! :activity activity)
	(session-put! :diet diet)
	(session-put! :birthday birthday)
	(session-put! :weight weight)
	(session-put! :height height))
	(session-put! :login-try 1)))

(defn check-email
  "Checks if email exists"
  [email]
  (if (= (:data (n4j/cypher-query (str "start n=node("(clojure.string/join ","(n4j/get-type-indexes "organism"))")"
			    "where n.oemail? = \""email"\""
			    "return ID(n)")))
     [])
	"no-exist"
	"exist"))
