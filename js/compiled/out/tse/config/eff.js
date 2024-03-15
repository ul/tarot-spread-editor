// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.config.eff');
goog.require('cljs.core');
tse.config.eff.toggle_grid_show = (function tse$config$eff$toggle_grid_show(p__34738){
var map__34739 = p__34738;
var map__34739__$1 = cljs.core.__destructure_map.call(null,map__34739);
var vec__34740 = cljs.core.get.call(null,map__34739__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var show_QMARK_ = cljs.core.nth.call(null,vec__34740,(0),null);
var db = cljs.core.get.call(null,map__34739__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"show?","show?",1543842127)], null),show_QMARK_);
});
tse.config.eff.toggle_grid_snap = (function tse$config$eff$toggle_grid_snap(p__34743){
var map__34744 = p__34743;
var map__34744__$1 = cljs.core.__destructure_map.call(null,map__34744);
var vec__34745 = cljs.core.get.call(null,map__34744__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var snap_QMARK_ = cljs.core.nth.call(null,vec__34745,(0),null);
var db = cljs.core.get.call(null,map__34744__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"snap?","snap?",1489197534)], null),snap_QMARK_);
});
tse.config.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("config","toggle-grid-show","config/toggle-grid-show",846306634),tse.config.eff.toggle_grid_show,new cljs.core.Keyword("config","toggle-grid-snap","config/toggle-grid-snap",1062297049),tse.config.eff.toggle_grid_snap], null);

//# sourceMappingURL=eff.js.map?rel=1710474316880
