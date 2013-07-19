(ns personal-organiser.grocery
  (:require [personal-organiser.grocery.validators :refer [create-grocery-errors]]
	    [personal-organiser.neo4j :as n4j]
	    [net.cgrand.enlive-html :as en]))

(def atom-data (atom {}))

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

(defn generate-html-resource [template template-selector component component-selector]
  (en/html-resource (en/transform (en/html-resource template) template-selector
	(fn [selected-tag]
	  (assoc selected-tag :content (en/select (en/html-resource component) component-selector))))))

(en/deftemplate create-grocery
  (generate-html-resource (generate-html-resource "public/template.html" [:div.middle-column] "public/grocery-form.html" [:form#grocery-form]) [:div.left-column] "public/food-nav.html" [:div.food-nav])
  []
      [:title] (en/content "Create grocery")
      [:form#grocery-form] (en/set-attr :action "/save-grocery")
)

(en/deftemplate edit-grocery
  (generate-html-resource (generate-html-resource "public/template.html" [:div.middle-column] "public/grocery-form.html" [:form#grocery-form]) [:div.left-column] "public/food-nav.html" [:div.food-nav])
  [node]
      [:title] (en/content "Edit grocery")
      [:h3.form-title] (en/content "Edit grocery")
      [:form#grocery-form] (en/set-attr :action "/update-grocery")
      [:input#name] (en/before {:tag :input, :attrs {:type "hidden", :name "groceryid", :id "groceryid", :value (:id node)}, :content nil})
      [:input#name] (en/set-attr :value (:gname (:data node)))
      [:input#calories] (en/set-attr :value (:gcalories (:data node)))
      [:input#fats] (en/set-attr :value (:gfats (:data node)))
      [:input#proteins] (en/set-attr :value (:gproteins (:data node)))
      [:input#carbohydrates] (en/set-attr :value (:gcarbohydrates (:data node)))
      [:input#water] (en/set-attr :value (:gwater (:data node)))
      [:textarea#description] (en/content (:gdesc (:data node)))
      [:input#submit] (en/set-attr :value "Save changes")
)

(en/deftemplate read-all-grocery
  (generate-html-resource (generate-html-resource "public/template.html" [:div.middle-column] "public/grocery-table.html" [:table.grocery-table]) [:div.left-column] "public/food-nav.html" [:div.food-nav])
  []
  [:title] (en/content "Grocery table")
  [:tr.grocery-data] (en/clone-for [[id data] (nodes-data-to-atom)]
				[:td.gname] (en/content (format "%s" (:gname data)))
				[:td.gcalories] (en/content (format "%s" (:gcalories data)))
				[:td.gfats] (en/content (format "%s" (:gfats data)))
				[:td.gproteins] (en/content (format "%s" (:gproteins data)))
				[:td.gcarbohydrates] (en/content (format "%s" (:gcarbohydrates data)))
				[:td.gwater] (en/content (format "%s" (:gwater data)))
				[:td.gdesc] (en/content (format "%s" (:gdesc data)))
				[:td.gedit] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/edit-grocery?id="id)}, :content "edit"})
				[:td.gdelete] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/delete-grocery?id="id)}, :content "delete"})))

(defn save-grocery
"Save grocery in neo4j database"
 [gname gcalories gfats gproteins gcarbohydrates gwater gdesc]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    (n4j/create-node "grocery" {:gname gname
			 :gcalories gcalories
			 :gfats gfats
			 :gproteins gproteins
			 :gcarbohydrates gcarbohydrates
			 :gwater gwater
			 :gdesc gdesc}))
  (read-all-grocery))

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
			 :gdesc gdesc}))
  (read-all-grocery))

(defn delete-grocery
"Delete grocery from neo4j database"
 [id]
  (n4j/delete-node "grocery" id)
  (swap! atom-data dissoc id)
  (read-all-grocery))

(defn food []
    (generate-html-resource "public/template.html" [:div.left-column] "public/food-nav.html" [:div.food-nav]))
