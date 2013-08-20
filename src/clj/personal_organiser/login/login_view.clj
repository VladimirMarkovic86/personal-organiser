(ns personal-organiser.login.login-view
  (:require [personal-organiser.neo4j :as n4j]
	    [personal-organiser.html-generator :as hg]
	    [net.cgrand.enlive-html :as en]
	    [personal-organiser.utils :refer [nodes-data-to-map]]))

(en/deftemplate login
  (hg/build-html-page [{:temp-sel [:body],
			:comp "public/login/login.html",
			:comp-sel [:div.login]}])
  []
  [:title] (en/content "Login"))

(en/deftemplate home
  (hg/build-html-page [{:temp-sel [:div.maincontent],
			:comp "public/login/home.html",
			:comp-sel [:div.home]}])
  []
  [:title] (en/content "Welcome"))
