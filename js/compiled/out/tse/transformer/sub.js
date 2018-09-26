// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.transformer.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.math');
tse.transformer.sub.get_entity = (function tse$transformer$sub$get_entity(p__52340){
var map__52341 = p__52340;
var map__52341__$1 = ((((!((map__52341 == null)))?(((((map__52341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52341):map__52341);
var sub = cljs.core.get.call(null,map__52341__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__52341__$1,new cljs.core.Keyword(null,"db","db",993250759));
var trans = carbon.rx.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null));
var boxes = carbon.rx.rx_STAR_.call(null,((function (trans,map__52341,map__52341__$1,sub,db){
return (function (){
return cljs.core.map.call(null,tse.math.item_box,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected","item/selected",588561277)], null))));
});})(trans,map__52341,map__52341__$1,sub,db))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (map math/item-box @(sub [:item/selected])))\n"], null));
return carbon.rx.rx_STAR_.call(null,((function (trans,boxes,map__52341,map__52341__$1,sub,db){
return (function (){
var boxes__$1 = cljs.core.deref.call(null,boxes);
var vec__52343 = cljs.core.reduce.call(null,tse.math.merge_boxes,boxes__$1);
var left = cljs.core.nth.call(null,vec__52343,(0),null);
var top = cljs.core.nth.call(null,vec__52343,(1),null);
var right = cljs.core.nth.call(null,vec__52343,(2),null);
var bottom = cljs.core.nth.call(null,vec__52343,(3),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(right - left),(bottom - top)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null),cljs.core.deref.call(null,trans));
});})(trans,boxes,map__52341,map__52341__$1,sub,db))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [boxes\n   @boxes\n   [left top right bottom]\n   (reduce math/merge-boxes boxes)]\n  (merge\n   {:origin [left top],\n    :dimensions [(- right left) (- bottom top)],\n    :angle 0}\n   @trans)))\n"], null));
});
tse.transformer.sub.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565),tse.transformer.sub.get_entity], null);

//# sourceMappingURL=sub.js.map?rel=1537946277268
