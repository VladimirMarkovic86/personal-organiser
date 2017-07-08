(ns personal-organiser.meal.jsmeal
  (:require [domina :as dom]
            [domina.css :as domcss]
            [domina.events :as evts]
            [clojure.string :as cstring]
            [personal-organiser.utils.jsutils :as utils]))

(defn validate-form
      "Validate form"
      []
      (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id='mlname'],textarea")))
            sel-ingredients (map dom/attrs (dom/nodes (domcss/sel "input[id*='grams'],input[id*='quantity']")))
            sel-radio-type (dom/nodes (domcss/sel "input[name='mltype']:checked"))
            select-nodes (map dom/attrs (dom/nodes (domcss/sel "select[id*='ingredient']")))
            select-repeat (into [] (map dom/value (dom/nodes (domcss/sel "select[id*='ingredient']"))))
            valid (atom [])
            select-valid (atom [])
            ingredient-valid (atom [])]
           (dom/destroy! (dom/by-class "help"))
           (doseq [sel-node sel-nodes]
                  (swap! valid
                         conj
                         (utils/valid-if-field-empty sel-node)))
           (doseq [ingredient sel-ingredients]
                  (swap! ingredient-valid
                         conj
                         (> (count (dom/value (dom/by-id (:id ingredient))))
                            0)))
           (swap! valid
                  conj
                  (every? true? @ingredient-valid))
           (if (not (every? true? @ingredient-valid))
             (dom/prepend! (dom/by-id "error-msgs")
                           "<div class=\"help\">Value for ingredient grams and quantity is required</div>"))
           (doseq [select select-nodes]
                  (swap! select-valid
                         conj
                         (not (= (dom/value (dom/by-id (:id select)))
                                 "- Select -"))))
           (swap! valid
                  conj
                  (every? true? @select-valid))
           (if (not (every? true? @select-valid))
             (dom/prepend! (dom/by-id "error-msgs")
                           "<div class=\"help\">Choose grocery for every ingredient instead of \"- Select -\"</div>"))
           (swap! valid
                  conj
                  (utils/is-radio-checked sel-radio-type "tdmltype" "type"))
           (swap! valid
                  conj
                  (= (count select-repeat) (count (distinct select-repeat))))
           (if (not (= (count select-repeat) (count (distinct select-repeat))))
             (dom/prepend! (dom/by-id "error-msgs")
                           "<div class=\"help\">Every grocery can be selected only once</div>"))
           (every? true? @valid)))

(defn calc-new-row-index
      "Increment last row index by one and return it"
      [ind]
      (let [lst-ind ((cstring/split ind ";") (- (count (cstring/split ind ";")) 1))]
           (+ (js/parseInt lst-ind) 1)))

(defn read-change-row-index
      "Append new row index in hidden input field of row indexes and return new row index"
      [ing-indexes]
      (let [new-row-index (calc-new-row-index (dom/value ing-indexes))]
           (dom/set-attr! ing-indexes
                          "value"
                          (str (dom/value ing-indexes) ";" new-row-index))
           new-row-index))

(defn replace-string
      "Replace substring in html row as string"
      [acc reg]
      (cstring/replace acc (reg 0) (reg 1)))

(defn change-row-index
      "Read row indexes, append and return new one"
      [row-index ing-row]
      (let [row-content-as-string (dom/html ing-row)]
           (reduce replace-string row-content-as-string [["ingredient1" (str "ingredient" row-index)]
                                                         ["igrams1" (str "igrams" row-index)]
                                                         ["iquantity1" (str "iquantity" row-index)]
                                                         ["iremove1" (str "iremove" row-index)]])))

(defn remove-ingredient-row
      "Remove ingredient row"
      [row-index ing-indexes]
      (if (= (count (into [] (map dom/value (dom/nodes (domcss/sel "select[id*='ingredient']"))))) 1)
        (js/alert "Meal should contain at least one ingredient")
        (do (dom/destroy! (dom/by-id (str "ingredient-row" row-index)))
            (dom/set-attr! ing-indexes
                           "value"
                           (cstring/replace
                             (cstring/replace
                               (cstring/replace (str ";" (dom/value ing-indexes) ";")
                                                (str ";" row-index ";")
                                                ";") #";$" "") #"^;" "")))))

(defn add-ingredient-row
      "Add ingredient row"
      [ing-indexes ing-row ing-table]
      (let [row-index (read-change-row-index ing-indexes)]
           (dom/append! ing-table
                        (str "<tr id=\"ingredient-row" row-index "\">" (change-row-index row-index
                                                                                         ing-row) "</tr>"))
           (evts/listen! (dom/by-id (str "iremove" row-index))
                         :click
                         (fn []
                             (remove-ingredient-row row-index
                                                    ing-indexes)))
           (utils/numeric-field (dom/by-id (str "igrams" row-index)))
           (utils/numeric-field (dom/by-id (str "iquantity" row-index)))
           ))

(defn remove-click-listener
      "Set listener on link remove in create meal form to remove ingredient row"
      [ing-indexes]
      (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "a[id*='remove']")))]
           (doseq [sel-node sel-nodes]
                  (evts/listen! (dom/by-id (:id sel-node))
                                :click
                                (fn []
                                    (remove-ingredient-row (js/parseInt (cstring/replace (:id sel-node)
                                                                                         "iremove"
                                                                                         ""))
                                                           ing-indexes))))))

(defn ^:export init []
      (if (and js/document
               (.-getElementById js/document))
        (let [meal-form (dom/by-id "meal-form")
              ing-indexes (dom/by-id "ingredient-indexes")
              ing-row (dom/by-id "ingredient-row1")
              ing-table (dom/by-class "ingredients-tbody")
              sel-ingredients (map dom/attrs (dom/nodes (domcss/sel "input[id*='grams'],input[id*='quantity']")))]
             (set! (.-onsubmit meal-form) validate-form)
             (evts/listen! (dom/by-id "add-ingredient")
                           :click
                           (fn []
                               (add-ingredient-row ing-indexes
                                                   ing-row
                                                   ing-table)))
             (remove-click-listener ing-indexes)
             (doseq [ingredient sel-ingredients]
                    (utils/numeric-field (dom/by-id (:id ingredient))))
             )))
