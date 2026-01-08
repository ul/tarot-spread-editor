(ns tse.autocomplete
  (:require [clojure.string :as str]
            [carbon.rx :as rx :refer [$] :refer-macros [$$] :include-macros true]
            [carbon.fsm :as fsm :refer [on]]))

;; pure

(def UP 38)
(def DOWN 40)
(def RETURN 13)

(def menu-keys #{UP DOWN RETURN})

(defn match [query item]
  (-> item :label (str/lower-case) (str/includes? query)))

(defn good-query [query]
  (>= (count query) 3))

(defn menu-control? [{:keys [good-query?]} [event]]
  (and (= event :keydown) @good-query?))

(defn return? [_ [_ code]] (= RETURN code))

;; actions

(defn close [{:keys [query position]} _]
  (reset! position 0)
  (reset! query ""))

(defn search [{:keys [query position]} [_ input]]
  (reset! position 0)
  (reset! query (str/lower-case input)))

(defn clamp [x op count]
  (if (pos? count)
    (mod (op x) count)
    0))

(defn keydown [{:keys [position items items-count active]} [_ code]]
  (condp = code
    UP (swap! position clamp dec @items-count)
    DOWN (swap! position clamp inc @items-count)
    RETURN (reset! active (when (pos? @items-count) (nth @items @position)))))

;; spec & ctx

(defn make-fsm [active items]
  (let [query       ($ "")
        position    ($ 0)
        matcher     ($$ (partial match @query))
        good-query? ($$ (good-query @query))
        items       ($$ (when @good-query? (filterv @matcher @items)))
        items-count ($$ (count @items))
        enum-items  ($$ (mapv vector (range) @items))]
    [{:query       query
      :good-query? good-query?
      :position    position
      :items       items
      :enum-items  enum-items
      :items-count items-count
      :active      active}

     {:idle {:enter       [close]
             :transitions [[(on :input :focus) :open]]}

      :open {:input       [[menu-control? keydown]
                           [(on :input) search]
                           [(on :select) #(reset! (:active %1) (second %2))]]
             :transitions [[(on :blur :select) :idle]
                           [(fsm/and-fn menu-control? return?) :idle]]}}]))

;; view

(defn menu [dispatch state enum-items position good-query? hint]
  (let [position @position]
    [:.menu-wrapper
     {:class (when (= :open @state) "open")}
     [:.pure-menu
      [:ul.pure-menu-list
       (if @good-query?
         (for [[i {:keys [label] :as item}] @enum-items]
           ^{:key label}
           [:li.pure-menu-item
            {:class (when (= position i) "pure-menu-active")}
            [:a.pure-menu-link
             {:href         "#"
              :on-mousedown #(dispatch [:select item])}
             label]])
         [:li.pure-menu-item
          [:a.pure-menu-link
           {:href ""}
           @hint]])]]]))

(defn on-keydown [dispatch e]
  (let [code (.-keyCode e)]
    (when (contains? menu-keys code)
      (dispatch [:keydown code]))))

(defn input [dispatch state active query placeholder]
  [:input.pure-input-rounded
   {:type        "text"
    :placeholder @placeholder
    :value       (if (= :open @state) @query (get @active :label))
    :on-keydown  (partial on-keydown dispatch)
    :on-input    #(dispatch [:input (.. % -target -value)])
    :on-focus    #(dispatch [:focus])
    :on-blur     #(dispatch [:blur])}])

(defn view [{:keys [active items state placeholder hint]
             :or   {state ($ :idle)}}]
  (let [[{:keys [query position enum-items good-query?] :as ctx} spec] (make-fsm active items)
        dispatch (partial fsm/execute! state spec ctx)]
    (fn []
      [:form.pure-form
       {:class "autocomplete"
        :on-submit #(.preventDefault %)}
       [input dispatch state active query placeholder]
       [menu dispatch state enum-items position good-query? hint]])))
