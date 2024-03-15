// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.label_editor.eff');
goog.require('cljs.core');
goog.require('hickory.core');
goog.require('tse.math');
goog.require('tse.utils');
tse.label_editor.eff.new_label = (function tse$label_editor$eff$new_label(p__36285){
var map__36286 = p__36285;
var map__36286__$1 = cljs.core.__destructure_map.call(null,map__36286);
var db = cljs.core.get.call(null,map__36286__$1,new cljs.core.Keyword(null,"db","db",993250759));
var editor_36287 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"editor","editor",-989377770)], null));
editor_36287.setText("\n");

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"id","id",-1388402092),null);
});
tse.label_editor.eff.edit_label = (function tse$label_editor$eff$edit_label(p__36288){
var map__36289 = p__36288;
var map__36289__$1 = cljs.core.__destructure_map.call(null,map__36289);
var vec__36290 = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__36290,(0),null);
var db = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var editor = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"editor","editor",-989377770)], null));
var label = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","entity","item/entity",-456572817),id], null)));
editor.setContents((new Delta(cljs.core.clj__GT_js.call(null,cljs.core.get.call(null,label,new cljs.core.Keyword(null,"quill-content","quill-content",-317286994))))));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
tse.label_editor.eff.save_label = (function tse$label_editor$eff$save_label(p__36293){
var map__36294 = p__36293;
var map__36294__$1 = cljs.core.__destructure_map.call(null,map__36294);
var db = cljs.core.get.call(null,map__36294__$1,new cljs.core.Keyword(null,"db","db",993250759));
var emit = cljs.core.get.call(null,map__36294__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var id = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var editor = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"editor","editor",-989377770)], null));
var html = editor.root.innerHTML;
var content = cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,html));
var dimensions = cljs.core.mapv.call(null,cljs.core.inc,tse.utils.measure_html.call(null,html));
var quill_content = cljs.core.js__GT_clj.call(null,(editor.getContents()["ops"]));
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,new cljs.core.Keyword(null,"id","id",-1388402092),null);

return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(id)?new cljs.core.Keyword("label","update","label/update",946911680):new cljs.core.Keyword("label","add","label/add",-1285180881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"original-dimensions","original-dimensions",1495663054),dimensions,new cljs.core.Keyword(null,"quill-content","quill-content",-317286994),quill_content,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions], null),id], null));
});
tse.label_editor.eff.cancel = (function tse$label_editor$eff$cancel(p__36295){
var map__36296 = p__36295;
var map__36296__$1 = cljs.core.__destructure_map.call(null,map__36296);
var db = cljs.core.get.call(null,map__36296__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
});
tse.label_editor.eff.set_editor = (function tse$label_editor$eff$set_editor(p__36297){
var map__36298 = p__36297;
var map__36298__$1 = cljs.core.__destructure_map.call(null,map__36298);
var vec__36299 = cljs.core.get.call(null,map__36298__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var editor = cljs.core.nth.call(null,vec__36299,(0),null);
var db = cljs.core.get.call(null,map__36298__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"editor","editor",-989377770),editor);
});
tse.label_editor.eff.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("label-editor","new","label-editor/new",163106766),tse.label_editor.eff.new_label,new cljs.core.Keyword("label-editor","edit","label-editor/edit",475637492),tse.label_editor.eff.edit_label,new cljs.core.Keyword("label-editor","save","label-editor/save",-260580089),tse.label_editor.eff.save_label,new cljs.core.Keyword("label-editor","cancel","label-editor/cancel",280252978),tse.label_editor.eff.cancel,new cljs.core.Keyword("label-editor","set-editor","label-editor/set-editor",2105541267),tse.label_editor.eff.set_editor], null);

//# sourceMappingURL=eff.js.map?rel=1710474317709
