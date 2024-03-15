// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.autocomplete');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('carbon.rx');
goog.require('carbon.fsm');
tse.autocomplete.UP = (38);
tse.autocomplete.DOWN = (40);
tse.autocomplete.RETURN = (13);
tse.autocomplete.menu_keys = cljs.core.PersistentHashSet.createAsIfByAssoc([tse.autocomplete.UP,tse.autocomplete.RETURN,tse.autocomplete.DOWN]);
tse.autocomplete.match = (function tse$autocomplete$match(query,item){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)),query);
});
tse.autocomplete.good_query = (function tse$autocomplete$good_query(query){
return (cljs.core.count.call(null,query) >= (3));
});
tse.autocomplete.menu_control_QMARK_ = (function tse$autocomplete$menu_control_QMARK_(p__32352,p__32353){
var map__32354 = p__32352;
var map__32354__$1 = cljs.core.__destructure_map.call(null,map__32354);
var good_query_QMARK_ = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"good-query?","good-query?",1564809385));
var vec__32355 = p__32353;
var event = cljs.core.nth.call(null,vec__32355,(0),null);
var and__5043__auto__ = cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"keydown","keydown",-629268186));
if(and__5043__auto__){
return cljs.core.deref.call(null,good_query_QMARK_);
} else {
return and__5043__auto__;
}
});
tse.autocomplete.return_QMARK_ = (function tse$autocomplete$return_QMARK_(_,p__32358){
var vec__32359 = p__32358;
var ___$1 = cljs.core.nth.call(null,vec__32359,(0),null);
var code = cljs.core.nth.call(null,vec__32359,(1),null);
return cljs.core._EQ_.call(null,tse.autocomplete.RETURN,code);
});
tse.autocomplete.close = (function tse$autocomplete$close(p__32362,_){
var map__32363 = p__32362;
var map__32363__$1 = cljs.core.__destructure_map.call(null,map__32363);
var query = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var position = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
cljs.core.reset_BANG_.call(null,position,(0));

return cljs.core.reset_BANG_.call(null,query,"");
});
tse.autocomplete.search = (function tse$autocomplete$search(p__32364,p__32365){
var map__32366 = p__32364;
var map__32366__$1 = cljs.core.__destructure_map.call(null,map__32366);
var query = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var position = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__32367 = p__32365;
var _ = cljs.core.nth.call(null,vec__32367,(0),null);
var input = cljs.core.nth.call(null,vec__32367,(1),null);
cljs.core.reset_BANG_.call(null,position,(0));

return cljs.core.reset_BANG_.call(null,query,clojure.string.lower_case.call(null,input));
});
tse.autocomplete.clamp = (function tse$autocomplete$clamp(x,op,count){
if((count > (0))){
return cljs.core.mod.call(null,op.call(null,x),count);
} else {
return (0);
}
});
tse.autocomplete.keydown = (function tse$autocomplete$keydown(p__32370,p__32371){
var map__32372 = p__32370;
var map__32372__$1 = cljs.core.__destructure_map.call(null,map__32372);
var position = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var items = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var items_count = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"items-count","items-count",-135458025));
var active = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var vec__32373 = p__32371;
var _ = cljs.core.nth.call(null,vec__32373,(0),null);
var code = cljs.core.nth.call(null,vec__32373,(1),null);
var pred__32376 = cljs.core._EQ_;
var expr__32377 = code;
if(cljs.core.truth_(pred__32376.call(null,tse.autocomplete.UP,expr__32377))){
return cljs.core.swap_BANG_.call(null,position,tse.autocomplete.clamp,cljs.core.dec,cljs.core.deref.call(null,items_count));
} else {
if(cljs.core.truth_(pred__32376.call(null,tse.autocomplete.DOWN,expr__32377))){
return cljs.core.swap_BANG_.call(null,position,tse.autocomplete.clamp,cljs.core.inc,cljs.core.deref.call(null,items_count));
} else {
if(cljs.core.truth_(pred__32376.call(null,tse.autocomplete.RETURN,expr__32377))){
return cljs.core.reset_BANG_.call(null,active,(((cljs.core.deref.call(null,items_count) > (0)))?cljs.core.nth.call(null,cljs.core.deref.call(null,items),cljs.core.deref.call(null,position)):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32377)].join('')));
}
}
}
});
tse.autocomplete.make_fsm = (function tse$autocomplete$make_fsm(active,items){
var query = carbon.rx.cell_STAR_.call(null,"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$ \"\")\n"], null)], null));
var position = carbon.rx.cell_STAR_.call(null,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$ 0)\n"], null)], null));
var matcher = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.partial.call(null,tse.autocomplete.match,cljs.core.deref.call(null,query));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (partial match @query))\n"], null));
var good_query_QMARK_ = carbon.rx.rx_STAR_.call(null,(function (){
return tse.autocomplete.good_query.call(null,cljs.core.deref.call(null,query));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (good-query @query))\n"], null));
var items__$1 = carbon.rx.rx_STAR_.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,good_query_QMARK_))){
return cljs.core.filterv.call(null,cljs.core.deref.call(null,matcher),cljs.core.deref.call(null,items));
} else {
return null;
}
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (when @good-query? (filterv @matcher @items)))\n"], null));
var items_count = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,items__$1));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (count @items))\n"], null));
var enum_items = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.mapv.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.deref.call(null,items__$1));
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (mapv vector (range) @items))\n"], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"good-query?","good-query?",1564809385),good_query_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"items","items",1031954938),items__$1,new cljs.core.Keyword(null,"enum-items","enum-items",-591327116),enum_items,new cljs.core.Keyword(null,"items-count","items-count",-135458025),items_count,new cljs.core.Keyword(null,"active","active",1895962068),active], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.close], null),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"focus","focus",234677911)),new cljs.core.Keyword(null,"open","open",-1763596448)], null)], null)], null),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.menu_control_QMARK_,tse.autocomplete.keydown], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"input","input",556931961)),tse.autocomplete.search], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),(function (p1__32379_SHARP_,p2__32380_SHARP_){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(p1__32379_SHARP_),cljs.core.second.call(null,p2__32380_SHARP_));
})], null)], null),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.and_fn.call(null,tse.autocomplete.menu_control_QMARK_,tse.autocomplete.return_QMARK_),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null)], null)], null)], null);
});
tse.autocomplete.menu = (function tse$autocomplete$menu(dispatch,state,enum_items,position,good_query_QMARK_,hint){
var position__$1 = cljs.core.deref.call(null,position);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu-wrapper",".menu-wrapper",1197330217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,state)))?"open":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pure-menu",".pure-menu",772051190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pure-menu-list","ul.pure-menu-list",1943879978),(cljs.core.truth_(cljs.core.deref.call(null,good_query_QMARK_))?(function (){var iter__5523__auto__ = (function tse$autocomplete$menu_$_iter__32381(s__32382){
return (new cljs.core.LazySeq(null,(function (){
var s__32382__$1 = s__32382;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__32382__$1);
if(temp__5818__auto__){
var s__32382__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32382__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__32382__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__32384 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__32383 = (0);
while(true){
if((i__32383 < size__5522__auto__)){
var vec__32385 = cljs.core._nth.call(null,c__5521__auto__,i__32383);
var i = cljs.core.nth.call(null,vec__32385,(0),null);
var map__32388 = cljs.core.nth.call(null,vec__32385,(1),null);
var map__32388__$1 = cljs.core.__destructure_map.call(null,map__32388);
var item = map__32388__$1;
var label = cljs.core.get.call(null,map__32388__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__32384,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,position__$1,i))?"pure-menu-active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),((function (i__32383,vec__32385,i,map__32388,map__32388__$1,item,label,c__5521__auto__,size__5522__auto__,b__32384,s__32382__$2,temp__5818__auto__,position__$1){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),item], null));
});})(i__32383,vec__32385,i,map__32388,map__32388__$1,item,label,c__5521__auto__,size__5522__auto__,b__32384,s__32382__$2,temp__5818__auto__,position__$1))
], null),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)));

