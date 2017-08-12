(ns personal-organiser.meal.meal-validators
  "Validate grocery data from form"
  (:require [bouncer.core :as b]
            [bouncer.validators :as v]
    ;[clojure.test :refer :all]
            ))

(defn in?
  "true if coll contains elm"
  [coll elm]
  (some #(= elm %) coll))

(v/defvalidator mime-type-image
                {:default-message-format "%s must be an image"}
                [maybe-an-image]
                (in? ["image/png"
                      "image/bmp"
                      "image/x-windows-bmp"
                      "image/gif"
                      "image/jpeg"
                      "image/tiff"
                      "image/x-tiff"] maybe-an-image))

(defn create-meal-errors
  "Validate data sent from submitted form"
  [params]
  (b/validate params
              :mlname v/required
              :mltype v/required
              :mldesc v/required
              :mlimg v/required
              :mlimg-ext [v/required mime-type-image]))
