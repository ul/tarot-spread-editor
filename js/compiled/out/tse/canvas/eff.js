// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.canvas.eff');
goog.require('cljs.core');
tse.canvas.eff.set_scale = (function tse$canvas$eff$set_scale(p__54050){
var map__54051 = p__54050;
var map__54051__$1 = ((((!((map__54051 == null)))?(((((map__54051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54051):map__54051);
var vec__54052 = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var scale = cljs.core.nth.call(null,vec__54052,(0),null);
var db = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),scale);
});
tse.canvas.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("canvas","set-scale","canvas/set-scale",1824782031),tse.canvas.eff.set_scale], null);

//# sourceMappingURL=eff.js.map?rel=1537946283590
