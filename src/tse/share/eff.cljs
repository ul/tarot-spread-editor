(ns tse.share.eff
  (:require-macros [tse.macros :as m])
  (:require cljsjs.filesaverjs
            [carbon.vdom :as vdom]
            [tse.effect :as eff]
            [cuerdas.core :as str]))

(def template
  (str "
<!DOCTYPE html>
<html>

<head>
    <meta charset=\"UTF-8\">
    <title>Tarot Spread Editor</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <link rel=\"stylesheet\" href=\"https://unpkg.com/purecss@0.6.2/build/pure-min.css\" integrity=\"sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD\" crossorigin=\"anonymous\">
    <style>
      * {
        box-sizing: border-box;
      }

      body {
          display: flex;
          font-family: 'PT Sans', sans-serif;
      }

      #app {
          display: flex;
          flex-direction: column;
          flex: 1;
      }
    </style>
    <style>"
       (m/include "resources/public/css/quill.snow.css")
       "</style>
</head>

<body>
  <div id=\"app\">
    %s
  </div>
</body>

</html>
  "))

(defn download [{:keys [emit] :as ctx}]
  (emit [:item/unselect-all])
  (eff/schedule
   (fn []
     (vdom/render)
     (let [mime-type "text/html;charset=UTF-8"
           filename (str/format "Spread %s.html" (.. (js/Date.) toISOString))
           content (str/format template (.. js/document (getElementById "canvas") -outerHTML))
           blob (new js/Blob
                     #js [content]
                     #js {:type mime-type})]
       (js/saveAs blob filename)))))

(def spec
  {:share/download download})
