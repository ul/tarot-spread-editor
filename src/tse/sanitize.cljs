(ns tse.sanitize
  "Allowlist filter for label markup. Labels are stored as hiccup produced
  from Quill's HTML, and they travel in shared links, so anything coming from
  a link must be reduced to the formatting Quill itself can produce."
  (:require [clojure.string :as str]))

(def allowed-tags #{:p :span :strong :em :u :s :br})

(def allowed-style-props #{"color" "background-color" "font-size"})

(def style-value-re
  #"^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\)|[a-z]+|\d+(\.\d+)?(px|em|rem|%))$")

(def class-re #"^ql-[a-z0-9-]+$")

(defn sanitize-style
  [style]
  (when (string? style)
    (let [decls (for [decl (str/split style #";")
                      :let [[prop value] (map str/trim (str/split decl #":" 2))
                            prop (some-> prop
                                         str/lower-case)]
                      :when (and (contains? allowed-style-props prop)
                                 (some? value)
                                 (re-find style-value-re value))]
                  (str prop ": " value ";"))]
      (when (seq decls) (str/join " " decls)))))

(defn sanitize-class
  [class]
  (when (string? class)
    (let [classes (filter #(re-find class-re %) (str/split class #"\s+"))]
      (when (seq classes) (str/join " " classes)))))

(defn sanitize-attrs
  [attrs]
  (let [style (sanitize-style (get attrs :style))
        class (sanitize-class (get attrs :class))]
    (cond-> {}
      style (assoc :style style)
      class (assoc :class class))))

(declare sanitize-node)

(defn sanitize-children [children] (doall (keep sanitize-node children)))

(defn sanitize-node
  "Returns a safe version of a hiccup node: a string or a vector with an
  allowed tag, filtered attributes and sanitized children. Anything else is
  dropped (nil)."
  [node]
  (cond (string? node) node
        (number? node) (str node)
        (and (vector? node) (contains? allowed-tags (first node)))
          (let [[tag & more] node
                [attrs children]
                  (if (map? (first more)) [(first more) (rest more)] [{} more])]
            (into [tag (sanitize-attrs attrs)] (sanitize-children children)))
        :else nil))

(defn sanitize-content
  "Label content is a sequence of top-level hiccup nodes. The result is always
  a seq, never a vector, because the renderer would treat a vector of nodes as
  a single element."
  [content]
  (cond (and (vector? content) (keyword? (first content))) (sanitize-children
                                                             [content])
        (sequential? content) (sanitize-children content)
        :else ()))
