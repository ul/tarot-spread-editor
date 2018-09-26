// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.suitcase.eff');
goog.require('cljs.core');
goog.require('cognitect.transit');
tse.suitcase.eff.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.suitcase.eff.load_suitcases = (function tse$suitcase$eff$load_suitcases(p__52235){
var map__52236 = p__52235;
var map__52236__$1 = ((((!((map__52236 == null)))?(((((map__52236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52236):map__52236);
var db = cljs.core.get.call(null,map__52236__$1,new cljs.core.Keyword(null,"db","db",993250759));
return fetch("suitcases.min.json").then(((function (map__52236,map__52236__$1,db){
return (function (p1__52233_SHARP_){
return p1__52233_SHARP_.text();
});})(map__52236,map__52236__$1,db))
).then(((function (map__52236,map__52236__$1,db){
return (function (p1__52234_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"suitcases","suitcases",-1164179933),cognitect.transit.read.call(null,tse.suitcase.eff.reader,p1__52234_SHARP_));
});})(map__52236,map__52236__$1,db))
);
});
tse.suitcase.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("suitcase","load","suitcase/load",545612115),tse.suitcase.eff.load_suitcases], null);

//# sourceMappingURL=eff.js.map?rel=1537946276798
