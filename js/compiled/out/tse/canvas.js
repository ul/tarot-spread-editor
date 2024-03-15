// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.canvas');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.card');
goog.require('tse.label');
goog.require('tse.transformer');
goog.require('tse.background');
tse.canvas.view = (function tse$canvas$view(p__36471){
var map__36472 = p__36471;
var map__36472__$1 = cljs.core.__destructure_map.call(null,map__36472);
var ctx = map__36472__$1;
var sub = cljs.core.get.call(null,map__36472__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__36472__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return (function (p__36473){
var map__36474 = p__36473;
var map__36474__$1 = cljs.core.__destructure_map.call(null,map__36474);
var ctx__$1 = map__36474__$1;
var sub__$1 = cljs.core.get.call(null,map__36474__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit__$1 = cljs.core.get.call(null,map__36474__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var scale = cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null))),new cljs.core.Keyword(null,"min","min",444991522),0.2,new cljs.core.Keyword(null,"max","max",61366548),2.5,new cljs.core.Keyword(null,"step","step",1288888124),0.1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),scale,new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__36470_SHARP_){
return emit__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","set-scale","canvas/set-scale",1824782031),parseFloat(p1__36470_SHARP_.target.value)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#canvas","div#canvas",2110735133),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"left top",new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),")"].join(''),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background.view,ctx__$1], null),(function (){var iter__5523__auto__ = (function tse$canvas$view_$_iter__36475(s__36476){
return (new cljs.core.LazySeq(null,(function (){
var s__36476__$1 = s__36476;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__36476__$1);
if(temp__5818__auto__){
var s__36476__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36476__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__36476__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__36478 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__36477 = (0);
while(true){
if((i__36477 < size__5522__auto__)){
var id = cljs.core._nth.call(null,c__5521__auto__,i__36477);
cljs.core.chunk_append.call(null,b__36478,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.card.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__36483 = (i__36477 + (1));
i__36477 = G__36483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36478),tse$canvas$view_$_iter__36475.call(null,cljs.core.chunk_rest.call(null,s__36476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36478),null);
}
} else {
var id = cljs.core.first.call(null,s__36476__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.card.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),tse$canvas$view_$_iter__36475.call(null,cljs.core.rest.call(null,s__36476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword(null,"cards","cards",169174038)], null))));
})(),(function (){var iter__5523__auto__ = (function tse$canvas$view_$_iter__36479(s__36480){
return (new cljs.core.LazySeq(null,(function (){
var s__36480__$1 = s__36480;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__36480__$1);
if(temp__5818__auto__){
var s__36480__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36480__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__36480__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__36482 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__36481 = (0);
while(true){
if((i__36481 < size__5522__auto__)){
var id = cljs.core._nth.call(null,c__5521__auto__,i__36481);
cljs.core.chunk_append.call(null,b__36482,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__36484 = (i__36481 + (1));
i__36481 = G__36484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36482),tse$canvas$view_$_iter__36479.call(null,cljs.core.chunk_rest.call(null,s__36480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36482),null);
}
} else {
var id = cljs.core.first.call(null,s__36480__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),tse$canvas$view_$_iter__36479.call(null,cljs.core.rest.call(null,s__36480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword(null,"labels","labels",-626734591)], null))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.transformer.view,ctx__$1], null)], null)], null);
});
});

//# sourceMappingURL=canvas.js.map?rel=1710474317806
