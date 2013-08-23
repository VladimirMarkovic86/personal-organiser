(ns personal-organiser.planishrane.planishrane-controller
  (:require [personal-organiser.planishrane.planishrane-engine :refer [knowledge-base-run]]
	    [personal-organiser.planishrane.planishrane-view :as plv]))

(defn process
  "Process data and retrieve results"
  [req-params]
  (plv/results-template (into [] (map knowledge-base-run [[(read-string (:training-meal1 req-params))
						  (read-string (:training-duration1 req-params))
						  (read-string (:training-coef1 req-params))]
						 [(read-string (:training-meal2 req-params))
						  (read-string (:training-duration2 req-params))
						  (read-string (:training-coef2 req-params))]
						 [(read-string (:training-meal3 req-params))
						  (read-string (:training-duration3 req-params))
						  (read-string (:training-coef3 req-params))]
						 [(read-string (:training-meal4 req-params))
						  (read-string (:training-duration4 req-params))
						  (read-string (:training-coef4 req-params))]
						 [(read-string (:training-meal5 req-params))
						  (read-string (:training-duration5 req-params))
						  (read-string (:training-coef5 req-params))]
						 [(read-string (:training-meal6 req-params))
						  (read-string (:training-duration6 req-params))
						  (read-string (:training-coef6 req-params))]
						 [(read-string (:training-meal7 req-params))
						  (read-string (:training-duration7 req-params))
						  (read-string (:training-coef7 req-params))]]))))
