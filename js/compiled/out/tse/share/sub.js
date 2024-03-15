// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.share.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('cognitect.transit');
tse.share.sub.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.share.sub.serialize_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-deck","active-deck",-1571493503),new cljs.core.Keyword(null,"active-suit","active-suit",982277091),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"items","items",1031954938)], null);
tse.share.sub.update_fragment = (function tse$share$sub$update_fragment(p__34785){
var map__34786 = p__34785;
var map__34786__$1 = cljs.core.__destructure_map.call(null,map__34786);
var db = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var state = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,db),tse.share.sub.serialize_keys);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (select-keys @db serialize-keys))\n"], null));
var loaded_QMARK_ = carbon.rx.rx_STAR_.call(null,(function (){
return new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (-> @db :loaded?))\n"], null));
return carbon.rx.rx_STAR_.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,loaded_QMARK_))){
var hash = encodeURIComponent(cognitect.transit.write.call(null,tse.share.sub.w,cljs.core.deref.call(null,state)));
var loc = window.location;
var uri = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.search),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
return history.replaceState(null,null,uri);
} else {
return null;
}
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (when\n  @loaded?\n  (let\n   [hash\n    (->> @state (t/write w) js/encodeURIComponent)\n    loc\n    js/window.location\n    uri\n    (str (.-pathname loc) (.-search loc) \"#\" hash)]\n   (js/history.replaceState nil nil uri))))\n"], null));
});
tse.share.sub.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("share","update-fragment","share/update-fragment",-2079776156),tse.share.sub.update_fragment], null);

//# sourceMappingURL=sub.js.map?rel=1710474316902
