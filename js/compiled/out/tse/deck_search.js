// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.deck_search');
goog.require('cljs.core');
goog.require('tse.autocomplete');
goog.require('carbon.rx');
tse.deck_search.deck_label = (function tse$deck_search$deck_label(p__52543,lang){
var map__52544 = p__52543;
var map__52544__$1 = ((((!((map__52544 == null)))?(((((map__52544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52544):map__52544);
var name = cljs.core.get.call(null,map__52544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var en_name = cljs.core.get.call(null,name,new cljs.core.Keyword(null,"en","en",88457073));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"en","en",88457073),lang)){
return en_name;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,name,lang))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en_name)].join('');
}
});
tse.deck_search.deck__GT_autocomplete_item = (function tse$deck_search$deck__GT_autocomplete_item(lang,p__52546){
var vec__52547 = p__52546;
var k = cljs.core.nth.call(null,vec__52547,(0),null);
var m = cljs.core.nth.call(null,vec__52547,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"label","label",1718410804),tse.deck_search.deck_label.call(null,m,lang)], null);
});
tse.deck_search.view = (function tse$deck_search$view(p__52551){
var map__52552 = p__52551;
var map__52552__$1 = ((((!((map__52552 == null)))?(((((map__52552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52552):map__52552);
var ctx = map__52552__$1;
var sub = cljs.core.get.call(null,map__52552__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__52552__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var lang = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lang","code","lang/code",-1648658552)], null));
var items = carbon.rx.rx_STAR_.call(null,((function (lang,map__52552,map__52552__$1,ctx,sub,emit){
return (function (){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,tse.deck_search.deck__GT_autocomplete_item,cljs.core.deref.call(null,lang)),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","all","deck/all",884856247)], null))));
});})(lang,map__52552,map__52552__$1,ctx,sub,emit))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (mapv (partial deck->autocomplete-item @lang) @(sub [:deck/all])))\n"], null));
var active = carbon.rx.rx_STAR_.call(null,((function (lang,items,map__52552,map__52552__$1,ctx,sub,emit){
return (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),tse.deck_search.deck_label.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active","deck/active",1892881707)], null))),cljs.core.deref.call(null,lang)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671)], null)))], null);
});})(lang,items,map__52552,map__52552__$1,ctx,sub,emit))
,((function (lang,items,map__52552,map__52552__$1,ctx,sub,emit){
return (function (p1__52550_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","set-active","deck/set-active",256366800),cljs.core.get.call(null,p1__52550_SHARP_,new cljs.core.Keyword(null,"value","value",305978217))], null));
});})(lang,items,map__52552,map__52552__$1,ctx,sub,emit))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/lens\n {:label (deck-label @(sub [:deck/active]) @lang),\n  :value @(sub [:deck/active-id])}\n (fn* [p1__52550#] (emit [:deck/set-active (get p1__52550# :value)])))\n"], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("deck-search","placeholder","deck-search/placeholder",-1743211535),"Select a deck..."], null)),new cljs.core.Keyword(null,"hint","hint",439639918),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("deck-search","hint","deck-search/hint",982209690),"Start typing deck name (at least 3 letters)"], null))], null)], null)], null);
});

//# sourceMappingURL=deck_search.js.map?rel=1537946277672
