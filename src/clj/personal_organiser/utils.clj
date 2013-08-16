(ns personal-organiser.utils
  (:require [cljs.reader :refer [read-string]]
	    [personal-organiser.neo4j :as n4j])
  (:refer-clojure :exclude [read-string]))

(defn parse-integer
  "Parse string to integer"
  [s]
  (if (and (string? s) (re-matches #"\s*[+-]?\d+\s*" s))
    (read-string s)))

(defn parse-double
  "Parse string to double"
  [s]
  (if (and (string? s) (re-matches #"\s*[+-]?\d+(\.\d+(M|M|N)?)?\s*" s))
    (read-string s)))

(defn parse-number
  "Parse string to number"
  [x]
  (if (and (string? x) (re-matches #"\s*[+-]?\d+(\.\d+M|M|N)?\s*" x))
    (read-string x)))

(defn key-to-str
  "Change map key to be string key"
  [param-map param-pair]
  (assoc param-map (str (param-pair 0)) (param-pair 1)))

(defn map-keys-to-str
  "Change map keys to be string keys"
  [req-params]
  (reduce key-to-str {} (into [] req-params)))

(defn create-rels-for-node
  "Create relationships between node and its target nodes with data"
  ([node-id params-map cy-query-result rel]
    (doseq [target-node-id cy-query-result]
      (n4j/create-relationship node-id
				(read-string (str target-node-id))
				rel
				{:mg (read-string (get params-map (str ":value"target-node-id)))})))
  ([node-id params-vec rel]
    (doseq [params-map params-vec]
      (n4j/create-relationship node-id
				(get params-map :id)
				rel
				{:grams (get params-map :grams)
				 :quantity (get params-map :quantity)}))))

(defn update-rels-for-node
  "Update relationships between node and its target nodes with data"
  ([rel-ids params-map]
    (doseq [rel-id rel-ids]
      (n4j/update-relationship (read-string (str (rel-id 0))) {:mg (read-string (get params-map (str ":value"(rel-id 0))))})))
  ([params-vec]
    (doseq [params-map params-vec]
      (n4j/update-relationship (get params-map :id)
				{:grams (get params-map :grams)
				 :quantity (get params-map :quantity)}))))

(defn delete-rels-for-node
  "Delete relationships by ids"
  [rel-ids]
  (n4j/delete-many-relationships rel-ids))

(defn add-data-to-map
  "Add node data to map"
  [start-map node]
  (let [id (:id node)
	data (:data node)]
       (assoc start-map id data)))

(defn nodes-data-to-map
  "Format data from nodes to maps"
  [index-type]
  (let [nodes (n4j/read-all-nodes-type-of index-type)]
       (reduce add-data-to-map {} nodes)))
