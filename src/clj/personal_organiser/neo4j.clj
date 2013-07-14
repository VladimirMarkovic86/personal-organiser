(ns personal-organiser.neo4j
  (:require [clojurewerkz.neocons.rest :as nr]
            [clojurewerkz.neocons.rest.nodes :as nn]
            [clojurewerkz.neocons.rest.relationships :as nrel]
	    [clojurewerkz.neocons.rest.cypher :as cy]
	    [clojure.string :refer [join]]))

(defn connect-neo4j [] (nr/connect! "http://localhost:7474/db/data/"))

;; vector converted to csv string
(defn vector-to-csv [x]
	(join "," x))

;; get node with indexes of particular type
(defn get-indexes-node-type-of [index-type]
	(first (nn/query "indexesoftypes" (str "type:"index-type))))

;; vector of indexes in type node
(defn vector-of-indexes [node]
	(:idx (:data node)))

;; returns indexes of particular type nodes in csv format
(defn get-type-indexes [index-type]
	(let [type-idx (get-indexes-node-type-of index-type)]
	     (vector-to-csv (vector-of-indexes type-idx))))

;; returns all nodes of particular type
(defn get-all-nodes [index-type]
	(cy/tquery (str "START n=node(" (get-type-indexes index-type) ") RETURN n")))

;; add new node index to node that contains indexes of nodes with same type
(defn add-node-key-to-indexes [index-type new-node-id]
  (let [node-idx (get-indexes-node-type-of index-type)]
    (if (contains? (into #{} (vector-of-indexes node-idx)) new-node-id)
      false
      (nn/set-property node-idx :idx (conj (vector-of-indexes node-idx) new-node-id)))))

;; Creates grocery node in NEO4J database
(defn create-node [index-type node-data]
  (let [node (nn/create node-data)]
	(add-node-key-to-indexes index-type (:id node))
	(println (:gname (:data node)))))
