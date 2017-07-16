(ns personal-organiser.login.login-controller
  (:use (sandbar stateful-session))
  (:require [personal-organiser.mongo :as mon]
            [personal-organiser.login.login-view :as lv]
            [selmer.parser :as parser]
            [selmer.filters :as filters]
            [markdown.core :refer [md-to-html-string]]
            [ring.util.http-response :refer [content-type ok]]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]))

(defn authenticate-user
  "Authenticate user if exists in databse"
  [req-params]
  (let [email (:email req-params)
        password (:password req-params)]
    (let [organism (mon/find-one (mon/organism-coll) {:oemail email, :opassword password})]
      (session-put! :organism-id (.toString (:_id organism)))
      (session-put! :first-name (:first-name organism))
      (session-put! :last-name (:last-name organism))
      (session-put! :email (:email organism))
      (session-put! :gender (:gender organism))
      (session-put! :activity (:activity organism))
      (session-put! :diet (:diet organism))
      (session-put! :birthday (:birthday organism))
      (session-put! :weight (:weight organism))
      (session-put! :height (:height organism)))
    (session-put! :login-try 1)))

(defn check-email
  "Checks if email exists"
  [email]
  (if (= (mon/find-by-filter (mon/organism-coll) {:oemail email})
         ())
    "no-exist"
    "exist"))

(declare ^:dynamic *app-context*)
(parser/set-resource-path! (clojure.java.io/resource "templates"))
(parser/add-tag! :csrf-field (fn [_ _] (anti-forgery-field)))
(filters/add-filter! :markdown (fn [content] [:safe (md-to-html-string content)]))

(defn render
  "renders the HTML template located relative to resources/templates"
  [template]
  (content-type
    (ok
      (parser/render
        (apply str template)
        {}))
    "text/html; charset=utf-8"))

(defn is-logged-in
  "Checks if user is logged in"
  [response-fn]
  (render (if (= (session-get :organism-id) nil)
            (lv/login)
            (do (session-pop! :login-try 1)
                response-fn))))

(defn is-not-logged-in
  "Checks if user is logged in"
  [response-fn]
  (render (if (= (session-get :organism-id) nil)
            response-fn
            (lv/home))))
