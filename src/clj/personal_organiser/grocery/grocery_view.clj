(ns personal-organiser.grocery.grocery-view
  (:require [personal-organiser.neo4j :as n4j]
	    [personal-organiser.html-generator :as hg]
	    [net.cgrand.enlive-html :as en]))

(defn add-data-to-map
  "Add grocery data to maps"
  [start-map node]
  (let [id (:id node)
	data (:data node)]
       (assoc start-map id data)))

(defn nodes-data-to-map
  "Format data from nodes to maps"
  [index-type]
  (let [nodes (n4j/read-all-nodes-type-of index-type)]
       (reduce add-data-to-map {} nodes)))

(en/deftemplate create-grocery
  (hg/build-html-page [{:temp-sel [:div.middle-column], :comp "public/grocery/grocery-form.html", :comp-sel [:form#grocery-form]}
	               {:temp-sel [:div.left-column], :comp "public/grocery/food-nav.html", :comp-sel [:div.food-nav]}])
  []
  [:title] (en/content "Create grocery")
  [:div.script] (en/content {:tag :script, :attrs {:src "js/personal-organiser.js"}, :content nil})
  [:div.script] (en/append {:tag :script, :attrs nil, :content "personal_organiser.jsgrocery.init();"})
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
  (hg/build-html-page [{:temp-sel [:div.middle-column], :comp "public/grocery/grocery-form.html", :comp-sel [:form#grocery-form]}
	               {:temp-sel [:div.left-column], :comp "public/grocery/food-nav.html", :comp-sel [:div.food-nav]}])
  [node]
  [:title] (en/content "Edit grocery")
  [:h3.form-title] (en/content "Edit grocery")
  [:div.script] (en/content {:tag :script, :attrs {:src "js/personal-organiser.js"}, :content nil})
  [:div.script] (en/append {:tag :script, :attrs nil, :content "personal_organiser.jsgrocery.init();"})
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
  (hg/build-html-page [{:temp-sel [:div.middle-column], :comp "public/grocery/grocery-table.html", :comp-sel [:table.grocery-table]}
	               {:temp-sel [:div.left-column], :comp "public/grocery/food-nav.html", :comp-sel [:div.food-nav]}])
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

(en/deftemplate food-nav
  (hg/build-html-page [{:temp-sel [:div.left-column], :comp "public/grocery/food-nav.html", :comp-sel [:div.food-nav]}])
  [])
