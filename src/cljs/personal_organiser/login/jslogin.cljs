(ns personal-organiser.login.jslogin
  (:require [domina :as dom]))

(defn prepend-errors
      "Prepend error"
      [errors]
      (doseq [error errors]
             (dom/prepend! (dom/by-id "error-msgs")
                           (str "<div class=\"help\">" error "</div>"))))

;(defn validate-form
;      "Validate form"
;      []
;      (do (dom/destroy! (dom/by-class "help"))
;          (if-let [errors (login-credential-errors {:email    (dom/value (dom/by-id "email"))
;                                                    :password (dom/value (dom/by-id "password"))})]
;                  (do (prepend-errors (:email errors))
;                      (prepend-errors (:password errors))
;                      false)
;                  true)))


(defn ^:export init []
      (if (and js/document
               (.-getElementById js/document))
        (let [login-form (dom/by-id "login-form")]
             ;(set! (.-onsubmit login-form) validate-form)
             )))
