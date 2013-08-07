(ns personal-organiser.organism.organism-controller
  (:require [personal-organiser.organism.organism-validators :refer [create-organism-errors]]
	    [personal-organiser.organism.organism-view :refer [read-organism organism-nav]]
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
						    :obirthday (:obirthday req-params)
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
						:obirthday (:obirthday req-params)
						:ogender (:ogender req-params)
						:odiet (:odiet req-params)
						:oactivity (:oactivity req-params)})]
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*) where n.type! = 'vitamin' return n.idx"))))
			      :organism-needs-vitamin)
	(create-rels-for-node node-id
			      (map-keys-to-str req-params)
			      (first (first (:data (n4j/cypher-query "start n=node(*) where n.type! = 'mineral' return n.idx"))))
			      :organism-needs-mineral)))
  (organism-nav))

(defn update-organism
  "Update organism in neo4j database"
  [req-params]
  (if-let [organism-errors (create-organism-errors {:ofirst-name (:ofirst-name req-params)
						    :olast-name (:olast-name req-params)
						    :oemail (:oemail req-params)
						    :opassword (:opassword req-params)
						    :oconfirm-password (:oconfirm-password req-params)
						    :oheight (:oheight req-params)
						    :oweight (:oweight req-params)
						    :obirthday (:obirthday req-params)
						    :ogender (:ogender req-params)
						    :odiet (:odiet req-params)
						    :oactivity (:oactivity req-params)})]
    (str "Organism errors: " organism-errors)
    ((n4j/update-node
	(n4j/read-node (read-string (:idorganism req-params))) {:ofirst-name (:ofirst-name req-params)
								:olast-name (:olast-name req-params)
								:oemail (:oemail req-params)
								:opassword (:opassword req-params)
								:oheight (read-string (:oheight req-params))
								:oweight (read-string (:oweight req-params))
								:obirthday (:obirthday req-params)
								:ogender (:ogender req-params)
								:odiet (:odiet req-params)
								:oactivity (:oactivity req-params)})
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idorganism req-params))") match n-[r:`organism-needs-vitamin`]-() return ID(r)")))
			   (map-keys-to-str req-params))
     (update-rels-for-node (:data (n4j/cypher-query (str "start n=node("(read-string (:idorganism req-params))") match n-[r:`organism-needs-mineral`]-() return ID(r)")))
			   (map-keys-to-str req-params))))
  (organism-nav))

(defn delete-organism
  "Delete organism from neo4j database"
  [id]
  (n4j/delete-node "organism" id)
  (organism-nav))
