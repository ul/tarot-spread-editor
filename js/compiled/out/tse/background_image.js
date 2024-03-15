// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.background_image');
goog.require('cljs.core');
goog.require('cljsjs.interact');
goog.require('cuerdas.core');
tse.background_image.init = (function tse$background_image$init(p__36430,_STAR_node){
var map__36431 = p__36430;
var map__36431__$1 = cljs.core.__destructure_map.call(null,map__36431);
var emit = cljs.core.get.call(null,map__36431__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
var interact_36433 = window.interact(node);
var G__36432_36434 = interact_36433;
G__36432_36434.draggable(({"inertia": false, "autoScroll": true, "onmove": (function (e){
if(cljs.core.truth_(e.shiftKey)){
return null;
} else {
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","move","background/move",1347789589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.dx,e.dy], null)], null));
}
})}));

G__36432_36434.resizable(({"preserveAspectRatio": false, "edges": ({"left": true, "top": true, "right": true, "bottom": true}), "onmove": (function (e){
if(cljs.core.truth_(e.shiftKey)){
return null;
} else {
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","resize","background/resize",-1050620668),e.rect,e.deltaRect], null));
}
})}));

} else {
console.log("FIXME Dispose Interactable");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
});
tse.background_image.view = (function tse$background_image$view(ctx){
var ref = tse.background_image.init.call(null,ctx,cljs.core.atom.call(null,null));
return (function (p__36436){
var map__36437 = p__36436;
var map__36437__$1 = cljs.core.__destructure_map.call(null,map__36437);
var sub = cljs.core.get.call(null,map__36437__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36437__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__36438 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","item","background/item",-1635657824)], null)));
var map__36438__$1 = cljs.core.__destructure_map.call(null,map__36438);
var vec__36439 = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__36439,(0),null);
var y = cljs.core.nth.call(null,vec__36439,(1),null);
var vec__36442 = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__36442,(0),null);
var h = cljs.core.nth.call(null,vec__36442,(1),null);
var src = cljs.core.get.call(null,map__36438__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"on-load","on-load",1415151594),(function (p1__36435_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","set-dimensions","background/set-dimensions",800356230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36435_SHARP_.target.clientWidth,p1__36435_SHARP_.target.clientHeight], null)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx)",x,y),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null);
});
});

//# sourceMappingURL=background_image.js.map?rel=1710474317779
