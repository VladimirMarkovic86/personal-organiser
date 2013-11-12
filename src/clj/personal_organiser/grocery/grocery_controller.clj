(ns personal-organiser.grocery.grocery-controller
  "Handeling requests from grocery view forms to database"
  (:require [personal-organiser.grocery.grocery-validators :refer [create-grocery-errors]]
	    [personal-organiser.grocery.grocery-view :refer [read-all-groceries]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :as utils]))

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
    (let [n-properties (str "{gname: '" (:gname req-params)"'"
			",gcalories: " (read-string (:gcalories req-params))
			",gfats: " (read-string (:gfats req-params))
			",gproteins: " (read-string (:gproteins req-params))
			",gcarbohydrates: " (read-string (:gcarbohydrates req-params))
			",gwater: " (read-string (:gwater req-params))
			",gorigin: '" (:gorigin req-params)"'"
			",gdesc: '" (:gdesc req-params)"'}")]
	(def query-params [])
	(def query-params (utils/create-rels-for-node query-params
			      (utils/map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*)
								      where n.type = 'vitamin'
								      return n.idx"))))
			      "grocery-has-vitamin"))
	(def query-params (utils/create-rels-for-node query-params
			      (utils/map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*)
								      where n.type = 'mineral'
								      return n.idx"))))
			      "grocery-has-mineral"))
        (def query (str (utils/create-query n-properties query-params)
			" WITH n START nn=node(*) WHERE nn.type = 'grocery' SET nn.idx = nn.idx + ID(n)"))
    (n4j/tx-op-execute [[query nil]])
))
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
     (utils/update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idgrocery req-params))")
							  match n-[r:`grocery-has-vitamin`]-()
							  return ID(r)")))
			   (utils/map-keys-to-str req-params))
     (utils/update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idgrocery req-params))")
							  match n-[r:`grocery-has-mineral`]-()
							  return ID(r)")))
			   (utils/map-keys-to-str req-params))))
  (read-all-groceries))

(defn is-grocery-in-meal
  "Check if grocery is bound to any meal"
  [id]
  (:data (n4j/cypher-query (str "start n=node("id")"
				"match (n)-[r:`meal-has-grocery`]-(n2)"
				"return ID(n2)"))))

(defn delete-grocery
  "Delete grocery from neo4j database"
  [id]
  (if (= (is-grocery-in-meal id) [])
      (do (n4j/delete-node "grocery" id)
	  (str id))
      "nodelete"))
