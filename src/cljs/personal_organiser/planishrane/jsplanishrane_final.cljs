(ns personal-organiser.planishrane.jsplanishrane-final
  (:require [domina :as dom]
	    [domina.css :as domcss]
	    [domina.events :as evts]
	    [goog.events :as events]
	    [clojure.string :as cstring]
	    [personal-organiser.utils.jsutils :as utils]))

(def _start-x 0); mouse starting position
(def _start-y 0)
(def _offset-x 0); mouse current element pffset
(def _offset-y 0)
(def _drag-element nil); needs to be passed from on-mouse-down to on-mouse-move
(def _old-z-index 0); temporarily increase the z-index during drag

(defn on-mouse-move
  [evt]
  ;(dom/set-style! _drag-element "left" (str (- (+ _offset-x (utils/parse-number (.-clientX (.getBrowserEvent evt)))) _start-x) "px"))
  (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel (str "div[class*='"(dom/attr _drag-element "class")"']"))))]
  (def y (- (+ _offset-y (utils/parse-number (.-clientY (.getBrowserEvent evt)))) _start-y))
  (if (and (> y -57) (< y 113))
      (doseq [drag-element sel-nodes]
	     (dom/set-style! (dom/by-class (:class drag-element)) "top" (str y "px")))
  )
  )
)

(defn get-number
  [numpx]
  (utils/parse-number (cstring/replace numpx "px" "")))

(defn on-mouse-down
  [evt target]
  ;(def _start-x (.-clientX (.getBrowserEvent evt)))
  (def _start-y (.-clientY (.getBrowserEvent evt)))
  ;(def _offset-x (get-number (dom/style target "left")))
  (def _offset-y (get-number (dom/style target "top")))
  ;(def _old-z-index (get-number (dom/style target "z-index")))
  ;(dom/set-style! target "z-index" "10000")
  (def _drag-element target)
  (events/listen js/window (.-MOUSEMOVE events/EventType) (fn [evt] (on-mouse-move evt)))
  (.focus js/document.body)
)

(defn on-mouse-up
  [evt drag-element]
  ;(dom/set-style! drag-element "z-index" _old-z-index)
  (events/listen js/window (.-MOUSEMOVE events/EventType) (fn [evt] ))
  (def _drag-element nil)
)

(defn ^:export init []
  (if (and js/document
	   (.-getElementById js/document))
    (let [sel-nodes (map dom/attrs (dom/nodes (domcss/sel "input[id*='meal']")))
	  sel-exits (map dom/attrs (dom/nodes (domcss/sel "input[id*='exit-ing']")))]
	(events/listen js/window (.-MOUSEDOWN events/EventType) (fn [evt] (def target (.-target evt))
									  (if (and (= (.-button evt) 0)
										   (= (re-find #"drag" (dom/attr target "class")) "drag"))
									      (on-mouse-down evt target))))
	(events/listen js/window (.-MOUSEUP events/EventType) (fn [evt] (if (not (= _drag-element nil))
									    (on-mouse-up evt _drag-element))))
	(doseq [sel-node sel-nodes]
	   (evts/listen! (dom/by-id (:id sel-node))
				    :click
				    (fn [] (let [selector (dom/by-class (:id sel-node))]
					    (if (= (re-find #"none" (dom/style selector "display")) "none")
						(do (dom/set-style! selector "display" "block")
						    (doseq [sel-node sel-nodes]
							   (dom/set-attr! (dom/by-id (:id sel-node)) "disabled" "disabled"))))))))
	(doseq [sel-exit sel-exits]
	   (evts/listen! (dom/by-id (:id sel-exit))
				    :click
				    (fn [] (let [selector (dom/by-class (clojure.string/replace (:id sel-exit) "exit-ing" "meal"))]
					    (if (= (re-find #"block" (dom/style selector "display")) "block")
						(do (dom/set-style! selector "display" "none")
						    (doseq [sel-node sel-nodes]
							   (dom/remove-attr! (dom/by-id (:id sel-node)) "disabled"))))))))
)))
