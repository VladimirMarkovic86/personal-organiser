(ns personal-organiser.organism.organism-view
  (:use (sandbar stateful-session))
  (:require [personal-organiser.neo4j :as n4j]
            [personal-organiser.html-generator :as hg]
            [net.cgrand.enlive-html :as en]
            [clojure.test :refer :all]))

(en/deftemplate create-organism
                (hg/build-html-page [{:temp-sel [:div.topcontent],
                                      :comp     "public/organism/organism-form.html",
                                      :comp-sel [:form#organism-form]}])
                []
                [:title] (en/content "Create organism")
                [:div.topcontent] (en/set-attr :class "organism")
                [:td#to-login] (en/content {:tag     :a,
                                            :attrs   {:href "/login"}
                                            :content "back to login"})
                [:td.info] (en/content {:tag     :div,
                                        :attrs   nil,
                                        :content [{:tag     :div,
                                                   :attrs   nil,
                                                   :content "Following data represents grown-up daily needs"}
                                                  {:tag     :div,
                                                   :attrs   nil,
                                                   :content "for vitamins and minerals and can be changed"}]})
                [:div.script] (en/content {:tag     :script,
                                           :attrs   {:src "http://localhost:5000/js/organism.js"},
                                           :content nil})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.organism.jsorganism.init();"})
                [:form#organism-form] (en/set-attr :action "/save-organism")
                [:option#year] (en/clone-for [year (into [] (map str (range 1970 2021 1)))]
                                             (comp (en/content year)
                                                   (en/set-attr :value year)
                                                   (en/remove-attr :id)))
                [:option#month] (en/clone-for [[month-num month-name] [["01" "January"]
                                                                       ["02" "February"]
                                                                       ["03" "March"]
                                                                       ["04" "April"]
                                                                       ["05" "May"]
                                                                       ["06" "Jun"]
                                                                       ["07" "July"]
                                                                       ["08" "August"]
                                                                       ["09" "September"]
                                                                       ["10" "October"]
                                                                       ["11" "November"]
                                                                       ["12" "December"]]]
                                              (comp (en/content month-name)
                                                    (en/set-attr :value month-num)
                                                    (en/remove-attr :id)))
                [:option#day] (en/content nil)
                [:tr.vitamin] (en/clone-for [[id vname vdefvalue]
                                             (:data
                                               (n4j/cypher-query (str "start n=node(" (clojure.string/join ","
                                                                                                           (n4j/get-type-indexes "vitamin")) ")
							  return ID(n),
								 n.vname,
								 n.vdefvalue
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
                                                                                :value    vdefvalue,
                                                                                :required "required"},
                                                                      :content nil})
                                            [:td.vhelp] (en/set-attr :id (str "tdvalue" id))) ;; vitamin clone-for
                [:tr.mineral] (en/clone-for [[id mname mdefvalue]
                                             (:data
                                               (n4j/cypher-query (str "start n=node(" (clojure.string/join ","
                                                                                                           (n4j/get-type-indexes "mineral")) ")
							  return ID(n),
								 n.mname,
								 n.mdefvalue
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
                                                                                :value    mdefvalue,
                                                                                :required "required"},
                                                                      :content nil})
                                            [:td.mhelp] (en/set-attr :id (str "tdvalue" id))) ;; mineral clone-for
                )

(with-test
  (defn get-date-part
    "Get date part from date format dd.MM.yyyy"
    [birthday param]
    ((clojure.string/split birthday #"\.") param))
  (is (= "16" (get-date-part "16.10.1986" 0)))
  (is (= "10" (get-date-part "16.10.1986" 1)))
  (is (= "1986" (get-date-part "16.10.1986" 2)))
  )

(with-test
  (defn generate-day-numbers
    "Generate days numbers for html element select option"
    [number-of-days]
    (into [] (map str (into [] (range 1 (+ number-of-days 1) 1)))))
  (is (= ["1" "2" "3" "4" "5"] (generate-day-numbers 5)))
  )

(with-test
  (defn day-numbers
    ""
    [birthday]
    (if (contains? #{"01" "03" "05" "07" "08" "10" "12"} (get-date-part birthday 1))
      (generate-day-numbers 31)
      (if (contains? #{"04" "06" "09" "11"} (get-date-part birthday 1))
        (generate-day-numbers 30)
        (if (re-find #"^-?\d+$" (str (/ (read-string (get-date-part birthday 2)) 4)))
          (generate-day-numbers 29)
          (generate-day-numbers 28)
          )
        )
      ))
  (is (= ["1" "2" "3" "4" "5"
          "6" "7" "8" "9" "10"
          "11" "12" "13" "14" "15"
          "16" "17" "18" "19" "20"
          "21" "22" "23" "24" "25"
          "26" "27" "28" "29" "30"
          "31"] (day-numbers "16.10.1986")))
  (is (= ["1" "2" "3" "4" "5"
          "6" "7" "8" "9" "10"
          "11" "12" "13" "14" "15"
          "16" "17" "18" "19" "20"
          "21" "22" "23" "24" "25"
          "26" "27" "28" "29" "30"] (day-numbers "16.04.1986")))
  (is (= ["1" "2" "3" "4" "5"
          "6" "7" "8" "9" "10"
          "11" "12" "13" "14" "15"
          "16" "17" "18" "19" "20"
          "21" "22" "23" "24" "25"
          "26" "27" "28"] (day-numbers "16.02.1986")))
  (is (= ["1" "2" "3" "4" "5"
          "6" "7" "8" "9" "10"
          "11" "12" "13" "14" "15"
          "16" "17" "18" "19" "20"
          "21" "22" "23" "24" "25"
          "26" "27" "28" "29"] (day-numbers "16.02.1984")))
  )

(en/deftemplate edit-organism
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/organism/organism-form.html",
                                      :comp-sel [:form#organism-form]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/organism/organism-nav.html",
                                      :comp-sel [:div.organism-nav]}])
                [node]
                [:title] (en/content "Edit organism")
                [:div.edit-organism :a] (en/set-attr :href (str "/edit-organism/" (session-get :organism-id)))
                [:div.read-organism :a] (en/set-attr :href (str "/read-organism/" (session-get :organism-id)))
                [:h3.form-title] (en/content "Edit organism")
                [:div.script] (en/content {:tag     :script,
                                           :attrs   {:src "http://localhost:5000/js/organism.js"},
                                           :content nil})
                [:div.script] (en/append {:tag     :script,
                                          :attrs   nil,
                                          :content "personal_organiser.organism.jsorganism.init();"})
                [:form#organism-form] (en/set-attr :action (str "/update-organism/" (:id node)))
                [:input#ofirst-name] (en/set-attr :value (:ofirst-name (:data node)))
                [:input#olast-name] (en/set-attr :value (:olast-name (:data node)))
                [:input#oemail] (en/set-attr :value (:oemail (:data node)))
                [:td.tdpswd] (en/content nil)
                [:input#oheight] (en/set-attr :value (:oheight (:data node)))
                [:input#oweight] (en/set-attr :value (:oweight (:data node)))
                [:option#year] (en/clone-for [year (into [] (map str (range 1970 2021 1)))]
                                             (comp (en/content year)
                                                   (en/set-attr :value year)
                                                   (en/remove-attr :id)
                                                   (if (= (get-date-part (:obirthday (:data node)) 2) year)
                                                     (en/set-attr :selected "selected")
                                                     (en/set-attr :value year))))
                [:option#month] (en/clone-for [[month-num month-name] [["01" "January"]
                                                                       ["02" "February"]
                                                                       ["03" "March"]
                                                                       ["04" "April"]
                                                                       ["05" "May"]
                                                                       ["06" "Jun"]
                                                                       ["07" "July"]
                                                                       ["08" "August"]
                                                                       ["09" "September"]
                                                                       ["10" "October"]
                                                                       ["11" "November"]
                                                                       ["12" "December"]]]
                                              (comp (en/content month-name)
                                                    (en/set-attr :value month-num)
                                                    (en/remove-attr :id)
                                                    (if (= (get-date-part (:obirthday (:data node)) 1) month-num)
                                                      (en/set-attr :selected "selected")
                                                      (en/set-attr :value month-num))))
                [:option#day] (en/clone-for [day (day-numbers (:obirthday (:data node)))]
                                            (comp (en/content day)
                                                  (en/set-attr :value day)
                                                  (en/remove-attr :id)
                                                  (if (= (get-date-part (:obirthday (:data node)) 0) day)
                                                    (en/set-attr :selected "selected")
                                                    (en/set-attr :value day))))
                [:input#ogender-male] (if (= (:ogender (:data node)) "Male")
                                        (en/set-attr :checked "checked")
                                        (en/set-attr :name "ogender"))
                [:input#ogender-female] (if (= (:ogender (:data node)) "Female")
                                          (en/set-attr :checked "checked")
                                          (en/set-attr :name "ogender"))
                [:input#odiet-all] (if (= (:odiet (:data node)) "All")
                                     (en/set-attr :checked "checked")
                                     (en/set-attr :name "odiet"))
                [:input#odiet-vegetarian] (if (= (:odiet (:data node)) "Vegetarian")
                                            (en/set-attr :checked "checked")
                                            (en/set-attr :name "odiet"))
                [:input#oactivity-easy] (if (= (:oactivity (:data node)) "Easy")
                                          (en/set-attr :checked "checked")
                                          (en/set-attr :name "oactivity"))
                [:input#oactivity-medium] (if (= (:oactivity (:data node)) "Medium")
                                            (en/set-attr :checked "checked")
                                            (en/set-attr :name "oactivity"))
                [:input#oactivity-hard] (if (= (:oactivity (:data node)) "Hard")
                                          (en/set-attr :checked "checked")
                                          (en/set-attr :name "oactivity"))
                [:tr.vitamin] (en/clone-for [[rid vvalue vlabel] (:data (n4j/cypher-query (str "start n=node(" (:id node) ")
										  match (n)-[r:`organism-needs-vitamin`]-(n2)
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
                [:tr.mineral] (en/clone-for [[rid mvalue mlabel] (:data (n4j/cypher-query (str "start n=node(" (:id node) ")
										  match (n)-[r:`organism-needs-mineral`]-(n2)
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
                [:input#submit] (en/set-attr :value "Save changes"))

(en/deftemplate read-organism
                (hg/build-html-page [{:temp-sel [:div.middle-column],
                                      :comp     "public/organism/organism-form.html",
                                      :comp-sel [:form#organism-form :table]}
                                     {:temp-sel [:div.left-column],
                                      :comp     "public/organism/organism-nav.html",
                                      :comp-sel [:div.organism-nav]}])
                [node]
                [:title] (en/content "Organism")
                [:div.edit-organism :a] (en/set-attr :href (str "/edit-organism/" (session-get :organism-id)))
                [:div.read-organism :a] (en/set-attr :href (str "/read-organism/" (session-get :organism-id)))
                [:h3.form-title] (en/content "Organism")
                [:td#to-login] (en/content {:tag     :a,
                                            :attrs   {:href (str "/delete-organism/" (:id node))}
                                            :content "Delete organism"})
                [:input#ofirst-name] (comp (en/set-attr :value (:ofirst-name (:data node)))
                                           (en/set-attr :readonly "readonly"))
                [:input#olast-name] (comp (en/set-attr :value (:olast-name (:data node)))
                                          (en/set-attr :readonly "readonly"))
                [:input#oemail] (comp (en/set-attr :value (:oemail (:data node)))
                                      (en/set-attr :readonly "readonly"))
                [:td.tdpswd] (en/content nil)
                [:input#oheight] (comp (en/set-attr :value (:oheight (:data node)))
                                       (en/set-attr :readonly "readonly"))
                [:input#oweight] (comp (en/set-attr :value (:oweight (:data node)))
                                       (en/set-attr :readonly "readonly"))
                [:option#year] (en/clone-for [year (into [] (map str (range 1970 2021 1)))]
                                             (comp (en/content year)
                                                   (en/set-attr :value year)
                                                   (en/remove-attr :id)
                                                   (if (= (get-date-part (:obirthday (:data node)) 2) year)
                                                     (en/set-attr :selected "selected")
                                                     (en/set-attr :value year))))
                [:select#obirthday-year] (en/set-attr :disabled "disabled")
                [:option#month] (en/clone-for [[month-num month-name] [["01" "January"]
                                                                       ["02" "February"]
                                                                       ["03" "March"]
                                                                       ["04" "April"]
                                                                       ["05" "May"]
                                                                       ["06" "Jun"]
                                                                       ["07" "July"]
                                                                       ["08" "August"]
                                                                       ["09" "September"]
                                                                       ["10" "October"]
                                                                       ["11" "November"]
                                                                       ["12" "December"]]]
                                              (comp (en/content month-name)
                                                    (en/set-attr :value month-num :disabled "disabled")
                                                    (en/remove-attr :id)
                                                    (if (= (get-date-part (:obirthday (:data node)) 1) month-num)
                                                      (en/set-attr :selected "selected")
                                                      (en/set-attr :value month-num))))
                [:select#obirthday-month] (en/set-attr :disabled "disabled")
                [:option#day] (en/clone-for [day (day-numbers (:obirthday (:data node)))]
                                            (comp (en/content day)
                                                  (en/set-attr :value day :disabled "disabled")
                                                  (en/remove-attr :id)
                                                  (if (= (get-date-part (:obirthday (:data node)) 0) day)
                                                    (en/set-attr :selected "selected")
                                                    (en/set-attr :value day))))
                [:select#obirthday-day] (en/set-attr :disabled "disabled")
                [:input#ogender-male] (comp (if (= (:ogender (:data node)) "Male")
                                              (en/set-attr :checked "checked")
                                              (en/set-attr :name "ogender"))
                                            (en/set-attr :disabled "disabled"))
                [:input#ogender-female] (comp (if (= (:ogender (:data node)) "Female")
                                                (en/set-attr :checked "checked")
                                                (en/set-attr :name "ogender"))
                                              (en/set-attr :disabled "disabled"))
                [:input#odiet-all] (comp (if (= (:odiet (:data node)) "All")
                                           (en/set-attr :checked "checked")
                                           (en/set-attr :name "odiet"))
                                         (en/set-attr :disabled "disabled"))
                [:input#odiet-vegetarian] (comp (if (= (:odiet (:data node)) "Vegetarian")
                                                  (en/set-attr :checked "checked")
                                                  (en/set-attr :name "odiet"))
                                                (en/set-attr :disabled "disabled"))
                [:input#oactivity-easy] (comp (if (= (:oactivity (:data node)) "Easy")
                                                (en/set-attr :checked "checked")
                                                (en/set-attr :name "oactivity"))
                                              (en/set-attr :disabled "disabled"))
                [:input#oactivity-medium] (comp (if (= (:oactivity (:data node)) "Medium")
                                                  (en/set-attr :checked "checked")
                                                  (en/set-attr :name "oactivity"))
                                                (en/set-attr :disabled "disabled"))
                [:input#oactivity-hard] (comp (if (= (:oactivity (:data node)) "Hard")
                                                (en/set-attr :checked "checked")
                                                (en/set-attr :name "oactivity"))
                                              (en/set-attr :disabled "disabled"))
                [:tr.vitamin] (en/clone-for [[rid vvalue vlabel] (:data (n4j/cypher-query (str "start n=node(" (:id node) ")
										  match (n)-[r:`organism-needs-vitamin`]-(n2)
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
                                                                                :readonly "readonly"},
                                                                      :content nil})
                                            [:td.vhelp] (en/set-attr :id (str "tdvalue" rid))) ;; vitamin clone-for
                [:tr.mineral] (en/clone-for [[rid mvalue mlabel] (:data (n4j/cypher-query (str "start n=node(" (:id node) ")
										  match (n)-[r:`organism-needs-mineral`]-(n2)
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
                                                                                :readonly "readonly"},
                                                                      :content nil})
                                            [:td.mhelp] (en/set-attr :id (str "tdvalue" rid))) ;; mineral clone-for
                [:input#submit] (en/set-attr :type "hidden"))

(en/deftemplate organism-nav
                (hg/build-html-page [{:temp-sel [:div.left-column],
                                      :comp     "public/organism/organism-nav.html",
                                      :comp-sel [:div.organism-nav]}])
                []
                [:title] (en/content "Organism navigation")
                [:div.edit-organism :a] (en/set-attr :href (str "/edit-organism/" (session-get :organism-id)))
                [:div.read-organism :a] (en/set-attr :href (str "/read-organism/" (session-get :organism-id))))
