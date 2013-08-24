(ns personal-organiser.server
  "Requests and responses on server"
  (:use compojure.core
	(sandbar stateful-session))
  (:require [compojure.handler :as handler]
	    [compojure.route :as route]
	    [personal-organiser.grocery.grocery-view :as gv]
	    [personal-organiser.grocery.grocery-controller :as gc]
	    [personal-organiser.organism.organism-view :as ov]
	    [personal-organiser.organism.organism-controller :as oc]
	    [personal-organiser.meal.meal-view :as mlv]
	    [personal-organiser.meal.meal-controller :as mlc]
	    [personal-organiser.login.login-view :as lv]
	    [personal-organiser.login.login-controller :as lc]
	    [personal-organiser.planishrane.planishrane-view :as plv]
	    [personal-organiser.planishrane.planishrane-controller :as plc]
	    [personal-organiser.neo4j :as n4j]
	    [ring.adapter.jetty :as jetty]))

(defn is-logged-in
  "Checks if user is logged in"
  [response-fn]
  (if (= (session-get :organism-id) nil)
      (lv/login)
      (do (session-pop! :login-try 1)
	  response-fn)))

(defn is-not-logged-in
  "Checks if user is logged in"
  [response-fn]
  (if (= (session-get :organism-id) nil)
      response-fn
      (lv/home)))

;; defroutes macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned.
(defroutes app-routes
  ; to serve document root address
  (GET "/read-all-groceries"
    []
    (is-logged-in (gv/read-all-groceries)))
  (GET "/grocery-nav"
    []
    (is-logged-in (gv/grocery-nav)))
  (GET "/create-grocery"
    []
    (is-logged-in (gv/create-grocery)))
  (POST "/save-grocery"
    request
    (is-logged-in (gc/save-grocery (:params request))))
  (GET "/edit-grocery"
    [id]
    (is-logged-in (gv/edit-grocery (n4j/read-node (read-string id)))))
  (POST "/update-grocery"
    request
    (is-logged-in (gc/update-grocery (:params request))))
  (GET "/delete-grocery"
    [id]
    (is-logged-in (gc/delete-grocery (read-string id))))
  (GET "/read-organism"
    [id]
    (is-logged-in (ov/read-organism (n4j/read-node (read-string id)))))
  (GET "/organism-nav"
    []
    (is-logged-in (ov/organism-nav)))
  (GET "/create-organism"
    []
    (do (session-pop! :login-try 1)
	(is-not-logged-in (ov/create-organism))))
  (POST "/save-organism"
    request
    (do (is-not-logged-in (oc/save-organism (:params request)))
	(is-logged-in (lv/home))))
  (GET "/edit-organism"
    [id]
    (is-logged-in (ov/edit-organism (n4j/read-node (read-string id)))))
  (POST "/update-organism"
    request
    (is-logged-in (oc/update-organism (:params request))))
  (GET "/create-meal"
    []
    (is-logged-in (mlv/create-meal)))
  (POST "/save-meal"
    request
    (is-logged-in (mlc/save-meal (:params request))))
  (GET "/read-all-meals"
    []
    (is-logged-in (mlv/read-all-meals)))
  (GET "/meal-nav"
    []
    (is-logged-in (mlv/meal-nav)))
  (GET "/delete-meal"
    [id]
    (is-logged-in (mlc/delete-meal (read-string id))))
  (GET "/edit-meal"
    [id]
    (is-logged-in (mlv/edit-meal (n4j/read-node (read-string id)))))
  (POST "/update-meal"
    request
    (is-logged-in (mlc/update-meal (:params request))))
  (GET "/home"
    []
    (is-logged-in (lv/home)))
  (GET "/login"
    []
    (is-logged-in (lv/home)))
  (GET "/logout"
    []
    (do (destroy-session!)
	(is-logged-in (lv/home))))
  (POST "/login"
    request
    (do (lc/authenticate-user (:params request))
	(is-logged-in (lv/home))))
  (GET "/planishrane"
    []
    (is-logged-in (plv/process-template)))
  (POST "/planishrane"
    request
    (is-logged-in (plc/process (:params request))))
  ; to serve static pages saved in resources/public directory
  (route/resources "/")
  ; if page is not found
  (route/not-found "Page not found"))

;; site function creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler (-> (handler/site app-routes)
		 wrap-stateful-session))

(defn run-server
  "Run jetty server"
  []
  (jetty/run-jetty handler {:port 5000 :join? false}))
