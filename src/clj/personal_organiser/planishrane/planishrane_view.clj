(ns personal-organiser.planishrane.planishrane-view
  (:use (sandbar stateful-session))
  (:require [personal-organiser.html-generator :as hg]
	    [net.cgrand.enlive-html :as en]
	    [pl.danieljanus.tagsoup :as tgsoup]
	    [clojure.string :as cstring]))

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
  [:td.market] (en/content nil)
  [:div.script] (en/content {:tag :script,
			     :attrs {:src "http://localhost:5000/js/planishrane.js"},
			     :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.planishrane.jsplanishrane.init();"})
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
							     (clojure.string/lower-case day))
							:id (str (clojure.string/lower-case meal-type)
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
  [:div.script] (en/content {:tag :script,
			     :attrs {:src "http://localhost:5000/js/planishrane.js"},
			     :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.planishrane.jsplanishrane_result.init();"})
  [:form#planishrane-form] (en/set-attr :action "/planishrane-final")
  [:td.monday] (en/content (results "Monday" monday))
  [:td.tuesday] (en/content (results "Tuesday" tuesday))
  [:td.wednesday] (en/content (results "Wednesday" wednesday))
  [:td.thursday] (en/content (results "Thursday" thursday))
  [:td.friday] (en/content (results "Friday" friday))
  [:td.saturday] (en/content (results "Saturday" saturday))
  [:td.sunday] (en/content (results "Sunday" sunday)))

(defn calc-amount
  "Calculate amount of calories, proteins, carbohydrates
   or fats in (grams x quantity) of ingredient amount"
  [amount-in-100g grams quantity]
  (format "%.2f" (* (/ (* grams quantity) 100) amount-in-100g)))

(def mapped-groceries {"Egg" 48
		       "Mushrooms" 52
		       "Onion" 13
		       "Lemon" 43
		       "Beans" 5
		       "Pepper" 20
		       "Tomato" 18
		       "Cheese" 49
		       "Peach" 30
		       "Banana" 39
		       "Potato" 3
		       "Carrot" 17})

(defn get-price
  "Get price from market place for ingredient"
  [ingredient market-id]
  (let [tag ((((((((((tgsoup/parse "http://www.bgpijace.rs/barometer.php") 3) 2) 3) 3) 2) 3) 5) 2) 2)]
	(if (and (not (= (get mapped-groceries (:gname ingredient)) nil))
		 (> (count ((tag (get mapped-groceries (:gname ingredient))) market-id)) 2))
		(((tag (get mapped-groceries (:gname ingredient))) market-id) 2)
		"/")))

(defn get-ingredient-coef
  ""
  [ingredient]
  (if (= (:gname ingredient) "Egg")
      (/ (* (:quantity ingredient) (:grams ingredient)) 60)
      (/ (* (:quantity ingredient) (:grams ingredient)) 1000)))

(defn calc-price
  "Calculate price for ingredient"
  [ingredient market-id]
  (let [price (get-price ingredient market-id)]
	(if (= (re-find #"-" price) "-")
	    (let [low-price (read-string ((cstring/split price #"-") 0))
		  high-price (read-string ((cstring/split price #"-") 1))
		  coef (get-ingredient-coef ingredient)]
		  (str (format "%.2f" (* coef low-price)) " - " (format "%.2f" (* coef high-price))))
	     price)))

(en/defsnippet final-template-generator
  (en/html-resource "public/planishrane/planishrane-meal.html")
  [:div.planishrane-final]
  [meal market-id]
  [:th.meal-type] (en/content (:mltype meal))
  [:td.meal-name] (en/content (:mlname meal))
  [:td.meal-calories] (en/content (str (:mlcalories meal)))
  [:td.meal-proteins] (en/content (str (:mlproteins meal)))
  [:td.meal-carbohydrates] (en/content (str (:mlcarbohydrates meal)))
  [:td.meal-fats] (en/content (str (:mlfats meal)))
  [:td.pop-up-button :input] (en/set-attr :id (str "ingredient" (let [] (def meal-id (+ meal-id 1))
								meal-id)))
  [:div.exit :input] (en/set-attr :id (str "exit-ing" meal-id))
  [:div.ingredient-table] (en/set-attr :id (str "meal" meal-id))
  [:div.ingredients-heading] (en/content (:mlname meal))
  [:tr.ingredient] (en/clone-for [ingredient (:meal-has-groceries meal)]
				  [:td.name] (en/content (:gname ingredient))
				  [:td.calories] (en/content (calc-amount (:gcalories ingredient)
									  (:grams ingredient)
									  (:quantity ingredient)))
				  [:td.proteins] (en/content (calc-amount (:gproteins ingredient)
									  (:grams ingredient)
									  (:quantity ingredient)))
				  [:td.carbohydrates] (en/content (calc-amount (:gcarbohydrates ingredient)
									       (:grams ingredient)
									       (:quantity ingredient)))
				  [:td.fats] (en/content (calc-amount (:gfats ingredient)
								      (:grams ingredient)
								      (:quantity ingredient)))
				  [:td.grams] (en/content (str (:grams ingredient)))
				  [:td.quantity] (en/content (str (:quantity ingredient)))
;				  [:td.price] (en/content (calc-price ingredient market-id))))
				  [:td.price] (en/content "/")))

(en/deftemplate final-template
  (hg/build-html-page [{:temp-sel [:div.maincontent],
			:comp "public/planishrane/planishrane-final.html",
			:comp-sel [:div.final-template]}])
  [meals-by-days market-id]
  [:title] (en/content "Plan ishrane final")
  [:div.script] (en/content {:tag :script,
			     :attrs {:src "http://localhost:5000/js/planishrane.js"},
			     :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.planishrane.jsplanishrane_final.init();"})
  [:div.final-template] (en/set-attr :meal-id (let [meal-id (def meal-id -1)]
						   meal-id))
  [:tr.day] (en/clone-for [day meals-by-days]
			  [:td.meal] (en/clone-for [meal @day]
						   [:td.meal] (en/content (final-template-generator meal market-id)))))

(en/defsnippet final-template-generator-clock
  (en/html-resource "public/planishrane/planishrane-meal-clock.html")
  [:div.drag]
  [meal market-id]
  [:div.drag] (en/set-attr :style (str "background:url('images/" (:mlid meal) ".jpg') center top no-repeat;background-size:50px 50px;top: 0px;left: 0px;z-index: 0;")))

(en/deftemplate final-template-clock
  (hg/build-html-page [{:temp-sel [:div.maincontent],
			:comp "public/planishrane/planishrane-final-clock.html",
			:comp-sel [:div.final-template]}])
  [meals-by-days market-id]
  [:title] (en/content "Plan ishrane final")
  [:div.script] (en/content {:tag :script,
			     :attrs {:src "http://localhost:5000/js/planishrane.js"},
			     :content nil})
  [:div.script] (en/append {:tag :script,
			    :attrs nil,
			    :content "personal_organiser.planishrane.jsplanishrane_final.init();"})
  [:td.day] (en/clone-for [day meals-by-days]
			  [:td.7] (en/content (final-template-generator-clock (@day 0) market-id))
			  [:td.8] (try (if (= (@day 3) nil)
					(en/set-attr :class "8")
					(en/content (final-template-generator-clock (@day 3) market-id)))
					(catch Exception e (do (en/set-attr :class "8"))))
			  [:td.12] (en/content (final-template-generator-clock (@day 1) market-id))
			  [:td.19] (en/content (final-template-generator-clock (@day 2) market-id))))
