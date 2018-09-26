(ns tse.background-dialog
  (:require tse.dialog
            [goog.object :as obj])
  (:import goog.ui.TabBar
           goog.ui.Tab
           goog.ui.Component.EventType))

(defn init-tab-bar [{:keys [emit]} *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (let [bar (goog.ui.TabBar.)]
          (doto bar
            (.decorate node)
            (.listen goog.ui.Component.EventType.SELECT
                     (fn [e]
                       (let [dataset (.. e -target getElement -dataset)]
                         (emit [:background-dialog/select-tab (obj/get dataset "tab")]))))))
        (js/console.log "FIXME Dispose TabBar"))
      (reset! *node node))))

(defn link-widget [{:keys [emit]}]
  [:div.pure-form
   {:style {:padding "1em"
            :width "100%"}}
   [:input
    {:type "url"
     :style {:width "100%"}
     :on-change #(emit [:background-dialog/set-url (.. % -target -value)])}]])

(defn file-widget [{:keys [emit]}]
  [:div.pure-form
   {:style {:padding "1em"
            :width "100%"}}
   [:input
    {:type "file"
     :on-change #(emit [:background-dialog/choose-file (.. % -target -files)])
     :style {:width "100%"}}]])

(defn color-widget [{:keys [sub emit]}]
  [:div.pure-form
   {:style {:padding "1em"
            :width "100%"}}
   [:input
    {:type "color"
     :defaultValue @(sub [:background-dialog/color])
     :on-change #(emit [:background-dialog/set-color (.. % -target -value)])
     :style {:width "100%"}}]])

(defn background-dialog [ctx]
  (let [ref (init-tab-bar ctx (atom nil))]
    (fn [{:keys [sub]}]
      (let [tab @(sub [:background-dialog/tab])]
        [:div
         {:style {:width "30em"}}
         [:div.goog-tab-bar.goog-tab-bar-top
          {:ref ref}
          [:div.goog-tab
           {:data-tab "color"
            :class (when (= "color" tab) "goog-tab-selected")}
           @(sub [:t :background-dialog.tabs/color "Color"])]
          [:div.goog-tab
           {:data-tab "link"
            :class (when (= "link" tab) "goog-tab-selected")}
           @(sub [:t :background-dialog.tabs/link "Link"])]
          [:div.goog-tab
           {:data-tab "file"
            :class (when (= "file" tab) "goog-tab-selected")}
           @(sub [:t :background-dialog.tabs/file "File"])]]
         [:div.goog-tab-bar-clear]
         [:div.goog-tab-content
          (condp = tab
            "link" [link-widget ctx]
            "file" [file-widget ctx]
            "color" [color-widget ctx]
            nil)]]))))

(defn init [{:keys [sub emit] :as ctx} dialog *node]
  (fn [node]
    (when (not= node @*node)
      (if node
        (reset! dialog
                (tse.dialog/make {:visible? (sub [:background-dialog/visible?])
                                  :title (sub [:t :background-dialog/title "Background"])
                                  :view [background-dialog ctx]
                                  :handlers {"ok" #(emit [:background-dialog/save])
                                             "cancel" #(emit [:background-dialog/cancel])}}))
        (do
          (.dispose @dialog)
          (reset! dialog nil)))
      (reset! *node node))))

(defn view [ctx]
  (let [dialog (atom nil)
        node   (atom nil)]
    (fn [ctx]
      [:div
       {:ref (init ctx dialog node)}])))
