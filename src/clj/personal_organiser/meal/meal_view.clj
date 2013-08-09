(ns personal-organiser.meal.meal-view
  (:require [personal-organiser.neo4j :as n4j]
	    [personal-organiser.html-generator :as hg]
	    [net.cgrand.enlive-html :as en]
	    [personal-organiser.utils :refer [nodes-data-to-map]]))

(en/deftemplate create-meal
  (hg/build-html-page [{:temp-sel [:div.middle-column], :comp "public/meal/meal-form.html", :comp-sel [:form#meal-form]}
	               {:temp-sel [:div.left-column], :comp "public/meal/meal-nav.html", :comp-sel [:div.meal-nav]}])
  []
  [:title] (en/content "Create meal")
  [:div.script] (en/content {:tag :script, :attrs {:src "js/meal.js"}, :content nil})
  [:div.script] (en/append {:tag :script, :attrs nil, :content "personal_organiser.meal.jsmeal.init();"})
  [:form#meal-form] (en/set-attr :action "/save-meal")
  [:option#ingredient-option] (en/clone-for [[id data] (nodes-data-to-map "grocery")]
				(comp (en/content (:gname data))
				      (en/set-attr :value id)
				      (en/remove-attr :id))))

(en/deftemplate edit-meal
  (hg/build-html-page [{:temp-sel [:div.middle-column], :comp "public/meal/meal-form.html", :comp-sel [:form#meal-form]}
	               {:temp-sel [:div.left-column], :comp "public/meal/meal-nav.html", :comp-sel [:div.meal-nav]}])
  [node]
  [:title] (en/content "Edit meal")
  [:h3.form-title] (en/content "Edit meal")
  [:div.script] (en/content {:tag :script, :attrs {:src "js/meal.js"}, :content nil})
  [:div.script] (en/append {:tag :script, :attrs nil, :content "personal_organiser.meal.jsmeal.init();"})
  [:form#meal-form] (en/set-attr :action "/update-meal")
  [:input#gname] (en/before {:tag :input, :attrs {:type "hidden", :name "idmeal", :id "idmeal", :value (:id node)}, :content nil})
  [:input#gname] (en/set-attr :value (:gname (:data node)))
  [:input#gcalories] (en/set-attr :value (:gcalories (:data node)))
  [:input#gfats] (en/set-attr :value (:gfats (:data node)))
  [:input#gproteins] (en/set-attr :value (:gproteins (:data node)))
  [:input#gcarbohydrates] (en/set-attr :value (:gcarbohydrates (:data node)))
  [:input#gwater] (en/set-attr :value (:gwater (:data node)))
  [:textarea#gdescription] (en/content (:gdesc (:data node)))
  [:tr.vitamin] (en/clone-for [[rid vvalue vlabel] (:data (n4j/cypher-query (str "start n=node("(:id node)") match (n)-[r:`meal-has-vitamin`]-(n2) return ID(r),r.mg,n2.vname order by ID(n2) asc")))]
		  [:td.vname] (en/content {:tag :label, :attrs {:for (str "value"rid), :id (str "lvalue"rid)}, :content vlabel})
		  [:td.vinput] (en/content {:tag :input, :attrs {:type "number", :step "any", :name (str "value"rid), :id (str "value"rid), :value vvalue, :required "required"}, :content nil})
		  [:td.vhelp] (en/set-attr :id (str "tdvalue"rid))
);; vitamin clone-for
  [:tr.mineral] (en/clone-for [[rid mvalue mlabel] (:data (n4j/cypher-query (str "start n=node("(:id node)") match (n)-[r:`meal-has-mineral`]-(n2) return ID(r),r.mg,n2.mname order by ID(n2) asc")))]
		  [:td.mname] (en/content {:tag :label, :attrs {:for (str "value"rid), :id (str "lvalue"rid)}, :content mlabel})
		  [:td.minput] (en/content {:tag :input, :attrs {:type "number", :step "any", :name (str "value"rid), :id (str "value"rid), :value mvalue, :required "required"}, :content nil})
		  [:td.mhelp] (en/set-attr :id (str "tdvalue"rid)));; mineral clone-for
  [:input#submit] (en/set-attr :value "Save changes"))

(en/deftemplate read-all-meals
  (hg/build-html-page [{:temp-sel [:div.middle-column], :comp "public/meal/meal-table.html", :comp-sel [:table.meal-table]}
	               {:temp-sel [:div.left-column], :comp "public/meal/meal-nav.html", :comp-sel [:div.meal-nav]}])
  []
  [:title] (en/content "Meal table")
  [:tr.meal-data] (en/clone-for [[id data] (nodes-data-to-map "meal")]
			[:td.mlname] (en/content (format "%s" (:mlname data)))
			[:td.mlcalories] (en/content (format "%s" (:mlcalories data)))
			[:td.mltype] (en/content (format "%s" (:mltype data)))
			[:td.mldesc] (en/content (format "%s" (:mldesc data)))
			[:td.mledit] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/edit-meal?id="id)}, :content "edit"})
			[:td.mldelete] (en/content {:tag :a, :attrs {:href (str "http://localhost:5000/delete-meal?id="id)}, :content "delete"})))

(en/deftemplate meal-nav
  (hg/build-html-page [{:temp-sel [:div.left-column], :comp "public/meal/meal-nav.html", :comp-sel [:div.meal-nav]}])
  [])
