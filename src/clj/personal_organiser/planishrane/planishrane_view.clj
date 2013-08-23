(ns personal-organiser.planishrane.planishrane-view
  (:use (sandbar stateful-session))
  (:require [personal-organiser.html-generator :as hg]
	    [net.cgrand.enlive-html :as en]))

(en/defsnippet process
  (en/html-resource "public/planishrane/planishrane-training.html")
  [:table.planishrane-training]
  [day index]
  [:th.h-day] (en/content day)
  [:select#training-coef] (en/set-attr :name (str "training-coef"index)
				       :id (str "training-coef"index))
  [:input#training-meal-no] (en/set-attr :name (str "training-meal"index)
					 :id (str "training-meal-no"index))
  [:label#ltraining-meal-no] (en/set-attr :for (str "training-meal-no"index)
					 :id (str "ltraining-meal-no"index))
  [:input#training-meal-breakfast] (en/set-attr :name (str "training-meal"index)
						:id (str "training-meal-breakfast"index))
  [:label#ltraining-meal-breakfast] (en/set-attr :for (str "training-meal-breakfast"index)
					 :id (str "ltraining-meal-breakfast"index))
  [:input#training-meal-lunch] (en/set-attr :name (str "training-meal"index)
					    :id (str "training-meal-lunch"index))
  [:label#ltraining-meal-lunch] (en/set-attr :for (str "training-meal-lunch"index)
					 :id (str "ltraining-meal-lunch"index))
  [:input#training-meal-dinner] (en/set-attr :name (str "training-meal"index)
					     :id (str "training-meal-dinner"index))
  [:label#ltraining-meal-dinner] (en/set-attr :for (str "training-meal-dinner"index)
					 :id (str "ltraining-meal-dinner"index))
  [:input#training-duration] (en/set-attr :name (str "training-duration"index)
					  :id (str "training-duration"index)))

(en/deftemplate process-template
  (hg/build-html-page [{:temp-sel [:div.maincontent],
			:comp "public/planishrane/planishrane-form.html",
			:comp-sel [:form#planishrane-form]}])
  []
  [:title] (en/content "Plan ishrane")
  [:td.monday] (en/content (process "Monday" 1))
  [:td.tuesday] (en/content (process "Tuesday" 2))
  [:td.wednesday] (en/content (process "Wednesday" 3))
  [:td.thursday] (en/content (process "Thursday" 4))
  [:td.friday] (en/content (process "Friday" 5))
  [:td.saturday] (en/content (process "Saturday" 6))
  [:td.sunday] (en/content (process "Sunday" 7)))

(en/defsnippet results
  (en/html-resource "public/planishrane/planishrane-results.html")
  [:table.planishrane-results]
  [day
   meals]
  [:th.h-day] (en/content day)
  [:tr#meals-by-days] (en/clone-for [[meal-type meal] meals]
			[:tr#meals-by-days] (en/set-attr :class meal-type)
			[:td#meal-type] (en/content meal-type)
			[:select.meal-day] (en/set-attr :name (str (clojure.string/lower-case meal-type)
							     "-"
							     (clojure.string/lower-case day)))
			[:option#meal-day-opt] (en/clone-for [ml meal]
						 (comp (en/content (str (:mlname ml)
									" - "
									(:mlcalories ml)
									" cal"))
						       (en/set-attr :value (:mlid ml))
						       (en/remove-attr :id)))))

(en/deftemplate results-template
  (hg/build-html-page [{:temp-sel [:div.maincontent],
			:comp "public/planishrane/planishrane-form.html",
			:comp-sel [:form#planishrane-form]}])
  [[monday
    tuesday
    wednesday
    thursday
    friday
    saturday
    sunday]]
  [:title] (en/content "Plan ishrane results")
  [:td.monday] (en/content (results "Monday" monday))
  [:td.tuesday] (en/content (results "Tuesday" tuesday))
  [:td.wednesday] (en/content (results "Wednesday" wednesday))
  [:td.thursday] (en/content (results "Thursday" thursday))
  [:td.friday] (en/content (results "Friday" friday))
  [:td.saturday] (en/content (results "Saturday" saturday))
  [:td.sunday] (en/content (results "Sunday" sunday)))
