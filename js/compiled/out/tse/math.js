// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.math');
goog.require('cljs.core');
tse.math.simple_box = (function tse$math$simple_box(p__99003,p__99004){
var vec__99005 = p__99003;
var x1 = cljs.core.nth.call(null,vec__99005,(0),null);
var y1 = cljs.core.nth.call(null,vec__99005,(1),null);
var vec__99008 = p__99004;
var x2 = cljs.core.nth.call(null,vec__99008,(0),null);
var y2 = cljs.core.nth.call(null,vec__99008,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5133__auto__ = x1;
var y__5134__auto__ = x2;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),(function (){var x__5133__auto__ = y1;
var y__5134__auto__ = y2;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),(function (){var x__5130__auto__ = x1;
var y__5131__auto__ = x2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),(function (){var x__5130__auto__ = y1;
var y__5131__auto__ = y2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
});
tse.math.selector_box = (function tse$math$selector_box(scale,p__99011,p__99012){
var vec__99013 = p__99011;
var start_x = cljs.core.nth.call(null,vec__99013,(0),null);
var start_y = cljs.core.nth.call(null,vec__99013,(1),null);
var vec__99016 = p__99012;
var end_x = cljs.core.nth.call(null,vec__99016,(0),null);
var end_y = cljs.core.nth.call(null,vec__99016,(1),null);
var w = (Math.abs((start_x - end_x)) / scale);
var h = (Math.abs((start_y - end_y)) / scale);
var x = (((start_x < end_x))?start_x:(start_x - w));
var y = (((start_y < end_y))?start_y:(start_y - h));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + w),(y + h)], null);
});
tse.math.item_box = (function tse$math$item_box(p__99019){
var map__99020 = p__99019;
var map__99020__$1 = cljs.core.__destructure_map.call(null,map__99020);
var vec__99021 = cljs.core.get.call(null,map__99020__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__99021,(0),null);
var y = cljs.core.nth.call(null,vec__99021,(1),null);
var vec__99024 = cljs.core.get.call(null,map__99020__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__99024,(0),null);
var h = cljs.core.nth.call(null,vec__99024,(1),null);
var angle = cljs.core.get.call(null,map__99020__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
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
var left = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = x1_SINGLEQUOTE_;
var y__5134__auto__ = x2_SINGLEQUOTE_;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = x3_SINGLEQUOTE_;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = x4_SINGLEQUOTE_;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var top = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = y1_SINGLEQUOTE_;
var y__5134__auto__ = y2_SINGLEQUOTE_;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = y3_SINGLEQUOTE_;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = y4_SINGLEQUOTE_;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var right = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = x1_SINGLEQUOTE_;
var y__5131__auto__ = x2_SINGLEQUOTE_;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = x3_SINGLEQUOTE_;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = x4_SINGLEQUOTE_;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var bottom = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = y1_SINGLEQUOTE_;
var y__5131__auto__ = y2_SINGLEQUOTE_;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = y3_SINGLEQUOTE_;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = y4_SINGLEQUOTE_;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
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
if(tse.math.nearby_QMARK_.call(null,x,x_STAR_,threshold)){
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
tse.math.resize_snap_threshold = (1);
tse.math.snap_resize = (function tse$math$snap_resize(p__99027){
var vec__99028 = p__99027;
var x = cljs.core.nth.call(null,vec__99028,(0),null);
var y = cljs.core.nth.call(null,vec__99028,(1),null);
var y_SINGLEQUOTE_ = tse.math.snap_nearby.call(null,y,tse.math.resize_snap,tse.math.resize_snap_threshold);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y_SINGLEQUOTE_ * x) / y),y_SINGLEQUOTE_], null);
});
tse.math.center = (function tse$math$center(x,w){
return (x + (0.5 * w));
});
tse.math.get_rotator_origin = (function tse$math$get_rotator_origin(x,y,w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tse.math.center.call(null,x,w) - (5)),(y - (30))], null);
});
tse.math.merge_boxes = (function tse$math$merge_boxes(p__99031,p__99032){
var vec__99033 = p__99031;
var left1 = cljs.core.nth.call(null,vec__99033,(0),null);
var top1 = cljs.core.nth.call(null,vec__99033,(1),null);
var right1 = cljs.core.nth.call(null,vec__99033,(2),null);
var bottom1 = cljs.core.nth.call(null,vec__99033,(3),null);
var vec__99036 = p__99032;
var left2 = cljs.core.nth.call(null,vec__99036,(0),null);
var top2 = cljs.core.nth.call(null,vec__99036,(1),null);
var right2 = cljs.core.nth.call(null,vec__99036,(2),null);
var bottom2 = cljs.core.nth.call(null,vec__99036,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5133__auto__ = left1;
var y__5134__auto__ = left2;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),(function (){var x__5133__auto__ = top1;
var y__5134__auto__ = top2;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),(function (){var x__5130__auto__ = right1;
var y__5131__auto__ = right2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),(function (){var x__5130__auto__ = bottom1;
var y__5131__auto__ = bottom2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
});
tse.math.v_PLUS_ = (function tse$math$v_PLUS_(p__99039,p__99040){
var vec__99041 = p__99039;
var x1 = cljs.core.nth.call(null,vec__99041,(0),null);
var y1 = cljs.core.nth.call(null,vec__99041,(1),null);
var vec__99044 = p__99040;
var x2 = cljs.core.nth.call(null,vec__99044,(0),null);
var y2 = cljs.core.nth.call(null,vec__99044,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
tse.math.v_ = (function tse$math$v_(p__99047,p__99048){
var vec__99049 = p__99047;
var x1 = cljs.core.nth.call(null,vec__99049,(0),null);
var y1 = cljs.core.nth.call(null,vec__99049,(1),null);
var vec__99052 = p__99048;
var x2 = cljs.core.nth.call(null,vec__99052,(0),null);
var y2 = cljs.core.nth.call(null,vec__99052,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 - x2),(y1 - y2)], null);
});
tse.math.v_STAR_ = (function tse$math$v_STAR_(p__99055,a){
var vec__99056 = p__99055;
var x = cljs.core.nth.call(null,vec__99056,(0),null);
var y = cljs.core.nth.call(null,vec__99056,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * x),(a * y)], null);
});
tse.math.v_PERCENT_ = (function tse$math$v_PERCENT_(p__99059,a){
var vec__99060 = p__99059;
var x = cljs.core.nth.call(null,vec__99060,(0),null);
var y = cljs.core.nth.call(null,vec__99060,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / a),(y / a)], null);
});
tse.math.v0 = (function tse$math$v0(p__99063){
var vec__99064 = p__99063;
var x = cljs.core.nth.call(null,vec__99064,(0),null);
var y = cljs.core.nth.call(null,vec__99064,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = x;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = y;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
});
tse.math.overlap_QMARK_ = (function tse$math$overlap_QMARK_(p__99067,p__99068){
var vec__99069 = p__99067;
var x1 = cljs.core.nth.call(null,vec__99069,(0),null);
var y1 = cljs.core.nth.call(null,vec__99069,(1),null);
var x2 = cljs.core.nth.call(null,vec__99069,(2),null);
var y2 = cljs.core.nth.call(null,vec__99069,(3),null);
var vec__99072 = p__99068;
var x1_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__99072,(0),null);
var y1_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__99072,(1),null);
var x2_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__99072,(2),null);
var y2_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__99072,(3),null);
return (((x1 <= x2_SINGLEQUOTE_)) && ((((x1_SINGLEQUOTE_ <= x2)) && ((((y1 <= y2_SINGLEQUOTE_)) && ((y1_SINGLEQUOTE_ <= y2)))))));
});

//# sourceMappingURL=math.js.map?rel=1767875391715
