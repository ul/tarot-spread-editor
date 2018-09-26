// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.background.eff');
goog.require('cljs.core');
goog.require('tse.math');
tse.background.eff.move = (function tse$background$eff$move(p__53740){
var map__53741 = p__53740;
var map__53741__$1 = ((((!((map__53741 == null)))?(((((map__53741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53741):map__53741);
var vec__53742 = cljs.core.get.call(null,map__53741__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__53742,(0),null);
var db = cljs.core.get.call(null,map__53741__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53741__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"origin","origin",1037372088)], null),((function (map__53741,map__53741__$1,vec__53742,dv,db,sub){
return (function (v){
return tse.math.v0.call(null,tse.math.v_PLUS_.call(null,tse.math.v_PERCENT_.call(null,dv,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),v));
});})(map__53741,map__53741__$1,vec__53742,dv,db,sub))
);
});
tse.background.eff.resize = (function tse$background$eff$resize(p__53746){
var map__53747 = p__53746;
var map__53747__$1 = ((((!((map__53747 == null)))?(((((map__53747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53747):map__53747);
var vec__53748 = cljs.core.get.call(null,map__53747__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var rect = cljs.core.nth.call(null,vec__53748,(0),null);
var deltaRect = cljs.core.nth.call(null,vec__53748,(1),null);
var db = cljs.core.get.call(null,map__53747__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53747__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53747__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var dv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.width,deltaRect.height], null);
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","move","background/move",1347789589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.left,deltaRect.top], null)], null));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null),tse.math.v_PLUS_,tse.math.v_PERCENT_.call(null,dv,scale));
});
tse.background.eff.set_dimensions = (function tse$background$eff$set_dimensions(p__53752){
var map__53753 = p__53752;
var map__53753__$1 = ((((!((map__53753 == null)))?(((((map__53753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53753):map__53753);
var vec__53754 = cljs.core.get.call(null,map__53753__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dimensions = cljs.core.nth.call(null,vec__53754,(0),null);
var db = cljs.core.get.call(null,map__53753__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null),dimensions);
});
tse.background.eff.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("background","move","background/move",1347789589),tse.background.eff.move,new cljs.core.Keyword("background","resize","background/resize",-1050620668),tse.background.eff.resize,new cljs.core.Keyword("background","set-dimensions","background/set-dimensions",800356230),tse.background.eff.set_dimensions], null);

//# sourceMappingURL=eff.js.map?rel=1537946282673
