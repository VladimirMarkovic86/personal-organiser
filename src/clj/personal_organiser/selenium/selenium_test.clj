(ns personal-organiser.selenium.selenium-test
  (:require [clj-webdriver.taxi :as tx]))

(defn start-selenium-session
  "Start selenium session and open browser"
  []
  (tx/set-driver! {:browser :firefox} "http://localhost:5000/login")
  )

(defn stop-selenium-session
  "Stop selenium session and close browser"
  []
  (tx/quit))

(defn login
  "Login into application"
  []
  (tx/input-text "#email" "email@mail.com")
  (tx/input-text "#password" "email.1")
  (tx/submit "#password")
  )

(defn delete-organism
  "Delete organism from application"
  []
  (tx/click "a[href='/organism-nav']")
  (tx/click "a[href*='/read-organism/']")
  (tx/click "a[href*='/delete-organism/']")
  )

(defn register
  "Register into application"
  []
  (tx/click "a[id='register']")
  (tx/input-text "#ofirst-name" "Firstname")
  (tx/input-text "#olast-name" "Lastname")
  (tx/input-text "#oemail" "email@mail.com")
  (tx/input-text "#opassword" "email.1")
  (tx/input-text "#oconfirm-password" "email.1")
  (tx/input-text "#oheight" "179")
  (tx/input-text "#oweight" "69")
  (tx/select-by-value "select[id='obirthday-year']" "1980")
  (tx/select-by-value "select[id='obirthday-month']" "03")
  (tx/select-by-value "select[id='obirthday-day']" "25")
  (tx/click "#ogender-male")
  (tx/click "#odiet-all")
  (tx/click "#oactivity-easy")
  (tx/submit "#opassword")
  )

(defn test-suite
  "Execute test suite"
  []
  (start-selenium-session)
  (register)
  (login)
  (delete-organism)
  (stop-selenium-session))
