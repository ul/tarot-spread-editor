// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.dialog');
goog.require('cljs.core');
goog.require('carbon.vdom');
goog.require('goog.ui.Dialog');
goog.require('goog.ui.Component');
tse.dialog.make = (function tse$dialog$make(p__32464){
var map__32465 = p__32464;
var map__32465__$1 = cljs.core.__destructure_map.call(null,map__32465);
var view = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var title = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"title","title",636505583));
var visible_QMARK_ = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var handlers = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var dialog = (new goog.ui.Dialog());
var buttons = dialog.getButtonElement().children;
var content = (function (){var G__32466 = (new goog.ui.Component());
G__32466.createDom();

return G__32466;
})();
var element = content.getElement();
var n__5636__auto___32468 = buttons.length;
var i_32469 = (0);
while(true){
if((i_32469 < n__5636__auto___32468)){
(buttons[i_32469]).classList.add("pure-button");

var G__32470 = (i_32469 + (1));
i_32469 = G__32470;
continue;
} else {
}
break;
}

carbon.vdom.mount.call(null,view,element);

cljs.core.add_watch.call(null,visible_QMARK_,dialog,(function (p1__32457_SHARP_,p2__32458_SHARP_,p3__32459_SHARP_,p4__32456_SHARP_){
return dialog.setVisible(p4__32456_SHARP_);
}));

cljs.core.add_watch.call(null,title,dialog,(function (p1__32461_SHARP_,p2__32462_SHARP_,p3__32463_SHARP_,p4__32460_SHARP_){
return dialog.setTitle(p4__32460_SHARP_);
}));

var G__32467 = dialog;
G__32467.addOnDisposeCallback((function (){
cljs.core.remove_watch.call(null,title,dialog);

return cljs.core.remove_watch.call(null,visible_QMARK_,dialog);
}));

G__32467.setTitle(cljs.core.deref.call(null,title));

G__32467.setVisible(cljs.core.deref.call(null,visible_QMARK_));

G__32467.addChild(content,true);

G__32467.listen(goog.ui.Dialog.EventType.SELECT,(function (e){
var temp__5818__auto__ = cljs.core.get.call(null,handlers,e.key);
if(cljs.core.truth_(temp__5818__auto__)){
var f = temp__5818__auto__;
return f.call(null,dialog);
} else {
return null;
}
}));

return G__32467;
});

//# sourceMappingURL=dialog.js.map?rel=1710474315216
