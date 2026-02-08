(ns tse.i18n
  (:require [taoensso.tempura :as tempura :refer [tr]]
            [carbon.rx :as rx :include-macros true]))

(def dictionary
  {:en {:app {:title "Tarot Spread Editor",
              :disclaimer "Disclaimer",
              :contact "Contact us"},
        :lang {:switch "Switch language"},
        :menu {:show-grid? "Show grid?",
               :add-label "Add label",
               :set-background "Set background"},
        :background-dialog {:tabs {:color "Color", :link "Link", :file "File"},
                            :title "Background"},
        :board {:random "random",
                :random-hint "Draw random card",
                :reversible? "reversible?",
                :reversible?-hint "Allow random card to be upside down"},
        :toolbar {:remove-selected "Remove selected",
                  :remove-all "Remove all",
                  :remove-all-confirmation "Are you sure to clean canvas?",
                  :add-label "Add label",
                  :set-background "Background",
                  :toggle-grid "Toggle grid",
                  :toggle-board "Toggle board"},
        :canvas {:scale "Scale"},
        :deck-search {:placeholder "Select a deck...",
                      :hint "Start typing deck's name"},
        :label-editor {:title "Label"}},
   :ru {:app {:title "Редактор Раскладов",
              :disclaimer "Отказ от ответственности",
              :contact "Связаться с нами"},
        :lang {:switch "Переключить язык"},
        :menu {:show-grid? "Показать сетку?",
               :add-label "Добавить ярлык",
               :set-background "Выбрать фон"},
        :background-dialog {:tabs {:color "Заливка",
                                   :link "Указать ссылку",
                                   :file "Загрузить файл"},
                            :title "Фон"},
        :board {:random "случайная",
                :random-hint "Вытащить случайную карту",
                :reversible? "с перевёрнутыми?",
                :reversible?-hint "Иногда переворачивать случайную карту"},
        :toolbar {:remove-selected "Удалить выбранные",
                  :remove-all "Удалить всё",
                  :remove-all-confirmation
                    "Вы действительно хотите очистить холст?",
                  :add-label "Добавить ярлык",
                  :set-background "Фон",
                  :toggle-grid "Сетка",
                  :toggle-board "Панель карт"},
        :canvas {:scale "Масштаб"},
        :deck-search {:placeholder "Выберите колоду...",
                      :hint "Начните набирать название колоды"},
        :label-editor {:title "Ярлык"}}})

(def opts {:dict dictionary})

(defn t
  [{:keys [sub args], :as x}]
  (rx/rx (tr opts [@(sub [:lang/code]) :en] (vec args))))

(defn switch [{:keys [db]}] (swap! db update :lang #(if (= % :en) :ru :en)))

(def sub {:lang/code [:lang], :t t})

(def eff {:lang/switch switch})
