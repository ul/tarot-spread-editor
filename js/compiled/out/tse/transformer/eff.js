// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.transformer.eff');
goog.require('cljs.core');
goog.require('tse.math');
goog.require('tse.utils');
tse.transformer.eff.move = (function tse$transformer$eff$move(p__34789){
var map__34790 = p__34789;
var map__34790__$1 = cljs.core.__destructure_map.call(null,map__34790);
var vec__34791 = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__34791,(0),null);
var db = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (v){
return tse.math.v0.call(null,tse.math.v_PLUS_.call(null,tse.math.v_PERCENT_.call(null,dv,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),v));
}));
});
tse.transformer.eff.resize = (function tse$transformer$eff$resize(p__34795){
var map__34796 = p__34795;
var map__34796__$1 = cljs.core.__destructure_map.call(null,map__34796);
var vec__34797 = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var rect = cljs.core.nth.call(null,vec__34797,(0),null);
var deltaRect = cljs.core.nth.call(null,vec__34797,(1),null);
var db = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var dv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.left,deltaRect.top], null);
var w = rect.width;
var dw = deltaRect.width;
var dd = (w / (w - dw));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(function (p1__34794_SHARP_){
return tse.math.v_STAR_.call(null,p1__34794_SHARP_,dd);
}));
});
tse.transformer.eff.rotate = (function tse$transformer$eff$rotate(p__34801){
var map__34802 = p__34801;
var map__34802__$1 = cljs.core.__destructure_map.call(null,map__34802);
var vec__34803 = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__34803,(0),null);
var sub = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__34806 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__34806__$1 = cljs.core.__destructure_map.call(null,map__34806);
var vec__34807 = cljs.core.get.call(null,map__34806__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__34807,(0),null);
var y = cljs.core.nth.call(null,vec__34807,(1),null);
var vec__34810 = cljs.core.get.call(null,map__34806__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__34810,(0),null);
var h = cljs.core.nth.call(null,vec__34810,(1),null);
var map__34813 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"rotator","rotator",-1127412981)], null));
var map__34813__$1 = cljs.core.__destructure_map.call(null,map__34813);
var angle = cljs.core.get.call(null,map__34813__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var origin = cljs.core.get.call(null,map__34813__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var c = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.math.center.call(null,x,w),tse.math.center.call(null,y,h)], null);
var origin__$1 = (function (){var or__5045__auto__ = origin;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return tse.math.get_rotator_origin.call(null,x,y,w,h);
}
})();
var angle__$1 = (function (){var or__5045__auto__ = angle;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.call(null,Math.atan2,tse.math.v_.call(null,origin__$1,c));
}
})();
var origin_SINGLEQUOTE_ = tse.math.v_PLUS_.call(null,origin__$1,tse.math.v_PERCENT_.call(null,dv,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))));
var angle_SINGLEQUOTE_ = cljs.core.apply.call(null,Math.atan2,tse.math.v_.call(null,origin_SINGLEQUOTE_,c));
var da = (angle__$1 - angle_SINGLEQUOTE_);
cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"rotator","rotator",-1127412981)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",1037372088),origin_SINGLEQUOTE_,new cljs.core.Keyword(null,"angle","angle",1622094254),angle_SINGLEQUOTE_], null));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"angle","angle",1622094254),(function (p1__34800_SHARP_){
return tse.math.snap_angle.call(null,(p1__34800_SHARP_ + da));
}));
});
tse.transformer.eff.end_rotation = (function tse$transformer$eff$end_rotation(p__34814){
var map__34815 = p__34814;
var map__34815__$1 = cljs.core.__destructure_map.call(null,map__34815);
var db = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),cljs.core.dissoc,new cljs.core.Keyword(null,"rotator","rotator",-1127412981));
});
tse.transformer.eff.start_selection = (function tse$transformer$eff$start_selection(p__34816){
var map__34817 = p__34816;
var map__34817__$1 = cljs.core.__destructure_map.call(null,map__34817);
var vec__34818 = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var start = cljs.core.nth.call(null,vec__34818,(0),null);
var client = cljs.core.nth.call(null,vec__34818,(1),null);
var db = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"db","db",993250759));
var emit = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var onmove = (function tse$transformer$eff$start_selection_$_onmove(e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","move-selection","transformer/move-selection",-757803035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)], null));
});
var onend = (function tse$transformer$eff$start_selection_$_onend(e){
window.removeEventListener("mousemove",onmove);

window.removeEventListener("mouseup",tse$transformer$eff$start_selection_$_onend);

return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","end-selection","transformer/end-selection",-503577064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)], null));
});
window.addEventListener("mousemove",onmove);

window.addEventListener("mouseup",onend);

return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"offset","offset",296498311),tse.math.v_.call(null,start,client)], null));
});
tse.transformer.eff.move_selection = (function tse$transformer$eff$move_selection(p__34821){
var map__34822 = p__34821;
var map__34822__$1 = cljs.core.__destructure_map.call(null,map__34822);
var vec__34823 = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var v = cljs.core.nth.call(null,vec__34823,(0),null);
var db = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"end","end",-268185958)], null),v);
});
tse.transformer.eff.end_selection = (function tse$transformer$eff$end_selection(p__34826){
var map__34827 = p__34826;
var map__34827__$1 = cljs.core.__destructure_map.call(null,map__34827);
var vec__34828 = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var end = cljs.core.nth.call(null,vec__34828,(0),null);
var db = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var items = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)));
var map__34831 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866)], null));
var map__34831__$1 = cljs.core.__destructure_map.call(null,map__34831);
var start = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var offset = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var end__$1 = tse.math.v_PLUS_.call(null,end,offset);
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
var selector_box = tse.math.selector_box.call(null,scale,start,end__$1);
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),cljs.core.dissoc,new cljs.core.Keyword(null,"selector","selector",762528866));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (items__$1){
return cljs.core.mapv.call(null,(function (item){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),tse.math.overlap_QMARK_.call(null,tse.math.item_box.call(null,item),selector_box));
}),items__$1);
}));
});
tse.transformer.eff.shift_mode = (function tse$transformer$eff$shift_mode(p__34832){
var map__34833 = p__34832;
var map__34833__$1 = cljs.core.__destructure_map.call(null,map__34833);
var vec__34834 = cljs.core.get.call(null,map__34833__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var shift_mode_QMARK_ = cljs.core.nth.call(null,vec__34834,(0),null);
var db = cljs.core.get.call(null,map__34833__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"shift-mode?","shift-mode?",2090849162)], null),shift_mode_QMARK_);
});
tse.transformer.eff.spec = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("transformer","move","transformer/move",150907650),tse.transformer.eff.move,new cljs.core.Keyword("transformer","resize","transformer/resize",-1725586155),tse.transformer.eff.resize,new cljs.core.Keyword("transformer","rotate","transformer/rotate",2081113824),tse.transformer.eff.rotate,new cljs.core.Keyword("transformer","end-rotation","transformer/end-rotation",1778651104),tse.transformer.eff.end_rotation,new cljs.core.Keyword("transformer","start-selection","transformer/start-selection",-2109443738),tse.transformer.eff.start_selection,new cljs.core.Keyword("transformer","move-selection","transformer/move-selection",-757803035),tse.transformer.eff.move_selection,new cljs.core.Keyword("transformer","end-selection","transformer/end-selection",-503577064),tse.transformer.eff.end_selection,new cljs.core.Keyword("transformer","shift-mode","transformer/shift-mode",-1982407669),tse.transformer.eff.shift_mode], null);

//# sourceMappingURL=eff.js.map?rel=1710474316916
