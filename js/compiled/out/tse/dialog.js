// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.dialog');
goog.require('cljs.core');
goog.require('carbon.vdom');
goog.require('goog.ui.Dialog');
goog.require('goog.ui.Component');
tse.dialog.make = (function tse$dialog$make(p__51895){
var map__51896 = p__51895;
var map__51896__$1 = ((((!((map__51896 == null)))?(((((map__51896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51896):map__51896);
var view = cljs.core.get.call(null,map__51896__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var title = cljs.core.get.call(null,map__51896__$1,new cljs.core.Keyword(null,"title","title",636505583));
var visible_QMARK_ = cljs.core.get.call(null,map__51896__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var handlers = cljs.core.get.call(null,map__51896__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var dialog = (new goog.ui.Dialog());
var buttons = dialog.getButtonElement().children;
var content = (function (){var G__51898 = (new goog.ui.Component());
G__51898.createDom();

return G__51898;
})();
var element = content.getElement();
var n__4408__auto___51900 = buttons.length;
var i_51901 = (0);
while(true){
if((i_51901 < n__4408__auto___51900)){
(buttons[i_51901]).classList.add("pure-button");

var G__51902 = (i_51901 + (1));
i_51901 = G__51902;
continue;
} else {
}
break;
}

carbon.vdom.mount.call(null,view,element);

cljs.core.add_watch.call(null,visible_QMARK_,dialog,((function (dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers){
return (function (p1__51888_SHARP_,p2__51889_SHARP_,p3__51890_SHARP_,p4__51887_SHARP_){
return dialog.setVisible(p4__51887_SHARP_);
});})(dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers))
);

cljs.core.add_watch.call(null,title,dialog,((function (dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers){
return (function (p1__51892_SHARP_,p2__51893_SHARP_,p3__51894_SHARP_,p4__51891_SHARP_){
return dialog.setTitle(p4__51891_SHARP_);
});})(dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers))
);

var G__51899 = dialog;
G__51899.addOnDisposeCallback(((function (G__51899,dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers){
return (function (){
cljs.core.remove_watch.call(null,title,dialog);

return cljs.core.remove_watch.call(null,visible_QMARK_,dialog);
});})(G__51899,dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers))
);

G__51899.setTitle(cljs.core.deref.call(null,title));

G__51899.setVisible(cljs.core.deref.call(null,visible_QMARK_));

G__51899.addChild(content,true);

G__51899.listen(goog.ui.Dialog.EventType.SELECT,((function (G__51899,dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers){
return (function (e){
var temp__5559__auto__ = cljs.core.get.call(null,handlers,e.key);
if(cljs.core.truth_(temp__5559__auto__)){
var f = temp__5559__auto__;
return f.call(null,dialog);
} else {
return null;
}
});})(G__51899,dialog,buttons,content,element,map__51896,map__51896__$1,view,title,visible_QMARK_,handlers))
);

return G__51899;
});

//# sourceMappingURL=dialog.js.map?rel=1537946275907
