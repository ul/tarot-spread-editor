// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.transformer');
goog.require('cljs.core');
goog.require('cljsjs.interact');
goog.require('carbon.rx');
goog.require('cuerdas.core');
goog.require('tse.math');
goog.require('taoensso.encore');
tse.transformer.make_interact = (function tse$transformer$make_interact(p__34954,_STAR_node){
var map__34955 = p__34954;
var map__34955__$1 = cljs.core.__destructure_map.call(null,map__34955);
var emit = cljs.core.get.call(null,map__34955__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var sub = cljs.core.get.call(null,map__34955__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var grid = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","grid","config/grid",650271202)], null));
var shift_mode_QMARK_ = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","shift-mode?","transformer/shift-mode?",-405403983)], null));
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
window.interact(node).draggable(({"inertia": false, "autoScroll": true, "onmove": (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","move","transformer/move",150907650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.dx,e.dy], null)], null));
})}));

cljs.core.add_watch.call(null,shift_mode_QMARK_,new cljs.core.Keyword(null,"shift-mode?","shift-mode?",2090849162),(function (_,___$1,___$2,shift_mode_QMARK___$1){
return window.interact(node).resizable((cljs.core.truth_(shift_mode_QMARK___$1)?({"preserveAspectRatio": true, "edges": ({"left": true, "top": true, "right": true, "bottom": true}), "onmove": (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","resize","transformer/resize",-1725586155),e.rect,e.deltaRect], null));
})}):false));
}));

cljs.core.add_watch.call(null,grid,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),(function (_,___$1,___$2,p__34956){
var map__34957 = p__34956;
var map__34957__$1 = cljs.core.__destructure_map.call(null,map__34957);
var snap_QMARK_ = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword(null,"snap?","snap?",1489197534));
var step = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword(null,"step","step",1288888124));
if(cljs.core.truth_(window.interact(node)._element.parentNode)){
return window.interact(node).draggable(({"snap": (cljs.core.truth_(snap_QMARK_)?({"targets": [window.interact.createSnapGrid(({"x": step, "y": step}))], "range": Infinity, "relativePoints": [({"x": (0), "y": (0)})]}):null)}));
} else {
return null;
}
}));
} else {
cljs.core.remove_watch.call(null,shift_mode_QMARK_,new cljs.core.Keyword(null,"shift-mode?","shift-mode?",2090849162));

cljs.core.remove_watch.call(null,grid,new cljs.core.Keyword(null,"transformer","transformer",-1493470620));

console.log("FIXME: Dispose Interactable");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
});
tse.transformer.make_rotator = (function tse$transformer$make_rotator(p__34958,_STAR_node){
var map__34959 = p__34958;
var map__34959__$1 = cljs.core.__destructure_map.call(null,map__34959);
var emit = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
var interact_34960 = window.interact(node);
interact_34960.draggable(({"inertia": false, "onmove": (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","rotate","transformer/rotate",2081113824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.dx,e.dy], null)], null));
}), "onend": (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","end-rotation","transformer/end-rotation",1778651104)], null));
})}));
} else {
console.log("FIXME: Dispose Interactable");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
});
tse.transformer.view = (function tse$transformer$view(p__34961){
var map__34962 = p__34961;
var map__34962__$1 = cljs.core.__destructure_map.call(null,map__34962);
var ctx = map__34962__$1;
var sub = cljs.core.get.call(null,map__34962__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__34962__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var rotator_ref = tse.transformer.make_rotator.call(null,ctx,cljs.core.atom.call(null,null));
var interact_ref = tse.transformer.make_interact.call(null,ctx,cljs.core.atom.call(null,null));
window.addEventListener("keydown",(function (e){
if(cljs.core.truth_(e.shiftKey)){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","shift-mode","transformer/shift-mode",-1982407669),true], null));
} else {
return null;
}
}));

window.addEventListener("keyup",(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","shift-mode","transformer/shift-mode",-1982407669),false], null));
}));

return (function (p__34963){
var map__34964 = p__34963;
var map__34964__$1 = cljs.core.__destructure_map.call(null,map__34964);
var ctx__$1 = map__34964__$1;
var sub__$1 = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit__$1 = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected","item/selected",588561277)], null)))))?null:(function (){var map__34965 = cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__34965__$1 = cljs.core.__destructure_map.call(null,map__34965);
var vec__34966 = cljs.core.get.call(null,map__34965__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__34966,(0),null);
var y = cljs.core.nth.call(null,vec__34966,(1),null);
var vec__34969 = cljs.core.get.call(null,map__34965__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__34969,(0),null);
var h = cljs.core.nth.call(null,vec__34969,(1),null);
var map__34972 = cljs.core.get.call(null,map__34965__$1,new cljs.core.Keyword(null,"rotator","rotator",-1127412981));
var map__34972__$1 = cljs.core.__destructure_map.call(null,map__34972);
var rot = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__34973 = cljs.core.get.call(null,map__34965__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__34973__$1 = cljs.core.__destructure_map.call(null,map__34973);
var start = cljs.core.get.call(null,map__34973__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__34973__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var angle = cljs.core.get.call(null,map__34965__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var vec__34974 = (function (){var or__5045__auto__ = rot;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return tse.math.get_rotator_origin.call(null,x,y,w,h);
}
})();
var rx = cljs.core.nth.call(null,vec__34974,(0),null);
var ry = cljs.core.nth.call(null,vec__34974,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),rotator_ref,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"will-change","will-change",-152752061),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["transform",cuerdas.core.format.call(null,"translate(%spx, %spx)",rx,ry),"rgba(128,128,128,0.5)",(24),(100000),"absolute","2px solid rgba(128,128,128,0.5)",(24),(24)])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),interact_ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx) rotate(%srad)",x,y,angle),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(100000),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128,128,128,0.1)",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid rgba(128,128,128,0.5)"], null),new cljs.core.Keyword(null,"on-dblclick","on-dblclick",-1420247173),(function (){
return emit__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","edit","item/edit",-1638790073)], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","shift-mode?","transformer/shift-mode?",-405403983)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128,128,128,0.8)",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),(w - (28))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","remove-selected","item/remove-selected",1396374728)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-times","i.fa.fa-times",923360983)], null)], null):null)], null)], null);
})()),(function (){var map__34977 = cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__34977__$1 = cljs.core.__destructure_map.call(null,map__34977);
var map__34978 = cljs.core.get.call(null,map__34977__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var map__34978__$1 = cljs.core.__destructure_map.call(null,map__34978);
var start = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var offset = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
if(cljs.core.truth_(end)){
var end__$1 = tse.math.v_PLUS_.call(null,end,offset);
var vec__34979 = tse.math.selector_box.call(null,scale,start,end__$1);
var x1 = cljs.core.nth.call(null,vec__34979,(0),null);
var y1 = cljs.core.nth.call(null,vec__34979,(1),null);
var x2 = cljs.core.nth.call(null,vec__34979,(2),null);
var y2 = cljs.core.nth.call(null,vec__34979,(3),null);
var w = (x2 - x1);
var h = (y2 - y1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(100000),new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx)",x1,y1),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128,128,128,0.1)",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid rgba(128,128,128,0.5)",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null)], null);
} else {
return null;
}
})()], null);
});
});

//# sourceMappingURL=transformer.js.map?rel=1710474317038
