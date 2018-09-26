// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.canvas');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.card');
goog.require('tse.label');
goog.require('tse.transformer');
goog.require('tse.background');
tse.canvas.view = (function tse$canvas$view(p__53917){
var map__53918 = p__53917;
var map__53918__$1 = ((((!((map__53918 == null)))?(((((map__53918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53918):map__53918);
var ctx = map__53918__$1;
var sub = cljs.core.get.call(null,map__53918__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__53918__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return ((function (map__53918,map__53918__$1,ctx,sub,emit){
return (function (p__53920){
var map__53921 = p__53920;
var map__53921__$1 = ((((!((map__53921 == null)))?(((((map__53921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53921):map__53921);
var ctx__$1 = map__53921__$1;
var sub__$1 = cljs.core.get.call(null,map__53921__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit__$1 = cljs.core.get.call(null,map__53921__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var scale = cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null))),new cljs.core.Keyword(null,"min","min",444991522),0.2,new cljs.core.Keyword(null,"max","max",61366548),2.5,new cljs.core.Keyword(null,"step","step",1288888124),0.1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),scale,new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit){
return (function (p1__53916_SHARP_){
return emit__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","set-scale","canvas/set-scale",1824782031),parseFloat(p1__53916_SHARP_.target.value)], null));
});})(scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit))
], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#canvas","div#canvas",2110735133),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"left top",new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),")"].join(''),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background.view,ctx__$1], null),(function (){var iter__4324__auto__ = ((function (scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit){
return (function tse$canvas$view_$_iter__53923(s__53924){
return (new cljs.core.LazySeq(null,((function (scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit){
return (function (){
var s__53924__$1 = s__53924;
while(true){
var temp__5559__auto__ = cljs.core.seq.call(null,s__53924__$1);
if(temp__5559__auto__){
var s__53924__$2 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53924__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__53924__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__53926 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__53925 = (0);
while(true){
if((i__53925 < size__4323__auto__)){
var id = cljs.core._nth.call(null,c__4322__auto__,i__53925);
cljs.core.chunk_append.call(null,b__53926,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.card.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53931 = (i__53925 + (1));
i__53925 = G__53931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53926),tse$canvas$view_$_iter__53923.call(null,cljs.core.chunk_rest.call(null,s__53924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53926),null);
}
} else {
var id = cljs.core.first.call(null,s__53924__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.card.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),tse$canvas$view_$_iter__53923.call(null,cljs.core.rest.call(null,s__53924__$2)));
}
} else {
return null;
}
break;
}
});})(scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit))
,null,null));
});})(scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword(null,"cards","cards",169174038)], null))));
})(),(function (){var iter__4324__auto__ = ((function (scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit){
return (function tse$canvas$view_$_iter__53927(s__53928){
return (new cljs.core.LazySeq(null,((function (scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit){
return (function (){
var s__53928__$1 = s__53928;
while(true){
var temp__5559__auto__ = cljs.core.seq.call(null,s__53928__$1);
if(temp__5559__auto__){
var s__53928__$2 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53928__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__53928__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__53930 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__53929 = (0);
while(true){
if((i__53929 < size__4323__auto__)){
var id = cljs.core._nth.call(null,c__4322__auto__,i__53929);
cljs.core.chunk_append.call(null,b__53930,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53932 = (i__53929 + (1));
i__53929 = G__53932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53930),tse$canvas$view_$_iter__53927.call(null,cljs.core.chunk_rest.call(null,s__53928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53930),null);
}
} else {
var id = cljs.core.first.call(null,s__53928__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),tse$canvas$view_$_iter__53927.call(null,cljs.core.rest.call(null,s__53928__$2)));
}
} else {
return null;
}
break;
}
});})(scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit))
,null,null));
});})(scale,map__53921,map__53921__$1,ctx__$1,sub__$1,emit__$1,map__53918,map__53918__$1,ctx,sub,emit))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword(null,"labels","labels",-626734591)], null))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.transformer.view,ctx__$1], null)], null)], null);
});
;})(map__53918,map__53918__$1,ctx,sub,emit))
});

//# sourceMappingURL=canvas.js.map?rel=1537946283115
