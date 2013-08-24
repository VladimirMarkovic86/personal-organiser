(ns personal-organiser.grocery.grocery-controller
  "Handeling requests from grocery view forms to database"
  (:require [personal-organiser.grocery.grocery-validators :refer [create-grocery-errors]]
	    [personal-organiser.grocery.grocery-view :refer [read-all-groceries]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :refer [map-keys-to-str create-rels-for-node update-rels-for-node]]))

(defn save-grocery
  "Save grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors {:gname (:gname req-params)
						 :gcalories (:gcalories req-params)
						 :gfats (:gfats req-params)
						 :gproteins (:gproteins req-params)
						 :gcarbohydrates (:gcarbohydrates req-params)
						 :gwater (:gwater req-params)
						 :gorigin (:gorigin req-params)
						 :gdesc (:gdesc req-params)})]
    (str "Grocery errors: " grocery-errors)
    (let [node-id (n4j/create-node "grocery" {:gname (:gname req-params)
					      :gcalories (read-string (:gcalories req-params))
					      :gfats (read-string (:gfats req-params))
					      :gproteins (read-string (:gproteins req-params))
					      :gcarbohydrates (read-string (:gcarbohydrates req-params))
					      :gwater (read-string (:gwater req-params))
					      :gorigin (:gorigin req-params)
					      :gdesc (:gdesc req-params)})]
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*)
								      where n.type! = 'vitamin'
								      return n.idx"))))
			      :grocery-has-vitamin)
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*)
								      where n.type! = 'mineral'
								      return n.idx"))))
			      :grocery-has-mineral)))
  (read-all-groceries))

(defn update-grocery
  "Update grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors {:gname (:gname req-params)
						 :gcalories (:gcalories req-params)
						 :gfats (:gfats req-params)
						 :gproteins (:gproteins req-params)
						 :gcarbohydrates (:gcarbohydrates req-params)
						 :gwater (:gwater req-params)
						 :gorigin (:gorigin req-params)
						 :gdesc (:gdesc req-params)})]
    (str "Grocery errors: " grocery-errors)
    ((n4j/update-node
	(n4j/read-node (read-string (:idgrocery req-params))) {:gname (:gname req-params)
					  		       :gcalories (read-string (:gcalories req-params))
					  		       :gfats (read-string (:gfats req-params))
					  		       :gproteins (read-string (:gproteins req-params))
					  		       :gcarbohydrates (read-string (:gcarbohydrates req-params))
					  		       :gwater (read-string (:gwater req-params))
							       :gorigin (:gorigin req-params)
					  		       :gdesc (:gdesc req-params)})
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idgrocery req-params))")
							  match n-[r:`grocery-has-vitamin`]-()
							  return ID(r)")))
			   (map-keys-to-str req-params))
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idgrocery req-params))")
							  match n-[r:`grocery-has-mineral`]-()
							  return ID(r)")))
			   (map-keys-to-str req-params))))
  (read-all-groceries))

(defn delete-grocery
  "Delete grocery from neo4j database"
  [id]
  (n4j/delete-node "grocery" id)
  (read-all-groceries))
