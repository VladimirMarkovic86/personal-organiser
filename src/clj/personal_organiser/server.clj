(ns personal-organiser.server
  (:use compojure.core)
  (:require [compojure.handler :as handler]
	    [compojure.route :as route]
	    [personal-organiser.grocery :as gry]
	    [personal-organiser.neo4j :as n4j]
	    [ring.adapter.jetty :as jetty]))

;; defroutes macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned.
(defroutes app-routes
  ; to serve document root address
  (GET "/read-all-grocery" [] (gry/read-all-grocery)) ;;(ring.util.response/redirect "http://localhost:5000/create-grocery.html"))
  (GET "/food" [] (gry/food))
  (GET "/create-grocery" [] (gry/create-grocery))
  (POST "/save-grocery" request (gry/save-grocery (:params request)))
  (GET "/edit-grocery" [id] (gry/edit-grocery (n4j/read-node (read-string id))))
  (POST "/update-grocery" request (gry/update-grocery (:params request)))
  (GET "/delete-grocery" [id] (gry/delete-grocery (read-string id)))
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
