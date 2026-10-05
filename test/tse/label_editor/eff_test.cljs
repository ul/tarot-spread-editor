(ns tse.label-editor.eff-test
  (:require [cljs.test :refer [deftest is]]
            [tse.helpers :refer [make-ctx]]
            [tse.label-editor.eff :as eff]))

(def label
  {:content ["x"], :quill-content [{"insert" "x\n"}], :dimensions [10 20]})

(deftest new-label-remembers-position
  (let [ctx (make-ctx {:db {:label-editor {:id 3, :delta [{"insert" "old"}]}},
                       :args [[1 2]]})]
    (eff/new-label ctx)
    (is (= {:visible? true, :id nil, :delta nil, :position [1 2]}
           (:label-editor @(:db ctx))))))

(deftest edit-label-loads-delta
  (let [ctx (make-ctx {:subs {[:item/entity 2] {:quill-content [{"insert"
                                                                   "a"}]}},
                       :args [2]})]
    (eff/edit-label ctx)
    (is (= {:visible? true, :id 2, :delta [{"insert" "a"}]}
           (:label-editor @(:db ctx))))))

(deftest save-new-label-adds-at-position
  (let [ctx (make-ctx {:db {:label-editor {:visible? true, :position [5 6]}},
                       :args [label]})]
    (eff/save-label ctx)
    (is (false? (get-in @(:db ctx) [:label-editor :visible?])))
    (is (= [[:label/add
             {:content ["x"],
              :original-dimensions [10 20],
              :quill-content [{"insert" "x\n"}],
              :dimensions [10 20]} [5 6]]]
           @(:*events ctx)))))

(deftest save-existing-label-updates
  (let [ctx (make-ctx {:db {:label-editor {:visible? true, :id 0}},
                       :args [label]})]
    (eff/save-label ctx)
    (is (= [:label/update 0] ((juxt first last) (first @(:*events ctx)))))))
