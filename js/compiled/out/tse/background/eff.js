// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.background.eff');
goog.require('cljs.core');
goog.require('tse.math');
tse.background.eff.move = (function tse$background$eff$move(p__102681){
var map__102682 = p__102681;
var map__102682__$1 = cljs.core.__destructure_map.call(null,map__102682);
var vec__102683 = cljs.core.get.call(null,map__102682__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__102683,(0),null);
var db = cljs.core.get.call(null,map__102682__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__102682__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"origin","origin",1037372088)], null),(function (v){
return tse.math.v0.call(null,tse.math.v_PLUS_.call(null,tse.math.v_PERCENT_.call(null,dv,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),v));
}));
});
tse.background.eff.resize = (function tse$background$eff$resize(p__102686){
var map__102687 = p__102686;
var map__102687__$1 = cljs.core.__destructure_map.call(null,map__102687);
var vec__102688 = cljs.core.get.call(null,map__102687__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var rect = cljs.core.nth.call(null,vec__102688,(0),null);
var deltaRect = cljs.core.nth.call(null,vec__102688,(1),null);
var db = cljs.core.get.call(null,map__102687__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__102687__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102687__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var dv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.width,deltaRect.height], null);
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","move","background/move",1347789589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.left,deltaRect.top], null)], null));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null),tse.math.v_PLUS_,tse.math.v_PERCENT_.call(null,dv,scale));
});
tse.background.eff.set_dimensions = (function tse$background$eff$set_dimensions(p__102691){
var map__102692 = p__102691;
var map__102692__$1 = cljs.core.__destructure_map.call(null,map__102692);
var vec__102693 = cljs.core.get.call(null,map__102692__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dimensions = cljs.core.nth.call(null,vec__102693,(0),null);
var db = cljs.core.get.call(null,map__102692__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null),dimensions);
});
tse.background.eff.show_menu = (function tse$background$eff$show_menu(p__102696){
var map__102697 = p__102696;
var map__102697__$1 = cljs.core.__destructure_map.call(null,map__102697);
var vec__102698 = cljs.core.get.call(null,map__102697__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var menu = cljs.core.nth.call(null,vec__102698,(0),null);
var db = cljs.core.get.call(null,map__102697__$1,new cljs.core.Keyword(null,"db","db",993250759));
var p = menu.getPosition();
var x = p.x;
var y = p.y;
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"menu-position","menu-position",-1067744485)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
tse.background.eff.spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("background","move","background/move",1347789589),tse.background.eff.move,new cljs.core.Keyword("background","resize","background/resize",-1050620668),tse.background.eff.resize,new cljs.core.Keyword("background","set-dimensions","background/set-dimensions",800356230),tse.background.eff.set_dimensions,new cljs.core.Keyword("background","show-menu","background/show-menu",1345263878),tse.background.eff.show_menu], null);

//# sourceMappingURL=eff.js.map?rel=1767875394037
