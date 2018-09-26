// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.suitcase.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.suitcase.sub.get_entity = (function tse$suitcase$sub$get_entity(p__53976){
var map__53977 = p__53976;
var map__53977__$1 = ((((!((map__53977 == null)))?(((((map__53977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53977):map__53977);
var vec__53978 = cljs.core.get.call(null,map__53977__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__53978,(0),null);
var sub = cljs.core.get.call(null,map__53977__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__53977,map__53977__$1,vec__53978,id,sub){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","all","suitcase/all",-1513190773)], null))),id);
});})(map__53977,map__53977__$1,vec__53978,id,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @(sub [:suitcase/all]) id))\n"], null));
});
tse.suitcase.sub.get_active = (function tse$suitcase$sub$get_active(p__53982){
var map__53983 = p__53982;
var map__53983__$1 = ((((!((map__53983 == null)))?(((((map__53983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53983):map__53983);
var sub = cljs.core.get.call(null,map__53983__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var deck = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active","deck/active",1892881707)], null));
var suitcases = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","all","suitcase/all",-1513190773)], null));
return carbon.rx.rx_STAR_.call(null,((function (deck,suitcases,map__53983,map__53983__$1,sub){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,suitcases),cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906)));
});})(deck,suitcases,map__53983,map__53983__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @suitcases (get @deck :suitcase)))\n"], null));
});
tse.suitcase.sub.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("suitcase","all","suitcase/all",-1513190773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suitcases","suitcases",-1164179933)], null),new cljs.core.Keyword("suitcase","entity","suitcase/entity",1874638233),tse.suitcase.sub.get_entity,new cljs.core.Keyword("suitcase","active","suitcase/active",-505131497),tse.suitcase.sub.get_active], null);

//# sourceMappingURL=sub.js.map?rel=1537946283356
