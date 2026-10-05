(ns tse.core
  (:require carbon.vdom
            carbon.rx
            tse.app
            tse.share
            tse.sub
            tse.effect
            tse.db
            tse.i18n
            tse.card.sub
            tse.card.eff
            tse.deck.sub
            tse.deck.eff
            tse.suitcase.sub
            tse.suitcase.eff
            tse.suit.sub
            tse.suit.eff
            tse.item.sub
            tse.item.eff
            tse.canvas.sub
            tse.canvas.eff
            tse.config.sub
            tse.config.eff
            tse.transformer.sub
            tse.transformer.eff
            tse.share.eff
            tse.label.eff
            tse.label-editor.sub
            tse.label-editor.eff
            tse.background-dialog.sub
            tse.background-dialog.eff
            tse.background.sub
            tse.background.eff))

(defonce ctx
  (let [s (tse.sub/make tse.db/app-db)
        e (tse.effect/make tse.db/app-db (get s :sub))]
    (merge s e)))

(defn register-subscriptions
  [{:keys [register-subscription register-cursor]} & specs]
  (doseq [spec specs
          [key f] spec]
    ((if (vector? f) register-cursor register-subscription) key f)))

(defn register-effects
  [{:keys [register-effect]} & specs]
  (doseq [spec specs [key v] spec] (register-effect key v)))

(register-subscriptions ctx
                        tse.i18n/sub
                        tse.card.sub/spec
                        tse.deck.sub/spec
                        tse.suitcase.sub/spec
                        tse.suit.sub/spec
                        tse.item.sub/spec
                        tse.canvas.sub/spec
                        tse.config.sub/spec
                        tse.transformer.sub/spec
                        tse.label-editor.sub/spec
                        tse.background-dialog.sub/spec
                        tse.background.sub/spec)

(register-effects ctx
                  tse.i18n/eff
                  tse.card.eff/spec
                  tse.deck.eff/spec
                  tse.suitcase.eff/spec
                  tse.suit.eff/spec
                  tse.item.eff/spec
                  tse.canvas.eff/spec
                  tse.config.eff/spec
                  tse.transformer.eff/spec
                  tse.share.eff/spec
                  tse.label.eff/spec
                  tse.label-editor.eff/spec
                  tse.background-dialog.eff/spec
                  tse.background.eff/spec)

((get ctx :emit) [:deck/load])
((get ctx :emit) [:suitcase/load])
((get ctx :emit) [:share/load-from-fragment])

(js/window.addEventListener "popstate"
                            (fn [_]
                              ((get ctx :emit) [:share/load-from-fragment])))

(defn- sync-viewport-width!
  []
  ((get ctx :emit)
    [:viewport/set-width (.. js/document -documentElement -clientWidth)]))

(sync-viewport-width!)
(js/window.addEventListener "resize" sync-viewport-width!)

(tse.share/start-sync! tse.db/app-db)

(carbon.vdom/mount [tse.app/view ctx] (js/document.getElementById "app"))
