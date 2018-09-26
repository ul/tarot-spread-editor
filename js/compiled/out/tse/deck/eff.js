// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.deck.eff');
goog.require('cljs.core');
goog.require('cognitect.transit');
tse.deck.eff.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.deck.eff.set_active = (function tse$deck$eff$set_active(p__54076){
var map__54077 = p__54076;
var map__54077__$1 = ((((!((map__54077 == null)))?(((((map__54077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54077):map__54077);
var vec__54078 = cljs.core.get.call(null,map__54077__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__54078,(0),null);
var db = cljs.core.get.call(null,map__54077__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"active-deck","active-deck",-1571493503),id);
});
tse.deck.eff.load_decks = (function tse$deck$eff$load_decks(p__54084){
var map__54085 = p__54084;
var map__54085__$1 = ((((!((map__54085 == null)))?(((((map__54085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54085):map__54085);
var db = cljs.core.get.call(null,map__54085__$1,new cljs.core.Keyword(null,"db","db",993250759));
return fetch("decks.min.json").then(((function (map__54085,map__54085__$1,db){
return (function (p1__54082_SHARP_){
return p1__54082_SHARP_.text();
});})(map__54085,map__54085__$1,db))
).then(((function (map__54085,map__54085__$1,db){
return (function (p1__54083_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"decks","decks",-1740305496),cognitect.transit.read.call(null,tse.deck.eff.reader,p1__54083_SHARP_));
});})(map__54085,map__54085__$1,db))
);
});
tse.deck.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("deck","set-active","deck/set-active",256366800),tse.deck.eff.set_active,new cljs.core.Keyword("deck","load","deck/load",-1315559865),tse.deck.eff.load_decks], null);

//# sourceMappingURL=eff.js.map?rel=1537946283681
