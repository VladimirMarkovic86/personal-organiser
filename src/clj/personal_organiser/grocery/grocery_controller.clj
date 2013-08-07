(ns personal-organiser.grocery.grocery-controller
  (:require [personal-organiser.grocery.grocery-validators :refer [create-grocery-errors]]
	    [personal-organiser.grocery.grocery-view :refer [read-all-grocery]]
	    [personal-organiser.neo4j :as n4j]))

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
  [node-id params-map cy-query-result rel]
    (doseq [target-node-id cy-query-result]
      (n4j/create-relationship node-id (read-string (str target-node-id)) rel {:mg (read-string (get params-map (str ":value"target-node-id)))})))

(defn update-rels-for-node
  "Update relationships between node and its target nodes with data"
  [rel-ids params-map]
    (doseq [rel-id rel-ids]
      (n4j/update-relationship (read-string (str (rel-id 0))) {:mg (read-string (get params-map (str ":value"(rel-id 0))))})))

(defn save-grocery
  "Save grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors {:gname (:gname req-params)
						 :gcalories (:gcalories req-params)
						 :gfats (:gfats req-params)
						 :gproteins (:gproteins req-params)
						 :gcarbohydrates (:gcarbohydrates req-params)
						 :gwater (:gwater req-params)
						 :gdesc (:gdesc req-params)})]
    (str "Grocery errors: " grocery-errors)
    (let [node-id (n4j/create-node "grocery" {:gname (:gname req-params)
					      :gcalories (read-string (:gcalories req-params))
					      :gfats (read-string (:gfats req-params))
					      :gproteins (read-string (:gproteins req-params))
					      :gcarbohydrates (read-string (:gcarbohydrates req-params))
					      :gwater (read-string (:gwater req-params))
					      :gdesc (:gdesc req-params)})]
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*) where n.type! = 'vitamin' return n.idx"))))
			      :grocery-has-vitamin)
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*) where n.type! = 'mineral' return n.idx"))))
			      :grocery-has-mineral)))
  (read-all-grocery))

(defn update-grocery
  "Update grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors {:gname (:gname req-params)
						 :gcalories (:gcalories req-params)
						 :gfats (:gfats req-params)
						 :gproteins (:gproteins req-params)
						 :gcarbohydrates (:gcarbohydrates req-params)
						 :gwater (:gwater req-params)
						 :gdesc (:gdesc req-params)})]
    (str "Grocery errors: " grocery-errors)
    ((n4j/update-node
	(n4j/read-node (read-string (:idgrocery req-params))) {:gname (:gname req-params)
					  		       :gcalories (read-string (:gcalories req-params))
					  		       :gfats (read-string (:gfats req-params))
					  		       :gproteins (read-string (:gproteins req-params))
					  		       :gcarbohydrates (read-string (:gcarbohydrates req-params))
					  		       :gwater (read-string (:gwater req-params))
					  		       :gdesc (:gdesc req-params)})
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idgrocery req-params))") match n-[r:`grocery-has-vitamin`]-() return ID(r)")))
			   (map-keys-to-str req-params))
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idgrocery req-params))") match n-[r:`grocery-has-mineral`]-() return ID(r)")))
			   (map-keys-to-str req-params))))
  (read-all-grocery))

(defn delete-grocery
  "Delete grocery from neo4j database"
  [id]
  (n4j/delete-node "grocery" id)
  (read-all-grocery))
