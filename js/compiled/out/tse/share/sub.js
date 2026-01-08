// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.share.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('cognitect.transit');
tse.share.sub.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.share.sub.serialize_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-deck","active-deck",-1571493503),new cljs.core.Keyword(null,"active-suit","active-suit",982277091),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"items","items",1031954938)], null);
tse.share.sub.debounce_timeout = cljs.core.atom.call(null,null);
tse.share.sub.write_fragment_BANG_ = (function tse$share$sub$write_fragment_BANG_(state){
var hash = encodeURIComponent(cognitect.transit.write.call(null,tse.share.sub.w,state));
var loc = window.location;
var uri = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.search),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
return history.replaceState(null,null,uri);
});
tse.share.sub.update_fragment = (function tse$share$sub$update_fragment(p__101145){
var map__101146 = p__101145;
var map__101146__$1 = cljs.core.__destructure_map.call(null,map__101146);
var db = cljs.core.get.call(null,map__101146__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__101146__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var state = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,db),tse.share.sub.serialize_keys);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (select-keys @db serialize-keys))\n"], null));
var loaded_QMARK_ = carbon.rx.rx_STAR_.call(null,(function (){
return new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (-> @db :loaded?))\n"], null));
var dragging_QMARK_ = sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","dragging?","transformer/dragging?",1035760325)], null));
return carbon.rx.rx_STAR_.call(null,(function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref.call(null,loaded_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,dragging_QMARK_));
} else {
return and__5043__auto__;
}
})())){
var current_state = cljs.core.deref.call(null,state);
var temp__5818__auto___101147 = cljs.core.deref.call(null,tse.share.sub.debounce_timeout);
if(cljs.core.truth_(temp__5818__auto___101147)){
var t_101148 = temp__5818__auto___101147;
clearTimeout(t_101148);
} else {
}

return cljs.core.reset_BANG_.call(null,tse.share.sub.debounce_timeout,setTimeout((function (){
return tse.share.sub.write_fragment_BANG_.call(null,current_state);
}),(1000)));
} else {
return null;
}
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (when\n  (and @loaded? (not @dragging?))\n  (let\n   [current-state @state]\n   (when-let [t @debounce-timeout] (js/clearTimeout t))\n   (reset!\n    debounce-timeout\n    (js/setTimeout (fn* [] (write-fragment! current-state)) 1000)))))\n"], null));
});
tse.share.sub.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("share","update-fragment","share/update-fragment",-2079776156),tse.share.sub.update_fragment], null);

//# sourceMappingURL=sub.js.map?rel=1767875393179
