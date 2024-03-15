// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.menu');
goog.require('cljs.core');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.PopupMenu');
goog.require('goog.ui.Component.EventType');
tse.menu.make_item = (function tse$menu$make_item(p__36330){
var map__36331 = p__36330;
var map__36331__$1 = cljs.core.__destructure_map.call(null,map__36331);
var content = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"content","content",15833224));
var action = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var mi = (new goog.ui.MenuItem(cljs.core.deref.call(null,content)));
cljs.core.add_watch.call(null,content,mi,(function (p1__36327_SHARP_,p2__36328_SHARP_,p3__36329_SHARP_,p4__36326_SHARP_){
return mi.setContent(p4__36326_SHARP_);
}));

var G__36332 = mi;
G__36332.addOnDisposeCallback((function (){
return cljs.core.remove_watch.call(null,content,mi);
}));

G__36332.listen(goog.ui.Component.EventType.ACTION,(function (){
return action.call(null,mi);
}));

return G__36332;
});
tse.menu.make_check_item = (function tse$menu$make_check_item(p__36337){
var map__36338 = p__36337;
var map__36338__$1 = cljs.core.__destructure_map.call(null,map__36338);
var props = map__36338__$1;
var checked_QMARK_ = cljs.core.get.call(null,map__36338__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var mi = tse.menu.make_item.call(null,props);
cljs.core.add_watch.call(null,checked_QMARK_,mi,(function (p1__36334_SHARP_,p2__36335_SHARP_,p3__36336_SHARP_,p4__36333_SHARP_){
return mi.setChecked(p4__36333_SHARP_);
}));

var G__36339 = mi;
G__36339.addOnDisposeCallback((function (){
return cljs.core.remove_watch.call(null,checked_QMARK_,mi);
}));

G__36339.setCheckable(true);

G__36339.setChecked(cljs.core.deref.call(null,checked_QMARK_));

return G__36339;
});
tse.menu.make_popup = (function tse$menu$make_popup(items,node,actions){
var pm = (new goog.ui.PopupMenu());
var seq__36340_36345 = cljs.core.seq.call(null,items);
var chunk__36341_36346 = null;
var count__36342_36347 = (0);
var i__36343_36348 = (0);
while(true){
if((i__36343_36348 < count__36342_36347)){
var item_36349 = cljs.core._nth.call(null,chunk__36341_36346,i__36343_36348);
pm.addItem(item_36349);


var G__36350 = seq__36340_36345;
var G__36351 = chunk__36341_36346;
var G__36352 = count__36342_36347;
var G__36353 = (i__36343_36348 + (1));
seq__36340_36345 = G__36350;
chunk__36341_36346 = G__36351;
count__36342_36347 = G__36352;
i__36343_36348 = G__36353;
continue;
} else {
var temp__5818__auto___36354 = cljs.core.seq.call(null,seq__36340_36345);
if(temp__5818__auto___36354){
var seq__36340_36355__$1 = temp__5818__auto___36354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36340_36355__$1)){
var c__5568__auto___36356 = cljs.core.chunk_first.call(null,seq__36340_36355__$1);
var G__36357 = cljs.core.chunk_rest.call(null,seq__36340_36355__$1);
var G__36358 = c__5568__auto___36356;
var G__36359 = cljs.core.count.call(null,c__5568__auto___36356);
var G__36360 = (0);
seq__36340_36345 = G__36357;
chunk__36341_36346 = G__36358;
count__36342_36347 = G__36359;
i__36343_36348 = G__36360;
continue;
} else {
var item_36361 = cljs.core.first.call(null,seq__36340_36355__$1);
pm.addItem(item_36361);


var G__36362 = cljs.core.next.call(null,seq__36340_36355__$1);
var G__36363 = null;
var G__36364 = (0);
var G__36365 = (0);
seq__36340_36345 = G__36362;
chunk__36341_36346 = G__36363;
count__36342_36347 = G__36364;
i__36343_36348 = G__36365;
continue;
}
} else {
}
}
break;
}

var temp__5818__auto___36366 = cljs.core.get.call(null,actions,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));
if(cljs.core.truth_(temp__5818__auto___36366)){
var on_show_36367 = temp__5818__auto___36366;
pm.listen(goog.ui.Component.EventType.SHOW,(function (){
return on_show_36367.call(null,pm);
}));
} else {
}

var G__36344 = pm;
G__36344.render();

G__36344.attach(node,undefined,undefined,true);

return G__36344;
});

//# sourceMappingURL=menu.js.map?rel=1710474317724
