(ns personal-organiser.meal.meal-controller
  (:use [clojure.string :only [split]]
	[clojure.set :only [difference intersection]])
  (:require [personal-organiser.meal.meal-validators :refer [create-meal-errors]]
	    [personal-organiser.meal.meal-view :refer [read-all-meals]]
	    [personal-organiser.neo4j :as n4j]
	    [personal-organiser.utils :refer [map-keys-to-str
					      create-rels-for-node
					      update-rels-for-node
					      delete-rels-for-node
					      file-delete
					      copy-file]]
	    [clojure.test :refer :all]))

(defn cal-calc
  "Calculate ingredient calories in meal"
  [acc ingredient]
  (+ acc (* (* (:grams ingredient)
	       (:quantity ingredient))
	    (/ (:gcalories (:data (n4j/read-node (:id ingredient))))
	       100))))

(defn meal-cal-calc
  "Calculate meal calories of all ingredients"
  [ingredients]
  (reduce cal-calc 0 ingredients))

(with-test
(defn get-value
  "Get value from params"
  [acc param-key ing-index]
  (get (first acc) (str param-key ing-index)))
 (is (= "value" (get-value [{":param-key1" "value"}] ":param-key" "1")))
 (is (= "value" (get-value [{":param-key1" "value"} "element 1"
						    ["element 2"
						     "element 3"]] ":param-key" "1")))
 (is (= nil (get-value [{":param-key2" "value"} "element 1"
						    ["element 2"
						     "element 3"]] ":param-key" "1")))
)

(with-test
(defn add-ingredient-params
  "Form ingredient params and add them to vector as map"
  [acc ing-index]
  (conj acc {:grams (read-string (get-value acc ":igrams" ing-index)),
	     :quantity (read-string (get-value acc ":iquantity" ing-index)),
	     :id (read-string (get-value acc ":ingredient" ing-index))}))
 (is (= [{":igrams1" "1",
	  ":ingredient1" "1",
	  ":iquantity1" "1"}
	 {:grams 1,
	  :quantity 1,
	  :id 1}] (add-ingredient-params [{":igrams1" "1"
					    ":iquantity1" "1"
					    ":ingredient1" "1"}] "1")))
)

(with-test
(defn add-ingredient-params-update
  "Form ingredient params and add them to vector as map"
  [acc ing-index]
  (conj acc {:grams (read-string (get-value acc ":igrams" ing-index)),
	     :quantity (read-string (get-value acc ":iquantity" ing-index)),
	     :id (read-string ing-index)}))
(is (= [{":igrams1" "1",
	 ":iquantity1" "1"}
	 {:grams 1,
	  :quantity 1,
	  :id 1}] (add-ingredient-params-update [{":igrams1" "1"
						  ":iquantity1" "1"}] "1")))
)

(with-test
(defn form-map-of-ingredients
  "Form map of ingredients"
  [req-params ing-indexes]
  (into [] (rest (reduce add-ingredient-params [req-params] ing-indexes))))
(is (= [{:grams 1, :quantity 1, :id 1}
	{:grams 2, :quantity 2, :id 2}
	{:grams 3, :quantity 3, :id 3}] (form-map-of-ingredients {":igrams1" "1"
								  ":iquantity1" "1"
								  ":ingredient1" "1"
								  ":igrams2" "2"
								  ":iquantity2" "2"
								  ":ingredient2" "2"
								  ":igrams3" "3"
								  ":iquantity3" "3"
								  ":ingredient3" "3"} ["1" "2" "3"])))
)

(with-test
(defn form-map-of-ingredients-update
  "Form map of ingredients"
  [req-params ing-indexes]
  (into [] (rest (reduce add-ingredient-params-update [req-params] ing-indexes))))
(is (= [{:grams 1, :quantity 1, :id 1}
	{:grams 2, :quantity 2, :id 2}
	{:grams 3, :quantity 3, :id 3}] (form-map-of-ingredients-update {":igrams1" "1"
									 ":iquantity1" "1"
									 ":ingredient1" "1"
									 ":igrams2" "2"
									 ":iquantity2" "2"
									 ":ingredient2" "2"
									 ":igrams3" "3"
									 ":iquantity3" "3"
									 ":ingredient3" "3"} ["1" "2" "3"])))
)

