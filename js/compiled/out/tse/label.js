// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.label');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.transformer');
goog.require('tse.menu');
goog.require('goog.labs.userAgent.browser');
goog.scope(function(){
tse.label.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
tse.label.view = (function tse$label$view(ctx,id){
var ref = tse.transformer.make_interact.call(null,ctx,cljs.core.atom.call(null,null));
return (function (p__36416,id__$1){
var map__36417 = p__36416;
var map__36417__$1 = cljs.core.__destructure_map.call(null,map__36417);
var ctx__$1 = map__36417__$1;
var sub = cljs.core.get.call(null,map__36417__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36417__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__36418 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","entity","item/entity",-456572817),id__$1], null)));
var map__36418__$1 = cljs.core.__destructure_map.call(null,map__36418);
var vec__36419 = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__36419,(0),null);
var y = cljs.core.nth.call(null,vec__36419,(1),null);
var vec__36422 = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__36422,(0),null);
var h = cljs.core.nth.call(null,vec__36422,(1),null);
var vec__36425 = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"original-dimensions","original-dimensions",1495663054));
var w0 = cljs.core.nth.call(null,vec__36425,(0),null);
var h0 = cljs.core.nth.call(null,vec__36425,(1),null);
var content = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"content","content",15833224));
var angle = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var z_index = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var on_mousedown = (function (e){
e.stopPropagation();

return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","toggle-selected","item/toggle-selected",-877028040),id__$1,e.shiftKey], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ql-editor","div.ql-editor",-1110642765),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),z_index,new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx) rotate(%srad)",x,y,angle),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),on_mousedown], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"scale(%s)",(w / w0)),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"left top",new cljs.core.Keyword(null,"width","width",-384071477),w0,new cljs.core.Keyword(null,"height","height",1025178622),h0], null)], null),content], null)], null);
});
});

//# sourceMappingURL=label.js.map?rel=1710474317771
