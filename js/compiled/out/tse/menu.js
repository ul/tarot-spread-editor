// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.menu');
goog.require('cljs.core');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.PopupMenu');
goog.require('goog.ui.Component.EventType');
tse.menu.make_item = (function tse$menu$make_item(p__102707){
var map__102708 = p__102707;
var map__102708__$1 = cljs.core.__destructure_map.call(null,map__102708);
var content = cljs.core.get.call(null,map__102708__$1,new cljs.core.Keyword(null,"content","content",15833224));
var action = cljs.core.get.call(null,map__102708__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var mi = (new goog.ui.MenuItem(cljs.core.deref.call(null,content)));
cljs.core.add_watch.call(null,content,mi,(function (p1__102704_SHARP_,p2__102705_SHARP_,p3__102706_SHARP_,p4__102703_SHARP_){
return mi.setContent(p4__102703_SHARP_);
}));

var G__102709 = mi;
G__102709.addOnDisposeCallback((function (){
return cljs.core.remove_watch.call(null,content,mi);
}));

G__102709.listen(goog.ui.Component.EventType.ACTION,(function (){
return action.call(null,mi);
}));

return G__102709;
});
tse.menu.make_check_item = (function tse$menu$make_check_item(p__102714){
var map__102715 = p__102714;
var map__102715__$1 = cljs.core.__destructure_map.call(null,map__102715);
var props = map__102715__$1;
var checked_QMARK_ = cljs.core.get.call(null,map__102715__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var mi = tse.menu.make_item.call(null,props);
cljs.core.add_watch.call(null,checked_QMARK_,mi,(function (p1__102711_SHARP_,p2__102712_SHARP_,p3__102713_SHARP_,p4__102710_SHARP_){
return mi.setChecked(p4__102710_SHARP_);
}));

var G__102716 = mi;
G__102716.addOnDisposeCallback((function (){
return cljs.core.remove_watch.call(null,checked_QMARK_,mi);
}));

G__102716.setCheckable(true);

G__102716.setChecked(cljs.core.deref.call(null,checked_QMARK_));

return G__102716;
});
tse.menu.make_popup = (function tse$menu$make_popup(items,node,actions){
var pm = (new goog.ui.PopupMenu());
var seq__102717_102722 = cljs.core.seq.call(null,items);
var chunk__102718_102723 = null;
var count__102719_102724 = (0);
var i__102720_102725 = (0);
while(true){
if((i__102720_102725 < count__102719_102724)){
var item_102726 = cljs.core._nth.call(null,chunk__102718_102723,i__102720_102725);
pm.addItem(item_102726);


var G__102727 = seq__102717_102722;
var G__102728 = chunk__102718_102723;
var G__102729 = count__102719_102724;
var G__102730 = (i__102720_102725 + (1));
seq__102717_102722 = G__102727;
chunk__102718_102723 = G__102728;
count__102719_102724 = G__102729;
i__102720_102725 = G__102730;
continue;
} else {
var temp__5818__auto___102731 = cljs.core.seq.call(null,seq__102717_102722);
if(temp__5818__auto___102731){
var seq__102717_102732__$1 = temp__5818__auto___102731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102717_102732__$1)){
var c__5568__auto___102733 = cljs.core.chunk_first.call(null,seq__102717_102732__$1);
var G__102734 = cljs.core.chunk_rest.call(null,seq__102717_102732__$1);
var G__102735 = c__5568__auto___102733;
var G__102736 = cljs.core.count.call(null,c__5568__auto___102733);
var G__102737 = (0);
seq__102717_102722 = G__102734;
chunk__102718_102723 = G__102735;
count__102719_102724 = G__102736;
i__102720_102725 = G__102737;
continue;
} else {
var item_102738 = cljs.core.first.call(null,seq__102717_102732__$1);
pm.addItem(item_102738);


var G__102739 = cljs.core.next.call(null,seq__102717_102732__$1);
var G__102740 = null;
var G__102741 = (0);
var G__102742 = (0);
seq__102717_102722 = G__102739;
chunk__102718_102723 = G__102740;
count__102719_102724 = G__102741;
i__102720_102725 = G__102742;
continue;
}
} else {
}
}
break;
}

var temp__5818__auto___102743 = cljs.core.get.call(null,actions,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));
if(cljs.core.truth_(temp__5818__auto___102743)){
var on_show_102744 = temp__5818__auto___102743;
pm.listen(goog.ui.Component.EventType.SHOW,(function (){
return on_show_102744.call(null,pm);
}));
} else {
}

var G__102721 = pm;
G__102721.render();

G__102721.attach(node,undefined,undefined,true);

return G__102721;
});

//# sourceMappingURL=menu.js.map?rel=1767875394045
