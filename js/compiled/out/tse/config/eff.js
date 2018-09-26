// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.config.eff');
goog.require('cljs.core');
tse.config.eff.toggle_grid_show = (function tse$config$eff$toggle_grid_show(p__53313){
var map__53314 = p__53313;
var map__53314__$1 = ((((!((map__53314 == null)))?(((((map__53314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53314):map__53314);
var vec__53315 = cljs.core.get.call(null,map__53314__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var show_QMARK_ = cljs.core.nth.call(null,vec__53315,(0),null);
var db = cljs.core.get.call(null,map__53314__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"show?","show?",1543842127)], null),show_QMARK_);
});
tse.config.eff.toggle_grid_snap = (function tse$config$eff$toggle_grid_snap(p__53319){
var map__53320 = p__53319;
var map__53320__$1 = ((((!((map__53320 == null)))?(((((map__53320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53320):map__53320);
var vec__53321 = cljs.core.get.call(null,map__53320__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var snap_QMARK_ = cljs.core.nth.call(null,vec__53321,(0),null);
var db = cljs.core.get.call(null,map__53320__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"snap?","snap?",1489197534)], null),snap_QMARK_);
});
tse.config.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("config","toggle-grid-show","config/toggle-grid-show",846306634),tse.config.eff.toggle_grid_show,new cljs.core.Keyword("config","toggle-grid-snap","config/toggle-grid-snap",1062297049),tse.config.eff.toggle_grid_snap], null);

//# sourceMappingURL=eff.js.map?rel=1537946281264
