(ns personal-organiser.grocery
  (:require [personal-organiser.grocery.validators :refer [create-grocery-errors]]
	    [personal-organiser.neo4j :as n4j]
	    [net.cgrand.enlive-html :as en]))

;; create grocery from form to db
(defn create-grocery [gname gcalories gfats gproteins gcarbohydrates gwater gdesc]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    (n4j/create-node "grocery" {:gname gname
			 :gcalories gcalories
			 :gfats gfats
			 :gproteins gproteins
			 :gcarbohydrates gcarbohydrates
			 :gwater gwater
			 :gdesc gdesc})))

;; atom with grocery data for template
(defonce atom-data (atom {}))

;; add grocery data to atom
(defn conj-data
  [start-map node]
  (let [id (:id node)
	data (:data node)]
    (swap! atom-data assoc id data)))

;; fill attom with grocery data
(defn format-node-data-to-vector []
	(let [nodes (n4j/read-all-nodes-type-of "grocery")]
	  (reduce conj-data atom-data nodes))
	@atom-data)

;; generate table of grocery data on read-all-grocery.html
(en/deftemplate read-all-grocery
  (en/html-resource "public/read-all-grocery.html")
  [request]
  [:#grocery-table :tr] (en/clone-for [[id data] (format-node-data-to-vector)]
                                [:td] (comp
                                       (fn [e] (update-in e [:content] concat [" *click here*"]))
                                        (en/content (format "%s : %s" id (:gname data)))
                                        (en/set-attr :id (str id)))))