var G__32393 = (i__32383 + (1));
i__32383 = G__32393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32384),tse$autocomplete$menu_$_iter__32381.call(null,cljs.core.chunk_rest.call(null,s__32382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32384),null);
}
} else {
var vec__32389 = cljs.core.first.call(null,s__32382__$2);
var i = cljs.core.nth.call(null,vec__32389,(0),null);
var map__32392 = cljs.core.nth.call(null,vec__32389,(1),null);
var map__32392__$1 = cljs.core.__destructure_map.call(null,map__32392);
var item = map__32392__$1;
var label = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,position__$1,i))?"pure-menu-active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),((function (vec__32389,i,map__32392,map__32392__$1,item,label,s__32382__$2,temp__5818__auto__,position__$1){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),item], null));
});})(vec__32389,i,map__32392,map__32392__$1,item,label,s__32382__$2,temp__5818__auto__,position__$1))
], null),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)),tse$autocomplete$menu_$_iter__32381.call(null,cljs.core.rest.call(null,s__32382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.deref.call(null,enum_items));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),cljs.core.deref.call(null,hint)], null)], null))], null)], null)], null);
});
tse.autocomplete.on_keydown = (function tse$autocomplete$on_keydown(dispatch,e){
var code = e.keyCode;
if(cljs.core.contains_QMARK_.call(null,tse.autocomplete.menu_keys,code)){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),code], null));
} else {
return null;
}
});
tse.autocomplete.input = (function tse$autocomplete$input(dispatch,state,active,query,placeholder){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-input-rounded","input.pure-input-rounded",-192851816),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.deref.call(null,placeholder),new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,state)))?cljs.core.deref.call(null,query):cljs.core.get.call(null,cljs.core.deref.call(null,active),new cljs.core.Keyword(null,"label","label",1718410804))),new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),cljs.core.partial.call(null,tse.autocomplete.on_keydown,dispatch),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__32394_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),p1__32394_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461)], null));
})], null)], null);
});
tse.autocomplete.view = (function tse$autocomplete$view(p__32396){
var map__32397 = p__32396;
var map__32397__$1 = cljs.core.__destructure_map.call(null,map__32397);
var active = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var items = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var state = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"state","state",-1988618099),carbon.rx.cell_STAR_.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$ :idle)\n"], null)], null)));
var placeholder = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var hint = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var vec__32398 = tse.autocomplete.make_fsm.call(null,active,items);
var map__32401 = cljs.core.nth.call(null,vec__32398,(0),null);
var map__32401__$1 = cljs.core.__destructure_map.call(null,map__32401);
var ctx = map__32401__$1;
var query = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var position = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var enum_items = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"enum-items","enum-items",-591327116));
var good_query_QMARK_ = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"good-query?","good-query?",1564809385));
var spec = cljs.core.nth.call(null,vec__32398,(1),null);
var dispatch = cljs.core.partial.call(null,carbon.fsm.execute_BANG_,state,spec,ctx);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form","form.pure-form",322770747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"autocomplete",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__32395_SHARP_){
return p1__32395_SHARP_.preventDefault();
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.input,dispatch,state,active,query,placeholder], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.menu,dispatch,state,enum_items,position,good_query_QMARK_,hint], null)], null);
});
});

//# sourceMappingURL=autocomplete.js.map?rel=1710474315156
