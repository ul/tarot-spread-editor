// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.transformer.eff');
goog.require('cljs.core');
goog.require('tse.math');
goog.require('tse.utils');
tse.transformer.eff.move = (function tse$transformer$eff$move(p__53500){
var map__53501 = p__53500;
var map__53501__$1 = ((((!((map__53501 == null)))?(((((map__53501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53501):map__53501);
var vec__53502 = cljs.core.get.call(null,map__53501__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__53502,(0),null);
var db = cljs.core.get.call(null,map__53501__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53501__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"origin","origin",1037372088),((function (map__53501,map__53501__$1,vec__53502,dv,db,sub){
return (function (v){
return tse.math.v0.call(null,tse.math.v_PLUS_.call(null,tse.math.v_PERCENT_.call(null,dv,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),v));
});})(map__53501,map__53501__$1,vec__53502,dv,db,sub))
);
});
tse.transformer.eff.resize = (function tse$transformer$eff$resize(p__53507){
var map__53508 = p__53507;
var map__53508__$1 = ((((!((map__53508 == null)))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53508):map__53508);
var vec__53509 = cljs.core.get.call(null,map__53508__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var rect = cljs.core.nth.call(null,vec__53509,(0),null);
var deltaRect = cljs.core.nth.call(null,vec__53509,(1),null);
var db = cljs.core.get.call(null,map__53508__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53508__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var dv = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deltaRect.left,deltaRect.top], null);
var w = rect.width;
var dw = deltaRect.width;
var dd = (w / (w - dw));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),((function (dv,w,dw,dd,map__53508,map__53508__$1,vec__53509,rect,deltaRect,db,sub){
return (function (p1__53506_SHARP_){
return tse.math.snap_resize.call(null,tse.math.v_STAR_.call(null,p1__53506_SHARP_,dd));
});})(dv,w,dw,dd,map__53508,map__53508__$1,vec__53509,rect,deltaRect,db,sub))
);
});
tse.transformer.eff.rotate = (function tse$transformer$eff$rotate(p__53514){
var map__53515 = p__53514;
var map__53515__$1 = ((((!((map__53515 == null)))?(((((map__53515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53515):map__53515);
var vec__53516 = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var dv = cljs.core.nth.call(null,vec__53516,(0),null);
var sub = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var db = cljs.core.get.call(null,map__53515__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__53520 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","entity","transformer/entity",2087554565)], null)));
var map__53520__$1 = ((((!((map__53520 == null)))?(((((map__53520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53520):map__53520);
var vec__53521 = cljs.core.get.call(null,map__53520__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__53521,(0),null);
var y = cljs.core.nth.call(null,vec__53521,(1),null);
var vec__53524 = cljs.core.get.call(null,map__53520__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__53524,(0),null);
var h = cljs.core.nth.call(null,vec__53524,(1),null);
var map__53527 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"rotator","rotator",-1127412981)], null));
var map__53527__$1 = ((((!((map__53527 == null)))?(((((map__53527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53527):map__53527);
var angle = cljs.core.get.call(null,map__53527__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var origin = cljs.core.get.call(null,map__53527__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var c = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.math.center.call(null,x,w),tse.math.center.call(null,y,h)], null);
var origin__$1 = (function (){var or__3949__auto__ = origin;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return tse.math.get_rotator_origin.call(null,x,y,w,h);
}
})();
var angle__$1 = (function (){var or__3949__auto__ = angle;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.apply.call(null,Math.atan2,tse.math.v_.call(null,origin__$1,c));
}
})();
var origin_SINGLEQUOTE_ = tse.math.v_PLUS_.call(null,origin__$1,tse.math.v_PERCENT_.call(null,dv,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))));
var angle_SINGLEQUOTE_ = cljs.core.apply.call(null,Math.atan2,tse.math.v_.call(null,origin_SINGLEQUOTE_,c));
var da = (angle__$1 - angle_SINGLEQUOTE_);
cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"rotator","rotator",-1127412981)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",1037372088),origin_SINGLEQUOTE_,new cljs.core.Keyword(null,"angle","angle",1622094254),angle_SINGLEQUOTE_], null));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),tse.utils.update_selected,cljs.core.update,new cljs.core.Keyword(null,"angle","angle",1622094254),((function (map__53520,map__53520__$1,vec__53521,x,y,vec__53524,w,h,map__53527,map__53527__$1,angle,origin,c,origin__$1,angle__$1,origin_SINGLEQUOTE_,angle_SINGLEQUOTE_,da,map__53515,map__53515__$1,vec__53516,dv,sub,db){
return (function (p1__53513_SHARP_){
return tse.math.snap_angle.call(null,(p1__53513_SHARP_ + da));
});})(map__53520,map__53520__$1,vec__53521,x,y,vec__53524,w,h,map__53527,map__53527__$1,angle,origin,c,origin__$1,angle__$1,origin_SINGLEQUOTE_,angle_SINGLEQUOTE_,da,map__53515,map__53515__$1,vec__53516,dv,sub,db))
);
});
tse.transformer.eff.end_rotation = (function tse$transformer$eff$end_rotation(p__53530){
var map__53531 = p__53530;
var map__53531__$1 = ((((!((map__53531 == null)))?(((((map__53531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53531):map__53531);
var db = cljs.core.get.call(null,map__53531__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),cljs.core.dissoc,new cljs.core.Keyword(null,"rotator","rotator",-1127412981));
});
tse.transformer.eff.start_selection = (function tse$transformer$eff$start_selection(p__53533){
var map__53534 = p__53533;
var map__53534__$1 = ((((!((map__53534 == null)))?(((((map__53534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53534):map__53534);
var vec__53535 = cljs.core.get.call(null,map__53534__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var start = cljs.core.nth.call(null,vec__53535,(0),null);
var client = cljs.core.nth.call(null,vec__53535,(1),null);
var db = cljs.core.get.call(null,map__53534__$1,new cljs.core.Keyword(null,"db","db",993250759));
var emit = cljs.core.get.call(null,map__53534__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var onmove = ((function (map__53534,map__53534__$1,vec__53535,start,client,db,emit){
return (function tse$transformer$eff$start_selection_$_onmove(e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","move-selection","transformer/move-selection",-757803035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)], null));
});})(map__53534,map__53534__$1,vec__53535,start,client,db,emit))
;
var onend = ((function (map__53534,map__53534__$1,vec__53535,start,client,db,emit){
return (function tse$transformer$eff$start_selection_$_onend(e){
window.removeEventListener("mousemove",onmove);

window.removeEventListener("mouseup",tse$transformer$eff$start_selection_$_onend);

return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("transformer","end-selection","transformer/end-selection",-503577064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)], null));
});})(map__53534,map__53534__$1,vec__53535,start,client,db,emit))
;
window.addEventListener("mousemove",onmove);

window.addEventListener("mouseup",onend);

return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"offset","offset",296498311),tse.math.v_.call(null,start,client)], null));
});
tse.transformer.eff.move_selection = (function tse$transformer$eff$move_selection(p__53539){
var map__53540 = p__53539;
var map__53540__$1 = ((((!((map__53540 == null)))?(((((map__53540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53540):map__53540);
var vec__53541 = cljs.core.get.call(null,map__53540__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var v = cljs.core.nth.call(null,vec__53541,(0),null);
var db = cljs.core.get.call(null,map__53540__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"end","end",-268185958)], null),v);
});
tse.transformer.eff.end_selection = (function tse$transformer$eff$end_selection(p__53545){
var map__53546 = p__53545;
var map__53546__$1 = ((((!((map__53546 == null)))?(((((map__53546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53546):map__53546);
var vec__53547 = cljs.core.get.call(null,map__53546__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var end = cljs.core.nth.call(null,vec__53547,(0),null);
var db = cljs.core.get.call(null,map__53546__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__53546__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var items = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","all","item/all",884758209)], null)));
var map__53551 = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transformer","transformer",-1493470620),new cljs.core.Keyword(null,"selector","selector",762528866)], null));
var map__53551__$1 = ((((!((map__53551 == null)))?(((((map__53551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53551):map__53551);
var start = cljs.core.get.call(null,map__53551__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var offset = cljs.core.get.call(null,map__53551__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var end__$1 = tse.math.v_PLUS_.call(null,end,offset);
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
var selector_box = tse.math.selector_box.call(null,scale,start,end__$1);
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),cljs.core.dissoc,new cljs.core.Keyword(null,"selector","selector",762528866));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),((function (items,map__53551,map__53551__$1,start,offset,end__$1,scale,selector_box,map__53546,map__53546__$1,vec__53547,end,db,sub){
return (function (items__$1){
return cljs.core.mapv.call(null,((function (items,map__53551,map__53551__$1,start,offset,end__$1,scale,selector_box,map__53546,map__53546__$1,vec__53547,end,db,sub){
return (function (item){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788),tse.math.overlap_QMARK_.call(null,tse.math.item_box.call(null,item),selector_box));
});})(items,map__53551,map__53551__$1,start,offset,end__$1,scale,selector_box,map__53546,map__53546__$1,vec__53547,end,db,sub))
,items__$1);
});})(items,map__53551,map__53551__$1,start,offset,end__$1,scale,selector_box,map__53546,map__53546__$1,vec__53547,end,db,sub))
);
});
tse.transformer.eff.spec = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("transformer","move","transformer/move",150907650),tse.transformer.eff.move,new cljs.core.Keyword("transformer","resize","transformer/resize",-1725586155),tse.transformer.eff.resize,new cljs.core.Keyword("transformer","rotate","transformer/rotate",2081113824),tse.transformer.eff.rotate,new cljs.core.Keyword("transformer","end-rotation","transformer/end-rotation",1778651104),tse.transformer.eff.end_rotation,new cljs.core.Keyword("transformer","start-selection","transformer/start-selection",-2109443738),tse.transformer.eff.start_selection,new cljs.core.Keyword("transformer","move-selection","transformer/move-selection",-757803035),tse.transformer.eff.move_selection,new cljs.core.Keyword("transformer","end-selection","transformer/end-selection",-503577064),tse.transformer.eff.end_selection], null);

//# sourceMappingURL=eff.js.map?rel=1537946281893
