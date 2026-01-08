// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.deck.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.deck.sub.get_active = (function tse$deck$sub$get_active(p__101089){
var map__101090 = p__101089;
var map__101090__$1 = cljs.core.__destructure_map.call(null,map__101090);
var sub = cljs.core.get.call(null,map__101090__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var decks = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","all","deck/all",884856247)], null));
var active_id = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671)], null));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,decks),cljs.core.deref.call(null,active_id));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @decks @active-id))\n"], null));
});
tse.deck.sub.get_entity = (function tse$deck$sub$get_entity(p__101091){
var map__101092 = p__101091;
var map__101092__$1 = cljs.core.__destructure_map.call(null,map__101092);
var vec__101093 = cljs.core.get.call(null,map__101092__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__101093,(0),null);
var sub = cljs.core.get.call(null,map__101092__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
var deck = cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","all","deck/all",884856247)], null))),id);
return cljs.core.assoc.call(null,deck,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,deck,new cljs.core.Keyword(null,"width","width",-384071477)),cljs.core.get.call(null,deck,new cljs.core.Keyword(null,"height","height",1025178622))], null));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [deck (get @(sub [:deck/all]) id)]\n  (assoc deck :dimensions [(get deck :width) (get deck :height)])))\n"], null));
});
tse.deck.sub.spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-deck","active-deck",-1571493503)], null),new cljs.core.Keyword("deck","active","deck/active",1892881707),tse.deck.sub.get_active,new cljs.core.Keyword("deck","all","deck/all",884856247),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496)], null),new cljs.core.Keyword("deck","entity","deck/entity",-456409451),tse.deck.sub.get_entity], null);

//# sourceMappingURL=sub.js.map?rel=1767875393152
