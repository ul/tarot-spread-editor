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
    <style>"
       (m/include "resources/public/css/style.css")
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

(defn download [{:keys [db emit] :as ctx}]
  (swap! db assoc :share/in-progress true)
  (emit [:item/unselect-all])
  (eff/schedule
   (fn []
     (vdom/render)
     (let [mime-type "text/html;charset=UTF-8"
           filename (str/format "Spread %s.png" (.. (js/Date.) toISOString))
           content (str/format template (.. js/document (getElementById "canvas") -outerHTML))
           blob (new js/Blob
                     #js [content]
                     #js {:type mime-type})]
       (.. (js/fetch "http://185.26.97.202:43691" #js {
             :method "POST"
             :headers #js {
               "Content-Type" "application/json; charset=utf-8"
             }
             :body (js/JSON.stringify #js {
               :filename filename
               :html content
             })})
           (then #(. % blob))
           (then #(js/saveAs % filename))
           (catch #(.. js/window (alert "Download failed.")))
           (finally #(swap! db assoc :share/in-progress false)))))))

(def spec
  {:share/download download})
