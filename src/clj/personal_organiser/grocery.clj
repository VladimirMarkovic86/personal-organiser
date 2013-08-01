(ns personal-organiser.grocery
  (:require [personal-organiser.grocery.validators :refer [create-grocery-errors]]
	    [personal-organiser.neo4j :as n4j]
	    [net.cgrand.enlive-html :as en]))

(defn add-data-to-map
"Add grocery data to atom of maps"
  [start-map node]
  (let [id (:id node)
	data (:data node)]
    (assoc start-map id data)))

(defn nodes-data-to-map
"Format data from nodes to maps in atom"
 [index-type]
	(let [nodes (n4j/read-all-nodes-type-of index-type)]
	  (reduce add-data-to-map {} nodes)))

(defn generate-html-resource [template template-selector component component-selector]
  (en/html-resource (en/transform (en/html-resource template) template-selector
	(fn [selected-tag]
	  (assoc selected-tag :content (en/select (en/html-resource component) component-selector))))))

(en/deftemplate create-grocery
  (generate-html-resource (generate-html-resource "public/template.html" [:div.middle-column] "public/grocery-form.html" [:form#grocery-form]) [:div.left-column] "public/food-nav.html" [:div.food-nav])
  []
      [:title] (en/content "Create grocery")
      [:script#script] (en/after {:tag :script, :attrs nil, :content "personal_organiser.grocery.init();"})
      [:form#grocery-form] (en/set-attr :action "/save-grocery")
      [:tr.vitamin] (en/clone-for [[id data] (nodes-data-to-map "vitamin")]
		       [:td.vname] (en/content {:tag :label, :attrs {:for (str "vvalue"id), :id (str "lvvalue"id)}, :content (:vname data)})
		       [:td.vinput] (en/content {:tag :input, :attrs {:type "hidden", :name (str "vid"id), :id (str "vid"id), :value id}, :content nil})
		       [:td.vinput :input] (en/after {:tag :input, :attrs {:type "number", :step "any", :name (str "vvalue"id), :id (str "vvalue"id), :value "", :required "required"}, :content nil})
		       [:td.vhelp] (en/set-attr :id (str "tdvvalue"id))
);; vitamin clone-for
      [:tr.mineral] (en/clone-for [[id data] (nodes-data-to-map "mineral")]
		       [:td.mname] (en/content {:tag :label, :attrs {:for (str "mvalue"id), :id (str "lmvalue"id)}, :content (:mname data)})
		       [:td.minput] (en/content {:tag :input, :attrs {:type "hidden", :name (str "mid"id), :id (str "mid"id), :value id}, :content nil})
		       [:td.minput :input] (en/after {:tag :input, :attrs {:type "number", :step "any", :name (str "mvalue"id), :id (str "mvalue"id), :value "", :required "required"}, :content nil})
		       [:td.mhelp] (en/set-attr :id (str "tdmvalue"id))
);; mineral clone-for

)

(en/deftemplate edit-grocery
  (generate-html-resource (generate-html-resource "public/template.html" [:div.middle-column] "public/grocery-form.html" [:form#grocery-form]) [:div.left-column] "public/food-nav.html" [:div.food-nav])
  [node]
      [:title] (en/content "Edit grocery")
      [:h3.form-title] (en/content "Edit grocery")
      [:script#script] (en/after {:tag :script, :attrs nil, :content "personal_organiser.grocery.init();"})
      [:form#grocery-form] (en/set-attr :action "/update-grocery")
      [:input#name] (en/before {:tag :input, :attrs {:type "hidden", :name "groceryid", :id "groceryid", :value (:id node)}, :content nil})
      [:input#name] (en/set-attr :value (:gname (:data node)))
      [:input#calories] (en/set-attr :value (:gcalories (:data node)))
      [:input#fats] (en/set-attr :value (:gfats (:data node)))
      [:input#proteins] (en/set-attr :value (:gproteins (:data node)))
      [:input#carbohydrates] (en/set-attr :value (:gcarbohydrates (:data node)))
      [:input#water] (en/set-attr :value (:gwater (:data node)))
      [:textarea#description] (en/content (:gdesc (:data node)))
      [:tr.vitamin] (en/clone-for [[vid rid vvalue vlabel] (:data (n4j/cypher-query (str "start n=node("(:id node)") match (n)-[r:`grocery-has-vitamin`]-(n2) return ID(n2),ID(r),r.mg,n2.vname order by ID(r)")))]
		       [:td.vname] (en/content {:tag :label, :attrs {:for (str "vvalue"vid), :id (str "lvvalue"vid)}, :content vlabel})
		       [:td.vinput] (en/content {:tag :input, :attrs {:type "hidden", :name (str "vid"vid), :id (str "vid"vid), :value rid}, :content nil})
		       [:td.vinput :input] (en/after {:tag :input, :attrs {:type "number", :step "any", :name (str "vvalue"vid), :id (str "vvalue"vid), :value vvalue, :required "required"}, :content nil})
		       [:td.vhelp] (en/set-attr :id (str "tdvvalue"vid))
);; vitamin clone-for
      [:tr.mineral] (en/clone-for [[mid rid mvalue mlabel] (:data (n4j/cypher-query (str "start n=node("(:id node)") match (n)-[r:`grocery-has-mineral`]-(n2) return ID(n2),ID(r),r.mg,n2.mname order by ID(r)")))]
		       [:td.mname] (en/content {:tag :label, :attrs {:for (str "mvalue"mid), :id (str "lmvalue"mid)}, :content mlabel})
		       [:td.minput] (en/content {:tag :input, :attrs {:type "hidden", :name (str "mid"mid), :id (str "mid"mid), :value rid}, :content nil})
		       [:td.minput :input] (en/after {:tag :input, :attrs {:type "number", :step "any", :name (str "mvalue"mid), :id (str "mvalue"mid), :value mvalue, :required "required"}, :content nil})
		       [:td.mhelp] (en/set-attr :id (str "tdmvalue"mid))
);; mineral clone-for
      [:input#submit] (en/set-attr :value "Save changes")
)

(en/deftemplate read-all-grocery
  (generate-html-resource (generate-html-resource "public/template.html" [:div.middle-column] "public/grocery-table.html" [:table.grocery-table]) [:div.left-column] "public/food-nav.html" [:div.food-nav])
  []
  [:title] (en/content "Grocery table")
  [:tr.grocery-data] (en/clone-for [[id data] (nodes-data-to-map "grocery")]
				[:td.gname] (en/content (format "%s" (:gname data)))
				[:td.gcalories] (en/content (format "%s" (:gcalories data)))
				[:td.gfats] (en/content (format "%s" (:gfats data)))
				[:td.gproteins] (en/content (format "%s" (:gproteins data)))
				[:td.gcarbohydrates] (en/content (format "%s" (:gcarbohydrates data)))
				[:td.gwater] (en/content (format "%s" (:gwater data)))
				[:td.gdesc] (en/content (format "%s" (:gdesc data)))
				[:td.gedit] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/edit-grocery?id="id)}, :content "edit"})
				[:td.gdelete] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/delete-grocery?id="id)}, :content "delete"})))

(defn create-rel-for-node
"Create relationship for node to another node"
 [node-id data rel]
  (doseq [[id value] data]
    		(n4j/create-relationship node-id (read-string id) rel {:mg (read-string value)})))

(defn update-rel-for-node
"Update relationship by id"
 [data]
  (doseq [[id value] data]
    		(n4j/update-relationship (read-string id) {:mg (read-string value)})))

(defn save-grocery
"Save grocery in neo4j database"
 [gname gcalories gfats gproteins gcarbohydrates gwater gdesc vitamins minerals]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    (let [node-id (n4j/create-node "grocery" {:gname gname
			 :gcalories (read-string gcalories)
			 :gfats (read-string gfats)
			 :gproteins (read-string gproteins)
			 :gcarbohydrates (read-string gcarbohydrates)
			 :gwater (read-string gwater)
			 :gdesc gdesc})]
	(create-rel-for-node node-id vitamins :grocery-has-vitamin)
	(create-rel-for-node node-id minerals :grocery-has-mineral)))
  (read-all-grocery))

(defn update-grocery
"Update grocery in neo4j database"
[id gname gcalories gfats gproteins gcarbohydrates gwater gdesc vitamins minerals]
  (if-let [grocery-errors (create-grocery-errors gname gcalories gfats gproteins gcarbohydrates gwater gdesc)]
    (str "Grocery errors: " grocery-errors)
    ((n4j/update-node (n4j/read-node (read-string id)) {:gname gname
			 :gcalories gcalories
			 :gfats gfats
			 :gproteins gproteins
			 :gcarbohydrates gcarbohydrates
			 :gwater gwater
			 :gdesc gdesc})
     (update-rel-for-node vitamins)
     (update-rel-for-node minerals)))
  (read-all-grocery))

(defn delete-grocery
"Delete grocery from neo4j database"
 [id]
  (n4j/delete-node "grocery" id)
  (read-all-grocery))

(en/deftemplate food
    (generate-html-resource "public/template.html" [:div.left-column] "public/food-nav.html" [:div.food-nav])
[])
