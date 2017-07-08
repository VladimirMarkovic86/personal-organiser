(ns personal-organiser.utils
  "Useful functions that are repeatedly called all over the project"
  (:import [java.io File])
  (:require [cljs.reader :refer [read-string]]
            [personal-organiser.neo4j :as n4j]
            [clojure.contrib.duck-streams :as ds]
            [clojure.test :refer :all])
  (:refer-clojure :exclude [read-string]))

(with-test
  (defn parse-integer
    "Parse string to integer"
    [s]
    (if (and (string? s) (re-matches #"\s*[+-]?\d+\s*" s))
      (read-string s)))
  (is (= 1 (parse-integer "1")))
  (is (= nil (parse-integer "1.5")))
  (is (= nil (parse-integer "1a")))
  (is (= 1 (parse-integer "01")))
  (is (= nil (parse-integer "integer")))
  )

(with-test
  (defn parse-double
    "Parse string to double"
    [s]
    (if (and (string? s) (re-matches #"\s*[+-]?\d+(\.\d+(M|M|N)?)?\s*" s))
      (read-string s)))
  (is (= 2 (parse-double "2")))
  (is (= 2.1 (parse-double "2.1")))
  (is (= 2.1 (parse-double "02.1")))
  (is (= nil (parse-double "02a.1")))
  (is (= nil (parse-double "double")))
  (is (= nil (parse-double "6.5E-5")))
  (is (= nil (parse-double "2.1.23")))
  )

(with-test
  (defn parse-number
    "Parse string to number"
    [x]
    (if (and (string? x) (re-matches #"^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$" x))
      (read-string x)))
  (is (= 2 (parse-number "2")))
  (is (= 2.1 (parse-number "2.1")))
  (is (= 2.1 (parse-number "02.1")))
  (is (= 6.5E-5 (parse-number "6.5E-5")))
  (is (= nil (parse-number "02a.1")))
  (is (= nil (parse-number "2.1.23")))
  )

(with-test
  (defn key-to-str
    "Change map key to be string key"
    [param-map param-pair]
    (assoc param-map (str (param-pair 0)) (param-pair 1)))
  (is (= {":param-key" "param value"} (key-to-str {} [:param-key "param value"])))
  (is (= {":param-key" 0} (key-to-str {} [:param-key 0])))
  (is (= {":param-key" "a"} (key-to-str {} [:param-key "a" 0])))
  )

(with-test
  (defn map-keys-to-str
    "Change map keys to be string keys"
    [req-params]
    (reduce key-to-str {} (into [] req-params)))
  (is (= {":param-key1" "a"
          ":param-key2" "b"
          ":param-key3" "c"} (map-keys-to-str {:param-key1 "a"
                                               :param-key2 "b"
                                               :param-key3 "c"})))
  (is (= {":param-key1" 1
          ":param-key2" 2.6
          ":param-key3" "c"} (map-keys-to-str {:param-key1 1
                                               :param-key2 2.6
                                               :param-key3 "c"})))
  )

(defn create-node-tx
  "Create node query"
  [n-properties]
  (str "CREATE (n " n-properties ")"))

(defn start-node-tx
  "Start node query"
  [node-id]
  (str "START n=node(" node-id ")"))

(defn create-rel-for-created-node-tx
  "Create relationship for created node query"
  [nn-id
   rel-type
   rel-properties]
  (str "WITH n"
       " START nn=node(" nn-id ")"
       " CREATE (n)-[:`" rel-type "` " rel-properties "]->(nn)"))

(defn accumulate-queries
  ""
  [acc [nn-id rel-type rel-properties]]
  (str acc " " (create-rel-for-created-node-tx nn-id rel-type rel-properties)))

(defn create-query
  ""
  [n-base query-params]
  (reduce accumulate-queries n-base query-params))

(defn create-rels-for-node
  "Create relationships between node and its target nodes with data"
  ([query-params params-map cy-query-result rel]
   (def query-paramsi query-params)
   (doseq [target-node-id cy-query-result]
     (def query-paramsi (conj query-paramsi [target-node-id
                                             rel
                                             (str "{mg: " (if (= (re-find #"E" (get params-map (str ":value" target-node-id))) "E")
                                                            (format "%.8f" (read-string (get params-map (str ":value" target-node-id))))
                                                            (get params-map (str ":value" target-node-id))) "}")]))
     ;      (n4j/create-relationship node-id
     ;				(read-string (str target-node-id))
     ;				rel
     ;				{:mg (read-string (get params-map (str ":value"target-node-id)))})
     )
   query-paramsi)
  ([query-params params-vec rel]
   (def query-paramsi query-params)
   (doseq [params-map params-vec]
     (def query-paramsi (conj query-paramsi [(get params-map :id)
                                             rel
                                             (str "{grams:" (get params-map :grams)
                                                  ",quantity: " (get params-map :quantity) "}")]))
     ;      (n4j/create-relationship node-id
     ;				(get params-map :id)
     ;				rel
     ;				{:grams (get params-map :grams)
     ;				 :quantity (get params-map :quantity)})
     )
   query-paramsi))

(defn update-rels-for-node
  "Update relationships between node and its target nodes with data"
  ([query-params rel-ids params-map]
   (def query-paramsi query-params)
   (doseq [rel-id rel-ids]
     (def query-paramsi (conj query-paramsi [(str "START r=relationship(" (rel-id 0) ")"
                                                  " SET r.mg=" (if (= (re-find #"E" (get params-map (str ":value" (rel-id 0)))) "E")
                                                                 (format "%.8f" (read-string (get params-map (str ":value" (rel-id 0)))))
                                                                 (get params-map (str ":value" (rel-id 0))))) nil]))
     ;      (n4j/update-relationship (read-string (str (rel-id 0)))
     ;				{:mg (read-string (get params-map (str ":value"(rel-id 0))))})
     )
   query-paramsi)
  ([query-params params-vec]
   (def query-paramsi query-params)
   (doseq [params-map params-vec]
     (def query-paramsi (conj query-paramsi [(str "START r=relationship(" (get params-map :id) ")"
                                                  " SET r.grams=" (get params-map :grams)
                                                  ",r.quantity=" (get params-map :quantity)) nil]))
     ;      (n4j/update-relationship (get params-map :id)
     ;				{:grams (get params-map :grams)
     ;				 :quantity (get params-map :quantity)})
     )
   query-paramsi))

(defn delete-rels-for-node
  "Delete relationships by ids"
  [rel-ids]
  (if (= rel-ids [])
    ["START n=node(0) RETURN n" nil]
    [(str "START r=relationship(" (clojure.string/join "," rel-ids) ")"
          " DELETE r") nil])
  ;  (n4j/delete-many-relationships rel-ids)
  )

(with-test
  (defn add-data-to-map
    "Add node data to map"
    [start-map node]
    (let [id (:id node)
          data (:data node)]
      (assoc start-map id data)))
  (is (= {1 {:data1 1
             :data2 "2"}} (add-data-to-map {} {:id   1
                                               :data {:data1 1
                                                      :data2 "2"}})))
  )

(defn nodes-data-to-map
  "Format data from nodes to maps"
  [index-type]
  (let [nodes (n4j/read-all-nodes-type-of index-type)]
    (reduce add-data-to-map {} nodes)))

(defn file-delete
  "Delete file from file path"
  [file-path]
  (.delete (File. file-path)))

(defn copy-file
  "Copy file on server"
  [actual-file file-path file-name]
  (ds/copy actual-file (ds/file-str file-path file-name))
  file-name)

(def alphanumeric "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.")

(defn get-random-str [length]
  (apply str (repeatedly length #(rand-nth alphanumeric))))

