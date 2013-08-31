(ns personal-organiser.organism.organism-controller
  (:require [personal-organiser.organism.organism-validators :refer [create-organism-errors]]
	    [personal-organiser.organism.organism-view :refer [read-organism organism-nav]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :refer [map-keys-to-str create-rels-for-node update-rels-for-node]]))

(defn save-organism
  "Save organism in neo4j database"
  [req-params]
  (if-let [organism-errors (create-organism-errors {:ofirst-name (:ofirst-name req-params)
						    :olast-name (:olast-name req-params)
						    :oemail (:oemail req-params)
						    :opassword (:opassword req-params)
						    :oconfirm-password (:oconfirm-password req-params)
						    :oheight (:oheight req-params)
						    :oweight (:oweight req-params)
						    :obirthday-day (:obirthday-day req-params)
						    :obirthday-month (:obirthday-month req-params)
						    :obirthday-year (:obirthday-year req-params)
						    :ogender (:ogender req-params)
						    :odiet (:odiet req-params)
						    :oactivity (:oactivity req-params)})]
    (println (str "Organism errors: " organism-errors))
    (let [node-id (n4j/create-node "organism" {:ofirst-name (:ofirst-name req-params)
						:olast-name (:olast-name req-params)
						:oemail (:oemail req-params)
						:opassword (:opassword req-params)
						:oheight (read-string (:oheight req-params))
						:oweight (read-string (:oweight req-params))
						:obirthday (str (:obirthday-day req-params)
								"."
								(:obirthday-month req-params)
								"."
								(:obirthday-year req-params))
						:ogender (:ogender req-params)
						:odiet (:odiet req-params)
						:oactivity (:oactivity req-params)})]
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*)
								      where n.type! = 'vitamin'
								      return n.idx"))))
			      :organism-needs-vitamin)
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*)
								      where n.type! = 'mineral'
								      return n.idx"))))
			      :organism-needs-mineral))))

(defn update-organism
  "Update organism in neo4j database"
  [req-params]
  (if-let [organism-errors (create-organism-errors {:ofirst-name (:ofirst-name req-params)
						    :olast-name (:olast-name req-params)
						    :oemail (:oemail req-params)
						    :opassword "default-value"
						    :oconfirm-password "default-value"
						    :oheight (:oheight req-params)
						    :oweight (:oweight req-params)
						    :obirthday-day (:obirthday-day req-params)
						    :obirthday-month (:obirthday-month req-params)
						    :obirthday-year (:obirthday-year req-params)
						    :ogender (:ogender req-params)
						    :odiet (:odiet req-params)
						    :oactivity (:oactivity req-params)})]
    (println (str "Organism errors: " organism-errors))
    (let [node (n4j/read-node (read-string (:idorganism req-params)))]
      (n4j/update-node node
		       {:ofirst-name (:ofirst-name req-params)
			:olast-name (:olast-name req-params)
			:oemail (:oemail req-params)
			:opassword (:opassword (:data node))
			:oheight (read-string (:oheight req-params))
			:oweight (read-string (:oweight req-params))
			:obirthday (str (:obirthday-day req-params)
					"."
					(:obirthday-month req-params)
					"."
					(:obirthday-year req-params))
			:ogender (:ogender req-params)
			:odiet (:odiet req-params)
			:oactivity (:oactivity req-params)})
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idorganism req-params))")
							  match n-[r:`organism-needs-vitamin`]-()
							  return ID(r)")))
			   (map-keys-to-str req-params))
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idorganism req-params))")
							  match n-[r:`organism-needs-mineral`]-()
							  return ID(r)")))
			   (map-keys-to-str req-params))))
  (organism-nav))

(defn delete-organism
  "Delete organism from neo4j database"
  [id]
  (n4j/delete-node "organism" id))
