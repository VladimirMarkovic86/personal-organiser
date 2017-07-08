(ns personal-organiser.server
  "Requests and responses on server"
  (:use compojure.core
        (sandbar stateful-session)
        [ring.middleware.params]
        [ring.middleware.multipart-params])
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

;; defroutes macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned.
(defroutes app-routes
           ; to serve document root address
           (GET "/read-all-groceries"
                []
             (lc/is-logged-in (gv/read-all-groceries)))
           (GET "/grocery-nav"
                []
             (lc/is-logged-in (gv/grocery-nav)))
           (GET "/create-grocery"
                []
             (lc/is-logged-in (gv/create-grocery)))
           (POST "/save-grocery"
                 request
             (lc/is-logged-in (gc/save-grocery (:params request))))
           (GET "/edit-grocery/:id"
                [id]
             (lc/is-logged-in (gv/edit-grocery (n4j/read-node (read-string id)))))
           (POST "/update-grocery"
                 request
             (lc/is-logged-in (gc/update-grocery (:params request))))
           (DELETE "/delete-grocery/:id"
                   [id]
             (lc/is-logged-in (gc/delete-grocery (read-string id))))
           (GET "/read-organism/:id"
                [id]
             (lc/is-logged-in (ov/read-organism (n4j/read-node (read-string id)))))
           (GET "/organism-nav"
                []
             (lc/is-logged-in (ov/organism-nav)))
           (GET "/create-organism"
                []
             (do (session-pop! :login-try 1)
                 (lc/is-not-logged-in (ov/create-organism))))
           (POST "/save-organism"
                 request
             (do (lc/is-not-logged-in (oc/save-organism (:params request)))
                 (lc/is-logged-in (lv/home))))
           (GET "/delete-organism/:id"
                [id]
             (if (= (str id) (str (session-get :organism-id)))
               (do (lc/is-logged-in (oc/delete-organism (read-string id)))
                   (destroy-session!)
                   (lc/is-logged-in (lv/home)))
               (lc/is-logged-in (lv/home))))
           (GET "/edit-organism/:id"
                [id]
             (lc/is-logged-in (ov/edit-organism (n4j/read-node (read-string id)))))
           (POST "/update-organism/:idorganism"
                 request
             (lc/is-logged-in (oc/update-organism (:params request))))
           (GET "/create-meal"
                []
             (lc/is-logged-in (mlv/create-meal)))
           (POST "/save-meal"
                 request
             (lc/is-logged-in (mlc/save-meal (:params request))))
           (GET "/read-all-meals"
                []
             (lc/is-logged-in (mlv/read-all-meals)))
           (GET "/meal-nav"
                []
             (lc/is-logged-in (mlv/meal-nav)))
           (DELETE "/delete-meal/:id"
                   [id]
             (lc/is-logged-in (mlc/delete-meal (read-string id))))
           (GET "/edit-meal/:id"
                [id]
             (lc/is-logged-in (mlv/edit-meal (n4j/read-node (read-string id)))))
           (POST "/update-meal"
                 request
             (lc/is-logged-in (mlc/update-meal (:params request))))
           (GET "/home"
                []
             (lc/is-logged-in (lv/home)))
           (GET "/login"
                []
             (lc/is-logged-in (lv/home)))
           (GET "/logout"
                []
             (do (destroy-session!)
                 (lc/is-logged-in (lv/home))))
           (POST "/login"
                 request
             (do (lc/authenticate-user (:params request))
                 (lc/is-logged-in (lv/home))))
           (GET "/planishrane"
                []
             (lc/is-logged-in (plv/process-template)))
           (POST "/planishrane-results"
                 request
             (lc/is-logged-in (plc/process (:params request))))
           (POST "/planishrane-final"
                 request
             (lc/is-logged-in (plc/final (:params request))))
           (POST "/check-email/:email"
                 [email]
             (lc/is-not-logged-in (lc/check-email email)))
           (GET "/forgot-password"
                []
             (lc/is-not-logged-in (lv/forgot-password)))
           (POST "/send-mail"
                 [email]
             (do (lc/is-not-logged-in (oc/send-mail email))
                 (lc/is-logged-in (lv/home))))
           ; to serve static pages saved in resources/public directory
           (route/resources "/")
           ; if page is not found
           (route/not-found (lv/page-not-found "Page not found"))
           ;  (GET "/:url/:id"
           ;    request
           ;    (println request))
           ;  (POST "/:url/:id"
           ;    request
           ;    (println request))
           )

;; site function creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler (-> (handler/site app-routes)
                 wrap-stateful-session
                 wrap-params
                 wrap-multipart-params))

(defn run-server
  "Run jetty server"
  []
  (jetty/run-jetty handler {:port 5000 :join? false}))
