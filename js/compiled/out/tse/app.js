// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.app');
goog.require('cljs.core');
goog.require('tse.canvas');
goog.require('tse.header');
goog.require('tse.board');
goog.require('tse.toolbar');
goog.require('tse.label_editor');
goog.require('tse.background_dialog');
tse.app.style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
tse.app.view = (function tse$app$view(p__102903){
var map__102904 = p__102903;
var map__102904__$1 = cljs.core.__destructure_map.call(null,map__102904);
var ctx = map__102904__$1;
var sub = cljs.core.get.call(null,map__102904__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("share","update-fragment","share/update-fragment",-2079776156)], null)));

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tse.app.style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.header.view,ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.board.view,ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.toolbar.view,ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label_editor.view,ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_dialog.view,ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.canvas.view,ctx], null)], null);
});

//# sourceMappingURL=app.js.map?rel=1767875394163
