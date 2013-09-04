(ns personal-organiser.selenium.selenium-test
  (:import [org.openqa.selenium.server SeleniumServer]
	   [com.thoughtworks.selenium DefaultSelenium
				      Selenium]))

(defn start-selenium-server
  "Start selenium server and open browser"
  []
  (def url "/login")
  (def selenium-server (SeleniumServer.))
  (def selenium (DefaultSelenium. "localhost" 4444 "*firefox" "http://localhost:5000/"))
  (.start selenium-server)
  (.start selenium)
)

(defn stop-selenium-server
  "Stop selenium server and close browser"
  []
  (.stop selenium)
  (.stop selenium-server))

(defn login
  "Login into application"
  []
  (.open selenium url)
  (.type selenium "email" "bla@bla.com")
  (.type selenium "password" "bla.1")
  (.click selenium "//input[@value='Login']")
  (.waitForPageToLoad selenium "30000")
  (= (.getText selenium "//div[@class='made-by']/div[2]") "email: markovic.vladimir86@gmail.com")
)

(defn test-suite
  "Execute test suite"
  []
  (start-selenium-server)
  (login)
  (stop-selenium-server))
