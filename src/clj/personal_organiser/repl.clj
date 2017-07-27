(ns personal-organiser.repl
  "The starting namespace for the project. This is the namespace that
  users will land in when they start a Clojure REPL. It exists to
  provide convenience functions like 'go' and 'dev-server'."
  ;(:use [clojure.repl]
  ;      [clojure.java.shell :only [sh]])
  ;(:import [java.io InputStreamReader
  ;                  BufferedReader]
  ;         [java.lang Runtime])
  (:require ;[clojure.java.browse :as browse]
            [personal-organiser.server :as server]
            ;[personal-organiser.neo4j :as n4j]
            [personal-organiser.mongo :as mon]
            [personal-organiser.selenium.selenium-test :as sl]
            [immutant.web :as immutant]
            [clojure.tools.nrepl.server :as nrepl]
            [clojure.tools.logging :as log]
            [environ.core :refer [env]]
            [personal-organiser.config :refer [defaults]]
            [mount.core :as mount])
  (:gen-class))

(defn selenium-test
  "Selenium"
  []
  (sl/test-suite))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (when-let [config (:log-config env)]
    (org.apache.log4j.PropertyConfigurator/configure config))
  (doseq [component (:started (mount/start))]
    (log/info component "started"))
  ((:init defaults)))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (log/info "personal-organiser is shutting down...")
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (log/info "shutdown complete!"))

;(defn cmd-term
;  "Execute command prompt/terminal command"
;  [command]
;  (let [process (. (Runtime/getRuntime) exec command)
;        stdin (.getInputStream process)
;        isr (InputStreamReader. stdin)
;        br (BufferedReader. isr)]
;    (let [seq (line-seq br)]
;      seq)))
;
;(defn neo4j-linux
;  ""
;  []
;  (try (= (re-find #"Linux" (str (cmd-term "uname -a"))) "Linux")
;       (catch Exception e (do false))))
;
;(defn neo4j-win
;  ""
;  []
;  (try (= (re-find #"OSArchitecture" (str (cmd-term "wmic OS get OSArchitecture"))) "OSArchitecture")
;       (catch Exception e (do false))))
;
;(defn neo4j-stop-linux
;  ""
;  []
;  (cmd-term "neo4j-community/bin/neo4j stop"))
;
;(defn neo4j-stop-win
;  ""
;  []
;  (cmd-term "neo4j-community/bin/Neo4j.bat stop"))
;
;(defn neo4j-status-linux
;  ""
;  []
;  (neo4j-stop-linux)
;  false)
;
;(defn neo4j-status-win
;  ""
;  []
;  (neo4j-stop-win)
;  false)
;
;(defn neo4j-status
;  ""
;  []
;  (if (neo4j-linux)
;    (neo4j-status-linux)
;    (if (neo4j-win)
;      (neo4j-status-win)
;      false)))
;
;(defn neo4j-start-linux
;  ""
;  []
;  (cmd-term "neo4j-community/bin/neo4j start"))
;
;(defn neo4j-start-win
;  ""
;  []
;  (cmd-term "neo4j-community/bin/Neo4j.bat start"))
;
;(defn neo4j-start
;  "Start neo4j server"
;  []
;  (if (not (neo4j-status))
;    (if (neo4j-linux)
;      (neo4j-start-linux)
;      (if (neo4j-win)
;        (neo4j-start-win)))))
;
;(defn neo4j-stop
;  "Stop neo4j server"
;  []
;  (if (not (neo4j-status))
;    (if (neo4j-linux)
;      (neo4j-stop-linux)
;      (if (neo4j-win)
;        (neo4j-stop-win)))))
;
;(defn mongodb-start-mac
;  ""
;  []
;  (cmd-term "mongod --config resources/mongodb/conf/mongod.conf --smallfiles"))
;
;(defn mongodb-stop-mac
;  ""
;  []
;  (cmd-term "mongod --shutdown"))
;
;(defn start-server
;  "Start the development server and open the host application in the
;  default browser."
;  []
;  ;(neo4j-start)
;  ;(mongo-start)
;  ;(Thread/sleep 15000)
;  ;(n4j/connect-neo4j)
;  (mon/connect-mongo)
;  (def server (server/run-server))
;  (Thread/sleep 3000)
;  (browse/browse-url "http://localhost:5000/login"))
;
;(defn stop-server
;  "Stop server"
;  []
;  (neo4j-stop)
;  (.stop server))
;
;(defn restart-server
;  "Restart server"
;  []
;  (stop-server)
;  (start-server))
;
;(defn -main [& args]
;  (start-server))

(defonce nrepl-server (atom nil))

(defn parse-port [port]
  (when port
    (cond
      (string? port) (Integer/parseInt port)
      (number? port) port
      :else          (throw (Exception. (str "invalid port value: " port))))))

(defn stop-nrepl []
  (when-let [server @nrepl-server]
    (nrepl/stop-server server)))

(defn start-nrepl
  "Start a network repl for debugging when the :nrepl-port is set in the environment."
  []
  (if @nrepl-server
    (log/error "nREPL is already running!")
    (when-let [port (env :nrepl-port)]
      (try
        (->> port
             (parse-port)
             (nrepl/start-server :port)
             (reset! nrepl-server))
        (log/info "nREPL server started on port" port)
        (catch Throwable t
          (log/error t "failed to start nREPL"))))))

(defn http-port [port]
  (parse-port (or port (env :port) 3000)))

(defonce http-server (atom nil))

(defn start-http-server [port]
  (init)
  (reset! http-server (immutant/run server/handler :host "0.0.0.0" :port port)))

(defn stop-http-server []
  (when @http-server
    (destroy)
    (immutant/stop @http-server)
    (reset! http-server nil)))

(defn stop-app []
  (stop-nrepl)
  (stop-http-server)
  (mon/disconnect-mongo)
  (shutdown-agents))

(defn start-app [[port]]
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app))
  (start-nrepl)
  (start-http-server (http-port port))
  (mon/connect-mongo)
  (log/info "server started on port:" (:port @http-server)))

(defn -main [& args]
  (start-app args))

(println)
(println "Type (start-app [3000]) to launch application.")
(println "Type (stop-app) to stop application.")
(println)
(println "Type (selenium-test) to test functionalities.")
(println)
