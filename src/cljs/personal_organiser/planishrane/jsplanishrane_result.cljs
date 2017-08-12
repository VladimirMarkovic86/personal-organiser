(ns personal-organiser.planishrane.jsplanishrane-result
  (:require [domina :as dom]
            [domina.css :as domcss]
            [domina.events :as evts]
            [reagent.core :as r]
            [ajax.core :as ajx]))

(defonce state
         (r/atom {:markets    []
                  :search     ""
                  :order-prop :name
                  }))

(defn load-markets! "Fetches the list of markets from the server and updates the state atom with it"
  [state]
  (ajx/GET "/markets"
           {:handler         (fn [markets] (swap! state assoc :markets markets))
            :error-handler   (fn [details] (.warn js/console (str "Failed to refresh markets from server: " details)))
            :response-format :json, :keywords? true}))

(declare                                                    ;; here we declare our components to define they're in an order that feels natural.
  <markets-list>
  <market-item>)

(defn <markets-list> "An unordered list of markets"
  []
  [:div.container-fluid
   [:select {:id "market" :name "market"}
    (for [market (:markets @state)]
      [<market-item> market]
      )]])

(defn <market-item> "An market item component"
  [market]
  [:option {:value (:crawlIndex market)} (:marketPlaceName market)])

(defn mount-root "Creates the application view and injects ('mounts') it into the root element."
  []
  (r/render
    [<markets-list>]
    (.getElementById js/document "markets")))

(defn validate-form
  "Validate form"
  []
  (let [select-nodes (map dom/attrs (dom/nodes (domcss/sel "select")))
        valid (atom [])]
    (dom/destroy! (dom/by-class "help"))
    (doseq [select select-nodes]
      (swap! valid
             conj
             (not (= (dom/value (dom/by-id (:id select)))
                     "- Select -"))))
    (if (not (every? true? @valid))
      (dom/prepend! (dom/by-class "error-msgs")
                    "<div class=\"help\">Choose meal for every day, meal instead of \"- Select -\"</div>"))
    (every? true? @valid)))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (let [planishrane-form (dom/by-id "planishrane-form")]
      (set! (.-onsubmit planishrane-form) validate-form)
      (load-markets! state)
      (mount-root)
      )))
