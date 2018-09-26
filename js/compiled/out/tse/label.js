// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.label');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.transformer');
goog.require('tse.menu');
tse.label.view = (function tse$label$view(ctx,id){
var ref = tse.transformer.make_interact.call(null,ctx,cljs.core.atom.call(null,null));
return ((function (ref){
return (function (p__53848,id__$1){
var map__53849 = p__53848;
var map__53849__$1 = ((((!((map__53849 == null)))?(((((map__53849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53849):map__53849);
var ctx__$1 = map__53849__$1;
var sub = cljs.core.get.call(null,map__53849__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53849__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__53851 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","entity","item/entity",-456572817),id__$1], null)));
var map__53851__$1 = ((((!((map__53851 == null)))?(((((map__53851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53851):map__53851);
var vec__53852 = cljs.core.get.call(null,map__53851__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__53852,(0),null);
var y = cljs.core.nth.call(null,vec__53852,(1),null);
var vec__53855 = cljs.core.get.call(null,map__53851__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__53855,(0),null);
var h = cljs.core.nth.call(null,vec__53855,(1),null);
var vec__53858 = cljs.core.get.call(null,map__53851__$1,new cljs.core.Keyword(null,"original-dimensions","original-dimensions",1495663054));
var w0 = cljs.core.nth.call(null,vec__53858,(0),null);
var h0 = cljs.core.nth.call(null,vec__53858,(1),null);
var content = cljs.core.get.call(null,map__53851__$1,new cljs.core.Keyword(null,"content","content",15833224));
var angle = cljs.core.get.call(null,map__53851__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var z_index = cljs.core.get.call(null,map__53851__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var on_mousedown = ((function (map__53851,map__53851__$1,vec__53852,x,y,vec__53855,w,h,vec__53858,w0,h0,content,angle,z_index,map__53849,map__53849__$1,ctx__$1,sub,emit,ref){
return (function (e){
e.stopPropagation();

return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","toggle-selected","item/toggle-selected",-877028040),id__$1,e.shiftKey], null));
});})(map__53851,map__53851__$1,vec__53852,x,y,vec__53855,w,h,vec__53858,w0,h0,content,angle,z_index,map__53849,map__53849__$1,ctx__$1,sub,emit,ref))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ql-editor","div.ql-editor",-1110642765),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),z_index,new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx) rotate(%srad)",x,y,angle),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),on_mousedown,new cljs.core.Keyword(null,"on-pointerdown","on-pointerdown",1351989105),on_mousedown], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"scale(%s)",(w / w0)),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"left top",new cljs.core.Keyword(null,"width","width",-384071477),w0,new cljs.core.Keyword(null,"height","height",1025178622),h0], null)], null),content], null)], null);
});
;})(ref))
});

//# sourceMappingURL=label.js.map?rel=1537946282929
