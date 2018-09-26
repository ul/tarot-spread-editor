// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.math');
goog.require('cljs.core');
tse.math.simple_box = (function tse$math$simple_box(p__51978,p__51979){
var vec__51980 = p__51978;
var x1 = cljs.core.nth.call(null,vec__51980,(0),null);
var y1 = cljs.core.nth.call(null,vec__51980,(1),null);
var vec__51983 = p__51979;
var x2 = cljs.core.nth.call(null,vec__51983,(0),null);
var y2 = cljs.core.nth.call(null,vec__51983,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4040__auto__ = x1;
var y__4041__auto__ = x2;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(function (){var x__4040__auto__ = y1;
var y__4041__auto__ = y2;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(function (){var x__4037__auto__ = x1;
var y__4038__auto__ = x2;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})(),(function (){var x__4037__auto__ = y1;
var y__4038__auto__ = y2;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()], null);
});
tse.math.selector_box = (function tse$math$selector_box(scale,p__51986,p__51987){
var vec__51988 = p__51986;
var start_x = cljs.core.nth.call(null,vec__51988,(0),null);
var start_y = cljs.core.nth.call(null,vec__51988,(1),null);
var vec__51991 = p__51987;
var end_x = cljs.core.nth.call(null,vec__51991,(0),null);
var end_y = cljs.core.nth.call(null,vec__51991,(1),null);
var w = (Math.abs((start_x - end_x)) / scale);
var h = (Math.abs((start_y - end_y)) / scale);
var x = (((start_x < end_x))?start_x:(start_x - w));
var y = (((start_y < end_y))?start_y:(start_y - h));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + w),(y + h)], null);
});
tse.math.item_box = (function tse$math$item_box(p__51994){
var map__51995 = p__51994;
var map__51995__$1 = ((((!((map__51995 == null)))?(((((map__51995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51995):map__51995);
var vec__51996 = cljs.core.get.call(null,map__51995__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__51996,(0),null);
var y = cljs.core.nth.call(null,vec__51996,(1),null);
var vec__51999 = cljs.core.get.call(null,map__51995__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__51999,(0),null);
var h = cljs.core.nth.call(null,vec__51999,(1),null);
var angle = cljs.core.get.call(null,map__51995__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var w2 = (0.5 * w);
var h2 = (0.5 * h);
var x0 = (x + w2);
var y0 = (y + h2);
var x1 = (- w2);
var y1 = (- h2);
var x2 = x1;
var y2 = h2;
var x3 = w2;
var y3 = y1;
var x4 = x3;
var y4 = y2;
var cos = Math.cos(angle);
var sin = Math.sin(angle);
var x1_SINGLEQUOTE_ = ((x0 + (x1 * cos)) + ((y1 * sin) * (-1)));
var y1_SINGLEQUOTE_ = ((y0 + (x1 * sin)) + (y1 * cos));
var x2_SINGLEQUOTE_ = ((x0 + (x2 * cos)) + ((y2 * sin) * (-1)));
var y2_SINGLEQUOTE_ = ((y0 + (x2 * sin)) + (y2 * cos));
var x3_SINGLEQUOTE_ = ((x0 + (x3 * cos)) + ((y3 * sin) * (-1)));
var y3_SINGLEQUOTE_ = ((y0 + (x3 * sin)) + (y3 * cos));
var x4_SINGLEQUOTE_ = ((x0 + (x4 * cos)) + ((y4 * sin) * (-1)));
var y4_SINGLEQUOTE_ = ((y0 + (x4 * sin)) + (y4 * cos));
var left = (function (){var x__4040__auto__ = (function (){var x__4040__auto__ = (function (){var x__4040__auto__ = x1_SINGLEQUOTE_;
var y__4041__auto__ = x2_SINGLEQUOTE_;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var y__4041__auto__ = x3_SINGLEQUOTE_;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var y__4041__auto__ = x4_SINGLEQUOTE_;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var top = (function (){var x__4040__auto__ = (function (){var x__4040__auto__ = (function (){var x__4040__auto__ = y1_SINGLEQUOTE_;
var y__4041__auto__ = y2_SINGLEQUOTE_;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var y__4041__auto__ = y3_SINGLEQUOTE_;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var y__4041__auto__ = y4_SINGLEQUOTE_;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var right = (function (){var x__4037__auto__ = (function (){var x__4037__auto__ = (function (){var x__4037__auto__ = x1_SINGLEQUOTE_;
var y__4038__auto__ = x2_SINGLEQUOTE_;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var y__4038__auto__ = x3_SINGLEQUOTE_;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var y__4038__auto__ = x4_SINGLEQUOTE_;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var bottom = (function (){var x__4037__auto__ = (function (){var x__4037__auto__ = (function (){var x__4037__auto__ = y1_SINGLEQUOTE_;
var y__4038__auto__ = y2_SINGLEQUOTE_;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var y__4038__auto__ = y3_SINGLEQUOTE_;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var y__4038__auto__ = y4_SINGLEQUOTE_;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top,right,bottom], null);
});
tse.math.snap = (function tse$math$snap(x,step){
return (Math.round((x / step)) * step);
});
tse.math.nearby_QMARK_ = (function tse$math$nearby_QMARK_(x,x_STAR_,threshold){
return (Math.abs((x - x_STAR_)) <= threshold);
});
tse.math.snap_nearby = (function tse$math$snap_nearby(x,step,threshold){
var x_STAR_ = tse.math.snap.call(null,x,step);
if(cljs.core.truth_(tse.math.nearby_QMARK_.call(null,x,x_STAR_,threshold))){
return x_STAR_;
} else {
return x;
}
});
/**
 * 15°
 */
tse.math.rotation_snap = (Math.PI / (12));
tse.math.rotation_snap_threshold = (Math.PI / (120));
tse.math.snap_angle = (function tse$math$snap_angle(x){
return tse.math.snap_nearby.call(null,x,tse.math.rotation_snap,tse.math.rotation_snap_threshold);
});
tse.math.resize_snap = (10);
tse.math.resize_snap_threshold = (2);
tse.math.snap_resize = (function tse$math$snap_resize(p__52003){
var vec__52004 = p__52003;
var x = cljs.core.nth.call(null,vec__52004,(0),null);
var y = cljs.core.nth.call(null,vec__52004,(1),null);
var y_SINGLEQUOTE_ = tse.math.snap_nearby.call(null,y,tse.math.resize_snap,tse.math.resize_snap_threshold);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y_SINGLEQUOTE_ * x) / y),y_SINGLEQUOTE_], null);
});
tse.math.center = (function tse$math$center(x,w){
return (x + (0.5 * w));
});
tse.math.get_rotator_origin = (function tse$math$get_rotator_origin(x,y,w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tse.math.center.call(null,x,w) - (5)),(y - (30))], null);
});
tse.math.merge_boxes = (function tse$math$merge_boxes(p__52007,p__52008){
var vec__52009 = p__52007;
var left1 = cljs.core.nth.call(null,vec__52009,(0),null);
var top1 = cljs.core.nth.call(null,vec__52009,(1),null);
var right1 = cljs.core.nth.call(null,vec__52009,(2),null);
var bottom1 = cljs.core.nth.call(null,vec__52009,(3),null);
var vec__52012 = p__52008;
var left2 = cljs.core.nth.call(null,vec__52012,(0),null);
var top2 = cljs.core.nth.call(null,vec__52012,(1),null);
var right2 = cljs.core.nth.call(null,vec__52012,(2),null);
var bottom2 = cljs.core.nth.call(null,vec__52012,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4040__auto__ = left1;
var y__4041__auto__ = left2;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(function (){var x__4040__auto__ = top1;
var y__4041__auto__ = top2;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(function (){var x__4037__auto__ = right1;
var y__4038__auto__ = right2;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})(),(function (){var x__4037__auto__ = bottom1;
var y__4038__auto__ = bottom2;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()], null);
});
tse.math.v_PLUS_ = (function tse$math$v_PLUS_(p__52015,p__52016){
var vec__52017 = p__52015;
var x1 = cljs.core.nth.call(null,vec__52017,(0),null);
var y1 = cljs.core.nth.call(null,vec__52017,(1),null);
var vec__52020 = p__52016;
var x2 = cljs.core.nth.call(null,vec__52020,(0),null);
var y2 = cljs.core.nth.call(null,vec__52020,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
tse.math.v_ = (function tse$math$v_(p__52023,p__52024){
var vec__52025 = p__52023;
var x1 = cljs.core.nth.call(null,vec__52025,(0),null);
var y1 = cljs.core.nth.call(null,vec__52025,(1),null);
var vec__52028 = p__52024;
var x2 = cljs.core.nth.call(null,vec__52028,(0),null);
var y2 = cljs.core.nth.call(null,vec__52028,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - x2),(y1 - y2)], null);
});
tse.math.v_STAR_ = (function tse$math$v_STAR_(p__52031,a){
var vec__52032 = p__52031;
var x = cljs.core.nth.call(null,vec__52032,(0),null);
var y = cljs.core.nth.call(null,vec__52032,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * x),(a * y)], null);
});
tse.math.v_PERCENT_ = (function tse$math$v_PERCENT_(p__52035,a){
var vec__52036 = p__52035;
var x = cljs.core.nth.call(null,vec__52036,(0),null);
var y = cljs.core.nth.call(null,vec__52036,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / a),(y / a)], null);
});
tse.math.v0 = (function tse$math$v0(p__52039){
var vec__52040 = p__52039;
var x = cljs.core.nth.call(null,vec__52040,(0),null);
var y = cljs.core.nth.call(null,vec__52040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4037__auto__ = (0);
var y__4038__auto__ = x;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})(),(function (){var x__4037__auto__ = (0);
var y__4038__auto__ = y;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()], null);
});
tse.math.overlap_QMARK_ = (function tse$math$overlap_QMARK_(p__52043,p__52044){
var vec__52045 = p__52043;
var x1 = cljs.core.nth.call(null,vec__52045,(0),null);
var y1 = cljs.core.nth.call(null,vec__52045,(1),null);
var x2 = cljs.core.nth.call(null,vec__52045,(2),null);
var y2 = cljs.core.nth.call(null,vec__52045,(3),null);
var vec__52048 = p__52044;
var x1_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52048,(0),null);
var y1_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52048,(1),null);
var x2_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52048,(2),null);
var y2_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__52048,(3),null);
return (((x1 <= x2_SINGLEQUOTE_)) && ((x1_SINGLEQUOTE_ <= x2)) && ((y1 <= y2_SINGLEQUOTE_)) && ((y1_SINGLEQUOTE_ <= y2)));
});

//# sourceMappingURL=math.js.map?rel=1537946276329
