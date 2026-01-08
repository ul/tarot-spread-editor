// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.transformer.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.math');
tse.transformer.sub.get_entity = (function tse$transformer$sub$get_entity(p__99613){
var map__99614 = p__99613;
var map__99614__$1 = cljs.core.__destructure_map.call(null,map__99614);
var sub = cljs.core.get.call(null,map__99614__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__99614__$1,new cljs.core.Keyword(null,"db","db",993250759));
var trans = carbon.rx.cursor.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null));
var boxes = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map.call(null,tse.math.item_box,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected","item/selected",588561277)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (map math/item-box @(sub [:item/selected])))\n"], null));
return carbon.rx.rx_STAR_.call(null,(function (){
var boxes__$1 = cljs.core.deref.call(null,boxes);
var vec__99615 = cljs.core.reduce.call(null,tse.math.merge_boxes,boxes__$1);
var left = cljs.core.nth.call(null,vec__99615,(0),null);
var top = cljs.core.nth.call(null,vec__99615,(1),null);
var right = cljs.core.nth.call(null,vec__99615,(2),null);
var bottom = cljs.core.nth.call(null,vec__99615,(3),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(right - left),(bottom - top)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null),cljs.core.deref.call(null,trans));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [boxes\n   @boxes\n   [left top right bottom]\n   (reduce math/merge-boxes boxes)]\n  (merge\n   {:origin [left top],\n    :dimensions [(- right left) (- bottom top)],\n    :angle 0}\n   @trans)))\n"], null));
});
tse.transformer.sub.shift_mode_QMARK_ = (function tse$transformer$sub$shift_mode_QMARK_(p__99618){
var map__99619 = p__99618;
var map__99619__$1 = cljs.core.__destructure_map.call(null,map__99619);
var db = cljs.core.get.call(null,map__99619__$1,new cljs.core.Keyword(null,"db","db",993250759));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"shift-mode?","shift-mode?",2090849162)], null));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get-in @db [:transformer :shift-mode?]))\n"], null));
});
tse.transformer.sub.dragging_QMARK_ = (function tse$transformer$sub$dragging_QMARK_(p__99620){
var map__99621 = p__99620;
var map__99621__$1 = cljs.core.__destructure_map.call(null,map__99621);
var db = cljs.core.get.call(null,map__99621__$1,new cljs.core.Keyword(null,"db","db",993250759));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)], null));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get-in @db [:transformer :dragging?]))\n"], null));
});
tse.transformer.sub.selector_box = (function tse$transformer$sub$selector_box(p__99622){
var map__99623 = p__99622;
var map__99623__$1 = cljs.core.__destructure_map.call(null,map__99623);
var sub = cljs.core.get.call(null,map__99623__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
var map__99624 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__99624__$1 = cljs.core.__destructure_map.call(null,map__99624);
var map__99625 = cljs.core.get.call(null,map__99624__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__99625__$1 = cljs.core.__destructure_map.call(null,map__99625);
var start = cljs.core.get.call(null,map__99625__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__99625__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var offset = cljs.core.get.call(null,map__99625__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
if(cljs.core.truth_(end)){
var end__$1 = tse.math.v_PLUS_.call(null,end,offset);
var vec__99626 = tse.math.selector_box.call(null,scale,start,end__$1);
var x1 = cljs.core.nth.call(null,vec__99626,(0),null);
var y1 = cljs.core.nth.call(null,vec__99626,(1),null);
var x2 = cljs.core.nth.call(null,vec__99626,(2),null);
var y2 = cljs.core.nth.call(null,vec__99626,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x1,new cljs.core.Keyword(null,"y","y",-1757859776),y1,new cljs.core.Keyword(null,"w","w",354169001),(x2 - x1),new cljs.core.Keyword(null,"h","h",1109658740),(y2 - y1)], null);
} else {
return null;
}
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [{{:keys [start end offset]} :selector}\n   @(sub [:transformer/entity])\n   scale\n   @(sub [:canvas/scale])]\n  (when\n   end\n   (let\n    [end\n     (math/v+ end offset)\n     [x1 y1 x2 y2]\n     (math/selector-box scale start end)]\n    {:x x1, :y y1, :w (- x2 x1), :h (- y2 y1)}))))\n"], null));
});
tse.transformer.sub.spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565),tse.transformer.sub.get_entity,new cljs.core.Keyword("transformer","shift-mode?","transformer/shift-mode?",-405403983),tse.transformer.sub.shift_mode_QMARK_,new cljs.core.Keyword("transformer","dragging?","transformer/dragging?",1035760325),tse.transformer.sub.dragging_QMARK_,new cljs.core.Keyword("transformer","selector-box","transformer/selector-box",1480150457),tse.transformer.sub.selector_box], null);

//# sourceMappingURL=sub.js.map?rel=1767875392161
