(ns personal-organiser.grocery.jsgrocerytbl
  (:require [domina :as dom]
            [domina.css :as domcss]
            [domina.events :as evts]
            [clojure.string :as cstring]))

(defn onready
      [content]
      (if (and (= (aget (aget content "currentTarget") "readyState") 4)
               (= (aget (aget content "currentTarget") "status") 200))
        (let [resp (aget (aget content "currentTarget") "responseText")]
             (dom/destroy! (dom/by-class "help"))
             (if (not (= resp "nodelete"))
               (do (dom/destroy! (dom/by-id (str "grocery-" resp)))
                   (dom/append! (dom/by-class "middle-column")
                                "<div class=\"help\">Grocery successfully deleted</div>"))
               (dom/append! (dom/by-class "middle-column")
                            "<div class=\"help\">There are meals that contain this grocery, so it can not be deleted</div>")))))

(defn delete-grocery
      "Delete grocery XMLHttpReqest"
      [grocery-id]
      (let [xmlhttp (js/XMLHttpRequest.)]
           (aset xmlhttp "onreadystatechange" onready)
           (.open xmlhttp "DELETE" (str "/delete-grocery/" grocery-id) true)
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
                                    (delete-grocery (cstring/replace (:id sel-node)
                                                                     "gdelete"
                                                                     "")))))))

(defn ^:export init []
      (if (and js/document
               (.-getElementById js/document))
        (delete-click-listener)
        ))
