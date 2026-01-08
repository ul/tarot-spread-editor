// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.card');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.transformer');
goog.require('goog.labs.userAgent.browser');
goog.scope(function(){
tse.card.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
tse.card.view = (function tse$card$view(ctx,id){
var ref = tse.transformer.make_interact.call(null,ctx,cljs.core.atom.call(null,null));
var ratio = carbon.rx.cell_STAR_.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell nil)\n"], null)], null));
return (function (p__101354,id__$1){
var map__101355 = p__101354;
var map__101355__$1 = cljs.core.__destructure_map.call(null,map__101355);
var ctx__$1 = map__101355__$1;
var sub = cljs.core.get.call(null,map__101355__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__101355__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__101356 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","entity","card/entity",-456376212),id__$1], null)));
var map__101356__$1 = cljs.core.__destructure_map.call(null,map__101356);
var vec__101357 = cljs.core.get.call(null,map__101356__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__101357,(0),null);
var y = cljs.core.nth.call(null,vec__101357,(1),null);
var vec__101360 = cljs.core.get.call(null,map__101356__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__101360,(0),null);
var h = cljs.core.nth.call(null,vec__101360,(1),null);
var src = cljs.core.get.call(null,map__101356__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var angle = cljs.core.get.call(null,map__101356__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var z_index = cljs.core.get.call(null,map__101356__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var offset_x = (cljs.core.truth_(cljs.core.deref.call(null,ratio))?(0.5 * (w - (h * cljs.core.deref.call(null,ratio)))):0.0);
var on_load = (function (e){
return cljs.core.reset_BANG_.call(null,ratio,(e.target.width / e.target.height));
});
var on_pointer_down = (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","toggle-selected","item/toggle-selected",-877028040),id__$1,(function (){var or__5045__auto__ = e.shiftKey;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","pointers","item/pointers",563296184)], null))) > (1));
}
})()], null));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx) rotate(%srad)",(x + offset_x),y,angle),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),z_index,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),"none"], null),new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),on_pointer_down], null)], null);
});
});

//# sourceMappingURL=card.js.map?rel=1767875393338
