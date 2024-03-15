// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.label.eff');
goog.require('cljs.core');
tse.label.eff.add_label = (function tse$label$eff$add_label(p__32626){
var map__32627 = p__32626;
var map__32627__$1 = cljs.core.__destructure_map.call(null,map__32627);
var vec__32628 = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var item = cljs.core.nth.call(null,vec__32628,(0),null);
var db = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var canvas = document.getElementById("canvas").getBoundingClientRect();
var vec__32631 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","menu-position","background/menu-position",818138629)], null)));
var mx = cljs.core.nth.call(null,vec__32631,(0),null);
var my = cljs.core.nth.call(null,vec__32631,(1),null);
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
var x = (((mx - window.scrollX) - canvas.x) / scale);
var y = (((my - window.scrollY) - canvas.y) / scale);
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (items){
return cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (p1__32625_SHARP_){
return cljs.core.assoc.call(null,p1__32625_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}),items),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null)))], null),item));
}));
});
tse.label.eff.update_label = (function tse$label$eff$update_label(p__32634){
var map__32635 = p__32634;
var map__32635__$1 = cljs.core.__destructure_map.call(null,map__32635);
var vec__32636 = cljs.core.get.call(null,map__32635__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var item = cljs.core.nth.call(null,vec__32636,(0),null);
var id = cljs.core.nth.call(null,vec__32636,(1),null);
var db = cljs.core.get.call(null,map__32635__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__32635__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),id], null),cljs.core.merge,item);
});
tse.label.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("label","add","label/add",-1285180881),tse.label.eff.add_label,new cljs.core.Keyword("label","update","label/update",946911680),tse.label.eff.update_label], null);

//# sourceMappingURL=eff.js.map?rel=1710474315417
