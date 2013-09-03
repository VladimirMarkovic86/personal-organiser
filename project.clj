(defproject personal-organiser "0.1.0-SNAPSHOT"
  :description "PersonalOrganiser should be application for organising daily activities, from meal planning, preparation and consumation, through trening schedules to their time adaptation with professional development and social interaction."
  :url "https://github.com/VladimirMarkovic86/personal-organiser"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  ;; CLJ source code path
  :source-paths ["src/clj"]
  :test-paths ["test" "src/clj"]
  :resource-paths ["resources"]
  :java-source-paths ["src/java"]

  :dependencies [[org.clojure/clojure "1.5.1"]
		 [compojure "1.1.5"]
		 [com.cemerick/valip "0.3.2"]
		 [clojurewerkz/neocons "1.1.0"]
		 [ring/ring-core "1.2.0"]
		 [ring/ring-jetty-adapter "1.1.0"]
		 [enlive "1.1.1"]
		 [domina "1.0.2-SNAPSHOT"]
		 [sandbar "0.4.0-SNAPSHOT"]
		 [org.clojure/data.json "0.2.2"]
		 [org.clojure/clojure-contrib "1.2.0"]
		 [com.draines/postal "1.11.0"]
;		 Drools runtime dependencies should bi commented when compiling clojurescript
		 [org.antlr/antlr-runtime "3.5"] [org.drools/drools-core "6.0.0.CR1"] [org.drools/drools-compiler "6.0.0.CR1"] [org.drools/drools-decisiontables "6.0.0.CR1"] [org.drools/droolsjbpm-ide-common "5.5.0.Final"] [org.drools/drools-jsr94 "6.0.0.CR1"] [org.drools/drools-templates "6.0.0.CR1"] [org.drools/guvnor-api "5.5.0.Final"] [org.jbpm/jbpm-bpmn2 "6.0.0.CR1"] [org.jbpm/jbpm-flow "6.0.0.CR1"] [org.jbpm/jbpm-flow-builder "6.0.0.CR1"] [drools/drools-jsr94 "20040726.195413"] [junit/junit "4.11"] [jexcelapi/jxl "2.6"] [org.drools/knowledge-api "6.0.0.CR1"] [org.drools/knowledge-internal-api "5.5.0.Final"] [org.mvel/mvel2 "2.1.6.Final"] [org.eclipse.jdt/core "3.3.0-v_771"] [org.slf4j/slf4j-api "1.7.5"] [xmlpull/xmlpull "1.1.3.4d_b4_min"] [xpp3/xpp3_min "1.1.4c"] [xstream/xstream "1.2.2"] [org.jvnet.jaxb2_commons/jaxb-xjc "2.1.10.1"]
]

  ;; run main from personal-organiser.core namespace
  :main personal-organiser.repl

  ;; REPL default namespace
  :repl-init personal-organiser.repl

  ;; lein-cljsbuild plugin to build a CLJS project
  :plugins [;; cljsbuild plugin
	    [lein-cljsbuild "0.3.2"]

	    ;; ring plugin
	    [lein-ring "0.8.5"]

	    ;; codox plugin
	    [codox "0.6.4"]]

  ;; :codox {:sources ["src/clj" "src/cljs"]}

  ;; cljsbuild options configuration
  :cljsbuild {:crossovers [valip.core 
                           valip.predicates 
                           personal-organiser.organism.organism-validators
			   personal-organiser.login.login-validators]
	      :builds
		{:dev-grocery
		 {;; CLJS source code path
		  :source-paths ["src/brepl"
				 "src/cljs/personal_organiser/grocery"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/grocery.js"

			     ;; minimal JS optimization directive
			     :optimizations :whitespace

			     ;; generated JS code prettyfication
			     :pretty-print true}}
		 :dev-meal
		 {;; CLJS source code path
		  :source-paths ["src/brepl"
				 "src/cljs/personal_organiser/meal"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/meal.js"

			     ;; minimal JS optimization directive
			     :optimizations :whitespace

			     ;; generated JS code prettyfication
			     :pretty-print true}}
		 :dev-organism
		 {;; CLJS source code path
		  :source-paths ["src/brepl"
				 "src/cljs/personal_organiser/organism"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/organism.js"

			     ;; minimal JS optimization directive
			     :optimizations :whitespace

			     ;; generated JS code prettyfication
			     :pretty-print true}}
		 :dev-login
		 {;; CLJS source code path
		  :source-paths ["src/brepl"
				 "src/cljs/personal_organiser/login"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/login.js"

			     ;; minimal JS optimization directive
			     :optimizations :whitespace

			     ;; generated JS code prettyfication
			     :pretty-print true}}
		 :dev-planishrane
		 {;; CLJS source code path
		  :source-paths ["src/brepl"
				 "src/cljs/personal_organiser/planishrane"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/planishrane.js"

			     ;; minimal JS optimization directive
			     :optimizations :whitespace

			     ;; generated JS code prettyfication
			     :pretty-print true}}
		 :prod-grocery
		 {;; CLJS source code path
		  :source-paths ["src/cljs/personal_organiser/grocery"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/grocery.js"

			     ;; minimal JS optimization directive
			     :optimizations :advanced}}
		 :prod-meal
		 {;; CLJS source code path
		  :source-paths ["src/cljs/personal_organiser/meal"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/meal.js"

			     ;; minimal JS optimization directive
			     :optimizations :advanced}}
		 :prod-organism
		 {;; CLJS source code path
		  :source-paths ["src/cljs/personal_organiser/organism"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/organism.js"

			     ;; minimal JS optimization directive
			     :optimizations :advanced}}
		 :prod-login
		 {;; CLJS source code path
		  :source-paths ["src/cljs/personal_organiser/login"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/login.js"

			     ;; minimal JS optimization directive
			     :optimizations :advanced}}
		 :prod-planishrane
		 {;; CLJS source code path
		  :source-paths ["src/cljs/personal_organiser/planishrane"
				 "src/cljs/personal_organiser/utils"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/planishrane.js"

			     ;; minimal JS optimization directive
			     :optimizations :advanced}}}})
