// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.label_editor');
goog.require('cljs.core');
goog.require('carbon.vdom');
goog.require('cljsjs.quill');
goog.require('tse.dialog');
var Parchment_51905 = Quill.import("parchment");
var ColorAttributor_51906 = Quill.import("attributors/style/color").constructor;
var BackgroundStyle_51907 = (new ColorAttributor_51906("background","background-color",({"scope": Parchment_51905.Scope.BLOCK})));
Quill.register("formats/background",BackgroundStyle_51907);
tse.label_editor.editor_options = ({"theme": "snow", "formats": ["font","size","bold","italic","underline","strike","color","background"], "modules": ({"toolbar": [[({"font": []})],[({"size": []})],["bold","italic","underline","strike"],[({"color": []}),({"background": []})],["clean"]]})});
tse.label_editor.init_editor = (function tse$label_editor$init_editor(p__51908,_STAR_node){
var map__51909 = p__51908;
var map__51909__$1 = ((((!((map__51909 == null)))?(((((map__51909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51909):map__51909);
var sub = cljs.core.get.call(null,map__51909__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__51909__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__51909,map__51909__$1,sub,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","set-editor","label-editor/set-editor",2105541267),(new Quill(node,tse.label_editor.editor_options))], null));
} else {
console.log("FIXME Dispose Quill");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__51909,map__51909__$1,sub,emit))
});
tse.label_editor.content_editor = (function tse$label_editor$content_editor(ctx){
var node = cljs.core.atom.call(null,null);
return ((function (node){
return (function (ctx__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tse.label_editor.init_editor.call(null,ctx__$1,node)], null)], null);
});
;})(node))
});
tse.label_editor.init_dialog = (function tse$label_editor$init_dialog(p__51911,dialog,_STAR_node){
var map__51912 = p__51911;
var map__51912__$1 = ((((!((map__51912 == null)))?(((((map__51912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51912):map__51912);
var ctx = map__51912__$1;
var sub = cljs.core.get.call(null,map__51912__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__51912__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__51912,map__51912__$1,ctx,sub,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
cljs.core.reset_BANG_.call(null,dialog,tse.dialog.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","visible?","label-editor/visible?",11873849)], null)),new cljs.core.Keyword(null,"title","title",636505583),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("label-editor","title","label-editor/title",-1548338027),"Label"], null)),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label_editor.content_editor,ctx], null),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, ["ok",((function (map__51912,map__51912__$1,ctx,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","save","label-editor/save",-260580089)], null));
});})(map__51912,map__51912__$1,ctx,sub,emit))
,"cancel",((function (map__51912,map__51912__$1,ctx,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","cancel","label-editor/cancel",280252978)], null));
});})(map__51912,map__51912__$1,ctx,sub,emit))
], null)], null)));
} else {
cljs.core.deref.call(null,dialog).dispose();

cljs.core.reset_BANG_.call(null,dialog,null);
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__51912,map__51912__$1,ctx,sub,emit))
});
tse.label_editor.view = (function tse$label_editor$view(ctx){
var dialog = cljs.core.atom.call(null,null);
var node = cljs.core.atom.call(null,null);
return ((function (dialog,node){
return (function (ctx__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tse.label_editor.init_dialog.call(null,ctx__$1,dialog,node)], null)], null);
});
;})(dialog,node))
});

//# sourceMappingURL=label_editor.js.map?rel=1537946275970
