(defproject tse "0.1.0-SNAPSHOT"
  :description "Tarot Spread Editor"
  :url "https://tarot-editor.mantike.pro"
  :license {:name "Eclipse Public License",
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :dependencies [[org.clojure/clojure "1.12.4"]
                 [instaparse "1.5.0"]
                 [com.cognitect/transit-clj "1.0.333"]
                 [funcool/cuerdas "2026.415"]
                 [com.taoensso/encore "3.159.0"]]
  :source-paths ["src"])
