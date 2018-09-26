// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.transformer');
goog.require('cljs.core');
goog.require('cljsjs.interact');
goog.require('carbon.rx');
goog.require('cuerdas.core');
goog.require('tse.math');
goog.require('taoensso.encore');
tse.transformer.make_interact = (function tse$transformer$make_interact(p__53555,_STAR_node){
var map__53556 = p__53555;
var map__53556__$1 = ((((!((map__53556 == null)))?(((((map__53556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53556):map__53556);
var emit = cljs.core.get.call(null,map__53556__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var sub = cljs.core.get.call(null,map__53556__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return ((function (map__53556,map__53556__$1,emit,sub){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
var interact_53562 = window.interact(node);
var G__53558_53563 = interact_53562;
G__53558_53563.draggable(({"inertia": false, "autoScroll": true, "onmove": ((function (G__53558_53563,interact_53562,map__53556,map__53556__$1,emit,sub){
return (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","move","transformer/move",150907650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.dx,e.dy], null)], null));
});})(G__53558_53563,interact_53562,map__53556,map__53556__$1,emit,sub))
}));

G__53558_53563.resizable(({"preserveAspectRatio": true, "edges": ({"left": true, "top": true, "right": true, "bottom": true}), "onmove": ((function (G__53558_53563,interact_53562,map__53556,map__53556__$1,emit,sub){
return (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","resize","transformer/resize",-1725586155),e.rect,e.deltaRect], null));
});})(G__53558_53563,interact_53562,map__53556,map__53556__$1,emit,sub))
}));


var grid_53564 = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","grid","config/grid",650271202)], null));
cljs.core.add_watch.call(null,grid_53564,interact_53562,((function (grid_53564,interact_53562,map__53556,map__53556__$1,emit,sub){
return (function (_,___$1,___$2,p__53559){
var map__53560 = p__53559;
var map__53560__$1 = ((((!((map__53560 == null)))?(((((map__53560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53560):map__53560);
var snap_QMARK_ = cljs.core.get.call(null,map__53560__$1,new cljs.core.Keyword(null,"snap?","snap?",1489197534));
var step = cljs.core.get.call(null,map__53560__$1,new cljs.core.Keyword(null,"step","step",1288888124));
if(cljs.core.truth_(interact_53562._element.parentNode)){
return interact_53562.draggable(({"snap": (cljs.core.truth_(snap_QMARK_)?({"targets": [window.interact.createSnapGrid(({"x": step, "y": step}))], "range": Infinity, "relativePoints": [({"x": (0), "y": (0)})]}):null)}));
} else {
return cljs.core.remove_watch.call(null,grid_53564,interact_53562);
}
});})(grid_53564,interact_53562,map__53556,map__53556__$1,emit,sub))
);
} else {
console.log("FIXME: Dispose Interactable");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__53556,map__53556__$1,emit,sub))
});
tse.transformer.make_rotator = (function tse$transformer$make_rotator(p__53565,_STAR_node){
var map__53566 = p__53565;
var map__53566__$1 = ((((!((map__53566 == null)))?(((((map__53566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53566):map__53566);
var emit = cljs.core.get.call(null,map__53566__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__53566,map__53566__$1,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
var interact_53568 = window.interact(node);
interact_53568.draggable(({"inertia": false, "onmove": ((function (interact_53568,map__53566,map__53566__$1,emit){
return (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","rotate","transformer/rotate",2081113824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.dx,e.dy], null)], null));
});})(interact_53568,map__53566,map__53566__$1,emit))
, "onend": ((function (interact_53568,map__53566,map__53566__$1,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","end-rotation","transformer/end-rotation",1778651104)], null));
});})(interact_53568,map__53566,map__53566__$1,emit))
}));
} else {
console.log("FIXME: Dispose Interactable");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__53566,map__53566__$1,emit))
});
tse.transformer.view = (function tse$transformer$view(ctx){
var rotator_ref = tse.transformer.make_rotator.call(null,ctx,cljs.core.atom.call(null,null));
var interact_ref = tse.transformer.make_interact.call(null,ctx,cljs.core.atom.call(null,null));
return ((function (rotator_ref,interact_ref){
return (function (p__53569){
var map__53570 = p__53569;
var map__53570__$1 = ((((!((map__53570 == null)))?(((((map__53570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53570):map__53570);
var ctx__$1 = map__53570__$1;
var sub = cljs.core.get.call(null,map__53570__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53570__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected","item/selected",588561277)], null)))))?null:(function (){var map__53572 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__53572__$1 = ((((!((map__53572 == null)))?(((((map__53572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53572):map__53572);
var vec__53573 = cljs.core.get.call(null,map__53572__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__53573,(0),null);
var y = cljs.core.nth.call(null,vec__53573,(1),null);
var vec__53576 = cljs.core.get.call(null,map__53572__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__53576,(0),null);
var h = cljs.core.nth.call(null,vec__53576,(1),null);
var map__53579 = cljs.core.get.call(null,map__53572__$1,new cljs.core.Keyword(null,"rotator","rotator",-1127412981));
var map__53579__$1 = ((((!((map__53579 == null)))?(((((map__53579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53579):map__53579);
var rot = cljs.core.get.call(null,map__53579__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__53580 = cljs.core.get.call(null,map__53572__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__53580__$1 = ((((!((map__53580 == null)))?(((((map__53580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53580):map__53580);
var start = cljs.core.get.call(null,map__53580__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__53580__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var angle = cljs.core.get.call(null,map__53572__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var vec__53581 = (function (){var or__3949__auto__ = rot;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return tse.math.get_rotator_origin.call(null,x,y,w,h);
}
})();
var rx = cljs.core.nth.call(null,vec__53581,(0),null);
var ry = cljs.core.nth.call(null,vec__53581,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),rotator_ref,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"will-change","will-change",-152752061),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["transform",cuerdas.core.format.call(null,"translate(%spx, %spx)",rx,ry),"rgba(128,128,128,0.5)",(24),(100000),"absolute","2px solid rgba(128,128,128,0.5)",(24),(24)])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),interact_ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx) rotate(%srad)",x,y,angle),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(100000),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128,128,128,0.1)",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid rgba(128,128,128,0.5)"], null),new cljs.core.Keyword(null,"on-dblclick","on-dblclick",-1420247173),((function (map__53572,map__53572__$1,vec__53573,x,y,vec__53576,w,h,map__53579,map__53579__$1,rot,map__53580,map__53580__$1,start,end,angle,vec__53581,rx,ry,map__53570,map__53570__$1,ctx__$1,sub,emit,rotator_ref,interact_ref){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","edit","item/edit",-1638790073)], null));
});})(map__53572,map__53572__$1,vec__53573,x,y,vec__53576,w,h,map__53579,map__53579__$1,rot,map__53580,map__53580__$1,start,end,angle,vec__53581,rx,ry,map__53570,map__53570__$1,ctx__$1,sub,emit,rotator_ref,interact_ref))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128,128,128,0.8)",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),(w - (28))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53572,map__53572__$1,vec__53573,x,y,vec__53576,w,h,map__53579,map__53579__$1,rot,map__53580,map__53580__$1,start,end,angle,vec__53581,rx,ry,map__53570,map__53570__$1,ctx__$1,sub,emit,rotator_ref,interact_ref){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","remove-selected","item/remove-selected",1396374728)], null));
});})(map__53572,map__53572__$1,vec__53573,x,y,vec__53576,w,h,map__53579,map__53579__$1,rot,map__53580,map__53580__$1,start,end,angle,vec__53581,rx,ry,map__53570,map__53570__$1,ctx__$1,sub,emit,rotator_ref,interact_ref))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-times","i.fa.fa-times",923360983)], null)], null)], null)], null);
})()),(function (){var map__53587 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__53587__$1 = ((((!((map__53587 == null)))?(((((map__53587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53587):map__53587);
var map__53588 = cljs.core.get.call(null,map__53587__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__53588__$1 = ((((!((map__53588 == null)))?(((((map__53588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53588):map__53588);
var start = cljs.core.get.call(null,map__53588__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__53588__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var offset = cljs.core.get.call(null,map__53588__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
if(cljs.core.truth_(end)){
var end__$1 = tse.math.v_PLUS_.call(null,end,offset);
var vec__53591 = tse.math.selector_box.call(null,scale,start,end__$1);
var x1 = cljs.core.nth.call(null,vec__53591,(0),null);
var y1 = cljs.core.nth.call(null,vec__53591,(1),null);
var x2 = cljs.core.nth.call(null,vec__53591,(2),null);
var y2 = cljs.core.nth.call(null,vec__53591,(3),null);
var w = (x2 - x1);
var h = (y2 - y1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(100000),new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx)",x1,y1),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128,128,128,0.1)",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid rgba(128,128,128,0.5)",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null)], null);
} else {
return null;
}
})()], null);
});
;})(rotator_ref,interact_ref))
});

//# sourceMappingURL=transformer.js.map?rel=1537946281977
