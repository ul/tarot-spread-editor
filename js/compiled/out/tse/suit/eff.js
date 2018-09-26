// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.suit.eff');
goog.require('cljs.core');
tse.suit.eff.activate = (function tse$suit$eff$activate(p__51970){
var map__51971 = p__51970;
var map__51971__$1 = ((((!((map__51971 == null)))?(((((map__51971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51971):map__51971);
var vec__51972 = cljs.core.get.call(null,map__51971__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__51972,(0),null);
var db = cljs.core.get.call(null,map__51971__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"active-suit","active-suit",982277091),id);
});
tse.suit.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("suit","activate","suit/activate",505058577),tse.suit.eff.activate], null);

//# sourceMappingURL=eff.js.map?rel=1537946276228
