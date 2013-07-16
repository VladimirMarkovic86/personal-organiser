(defproject personal-organiser "0.1.0-SNAPSHOT"
  :description "Personal Organiser desc"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  ;; CLJ source code path
  :source-paths ["src/clj"]

  :dependencies [[org.clojure/clojure "1.5.1"]
		 [compojure "1.1.5"]
		 [com.cemerick/valip "0.3.2"]
		 [clojurewerkz/neocons "1.1.0"]
		 [ring/ring-jetty-adapter "1.1.0"]
		 [enlive "1.0.0"]]

  ;; run main from personal-organiser.core namespace
  :main personal-organiser.core

  ;; lein-cljsbuild plugin to build a CLJS project
  :plugins [;; cljsbuild plugin
	    [lein-cljsbuild "0.3.2"]

	    ;; ring plugin
	    [lein-ring "0.8.5"]]

  ;; ring task configuration
  :ring {:handler personal-organiser.core/handler}

  ;; cljsbuild options configuration
  :cljsbuild {:builds
		[{;; CLJS source code path
		  :source-paths ["src/cljs"]

		  ;; Google Closure (CLS) options configuration
		  :compiler {;; CLS generated JS script filename
			     :output-to "resources/public/js/personal-organiser.js"

			     ;; minimal JS optimization directive
			     :optimizations :whitespace

			     ;; generated JS code prettyfication
			     :pretty-print true}}]})
