PersonalOrganiser
=================

PersonalOrganiser should be application for organising daily activities, from meal planning, preparation and consumation, through trening schedules to their time adaptation with professional development and social interaction.

Guide
=====

* Clone project with command "git clone https://github.com/VladimirMarkovic86/personal-organiser.git" from terminal
* Download Neo4J server from http://www.neo4j.org/
* After deleting directory "data" from Neo4J server_root,
  from project_root/resources extract data.zip file in Neo4J server_root
* Start Neo4J server
  for Unix systems in terminal from "server_root/bin" run ./neo4j start
  for windows systems find in server_root/doc/neo4j.txt
* Environment variable JAVA_CMD have to be set to $JAVA_HOME/bin/java
  JAVA_HOME path should reference JDK
* From project root in terminal run command "lein run"
  or "lein repl" and in repl run command "(dev-server)" to start application

Leiningen
=========

Version - 2.0

Leiningen is the easiest way to use Clojure. With a focus on project automation and declarative configuration, it gets out of your way and lets you focus on your code.

http://leiningen.org/

Clojure
=======

dependency - [org.clojure/clojure "1.5.1"]

Clojure is a dynamic programming language that targets the Java Virtual Machine (and the CLR, and JavaScript). It is designed to be a general-purpose language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming. Clojure is a compiled language - it compiles directly to JVM bytecode, yet remains completely dynamic. Every feature supported by Clojure is supported at runtime. Clojure provides easy access to the Java frameworks, with optional type hints and type inference, to ensure that calls to Java can avoid reflection.

http://clojure.org/

Ring
====

dependency - [ring/ring-jetty-adapter "1.1.0"] [ring/ring-core "1.2.0"]

plugin - [lein-ring "0.8.5"]

Ring is a Clojure web applications library inspired by Python's WSGI and Ruby's Rack. By abstracting the details of HTTP into a simple, unified API, Ring allows web applications to be constructed of modular components that can be shared among a variety of applications, web servers, and web frameworks.

https://github.com/ring-clojure/ring

Compojure
=========

dependency - [compojure "1.1.5"]

Compojure is a small routing library for Ring that allows web applications to be composed of small, independent parts.

https://github.com/weavejester/compojure

ClojureScript
=========

plugin - [lein-cljsbuild "0.3.2"]

Command to build js files:

generates js development files that connects to brepl (browser repl) ->
lein cljsbuild once dev-grocery dev-meal dev-organism dev-login dev-planishrane

run brepl ->
lein trampolina cljsbuild repl-listen

generates js production file ->
lein cljsbuild once prod-grocery prod-meal prod-organism prod-login prod-planishrane

* Attention
When compiling javascript files, drools dependencies in project.clj file should be commented.
Afterwords uncomment drools dependencies and run project.

https://github.com/clojure/clojurescript

Tutorials from this address are followed for developing project.
https://github.com/magomimmo/modern-cljs/blob/master/doc/tutorial-##.md
Except in 'tutorial-##' instead of '##' type numbers from 01 to 16. Sixteen tutorials cover ClojureScript and other tehnology. In future there may be more.

Valip
=====

dependency - [com.cemerick/valip "0.3.2"]

Valip is a validation library for Clojure. It is primarily designed to validate keyword-string maps, such as one might get from a HTML form.

https://github.com/cemerick/valip

NEO4J
=====

dependency - [clojurewerkz/neocons "1.1.0"]

NEO4J graph database is implemented with neocons library for Clojure developers.

Neocons => http://clojureneo4j.info
Neocons documentation => http://reference.clojureneo4j.info/
NEO4J server => http://www.neo4j.org/
Cypher => http://docs.neo4j.org/chunked/1.9.1/cypher-query-lang.html

Enlive
======

dependency - [enlive "1.1.1"]

Enlive is a selector-based (à la CSS) templating library for Clojure.

GitHub project => https://github.com/cgrand/enlive
Example => http://youtu.be/VVd4ow-ZcX0
Tutorial => https://github.com/cgrand/enlive/wiki/Table-and-Layout-Tutorial,-Part-1:-The-Goal

API Documentation
=================

plugin - [codox "0.6.4"]

A tool for generating API documentation from Clojure source code.

Plugin => https://github.com/weavejester/codox

From project root in terminal run following command to generate API documentation:
lein doc

Domina
======

dependency - [domina "1.0.2-SNAPSHOT"]

Domina is a jQuery inspired DOM manipulation library for ClojureScript. It provides a functional, idiomatic Clojure interface to the DOM manipulation facilities provided by the Google Closure library.

https://github.com/levand/domina

Drools
======

dependency - can be found in project.cljs good amount of libraries

Drools 5 introduces the Business Logic integration Platform which provides a unified and integrated platform for Rules, Workflow and Event Processing. It's been designed from the ground up so that each aspect is a first class citizen, with no compromises.

Official site - http://www.jboss.org/drools/

Sandbar
=======

dependency - [sandbar "0.4.0-SNAPSHOT"]

Sandbar is a web application library which is designed to be used with <a href="http://github.com/weavejester/compojure">Compojure</a> and/or <a href="http://github.com/mmcgrana/ring">Ring</a>. It builds on these projects providing the following additional features:

    Session and flash as a global map
    Authorization and authentication, including built-in support for form-based authentication
    Forms and form validation

More documentation is located in the <a href="http://github.com/brentonashworth/sandbar/wiki">Sandbar Wiki</a>.

You may also be interested in joining the <a href="http://groups.google.com/group/sandbar-library">Sandbar Google Group</a>.

data.json
=========

dependency - [org.clojure/data.json "0.2.2"]

JSON parser/generator to/from Clojure data structures.

Follows the specification on http://json.org/

Design solutions
================

Input radio - http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons/
Element select - http://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript
Vertically and horizontally centering - http://tutorialzine.com/2010/03/centering-div-vertically-and-horizontally/
Also W3Schools- http://www.w3schools.com/

AJAX solution
=============

https://github.com/lorinpa/book-site-clojurescript/blob/dev-1.0/src/cljs/book_review/books.cljs

File upload
===========

[org.clojure/clojure-contrib "1.2.0"]
http://richhickey.github.io/clojure-contrib/

http://milinda.pathirage.org/2012/08/27/Handling-File-Uploads-In-Clojure-Web-Apps/
