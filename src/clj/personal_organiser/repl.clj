(ns personal-organiser.repl
  "The starting namespace for the project. This is the namespace that
  users will land in when they start a Clojure REPL. It exists to
  provide convenience functions like 'go' and 'dev-server'."
  (:use [clojure.repl])
  (:require [clojure.java.browse :as browse]
	    [personal-organiser.server :as server]
	    [personal-organiser.neo4j :as n4j]))

(defonce server (ref nil))

(defn dev-server
  "Start the development server and open the host application in the
  default browser."
  []
  (n4j/connect-neo4j)
  (dosync (ref-set server (server/run-server)))
  (future (Thread/sleep 3000)
          (browse/browse-url "http://localhost:5000/login")))

(defn restart-server
  "Restart server"
  []
  (.stop @server)
  (dev-server))

(defn -main [& args]
  (dev-server))

(println)
(println "Type (dev-server) to launch the development server.")
(println)
