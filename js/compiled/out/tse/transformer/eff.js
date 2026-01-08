// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.transformer.eff');
goog.require('cljs.core');
goog.require('tse.math');
goog.require('tse.utils');
tse.transformer.eff.move = (function tse$transformer$eff$move(p__101151){
var map__101152 = p__101151;
var map__101152__$1 = cljs.core.__destructure_map.call(null,map__101152);
var vec__101153 = cljs.core.get.call(null,map__101152__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var vec__101156 = cljs.core.nth.call(null,vec__101153,(0),null);
var dx = cljs.core.nth.call(null,vec__101156,(0),null);
var dy = cljs.core.nth.call(null,vec__101156,(1),null);
var db = cljs.core.get.call(null,map__101152__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__101152__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"origin","origin",1037372088),(function (p__101159){
var vec__101160 = p__101159;
var x = cljs.core.nth.call(null,vec__101160,(0),null);
var y = cljs.core.nth.call(null,vec__101160,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (x + (dx / scale));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (y + (dy / scale));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
}));
});
tse.transformer.eff.resize = (function tse$transformer$eff$resize(p__101164){
var map__101165 = p__101164;
var map__101165__$1 = cljs.core.__destructure_map.call(null,map__101165);
var vec__101166 = cljs.core.get.call(null,map__101165__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var rect = cljs.core.nth.call(null,vec__101166,(0),null);
var deltaRect = cljs.core.nth.call(null,vec__101166,(1),null);
var db = cljs.core.get.call(null,map__101165__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__101165__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var dv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.left,deltaRect.top], null);
var w = rect.width;
var dw = deltaRect.width;
var dd = (w / (w - dw));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(function (p1__101163_SHARP_){
return tse.math.v_STAR_.call(null,p1__101163_SHARP_,dd);
}));
});
tse.transformer.eff.rotate = (function tse$transformer$eff$rotate(p__101170){
var map__101171 = p__101170;
var map__101171__$1 = cljs.core.__destructure_map.call(null,map__101171);
var vec__101172 = cljs.core.get.call(null,map__101171__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__101172,(0),null);
var sub = cljs.core.get.call(null,map__101171__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__101171__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__101175 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__101175__$1 = cljs.core.__destructure_map.call(null,map__101175);
var vec__101176 = cljs.core.get.call(null,map__101175__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__101176,(0),null);
var y = cljs.core.nth.call(null,vec__101176,(1),null);
var vec__101179 = cljs.core.get.call(null,map__101175__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__101179,(0),null);
var h = cljs.core.nth.call(null,vec__101179,(1),null);
var map__101182 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"rotator","rotator",-1127412981)], null));
var map__101182__$1 = cljs.core.__destructure_map.call(null,map__101182);
var angle = cljs.core.get.call(null,map__101182__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var origin = cljs.core.get.call(null,map__101182__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
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

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"angle","angle",1622094254),(function (p1__101169_SHARP_){
return tse.math.snap_angle.call(null,(p1__101169_SHARP_ + da));
}));
});
tse.transformer.eff.end_rotation = (function tse$transformer$eff$end_rotation(p__101183){
var map__101184 = p__101183;
var map__101184__$1 = cljs.core.__destructure_map.call(null,map__101184);
var db = cljs.core.get.call(null,map__101184__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),cljs.core.dissoc,new cljs.core.Keyword(null,"rotator","rotator",-1127412981));
});
tse.transformer.eff.start_selection = (function tse$transformer$eff$start_selection(p__101185){
var map__101186 = p__101185;
var map__101186__$1 = cljs.core.__destructure_map.call(null,map__101186);
var vec__101187 = cljs.core.get.call(null,map__101186__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var start = cljs.core.nth.call(null,vec__101187,(0),null);
var client = cljs.core.nth.call(null,vec__101187,(1),null);
var db = cljs.core.get.call(null,map__101186__$1,new cljs.core.Keyword(null,"db","db",993250759));
var emit = cljs.core.get.call(null,map__101186__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
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
tse.transformer.eff.move_selection = (function tse$transformer$eff$move_selection(p__101190){
var map__101191 = p__101190;
var map__101191__$1 = cljs.core.__destructure_map.call(null,map__101191);
var vec__101192 = cljs.core.get.call(null,map__101191__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var v = cljs.core.nth.call(null,vec__101192,(0),null);
var db = cljs.core.get.call(null,map__101191__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"end","end",-268185958)], null),v);
});
tse.transformer.eff.end_selection = (function tse$transformer$eff$end_selection(p__101195){
var map__101196 = p__101195;
var map__101196__$1 = cljs.core.__destructure_map.call(null,map__101196);
var vec__101197 = cljs.core.get.call(null,map__101196__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var end = cljs.core.nth.call(null,vec__101197,(0),null);
var db = cljs.core.get.call(null,map__101196__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__101196__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var items = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)));
var map__101200 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866)], null));
var map__101200__$1 = cljs.core.__destructure_map.call(null,map__101200);
var start = cljs.core.get.call(null,map__101200__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var offset = cljs.core.get.call(null,map__101200__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
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
tse.transformer.eff.shift_mode = (function tse$transformer$eff$shift_mode(p__101201){
var map__101202 = p__101201;
var map__101202__$1 = cljs.core.__destructure_map.call(null,map__101202);
var vec__101203 = cljs.core.get.call(null,map__101202__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var shift_mode_QMARK_ = cljs.core.nth.call(null,vec__101203,(0),null);
var db = cljs.core.get.call(null,map__101202__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"shift-mode?","shift-mode?",2090849162)], null),shift_mode_QMARK_);
});
tse.transformer.eff.start_drag = (function tse$transformer$eff$start_drag(p__101206){
var map__101207 = p__101206;
var map__101207__$1 = cljs.core.__destructure_map.call(null,map__101207);
var db = cljs.core.get.call(null,map__101207__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)], null),true);
});
tse.transformer.eff.end_drag = (function tse$transformer$eff$end_drag(p__101208){
var map__101209 = p__101208;
var map__101209__$1 = cljs.core.__destructure_map.call(null,map__101209);
var db = cljs.core.get.call(null,map__101209__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)], null),false);
});
tse.transformer.eff.spec = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("transformer","rotate","transformer/rotate",2081113824),new cljs.core.Keyword("transformer","end-rotation","transformer/end-rotation",1778651104),new cljs.core.Keyword("transformer","move","transformer/move",150907650),new cljs.core.Keyword("transformer","end-drag","transformer/end-drag",106300389),new cljs.core.Keyword("transformer","move-selection","transformer/move-selection",-757803035),new cljs.core.Keyword("transformer","start-selection","transformer/start-selection",-2109443738),new cljs.core.Keyword("transformer","shift-mode","transformer/shift-mode",-1982407669),new cljs.core.Keyword("transformer","start-drag","transformer/start-drag",1750499954),new cljs.core.Keyword("transformer","resize","transformer/resize",-1725586155),new cljs.core.Keyword("transformer","end-selection","transformer/end-selection",-503577064)],[tse.transformer.eff.rotate,tse.transformer.eff.end_rotation,tse.transformer.eff.move,tse.transformer.eff.end_drag,tse.transformer.eff.move_selection,tse.transformer.eff.start_selection,tse.transformer.eff.shift_mode,tse.transformer.eff.start_drag,tse.transformer.eff.resize,tse.transformer.eff.end_selection]);

//# sourceMappingURL=eff.js.map?rel=1767875393197
