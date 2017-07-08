(ns personal-organiser.repl
  "The starting namespace for the project. This is the namespace that
  users will land in when they start a Clojure REPL. It exists to
  provide convenience functions like 'go' and 'dev-server'."
  (:use [clojure.repl]
        [clojure.java.shell :only [sh]])
  (:import [java.io InputStreamReader
                    BufferedReader]
           [java.lang Runtime])
  (:require [clojure.java.browse :as browse]
            [personal-organiser.server :as server]
            [personal-organiser.neo4j :as n4j]
            [personal-organiser.selenium.selenium-test :as sl]))

(defn selenium-test
  "Selenium"
  []
  (sl/test-suite))

(defn cmd-term
  "Execute command prompt/terminal command"
  [command]
  (let [process (. (Runtime/getRuntime) exec command)
        stdin (.getInputStream process)
        isr (InputStreamReader. stdin)
        br (BufferedReader. isr)]
    (let [seq (line-seq br)]
      seq)))

(defn neo4j-linux
  ""
  []
  (try (= (re-find #"Linux" (str (cmd-term "uname -a"))) "Linux")
       (catch Exception e (do false))))

(defn neo4j-win
  ""
  []
  (try (= (re-find #"OSArchitecture" (str (cmd-term "wmic OS get OSArchitecture"))) "OSArchitecture")
       (catch Exception e (do false))))

(defn neo4j-stop-linux
  ""
  []
  (cmd-term "neo4j-community/bin/neo4j stop"))

(defn neo4j-stop-win
  ""
  []
  (cmd-term "neo4j-community/bin/Neo4j.bat stop"))

(defn neo4j-status-linux
  ""
  []
  (neo4j-stop-linux)
  false)

(defn neo4j-status-win
  ""
  []
  (neo4j-stop-win)
  false)

(defn neo4j-status
  ""
  []
  (if (neo4j-linux)
    (neo4j-status-linux)
    (if (neo4j-win)
      (neo4j-status-win)
      false)))

(defn neo4j-start-linux
  ""
  []
  (cmd-term "neo4j-community/bin/neo4j start"))

(defn neo4j-start-win
  ""
  []
  (cmd-term "neo4j-community/bin/Neo4j.bat start"))

(defn neo4j-start
  "Start neo4j server"
  []
  (if (not (neo4j-status))
    (if (neo4j-linux)
      (neo4j-start-linux)
      (if (neo4j-win)
        (neo4j-start-win)))))

(defn neo4j-stop
  "Stop neo4j server"
  []
  (if (not (neo4j-status))
    (if (neo4j-linux)
      (neo4j-stop-linux)
      (if (neo4j-win)
        (neo4j-stop-win)))))

(defn start-server
  "Start the development server and open the host application in the
  default browser."
  []
  (neo4j-start)
  (Thread/sleep 15000)
  (n4j/connect-neo4j)
  (def server (server/run-server))
  (Thread/sleep 3000)
  (browse/browse-url "http://localhost:5000/login"))

(defn stop-server
  "Stop server"
  []
  (neo4j-stop)
  (.stop server))

(defn restart-server
  "Restart server"
  []
  (stop-server)
  (start-server))

(defn -main [& args]
  (start-server))

(println)
(println "Type (start-server) to launch server.")
(println "Type (restart-server) to restart server.")
(println "Type (stop-server) to stop server.")
(println)
(println "Type (selenium-test) to test functionalities.")
(println)
