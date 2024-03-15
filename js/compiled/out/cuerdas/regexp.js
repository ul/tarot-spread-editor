// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('cuerdas.regexp');
goog.require('cljs.core');
goog.require('goog.string');
/**
 * Return `true` if `x` is a regexp pattern
 *   instance.
 */
cuerdas.regexp.regexp_QMARK_ = (function cuerdas$regexp$regexp_QMARK_(x){
return cljs.core.regexp_QMARK_.call(null,x);
});
/**
 * Escapes characters in the string that are not safe
 * to use in a RegExp.
 */
cuerdas.regexp.escape = (function cuerdas$regexp$escape(s){
return goog.string.regExpEscape(s);
});

//# sourceMappingURL=regexp.js.map?rel=1710474316932
