(ns tse.i18n
  (:require [taoensso.tempura :as tempura :refer [tr]]
            [carbon.rx :as rx :include-macros true]))

(def dictionary
  {:en {:app {:title "Tarot Spread Editor"
              :contact "Contact us"}
        :lang {:switch "Switch language"}
        :menu {:show-grid? "Show grid?"
               :snap-grid? "Snap to grid?"
               :download "Download"
               :add-label "Add label"
               :set-background "Set background"}
        :background-dialog {:tabs {:color "Color"
                                   :link "Link"
                                   :file "File"}
                            :title "Background"}
        :board {:random "random"
                :random-hint "Draw random card"
                :reversible? "reversible?"
                :reversible?-hint "Allow random card to be upside down"}
        :toolbar {:remove-selected "Remove selected"
                  :remove-all "Remove all"}
        :canvas {:scale "Scale"}
        :deck-search {:placeholder "Select a deck..."
                      :hint "Start typing deck name (at least 3 letters)"}
        :label-editor {:title "Label"}}
   :ru {:app {:title "Редактор Раскладов"
              :contact "Связаться с нами"}
        :lang {:switch "Переключить язык"}
        :menu {:show-grid? "Показать сетку?"
               :snap-grid? "Прилипать к сетке?"
               :download "Скачать"
               :add-label "Добавить ярлык"
               :set-background "Выбрать фон"}
        :background-dialog {:tabs {:color "Заливка"
                                   :link "Указать ссылку"
                                   :file "Загрузить файл"}
                            :title "Фон"}
        :board {:random "случайная"
                :random-hint "Вытащить случайную карту"
                :reversible? "с перевёрнутыми?"
                :reversible?-hint "Иногда переворачивать случайную карту"}
        :toolbar {:remove-selected "Удалить выбранные"
                  :remove-all "Удалить всё"}
        :canvas {:scale "Масштаб"}
        :deck-search {:placeholder "Выберите колоду..."
                      :hint "Начните набирать название колоды (минимум 3 буквы)"}
        :label-editor {:title "Ярлык"}}})

(def opts {:dict dictionary})

(defn t [{:keys [sub args] :as x}]
  (rx/rx (tr opts [@(sub [:lang/code]) :en] (vec args))))

(defn switch [{:keys [db]}]
  (swap! db update :lang #(if (= % :en) :ru :en)))

(def sub
  {:lang/code [:lang]
   :t t})

(def eff
  {:lang/switch switch})
