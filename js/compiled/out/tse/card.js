// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.card');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.transformer');
tse.card.view = (function tse$card$view(ctx,id){
var ref = tse.transformer.make_interact.call(null,ctx,cljs.core.atom.call(null,null));
return ((function (ref){
return (function (p__53596,id__$1){
var map__53597 = p__53596;
var map__53597__$1 = ((((!((map__53597 == null)))?(((((map__53597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53597):map__53597);
var ctx__$1 = map__53597__$1;
var sub = cljs.core.get.call(null,map__53597__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53597__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__53599 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","entity","card/entity",-456376212),id__$1], null)));
var map__53599__$1 = ((((!((map__53599 == null)))?(((((map__53599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53599):map__53599);
var vec__53600 = cljs.core.get.call(null,map__53599__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__53600,(0),null);
var y = cljs.core.nth.call(null,vec__53600,(1),null);
var vec__53603 = cljs.core.get.call(null,map__53599__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__53603,(0),null);
var h = cljs.core.nth.call(null,vec__53603,(1),null);
var src = cljs.core.get.call(null,map__53599__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var angle = cljs.core.get.call(null,map__53599__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var z_index = cljs.core.get.call(null,map__53599__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var on_mousedown = ((function (map__53599,map__53599__$1,vec__53600,x,y,vec__53603,w,h,src,angle,z_index,map__53597,map__53597__$1,ctx__$1,sub,emit,ref){
return (function (e){
e.stopPropagation();

return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","toggle-selected","item/toggle-selected",-877028040),id__$1,e.shiftKey], null));
});})(map__53599,map__53599__$1,vec__53600,x,y,vec__53603,w,h,src,angle,z_index,map__53597,map__53597__$1,ctx__$1,sub,emit,ref))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"translate(%spx, %spx) rotate(%srad)",x,y,angle),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),z_index,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null),new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),on_mousedown,new cljs.core.Keyword(null,"on-pointerdown","on-pointerdown",1351989105),on_mousedown], null)], null);
});
;})(ref))
});

//# sourceMappingURL=card.js.map?rel=1537946282006
