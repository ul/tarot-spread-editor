// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.share.eff');
goog.require('cljs.core');
goog.require('cognitect.transit');
tse.share.eff.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
tse.share.eff.load_from_fragment = (function tse$share$eff$load_from_fragment(p__101110){
var map__101111 = p__101110;
var map__101111__$1 = cljs.core.__destructure_map.call(null,map__101111);
var db = cljs.core.get.call(null,map__101111__$1,new cljs.core.Keyword(null,"db","db",993250759));
var loc = window.location;
var hash = decodeURIComponent(cljs.core.subs.call(null,loc.hash,(1)));
if((cljs.core.count.call(null,hash) > (0))){
cljs.core.swap_BANG_.call(null,db,cljs.core.merge,cognitect.transit.read.call(null,tse.share.eff.r,hash));
} else {
}

return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);
});
tse.share.eff.spec = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("share","load-from-fragment","share/load-from-fragment",-373711793),tse.share.eff.load_from_fragment], null);

//# sourceMappingURL=eff.js.map?rel=1767875393159
