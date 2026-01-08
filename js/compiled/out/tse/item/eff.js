// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.item.eff');
goog.require('cljs.core');
goog.require('tse.utils');
tse.item.eff.toggle_selected = (function tse$item$eff$toggle_selected(p__102620){
var map__102621 = p__102620;
var map__102621__$1 = cljs.core.__destructure_map.call(null,map__102621);
var vec__102622 = cljs.core.get.call(null,map__102621__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__102622,(0),null);
var multiselect_QMARK_ = cljs.core.nth.call(null,vec__102622,(1),null);
var db = cljs.core.get.call(null,map__102621__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__102621__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
if(cljs.core.truth_(multiselect_QMARK_)){
return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),cljs.core.not);
} else {
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (items){
return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (i,item){
if(cljs.core._EQ_.call(null,i,id)){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null))));
} else {
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}
}),items));
}));
}
});
tse.item.eff.remove_selected = (function tse$item$eff$remove_selected(p__102626){
var map__102627 = p__102626;
var map__102627__$1 = cljs.core.__destructure_map.call(null,map__102627);
var db = cljs.core.get.call(null,map__102627__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (items){
return cljs.core.filterv.call(null,(function (p1__102625_SHARP_){
return cljs.core.not.call(null,cljs.core.get.call(null,p1__102625_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788)));
}),items);
}));
});
tse.item.eff.remove_all = (function tse$item$eff$remove_all(p__102628){
var map__102629 = p__102628;
var map__102629__$1 = cljs.core.__destructure_map.call(null,map__102629);
var db = cljs.core.get.call(null,map__102629__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__102629__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
if(cljs.core.truth_(confirm(cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("toolbar","remove-all-confirmation","toolbar/remove-all-confirmation",-1086959234)], null)))))){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
tse.item.eff.unselect_all = (function tse$item$eff$unselect_all(p__102630){
var map__102631 = p__102630;
var map__102631__$1 = cljs.core.__destructure_map.call(null,map__102631);
var db = cljs.core.get.call(null,map__102631__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
});
tse.item.eff.raise_selected = (function tse$item$eff$raise_selected(p__102632){
var map__102633 = p__102632;
var map__102633__$1 = cljs.core.__destructure_map.call(null,map__102633);
var db = cljs.core.get.call(null,map__102633__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__102633__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var z_index = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null)));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (items){
return cljs.core.mapv.call(null,(function (item){
if(cljs.core.truth_(cljs.core.get.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788)))){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"z-index","z-index",1892827090),z_index);
} else {
return item;
}
}),items);
}));
});
tse.item.eff.edit_item = (function tse$item$eff$edit_item(p__102634){
var map__102635 = p__102634;
var map__102635__$1 = cljs.core.__destructure_map.call(null,map__102635);
var sub = cljs.core.get.call(null,map__102635__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102635__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var selected = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected-indexed","item/selected-indexed",949576907)], null)));
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,selected),(1))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.first.call(null,selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"labels","labels",-626734591))))){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","edit","label-editor/edit",475637492),cljs.core.ffirst.call(null,selected)], null));
} else {
return null;
}
});
tse.item.eff.update_pointers = (function tse$item$eff$update_pointers(p__102636){
var map__102637 = p__102636;
var map__102637__$1 = cljs.core.__destructure_map.call(null,map__102637);
var db = cljs.core.get.call(null,map__102637__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__102638 = cljs.core.get.call(null,map__102637__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var delta = cljs.core.nth.call(null,vec__102638,(0),null);
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"pointers","pointers",985377413),cljs.core._PLUS_,delta);
});
tse.item.eff.spec = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("item","toggle-selected","item/toggle-selected",-877028040),tse.item.eff.toggle_selected,new cljs.core.Keyword("item","remove-selected","item/remove-selected",1396374728),tse.item.eff.remove_selected,new cljs.core.Keyword("item","remove-all","item/remove-all",644753637),tse.item.eff.remove_all,new cljs.core.Keyword("item","unselect-all","item/unselect-all",-1344303452),tse.item.eff.unselect_all,new cljs.core.Keyword("item","raise-selected","item/raise-selected",1542690319),tse.item.eff.raise_selected,new cljs.core.Keyword("item","update-pointers","item/update-pointers",1125899288),tse.item.eff.update_pointers,new cljs.core.Keyword("item","edit","item/edit",-1638790073),tse.item.eff.edit_item], null);

//# sourceMappingURL=eff.js.map?rel=1767875393993
