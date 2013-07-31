(ns personal-organiser.core
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
  (POST "/save-grocery" [gname gcalories gfats gproteins gcarbohydrates gwater gdesc
vid2 vvalue2
vid3 vvalue3
vid4 vvalue4
vid5 vvalue5
vid8 vvalue8
vid9 vvalue9
vid11 vvalue11
vid12 vvalue12
vid13 vvalue13
vid14 vvalue14
vid15 vvalue15
vid16 vvalue16
vid17 vvalue17
vid19 vvalue19
vid20 vvalue20
vid21 vvalue21
vid22 vvalue22
vid23 vvalue23
vid24 vvalue24
vid25 vvalue25
vid26 vvalue26
vid27 vvalue27
mid32 mvalue32
mid33 mvalue33
mid34 mvalue34
mid35 mvalue35
mid36 mvalue36
mid37 mvalue37
mid38 mvalue38
mid39 mvalue39
mid40 mvalue40
mid41 mvalue41
mid42 mvalue42
mid43 mvalue43
mid28 mvalue28
mid30 mvalue30
mid31 mvalue31] (gry/save-grocery gname gcalories gfats gproteins gcarbohydrates gwater gdesc
[[vid2 vvalue2]
[vid3 vvalue3]
[vid4 vvalue4]
[vid5 vvalue5]
[vid8 vvalue8]
[vid9 vvalue9]
[vid11 vvalue11]
[vid12 vvalue12]
[vid13 vvalue13]
[vid14 vvalue14]
[vid15 vvalue15]
[vid16 vvalue16]
[vid17 vvalue17]
[vid19 vvalue19]
[vid20 vvalue20]
[vid21 vvalue21]
[vid22 vvalue22]
[vid23 vvalue23]
[vid24 vvalue24]
[vid25 vvalue25]
[vid26 vvalue26]
[vid27 vvalue27]] [[mid32 mvalue32]
[mid33 mvalue33]
[mid34 mvalue34]
[mid35 mvalue35]
[mid36 mvalue36]
[mid37 mvalue37]
[mid38 mvalue38]
[mid39 mvalue39]
[mid40 mvalue40]
[mid41 mvalue41]
[mid42 mvalue42]
[mid43 mvalue43]
[mid28 mvalue28]
[mid30 mvalue30]
[mid31 mvalue31]]))
  (GET "/edit-grocery" [id] (gry/edit-grocery (n4j/read-node (read-string id))))
  (POST "/update-grocery" [groceryid gname gcalories gfats gproteins gcarbohydrates gwater gdesc
vid2 vvalue2
vid3 vvalue3
vid4 vvalue4
vid5 vvalue5
vid8 vvalue8
vid9 vvalue9
vid11 vvalue11
vid12 vvalue12
vid13 vvalue13
vid14 vvalue14
vid15 vvalue15
vid16 vvalue16
vid17 vvalue17
vid19 vvalue19
vid20 vvalue20
vid21 vvalue21
vid22 vvalue22
vid23 vvalue23
vid24 vvalue24
vid25 vvalue25
vid26 vvalue26
vid27 vvalue27
mid32 mvalue32
mid33 mvalue33
mid34 mvalue34
mid35 mvalue35
mid36 mvalue36
mid37 mvalue37
mid38 mvalue38
mid39 mvalue39
mid40 mvalue40
mid41 mvalue41
mid42 mvalue42
mid43 mvalue43
mid28 mvalue28
mid30 mvalue30
mid31 mvalue31] (gry/update-grocery groceryid gname gcalories gfats gproteins gcarbohydrates gwater gdesc[[vid2 vvalue2]
[vid3 vvalue3]
[vid4 vvalue4]
[vid5 vvalue5]
[vid8 vvalue8]
[vid9 vvalue9]
[vid11 vvalue11]
[vid12 vvalue12]
[vid13 vvalue13]
[vid14 vvalue14]
[vid15 vvalue15]
[vid16 vvalue16]
[vid17 vvalue17]
[vid19 vvalue19]
[vid20 vvalue20]
[vid21 vvalue21]
[vid22 vvalue22]
[vid23 vvalue23]
[vid24 vvalue24]
[vid25 vvalue25]
[vid26 vvalue26]
[vid27 vvalue27]] [[mid32 mvalue32]
[mid33 mvalue33]
[mid34 mvalue34]
[mid35 mvalue35]
[mid36 mvalue36]
[mid37 mvalue37]
[mid38 mvalue38]
[mid39 mvalue39]
[mid40 mvalue40]
[mid41 mvalue41]
[mid42 mvalue42]
[mid43 mvalue43]
[mid28 mvalue28]
[mid30 mvalue30]
[mid31 mvalue31]]))
  (GET "/delete-grocery" [id] (gry/delete-grocery (read-string id)))
  ; to serve static pages saved in resources/public directory
  (route/resources "/")
  ; if page is not found
  (route/not-found "Page not found"))

;; site function creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler
  (handler/site app-routes))

(defn -main [& args]
	(n4j/connect-neo4j)
	(jetty/run-jetty handler {:port 5000}))
