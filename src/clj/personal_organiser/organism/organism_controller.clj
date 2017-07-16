(ns personal-organiser.organism.organism-controller
  (:require [personal-organiser.organism.organism-validators :refer [create-organism-errors]]
            [personal-organiser.organism.organism-view :refer [read-organism
                                                               organism-nav]]
            [personal-organiser.mongo :as mon]
            [personal-organiser.utils :as utils]
            [postal.core :as pcor]))

(defn save-organism
  "Save organism in neo4j database"
  [req-params]
  (if-let [organism-errors (create-organism-errors {:ofirst-name       (:ofirst-name req-params)
                                                    :olast-name        (:olast-name req-params)
                                                    :oemail            (:oemail req-params)
                                                    :opassword         (:opassword req-params)
                                                    :oconfirm-password (:oconfirm-password req-params)
                                                    :oheight           (:oheight req-params)
                                                    :oweight           (:oweight req-params)
                                                    :obirthday-day     (:obirthday-day req-params)
                                                    :obirthday-month   (:obirthday-month req-params)
                                                    :obirthday-year    (:obirthday-year req-params)
                                                    :ogender           (:ogender req-params)
                                                    :odiet             (:odiet req-params)
                                                    :oactivity         (:oactivity req-params)})]
    (println (str "Organism errors: " organism-errors))
    (let [new-organism {:ofirst-name (:ofirst-name req-params),
                        :olast-name  (:olast-name req-params),
                        :oemail      (:oemail req-params),
                        :opassword   (:opassword req-params),
                        :oheight     (read-string (:oheight req-params)),
                        :oweight     (read-string (:oweight req-params)),
                        :obirthday   (str (:obirthday-day req-params)
                                          "."
                                          (:obirthday-month req-params)
                                          "."
                                          (:obirthday-year req-params)),
                        :ogender     (:ogender req-params),
                        :odiet       (:odiet req-params),
                        :oactivity   (:oactivity req-params)}]
      (mon/insert-and-return (mon/organism-coll) new-organism)
      )))

(defn update-organism
  "Update organism in neo4j database"
  [req-params]
  (if-let [organism-errors (create-organism-errors {:ofirst-name       (:ofirst-name req-params)
                                                    :olast-name        (:olast-name req-params)
                                                    :oemail            (:oemail req-params)
                                                    :opassword         "default-value"
                                                    :oconfirm-password "default-value"
                                                    :oheight           (:oheight req-params)
                                                    :oweight           (:oweight req-params)
                                                    :obirthday-day     (:obirthday-day req-params)
                                                    :obirthday-month   (:obirthday-month req-params)
                                                    :obirthday-year    (:obirthday-year req-params)
                                                    :ogender           (:ogender req-params)
                                                    :odiet             (:odiet req-params)
                                                    :oactivity         (:oactivity req-params)})]
    (println (str "Organism errors: " organism-errors))
    (let [update-organism {:ofirst-name (:ofirst-name req-params),
                           :olast-name  (:olast-name req-params),
                           :oemail      (:oemail req-params),
                           :oheight     (read-string (:oheight req-params)),
                           :oweight     (read-string (:oweight req-params)),
                           :obirthday   (str (:obirthday-day req-params)
                                             "."
                                             (:obirthday-month req-params)
                                             "."
                                             (:obirthday-year req-params)),
                           :ogender     (:ogender req-params),
                           :odiet       (:odiet req-params),
                           :oactivity   (:oactivity req-params)
                           }]
      (mon/update-by-id (mon/organism-coll) (:idorganism req-params) update-organism))
    )
  (organism-nav))

(defn delete-organism
  "Delete organism from database"
  [id]
  (mon/remove-by-id (mon/organism-coll) id))

(defn reset-password
  "Reset organism password"
  [email reset-password]
  (let [organism-by-email (mon/find-one (mon/organism-coll) {:oemail email})]
    (mon/update-by-id (mon/organism-coll) (.toString (:_id organism-by-email)) {:opassword reset-password})
    )
  )

(defn send-mail
  "Send email to address"
  [email]
  (let [reset-pass (utils/get-random-str 15)]
    (reset-password email reset-pass)
    (pcor/send-message #^{:host "smtp.mail.yahoo.com"
                          :user "personal.clojure@yahoo.com"
                          :pass "personal.Clojuretest7"
                          :ssl  true}
                       {:from    "personal.clojure@yahoo.com"
                        :to      email
                        :subject "Personal-Organiser password reset"
                        :body    (str "Your password now is -> " reset-pass " <- .")})))
