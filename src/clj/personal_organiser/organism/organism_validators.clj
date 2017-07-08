(ns personal-organiser.organism.organism-validators
  (:require [valip.core :refer [validate]]
            [valip.predicates :refer [present? matches email-address?]]))

(defn not-matches
  "Predicate to determine if year, month or day are selected"
  [n]
  (not (= n "- Select -")))

(defn create-organism-errors
  "Credentials for organism form"
  [params]
  (validate params
            [:ofirst-name present? "First name can't be empty."]
            [:olast-name present? "Last name can't be empty."]
            [:oemail present? "Email can't be empty."]
            [:oemail email-address? "Email not in valid format."]
            [:opassword present? "Password can't be empty."]
            [:oconfirm-password present? "Confirm password can't be empty."]
            [:oheight present? "Height can't be empty."]
            [:oweight present? "Weight can't be empty."]
            [:obirthday-day not-matches "Birthday day can't be empty."]
            [:obirthday-month not-matches "Birthday month can't be empty."]
            [:obirthday-year not-matches "Birthday year can't be empty."]
            [:ogender present? "Gender can't be empty."]
            [:odiet present? "Diet can't be empty."]
            [:oactivity present? "Activity can't be empty."]))
