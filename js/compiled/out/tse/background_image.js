// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.background_image');
goog.require('cljs.core');
goog.require('cljsjs.interact');
goog.require('cuerdas.core');
tse.background_image.init = (function tse$background_image$init(p__53864,_STAR_node){
var map__53865 = p__53864;
var map__53865__$1 = ((((!((map__53865 == null)))?(((((map__53865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53865):map__53865);
var emit = cljs.core.get.call(null,map__53865__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__53865,map__53865__$1,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
var interact_53868 = window.interact(node);
var G__53867_53869 = interact_53868;
G__53867_53869.draggable(({"inertia": false, "autoScroll": true, "onmove": ((function (G__53867_53869,interact_53868,map__53865,map__53865__$1,emit){
return (function (e){
if(cljs.core.truth_(e.shiftKey)){
return null;
} else {
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","move","background/move",1347789589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.dx,e.dy], null)], null));
}
});})(G__53867_53869,interact_53868,map__53865,map__53865__$1,emit))
}));

G__53867_53869.resizable(({"preserveAspectRatio": false, "edges": ({"left": true, "top": true, "right": true, "bottom": true}), "onmove": ((function (G__53867_53869,interact_53868,map__53865,map__53865__$1,emit){
return (function (e){
if(cljs.core.truth_(e.shiftKey)){
return null;
} else {
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","resize","background/resize",-1050620668),e.rect,e.deltaRect], null));
}
});})(G__53867_53869,interact_53868,map__53865,map__53865__$1,emit))
}));

} else {
console.log("FIXME Dispose Interactable");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__53865,map__53865__$1,emit))
});
tse.background_image.view = (function tse$background_image$view(ctx){
var ref = tse.background_image.init.call(null,ctx,cljs.core.atom.call(null,null));
return ((function (ref){
return (function (p__53871){
var map__53872 = p__53871;
var map__53872__$1 = ((((!((map__53872 == null)))?(((((map__53872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53872):map__53872);
var sub = cljs.core.get.call(null,map__53872__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53872__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__53874 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","item","background/item",-1635657824)], null)));
var map__53874__$1 = ((((!((map__53874 == null)))?(((((map__53874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53874):map__53874);
var vec__53875 = cljs.core.get.call(null,map__53874__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__53875,(0),null);
var y = cljs.core.nth.call(null,vec__53875,(1),null);
var vec__53878 = cljs.core.get.call(null,map__53874__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__53878,(0),null);
var h = cljs.core.nth.call(null,vec__53878,(1),null);
var src = cljs.core.get.call(null,map__53874__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"on-load","on-load",1415151594),((function (map__53874,map__53874__$1,vec__53875,x,y,vec__53878,w,h,src,map__53872,map__53872__$1,sub,emit,ref){
return (function (p1__53870_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","set-dimensions","background/set-dimensions",800356230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53870_SHARP_.target.clientWidth,p1__53870_SHARP_.target.clientHeight], null)], null));
});})(map__53874,map__53874__$1,vec__53875,x,y,vec__53878,w,h,src,map__53872,map__53872__$1,sub,emit,ref))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx)",x,y),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null);
});
;})(ref))
});

//# sourceMappingURL=background_image.js.map?rel=1537946282962
