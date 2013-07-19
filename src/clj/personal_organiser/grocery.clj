(ns personal-organiser.grocery
  (:require [personal-organiser.grocery.validators :refer [create-grocery-errors]]
	    [personal-organiser.neo4j :as n4j]
	    [net.cgrand.enlive-html :as en]))

(def atom-data (atom {}))

(defn create-grocery
"Create grocery in neo4j database"
 [gname gcalories gfats gproteins gcarbohydrates gwater gdesc]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    (n4j/create-node "grocery" {:gname gname
			 :gcalories gcalories
			 :gfats gfats
			 :gproteins gproteins
			 :gcarbohydrates gcarbohydrates
			 :gwater gwater
			 :gdesc gdesc})))

(defn update-grocery
"Update grocery in neo4j database"
[id gname gcalories gfats gproteins gcarbohydrates gwater gdesc]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    (n4j/update-node (n4j/read-node (read-string id)) {:gname gname
			 :gcalories gcalories
			 :gfats gfats
			 :gproteins gproteins
			 :gcarbohydrates gcarbohydrates
			 :gwater gwater
			 :gdesc gdesc})))

(defn delete-grocery
"Delete grocery from neo4j database"
 [id]
  (n4j/delete-node "grocery" id)
  (swap! atom-data dissoc id))

(defn add-data-to-atom
"Add grocery data to atom of maps"
  [start-map node]
  (let [id (:id node)
	data (:data node)]
    (swap! atom-data assoc id data)))

(defn nodes-data-to-atom
"Format data from nodes to maps in atom"
 []
	(let [nodes (n4j/read-all-nodes-type-of "grocery")]
	  (reduce add-data-to-atom atom-data nodes))
	@atom-data)

(en/deftemplate edit-grocery
(en/html-resource "public/create-grocery.html")
  [node]
      [:form#createGroceryForm] (en/set-attr :action "/update-grocery")
      [:input#name] (en/before {:tag :input, :attrs {:type "hidden", :name "groceryid", :id "groceryid", :value (:id node)}, :content nil})
      [:input#name] (en/set-attr :value (:gname (:data node)))
      [:input#calories] (en/set-attr :value (:gcalories (:data node)))
      [:input#fats] (en/set-attr :value (:gfats (:data node)))
      [:input#proteins] (en/set-attr :value (:gproteins (:data node)))
      [:input#carbohydrates] (en/set-attr :value (:gcarbohydrates (:data node)))
      [:input#water] (en/set-attr :value (:gwater (:data node)))
      [:input#description] (en/set-attr :value (:gdesc (:data node)))
)

(en/deftemplate read-all-grocery
  (en/html-resource "public/read-all-grocery.html")
  [request]
  [:#grocery-table :tr] (en/clone-for [[id data] (nodes-data-to-atom)]
                                [:td.id] (en/content (format "%s" id))
				[:td.gname] (en/content (format "%s" (:gname data)))
				[:td.gcalories] (en/content (format "%s" (:gcalories data)))
				[:td.gfats] (en/content (format "%s" (:gfats data)))
				[:td.gproteins] (en/content (format "%s" (:gproteins data)))
				[:td.gcarbohydrates] (en/content (format "%s" (:gcarbohydrates data)))
				[:td.gwater] (en/content (format "%s" (:gwater data)))
				[:td.gdesc] (en/content (format "%s" (:gdesc data)))
				[:td.gedit] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/edit?id="id)}, :content "edit"})
				[:td.gdelete] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/delete?id="id)}, :content "delete"})
					;; (comp
                                        ;; (fn [e] (update-in e [:content] concat [" *click here*"]))
                                        ;; (en/content (format "%s %s %s %s %s %s %s %s" id (:gname data) (:gcalories data) (:gproteins data) (:gfats data) (:gcarbohydrates data) (:gwater data) (:gdesc data)))
                                        ;; (en/set-attr :id (str id))
))
