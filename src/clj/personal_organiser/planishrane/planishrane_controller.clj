(ns personal-organiser.planishrane.planishrane-controller
  (:require [personal-organiser.planishrane.planishrane-engine :refer [knowledge-base-run]]
	    [personal-organiser.planishrane.planishrane-view :as plv]
	    [personal-organiser.utils :refer [map-keys-to-str]]
	    [clojure.test :refer :all]))
(with-test
(defn param-exist
  "If parameter exist in request params"
  [req-params param]
  (if (= (get req-params param) nil)
      0
      (read-string (get req-params param))))
 (is (= 1 (param-exist {":param1" "1"} ":param1")))
 (is (= 0 (param-exist {":param1" "1"} ":param2")))
)

(with-test
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
 (is (= [{":training-meal1" "2"
	  ":training-duration1" "30"
	  ":training-coef1" "7.5"}
	 [2 30 7.5]] (add-params [{":training-meal1" "2"
				   ":training-duration1" "30"
				   ":training-coef1" "7.5"}] 1)))
 (is (= [{":training-meal2" "2"
	  ":training-duration2" "30"
	  ":training-coef2" "7.5"}
	 [0 0 0]] (add-params [{":training-meal2" "2"
				":training-duration2" "30"
				":training-coef2" "7.5"}] 1)))
 (is (= [{":training-meal1" "2"
	  ":training-duration2" "30"
	  ":training-coef2" "7.5"}
	 [2 0 0]] (add-params [{":training-meal1" "2"
				":training-duration2" "30"
				":training-coef2" "7.5"}] 1)))
)

(with-test
(defn form-params
  "Form params for knowledge-base-run fn"
  [req-params]
  (into []
	(rest (reduce add-params
		      [req-params]
		      [1 2 3 4 5 6 7]))))
 (is (= [[2 30 7.5]
	 [3 40 9.5]
	 [4 50 11.5]
	 [0 0 0]
	 [0 0 0]
	 [0 0 0]
	 [0 0 0]] (form-params {":training-meal1" "2"
				":training-duration1" "30"
				":training-coef1" "7.5"
				":training-meal2" "3"
				":training-duration2" "40"
				":training-coef2" "9.5"
				":training-meal3" "4"
				":training-duration3" "50"
				":training-coef3" "11.5"})))
)

(defn knowledge-base
  "Define results of knowledge base in variable"
  [req-params]
  (defonce results (into []
			 (map knowledge-base-run (form-params (map-keys-to-str req-params))))))


(defn process
  "Process data and retrieve results"
  [req-params]
  (knowledge-base req-params)
  (plv/results-template results))

(defn init-all
  "Initialize all results"
  []
  (def all-results (atom [(atom [])
			(atom [])
			(atom [])
			(atom [])
			(atom [])
			(atom [])
			(atom [])]))
  (def day-lbls ["monday"
		"tuesday"
		"wednesday"
		"thursday"
		"friday"
		"saturday"
		"sunday"])

  (def meal-lbls ["breakfast"
		"lunch"
		"dinner"
		"training"]))

(defn initialize-quazy-data
  "Initialize quazy data for test"
  []
  (def results [[["Breakfast" [{:mlid 1} {:mlid 2} {:mlid 3}]]
	       ["Lunch" [{:mlid 4} {:mlid 5} {:mlid 6}]]
	       ["Dinner" [{:mlid 7} {:mlid 8} {:mlid 9}]]]
	      [["Breakfast" [{:mlid 10} {:mlid 11} {:mlid 12}]]
	       ["Lunch" [{:mlid 13} {:mlid 14} {:mlid 15}]]
	       ["Dinner" [{:mlid 16} {:mlid 17} {:mlid 18}]]]
	      [["Breakfast" [{:mlid 19} {:mlid 20} {:mlid 21}]]
	       ["Lunch" [{:mlid 22} {:mlid 23} {:mlid 24}]]
	       ["Dinner" [{:mlid 25} {:mlid 26} {:mlid 27}]]]
	      [["Breakfast" [{:mlid 28} {:mlid 29} {:mlid 30}]]
	       ["Lunch" [{:mlid 31} {:mlid 32} {:mlid 33}]]
	       ["Dinner" [{:mlid 34} {:mlid 35} {:mlid 36}]]]
	      [["Breakfast" [{:mlid 37} {:mlid 38} {:mlid 39}]]
	       ["Lunch" [{:mlid 40} {:mlid 41} {:mlid 42}]]
	       ["Dinner" [{:mlid 43} {:mlid 44} {:mlid 45}]]]
	      [["Breakfast" [{:mlid 46} {:mlid 47} {:mlid 48}]]
	       ["Lunch" [{:mlid 49} {:mlid 50} {:mlid 51}]]
	       ["Dinner" [{:mlid 52} {:mlid 53} {:mlid 54}]]]
	      [["Breakfast" [{:mlid 55} {:mlid 56} {:mlid 57}]]
	       ["Lunch" [{:mlid 58} {:mlid 59} {:mlid 60}]]
	       ["Dinner" [{:mlid 61} {:mlid 62} {:mlid 63}]]]])
  (def req-params {":breakfast-monday" "1" ":lunch-monday" "5" ":dinner-monday" "9"
		 ":breakfast-tuesday" "10" ":lunch-tuesday" "15" ":dinner-tuesday" "18"
		 ":breakfast-wednesday" "19" ":lunch-wednesday" "23" ":dinner-wednesday" "26"
		 ":breakfast-thursday" "29" ":lunch-thursday" "32" ":dinner-thursday" "35"
		 ":breakfast-friday" "38" ":lunch-friday" "41" ":dinner-friday" "44"
		 ":breakfast-saturday" "47" ":lunch-saturday" "50" ":dinner-saturday" "53"
		 ":breakfast-sunday" "56" ":lunch-sunday" "59" ":dinner-sunday" "62"})
  req-params)

(with-test
(defn form-selected-result
  "Form results for final"
  [req-params]
  (init-all)
  (def day-counter 0)
  (doseq [day results]
    (def meal-type-counter 0)
    (doseq [[meal-type meals] day]
	(doseq [meal meals]
	  (if (= (str (:mlid meal)) (get req-params (str ":"
						     (meal-lbls meal-type-counter)
						     "-"
						     (day-lbls day-counter))))
	    (swap! (@all-results day-counter) conj meal)
	  )
	)
	(def meal-type-counter (+ meal-type-counter 1))
    )
    (def day-counter (+ day-counter 1))
  )
  (def result-atom (atom []))
  (doseq [day @all-results
	  meal @day]
	(swap! result-atom conj meal))
  @result-atom)
 (is (= [{:mlid 1} {:mlid 5} {:mlid 9}
	  {:mlid 10} {:mlid 15} {:mlid 18}
	  {:mlid 19} {:mlid 23} {:mlid 26}
	  {:mlid 29} {:mlid 32} {:mlid 35}
	  {:mlid 38} {:mlid 41} {:mlid 44}
	  {:mlid 47} {:mlid 50} {:mlid 53}
	  {:mlid 56} {:mlid 59} {:mlid 62}]
	  (form-selected-result (initialize-quazy-data)))))

(defn final
  "Form results by selection on planishrane form
   and pass it to view generator"
  [req-params]
  (form-selected-result (map-keys-to-str req-params))
  (plv/final-template @all-results (read-string (:market req-params))))
