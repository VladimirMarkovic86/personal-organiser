(ns personal-organiser.planishrane.planishrane-controller
  (:require [personal-organiser.planishrane.planishrane-engine :refer [knowledge-base-run]]
	    [personal-organiser.planishrane.planishrane-view :as plv]
	    [personal-organiser.utils :refer [map-keys-to-str]]))

(defn param-exist
  "If parameter exist in request params"
  [req-params param]
  (if (= (get req-params param) nil)
      0
      (read-string (get req-params param))))

(defn add-params
  "Add params to seqence"
  [acc-seq index]
  (conj acc-seq [(param-exist (first acc-seq)
			      (str ":training-meal" index))
		 (param-exist (first acc-seq)
			      (str ":training-duration" index))
		 (param-exist (first acc-seq)
			      (str ":training-coef" index))
		 ]))

(defn form-params
  "Form params for knowledge-base-run fn"
  [req-params]
  (into []
	(rest (reduce add-params
		      [req-params]
		      [1 2 3 4 5 6 7]))))

(defn process
  "Process data and retrieve results"
  [req-params]
  (plv/results-template (into []
			      (map knowledge-base-run
				   (form-params (map-keys-to-str req-params))))))
