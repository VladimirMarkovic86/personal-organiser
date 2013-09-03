(ns personal-organiser.planishrane.jsplanishrane-final
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [domina.events :as evts]))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='ingredient']")))
	  sel-exits (map dom/attrs (dom/nodes (domcss/sel "input[id*='exit-ing']")))]
	(doseq [sel-node sel-nodes]
	   (evts/listen! (dom/by-id (:id sel-node))
				    :click
				    (fn [] (let [selector (dom/by-id (clojure.string/replace (:id sel-node) "ingredient" "meal"))]
					    (if (= (re-find #"none" (dom/style selector "display")) "none")
						(do (dom/set-style! selector "display" "block")
						    (doseq [sel-node sel-nodes]
							   (dom/set-attr! (dom/by-id (:id sel-node)) "disabled" "disabled"))))))))
	(doseq [sel-exit sel-exits]
	   (evts/listen! (dom/by-id (:id sel-exit))
				    :click
				    (fn [] (let [selector (dom/by-id (clojure.string/replace (:id sel-exit) "exit-ing" "meal"))]
					    (if (= (re-find #"block" (dom/style selector "display")) "block")
						(do (dom/set-style! selector "display" "none")
						    (doseq [sel-node sel-nodes]
							   (dom/remove-attr! (dom/by-id (:id sel-node)) "disabled"))))))))
)))
