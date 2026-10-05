(ns tse.sanitize-test
  (:require [cljs.test :refer [deftest is]]
            [tse.sanitize :as s]))

(deftest keeps-quill-formatting
  (is (= [[:p {:class "ql-align-center"}
           [:span {:style "font-size: 40px; color: rgb(230, 0, 0);"}
            [:strong {} "Past"]] [:br {}]]]
         (s/sanitize-content
           [[:p {:class "ql-align-center"}
             [:span {:style "font-size: 40px; color: rgb(230, 0, 0);"}
              [:strong {} "Past"]] [:br {}]]]))))

(deftest drops-dangerous-attributes
  (is (= [[:p {} "x"]]
         (s/sanitize-content [[:p
                               {:dangerouslySetInnerHTML {:__html "<img>"},
                                :onclick "alert(1)",
                                :class "evil ql-",
                                :style "background: url(https://x)"} "x"]]))))

(deftest drops-dangerous-tags
  (is (= [[:p {} "ok"]]
         (s/sanitize-content [[:p {} "ok" [:iframe {:srcdoc "<script>"}]]
                              [:a {:href "javascript:alert(1)"} "click"]
                              [:script {} "alert(1)"]]))))

(deftest filters-style-declarations
  (is (= "color: #fff;"
         (s/sanitize-style "position: fixed; color: #fff; font-size: 1e9")))
  (is (nil? (s/sanitize-style "color: expression(alert(1))"))))

(deftest content-is-always-a-seq
  (is (seq? (s/sanitize-content [[:p {} "a"]])))
  (is (= [[:p {} "a"]] (s/sanitize-content [:p {} "a"])))
  (is (= () (s/sanitize-content "string")))
  (is (= () (s/sanitize-content nil))))

(deftest drops-non-hiccup-children
  (is (= [[:p {} "a" "1"]] (s/sanitize-content [[:p {} "a" 1 {:x 1}]])))
  ;; nested [:p] has no attrs map but is still a valid node
  (is (= [[:p {} [:p {}]]] (s/sanitize-content [[:p [:p]]]))))
