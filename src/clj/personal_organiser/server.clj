(ns personal-organiser.server
  (:use compojure.core)
  (:require [compojure.handler :as handler]
	    [compojure.route :as route]
	    [personal-organiser.grocery.grocery-view :as gv]
	    [personal-organiser.grocery.grocery-controller :as gc]
	    [personal-organiser.organism.organism-view :as ov]
	    [personal-organiser.organism.organism-controller :as oc]
	    [personal-organiser.meal.meal-view :as mlv]
	    [personal-organiser.meal.meal-controller :as mlc]
	    [personal-organiser.neo4j :as n4j]
	    [ring.adapter.jetty :as jetty]))

;; defroutes macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned.
(defroutes app-routes
  ; to serve document root address
  (GET "/read-all-groceries"
    []
    (gv/read-all-groceries))
  (GET "/grocery-nav"
    []
    (gv/grocery-nav))
  (GET "/create-grocery"
    []
    (gv/create-grocery))
  (POST "/save-grocery"
    request
    (gc/save-grocery (:params request)))
  (GET "/edit-grocery"
    [id]
    (gv/edit-grocery (n4j/read-node (read-string id))))
  (POST "/update-grocery"
    request
    (gc/update-grocery (:params request)))
  (GET "/delete-grocery"
    [id]
    (gc/delete-grocery (read-string id)))
  (GET "/read-organism"
    [id]
    (ov/read-organism (n4j/read-node (read-string id))))
  (GET "/organism-nav"
    []
    (ov/organism-nav))
  (GET "/create-organism"
    []
    (ov/create-organism))
  (POST "/save-organism"
    request
    (oc/save-organism (:params request)))
  (GET "/edit-organism"
    [id]
    (ov/edit-organism (n4j/read-node (read-string id))))
  (POST "/update-organism"
    request
    (oc/update-organism (:params request)))
  (GET "/create-meal"
    []
    (mlv/create-meal))
  (POST "/save-meal"
    request
    (mlc/save-meal (:params request)))
  (GET "/read-all-meals"
    []
    (mlv/read-all-meals))
  (GET "/meal-nav"
    []
    (mlv/meal-nav))
  (GET "/delete-meal"
    [id]
    (mlc/delete-meal (read-string id)))
  (GET "/edit-meal"
    [id]
    (mlv/edit-meal (n4j/read-node (read-string id))))
  ; to serve static pages saved in resources/public directory
  (route/resources "/")
  ; if page is not found
  (route/not-found "Page not found"))

;; site function creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler
  (handler/site app-routes))

(defn run-server
  "Run jetty server"
  []
  (jetty/run-jetty handler {:port 5000 :join? false}))
