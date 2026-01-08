// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.suitcase.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.suitcase.sub.get_entity = (function tse$suitcase$sub$get_entity(p__102907){
var map__102908 = p__102907;
var map__102908__$1 = cljs.core.__destructure_map.call(null,map__102908);
var vec__102909 = cljs.core.get.call(null,map__102908__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__102909,(0),null);
var sub = cljs.core.get.call(null,map__102908__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","all","suitcase/all",-1513190773)], null))),id);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @(sub [:suitcase/all]) id))\n"], null));
});
tse.suitcase.sub.get_active = (function tse$suitcase$sub$get_active(p__102912){
var map__102913 = p__102912;
var map__102913__$1 = cljs.core.__destructure_map.call(null,map__102913);
var sub = cljs.core.get.call(null,map__102913__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var deck = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active","deck/active",1892881707)], null));
var suitcases = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","all","suitcase/all",-1513190773)], null));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,suitcases),cljs.core.get.call(null,cljs.core.deref.call(null,deck),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906)));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @suitcases (get @deck :suitcase)))\n"], null));
});
tse.suitcase.sub.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("suitcase","all","suitcase/all",-1513190773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suitcases","suitcases",-1164179933)], null),new cljs.core.Keyword("suitcase","entity","suitcase/entity",1874638233),tse.suitcase.sub.get_entity,new cljs.core.Keyword("suitcase","active","suitcase/active",-505131497),tse.suitcase.sub.get_active], null);

//# sourceMappingURL=sub.js.map?rel=1767875394168
