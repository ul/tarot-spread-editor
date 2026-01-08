// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.canvas.eff');
goog.require('cljs.core');
tse.canvas.eff.set_scale = (function tse$canvas$eff$set_scale(p__102973){
var map__102974 = p__102973;
var map__102974__$1 = cljs.core.__destructure_map.call(null,map__102974);
var vec__102975 = cljs.core.get.call(null,map__102974__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var scale = cljs.core.nth.call(null,vec__102975,(0),null);
var db = cljs.core.get.call(null,map__102974__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),scale);
});
tse.canvas.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("canvas","set-scale","canvas/set-scale",1824782031),tse.canvas.eff.set_scale], null);

//# sourceMappingURL=eff.js.map?rel=1767875394224
