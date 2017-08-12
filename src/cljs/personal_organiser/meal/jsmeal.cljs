(ns personal-organiser.meal.jsmeal
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [reagent.core :as r]
            [ajax.core :as ajx]))

(defonce state
         (r/atom {:groceries  []
                  :search     ""
                  :order-prop :name
                  }))

(defn load-groceries! "Fetches the list of groceries from the server and updates the state atom with it"
  [state]
  (ajx/GET "/groceries"
           {:handler         (fn [groceries] (swap! state assoc :groceries groceries))
            :error-handler   (fn [details] (.warn js/console (str "Failed to refresh groceries from server: " details)))
            :response-format :json, :keywords? true}))

(defn get-app []
  (or (.-app js/window)
      (set! (.-app js/window) #js {})))

(defonce ingrediants (atom []))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (let [app (get-app)
          c (.Component (.-core js/ng)
                        #js {:selector "div#meal-form"
                             :template (html [:form {:method "post" :id "meal-form" :action "/save-meal"}
                                              [:table [:tr [:td [:h3 {:class "form-title" :colspan "3"} "Create meal"]]]
                                               [:tr [:td [:label {:for "mlname" :id "lmlname"} "Name"]]
                                                [:td [:input {:type "text" :name "mlname" :id "mlname"}]] [:td {:id "tdmlname"} ""]]
                                               [:tr [:td [:label {:for "mltype" :id "lmltype"} "Meal type"]]
                                                [:td [:div [:input {:type "radio" :name "mltype" :id "mltype-breakfast" :value "Breakfast"}]
                                                      [:label {:for "mltype-breakfast"} [:span] "Breakfast"]]
                                                 [:div [:input {:type "radio" :name "mltype" :id "mltype-lunch" :value "Lunch"}]
                                                  [:label {:for "mltype-lunch"} [:span] "Lunch"]]
                                                 [:div [:input {:type "radio" :name "mltype" :id "mltype-dinner" :value "Dinner"}]
                                                  [:label {:for "mltype-dinner"} [:span] "Dinner"]]]
                                                [:td {:id "tdmltype"} ""]]
                                               [:tr [:td [:label {:for "mldesc" :id "lmldesc"} "Description"]]
                                                [:td [:textarea {:name "mldesc" :id "mldesc"}]]
                                                [:td {:id "tdmldesc"} ""]]
                                               [:tr [:td [:label {:for "mlimg-file" :id "lmlimg-file"} "Image"]]
                                                [:td [:input {:type "file" :name "mlimg-file" :id "mlimg-file"}]]
                                                [:td {:id "tdmlimg-file"} ""]]
                                               [:tr [:td {:colspan "3"} [:h4 "Ingredients"]]]
                                               "
                                              <tr>
                                                <td>
                                                  <select #grocery >
                                                    <option value=\"-1\" > - Select - </option>
                                                    <option *ngFor=\"#groceryOp of groceries();\" value=\"{{getGroceryId(groceryOp)}}\" >{{getGroceryName(groceryOp)}}</option>
                                                  </select>
                                                </td>
                                                <td>
                                                  <input #grams type=\"number\" />
                                                </td>
                                                <td>
                                                  <input #quantity type=\"number\" />
                                                </td>
                                                <td><button (click)=\"addIngrediant(grocery.value, grocery.text, grams.value, quantity.value)\" >Add</button></td>
                                              </tr>
                                              <tr>
                                                <td><h4>Ingredient</h4></td>
                                                <td><h4>Grams</h4></td>
                                                <td><h4>Quantity</h4></td>
                                                <td><h4>Option</h4></td>
                                              </tr>
                                              <tr *ngFor=\"#ingrediant of ingrediants();\" >
                                                <td><input type=\"hidden\" name=\"grocery{{i}}\" value=\"{{getGroceryValue(ingrediant)}}\" />{{getGroceryText(ingrediant)}}</td>
                                                <td><input type=\"hidden\" name=\"grams{{i}}\" value=\"{{getGrams(ingrediant)}}\" />{{getGrams(ingrediant)}}</td>
                                                <td><input type=\"hidden\" name=\"quantity{{i}}\" value=\"{{getQuantity(ingrediant)}}\" />{{getQuantity(ingrediant)}}</td>
                                                <td><button (click)=\"removeIngrediant(ingrediant)\" >Remove</button></td>
                                              </tr>
                                       "
                                               ]
                                              ])
                             })
          load-groceries (load-groceries! state)
          c (.Class c #js {:constructor      (fn [])
                           :addIngrediant    (fn [value text grams quantity]
                                               (swap! ingrediants #(conj % {:groceryValue value :groceryText text :grams grams :quantity quantity}))
                                               )
                           :removeIngrediant (fn [ingrediant]
                                               (swap! ingrediants #(remove #{ingrediant} %)))
                           :ingrediants      (fn [] @ingrediants)
                           :groceries        (fn [] (:groceries @state))
                           :getGroceryValue  (fn [ingrediant] (:groceryValue ingrediant))
                           :getGroceryText   (fn [ingrediant] (:groceryText ingrediant))
                           :getGrams         (fn [ingrediant] (:grams ingrediant))
                           :getQuantity      (fn [ingrediant] (:quantity ingrediant))
                           :getGroceryId     (fn [grocery] (:_id grocery))
                           :getGroceryName   (fn [grocery] (:gname grocery))
                           })]
      (set! (.-AppComponent app) c)
      )
    ))
