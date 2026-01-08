// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.dialog');
goog.require('cljs.core');
goog.require('carbon.vdom');
goog.require('goog.ui.Dialog');
goog.require('goog.ui.Component');
tse.dialog.make = (function tse$dialog$make(p__98796){
var map__98797 = p__98796;
var map__98797__$1 = cljs.core.__destructure_map.call(null,map__98797);
var view = cljs.core.get.call(null,map__98797__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var title = cljs.core.get.call(null,map__98797__$1,new cljs.core.Keyword(null,"title","title",636505583));
var visible_QMARK_ = cljs.core.get.call(null,map__98797__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var handlers = cljs.core.get.call(null,map__98797__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var dialog = (new goog.ui.Dialog());
var buttons = dialog.getButtonElement().children;
var content = (function (){var G__98798 = (new goog.ui.Component());
G__98798.createDom();

return G__98798;
})();
var element = content.getElement();
var n__5636__auto___98800 = buttons.length;
var i_98801 = (0);
while(true){
if((i_98801 < n__5636__auto___98800)){
(buttons[i_98801]).classList.add("pure-button");

var G__98802 = (i_98801 + (1));
i_98801 = G__98802;
continue;
} else {
}
break;
}

carbon.vdom.mount.call(null,view,element);

cljs.core.add_watch.call(null,visible_QMARK_,dialog,(function (p1__98789_SHARP_,p2__98790_SHARP_,p3__98791_SHARP_,p4__98788_SHARP_){
return dialog.setVisible(p4__98788_SHARP_);
}));

cljs.core.add_watch.call(null,title,dialog,(function (p1__98793_SHARP_,p2__98794_SHARP_,p3__98795_SHARP_,p4__98792_SHARP_){
return dialog.setTitle(p4__98792_SHARP_);
}));

var G__98799 = dialog;
G__98799.addOnDisposeCallback((function (){
cljs.core.remove_watch.call(null,title,dialog);

return cljs.core.remove_watch.call(null,visible_QMARK_,dialog);
}));

G__98799.setTitle(cljs.core.deref.call(null,title));

G__98799.setVisible(cljs.core.deref.call(null,visible_QMARK_));

G__98799.addChild(content,true);

G__98799.listen(goog.ui.Dialog.EventType.SELECT,(function (e){
var temp__5818__auto__ = cljs.core.get.call(null,handlers,e.key);
if(cljs.core.truth_(temp__5818__auto__)){
var f = temp__5818__auto__;
return f.call(null,dialog);
} else {
return null;
}
}));

return G__98799;
});

//# sourceMappingURL=dialog.js.map?rel=1767875391509
