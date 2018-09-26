// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.card.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.card.sub.used_by_deck = (function tse$card$sub$used_by_deck(p__51943){
var map__51944 = p__51943;
var map__51944__$1 = ((((!((map__51944 == null)))?(((((map__51944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51944):map__51944);
var deck = cljs.core.get.call(null,map__51944__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var db = cljs.core.get.call(null,map__51944__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__51944__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__51944,map__51944__$1,deck,db,sub){
return (function (){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520),new cljs.core.Keyword(null,"index","index",-1531685915))),cljs.core.keep.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)))));
});})(map__51944,map__51944__$1,deck,db,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (map (comp vec (juxt :suit :index)) (keep :card @(sub [:item/all]))))\n"], null));
});
tse.card.sub.usable_by_deck = (function tse$card$sub$usable_by_deck(p__51946){
var map__51947 = p__51946;
var map__51947__$1 = ((((!((map__51947 == null)))?(((((map__51947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51947):map__51947);
var vec__51948 = cljs.core.get.call(null,map__51947__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var deck = cljs.core.nth.call(null,vec__51948,(0),null);
var db = cljs.core.get.call(null,map__51947__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__51947__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var deck__$1 = sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","entity","deck/entity",-456409451),deck], null));
var card_suitcase = carbon.rx.rx_STAR_.call(null,((function (deck__$1,map__51947,map__51947__$1,vec__51948,deck,db,sub){
return (function (){
return cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","entity","suitcase/entity",1874638233),cljs.core.get.call(null,cljs.core.deref.call(null,deck__$1),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906))], null)));
});})(deck__$1,map__51947,map__51947__$1,vec__51948,deck,db,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx @(sub [:suitcase/entity (get @deck :suitcase)]))\n"], null));
return carbon.rx.rx_STAR_.call(null,((function (deck__$1,card_suitcase,map__51947,map__51947__$1,vec__51948,deck,db,sub){
return (function (){
return cljs.core.mapcat.call(null,((function (deck__$1,card_suitcase,map__51947,map__51947__$1,vec__51948,deck,db,sub){
return (function (p__51952){
var vec__51953 = p__51952;
var k = cljs.core.nth.call(null,vec__51953,(0),null);
var v = cljs.core.nth.call(null,vec__51953,(1),null);
return cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,k),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"cards","cards",169174038)))));
});})(deck__$1,card_suitcase,map__51947,map__51947__$1,vec__51948,deck,db,sub))
,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get.call(null,cljs.core.deref.call(null,card_suitcase),new cljs.core.Keyword(null,"suits","suits",-426777515))));
});})(deck__$1,card_suitcase,map__51947,map__51947__$1,vec__51948,deck,db,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (mapcat\n  (fn [[k v]] (map vector (repeat k) (range (count (get v :cards)))))\n  (map-indexed vector (get @card-suitcase :suits))))\n"], null));
});
tse.card.sub.get_entity = (function tse$card$sub$get_entity(p__51956){
var map__51957 = p__51956;
var map__51957__$1 = ((((!((map__51957 == null)))?(((((map__51957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51957):map__51957);
var vec__51958 = cljs.core.get.call(null,map__51957__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__51958,(0),null);
var sub = cljs.core.get.call(null,map__51957__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var item = sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","entity","item/entity",-456572817),id], null));
var base_url = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","deck-base-url","config/deck-base-url",-1366791509)], null));
return carbon.rx.rx_STAR_.call(null,((function (item,base_url,map__51957,map__51957__$1,vec__51958,id,sub){
return (function (){
var map__51962 = cljs.core.deref.call(null,item);
var map__51962__$1 = ((((!((map__51962 == null)))?(((((map__51962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51962):map__51962);
var item__$1 = map__51962__$1;
var map__51963 = cljs.core.get.call(null,map__51962__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__51963__$1 = ((((!((map__51963 == null)))?(((((map__51963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51963):map__51963);
var deck = cljs.core.get.call(null,map__51963__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var suit = cljs.core.get.call(null,map__51963__$1,new cljs.core.Keyword(null,"suit","suit",-869827520));
var index = cljs.core.get.call(null,map__51963__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var map__51964 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","entity","deck/entity",-456409451),deck], null)));
var map__51964__$1 = ((((!((map__51964 == null)))?(((((map__51964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51964):map__51964);
var deck_src = cljs.core.get.call(null,map__51964__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var suitcase = cljs.core.get.call(null,map__51964__$1,new cljs.core.Keyword(null,"suitcase","suitcase",-801872906));
var format = cljs.core.get.call(null,map__51964__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var src = cljs.core.get_in.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","entity","suitcase/entity",1874638233),suitcase], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suits","suits",-426777515),suit,new cljs.core.Keyword(null,"cards","cards",169174038),index], null));
var src__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,base_url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(deck_src),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format)].join('');
return cljs.core.assoc.call(null,item__$1,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1);
});})(item,base_url,map__51957,map__51957__$1,vec__51958,id,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [{{:keys [deck suit index]} :card, :as item}\n   @item\n   {:keys [suitcase format], deck-src :src}\n   @(sub [:deck/entity deck])\n   src\n   (get-in\n    @(sub [:suitcase/entity suitcase])\n    [:suits suit :cards index])\n   src\n   (str @base-url deck-src \"/\" src \".\" format)]\n  (assoc item :src src)))\n"], null));
});
tse.card.sub.spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("card","random-reversible?","card/random-reversible?",2068479445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random","random",-557811113),new cljs.core.Keyword(null,"reversible?","reversible?",-1326423710)], null),new cljs.core.Keyword("card","used-by-deck","card/used-by-deck",-53961823),tse.card.sub.used_by_deck,new cljs.core.Keyword("card","usable-by-deck","card/usable-by-deck",-1194180652),tse.card.sub.usable_by_deck,new cljs.core.Keyword("card","entity","card/entity",-456376212),tse.card.sub.get_entity], null);

//# sourceMappingURL=sub.js.map?rel=1537946276211
