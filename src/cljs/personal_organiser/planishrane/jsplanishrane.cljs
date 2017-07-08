(ns personal-organiser.planishrane.jsplanishrane
  (:require [domina :as dom]
            [domina.css :as domcss]
            [goog.events :as events]
            [goog.events.KeyCodes :as key-codes]
            [goog.events.KeyHandler :as key-handler]
            [domina.events :as evts]
            [personal-organiser.utils.jsutils :as utils]))

(defn validate-form
      "Validate form"
      []
      (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='training-duration']")))
            sel-radio-meal (dom/nodes (domcss/sel "input[name*='training-meal']:checked"))
            valid (atom [])]
           (dom/destroy! (dom/by-class "help"))
           (doseq [sel-node sel-nodes]
                  (swap! valid
                         conj
                         (utils/valid-if-field-empty sel-node))
                  (if (= (:type sel-node) "number")
                    (swap! valid
                           conj
                           (utils/is-value-num (dom/value (dom/by-id (:id sel-node))))))
                  (swap! valid
                         conj
                         (and (>= (utils/parse-number (dom/value (dom/by-id (:id sel-node)))) 0) (<= (utils/parse-number (dom/value (dom/by-id (:id sel-node)))) 90))))
           (swap! valid
                  conj
                  (not (= sel-radio-meal ())))
           (if (every? true? @valid)
             true
             (do (dom/prepend! (dom/by-id "error-msgs")
                               "<div class=\"help\">Value from 0 to 90 for every training duration is required</div><div class=\"help\">Select one option for training in time of which meal</div>")
                 false))
           (every? true? @valid)))

(defn disable-element
      "Disable element on form"
      [id]
      (do (dom/remove-attr! (dom/by-id id) "checked")
          (dom/set-attr! (dom/by-id id) "disabled" "disabled")))

(defn change-no-training
      "Change form elements for no training"
      [index]
      (do (disable-element (str "training-meal-breakfast" index))
          (disable-element (str "training-meal-lunch" index))
          (disable-element (str "training-meal-dinner" index))
          (dom/set-attr! (dom/by-id (str "training-duration" index)) "value" "0")
          (dom/set-attr! (dom/by-id (str "training-duration" index)) "readonly" "readonly")
          (dom/remove-attr! (dom/by-id (str "training-meal-no" index)) "disabled")
          (dom/set-attr! (dom/by-id (str "training-meal-no" index)) "checked" "checked")))

(defn change-training
      "Change form elements for training"
      [index]
      (do (disable-element (str "training-meal-no" index))
          (dom/set-attr! (dom/by-id (str "training-meal-breakfast" index)) "checked" "checked")
          (dom/remove-attr! (dom/by-id (str "training-meal-breakfast" index)) "disabled")
          (dom/remove-attr! (dom/by-id (str "training-meal-lunch" index)) "disabled")
          (dom/remove-attr! (dom/by-id (str "training-meal-dinner" index)) "disabled")
          (dom/remove-attr! (dom/by-id (str "training-duration" index)) "readonly")))

(defn ^:export init []
      (if (and js/document
               (.-getElementById js/document))
        (let [planishrane-form (dom/by-id "planishrane-form")
              sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='training-duration']")))]
             (set! (.-onsubmit planishrane-form) validate-form)
             (doseq [index [1 2 3 4 5 6 7]]
                    (dom/set-attr! (dom/by-id (str "training-meal-no" index))
                                   "checked" "checked")
                    (evts/listen! (dom/by-id (str "training-coef" index))
                                  :change
                                  (fn [] (if (= (dom/value (dom/by-id (str "training-coef" index))) "0")
                                           (change-no-training index)
                                           (change-training index)))))
             (doseq [sel-node sel-nodes]
                    (utils/numeric-field (dom/by-id (:id sel-node)))))))
