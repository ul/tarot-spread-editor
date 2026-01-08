// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.suit.eff');
goog.require('cljs.core');
tse.suit.eff.activate = (function tse$suit$eff$activate(p__98996){
var map__98997 = p__98996;
var map__98997__$1 = cljs.core.__destructure_map.call(null,map__98997);
var vec__98998 = cljs.core.get.call(null,map__98997__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__98998,(0),null);
var db = cljs.core.get.call(null,map__98997__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"active-suit","active-suit",982277091),id);
});
tse.suit.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("suit","activate","suit/activate",505058577),tse.suit.eff.activate], null);

//# sourceMappingURL=eff.js.map?rel=1767875391698
