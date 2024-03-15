// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.transformer.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.math');
tse.transformer.sub.get_entity = (function tse$transformer$sub$get_entity(p__33262){
var map__33263 = p__33262;
var map__33263__$1 = cljs.core.__destructure_map.call(null,map__33263);
var sub = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"db","db",993250759));
var trans = carbon.rx.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null));
var boxes = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map.call(null,tse.math.item_box,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected","item/selected",588561277)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (map math/item-box @(sub [:item/selected])))\n"], null));
return carbon.rx.rx_STAR_.call(null,(function (){
var boxes__$1 = cljs.core.deref.call(null,boxes);
var vec__33264 = cljs.core.reduce.call(null,tse.math.merge_boxes,boxes__$1);
var left = cljs.core.nth.call(null,vec__33264,(0),null);
var top = cljs.core.nth.call(null,vec__33264,(1),null);
var right = cljs.core.nth.call(null,vec__33264,(2),null);
var bottom = cljs.core.nth.call(null,vec__33264,(3),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(right - left),(bottom - top)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null),cljs.core.deref.call(null,trans));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [boxes\n   @boxes\n   [left top right bottom]\n   (reduce math/merge-boxes boxes)]\n  (merge\n   {:origin [left top],\n    :dimensions [(- right left) (- bottom top)],\n    :angle 0}\n   @trans)))\n"], null));
});
tse.transformer.sub.shift_mode_QMARK_ = (function tse$transformer$sub$shift_mode_QMARK_(p__33267){
var map__33268 = p__33267;
var map__33268__$1 = cljs.core.__destructure_map.call(null,map__33268);
var sub = cljs.core.get.call(null,map__33268__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__33268__$1,new cljs.core.Keyword(null,"db","db",993250759));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null))),new cljs.core.Keyword(null,"shift-mode?","shift-mode?",2090849162));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @(sub [:transformer/entity]) :shift-mode?))\n"], null));
});
tse.transformer.sub.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565),tse.transformer.sub.get_entity,new cljs.core.Keyword("transformer","shift-mode?","transformer/shift-mode?",-405403983),tse.transformer.sub.shift_mode_QMARK_], null);

//# sourceMappingURL=sub.js.map?rel=1710474315913
