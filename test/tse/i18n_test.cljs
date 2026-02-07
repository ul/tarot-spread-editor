(ns tse.i18n-test
  (:require [cljs.test :refer [deftest testing is]]
            [tse.i18n :as i18n]))

(deftest switch-en-to-ru
  (let [db (atom {:lang :en})]
    (i18n/switch {:db db})
    (is (= :ru (:lang @db)))))

(deftest switch-ru-to-en
  (let [db (atom {:lang :ru})]
    (i18n/switch {:db db})
    (is (= :en (:lang @db)))))
