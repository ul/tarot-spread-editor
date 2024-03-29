(defproject tse "0.1.0-SNAPSHOT"
  :description "Tarot Spread Editor"
  :url "https://tarot-editor.mantike.pro"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.12.0-alpha1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [instaparse "1.4.12"]
                 [com.cognitect/transit-clj "1.0.329"]
                 [com.cognitect/transit-cljs "0.8.280"]
                 [carbon "0.3.0-SNAPSHOT"]
                 [com.taoensso/tempura "1.3.0"]
                 [funcool/cuerdas "2022.06.16-403"]
                 [cljsjs/interact "1.2.8-0"]
                 [hickory "0.7.1"]]

  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljfmt "0.8.2"]
            [lein-cljsbuild "1.1.8" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src" "test"]

                ;; the presence of a :figwheel configuration here
                ;; will cause figwheel to inject the figwheel client
                ;; into your build
                :figwheel {;; :on-jsload "tse.core/on-js-reload"
                           ;; :open-urls will pop open your application
                           ;; in the default browser once Figwheel has
                           ;; started and complied your application.
                           ;; Comment this out once it no longer serves you.
                           ;; :open-urls ["http://localhost:3449/index.html"]
}

                :compiler {:main tse.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/tse.js"
                           :output-dir "resources/public/js/compiled/out"
                           :foreign-libs [{:file "resources/libs/quill/quill.inc.js",
                                           :provides ["cljsjs.quill"]
                                           :file-min "resources/libs/quill/quill.min.inc.js"}]
                           :externs ["resources/libs/quill/common/quill.ext.js"]
                           :infer-externs true
                           :source-map-timestamp true
                           :language-in :ecmascript-next
                           :language-out :ecmascript-next
                           ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                           ;; https://github.com/binaryage/cljs-devtools
                           :preloads [devtools.preload]}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:main tse.core
                           :output-to "resources/public/js/compiled/tse.js"
                           :foreign-libs [{:file "resources/libs/quill/quill.inc.js",
                                           :provides ["cljsjs.quill"]
                                           :file-min "resources/libs/quill/quill.min.inc.js"}]
                           :externs ["resources/libs/quill/common/quill.ext.js"]
                           :optimizations :advanced
                           :infer-externs true
                           :elide-asserts true
                           :pretty-print false
                           :language-in :ecmascript-next
                           :language-out :ecmascript-next
                           ;; :pretty-print true
                           ;; :pseudo-names true
}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this

             ;; doesn't work for you just run your own server :) (see lein-ring)

             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
};; setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl


  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.6"]
                                  [figwheel-sidecar "0.5.20"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.18.0"]]
                   ;; :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   }})
