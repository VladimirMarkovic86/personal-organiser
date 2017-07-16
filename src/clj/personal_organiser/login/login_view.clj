(ns personal-organiser.login.login-view
  (:use (sandbar stateful-session))
  (:require [personal-organiser.html-generator :as hg]
            [net.cgrand.enlive-html :as en]))

(en/deftemplate login
                (hg/build-html-page [{:temp-sel [:div.topcontent],
                                      :comp     "public/login/login.html",
                                      :comp-sel [:form#login-form]}])
                []
                [:title] (en/content "Login")
                [:div.topcontent] (en/set-attr :class "login")
                [:td#error-msgs] (if (= (session-get :login-try) nil)
                                   (en/set-attr :id "error-msgs")
                                   (en/content {:tag     :div,
                                                :attrs   {:class "help"}
                                                :content "Data not found"}))
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.login.jslogin');"})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.login.jslogin.init();"}))

(en/deftemplate home
                (hg/build-html-page [{:temp-sel [:div.maincontent],
                                      :comp     "public/login/home.html",
                                      :comp-sel [:div.home]}])
                []
                [:title] (en/content "Welcome"))

(en/deftemplate angular
                (hg/build-html-page [{:temp-sel [:div.maincontent],
                                      :comp     "public/login/angular.html",
                                      :comp-sel [:div.angular]}])
                []
                [:title] (en/content "Angular"))

(en/deftemplate forgot-password
                (hg/build-html-page [{:temp-sel [:div.topcontent],
                                      :comp     "public/login/forgot-password.html",
                                      :comp-sel [:form#forgot-form]}])
                []
                [:title] (en/content "Forgot password")
                [:div.topcontent] (en/set-attr :class "forgot")
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.login.jsforgot');"})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.login.jsforgot.init();"}))

(en/deftemplate page-not-found
                (hg/build-html-page [{:temp-sel [:div.topcontent],
                                      :comp     "public/login/page-not-found.html",
                                      :comp-sel [:div.page-not-found]}])
                [param]
                [:title] (en/content param)
                [:div.page-not-found] (en/content {:tag     :div,
                                                   :attrs   nil,
                                                   :content param}
                                                  {:tag     :div,
                                                   :attrs   nil,
                                                   :content [{:tag     :a,
                                                              :attrs   {:href "/login"},
                                                              :content "back"}]}))
