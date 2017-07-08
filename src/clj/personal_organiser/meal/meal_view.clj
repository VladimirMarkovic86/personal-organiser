(ns personal-organiser.meal.meal-view
  (:require [personal-organiser.neo4j :as n4j]
	    [personal-organiser.html-generator :as hg]
	    [net.cgrand.enlive-html :as en]
	    [clojure.string :as cstring]
	    [personal-organiser.utils :refer [nodes-data-to-map]]))

(en/deftemplate create-meal
  (hg/build-html-page [{:temp-sel [:div.middle-column],
			:comp "public/meal/meal-form.html",
			:comp-sel [:form#meal-form]}
	               {:temp-sel [:div.left-column],
			:comp "public/meal/meal-nav.html",
			:comp-sel [:div.meal-nav]}])
  []
  [:title] (en/content "Create meal")
  [:form#meal-form] (en/set-attr :action "/save-meal")
  [:tr.ingredient-row] nil
  [:option#ingredient-option1] (en/clone-for [[id data] (nodes-data-to-map "grocery")]
				(comp (en/content (:gname data))
				      (en/set-attr :value id)
				      (en/remove-attr :id)))
  [:div.script] (en/content {:tag :script,
			     :attrs {:src "http://localhost:5000/js/meal.js"},
			     :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.meal.jsmeal.init();"}))

(defn exist-ing-ind
  "Read relationship ids with given node id"
  [id]
  (:data (n4j/cypher-query (str "start n=node("id")
				 match n-[r:`meal-has-grocery`]-()
				 return ID(r)"))))

(defn exist-ing-ind-str
  "Create data out of vector separated with ;"
  [id]
  (cstring/replace
    (cstring/replace
      (reduce (fn [st-str vec] (cstring/join ";" [st-str (first vec)]))
	      ""
	      (exist-ing-ind id))
      #"^;" "")
    #";$" ""))

(en/deftemplate edit-meal
  (hg/build-html-page [{:temp-sel [:div.middle-column],
			:comp "public/meal/meal-form.html",
			:comp-sel [:form#meal-form]}
	               {:temp-sel [:div.left-column],
			:comp "public/meal/meal-nav.html",
			:comp-sel [:div.meal-nav]}])
  [node]
  [:title] (en/content "Edit meal")
  [:h3.form-title] (en/content "Edit meal")
  [:form#meal-form] (en/set-attr :action "/update-meal")
  [:input#mlname] (comp (en/before {:tag :input,
					   :attrs {:type "hidden"
						   :value (str (:id node))
						   :name "idmeal"}
					   :content nil})
			(en/set-attr :value (:mlname (:data node))))
  [:input#mlcalories] (en/set-attr :value (:mlcalories (:data node)))
  [:input#mltype-breakfast] (if (= (:mltype (:data node)) "Breakfast")
			      (en/set-attr :checked "checked")
			      (en/set-attr :name "mltype"))
  [:input#mltype-lunch] (if (= (:mltype (:data node)) "Lunch")
			      (en/set-attr :checked "checked")
			      (en/set-attr :name "mltype"))
  [:input#mltype-dinner] (if (= (:mltype (:data node)) "Dinner")
			      (en/set-attr :checked "checked")
			      (en/set-attr :name "mltype"))
  [:textarea#mldesc] (en/content (:mldesc (:data node)))
  [:input#mlimg] (en/after {:tag :input,
			    :attrs {:type "hidden"
				    :value (:mlimg (:data node))
				    :name "mlhimg"}
			    :content nil})
  [:input#ingredient-indexes] (comp (en/before {:tag :input,
					  :attrs {:type "hidden",
						  :name "existing-ing-ind",
						  :id "existing-ing-ind",
						  :value (exist-ing-ind-str (:id node))},
					  :content nil})
				    (en/set-attr :value (str (exist-ing-ind-str (:id node))";1")))
  [:tr.ingredient-row] (en/clone-for [[rid grams quantity gname]
					(:data
					  (n4j/cypher-query
					    (str "start n=node("(:id node)")
						  match (n)-[r:`meal-has-grocery`]-(n2)
						  return ID(r),
							 r.grams,
							 r.quantity,
							 n2.gname
							 order by ID(n2) asc")))]
		  [:tr.ingredient-row] (en/set-attr :id (str "ingredient-row"rid))
		  [:option#ingredient-option2] (en/clone-for [[id data] (nodes-data-to-map "grocery")]
						(comp (en/content (:gname data))
						      (if (= gname (:gname data))
						          (en/set-attr :selected "selected")
						          (en/set-attr :disabled "disabled"))
						      (en/set-attr :value id)
						      (en/remove-attr :id)))
		  [:select#ingredient2] (en/set-attr :name (str "ingredient"rid)
						     :id (str "ingredient"rid))
		  [:input#igrams2] (en/set-attr :name (str "igrams"rid)
						:id (str "igrams"rid)
						:value grams)
		  [:input#iquantity2] (en/set-attr :name (str "iquantity"rid)
						   :id (str "iquantity"rid)
						   :value quantity)
		  [:a#iremove2] (en/set-attr :name (str "iremove"rid)
					     :id (str "iremove"rid)));; grocery clone-for
  [:option#ingredient-option1] (en/clone-for [[id data] (nodes-data-to-map "grocery")]
				(comp (en/content (:gname data))
				      (en/set-attr :value id)
				      (en/remove-attr :id)))
  [:input#submit] (en/set-attr :value "Save changes")
  [:head] (en/append {:tag :script,
				  :attrs {:src "http://localhost:5000/js/meal.js"},
				  :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.meal.jsmeal.init();"}))

(en/deftemplate read-all-meals
  (hg/build-html-page [{:temp-sel [:div.middle-column],
			:comp "public/meal/meal-table.html",
			:comp-sel [:table.meal-table]}
	               {:temp-sel [:div.left-column],
			:comp "public/meal/meal-nav.html",
			:comp-sel [:div.meal-nav]}])
  []
  [:title] (en/content "Meal table")
  [:tr.meal-data] (en/clone-for [[id data] (nodes-data-to-map "meal")]
			[:tr.meal-data] (en/set-attr :id (str "meal-"id))
			[:td.mlname] (en/content (format "%s" (:mlname data)))
			[:td.mlcalories] (en/content (format "%s" (:mlcalories data)))
			[:td.mltype] (en/content (format "%s" (:mltype data)))
			[:td.mledit :a] (en/set-attr :href (str "/edit-meal/"id))
			[:td.mldelete :a] (en/set-attr :id (str "mldelete"id)))
  [:div.script] (en/content {:tag :script,
				  :attrs {:src "http://localhost:5000/js/meal.js"},
				  :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.meal.jsmealtbl.init();"}))

(en/deftemplate meal-nav
  (hg/build-html-page [{:temp-sel [:div.left-column],
			:comp "public/meal/meal-nav.html",
			:comp-sel [:div.meal-nav]}])
  []
  [:title] (en/content "Meal navigation"))
