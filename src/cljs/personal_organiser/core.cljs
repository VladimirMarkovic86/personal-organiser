(ns personal-organiser.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require
    [goog.events :as events]
    [goog.history.EventType :as HistoryEventType]
    [markdown.core :refer [md->html]]
    [ajax.core :refer [GET POST]]
    [domina :as dom])
  (:import goog.History))

(defn get-app []
  (or (.-app js/window)
      (set! (.-app js/window) #js {})))

(defonce heroes (atom []))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (let [app (get-app)
          c (if (not= (alength (.getElementsByClassName js/document "angular")) 0)
              (.Component (.-core js/ng)
                          #js {:selector "div.angular"
                               :template (html [:div
                                                [:h1 " Angular"]
                                                [:div [:h2 "Hero List:"]]
                                                "
      <input #newHero (keyup.enter)=\"addHero(newHero.value); newHero.value='' \" >
      <button (click)=\"addHero(newHero.value); newHero.value='' \">Add</button>
      <ul><li *ngFor=\"#hero of heroes()\">{{hero}}</li></ul>
      "
                                                ])})
              (.Component (.-core js/ng)
                          #js {:selector "div.angularHide"
                               :template (html [:div])})
              )
          c (.Class c #js {:constructor (fn [])
                           :addHero     (fn [hero]
                                          (swap! heroes #(conj % hero)))
                           :heroes      (fn [] @heroes)
                           })]
      (set! (.-AppComponent app) c))
    ))
