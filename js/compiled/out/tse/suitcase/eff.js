// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.suitcase.eff');
goog.require('cljs.core');
goog.require('cognitect.transit');
tse.suitcase.eff.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.suitcase.eff.load_suitcases = (function tse$suitcase$eff$load_suitcases(p__99330){
var map__99331 = p__99330;
var map__99331__$1 = cljs.core.__destructure_map.call(null,map__99331);
var db = cljs.core.get.call(null,map__99331__$1,new cljs.core.Keyword(null,"db","db",993250759));
return fetch("suitcases.min.json").then((function (p1__99328_SHARP_){
return p1__99328_SHARP_.text();
})).then((function (p1__99329_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"suitcases","suitcases",-1164179933),cognitect.transit.read.call(null,tse.suitcase.eff.reader,p1__99329_SHARP_));
}));
});
tse.suitcase.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("suitcase","load","suitcase/load",545612115),tse.suitcase.eff.load_suitcases], null);

//# sourceMappingURL=eff.js.map?rel=1767875391869
