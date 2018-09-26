// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.item.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.math');
tse.item.sub.layer_pred = (function tse$item$sub$layer_pred(layer){
return (function (item){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,item,new cljs.core.Keyword(null,"layer","layer",-1601820589)),layer);
});
});
tse.item.sub.all_indexed = (function tse$item$sub$all_indexed(p__52053){
var map__52054 = p__52053;
var map__52054__$1 = ((((!((map__52054 == null)))?(((((map__52054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52054):map__52054);
var sub = cljs.core.get.call(null,map__52054__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52054,map__52054__$1,sub){
return (function (){
return cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
});})(map__52054,map__52054__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (map-indexed vector @(sub [:item/all])))\n"], null));
});
tse.item.sub.layer_indices = (function tse$item$sub$layer_indices(p__52056){
var map__52057 = p__52056;
var map__52057__$1 = ((((!((map__52057 == null)))?(((((map__52057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52057):map__52057);
var vec__52058 = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var layer = cljs.core.nth.call(null,vec__52058,(0),null);
var db = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52057,map__52057__$1,vec__52058,layer,db,sub){
return (function (){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.comp.call(null,tse.item.sub.layer_pred.call(null,layer),cljs.core.second),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619)], null)))));
});})(map__52057,map__52057__$1,vec__52058,layer,db,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (map\n  first\n  (filter (comp (layer-pred layer) second) @(sub [:item/all-indexed]))))\n"], null));
});
tse.item.sub.layer_all = (function tse$item$sub$layer_all(p__52062){
var map__52063 = p__52062;
var map__52063__$1 = ((((!((map__52063 == null)))?(((((map__52063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52063):map__52063);
var vec__52064 = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var layer = cljs.core.nth.call(null,vec__52064,(0),null);
var db = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52063,map__52063__$1,vec__52064,layer,db,sub){
return (function (){
return cljs.core.filter.call(null,tse.item.sub.layer_pred.call(null,layer),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
});})(map__52063,map__52063__$1,vec__52064,layer,db,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (filter (layer-pred layer) @(sub [:item/all])))\n"], null));
});
tse.item.sub.get_entity = (function tse$item$sub$get_entity(p__52068){
var map__52069 = p__52068;
var map__52069__$1 = ((((!((map__52069 == null)))?(((((map__52069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52069):map__52069);
var vec__52070 = cljs.core.get.call(null,map__52069__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__52070,(0),null);
var sub = cljs.core.get.call(null,map__52069__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52069,map__52069__$1,vec__52070,id,sub){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))),id);
});})(map__52069,map__52069__$1,vec__52070,id,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @(sub [:item/all]) id))\n"], null));
});
tse.item.sub.all_selected = (function tse$item$sub$all_selected(p__52075){
var map__52076 = p__52075;
var map__52076__$1 = ((((!((map__52076 == null)))?(((((map__52076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52076):map__52076);
var sub = cljs.core.get.call(null,map__52076__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52076,map__52076__$1,sub){
return (function (){
return cljs.core.filter.call(null,((function (map__52076,map__52076__$1,sub){
return (function (p1__52074_SHARP_){
return cljs.core.get.call(null,p1__52074_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
});})(map__52076,map__52076__$1,sub))
,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
});})(map__52076,map__52076__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (filter\n  (fn* [p1__52074#] (get p1__52074# :selected?))\n  @(sub [:item/all])))\n"], null));
});
tse.item.sub.all_selected_indexed = (function tse$item$sub$all_selected_indexed(p__52079){
var map__52080 = p__52079;
var map__52080__$1 = ((((!((map__52080 == null)))?(((((map__52080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52080):map__52080);
var sub = cljs.core.get.call(null,map__52080__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52080,map__52080__$1,sub){
return (function (){
return cljs.core.filter.call(null,((function (map__52080,map__52080__$1,sub){
return (function (p1__52078_SHARP_){
return cljs.core.get_in.call(null,p1__52078_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null));
});})(map__52080,map__52080__$1,sub))
,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619)], null))));
});})(map__52080,map__52080__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (filter\n  (fn* [p1__52078#] (get-in p1__52078# [1 :selected?]))\n  @(sub [:item/all-indexed])))\n"], null));
});
tse.item.sub.big_box = (function tse$item$sub$big_box(p__52082){
var map__52083 = p__52082;
var map__52083__$1 = ((((!((map__52083 == null)))?(((((map__52083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52083):map__52083);
var db = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52083,map__52083__$1,db,sub){
return (function (){
return cljs.core.reduce.call(null,tse.math.merge_boxes,cljs.core.map.call(null,tse.math.item_box,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)))));
});})(map__52083,map__52083__$1,db,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (reduce math/merge-boxes (map math/item-box @(sub [:item/all]))))\n"], null));
});
tse.item.sub.next_z_index = (function tse$item$sub$next_z_index(p__52085){
var map__52086 = p__52085;
var map__52086__$1 = ((((!((map__52086 == null)))?(((((map__52086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52086):map__52086);
var sub = cljs.core.get.call(null,map__52086__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,((function (map__52086,map__52086__$1,sub){
return (function (){
return (cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))))) + (1));
});})(map__52086,map__52086__$1,sub))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (inc (reduce max 0 (map :z-index @(sub [:item/all])))))\n"], null));
});
tse.item.sub.spec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword("item","all","item/all",884758209),new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619),new cljs.core.Keyword("item","big-box","item/big-box",389513381),new cljs.core.Keyword("item","layer-all","item/layer-all",1203405864),new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425),new cljs.core.Keyword("item","selected-indexed","item/selected-indexed",949576907),new cljs.core.Keyword("item","entity","item/entity",-456572817),new cljs.core.Keyword("item","selected","item/selected",588561277)],[tse.item.sub.layer_indices,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),tse.item.sub.all_indexed,tse.item.sub.big_box,tse.item.sub.layer_all,tse.item.sub.next_z_index,tse.item.sub.all_selected_indexed,tse.item.sub.get_entity,tse.item.sub.all_selected]);

//# sourceMappingURL=sub.js.map?rel=1537946276422
