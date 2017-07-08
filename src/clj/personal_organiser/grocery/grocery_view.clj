(ns personal-organiser.grocery.grocery-view
  (:require [personal-organiser.neo4j :as n4j]
            [personal-organiser.html-generator :as hg]
            [net.cgrand.enlive-html :as en]
            [personal-organiser.utils :refer [nodes-data-to-map]]))

;Build page to create grocery in database
(en/deftemplate create-grocery
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/grocery/grocery-form.html",
                                      :comp-sel [:form#grocery-form]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/grocery/grocery-nav.html",
                                      :comp-sel [:div.grocery-nav]}])
                []
                [:title] (en/content "Create grocery")
                [:form#grocery-form] (en/set-attr :action "/save-grocery")
                [:tr.vitamin] (en/clone-for [[id vname]
                                             (:data (n4j/cypher-query (str "start n=node(" (clojure.string/join "," (n4j/get-type-indexes "vitamin")) ")
							      return ID(n),
								     n.vname
								     order by ID(n) asc")))]
                                            [:td.vname] (en/content {:tag     :label,
                                                                     :attrs   {:for (str "value" id),
                                                                               :id  (str "lvalue" id)},
                                                                     :content vname})
                                            [:td.vinput] (en/content {:tag     :input,
                                                                      :attrs   {:type     "number",
                                                                                :step     "any",
                                                                                :name     (str "value" id),
                                                                                :id       (str "value" id),
                                                                                :value    "",
                                                                                :required "required"},
                                                                      :content nil})
                                            [:td.vhelp] (en/set-attr :id (str "tdvalue" id))) ;; vitamin clone-for
                [:tr.mineral] (en/clone-for [[id mname]
                                             (:data (n4j/cypher-query (str "start n=node(" (clojure.string/join "," (n4j/get-type-indexes "mineral")) ")
							      return ID(n),
								     n.mname
								     order by ID(n) asc")))]
                                            [:td.mname] (en/content {:tag     :label,
                                                                     :attrs   {:for (str "value" id),
                                                                               :id  (str "lvalue" id)},
                                                                     :content mname})
                                            [:td.minput] (en/content {:tag     :input,
                                                                      :attrs   {:type     "number",
                                                                                :step     "any",
                                                                                :name     (str "value" id),
                                                                                :id       (str "value" id),
                                                                                :value    "",
                                                                                :required "required"},
                                                                      :content nil})
                                            [:td.mhelp] (en/set-attr :id (str "tdvalue" id))) ;; mineral clone-for
                [:div.script] (en/content {:tag     :script,
                                           :attrs   {:src "http://localhost:5000/js/grocery.js"},
                                           :content nil})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.grocery.jsgrocery.init();"})
                )

;Build page to edit existing grocery in database
(en/deftemplate edit-grocery
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/grocery/grocery-form.html",
                                      :comp-sel [:form#grocery-form]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/grocery/grocery-nav.html",
                                      :comp-sel [:div.grocery-nav]}])
                [node]
                [:title] (en/content "Edit grocery")
                [:h3.form-title] (en/content "Edit grocery")
                [:form#grocery-form] (en/set-attr :action "/update-grocery")
                [:input#gname] (en/before {:tag     :input,
                                           :attrs   {:type  "hidden",
                                                     :name  "idgrocery",
                                                     :id    "idgrocery",
                                                     :value (:id node)},
                                           :content nil})
                [:input#gname] (en/set-attr :value (:gname (:data node)))
                [:input#gcalories] (en/set-attr :value (:gcalories (:data node)))
                [:input#gfats] (en/set-attr :value (:gfats (:data node)))
                [:input#gproteins] (en/set-attr :value (:gproteins (:data node)))
                [:input#gcarbohydrates] (en/set-attr :value (:gcarbohydrates (:data node)))
                [:input#gwater] (en/set-attr :value (:gwater (:data node)))
                [:input#gorigin-all] (if (= (:gorigin (:data node)) "All")
                                       (en/set-attr :checked "checked")
                                       (en/set-attr :name "gorigin"))
                [:input#gorigin-vegetarian] (if (= (:gorigin (:data node)) "Vegetarian")
                                              (en/set-attr :checked "checked")
                                              (en/set-attr :name "gorigin"))
                [:textarea#gdescription] (en/content (:gdesc (:data node)))
                [:tr.vitamin] (en/clone-for [[rid vvalue vlabel]
                                             (:data (n4j/cypher-query (str "start n=node(" (:id node) ")
							      match (n)-[r:`grocery-has-vitamin`]-(n2)
							      return ID(r),
								     r.mg,
								     n2.vname
								     order by ID(n2) asc")))]
                                            [:td.vname] (en/content {:tag     :label,
                                                                     :attrs   {:for (str "value" rid),
                                                                               :id  (str "lvalue" rid)},
                                                                     :content vlabel})
                                            [:td.vinput] (en/content {:tag     :input,
                                                                      :attrs   {:type     "number",
                                                                                :step     "any",
                                                                                :name     (str "value" rid),
                                                                                :id       (str "value" rid),
                                                                                :value    vvalue,
                                                                                :required "required"},
                                                                      :content nil})
                                            [:td.vhelp] (en/set-attr :id (str "tdvalue" rid))) ;; vitamin clone-for
                [:tr.mineral] (en/clone-for [[rid mvalue mlabel]
                                             (:data (n4j/cypher-query (str "start n=node(" (:id node) ")
							      match (n)-[r:`grocery-has-mineral`]-(n2)
							      return ID(r),
								     r.mg,
								     n2.mname
								     order by ID(n2) asc")))]
                                            [:td.mname] (en/content {:tag     :label,
                                                                     :attrs   {:for (str "value" rid),
                                                                               :id  (str "lvalue" rid)},
                                                                     :content mlabel})
                                            [:td.minput] (en/content {:tag     :input,
                                                                      :attrs   {:type     "number",
                                                                                :step     "any",
                                                                                :name     (str "value" rid),
                                                                                :id       (str "value" rid),
                                                                                :value    mvalue,
                                                                                :required "required"},
                                                                      :content nil})
                                            [:td.mhelp] (en/set-attr :id (str "tdvalue" rid))) ;; mineral clone-for
                [:input#submit] (en/set-attr :value "Save changes")
                [:div.script] (en/content {:tag     :script,
                                           :attrs   {:src "http://localhost:5000/js/grocery.js"},
                                           :content nil})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.grocery.jsgrocery.init();"}))

;Build page that shows all groceries
(en/deftemplate read-all-groceries
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/grocery/grocery-table.html",
                                      :comp-sel [:table.grocery-table]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/grocery/grocery-nav.html",
                                      :comp-sel [:div.grocery-nav]}])
                []
                [:title] (en/content "Grocery table")
                [:tr.grocery-data] (en/clone-for [[id data] (nodes-data-to-map "grocery")]
                                                 [:tr.grocery-data] (en/set-attr :id (str "grocery-" id))
                                                 [:td.gname] (en/content (format "%s" (:gname data)))
                                                 [:td.gcalories] (en/content (format "%s" (:gcalories data)))
                                                 [:td.gfats] (en/content (format "%s" (:gfats data)))
                                                 [:td.gproteins] (en/content (format "%s" (:gproteins data)))
                                                 [:td.gcarbohydrates] (en/content (format "%s" (:gcarbohydrates data)))
                                                 [:td.gorigin] (en/content (format "%s" (:gorigin data)))
                                                 [:td.gedit :a] (en/set-attr :href (str "/edit-grocery/" id))
                                                 [:td.gdelete :a] (en/set-attr :id (str "gdelete" id)))
                [:div.script] (en/content {:tag     :script,
                                           :attrs   {:src "http://localhost:5000/js/grocery.js"},
                                           :content nil})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.grocery.jsgrocerytbl.init();"})
                )

;Build page with grocery page navigation
(en/deftemplate grocery-nav
                (hg/build-html-page [{:temp-sel [:div.left-column],
                                      :comp     "public/grocery/grocery-nav.html",
                                      :comp-sel [:div.grocery-nav]}])
                []
                [:title] (en/content "Grocery navigation"))
