(ns personal-organiser.mongo
  "Namespace for manipulating data from mongo database"
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]
            [monger.collection :as mcoll]
            [monger.operators :refer :all])
  (:import org.bson.types.ObjectId))
(defn personal-organiser-db [] "personal-organiser")

(defn organism-coll [] "organism")

(defn training-coll [] "training")

(defn grocery-coll [] "grocery")

(defn meal-coll [] "meal")

(defn market-place-coll [] "market_place")

(defn connect-mongo
  "Connect to mongo db"
  []
  (let [admin-db "admin"
        u "admin"
        p (.toCharArray "passw0rd")
        cred (mcr/create u admin-db p)
        host "127.0.0.1"
        port 27017]
    (def mongo-connection (mg/connect-with-credentials host port cred))
    )
  )

(defn disconnect-mongo
  "Disconnect from mongo db"
  []
  (mg/disconnect mongo-connection))

(defn find-by-filter
  "Find documents from collection by filter"
  [collection-name filter]
  (mcoll/find-maps (mg/get-db mongo-connection (personal-organiser-db)) collection-name filter))

(defn find-one
  "Find document from collection by filter"
  [collection-name filter]
  (mcoll/find-one-as-map (mg/get-db mongo-connection (personal-organiser-db)) collection-name filter))

(defn find-by-id
  "Find documents from collection by filter"
  [collection-name id]
  (mcoll/find-map-by-id (mg/get-db mongo-connection (personal-organiser-db)) collection-name (ObjectId. id)))

(defn find-all-from-list
  "Find documents from collection by id"
  [collection-name document-id-list]
  (def return-docs [])
  (doseq [document-with-id document-id-list]
    (let [document-from-db (find-by-id collection-name (:id document-with-id))]
      (def return-docs (conj return-docs (conj document-from-db document-with-id)))
      )
    )
  return-docs)

(defn insert-and-return
  "Insert document into collection and return it"
  [collection-name insert-document]
  (mcoll/insert-and-return (mg/get-db mongo-connection (personal-organiser-db)) collection-name insert-document))

(defn update-by-id
  "Update document into collection by id"
  [collection-name id update-document]
  (mcoll/update-by-id (mg/get-db mongo-connection (personal-organiser-db)) collection-name (ObjectId. id) {$set update-document}))

(defn remove-by-id
  "Remove document from collection by id"
  [collection-name id]
  (mcoll/remove-by-id (mg/get-db mongo-connection (personal-organiser-db)) collection-name (ObjectId. id)))

