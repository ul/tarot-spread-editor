// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.item.eff');
goog.require('cljs.core');
goog.require('tse.utils');
tse.item.eff.toggle_selected = (function tse$item$eff$toggle_selected(p__53677){
var map__53678 = p__53677;
var map__53678__$1 = ((((!((map__53678 == null)))?(((((map__53678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53678):map__53678);
var vec__53679 = cljs.core.get.call(null,map__53678__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__53679,(0),null);
var multiselect_QMARK_ = cljs.core.nth.call(null,vec__53679,(1),null);
var db = cljs.core.get.call(null,map__53678__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53678__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
if(cljs.core.truth_(multiselect_QMARK_)){
return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),cljs.core.not);
} else {
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),((function (map__53678,map__53678__$1,vec__53679,id,multiselect_QMARK_,db,sub){
return (function (items){
return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (map__53678,map__53678__$1,vec__53679,id,multiselect_QMARK_,db,sub){
return (function (i,item){
if(cljs.core._EQ_.call(null,i,id)){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null))));
} else {
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}
});})(map__53678,map__53678__$1,vec__53679,id,multiselect_QMARK_,db,sub))
,items));
});})(map__53678,map__53678__$1,vec__53679,id,multiselect_QMARK_,db,sub))
);
}
});
tse.item.eff.remove_selected = (function tse$item$eff$remove_selected(p__53684){
var map__53685 = p__53684;
var map__53685__$1 = ((((!((map__53685 == null)))?(((((map__53685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53685):map__53685);
var db = cljs.core.get.call(null,map__53685__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),((function (map__53685,map__53685__$1,db){
return (function (items){
return cljs.core.filterv.call(null,((function (map__53685,map__53685__$1,db){
return (function (p1__53683_SHARP_){
return cljs.core.not.call(null,cljs.core.get.call(null,p1__53683_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788)));
});})(map__53685,map__53685__$1,db))
,items);
});})(map__53685,map__53685__$1,db))
);
});
tse.item.eff.remove_all = (function tse$item$eff$remove_all(p__53687){
var map__53688 = p__53687;
var map__53688__$1 = ((((!((map__53688 == null)))?(((((map__53688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53688):map__53688);
var db = cljs.core.get.call(null,map__53688__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY);
});
tse.item.eff.unselect_all = (function tse$item$eff$unselect_all(p__53690){
var map__53691 = p__53690;
var map__53691__$1 = ((((!((map__53691 == null)))?(((((map__53691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53691):map__53691);
var db = cljs.core.get.call(null,map__53691__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
});
tse.item.eff.raise_selected = (function tse$item$eff$raise_selected(p__53693){
var map__53694 = p__53693;
var map__53694__$1 = ((((!((map__53694 == null)))?(((((map__53694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53694):map__53694);
var db = cljs.core.get.call(null,map__53694__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53694__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var z_index = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null)));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),((function (z_index,map__53694,map__53694__$1,db,sub){
return (function (items){
return cljs.core.mapv.call(null,((function (z_index,map__53694,map__53694__$1,db,sub){
return (function (item){
if(cljs.core.truth_(cljs.core.get.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788)))){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"z-index","z-index",1892827090),z_index);
} else {
return item;
}
});})(z_index,map__53694,map__53694__$1,db,sub))
,items);
});})(z_index,map__53694,map__53694__$1,db,sub))
);
});
tse.item.eff.edit_item = (function tse$item$eff$edit_item(p__53696){
var map__53697 = p__53696;
var map__53697__$1 = ((((!((map__53697 == null)))?(((((map__53697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53697):map__53697);
var sub = cljs.core.get.call(null,map__53697__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53697__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var selected = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","selected-indexed","item/selected-indexed",949576907)], null)));
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,selected),(1))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.first.call(null,selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"labels","labels",-626734591))))){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","edit","label-editor/edit",475637492),cljs.core.ffirst.call(null,selected)], null));
} else {
return null;
}
});
tse.item.eff.spec = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("item","toggle-selected","item/toggle-selected",-877028040),tse.item.eff.toggle_selected,new cljs.core.Keyword("item","remove-selected","item/remove-selected",1396374728),tse.item.eff.remove_selected,new cljs.core.Keyword("item","remove-all","item/remove-all",644753637),tse.item.eff.remove_all,new cljs.core.Keyword("item","unselect-all","item/unselect-all",-1344303452),tse.item.eff.unselect_all,new cljs.core.Keyword("item","raise-selected","item/raise-selected",1542690319),tse.item.eff.raise_selected,new cljs.core.Keyword("item","edit","item/edit",-1638790073),tse.item.eff.edit_item], null);

//# sourceMappingURL=eff.js.map?rel=1537946282366
