// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.suit.eff');
goog.require('cljs.core');
tse.suit.eff.activate = (function tse$suit$eff$activate(p__32664){
var map__32665 = p__32664;
var map__32665__$1 = cljs.core.__destructure_map.call(null,map__32665);
var vec__32666 = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__32666,(0),null);
var db = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"active-suit","active-suit",982277091),id);
});
tse.suit.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("suit","activate","suit/activate",505058577),tse.suit.eff.activate], null);

//# sourceMappingURL=eff.js.map?rel=1710474315442
