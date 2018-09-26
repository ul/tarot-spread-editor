// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.background_dialog');
goog.require('cljs.core');
goog.require('tse.dialog');
goog.require('goog.ui.TabBar');
goog.require('goog.ui.Tab');
goog.require('goog.ui.Component.EventType');
tse.background_dialog.init_tab_bar = (function tse$background_dialog$init_tab_bar(p__53940,_STAR_node){
var map__53941 = p__53940;
var map__53941__$1 = ((((!((map__53941 == null)))?(((((map__53941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53941):map__53941);
var emit = cljs.core.get.call(null,map__53941__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__53941,map__53941__$1,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
var bar_53944 = (new goog.ui.TabBar());
var G__53943_53945 = bar_53944;
G__53943_53945.decorate(node);

G__53943_53945.listen(goog.ui.Component.EventType.SELECT,((function (G__53943_53945,bar_53944,map__53941,map__53941__$1,emit){
return (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","select-tab","background-dialog/select-tab",-1176551647),e.target.getElement().dataset.tab], null));
});})(G__53943_53945,bar_53944,map__53941,map__53941__$1,emit))
);

} else {
console.log("FIXME Dispose TabBar");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__53941,map__53941__$1,emit))
});
tse.background_dialog.link_widget = (function tse$background_dialog$link_widget(p__53947){
var map__53948 = p__53947;
var map__53948__$1 = ((((!((map__53948 == null)))?(((((map__53948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53948):map__53948);
var emit = cljs.core.get.call(null,map__53948__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-form","div.pure-form",-1726131483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"url",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__53948,map__53948__$1,emit){
return (function (p1__53946_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","set-url","background-dialog/set-url",-1436887419),p1__53946_SHARP_.target.value], null));
});})(map__53948,map__53948__$1,emit))
], null)], null)], null);
});
tse.background_dialog.file_widget = (function tse$background_dialog$file_widget(p__53951){
var map__53952 = p__53951;
var map__53952__$1 = ((((!((map__53952 == null)))?(((((map__53952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53952):map__53952);
var emit = cljs.core.get.call(null,map__53952__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-form","div.pure-form",-1726131483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__53952,map__53952__$1,emit){
return (function (p1__53950_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","choose-file","background-dialog/choose-file",-1369277453),p1__53950_SHARP_.target.files], null));
});})(map__53952,map__53952__$1,emit))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null);
});
tse.background_dialog.color_widget = (function tse$background_dialog$color_widget(p__53955){
var map__53956 = p__53955;
var map__53956__$1 = ((((!((map__53956 == null)))?(((((map__53956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53956):map__53956);
var sub = cljs.core.get.call(null,map__53956__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53956__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-form","div.pure-form",-1726131483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"color",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","color","background-dialog/color",-570722960)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__53956,map__53956__$1,sub,emit){
return (function (p1__53954_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","set-color","background-dialog/set-color",-1905910674),p1__53954_SHARP_.target.value], null));
});})(map__53956,map__53956__$1,sub,emit))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null);
});
tse.background_dialog.background_dialog = (function tse$background_dialog$background_dialog(ctx){
var ref = tse.background_dialog.init_tab_bar.call(null,ctx,cljs.core.atom.call(null,null));
return ((function (ref){
return (function (p__53958){
var map__53959 = p__53958;
var map__53959__$1 = ((((!((map__53959 == null)))?(((((map__53959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53959):map__53959);
var sub = cljs.core.get.call(null,map__53959__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var tab = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","tab","background-dialog/tab",-1097693996)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"30em"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goog-tab-bar.goog-tab-bar-top","div.goog-tab-bar.goog-tab-bar-top",98638872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goog-tab","div.goog-tab",1233268516),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"color",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"color",tab))?"goog-tab-selected":null)], null),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("background-dialog.tabs","color","background-dialog.tabs/color",-90022430),"Color"], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goog-tab","div.goog-tab",1233268516),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"link",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"link",tab))?"goog-tab-selected":null)], null),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("background-dialog.tabs","link","background-dialog.tabs/link",1422075631),"Link"], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goog-tab","div.goog-tab",1233268516),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"file",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"file",tab))?"goog-tab-selected":null)], null),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("background-dialog.tabs","file","background-dialog.tabs/file",-267292635),"File"], null)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goog-tab-bar-clear","div.goog-tab-bar-clear",1108576522)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goog-tab-content","div.goog-tab-content",1172969339),(function (){var pred__53961 = cljs.core._EQ_;
var expr__53962 = tab;
if(cljs.core.truth_(pred__53961.call(null,"link",expr__53962))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_dialog.link_widget,ctx], null);
} else {
if(cljs.core.truth_(pred__53961.call(null,"file",expr__53962))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_dialog.file_widget,ctx], null);
} else {
if(cljs.core.truth_(pred__53961.call(null,"color",expr__53962))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_dialog.color_widget,ctx], null);
} else {
return null;
}
}
}
})()], null)], null);
});
;})(ref))
});
tse.background_dialog.init = (function tse$background_dialog$init(p__53964,dialog,_STAR_node){
var map__53965 = p__53964;
var map__53965__$1 = ((((!((map__53965 == null)))?(((((map__53965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53965):map__53965);
var ctx = map__53965__$1;
var sub = cljs.core.get.call(null,map__53965__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53965__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__53965,map__53965__$1,ctx,sub,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
cljs.core.reset_BANG_.call(null,dialog,tse.dialog.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","visible?","background-dialog/visible?",-1627873060)], null)),new cljs.core.Keyword(null,"title","title",636505583),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("background-dialog","title","background-dialog/title",-971387594),"Background"], null)),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_dialog.background_dialog,ctx], null),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, ["ok",((function (map__53965,map__53965__$1,ctx,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","save","background-dialog/save",241134822)], null));
});})(map__53965,map__53965__$1,ctx,sub,emit))
,"cancel",((function (map__53965,map__53965__$1,ctx,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","cancel","background-dialog/cancel",718725777)], null));
});})(map__53965,map__53965__$1,ctx,sub,emit))
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
;})(map__53965,map__53965__$1,ctx,sub,emit))
});
tse.background_dialog.view = (function tse$background_dialog$view(ctx){
var dialog = cljs.core.atom.call(null,null);
var node = cljs.core.atom.call(null,null);
return ((function (dialog,node){
return (function (ctx__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tse.background_dialog.init.call(null,ctx__$1,dialog,node)], null)], null);
});
;})(dialog,node))
});

//# sourceMappingURL=background_dialog.js.map?rel=1537946283289
