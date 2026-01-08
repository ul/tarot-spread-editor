// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.deck.eff');
goog.require('cljs.core');
goog.require('cognitect.transit');
tse.deck.eff.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.deck.eff.set_active = (function tse$deck$eff$set_active(p__102996){
var map__102997 = p__102996;
var map__102997__$1 = cljs.core.__destructure_map.call(null,map__102997);
var vec__102998 = cljs.core.get.call(null,map__102997__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__102998,(0),null);
var db = cljs.core.get.call(null,map__102997__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"active-deck","active-deck",-1571493503),id);
});
tse.deck.eff.load_decks = (function tse$deck$eff$load_decks(p__103003){
var map__103004 = p__103003;
var map__103004__$1 = cljs.core.__destructure_map.call(null,map__103004);
var db = cljs.core.get.call(null,map__103004__$1,new cljs.core.Keyword(null,"db","db",993250759));
return fetch("decks.min.json").then((function (p1__103001_SHARP_){
return p1__103001_SHARP_.text();
})).then((function (p1__103002_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"decks","decks",-1740305496),cognitect.transit.read.call(null,tse.deck.eff.reader,p1__103002_SHARP_));
}));
});
tse.deck.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("deck","set-active","deck/set-active",256366800),tse.deck.eff.set_active,new cljs.core.Keyword("deck","load","deck/load",-1315559865),tse.deck.eff.load_decks], null);

//# sourceMappingURL=eff.js.map?rel=1767875394243
