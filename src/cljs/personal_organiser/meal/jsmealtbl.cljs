(ns personal-organiser.meal.jsmealtbl
  (:require [domina :as dom]
            [domina.css :as domcss]
            [domina.events :as evts]
            [clojure.string :as cstring]))

(defn onready
  "Swap updated content from response with current"
  [content]
  (if (and (= (aget (aget content "currentTarget") "readyState") 4)
           (= (aget (aget content "currentTarget") "status") 200))
    (do (dom/destroy! (dom/by-id (str "meal-" (aget (aget content "currentTarget") "responseText"))))
        (dom/append! (dom/by-class "middle-column")
                     "<div class=\"help\">Meal successfully deleted</div>"))
    ))

(defn delete-meal
  "Delete grocery XMLHttpReqest"
  [meal-id]
  (let [xmlhttp (js/XMLHttpRequest.)]
    (aset xmlhttp "onreadystatechange" onready)
    (.open xmlhttp "DELETE" (str "/delete-meal/" meal-id) true)
    (.send xmlhttp)
    ))

(defn delete-click-listener
  "Set listener on link delete"
  []
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "a[id*='delete']")))]
    (doseq [sel-node sel-nodes]
      (evts/listen! (dom/by-id (:id sel-node))
                    :click
                    (fn []
                      (delete-meal (cstring/replace (:id sel-node)
                                                    "mldelete"
                                                    "")))))))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (do (delete-click-listener))
    ))
