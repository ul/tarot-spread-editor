// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.card.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.card.sub.used_by_deck = (function tse$card$sub$used_by_deck(p__98975){
var map__98976 = p__98975;
var map__98976__$1 = cljs.core.__destructure_map.call(null,map__98976);
var deck = cljs.core.get.call(null,map__98976__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var db = cljs.core.get.call(null,map__98976__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__98976__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520),new cljs.core.Keyword(null,"index","index",-1531685915))),cljs.core.keep.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (map (comp vec (juxt :suit :index)) (keep :card @(sub [:item/all]))))\n"], null));
});
tse.card.sub.usable_by_deck = (function tse$card$sub$usable_by_deck(p__98977){
var map__98978 = p__98977;
var map__98978__$1 = cljs.core.__destructure_map.call(null,map__98978);
var vec__98979 = cljs.core.get.call(null,map__98978__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var deck = cljs.core.nth.call(null,vec__98979,(0),null);
var db = cljs.core.get.call(null,map__98978__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__98978__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var deck__$1 = sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","entity","deck/entity",-456409451),deck], null));
var card_suitcase = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","entity","suitcase/entity",1874638233),cljs.core.get.call(null,cljs.core.deref.call(null,deck__$1),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906))], null)));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx @(sub [:suitcase/entity (get @deck :suitcase)]))\n"], null));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.mapcat.call(null,(function (p__98982){
var vec__98983 = p__98982;
var k = cljs.core.nth.call(null,vec__98983,(0),null);
var v = cljs.core.nth.call(null,vec__98983,(1),null);
return cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,k),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"cards","cards",169174038)))));
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get.call(null,cljs.core.deref.call(null,card_suitcase),new cljs.core.Keyword(null,"suits","suits",-426777515))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (mapcat\n  (fn [[k v]] (map vector (repeat k) (range (count (get v :cards)))))\n  (map-indexed vector (get @card-suitcase :suits))))\n"], null));
});
tse.card.sub.get_entity = (function tse$card$sub$get_entity(p__98986){
var map__98987 = p__98986;
var map__98987__$1 = cljs.core.__destructure_map.call(null,map__98987);
var vec__98988 = cljs.core.get.call(null,map__98987__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__98988,(0),null);
var sub = cljs.core.get.call(null,map__98987__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var item = sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","entity","item/entity",-456572817),id], null));
var base_url = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","deck-base-url","config/deck-base-url",-1366791509)], null));
return carbon.rx.rx_STAR_.call(null,(function (){
var map__98991 = cljs.core.deref.call(null,item);
var map__98991__$1 = cljs.core.__destructure_map.call(null,map__98991);
var item__$1 = map__98991__$1;
var map__98992 = cljs.core.get.call(null,map__98991__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__98992__$1 = cljs.core.__destructure_map.call(null,map__98992);
var deck = cljs.core.get.call(null,map__98992__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var suit = cljs.core.get.call(null,map__98992__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));
var index = cljs.core.get.call(null,map__98992__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var map__98993 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","entity","deck/entity",-456409451),deck], null)));
var map__98993__$1 = cljs.core.__destructure_map.call(null,map__98993);
var deck_src = cljs.core.get.call(null,map__98993__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var suitcase = cljs.core.get.call(null,map__98993__$1,new cljs.core.Keyword(null,"suitcase","suitcase",-801872906));
var format = cljs.core.get.call(null,map__98993__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var src = cljs.core.get_in.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","entity","suitcase/entity",1874638233),suitcase], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),suit,new cljs.core.Keyword(null,"cards","cards",169174038),index], null),"back");
var src__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,base_url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(deck_src),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('');
return cljs.core.assoc.call(null,item__$1,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [{{:keys [deck suit index]} :card, :as item}\n   @item\n   {:keys [suitcase format], deck-src :src}\n   @(sub [:deck/entity deck])\n   src\n   (get-in\n    @(sub [:suitcase/entity suitcase])\n    [:suits suit :cards index]\n    \"back\")\n   src\n   (str @base-url deck-src \"/\" src \".\" format)]\n  (assoc item :src src)))\n"], null));
});
tse.card.sub.spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("card","random-reversible?","card/random-reversible?",2068479445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random","random",-557811113),new cljs.core.Keyword(null,"reversible?","reversible?",-1326423710)], null),new cljs.core.Keyword("card","used-by-deck","card/used-by-deck",-53961823),tse.card.sub.used_by_deck,new cljs.core.Keyword("card","usable-by-deck","card/usable-by-deck",-1194180652),tse.card.sub.usable_by_deck,new cljs.core.Keyword("card","entity","card/entity",-456376212),tse.card.sub.get_entity], null);

//# sourceMappingURL=sub.js.map?rel=1767875391694
