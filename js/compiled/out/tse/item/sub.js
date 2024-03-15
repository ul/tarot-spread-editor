// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.item.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.math');
tse.item.sub.layer_pred = (function tse$item$sub$layer_pred(layer){
return (function (item){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,item,new cljs.core.Keyword(null,"layer","layer",-1601820589)),layer);
});
});
tse.item.sub.all_indexed = (function tse$item$sub$all_indexed(p__32745){
var map__32746 = p__32745;
var map__32746__$1 = cljs.core.__destructure_map.call(null,map__32746);
var sub = cljs.core.get.call(null,map__32746__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (map-indexed vector @(sub [:item/all])))\n"], null));
});
tse.item.sub.layer_indices = (function tse$item$sub$layer_indices(p__32747){
var map__32748 = p__32747;
var map__32748__$1 = cljs.core.__destructure_map.call(null,map__32748);
var vec__32749 = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var layer = cljs.core.nth.call(null,vec__32749,(0),null);
var db = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.comp.call(null,tse.item.sub.layer_pred.call(null,layer),cljs.core.second),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619)], null)))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (map\n  first\n  (filter (comp (layer-pred layer) second) @(sub [:item/all-indexed]))))\n"], null));
});
tse.item.sub.layer_all = (function tse$item$sub$layer_all(p__32752){
var map__32753 = p__32752;
var map__32753__$1 = cljs.core.__destructure_map.call(null,map__32753);
var vec__32754 = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var layer = cljs.core.nth.call(null,vec__32754,(0),null);
var db = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.filter.call(null,tse.item.sub.layer_pred.call(null,layer),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (filter (layer-pred layer) @(sub [:item/all])))\n"], null));
});
tse.item.sub.get_entity = (function tse$item$sub$get_entity(p__32757){
var map__32758 = p__32757;
var map__32758__$1 = cljs.core.__destructure_map.call(null,map__32758);
var vec__32759 = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__32759,(0),null);
var sub = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))),id);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @(sub [:item/all]) id))\n"], null));
});
tse.item.sub.all_selected = (function tse$item$sub$all_selected(p__32763){
var map__32764 = p__32763;
var map__32764__$1 = cljs.core.__destructure_map.call(null,map__32764);
var sub = cljs.core.get.call(null,map__32764__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.filter.call(null,(function (p1__32762_SHARP_){
return cljs.core.get.call(null,p1__32762_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
}),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (filter\n  (fn* [p1__32762#] (get p1__32762# :selected?))\n  @(sub [:item/all])))\n"], null));
});
tse.item.sub.all_selected_indexed = (function tse$item$sub$all_selected_indexed(p__32766){
var map__32767 = p__32766;
var map__32767__$1 = cljs.core.__destructure_map.call(null,map__32767);
var sub = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.filter.call(null,(function (p1__32765_SHARP_){
return cljs.core.get_in.call(null,p1__32765_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null));
}),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (filter\n  (fn* [p1__32765#] (get-in p1__32765# [1 :selected?]))\n  @(sub [:item/all-indexed])))\n"], null));
});
tse.item.sub.big_box = (function tse$item$sub$big_box(p__32768){
var map__32769 = p__32768;
var map__32769__$1 = cljs.core.__destructure_map.call(null,map__32769);
var db = cljs.core.get.call(null,map__32769__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__32769__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.reduce.call(null,tse.math.merge_boxes,cljs.core.map.call(null,tse.math.item_box,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (reduce math/merge-boxes (map math/item-box @(sub [:item/all]))))\n"], null));
});
tse.item.sub.next_z_index = (function tse$item$sub$next_z_index(p__32770){
var map__32771 = p__32770;
var map__32771__$1 = cljs.core.__destructure_map.call(null,map__32771);
var sub = cljs.core.get.call(null,map__32771__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return (cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))))) + (1));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (inc (reduce max 0 (map :z-index @(sub [:item/all])))))\n"], null));
});
tse.item.sub.spec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword("item","all","item/all",884758209),new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619),new cljs.core.Keyword("item","big-box","item/big-box",389513381),new cljs.core.Keyword("item","layer-all","item/layer-all",1203405864),new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425),new cljs.core.Keyword("item","selected-indexed","item/selected-indexed",949576907),new cljs.core.Keyword("item","entity","item/entity",-456572817),new cljs.core.Keyword("item","selected","item/selected",588561277)],[tse.item.sub.layer_indices,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),tse.item.sub.all_indexed,tse.item.sub.big_box,tse.item.sub.layer_all,tse.item.sub.next_z_index,tse.item.sub.all_selected_indexed,tse.item.sub.get_entity,tse.item.sub.all_selected]);

//# sourceMappingURL=sub.js.map?rel=1710474315485
