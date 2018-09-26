// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
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
tse.autocomplete.menu_control_QMARK_ = (function tse$autocomplete$menu_control_QMARK_(p__52483,p__52484){
var map__52485 = p__52483;
var map__52485__$1 = ((((!((map__52485 == null)))?(((((map__52485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52485):map__52485);
var good_query_QMARK_ = cljs.core.get.call(null,map__52485__$1,new cljs.core.Keyword(null,"good-query?","good-query?",1564809385));
var vec__52486 = p__52484;
var event = cljs.core.nth.call(null,vec__52486,(0),null);
var and__3938__auto__ = cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"keydown","keydown",-629268186));
if(and__3938__auto__){
return cljs.core.deref.call(null,good_query_QMARK_);
} else {
return and__3938__auto__;
}
});
tse.autocomplete.return_QMARK_ = (function tse$autocomplete$return_QMARK_(_,p__52490){
var vec__52491 = p__52490;
var ___$1 = cljs.core.nth.call(null,vec__52491,(0),null);
var code = cljs.core.nth.call(null,vec__52491,(1),null);
return cljs.core._EQ_.call(null,tse.autocomplete.RETURN,code);
});
tse.autocomplete.close = (function tse$autocomplete$close(p__52494,_){
var map__52495 = p__52494;
var map__52495__$1 = ((((!((map__52495 == null)))?(((((map__52495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52495):map__52495);
var query = cljs.core.get.call(null,map__52495__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var position = cljs.core.get.call(null,map__52495__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
cljs.core.reset_BANG_.call(null,position,(0));

return cljs.core.reset_BANG_.call(null,query,"");
});
tse.autocomplete.search = (function tse$autocomplete$search(p__52497,p__52498){
var map__52499 = p__52497;
var map__52499__$1 = ((((!((map__52499 == null)))?(((((map__52499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52499):map__52499);
var query = cljs.core.get.call(null,map__52499__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var position = cljs.core.get.call(null,map__52499__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__52500 = p__52498;
var _ = cljs.core.nth.call(null,vec__52500,(0),null);
var input = cljs.core.nth.call(null,vec__52500,(1),null);
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
tse.autocomplete.keydown = (function tse$autocomplete$keydown(p__52504,p__52505){
var map__52506 = p__52504;
var map__52506__$1 = ((((!((map__52506 == null)))?(((((map__52506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52506):map__52506);
var position = cljs.core.get.call(null,map__52506__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var items = cljs.core.get.call(null,map__52506__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var items_count = cljs.core.get.call(null,map__52506__$1,new cljs.core.Keyword(null,"items-count","items-count",-135458025));
var active = cljs.core.get.call(null,map__52506__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var vec__52507 = p__52505;
var _ = cljs.core.nth.call(null,vec__52507,(0),null);
var code = cljs.core.nth.call(null,vec__52507,(1),null);
var pred__52511 = cljs.core._EQ_;
var expr__52512 = code;
if(cljs.core.truth_(pred__52511.call(null,tse.autocomplete.UP,expr__52512))){
return cljs.core.swap_BANG_.call(null,position,tse.autocomplete.clamp,cljs.core.dec,cljs.core.deref.call(null,items_count));
} else {
if(cljs.core.truth_(pred__52511.call(null,tse.autocomplete.DOWN,expr__52512))){
return cljs.core.swap_BANG_.call(null,position,tse.autocomplete.clamp,cljs.core.inc,cljs.core.deref.call(null,items_count));
} else {
if(cljs.core.truth_(pred__52511.call(null,tse.autocomplete.RETURN,expr__52512))){
return cljs.core.reset_BANG_.call(null,active,(((cljs.core.deref.call(null,items_count) > (0)))?cljs.core.nth.call(null,cljs.core.deref.call(null,items),cljs.core.deref.call(null,position)):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52512)].join('')));
}
}
}
});
tse.autocomplete.make_fsm = (function tse$autocomplete$make_fsm(active,items){
var query = carbon.rx.cell_STAR_.call(null,"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$ \"\")\n"], null)], null));
var position = carbon.rx.cell_STAR_.call(null,(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$ 0)\n"], null)], null));
var matcher = carbon.rx.rx_STAR_.call(null,((function (query,position){
return (function (){
return cljs.core.partial.call(null,tse.autocomplete.match,cljs.core.deref.call(null,query));
});})(query,position))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (partial match @query))\n"], null));
var good_query_QMARK_ = carbon.rx.rx_STAR_.call(null,((function (query,position,matcher){
return (function (){
return tse.autocomplete.good_query.call(null,cljs.core.deref.call(null,query));
});})(query,position,matcher))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (good-query @query))\n"], null));
var items__$1 = carbon.rx.rx_STAR_.call(null,((function (query,position,matcher,good_query_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,good_query_QMARK_))){
return cljs.core.filterv.call(null,cljs.core.deref.call(null,matcher),cljs.core.deref.call(null,items));
} else {
return null;
}
});})(query,position,matcher,good_query_QMARK_))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (when @good-query? (filterv @matcher @items)))\n"], null));
var items_count = carbon.rx.rx_STAR_.call(null,((function (query,position,matcher,good_query_QMARK_,items__$1){
return (function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,items__$1));
});})(query,position,matcher,good_query_QMARK_,items__$1))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (count @items))\n"], null));
var enum_items = carbon.rx.rx_STAR_.call(null,((function (query,position,matcher,good_query_QMARK_,items__$1,items_count){
return (function (){
return cljs.core.mapv.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.deref.call(null,items__$1));
});})(query,position,matcher,good_query_QMARK_,items__$1,items_count))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$$ (mapv vector (range) @items))\n"], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"good-query?","good-query?",1564809385),good_query_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"items","items",1031954938),items__$1,new cljs.core.Keyword(null,"enum-items","enum-items",-591327116),enum_items,new cljs.core.Keyword(null,"items-count","items-count",-135458025),items_count,new cljs.core.Keyword(null,"active","active",1895962068),active], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.close], null),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"focus","focus",234677911)),new cljs.core.Keyword(null,"open","open",-1763596448)], null)], null)], null),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.menu_control_QMARK_,tse.autocomplete.keydown], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"input","input",556931961)),tse.autocomplete.search], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),((function (query,position,matcher,good_query_QMARK_,items__$1,items_count,enum_items){
return (function (p1__52514_SHARP_,p2__52515_SHARP_){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(p1__52514_SHARP_),cljs.core.second.call(null,p2__52515_SHARP_));
});})(query,position,matcher,good_query_QMARK_,items__$1,items_count,enum_items))
], null)], null),new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.on.call(null,new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carbon.fsm.and_fn.call(null,tse.autocomplete.menu_control_QMARK_,tse.autocomplete.return_QMARK_),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null)], null)], null)], null);
});
tse.autocomplete.menu = (function tse$autocomplete$menu(dispatch,state,enum_items,position,good_query_QMARK_,hint){
var position__$1 = cljs.core.deref.call(null,position);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu-wrapper",".menu-wrapper",1197330217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,state)))?"open":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pure-menu",".pure-menu",772051190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pure-menu-list","ul.pure-menu-list",1943879978),(cljs.core.truth_(cljs.core.deref.call(null,good_query_QMARK_))?(function (){var iter__4324__auto__ = ((function (position__$1){
return (function tse$autocomplete$menu_$_iter__52516(s__52517){
return (new cljs.core.LazySeq(null,((function (position__$1){
return (function (){
var s__52517__$1 = s__52517;
while(true){
var temp__5559__auto__ = cljs.core.seq.call(null,s__52517__$1);
if(temp__5559__auto__){
var s__52517__$2 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52517__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__52517__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__52519 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__52518 = (0);
while(true){
if((i__52518 < size__4323__auto__)){
var vec__52520 = cljs.core._nth.call(null,c__4322__auto__,i__52518);
var i = cljs.core.nth.call(null,vec__52520,(0),null);
var map__52523 = cljs.core.nth.call(null,vec__52520,(1),null);
var map__52523__$1 = ((((!((map__52523 == null)))?(((((map__52523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52523):map__52523);
var item = map__52523__$1;
var label = cljs.core.get.call(null,map__52523__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__52519,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,position__$1,i))?"pure-menu-active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),((function (i__52518,vec__52520,i,map__52523,map__52523__$1,item,label,c__4322__auto__,size__4323__auto__,b__52519,s__52517__$2,temp__5559__auto__,position__$1){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),item], null));
});})(i__52518,vec__52520,i,map__52523,map__52523__$1,item,label,c__4322__auto__,size__4323__auto__,b__52519,s__52517__$2,temp__5559__auto__,position__$1))
], null),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)));

var G__52530 = (i__52518 + (1));
i__52518 = G__52530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52519),tse$autocomplete$menu_$_iter__52516.call(null,cljs.core.chunk_rest.call(null,s__52517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52519),null);
}
} else {
var vec__52525 = cljs.core.first.call(null,s__52517__$2);
var i = cljs.core.nth.call(null,vec__52525,(0),null);
var map__52528 = cljs.core.nth.call(null,vec__52525,(1),null);
var map__52528__$1 = ((((!((map__52528 == null)))?(((((map__52528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52528):map__52528);
var item = map__52528__$1;
var label = cljs.core.get.call(null,map__52528__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,position__$1,i))?"pure-menu-active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),((function (vec__52525,i,map__52528,map__52528__$1,item,label,s__52517__$2,temp__5559__auto__,position__$1){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),item], null));
});})(vec__52525,i,map__52528,map__52528__$1,item,label,s__52517__$2,temp__5559__auto__,position__$1))
], null),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)),tse$autocomplete$menu_$_iter__52516.call(null,cljs.core.rest.call(null,s__52517__$2)));
}
} else {
return null;
}
break;
}
});})(position__$1))
,null,null));
});})(position__$1))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,enum_items));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-input-rounded","input.pure-input-rounded",-192851816),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.deref.call(null,placeholder),new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,state)))?cljs.core.deref.call(null,query):cljs.core.get.call(null,cljs.core.deref.call(null,active),new cljs.core.Keyword(null,"label","label",1718410804))),new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),cljs.core.partial.call(null,tse.autocomplete.on_keydown,dispatch),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__52531_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),p1__52531_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461)], null));
})], null)], null);
});
tse.autocomplete.view = (function tse$autocomplete$view(p__52533){
var map__52534 = p__52533;
var map__52534__$1 = ((((!((map__52534 == null)))?(((((map__52534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52534):map__52534);
var active = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var items = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var state = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"state","state",-1988618099),carbon.rx.cell_STAR_.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/$ :idle)\n"], null)], null)));
var placeholder = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var hint = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var vec__52536 = tse.autocomplete.make_fsm.call(null,active,items);
var map__52539 = cljs.core.nth.call(null,vec__52536,(0),null);
var map__52539__$1 = ((((!((map__52539 == null)))?(((((map__52539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52539):map__52539);
var ctx = map__52539__$1;
var query = cljs.core.get.call(null,map__52539__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var position = cljs.core.get.call(null,map__52539__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var enum_items = cljs.core.get.call(null,map__52539__$1,new cljs.core.Keyword(null,"enum-items","enum-items",-591327116));
var good_query_QMARK_ = cljs.core.get.call(null,map__52539__$1,new cljs.core.Keyword(null,"good-query?","good-query?",1564809385));
var spec = cljs.core.nth.call(null,vec__52536,(1),null);
var dispatch = cljs.core.partial.call(null,carbon.fsm.execute_BANG_,state,spec,ctx);
return ((function (vec__52536,map__52539,map__52539__$1,ctx,query,position,enum_items,good_query_QMARK_,spec,dispatch,map__52534,map__52534__$1,active,items,state,placeholder,hint){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form","form.pure-form",322770747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"autocomplete",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (vec__52536,map__52539,map__52539__$1,ctx,query,position,enum_items,good_query_QMARK_,spec,dispatch,map__52534,map__52534__$1,active,items,state,placeholder,hint){
return (function (p1__52532_SHARP_){
return p1__52532_SHARP_.preventDefault();
});})(vec__52536,map__52539,map__52539__$1,ctx,query,position,enum_items,good_query_QMARK_,spec,dispatch,map__52534,map__52534__$1,active,items,state,placeholder,hint))
], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.input,dispatch,state,active,query,placeholder], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.autocomplete.menu,dispatch,state,enum_items,position,good_query_QMARK_,hint], null)], null);
});
;})(vec__52536,map__52539,map__52539__$1,ctx,query,position,enum_items,good_query_QMARK_,spec,dispatch,map__52534,map__52534__$1,active,items,state,placeholder,hint))
});

//# sourceMappingURL=autocomplete.js.map?rel=1537946277619
