// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.background');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.math');
goog.require('tse.menu');
goog.require('tse.background_image');
tse.background.show_grid_menu_item = (function tse$background$show_grid_menu_item(p__53885){
var map__53886 = p__53885;
var map__53886__$1 = ((((!((map__53886 == null)))?(((((map__53886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53886):map__53886);
var sub = cljs.core.get.call(null,map__53886__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53886__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_check_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","show-grid?","menu/show-grid?",889494117),"Show grid?"], null)),new cljs.core.Keyword(null,"checked?","checked?",2024809091),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","show-grid?","config/show-grid?",-470234046)], null)),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53886,map__53886__$1,sub,emit){
return (function (p1__53884_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","toggle-grid-show","config/toggle-grid-show",846306634),p1__53884_SHARP_.isChecked()], null));
});})(map__53886,map__53886__$1,sub,emit))
], null));
});
tse.background.snap_grid_menu_item = (function tse$background$snap_grid_menu_item(p__53889){
var map__53890 = p__53889;
var map__53890__$1 = ((((!((map__53890 == null)))?(((((map__53890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53890):map__53890);
var sub = cljs.core.get.call(null,map__53890__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53890__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_check_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","snap-grid?","menu/snap-grid?",948493295),"Snap to grid?"], null)),new cljs.core.Keyword(null,"checked?","checked?",2024809091),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","snap-grid?","config/snap-grid?",-746755636)], null)),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53890,map__53890__$1,sub,emit){
return (function (p1__53888_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","toggle-grid-snap","config/toggle-grid-snap",1062297049),p1__53888_SHARP_.isChecked()], null));
});})(map__53890,map__53890__$1,sub,emit))
], null));
});
tse.background.download_menu_item = (function tse$background$download_menu_item(p__53892){
var map__53893 = p__53892;
var map__53893__$1 = ((((!((map__53893 == null)))?(((((map__53893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53893):map__53893);
var sub = cljs.core.get.call(null,map__53893__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53893__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","download","menu/download",-312420197),"Download"], null)),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53893,map__53893__$1,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("share","download","share/download",-206139877)], null));
});})(map__53893,map__53893__$1,sub,emit))
], null));
});
tse.background.add_label_menu_item = (function tse$background$add_label_menu_item(p__53895){
var map__53896 = p__53895;
var map__53896__$1 = ((((!((map__53896 == null)))?(((((map__53896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53896):map__53896);
var sub = cljs.core.get.call(null,map__53896__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53896__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","add-label","menu/add-label",14178071),"Add label"], null)),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53896,map__53896__$1,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","new","label-editor/new",163106766)], null));
});})(map__53896,map__53896__$1,sub,emit))
], null));
});
tse.background.set_background_menu_item = (function tse$background$set_background_menu_item(p__53898){
var map__53899 = p__53898;
var map__53899__$1 = ((((!((map__53899 == null)))?(((((map__53899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53899):map__53899);
var sub = cljs.core.get.call(null,map__53899__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53899__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","set-background","menu/set-background",-306598800),"Set background"], null)),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53899,map__53899__$1,sub,emit){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","open","background-dialog/open",-1233377127)], null));
});})(map__53899,map__53899__$1,sub,emit))
], null));
});
tse.background.make_popup_menu = (function tse$background$make_popup_menu(p__53901,node){
var map__53902 = p__53901;
var map__53902__$1 = ((((!((map__53902 == null)))?(((((map__53902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53902):map__53902);
var ctx = map__53902__$1;
var sub = cljs.core.get.call(null,map__53902__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return tse.menu.make_popup.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background.show_grid_menu_item.call(null,ctx),tse.background.snap_grid_menu_item.call(null,ctx),tse.background.download_menu_item.call(null,ctx),tse.background.add_label_menu_item.call(null,ctx),tse.background.set_background_menu_item.call(null,ctx)], null),node);
});
tse.background.init_bg = (function tse$background$init_bg(p__53904,_STAR_node){
var map__53905 = p__53904;
var map__53905__$1 = ((((!((map__53905 == null)))?(((((map__53905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53905):map__53905);
var ctx = map__53905__$1;
var emit = cljs.core.get.call(null,map__53905__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__53905,map__53905__$1,ctx,emit){
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
if(cljs.core.truth_(node)){
tse.background.make_popup_menu.call(null,ctx,node);
} else {
console.log("FIXME Dispose popup menu");
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
;})(map__53905,map__53905__$1,ctx,emit))
});
tse.background.grid_css = (function tse$background$grid_css(grid){
return cuerdas.core.format.call(null,"repeating-linear-gradient(0deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px)),repeating-linear-gradient(-90deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px))",grid);
});
tse.background.background_width = (function tse$background$background_width(node,border_box_width,scale){
if(cljs.core.truth_(node)){
var x__4037__auto__ = border_box_width;
var y__4038__auto__ = ((document.body.clientWidth - node.clientLeft) / scale);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
} else {
return border_box_width;
}
});
tse.background.background_height = (function tse$background$background_height(node,border_box_height,scale){
if(cljs.core.truth_(node)){
var x__4037__auto__ = border_box_height;
var y__4038__auto__ = ((document.body.clientHeight - node.clientTop) / scale);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
} else {
return border_box_height;
}
});
tse.background.view = (function tse$background$view(_){
var node = carbon.rx.cell_STAR_.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell nil)\n"], null)], null));
return ((function (node){
return (function (p__53908){
var map__53909 = p__53908;
var map__53909__$1 = ((((!((map__53909 == null)))?(((((map__53909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53909):map__53909);
var ctx = map__53909__$1;
var sub = cljs.core.get.call(null,map__53909__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53909__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var vec__53911 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","big-box","item/big-box",389513381)], null)));
var ___$1 = cljs.core.nth.call(null,vec__53911,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__53911,(1),null);
var w = cljs.core.nth.call(null,vec__53911,(2),null);
var h = cljs.core.nth.call(null,vec__53911,(3),null);
var grid = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","grid","config/grid",650271202)], null)));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),tse.background.init_bg.call(null,ctx,node),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),(cljs.core.truth_(cljs.core.get.call(null,grid,new cljs.core.Keyword(null,"show?","show?",1543842127)))?tse.background.grid_css.call(null,grid):null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","color","background/color",-1933269289)], null))),new cljs.core.Keyword(null,"width","width",-384071477),tse.background.background_width.call(null,cljs.core.deref.call(null,node),w,scale),new cljs.core.Keyword(null,"height","height",1025178622),tse.background.background_height.call(null,cljs.core.deref.call(null,node),h,scale)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__53911,___$1,___$2,w,h,grid,scale,map__53909,map__53909__$1,ctx,sub,emit,node){
return (function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","unselect-all","item/unselect-all",-1344303452)], null));
});})(vec__53911,___$1,___$2,w,h,grid,scale,map__53909,map__53909__$1,ctx,sub,emit,node))
,new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),((function (vec__53911,___$1,___$2,w,h,grid,scale,map__53909,map__53909__$1,ctx,sub,emit,node){
return (function (p1__53907_SHARP_){
if(cljs.core.truth_((function (){var and__3938__auto__ = (p1__53907_SHARP_.button === (0));
if(and__3938__auto__){
return p1__53907_SHARP_.shiftKey;
} else {
return and__3938__auto__;
}
})())){
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53907_SHARP_.offsetX,p1__53907_SHARP_.offsetY], null);
var target_rect = p1__53907_SHARP_.target.getBoundingClientRect();
var target_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_rect.left,target_rect.top], null);
var node_rect = cljs.core.deref.call(null,node).getBoundingClientRect();
var node_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_rect.left,node_rect.top], null);
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","start-selection","transformer/start-selection",-2109443738),tse.math.v_PLUS_.call(null,offset,tse.math.v_.call(null,target_offset,node_offset)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53907_SHARP_.clientX,p1__53907_SHARP_.clientY], null)], null));
} else {
return null;
}
});})(vec__53911,___$1,___$2,w,h,grid,scale,map__53909,map__53909__$1,ctx,sub,emit,node))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_image.view,ctx], null)], null);
});
;})(node))
});

//# sourceMappingURL=background.js.map?rel=1537946283041
