(ns personal-organiser.grocery
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [domina.xpath :as domxpath]))

(defn new-fn []
  (let [elements (map dom/attrs (dom/nodes (domcss/sel "input[id*='value']")))]
	(dom/destroy! (dom/by-class "help"))
	(doseq [x elements]
	   (if (> (count (dom/value (dom/by-id (:id x)))) 0)
		true
		(do (dom/prepend! (dom/by-id (str "td"(:id x)))
                                  (str "<div class=\"help\">Value for field "(dom/text (dom/by-id (str "l"(:id x))))" is required</div>"))
		  false)))))

(defn validate-form []
  (let [gname (dom/by-id "name")
        gcalories (dom/by-id "calories")]
     (if (and (> (count (dom/value gname)) 0)
	      (> (count (dom/value gcalories)) 0))
	true
;;	(do (js/alert "Please, complete the form!")
	(do (new-fn)
	    false))))

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [grocery-form (.getElementById js/document "grocery-form")]
	(set! (.-onsubmit grocery-form) validate-form))))

;; (set! (.-onload js/window) init)
