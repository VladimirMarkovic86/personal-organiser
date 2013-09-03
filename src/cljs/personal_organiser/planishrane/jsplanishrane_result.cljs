(ns personal-organiser.planishrane.jsplanishrane-result
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [domina.events :as evts]))

(defn validate-form
  "Validate form"
  []
  (let [select-nodes (map dom/attrs (dom/nodes (domcss/sel "select")))
	valid (atom [])]
   (dom/destroy! (dom/by-class "help"))
   (doseq [select select-nodes]
	  (swap! valid
		 conj
		 (not (= (dom/value (dom/by-id (:id select)))
			 "- Select -"))))
	(if (not (every? true? @valid))
	    (dom/prepend! (dom/by-class "error-msgs")
			      "<div class=\"help\">Choose meal for every day, meal instead of \"- Select -\"</div>"))
	(every? true? @valid)))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [planishrane-form (dom/by-id "planishrane-form")]
	(set! (.-onsubmit planishrane-form) validate-form)
)))
