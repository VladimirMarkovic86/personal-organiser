(defproject personal-organiser "0.1.0-SNAPSHOT"
  :description "PersonalOrganiser should be application for organising daily activities, from meal planning, preparation and consumation, through trening schedules to their time adaptation with professional development and social interaction."
  :url "https://github.com/VladimirMarkovic86/personal-organiser"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  ;; CLJ source code path
  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["src/clj"]
  :resource-paths ["resources" "target/cljsbuild" "node_modules"]
  :java-source-paths ["src/java"]

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.170" :scope "provided" :exclusions [org.clojure/clojure org.clojure/tools.reader org.clojure/data.json]]
                 ;[clojurewerkz/neocons "2.0.0-beta3"]
                 [compojure "1.4.0" :exclusions [org.clojure/clojure joda-time]]
                 [com.cemerick/valip "0.3.2"]
                 [hiccup "1.0.5"]
                 [selmer "0.9.8" :exclusions [com.google.guava/guava org.json/json org.clojure/data.json]]
                 [hiccups "0.3.0" :exclusions [com.google.guava/guava org.json/json org.clojure/data.json]]
                 [markdown-clj "0.9.85"]
                 [environ "1.0.1"]
                 [ring-middleware-format "0.7.0" :exclusions [ring/ring-core ring/ring-jetty-adapter commons-io]]
                 [metosin/ring-http-response "0.6.5" :exclusions [ring/ring-core ring/ring-jetty-adapter commons-fileupload commons-io]]
                 [bouncer "1.0.0" :exclusions [com.google.guava/guava org.json/json]]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [org.webjars/bootstrap "3.3.6"]
                 [org.webjars/jquery "2.1.4"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.13"]
                 [org.apache.logging.log4j/log4j-core "2.5"]
                 [reagent "0.7.0" :exclusions [com.google.protobuf/protobuf-java org.clojure/google-closure-library-third-party org.clojure/clojure com.google.guava/guava com.google.code.gson/gson com.google.javascript/closure-compiler-externs args4j com.google.code.findbugs/jsr305 org.clojure/tools.reader org.clojure/google-closure-library org.clojure/clojurescript org.clojure/data.json]]
                 [reagent-utils "0.2.1"]
                 [secretary "1.2.3" :exclusions [com.google.guava/guava org.json/json]]
                 [cljs-ajax "0.5.2" :exclusions [org.clojure/clojure com.google.guava/guava joda-time clj-time org.clojure/tools.reader org.clojure/core.cache org.clojure/data.json]]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.1.5"]
                 [ring "1.4.0" :exclusions [org.clojure/tools.namespace hiccup org.clojure/clojure joda-time org.clojure/java.classpath]]
                 [mount "0.1.7"]
                 [clj-http "2.3.0" :exclusions [potemkin riddley org.apache.httpcomponents/httpcore]]
                 [enlive "1.1.1"]
                 [domina "1.0.1"]
                 [sandbar "0.4.0-SNAPSHOT" :exclusions [org.clojure/tools.macro]]
                 [org.clojure/data.json "0.2.2"]
                 [com.draines/postal "1.11.0"]
                 [org.clojure/core.cache "0.6.5"]
                 [org.clojure/clojure-contrib "1.2.0"]
                 [clj-tagsoup "0.3.0" :exclusions [org.clojure/clojure]]
                 [xml-apis/xml-apis "1.4.01"]
                 [clj-webdriver "0.6.0" :exclusions [org.eclipse.jetty/jetty-http org.eclipse.jetty/jetty-io org.eclipse.jetty/jetty-util org.apache.httpcomponents/httpclient org.apache.httpcomponents/httpcore]]
                 [com.novemberain/monger "3.1.0" :exclusions [org.eclipse.jetty/jetty-http org.eclipse.jetty/jetty-io org.eclipse.jetty/jetty-util commons-io org.apache.httpcomponents/httpclient org.apache.httpcomponents/httpcore]]
                 [org.immutant/web "2.1.1" :exclusions [ch.qos.logback/logback-classic]]
                 ;Drools runtime dependencies should bi commented when compiling clojurescript
                 [org.antlr/antlr-runtime "3.5"]
                 [org.drools/drools-core "6.0.0.CR1"]
                 [org.drools/drools-compiler "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.drools/drools-decisiontables "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.drools/droolsjbpm-ide-common "5.5.0.Final" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.drools/drools-jsr94 "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.drools/drools-templates "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.drools/guvnor-api "5.5.0.Final"]
                 [org.jbpm/jbpm-bpmn2 "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.jbpm/jbpm-flow "6.0.0.CR1"]
                 [org.jbpm/jbpm-flow-builder "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [drools/drools-jsr94 "20040726.195413"]
                 [junit/junit "4.11"]
                 [jexcelapi/jxl "2.6"]
                 [org.drools/knowledge-api "6.0.0.CR1" :exclusions [com.thoughtworks.xstream/xstream]]
                 [org.drools/knowledge-internal-api "5.5.0.Final"]
                 [org.mvel/mvel2 "2.1.6.Final"]
                 [org.eclipse.jdt/org.eclipse.jdt.core "3.7.1"]
                 [xmlpull/xmlpull "1.1.3.4d_b4_min"]
                 [xpp3/xpp3_min "1.1.4c"]
                 [xstream/xstream "1.2.2"]
                 [org.jvnet.jaxb2_commons/jaxb-xjc "2.1.10.1"]
                 [org.clojure/tools.reader "0.9.2"]
                 ]

  :min-lein-version "2.0.0"
  :uberjar-name "personal-organiser.jar"
  :jvm-opts ["-Xmx1g" "-server"]

  ;; run main from personal-organiser.core namespace
  :main personal-organiser.repl

  ;; REPL default namespace
  :repl-init personal-organiser.repl

  ;; lein-cljsbuild plugin to build a CLJS project
  :plugins [;;Multi datasource environments
            [lein-environ "1.0.1"]

            ;; cljsbuild plugin
            [lein-cljsbuild "1.1.6" :exclusions [org.clojure/clojure]]

            ;; codox plugin
            [lein-codox "0.10.3" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
  ;; cljsbuild options configuration
  :cljsbuild {:builds
              {:app
               {;; CLJS source code path
                :source-paths ["src/cljs" "src/cljc"]

                ;; Google Closure (CLS) options configuration
                :compiler     {;; CLS generated JS script filename
                               :output-to     "target/cljsbuild/public/js/app.js"

                               :output-dir "target/cljsbuild/public/js/out"

                               :externs ["react/externs/react.js"]

                               ;; generated JS code prettyfication
                               :pretty-print  true}
                }
               }
              }

  :profiles
  {:uberjar {:omit-source true
             :env {:production true}
             :prep-tasks ["compile" ["cljsbuild" "once"]]
             :cljsbuild
                          {:builds
                           {:app
                            {:source-paths ["env/prod/cljs"]
                             :compiler
                                           {:optimizations :advanced
                                            :pretty-print false
                                            :closure-warnings
                                                           {:externs-validation :off :non-standard-jsdoc :off}}}}}

             :aot :all
             :source-paths ["env/prod/clj"]}
   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]
   :project/dev  {:dependencies [[prone "0.8.3"]
                                 [ring/ring-mock "0.3.0"]
                                 [ring/ring-devel "1.4.0" :exclusions [commons-fileupload commons-io]]
                                 [pjstadig/humane-test-output "0.7.1"]
                                 [lein-figwheel "0.5.0-2" :exclusions [org.ow2.asm/asm-all org.clojure/tools.analyzer]]
                                 [com.cemerick/piggieback "0.2.2-SNAPSHOT" :exclusions [com.google.guava/guava]]]
                  :plugins [[lein-figwheel "0.5.0-2" :exclusions [org.clojure/core.memoize org.ow2.asm/asm-all commons-fileupload org.clojure/tools.analyzer org.clojure/tools.analyzer.jvm]]]
                  :cljsbuild
                                {:builds
                                 {:app
                                  {:source-paths ["env/dev/cljs"]
                                   :compiler
                                                 {:main "personal-organiser.app"
                                                  :asset-path "/js/out"
                                                  :optimizations :none
                                                  :source-map true}}}}

                  :figwheel
                                {:http-server-root "public"
                                 :server-port 3449
                                 :nrepl-port 7002
                                 :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
                                 :css-dirs ["resources/public/css"]
                                 :ring-handler personal-organiser.server/handler}

                  :source-paths ["env/dev/clj"]
                  :repl-options {:init-ns personal-organiser.repl}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]
                  ;;when :nrepl-port is set the application starts the nREPL server on load
                  :env {:dev        true
                        :port       5000
                        :nrepl-port 7000}}
   :project/test {:env {:test       true
                        :port       3001
                        :nrepl-port 7001}}
   :profiles/dev {}
   :profiles/test {}}
  )
