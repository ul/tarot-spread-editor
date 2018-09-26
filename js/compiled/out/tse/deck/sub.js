// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.deck.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.deck.sub.get_active = (function tse$deck$sub$get_active(p__53302){
var map__53303 = p__53302;
var map__53303__$1 = ((((!((map__53303 == null)))?(((((map__53303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53303):map__53303);
var sub = cljs.core.get.call(null,map__53303__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var decks = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","all","deck/all",884856247)], null));
var active_id = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671)], null));
return carbon.rx.rx_STAR_.call(null,((function (decks,active_id,map__53303,map__53303__$1,sub){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,decks),cljs.core.deref.call(null,active_id));
});})(decks,active_id,map__53303,map__53303__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @decks @active-id))\n"], null));
});
tse.deck.sub.get_entity = (function tse$deck$sub$get_entity(p__53305){
var map__53306 = p__53305;
var map__53306__$1 = ((((!((map__53306 == null)))?(((((map__53306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53306):map__53306);
var vec__53307 = cljs.core.get.call(null,map__53306__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__53307,(0),null);
var sub = cljs.core.get.call(null,map__53306__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__53306,map__53306__$1,vec__53307,id,sub){
return (function (){
var deck = cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","all","deck/all",884856247)], null))),id);
return cljs.core.assoc.call(null,deck,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,deck,new cljs.core.Keyword(null,"width","width",-384071477)),cljs.core.get.call(null,deck,new cljs.core.Keyword(null,"height","height",1025178622))], null));
});})(map__53306,map__53306__$1,vec__53307,id,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [deck (get @(sub [:deck/all]) id)]\n  (assoc deck :dimensions [(get deck :width) (get deck :height)])))\n"], null));
});
tse.deck.sub.spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-deck","active-deck",-1571493503)], null),new cljs.core.Keyword("deck","active","deck/active",1892881707),tse.deck.sub.get_active,new cljs.core.Keyword("deck","all","deck/all",884856247),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decks","decks",-1740305496)], null),new cljs.core.Keyword("deck","entity","deck/entity",-456409451),tse.deck.sub.get_entity], null);

//# sourceMappingURL=sub.js.map?rel=1537946281246
