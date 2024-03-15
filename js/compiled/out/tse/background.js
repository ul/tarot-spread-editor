// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.background');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('carbon.rx');
goog.require('tse.math');
goog.require('tse.menu');
goog.require('tse.background_image');
tse.background.show_grid_menu_item = (function tse$background$show_grid_menu_item(p__36448){
var map__36449 = p__36448;
var map__36449__$1 = cljs.core.__destructure_map.call(null,map__36449);
var sub = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_check_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","show-grid?","menu/show-grid?",889494117),"Show grid?"], null)),new cljs.core.Keyword(null,"checked?","checked?",2024809091),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","show-grid?","config/show-grid?",-470234046)], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (p1__36447_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","toggle-grid-show","config/toggle-grid-show",846306634),p1__36447_SHARP_.isChecked()], null));
})], null));
});
tse.background.snap_grid_menu_item = (function tse$background$snap_grid_menu_item(p__36451){
var map__36452 = p__36451;
var map__36452__$1 = cljs.core.__destructure_map.call(null,map__36452);
var sub = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_check_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","snap-grid?","menu/snap-grid?",948493295),"Snap to grid?"], null)),new cljs.core.Keyword(null,"checked?","checked?",2024809091),sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","snap-grid?","config/snap-grid?",-746755636)], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (p1__36450_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","toggle-grid-snap","config/toggle-grid-snap",1062297049),p1__36450_SHARP_.isChecked()], null));
})], null));
});
tse.background.add_label_menu_item = (function tse$background$add_label_menu_item(p__36453){
var map__36454 = p__36453;
var map__36454__$1 = cljs.core.__destructure_map.call(null,map__36454);
var sub = cljs.core.get.call(null,map__36454__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36454__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","add-label","menu/add-label",14178071),"Add label"], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label-editor","new","label-editor/new",163106766)], null));
})], null));
});
tse.background.set_background_menu_item = (function tse$background$set_background_menu_item(p__36455){
var map__36456 = p__36455;
var map__36456__$1 = cljs.core.__destructure_map.call(null,map__36456);
var sub = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("menu","set-background","menu/set-background",-306598800),"Set background"], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","open","background-dialog/open",-1233377127)], null));
})], null));
});
tse.background.make_popup_menu = (function tse$background$make_popup_menu(p__36458,node){
var map__36459 = p__36458;
var map__36459__$1 = cljs.core.__destructure_map.call(null,map__36459);
var ctx = map__36459__$1;
var sub = cljs.core.get.call(null,map__36459__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36459__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return tse.menu.make_popup.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background.show_grid_menu_item.call(null,ctx),tse.background.snap_grid_menu_item.call(null,ctx),tse.background.add_label_menu_item.call(null,ctx),tse.background.set_background_menu_item.call(null,ctx)], null),node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-show","on-show",-1100796727),(function (p1__36457_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","show-menu","background/show-menu",1345263878),p1__36457_SHARP_], null));
})], null));
});
tse.background.init_bg = (function tse$background$init_bg(p__36460,_STAR_node){
var map__36461 = p__36460;
var map__36461__$1 = cljs.core.__destructure_map.call(null,map__36461);
var ctx = map__36461__$1;
var emit = cljs.core.get.call(null,map__36461__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
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
});
tse.background.grid_css = (function tse$background$grid_css(grid){
return cuerdas.core.format.call(null,"repeating-linear-gradient(0deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px)),repeating-linear-gradient(-90deg,transparent,transparent %(step)spx,#CCC %(step)spx,#CCC calc(%(step)spx + 1px))",grid);
});
tse.background.background_width = (function tse$background$background_width(node,border_box_width,scale){
if(cljs.core.truth_(node)){
var x__5130__auto__ = border_box_width;
var y__5131__auto__ = ((document.body.clientWidth - node.clientLeft) / scale);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
} else {
return border_box_width;
}
});
tse.background.background_height = (function tse$background$background_height(node,border_box_height,scale){
if(cljs.core.truth_(node)){
var x__5130__auto__ = border_box_height;
var y__5131__auto__ = ((document.body.clientHeight - node.clientTop) / scale);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
} else {
return border_box_height;
}
});
tse.background.padding = (50);
tse.background.view = (function tse$background$view(_){
var node = carbon.rx.cell_STAR_.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell nil)\n"], null)], null));
return (function (p__36463){
var map__36464 = p__36463;
var map__36464__$1 = cljs.core.__destructure_map.call(null,map__36464);
var ctx = map__36464__$1;
var sub = cljs.core.get.call(null,map__36464__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36464__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var vec__36465 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","big-box","item/big-box",389513381)], null)));
var ___$1 = cljs.core.nth.call(null,vec__36465,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__36465,(1),null);
var w = cljs.core.nth.call(null,vec__36465,(2),null);
var h = cljs.core.nth.call(null,vec__36465,(3),null);
var grid = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("config","grid","config/grid",650271202)], null)));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),tse.background.init_bg.call(null,ctx,node),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),(cljs.core.truth_(cljs.core.get.call(null,grid,new cljs.core.Keyword(null,"show?","show?",1543842127)))?tse.background.grid_css.call(null,grid):null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background","color","background/color",-1933269289)], null))),new cljs.core.Keyword(null,"width","width",-384071477),tse.background.background_width.call(null,cljs.core.deref.call(null,node),w,scale),new cljs.core.Keyword(null,"height","height",1025178622),tse.background.background_height.call(null,cljs.core.deref.call(null,node),(h + tse.background.padding),scale)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","unselect-all","item/unselect-all",-1344303452)], null));
}),new cljs.core.Keyword(null,"on-mousedown","on-mousedown",-52942936),(function (p1__36462_SHARP_){
if(cljs.core.truth_((function (){var and__5043__auto__ = (p1__36462_SHARP_.button === (0));
if(and__5043__auto__){
return p1__36462_SHARP_.shiftKey;
} else {
return and__5043__auto__;
}
})())){
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36462_SHARP_.offsetX,p1__36462_SHARP_.offsetY], null);
var target_rect = p1__36462_SHARP_.target.getBoundingClientRect();
var target_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_rect.left,target_rect.top], null);
var node_rect = cljs.core.deref.call(null,node).getBoundingClientRect();
var node_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_rect.left,node_rect.top], null);
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","start-selection","transformer/start-selection",-2109443738),tse.math.v_PLUS_.call(null,offset,tse.math.v_.call(null,target_offset,node_offset)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36462_SHARP_.clientX,p1__36462_SHARP_.clientY], null)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background_image.view,ctx], null)], null);
});
});

//# sourceMappingURL=background.js.map?rel=1710474317793