(with-test
(defn get-file-extension
  "Get file extension"
  [filename]
  (if (= (re-find #"\." filename) ".")
    (let [filename-seq (split filename #"\.")
	filename-seq-length (- (count filename-seq) 1)]
      (filename-seq filename-seq-length))
    ""
  )
)
(is (= "extension" (get-file-extension "filename.extension")))
(is (= "extension" (get-file-extension "file.name.extension")))
(is (= "" (get-file-extension "filename")))
)

(defn get-img-value
  "Get value for image in database"
  [req-params]
  (if (= (:size (:mlimg req-params)) 0)
	(:mlhimg req-params)
	(do (file-delete (str "resources/drools/images/" (:idmeal req-params) "." (:mlhimg req-params)))
	    (get-file-extension (copy-file (:tempfile (:mlimg req-params))
					   "resources/drools/images/"
					   (str (:idmeal req-params)
					   "."
					   (get-file-extension (:filename (:mlimg req-params)))))))))

(defn save-meal
  "Save meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:mlname (:mlname req-params)
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)})]
    (println (str "Meal errors: " meal-errors))
    (let [node-id (n4j/create-node "meal" {:mlname (:mlname req-params)
						 :mlcalories (meal-cal-calc (form-map-of-ingredients (map-keys-to-str req-params)
												     (split (:ingredient-indexes req-params) #";")))
						 :mltype (:mltype req-params)
						 :mldesc (:mldesc req-params)
						 :mlimg ((split (:filename (:mlimg req-params)) #"\.") 1)})]
	(create-rels-for-node node-id
			      (form-map-of-ingredients (map-keys-to-str req-params)
						       (split (:ingredient-indexes req-params) #";"))
			      :meal-has-grocery)
	(copy-file (:tempfile (:mlimg req-params))
		   "resources/drools/images/"
		   (str node-id
			"."
			(get-file-extension (:filename (:mlimg req-params)))))))
  (read-all-meals))

(defn update-meal
  "Update meal in neo4j database"
  [req-params]
  (if-let [meal-errors (create-meal-errors {:mlname (:mlname req-params)
					    :mltype (:mltype req-params)
					    :mldesc (:mldesc req-params)
					    :mlimg (:mlimg req-params)})]
    (println (str "Meal errors: " meal-errors))
    (let [params-map-str (map-keys-to-str req-params)
	  mlimg (get-img-value req-params)]
	(n4j/update-node
	(n4j/read-node (read-string (:idmeal req-params))) {:mlname (:mlname req-params)
							    :mlcalories (meal-cal-calc (form-map-of-ingredients params-map-str
														(split (:ingredient-indexes req-params) #";")))
							    :mltype (:mltype req-params)
							    :mldesc (:mldesc req-params)
							    :mlimg mlimg})
	;When updating meal data:
	;	- delete existing relations to groceries that were removed from form
	;	- update existing relations with new data
	; 	- create new relations
     (delete-rels-for-node (reduce (fn [vec num] (conj vec (read-string num))) [] (into []
				 (difference (into #{}
						        (split (get params-map-str ":existing-ing-ind") #";"))
					          (into #{}
							(split (get params-map-str ":ingredient-indexes") #";"))))))
     (update-rels-for-node (form-map-of-ingredients-update params-map-str
						    (into []
							  (intersection (into #{}
										   (split (get params-map-str ":existing-ing-ind") #";"))
									     (into #{}
										   (split (get params-map-str ":ingredient-indexes") #";"))))))
     (create-rels-for-node (read-string (:idmeal req-params))
			   (form-map-of-ingredients params-map-str
			   			    (into []
							  (difference (into #{}
						        			 (split (get params-map-str ":ingredient-indexes") #";"))
									   (into #{}
										 (split (get params-map-str ":existing-ing-ind") #";")))))
			   :meal-has-grocery)))
  (read-all-meals))

(defn delete-meal
  "Delete meal from neo4j database"
  [id]
  (doseq [[img-extension] (:data (n4j/cypher-query (str "start n=node("id")"
							"return n.mlimg")))]
	(file-delete (str "resources/drools/images/"
			  id
			  "."
			  img-extension)))
  (n4j/delete-node "meal" id)
  (str id))
