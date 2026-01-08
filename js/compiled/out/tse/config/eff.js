// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.config.eff');
goog.require('cljs.core');
tse.config.eff.toggle_grid_show = (function tse$config$eff$toggle_grid_show(p__101098){
var map__101099 = p__101098;
var map__101099__$1 = cljs.core.__destructure_map.call(null,map__101099);
var vec__101100 = cljs.core.get.call(null,map__101099__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var show_QMARK_ = cljs.core.nth.call(null,vec__101100,(0),null);
var db = cljs.core.get.call(null,map__101099__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"show?","show?",1543842127)], null),show_QMARK_);
});
tse.config.eff.toggle_grid_snap = (function tse$config$eff$toggle_grid_snap(p__101103){
var map__101104 = p__101103;
var map__101104__$1 = cljs.core.__destructure_map.call(null,map__101104);
var vec__101105 = cljs.core.get.call(null,map__101104__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var snap_QMARK_ = cljs.core.nth.call(null,vec__101105,(0),null);
var db = cljs.core.get.call(null,map__101104__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"snap?","snap?",1489197534)], null),snap_QMARK_);
});
tse.config.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("config","toggle-grid-show","config/toggle-grid-show",846306634),tse.config.eff.toggle_grid_show,new cljs.core.Keyword("config","toggle-grid-snap","config/toggle-grid-snap",1062297049),tse.config.eff.toggle_grid_snap], null);

//# sourceMappingURL=eff.js.map?rel=1767875393155
