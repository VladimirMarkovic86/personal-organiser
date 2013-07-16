(ns personal-organiser.neo4j
  (:require [clojurewerkz.neocons.rest :as nr]
            [clojurewerkz.neocons.rest.nodes :as nn]
            [clojurewerkz.neocons.rest.relationships :as nrel]
	    [clojurewerkz.neocons.rest.cypher :as cy]
	    [clojure.string :refer [join]]))

;; connect to neo4j db
(defn connect-neo4j [] (nr/connect! "http://localhost:7474/db/data/"))

;; get node with indexes of particular type
(defn get-indexes-node-type-of [index-type]
	(first (nn/query "indexesoftypes" (str "type:"index-type))))

;; vector of indexes in type node
(defn vector-of-indexes [node]
	(:idx (:data node)))

;; returns indexes of particular type nodes
(defn get-type-indexes [index-type]
	(let [type-idx (get-indexes-node-type-of index-type)]
	     (vector-of-indexes type-idx)))

;; return all nodes of particular type
(defn read-all-nodes-type-of [index-type]
	(nn/get-many (get-type-indexes index-type)))

;; add new node index to node that contains indexes of nodes with same type
(defn add-node-key-to-indexes [index-type new-node-id]
  (let [node-idx (get-indexes-node-type-of index-type)]
    (if (contains? (into #{} (vector-of-indexes node-idx)) new-node-id)
      false
      (nn/set-property node-idx :idx (conj (vector-of-indexes node-idx) new-node-id)))))

;; remove index of removed node from indexes type node
(defn remove-node-key-from-indexes [index-type removed-node-id]
  (let [node-idx (get-indexes-node-type-of index-type)]
    (if (contains? (into #{} (vector-of-indexes node-idx)) removed-node-id)
      (nn/set-property node-idx :idx (disj (into #{} (vector-of-indexes node-idx)) removed-node-id))
      false)))

;; create node in neo4j db
(defn create-node [index-type node-data]
  (let [node (nn/create node-data)]
	(add-node-key-to-indexes index-type (:id node))))

;; read node by id from neo4j db
(defn read-node [id]
	(nn/get id))

;; update node from neo4j db
(defn update-node [node data]
	(nn/update node data))

;; delete node from neo4j db
(defn delete-node [index-type id]
	((remove-node-key-from-indexes index-type id)
	(nn/delete id)))
