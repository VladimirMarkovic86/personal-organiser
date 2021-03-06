(ns personal-organiser.config
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [personal-organiser.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
               (fn []
                 (parser/cache-off!)
                 (log/info "\n-=[personal-organiser started successfully using the development profile]=-"))
   :middleware wrap-dev})
