(ns personal-organiser.mongo
  "Namespace for manipulating data from mongo database"
  (:require [monger.core :as mg]
            [monger.credentials :as mcr]
            [monger.collection :as mcoll]))


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

(defn findAll
  "Find all documents in collection"
  [collectionName]
  (mcoll/find-maps (mg/get-db mongo-connection "personal-organiser") collectionName))

(defn find
  "Find document from collection by filter"
  [collectionName filter]
  (mcoll/find-maps (mg/get-db mongo-connection "personal-organiser") collectionName filter))