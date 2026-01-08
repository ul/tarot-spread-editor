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
tse.item.sub.all_indexed = (function tse$item$sub$all_indexed(p__99077){
var map__99078 = p__99077;
var map__99078__$1 = cljs.core.__destructure_map.call(null,map__99078);
var sub = cljs.core.get.call(null,map__99078__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (map-indexed vector @(sub [:item/all])))\n"], null));
});
tse.item.sub.layer_indices = (function tse$item$sub$layer_indices(p__99079){
var map__99080 = p__99079;
var map__99080__$1 = cljs.core.__destructure_map.call(null,map__99080);
var vec__99081 = cljs.core.get.call(null,map__99080__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var layer = cljs.core.nth.call(null,vec__99081,(0),null);
var db = cljs.core.get.call(null,map__99080__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__99080__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.comp.call(null,tse.item.sub.layer_pred.call(null,layer),cljs.core.second),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619)], null)))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (map\n  first\n  (filter (comp (layer-pred layer) second) @(sub [:item/all-indexed]))))\n"], null));
});
tse.item.sub.layer_all = (function tse$item$sub$layer_all(p__99084){
var map__99085 = p__99084;
var map__99085__$1 = cljs.core.__destructure_map.call(null,map__99085);
var vec__99086 = cljs.core.get.call(null,map__99085__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var layer = cljs.core.nth.call(null,vec__99086,(0),null);
var db = cljs.core.get.call(null,map__99085__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__99085__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.filter.call(null,tse.item.sub.layer_pred.call(null,layer),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (filter (layer-pred layer) @(sub [:item/all])))\n"], null));
});
tse.item.sub.get_entity = (function tse$item$sub$get_entity(p__99089){
var map__99090 = p__99089;
var map__99090__$1 = cljs.core.__destructure_map.call(null,map__99090);
var vec__99091 = cljs.core.get.call(null,map__99090__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__99091,(0),null);
var sub = cljs.core.get.call(null,map__99090__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))),id);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (get @(sub [:item/all]) id))\n"], null));
});
tse.item.sub.all_selected = (function tse$item$sub$all_selected(p__99095){
var map__99096 = p__99095;
var map__99096__$1 = cljs.core.__destructure_map.call(null,map__99096);
var sub = cljs.core.get.call(null,map__99096__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.filter.call(null,(function (p1__99094_SHARP_){
return cljs.core.get.call(null,p1__99094_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
}),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (filter\n  (fn* [p1__99094#] (get p1__99094# :selected?))\n  @(sub [:item/all])))\n"], null));
});
tse.item.sub.all_selected_indexed = (function tse$item$sub$all_selected_indexed(p__99098){
var map__99099 = p__99098;
var map__99099__$1 = cljs.core.__destructure_map.call(null,map__99099);
var sub = cljs.core.get.call(null,map__99099__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.filter.call(null,(function (p1__99097_SHARP_){
return cljs.core.get_in.call(null,p1__99097_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null));
}),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619)], null))));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (filter\n  (fn* [p1__99097#] (get-in p1__99097# [1 :selected?]))\n  @(sub [:item/all-indexed])))\n"], null));
});
tse.item.sub.big_box = (function tse$item$sub$big_box(p__99100){
var map__99101 = p__99100;
var map__99101__$1 = cljs.core.__destructure_map.call(null,map__99101);
var sub = cljs.core.get.call(null,map__99101__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
var items = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)));
if(cljs.core.seq.call(null,items)){
var items__$1 = items;
var left = Infinity;
var top = Infinity;
var right = -Infinity;
var bottom = -Infinity;
while(true){
var temp__5816__auto__ = cljs.core.first.call(null,items__$1);
if(cljs.core.truth_(temp__5816__auto__)){
var map__99109 = temp__5816__auto__;
var map__99109__$1 = cljs.core.__destructure_map.call(null,map__99109);
var vec__99110 = cljs.core.get.call(null,map__99109__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__99110,(0),null);
var y = cljs.core.nth.call(null,vec__99110,(1),null);
var vec__99113 = cljs.core.get.call(null,map__99109__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__99113,(0),null);
var h = cljs.core.nth.call(null,vec__99113,(1),null);
var angle = cljs.core.get.call(null,map__99109__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var w2 = (0.5 * w);
var h2 = (0.5 * h);
var x0 = (x + w2);
var y0 = (y + h2);
var cos = Math.cos(angle);
var sin = Math.sin(angle);
var x1 = (x0 + (((- w2) * cos) + (h2 * sin)));
var y1 = (y0 + (((- w2) * sin) - (h2 * cos)));
var x2 = (x0 + (((- w2) * cos) - (h2 * sin)));
var y2 = (y0 + (((- w2) * sin) + (h2 * cos)));
var x3 = (x0 + ((w2 * cos) - (h2 * sin)));
var y3 = (y0 + ((w2 * sin) + (h2 * cos)));
var x4 = (x0 + ((w2 * cos) + (h2 * sin)));
var y4 = (y0 + ((w2 * sin) - (h2 * cos)));
var G__99116 = cljs.core.next.call(null,items__$1);
var G__99117 = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = left;
var y__5134__auto__ = x1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = x2;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = x3;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = x4;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var G__99118 = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = top;
var y__5134__auto__ = y1;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = y2;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = y3;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = y4;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var G__99119 = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = right;
var y__5131__auto__ = x1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = x2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = x3;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = x4;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__99120 = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = bottom;
var y__5131__auto__ = y1;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = y2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = y3;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = y4;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
items__$1 = G__99116;
left = G__99117;
top = G__99118;
right = G__99119;
bottom = G__99120;
continue;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top,right,bottom], null);
}
break;
}
} else {
return null;
}
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (let\n  [items @(sub [:item/all])]\n  (when\n   (seq items)\n   (loop\n    [items items left ##Inf top ##Inf right ##-Inf bottom ##-Inf]\n    (if-let\n     [{[x y] :origin, [w h] :dimensions, angle :angle} (first items)]\n     (let\n      [w2\n       (* 0.5 w)\n       h2\n       (* 0.5 h)\n       x0\n       (+ x w2)\n       y0\n       (+ y h2)\n       cos\n       (Math/cos angle)\n       sin\n       (Math/sin angle)\n       x1\n       (+ x0 (+ (* (- w2) cos) (* h2 sin)))\n       y1\n       (+ y0 (- (* (- w2) sin) (* h2 cos)))\n       x2\n       (+ x0 (- (* (- w2) cos) (* h2 sin)))\n       y2\n       (+ y0 (+ (* (- w2) sin) (* h2 cos)))\n       x3\n       (+ x0 (- (* w2 cos) (* h2 sin)))\n       y3\n       (+ y0 (+ (* w2 sin) (* h2 cos)))\n       x4\n       (+ x0 (+ (* w2 cos) (* h2 sin)))\n       y4\n       (+ y0 (- (* w2 sin) (* h2 cos)))]\n      (recur\n       (next items)\n       (min left x1 x2 x3 x4)\n       (min top y1 y2 y3 y4)\n       (max right x1 x2 x3 x4)\n       (max bottom y1 y2 y3 y4)))\n     [left top right bottom])))))\n"], null));
});
tse.item.sub.next_z_index = (function tse$item$sub$next_z_index(p__99121){
var map__99122 = p__99121;
var map__99122__$1 = cljs.core.__destructure_map.call(null,map__99122);
var sub = cljs.core.get.call(null,map__99122__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return carbon.rx.rx_STAR_.call(null,(function (){
return (cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null))))) + (1));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx\n (inc (reduce max 0 (map :z-index @(sub [:item/all])))))\n"], null));
});
tse.item.sub.spec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword("item","all","item/all",884758209),new cljs.core.Keyword("item","all-indexed","item/all-indexed",1342959619),new cljs.core.Keyword("item","big-box","item/big-box",389513381),new cljs.core.Keyword("item","layer-all","item/layer-all",1203405864),new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425),new cljs.core.Keyword("item","selected-indexed","item/selected-indexed",949576907),new cljs.core.Keyword("item","entity","item/entity",-456572817),new cljs.core.Keyword("item","pointers","item/pointers",563296184),new cljs.core.Keyword("item","selected","item/selected",588561277)],[tse.item.sub.layer_indices,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),tse.item.sub.all_indexed,tse.item.sub.big_box,tse.item.sub.layer_all,tse.item.sub.next_z_index,tse.item.sub.all_selected_indexed,tse.item.sub.get_entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointers","pointers",985377413)], null),tse.item.sub.all_selected]);

//# sourceMappingURL=sub.js.map?rel=1767875391761
