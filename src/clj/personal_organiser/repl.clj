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

(defonce server (ref nil))

(defn cmd-term
  "Execute command prompt/terminal command"
  [command]
  (let [process (. (Runtime/getRuntime) exec command)
      stdin (.getInputStream process)
      isr (InputStreamReader. stdin)
      br (BufferedReader. isr)]
      (let [seq (line-seq br)]
	seq)))

(defn start-server
  "Start the development server and open the host application in the
  default browser."
  []
  (try (if (= (re-find #"Linux" (str (cmd-term "uname -a"))) "Linux")
	 (cmd-term "./neo4j-community/bin/neo4j start"))
  (catch Exception e (if (= (re-find #"OSArchitecture" (str (cmd-term "wmic OS get OSArchitecture"))) "OSArchitecture")
			(cmd-term "neo4j-community/bin/Neo4j.bat"))))
  (n4j/connect-neo4j)
  (dosync (ref-set server (server/run-server)))
  (future (Thread/sleep 3000)
          (browse/browse-url "http://localhost:5000/login")))

(defn restart-server
  "Restart server"
  []
  (.stop @server)
  (start-server))

(defn stop-server
  "Stop server"
  []
  (.stop @server)
  (try (if (= (re-find #"Linux" (str (cmd-term "uname -a"))) "Linux")
	 (cmd-term "./neo4j-community/bin/neo4j stop"))
  (catch Exception e (if (= (re-find #"OSArchitecture" (str (cmd-term "wmic OS get OSArchitecture"))) "OSArchitecture")
			(cmd-term "dir"))))
)

(defn -main [& args]
  (start-server))

(println)
(println "Type (start-server) to launch server.")
(println "Type (restart-server) to restart server.")
(println "Type (stop-server) to stop server.")
(println)
(println "Type (selenium-test) to test functionalities.")
(println)
