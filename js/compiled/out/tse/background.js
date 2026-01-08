// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.background');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.math');
goog.require('tse.menu');
goog.require('tse.background_image');
tse.background.show_grid_menu_item = (function tse$background$show_grid_menu_item(p__102825){
var map__102826 = p__102825;
var map__102826__$1 = cljs.core.__destructure_map.call(null,map__102826);
var sub = cljs.core.get.call(null,map__102826__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102826__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_check_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","show-grid?","menu/show-grid?",889494117),"Show grid?"], null)),new cljs.core.Keyword(null,"checked?","checked?",2024809091),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","show-grid?","config/show-grid?",-470234046)], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (p1__102824_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","toggle-grid-show","config/toggle-grid-show",846306634),p1__102824_SHARP_.isChecked()], null));
})], null));
});
tse.background.snap_grid_menu_item = (function tse$background$snap_grid_menu_item(p__102828){
var map__102829 = p__102828;
var map__102829__$1 = cljs.core.__destructure_map.call(null,map__102829);
var sub = cljs.core.get.call(null,map__102829__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102829__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_check_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","snap-grid?","menu/snap-grid?",948493295),"Snap to grid?"], null)),new cljs.core.Keyword(null,"checked?","checked?",2024809091),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","snap-grid?","config/snap-grid?",-746755636)], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (p1__102827_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","toggle-grid-snap","config/toggle-grid-snap",1062297049),p1__102827_SHARP_.isChecked()], null));
})], null));
});
tse.background.add_label_menu_item = (function tse$background$add_label_menu_item(p__102830){
var map__102831 = p__102830;
var map__102831__$1 = cljs.core.__destructure_map.call(null,map__102831);
var sub = cljs.core.get.call(null,map__102831__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102831__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","add-label","menu/add-label",14178071),"Add label"], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","new","label-editor/new",163106766)], null));
})], null));
});
tse.background.set_background_menu_item = (function tse$background$set_background_menu_item(p__102832){
var map__102833 = p__102832;
var map__102833__$1 = cljs.core.__destructure_map.call(null,map__102833);
var sub = cljs.core.get.call(null,map__102833__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102833__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","set-background","menu/set-background",-306598800),"Set background"], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","open","background-dialog/open",-1233377127)], null));
})], null));
});
tse.background.make_popup_menu = (function tse$background$make_popup_menu(p__102835,node){
var map__102836 = p__102835;
var map__102836__$1 = cljs.core.__destructure_map.call(null,map__102836);
var ctx = map__102836__$1;
var sub = cljs.core.get.call(null,map__102836__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102836__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_popup.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background.show_grid_menu_item.call(null,ctx),tse.background.snap_grid_menu_item.call(null,ctx),tse.background.add_label_menu_item.call(null,ctx),tse.background.set_background_menu_item.call(null,ctx)], null),node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),(function (p1__102834_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","show-menu","background/show-menu",1345263878),p1__102834_SHARP_], null));
})], null));
});
tse.background.long_press_delay = (500);
tse.background.init_bg = (function tse$background$init_bg(p__102837,_STAR_node,_STAR_popup){
var map__102838 = p__102837;
var map__102838__$1 = cljs.core.__destructure_map.call(null,map__102838);
var ctx = map__102838__$1;
var emit = cljs.core.get.call(null,map__102838__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
var temp__5818__auto___102839 = cljs.core.deref.call(null,_STAR_popup);
if(cljs.core.truth_(temp__5818__auto___102839)){
var p_102840 = temp__5818__auto___102839;
p_102840.dispose();
} else {
}

cljs.core.reset_BANG_.call(null,_STAR_popup,(cljs.core.truth_(node)?tse.background.make_popup_menu.call(null,ctx,node):null));

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
});
tse.background.grid_css = (function tse$background$grid_css(grid){
return cuerdas.core.format.call(null,"repeating-linear-gradient(0deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px)),repeating-linear-gradient(-90deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px))",grid);
});
if((typeof tse !== 'undefined') && (typeof tse.background !== 'undefined') && (typeof tse.background.cached_body_width !== 'undefined')){
} else {
tse.background.cached_body_width = cljs.core.volatile_BANG_.call(null,(0));
}
if((typeof tse !== 'undefined') && (typeof tse.background !== 'undefined') && (typeof tse.background.cached_body_height !== 'undefined')){
} else {
tse.background.cached_body_height = cljs.core.volatile_BANG_.call(null,(0));
}
tse.background.update_body_dimensions_BANG_ = (function tse$background$update_body_dimensions_BANG_(){
cljs.core.vreset_BANG_.call(null,tse.background.cached_body_width,document.body.clientWidth);

return cljs.core.vreset_BANG_.call(null,tse.background.cached_body_height,document.body.clientHeight);
});
if((typeof tse !== 'undefined') && (typeof tse.background !== 'undefined') && (typeof tse.background._resize_listener !== 'undefined')){
} else {
tse.background._resize_listener = (function (){
tse.background.update_body_dimensions_BANG_.call(null);

window.addEventListener("resize",tse.background.update_body_dimensions_BANG_);

return true;
})()
;
}
tse.background.background_width = (function tse$background$background_width(node,border_box_width,scale){
if(cljs.core.truth_(node)){
var x__5130__auto__ = border_box_width;
var y__5131__auto__ = ((cljs.core.deref.call(null,tse.background.cached_body_width) - node.clientLeft) / scale);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
} else {
return border_box_width;
}
});
tse.background.background_height = (function tse$background$background_height(node,border_box_height,scale){
if(cljs.core.truth_(node)){
var x__5130__auto__ = border_box_height;
var y__5131__auto__ = ((cljs.core.deref.call(null,tse.background.cached_body_height) - node.clientTop) / scale);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
} else {
return border_box_height;
}
});
tse.background.padding = (50);
tse.background.view = (function tse$background$view(_){
var node = carbon.rx.cell_STAR_.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell nil)\n"], null)], null));
var popup = carbon.rx.cell_STAR_.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell nil)\n"], null)], null));
var long_press_timer = cljs.core.volatile_BANG_.call(null,null);
var cancel_long_press_BANG_ = (function (){
var temp__5818__auto__ = cljs.core.deref.call(null,long_press_timer);
if(cljs.core.truth_(temp__5818__auto__)){
var timer = temp__5818__auto__;
clearTimeout(timer);

return cljs.core.vreset_BANG_.call(null,long_press_timer,null);
} else {
return null;
}
});
return (function (p__102842){
var map__102843 = p__102842;
var map__102843__$1 = cljs.core.__destructure_map.call(null,map__102843);
var ctx = map__102843__$1;
var sub = cljs.core.get.call(null,map__102843__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102843__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var vec__102844 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","big-box","item/big-box",389513381)], null)));
var ___$1 = cljs.core.nth.call(null,vec__102844,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__102844,(1),null);
var w = cljs.core.nth.call(null,vec__102844,(2),null);
var h = cljs.core.nth.call(null,vec__102844,(3),null);
var grid = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","grid","config/grid",650271202)], null)));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),tse.background.init_bg.call(null,ctx,node,popup),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),(cljs.core.truth_(cljs.core.get.call(null,grid,new cljs.core.Keyword(null,"show?","show?",1543842127)))?tse.background.grid_css.call(null,grid):null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","color","background/color",-1933269289)], null))),new cljs.core.Keyword(null,"width","width",-384071477),tse.background.background_width.call(null,cljs.core.deref.call(null,node),w,scale),new cljs.core.Keyword(null,"height","height",1025178622),tse.background.background_height.call(null,cljs.core.deref.call(null,node),(h + tse.background.padding),scale)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","unselect-all","item/unselect-all",-1344303452)], null));
}),new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),(function (p1__102841_SHARP_){
if(cljs.core.truth_((function (){var and__5043__auto__ = (p1__102841_SHARP_.button === (0));
if(and__5043__auto__){
return p1__102841_SHARP_.shiftKey;
} else {
return and__5043__auto__;
}
})())){
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__102841_SHARP_.offsetX,p1__102841_SHARP_.offsetY], null);
var target_rect = p1__102841_SHARP_.target.getBoundingClientRect();
var target_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_rect.left,target_rect.top], null);
var node_rect = cljs.core.deref.call(null,node).getBoundingClientRect();
var node_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_rect.left,node_rect.top], null);
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","start-selection","transformer/start-selection",-2109443738),tse.math.v_PLUS_.call(null,offset,tse.math.v_.call(null,target_offset,node_offset)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__102841_SHARP_.clientX,p1__102841_SHARP_.clientY], null)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),(function (e){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref.call(null,popup);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,(1),e.touches.length);
} else {
return and__5043__auto__;
}
})())){
var touch = (e.touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.vreset_BANG_.call(null,long_press_timer,setTimeout((function (){
return cljs.core.deref.call(null,popup).showAt(x,y);
}),tse.background.long_press_delay));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),cancel_long_press_BANG_,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),cancel_long_press_BANG_,new cljs.core.Keyword(null,"on-touch-cancel","on-touch-cancel",1125389250),cancel_long_press_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_image.view,ctx], null)], null);
});
});

//# sourceMappingURL=background.js.map?rel=1767875394118
