(ns tse.clj-test-runner
  "Runs the JVM-side tests: npx shadow-cljs clj-run tse.clj-test-runner/main"
  (:require [clojure.test :as t]
            tse.suitcase-test))

(defn main
  [& _]
  (let [{:keys [fail error]} (t/run-tests 'tse.suitcase-test)]
    (when (pos? (+ fail error)) (throw (ex-info "Clojure tests failed" {})))))
