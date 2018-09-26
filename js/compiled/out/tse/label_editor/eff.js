// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.label_editor.eff');
goog.require('cljs.core');
goog.require('hickory.core');
goog.require('tse.math');
goog.require('tse.utils');
tse.label_editor.eff.new_label = (function tse$label_editor$eff$new_label(p__53716){
var map__53717 = p__53716;
var map__53717__$1 = ((((!((map__53717 == null)))?(((((map__53717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53717):map__53717);
var db = cljs.core.get.call(null,map__53717__$1,new cljs.core.Keyword(null,"db","db",993250759));
var editor_53719 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"editor","editor",-989377770)], null));
editor_53719.setText("\n");

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"id","id",-1388402092),null);
});
tse.label_editor.eff.edit_label = (function tse$label_editor$eff$edit_label(p__53720){
var map__53721 = p__53720;
var map__53721__$1 = ((((!((map__53721 == null)))?(((((map__53721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53721):map__53721);
var vec__53722 = cljs.core.get.call(null,map__53721__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var id = cljs.core.nth.call(null,vec__53722,(0),null);
var db = cljs.core.get.call(null,map__53721__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53721__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var editor = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"editor","editor",-989377770)], null));
var label = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","entity","item/entity",-456572817),id], null)));
editor.setContents(cljs.core.get.call(null,label,new cljs.core.Keyword(null,"quill-content","quill-content",-317286994)));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
tse.label_editor.eff.save_label = (function tse$label_editor$eff$save_label(p__53726){
var map__53727 = p__53726;
var map__53727__$1 = ((((!((map__53727 == null)))?(((((map__53727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53727):map__53727);
var db = cljs.core.get.call(null,map__53727__$1,new cljs.core.Keyword(null,"db","db",993250759));
var emit = cljs.core.get.call(null,map__53727__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var id = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var editor = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),new cljs.core.Keyword(null,"editor","editor",-989377770)], null));
var html = editor.root.innerHTML;
var content = cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,html));
var dimensions = tse.utils.measure_html.call(null,html);
var quill_content = editor.getContents();
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,new cljs.core.Keyword(null,"id","id",-1388402092),null);

return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(id)?new cljs.core.Keyword("label","update","label/update",946911680):new cljs.core.Keyword("label","add","label/add",-1285180881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"original-dimensions","original-dimensions",1495663054),dimensions,new cljs.core.Keyword(null,"quill-content","quill-content",-317286994),quill_content,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions], null),id], null));
});
tse.label_editor.eff.cancel = (function tse$label_editor$eff$cancel(p__53729){
var map__53730 = p__53729;
var map__53730__$1 = ((((!((map__53730 == null)))?(((((map__53730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53730):map__53730);
var db = cljs.core.get.call(null,map__53730__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
});
tse.label_editor.eff.set_editor = (function tse$label_editor$eff$set_editor(p__53732){
var map__53733 = p__53732;
var map__53733__$1 = ((((!((map__53733 == null)))?(((((map__53733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53733):map__53733);
var vec__53734 = cljs.core.get.call(null,map__53733__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var editor = cljs.core.nth.call(null,vec__53734,(0),null);
var db = cljs.core.get.call(null,map__53733__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"label-editor","label-editor",1699457973),cljs.core.assoc,new cljs.core.Keyword(null,"editor","editor",-989377770),editor);
});
tse.label_editor.eff.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("label-editor","new","label-editor/new",163106766),tse.label_editor.eff.new_label,new cljs.core.Keyword("label-editor","edit","label-editor/edit",475637492),tse.label_editor.eff.edit_label,new cljs.core.Keyword("label-editor","save","label-editor/save",-260580089),tse.label_editor.eff.save_label,new cljs.core.Keyword("label-editor","cancel","label-editor/cancel",280252978),tse.label_editor.eff.cancel,new cljs.core.Keyword("label-editor","set-editor","label-editor/set-editor",2105541267),tse.label_editor.eff.set_editor], null);

//# sourceMappingURL=eff.js.map?rel=1537946282638
