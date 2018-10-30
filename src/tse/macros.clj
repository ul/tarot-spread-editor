(ns tse.macros)

(defmacro include [path]
  (slurp path))
