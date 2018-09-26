// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.menu');
goog.require('cljs.core');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.PopupMenu');
goog.require('goog.ui.Component.EventType');
tse.menu.make_item = (function tse$menu$make_item(p__53764){
var map__53765 = p__53764;
var map__53765__$1 = ((((!((map__53765 == null)))?(((((map__53765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53765):map__53765);
var content = cljs.core.get.call(null,map__53765__$1,new cljs.core.Keyword(null,"content","content",15833224));
var action = cljs.core.get.call(null,map__53765__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var mi = (new goog.ui.MenuItem(cljs.core.deref.call(null,content)));
cljs.core.add_watch.call(null,content,mi,((function (mi,map__53765,map__53765__$1,content,action){
return (function (p1__53761_SHARP_,p2__53762_SHARP_,p3__53763_SHARP_,p4__53760_SHARP_){
return mi.setContent(p4__53760_SHARP_);
});})(mi,map__53765,map__53765__$1,content,action))
);

var G__53767 = mi;
G__53767.addOnDisposeCallback(((function (G__53767,mi,map__53765,map__53765__$1,content,action){
return (function (){
return cljs.core.remove_watch.call(null,content,mi);
});})(G__53767,mi,map__53765,map__53765__$1,content,action))
);

G__53767.listen(goog.ui.Component.EventType.ACTION,((function (G__53767,mi,map__53765,map__53765__$1,content,action){
return (function (){
return action.call(null,mi);
});})(G__53767,mi,map__53765,map__53765__$1,content,action))
);

return G__53767;
});
tse.menu.make_check_item = (function tse$menu$make_check_item(p__53772){
var map__53773 = p__53772;
var map__53773__$1 = ((((!((map__53773 == null)))?(((((map__53773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53773):map__53773);
var props = map__53773__$1;
var checked_QMARK_ = cljs.core.get.call(null,map__53773__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var mi = tse.menu.make_item.call(null,props);
cljs.core.add_watch.call(null,checked_QMARK_,mi,((function (mi,map__53773,map__53773__$1,props,checked_QMARK_){
return (function (p1__53769_SHARP_,p2__53770_SHARP_,p3__53771_SHARP_,p4__53768_SHARP_){
return mi.setChecked(p4__53768_SHARP_);
});})(mi,map__53773,map__53773__$1,props,checked_QMARK_))
);

var G__53775 = mi;
G__53775.addOnDisposeCallback(((function (G__53775,mi,map__53773,map__53773__$1,props,checked_QMARK_){
return (function (){
return cljs.core.remove_watch.call(null,checked_QMARK_,mi);
});})(G__53775,mi,map__53773,map__53773__$1,props,checked_QMARK_))
);

G__53775.setCheckable(true);

G__53775.setChecked(cljs.core.deref.call(null,checked_QMARK_));

return G__53775;
});
tse.menu.make_popup = (function tse$menu$make_popup(items,node){
var pm = (new goog.ui.PopupMenu());
var seq__53776_53781 = cljs.core.seq.call(null,items);
var chunk__53777_53782 = null;
var count__53778_53783 = (0);
var i__53779_53784 = (0);
while(true){
if((i__53779_53784 < count__53778_53783)){
var item_53785 = cljs.core._nth.call(null,chunk__53777_53782,i__53779_53784);
pm.addItem(item_53785);


var G__53786 = seq__53776_53781;
var G__53787 = chunk__53777_53782;
var G__53788 = count__53778_53783;
var G__53789 = (i__53779_53784 + (1));
seq__53776_53781 = G__53786;
chunk__53777_53782 = G__53787;
count__53778_53783 = G__53788;
i__53779_53784 = G__53789;
continue;
} else {
var temp__5559__auto___53790 = cljs.core.seq.call(null,seq__53776_53781);
if(temp__5559__auto___53790){
var seq__53776_53791__$1 = temp__5559__auto___53790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53776_53791__$1)){
var c__4351__auto___53792 = cljs.core.chunk_first.call(null,seq__53776_53791__$1);
var G__53793 = cljs.core.chunk_rest.call(null,seq__53776_53791__$1);
var G__53794 = c__4351__auto___53792;
var G__53795 = cljs.core.count.call(null,c__4351__auto___53792);
var G__53796 = (0);
seq__53776_53781 = G__53793;
chunk__53777_53782 = G__53794;
count__53778_53783 = G__53795;
i__53779_53784 = G__53796;
continue;
} else {
var item_53797 = cljs.core.first.call(null,seq__53776_53791__$1);
pm.addItem(item_53797);


var G__53798 = cljs.core.next.call(null,seq__53776_53791__$1);
var G__53799 = null;
var G__53800 = (0);
var G__53801 = (0);
seq__53776_53781 = G__53798;
chunk__53777_53782 = G__53799;
count__53778_53783 = G__53800;
i__53779_53784 = G__53801;
continue;
}
} else {
}
}
break;
}

var G__53780 = pm;
G__53780.render();

G__53780.attach(node,undefined,undefined,true);

return G__53780;
});

//# sourceMappingURL=menu.js.map?rel=1537946282712
