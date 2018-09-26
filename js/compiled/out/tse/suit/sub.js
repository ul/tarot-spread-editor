// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.suit.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.suit.sub.get_active = (function tse$suit$sub$get_active(p__53989){
var map__53990 = p__53989;
var map__53990__$1 = ((((!((map__53990 == null)))?(((((map__53990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53990):map__53990);
var sub = cljs.core.get.call(null,map__53990__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var suitcase = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","active","suitcase/active",-505131497)], null));
var suit_id = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active-id","suit/active-id",-62520787)], null));
return carbon.rx.rx_STAR_.call(null,((function (suitcase,suit_id,map__53990,map__53990__$1,sub){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,suitcase),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),cljs.core.deref.call(null,suit_id)], null));
});})(suitcase,suit_id,map__53990,map__53990__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get-in @suitcase [:suits @suit-id]))\n"], null));
});
tse.suit.sub.active_cards = (function tse$suit$sub$active_cards(p__53995){
var map__53996 = p__53995;
var map__53996__$1 = ((((!((map__53996 == null)))?(((((map__53996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53996):map__53996);
var sub = cljs.core.get.call(null,map__53996__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var suit = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active","suit/active",1891394215)], null));
var base_url = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","deck-base-url","config/deck-base-url",-1366791509)], null));
var deck = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active","deck/active",1892881707)], null));
return carbon.rx.rx_STAR_.call(null,((function (suit,base_url,deck,map__53996,map__53996__$1,sub){
return (function (){
var base_url__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,base_url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"src","src",-1651076051))),"/"].join('');
var format = cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"format","format",-1306924766));
var make_url = ((function (base_url__$1,format,suit,base_url,deck,map__53996,map__53996__$1,sub){
return (function (p1__53992_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53992_SHARP_),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('');
});})(base_url__$1,format,suit,base_url,deck,map__53996,map__53996__$1,sub))
;
return cljs.core.map_indexed.call(null,((function (base_url__$1,format,make_url,suit,base_url,deck,map__53996,map__53996__$1,sub){
return (function (p1__53994_SHARP_,p2__53993_SHARP_){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),make_url.call(null,p2__53993_SHARP_)], null),new cljs.core.Keyword(null,"index","index",-1531685915),p1__53994_SHARP_);
});})(base_url__$1,format,make_url,suit,base_url,deck,map__53996,map__53996__$1,sub))
,cljs.core.get.call(null,cljs.core.deref.call(null,suit),new cljs.core.Keyword(null,"cards","cards",169174038)));
});})(suit,base_url,deck,map__53996,map__53996__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [base-url\n   (str @base-url (get @deck :src) \"/\")\n   format\n   (get @deck :format)\n   make-url\n   (fn* [p1__53992#] (str base-url p1__53992# \".\" format))]\n  (map-indexed\n   (fn*\n    [p1__53994# p2__53993#]\n    (-> {:src (make-url p2__53993#)} (assoc :index p1__53994#)))\n   (get @suit :cards))))\n"], null));
});
tse.suit.sub.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("suit","active-id","suit/active-id",-62520787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-suit","active-suit",982277091)], null),new cljs.core.Keyword("suit","active","suit/active",1891394215),tse.suit.sub.get_active,new cljs.core.Keyword("suit","active-cards","suit/active-cards",-1107529247),tse.suit.sub.active_cards], null);

//# sourceMappingURL=sub.js.map?rel=1537946283403
