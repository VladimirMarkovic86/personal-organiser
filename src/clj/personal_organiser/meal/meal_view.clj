(ns personal-organiser.meal.meal-view
  (:require [personal-organiser.html-generator :as hg]
            [net.cgrand.enlive-html :as en]
            [clojure.string :as cstring]
            [personal-organiser.mongo :as mon]))

(en/deftemplate create-meal
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/meal/meal-form.html",
                                      :comp-sel [:form#meal-form]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/meal/meal-nav.html",
                                      :comp-sel [:div.meal-nav]}])
                []
                [:title] (en/content "Create meal")
                [:form#meal-form] (en/set-attr :action "/save-meal")
                [:tr.ingredient-row] nil
                [:option#ingredient-option1] (en/clone-for [ingredient (mon/find-by-filter (mon/grocery-coll) {})]
                                                           (comp (en/content (:gname ingredient))
                                                                 (en/set-attr :value (.toString (:_id ingredient)))
                                                                 (en/remove-attr :id)))
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.meal.jsmeal');"})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.meal.jsmeal.init();"}))

(defn exist-ing-ind-str
  "Create data out of vector separated with ;"
  [groceries-id]
  (cstring/replace
    (cstring/replace
      (reduce (fn [st-str grocery] (cstring/join ";" [st-str (:id grocery)]))
              ""
              groceries-id)
      #"^;" "")
    #";$" ""))

(en/deftemplate edit-meal
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/meal/meal-form.html",
                                      :comp-sel [:form#meal-form]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/meal/meal-nav.html",
                                      :comp-sel [:div.meal-nav]}])
                [meal]
                [:title] (en/content "Edit meal")
                [:h3.form-title] (en/content "Edit meal")
                [:form#meal-form] (en/set-attr :action "/update-meal")
                [:input#mlname] (comp (en/before {:tag     :input,
                                                  :attrs   {:type  "hidden"
                                                            :value (.toString (:_id meal))
                                                            :name  "idmeal"}
                                                  :content nil})
                                      (en/set-attr :value (:mlname meal)))
                [:input#mlcalories] (en/set-attr :value (:mlcalories meal))
                [:input#mltype-breakfast] (if (= (:mltype meal) "Breakfast")
                                            (en/set-attr :checked "checked")
                                            (en/set-attr :name "mltype"))
                [:input#mltype-lunch] (if (= (:mltype meal) "Lunch")
                                        (en/set-attr :checked "checked")
                                        (en/set-attr :name "mltype"))
                [:input#mltype-dinner] (if (= (:mltype meal) "Dinner")
                                         (en/set-attr :checked "checked")
                                         (en/set-attr :name "mltype"))
                [:textarea#mldesc] (en/content (:mldesc meal))
                [:input#mlimg] (en/after {:tag     :input,
                                          :attrs   {:type  "hidden"
                                                    :value (:mlimg meal)
                                                    :name  "mlhimg"}
                                          :content nil})
                [:input#ingredient-indexes] (comp (en/before {:tag     :input,
                                                              :attrs   {:type  "hidden",
                                                                        :name  "existing-ing-ind",
                                                                        :id    "existing-ing-ind",
                                                                        :value (exist-ing-ind-str (:groceries meal))},
                                                              :content nil})
                                                  (en/set-attr :value (str (exist-ing-ind-str (:groceries meal)) ";1")))
                [:tr.ingredient-row] (en/clone-for [ingredient (mon/find-all-from-list (mon/grocery-coll) (:groceries meal))]
                                                   [:tr.ingredient-row] (en/set-attr :id (str "ingredient-row" (.toString (:_id ingredient))))
                                                   [:option#ingredient-option2] (en/clone-for [grocery (mon/find-by-filter (mon/grocery-coll) {})]
                                                                                              (comp (en/content (:gname grocery))
                                                                                                    (if (= (:id ingredient) (.toString (:_id grocery)))
                                                                                                      (en/set-attr :selected "selected")
                                                                                                      (en/set-attr :disabled "disabled"))
                                                                                                    (en/set-attr :value (.toString (:_id grocery)))
                                                                                                    (en/remove-attr :id)))
                                                   [:select#ingredient2] (en/set-attr :name (str "ingredient" (.toString (:_id ingredient)))
                                                                                      :id (str "ingredient" (.toString (:_id ingredient))))
                                                   [:input#igrams2] (en/set-attr :name (str "igrams" (.toString (:_id ingredient)))
                                                                                 :id (str "igrams" (.toString (:_id ingredient)))
                                                                                 :value (:grams ingredient))
                                                   [:input#iquantity2] (en/set-attr :name (str "iquantity" (.toString (:_id ingredient)))
                                                                                    :id (str "iquantity" (.toString (:_id ingredient)))
                                                                                    :value (:quantity ingredient))
                                                   [:a#iremove2] (en/set-attr :name (str "iremove" (.toString (:_id ingredient)))
                                                                              :id (str "iremove" (.toString (:_id ingredient))))) ;; grocery clone-for
                [:option#ingredient-option1] (en/clone-for [ingredient (mon/find-by-filter (mon/grocery-coll) {})]
                                                           (comp (en/content (:gname ingredient))
                                                                 (en/set-attr :value (.toString (:_id ingredient)))
                                                                 (en/remove-attr :id)))
                [:input#submit] (en/set-attr :value "Save changes")
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.meal.jsmeal');"})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.meal.jsmeal.init();"}))

(en/deftemplate read-all-meals
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/meal/meal-table.html",
                                      :comp-sel [:table.meal-table]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/meal/meal-nav.html",
                                      :comp-sel [:div.meal-nav]}])
                []
                [:title] (en/content "Meal table")
                [:tr.meal-data] (en/clone-for [meal (mon/find-by-filter (mon/meal-coll) {})]
                                              [:tr.meal-data] (en/set-attr :id (str "meal-" (.toString (:_id meal))))
                                              [:td.mlname] (en/content (format "%s" (:mlname meal)))
                                              [:td.mlcalories] (en/content (format "%s" (:mlcalories meal)))
                                              [:td.mltype] (en/content (format "%s" (:mltype meal)))
                                              [:td.mledit :a] (en/set-attr :href (str "/edit-meal/" (.toString (:_id meal))))
                                              [:td.mldelete :a] (en/set-attr :id (str "mldelete" (.toString (:_id meal)))))
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "goog.require('personal_organiser.meal.jsmealtbl');"})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.meal.jsmealtbl.init();"}))

(en/deftemplate meal-nav
                (hg/build-html-page [{:temp-sel [:div.left-column],
                                      :comp     "public/meal/meal-nav.html",
                                      :comp-sel [:div.meal-nav]}])
                []
                [:title] (en/content "Meal navigation"))
