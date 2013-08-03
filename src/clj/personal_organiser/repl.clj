(ns personal-organiser.repl
  "The starting namespace for the project. This is the namespace that
  users will land in when they start a Clojure REPL. It exists to
  provide convenience functions like 'go' and 'dev-server'."
  (:use [clojure.repl]
	;;[cljs.repl :only (repl)]
	;;[cljs.repl.browser :only (repl-env)]
)
  (:require [clojure.java.browse :as browse]
	    [personal-organiser.server :as server]
	    [personal-organiser.neo4j :as n4j]))

;;(defn cljs-repl
;;  "Start a ClojureScript REPL which can connect to the development
;;  version of the application. The REPL will not work until the
;;  development page connects to it, so you will need to either open or
;;  refresh the development page after calling this function."
;;  []
;;  (repl (repl-env)))

;;(defn go
;;  "Start a browser-connected REPL and launch a browser to talk to it."
;;  []
;;  (n4j/connect-neo4j)
;;  (dev/run-server)
;;  (future (Thread/sleep 3000)
;;          (browse/browse-url "http://localhost:5000/read-all-grocery"))
;;  (cljs-repl))

(defonce server (ref nil))

(defn dev-server
  "Start the development server and open the host application in the
  default browser."
  []
  (n4j/connect-neo4j)
  (dosync (ref-set server (server/run-server)))
  (future (Thread/sleep 3000)
          (browse/browse-url "http://localhost:5000/read-all-grocery")))

(defn restart-server
  "Restart server"
  []
  (.stop @server)
  (dev-server))

(defn -main [& args]
  (dev-server))

(println)
(println "Type (dev-server) to launch only the development server.")
(println)
