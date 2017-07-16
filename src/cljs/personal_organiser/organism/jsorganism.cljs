(ns personal-organiser.organism.jsorganism
  (:require [domina :as dom]
            [domina.css :as domcss]
            [goog.events :as events]
            [goog.events.KeyCodes :as key-codes]
            [goog.events.KeyHandler :as key-handler]
            ;[valip.core :refer [validate]]
            ;[valip.predicates :refer [matches]]
            ;[personal-organiser.organism.organism-validators :refer [create-organism-errors]]
            [personal-organiser.utils.jsutils :as utils]))

(def val-email false)

(def default-email (dom/value (dom/by-id "oemail")))

(defn onready
      "Swap updated content from response with current"
      [content]
      (if (and (= (aget (aget content "currentTarget") "readyState") 4)
               (= (aget (aget content "currentTarget") "status") 200))
        (if (= (aget (aget content "currentTarget") "responseText") "no-exist")
          (def val-email true)
          (do (def val-email false)
              (dom/prepend! (dom/by-id "tdoemail")
                            "<div class=\"help\">Email already exists</div>")))
        ))

(defn check-email
      "Delete grocery XMLHttpReqest"
      [email]
      (dom/destroy! (dom/by-class "help"))
      (if (not (= default-email (dom/value (dom/by-id "oemail"))))
        (let [xmlhttp (js/XMLHttpRequest.)]
             (aset xmlhttp "onreadystatechange" onready)
             (.open xmlhttp "POST" (str "/check-email/" email) true)
             (.send xmlhttp))
        (def val-email true)))

;(defn validate-email
;      "Validate email address"
;      [email]
;      (if-let [errors (:oemail (create-organism-errors {:oemail email}))]
;              (do (dom/prepend! (dom/by-id "tdoemail")
;                                (str "<div class=\"help\">" (first errors) "</div>"))
;                  false)
;              true))

(defn psw-confirmation
      "Check equality of password and confirm password in organism form"
      [psw confirm-psw]
      (if (= (dom/value psw) (dom/value confirm-psw))
        true
        (do (dom/prepend! (dom/by-id "tdoconfirm-password")
                          "<div class=\"help\">Password and confirm password<br/> must have same value</div>")
            false)))

;(defn validate-password
;      "Validate password"
;      [password]
;      (if-let [errors (:password (validate {:password password}
;                                           [:password (matches #"^(?=.*\d).{4,8}$") "Password should contain at least<br/>one number, period and<br/>length should be 4 to 8 chars."]))]
;              (do (dom/prepend! (dom/by-id "tdopassword") (str "<div class=\"help\">" (first errors) "</div>"))
;                  false)
;              true))

(defn validate-form
      "Validate form"
      []
      (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value'],input[id^='o']")))
            sel-radio-gender (dom/nodes (domcss/sel "input[name='ogender']:checked"))
            sel-radio-activity (dom/nodes (domcss/sel "input[name='oactivity']:checked"))
            sel-radio-diet (dom/nodes (domcss/sel "input[name='odiet']:checked"))
            select-nodes (map dom/attrs (dom/nodes (domcss/sel "select[id*='birthday']")))
            valid (atom [])
            select-valid (atom [])]
           (dom/destroy! (dom/by-class "help"))
           (doseq [sel-node sel-nodes]
                  (swap! valid
                         conj
                         (utils/valid-if-field-empty sel-node))
                  (if (= (:type sel-node) "number")
                    (swap! valid
                           conj
                           (utils/valid-if-field-number sel-node))))
           (swap! valid
                  conj
                  (utils/is-radio-checked sel-radio-gender "tdogender" "gender"))
           (swap! valid
                  conj
                  (utils/is-radio-checked sel-radio-activity "tdoactivity" "activity"))
           (swap! valid
                  conj
                  (utils/is-radio-checked sel-radio-diet "tdodiet" "diet"))
           (swap! valid
                  conj
                  (psw-confirmation (dom/by-id "opassword")
                                    (dom/by-id "oconfirm-password")))
           ;(swap! valid
           ;       conj
           ;       (validate-email (dom/value (dom/by-id "oemail"))))
           ;(swap! valid
           ;       conj
           ;       (validate-password (dom/value (dom/by-id "opassword"))))
           (doseq [select select-nodes]
                  (swap! select-valid
                         conj
                         (not (= (dom/value (dom/by-id (:id select)))
                                 "- Select -"))))
           (swap! valid
                  conj
                  (every? true? @select-valid))
           (if (not (every? true? @select-valid))
             (dom/prepend! (dom/by-id "tdobirthday")
                           "<div class=\"help\">Choose all values for birthday<br/>instead of \"- Select -\"</div>"))
           (swap! valid
                  conj
                  val-email)
           (if (not val-email)
             (dom/prepend! (dom/by-id "tdoemail")
                           "<div class=\"help\">Email already exists</div>"))
           (.focus (dom/by-id "ofirst-name"))
           (every? true? @valid)))

(defn render-options-for-select
      "Render options for select element"
      [days]
      (do (dom/destroy! (domcss/sel "select[id='obirthday-day'] option"))
          (dom/append! (dom/by-id "obirthday-day")
                       "<option> - Select - </option>")
          (doseq [day (into [] (range 1 days 1))]
                 (dom/append! (dom/by-id "obirthday-day")
                              (str "<option value=\"" day "\">" day "</option>")))))

(defn select-change
      "Event when changing date year"
      [month year]
      (do (dom/destroy! (dom/by-class "help"))
          (if (or (= year "- Select -")
                  (= month "- Select -"))
            (do (dom/prepend! (dom/by-id "tdobirthday")
                              "<div class=\"help\">Choose all values for birthday<br/>instead of \"- Select -\"</div>")
                (dom/destroy! (domcss/sel "select[id='obirthday-day'] option")))
            (if (contains? #{"01" "03" "05" "07" "08" "10" "12"} month)
              (render-options-for-select 32)
              (if (contains? #{"04" "06" "09" "11"} month)
                (render-options-for-select 31)
                (if (re-find #"^-?\d+$" (/ (js/parseFloat year) 4))
                  (render-options-for-select 30)
                  (render-options-for-select 29)
                  )
                )
              )
            )))

(defn ^:export init []
      (if (and js/document
               (.-getElementById js/document))
        (let [organism-form (dom/by-id "organism-form")
              sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='value']")))]
             (set! (.-onsubmit organism-form) validate-form)
             (utils/numeric-field (dom/by-id "oheight"))
             (utils/numeric-field (dom/by-id "oweight"))
             (events/listen (dom/by-id "oemail")
                            "change"
                            (fn []
                                (check-email (dom/value (dom/by-id "oemail")))))
             (events/listen (dom/by-id "obirthday-year")
                            "change"
                            (fn []
                                (select-change (dom/value (dom/by-id "obirthday-month"))
                                               (dom/value (dom/by-id "obirthday-year")))))
             (events/listen (dom/by-id "obirthday-month")
                            "change"
                            (fn []
                                (select-change (dom/value (dom/by-id "obirthday-month"))
                                               (dom/value (dom/by-id "obirthday-year")))))
             (doseq [sel-node sel-nodes]
                    (utils/numeric-field (dom/by-id (:id sel-node)))))))
