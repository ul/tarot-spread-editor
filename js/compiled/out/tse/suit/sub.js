// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.suit.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.suit.sub.get_active = (function tse$suit$sub$get_active(p__36533){
var map__36534 = p__36533;
var map__36534__$1 = cljs.core.__destructure_map.call(null,map__36534);
var sub = cljs.core.get.call(null,map__36534__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var suitcase = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","active","suitcase/active",-505131497)], null));
var suit_id = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active-id","suit/active-id",-62520787)], null));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,suitcase),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),cljs.core.deref.call(null,suit_id)], null));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get-in @suitcase [:suits @suit-id]))\n"], null));
});
tse.suit.sub.active_cards = (function tse$suit$sub$active_cards(p__36538){
var map__36539 = p__36538;
var map__36539__$1 = cljs.core.__destructure_map.call(null,map__36539);
var sub = cljs.core.get.call(null,map__36539__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var suit = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active","suit/active",1891394215)], null));
var base_url = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","deck-base-url","config/deck-base-url",-1366791509)], null));
var deck = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active","deck/active",1892881707)], null));
return carbon.rx.rx_STAR_.call(null,(function (){
var base_url__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,base_url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"src","src",-1651076051))),"/"].join('');
var back_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"back","back",-417520012));
var format = cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"format","format",-1306924766));
var make_url = (function (p1__36535_SHARP_){
return [base_url__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36535_SHARP_),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('');
});
var active_cards = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (p1__36537_SHARP_,p2__36536_SHARP_){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),make_url.call(null,p2__36536_SHARP_)], null),new cljs.core.Keyword(null,"index","index",-1531685915),p1__36537_SHARP_);
}),cljs.core.get.call(null,cljs.core.deref.call(null,suit),new cljs.core.Keyword(null,"cards","cards",169174038))));
if(cljs.core.truth_(back_QMARK_)){
return cljs.core.conj.call(null,active_cards,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),make_url.call(null,"back"),new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null));
} else {
return active_cards;
}
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [base-url\n   (str @base-url (get @deck :src) \"/\")\n   back?\n   (get @deck :back)\n   format\n   (get @deck :format)\n   make-url\n   (fn* [p1__36535#] (str base-url p1__36535# \".\" format))\n   active-cards\n   (vec\n    (map-indexed\n     (fn*\n      [p1__36537# p2__36536#]\n      (-> {:src (make-url p2__36536#)} (assoc :index p1__36537#)))\n     (get @suit :cards)))]\n  (if\n   back?\n   (conj active-cards {:src (make-url \"back\"), :index -1})\n   active-cards)))\n"], null));
});
tse.suit.sub.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("suit","active-id","suit/active-id",-62520787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-suit","active-suit",982277091)], null),new cljs.core.Keyword("suit","active","suit/active",1891394215),tse.suit.sub.get_active,new cljs.core.Keyword("suit","active-cards","suit/active-cards",-1107529247),tse.suit.sub.active_cards], null);

//# sourceMappingURL=sub.js.map?rel=1710474317852
