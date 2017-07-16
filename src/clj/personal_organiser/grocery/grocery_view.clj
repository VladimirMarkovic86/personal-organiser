(ns personal-organiser.grocery.grocery-view
  (:require [personal-organiser.html-generator :as hg]
            [net.cgrand.enlive-html :as en]
            [personal-organiser.mongo :as mon]))

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
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.grocery.jsgrocery');"})
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
                [grocery]
                [:title] (en/content "Edit grocery")
                [:h3.form-title] (en/content "Edit grocery")
                [:form#grocery-form] (en/set-attr :action "/update-grocery")
                [:input#gname] (en/before {:tag     :input,
                                           :attrs   {:type  "hidden",
                                                     :name  "idgrocery",
                                                     :id    "idgrocery",
                                                     :value (.toString (:_id grocery))},
                                           :content nil})
                [:input#gname] (en/set-attr :value (:gname grocery))
                [:input#gcalories] (en/set-attr :value (:gcalories grocery))
                [:input#gfats] (en/set-attr :value (:gfats grocery))
                [:input#gproteins] (en/set-attr :value (:gproteins grocery))
                [:input#gcarbohydrates] (en/set-attr :value (:gcarbohydrates grocery))
                [:input#gwater] (en/set-attr :value (:gwater grocery))
                [:input#gorigin-all] (if (= (:gorigin grocery) "All")
                                       (en/set-attr :checked "checked")
                                       (en/set-attr :name "gorigin"))
                [:input#gorigin-vegetarian] (if (= (:gorigin grocery) "Vegetarian")
                                              (en/set-attr :checked "checked")
                                              (en/set-attr :name "gorigin"))
                [:textarea#gdescription] (en/content (:gdesc grocery))
                [:input#submit] (en/set-attr :value "Save changes")
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.grocery.jsgrocery');"})
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
                [:tr.grocery-data] (en/clone-for [grocery (mon/find-by-filter (mon/grocery-coll) {})]
                                                 [:tr.grocery-data] (en/set-attr :id (str "grocery-" (.toString (:_id grocery))))
                                                 [:td.gname] (en/content (format "%s" (:gname grocery)))
                                                 [:td.gcalories] (en/content (format "%s" (:gcalories grocery)))
                                                 [:td.gfats] (en/content (format "%s" (:gfats grocery)))
                                                 [:td.gproteins] (en/content (format "%s" (:gproteins grocery)))
                                                 [:td.gcarbohydrates] (en/content (format "%s" (:gcarbohydrates grocery)))
                                                 [:td.gorigin] (en/content (format "%s" (:gorigin grocery)))
                                                 [:td.gedit :a] (en/set-attr :href (str "/edit-grocery/" (.toString (:_id grocery))))
                                                 [:td.gdelete :a] (en/set-attr :id (str "gdelete" (.toString (:_id grocery)))))
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.grocery.jsgrocerytbl');"})
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
