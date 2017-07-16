(ns personal-organiser.grocery.grocery-controller
  "Handeling requests from grocery view forms to database"
  (:require [personal-organiser.grocery.grocery-validators :refer [create-grocery-errors]]
            [personal-organiser.grocery.grocery-view :refer [read-all-groceries]]
            [personal-organiser.mongo :as mon]
            [personal-organiser.utils :as utils]
            [personal-organiser.mongo :as mon]
            [monger.operators :refer :all]))

(defn save-grocery
  "Save grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors {:gname          (:gname req-params)
                                                  :gcalories      (:gcalories req-params)
                                                  :gfats          (:gfats req-params)
                                                  :gproteins      (:gproteins req-params)
                                                  :gcarbohydrates (:gcarbohydrates req-params)
                                                  :gwater         (:gwater req-params)
                                                  :gorigin        (:gorigin req-params)
                                                  :gdesc          (:gdesc req-params)})]
    (str "Grocery errors: " grocery-errors)
    (let [new-grocery {:gname (:gname req-params),
                       :gcalories (read-string (:gcalories req-params)),
                       :gfats (read-string (:gfats req-params)),
                       :gproteins (read-string (:gproteins req-params)),
                       :gcarbohydrates (read-string (:gcarbohydrates req-params)),
                       :gwater (read-string (:gwater req-params)),
                       :gorigin (:gorigin req-params),
                       :gdesc (:gdesc req-params)
                       }]
      (mon/insert-and-return (mon/grocery-coll) new-grocery)))
  (read-all-groceries))

(defn update-grocery
  "Update grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors {:gname          (:gname req-params)
                                                  :gcalories      (:gcalories req-params)
                                                  :gfats          (:gfats req-params)
                                                  :gproteins      (:gproteins req-params)
                                                  :gcarbohydrates (:gcarbohydrates req-params)
                                                  :gwater         (:gwater req-params)
                                                  :gorigin        (:gorigin req-params)
                                                  :gdesc          (:gdesc req-params)})]
    (str "Grocery errors: " grocery-errors)
    (let [update-grocery {:gname (:gname req-params),
                          :gcalories (read-string (:gcalories req-params)),
                          :gfats (read-string (:gfats req-params)),
                          :gproteins (read-string (:gproteins req-params)),
                          :gcarbohydrates (read-string (:gcarbohydrates req-params)),
                          :gwater (read-string (:gwater req-params)),
                          :gorigin (:gorigin req-params),
                          :gdesc (:gdesc req-params)
                          }]
      (mon/update-by-id (mon/grocery-coll) (:idgrocery req-params) update-grocery))
    )
  (read-all-groceries))

(defn is-grocery-in-meal
  "Check if grocery is bound to any meal"
  [id]
  (mon/find-by-filter (mon/meal-coll) {:groceries {$elemMatch {:id id}}}))

(defn delete-grocery
  "Delete grocery from neo4j database"
  [id]
  (if (= (is-grocery-in-meal id) ())
    (do (mon/remove-by-id (mon/grocery-coll) id)
        (str id))
    "nodelete"))
