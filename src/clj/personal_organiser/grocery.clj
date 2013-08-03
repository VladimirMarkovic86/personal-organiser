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

(defn generate-html-resource
  "Generates html resource from parameter template and map variable
   components with three properties temp-sel, comp and comp-sel"
  [template components]
  (en/html-resource
    (en/transform
      (en/html-resource template)
      (:temp-sel components)
      (fn [selected-tag]
	  (assoc selected-tag :content (en/select (en/html-resource (:comp components)) (:comp-sel components)))))))

(defn build-html-page
  "Build html page with vector of maps where every map contains 
   template selector where component, as second map property,
   is going to be appended. And component selector that represents
   part or all of component html file."
  [files-and-selectors]
  (reduce generate-html-resource (en/html-resource "public/template.html") files-and-selectors))

(en/deftemplate create-grocery
  (build-html-page [{:temp-sel [:div.middle-column], :comp "public/grocery-form.html", :comp-sel [:form#grocery-form]}
	            {:temp-sel [:div.left-column], :comp "public/food-nav.html", :comp-sel [:div.food-nav]}])
  []
  [:title] (en/content "Create grocery")
  [:script#script] (en/after {:tag :script, :attrs nil, :content "personal_organiser.jsgrocery.init();"})
  [:form#grocery-form] (en/set-attr :action "/save-grocery")
  [:tr.vitamin] (en/clone-for [[id vname] (:data (n4j/cypher-query (str "start n=node("(clojure.string/join ","(n4j/get-type-indexes "vitamin"))") return ID(n),n.vname order by ID(n) asc")))]
	          [:td.vname] (en/content {:tag :label, :attrs {:for (str "value"id), :id (str "lvalue"id)}, :content vname})
		  [:td.vinput] (en/content {:tag :input, :attrs {:type "number", :step "any", :name (str "value"id), :id (str "value"id), :value "", :required "required"}, :content nil})
		  [:td.vhelp] (en/set-attr :id (str "tdvalue"id)));; vitamin clone-for
  [:tr.mineral] (en/clone-for [[id mname] (:data (n4j/cypher-query (str "start n=node("(clojure.string/join ","(n4j/get-type-indexes "mineral"))") return ID(n),n.mname order by ID(n) asc")))]
		  [:td.mname] (en/content {:tag :label, :attrs {:for (str "value"id), :id (str "lvalue"id)}, :content mname})
		  [:td.minput] (en/content {:tag :input, :attrs {:type "number", :step "any", :name (str "value"id), :id (str "value"id), :value "", :required "required"}, :content nil})
		  [:td.mhelp] (en/set-attr :id (str "tdvalue"id)));; mineral clone-for
)

(en/deftemplate edit-grocery
  (build-html-page [{:temp-sel [:div.middle-column], :comp "public/grocery-form.html", :comp-sel [:form#grocery-form]}
	            {:temp-sel [:div.left-column], :comp "public/food-nav.html", :comp-sel [:div.food-nav]}])
  [node]
  [:title] (en/content "Edit grocery")
  [:h3.form-title] (en/content "Edit grocery")
  [:script#script] (en/after {:tag :script, :attrs nil, :content "personal_organiser.jsgrocery.init();"})
  [:form#grocery-form] (en/set-attr :action "/update-grocery")
  [:input#gname] (en/before {:tag :input, :attrs {:type "hidden", :name "idgrocery", :id "idgrocery", :value (:id node)}, :content nil})
  [:input#gname] (en/set-attr :value (:gname (:data node)))
  [:input#gcalories] (en/set-attr :value (:gcalories (:data node)))
  [:input#gfats] (en/set-attr :value (:gfats (:data node)))
  [:input#gproteins] (en/set-attr :value (:gproteins (:data node)))
  [:input#gcarbohydrates] (en/set-attr :value (:gcarbohydrates (:data node)))
  [:input#gwater] (en/set-attr :value (:gwater (:data node)))
  [:textarea#gdescription] (en/content (:gdesc (:data node)))
  [:tr.vitamin] (en/clone-for [[rid vvalue vlabel] (:data (n4j/cypher-query (str "start n=node("(:id node)") match (n)-[r:`grocery-has-vitamin`]-(n2) return ID(r),r.mg,n2.vname order by ID(n2) asc")))]
		  [:td.vname] (en/content {:tag :label, :attrs {:for (str "value"rid), :id (str "lvalue"rid)}, :content vlabel})
		  [:td.vinput] (en/content {:tag :input, :attrs {:type "number", :step "any", :name (str "value"rid), :id (str "value"rid), :value vvalue, :required "required"}, :content nil})
		  [:td.vhelp] (en/set-attr :id (str "tdvalue"rid))
);; vitamin clone-for
  [:tr.mineral] (en/clone-for [[rid mvalue mlabel] (:data (n4j/cypher-query (str "start n=node("(:id node)") match (n)-[r:`grocery-has-mineral`]-(n2) return ID(r),r.mg,n2.mname order by ID(n2) asc")))]
		  [:td.mname] (en/content {:tag :label, :attrs {:for (str "value"rid), :id (str "lvalue"rid)}, :content mlabel})
		  [:td.minput] (en/content {:tag :input, :attrs {:type "number", :step "any", :name (str "value"rid), :id (str "value"rid), :value mvalue, :required "required"}, :content nil})
		  [:td.mhelp] (en/set-attr :id (str "tdvalue"rid)));; mineral clone-for
  [:input#submit] (en/set-attr :value "Save changes"))

(en/deftemplate read-all-grocery
  (build-html-page [{:temp-sel [:div.middle-column], :comp "public/grocery-table.html", :comp-sel [:table.grocery-table]}
	            {:temp-sel [:div.left-column], :comp "public/food-nav.html", :comp-sel [:div.food-nav]}])
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

(defn save-grocery
  "Save grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors (:gname req-params) (:gcalories req-params) (:gfats req-params) (:gproteins req-params) (:gcarbohydrates req-params) (:gwater req-params) (:gdesc req-params))]
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

(defn update-rels-for-node
  "Update relationships between node and its target nodes with data"
  [rel-ids params-map]
    (doseq [rel-id rel-ids]
      (n4j/update-relationship (read-string (str (rel-id 0))) {:mg (read-string (get params-map (str ":value"(rel-id 0))))})))

(defn update-grocery
  "Update grocery in neo4j database"
  [req-params]
  (if-let [grocery-errors (create-grocery-errors (:gname req-params)
						 (:gcalories req-params)
						 (:gfats req-params)
						 (:gproteins req-params)
						 (:gcarbohydrates req-params)
						 (:gwater req-params)
						 (:gdesc req-params))]
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

(en/deftemplate food
  (build-html-page [{:temp-sel [:div.left-column], :comp "public/food-nav.html", :comp-sel [:div.food-nav]}])
  [])
