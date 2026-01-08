// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.canvas');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('tse.card');
goog.require('tse.label');
goog.require('tse.transformer');
goog.require('tse.background');
tse.canvas.view = (function tse$canvas$view(p__102850){
var map__102851 = p__102850;
var map__102851__$1 = cljs.core.__destructure_map.call(null,map__102851);
var ctx = map__102851__$1;
var sub = cljs.core.get.call(null,map__102851__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__102851__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var emit_sync = cljs.core.get.call(null,map__102851__$1,new cljs.core.Keyword(null,"emit-sync","emit-sync",553453114));
var _STAR_node = cljs.core.atom.call(null,null);
var inc_pointers = (function (){
return emit_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","update-pointers","item/update-pointers",1125899288),(1)], null));
});
var dec_pointers = (function (){
return emit_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","update-pointers","item/update-pointers",1125899288),(-1)], null));
});
var ref = (function (node){
if(cljs.core.not_EQ_.call(null,node,cljs.core.deref.call(null,_STAR_node))){
var temp__5818__auto___102864 = cljs.core.deref.call(null,_STAR_node);
if(cljs.core.truth_(temp__5818__auto___102864)){
var node_102865__$1 = temp__5818__auto___102864;
var G__102852_102866 = node_102865__$1;
G__102852_102866.removeEventListener("pointerdown",inc_pointers,true);

G__102852_102866.removeEventListener("pointerup",dec_pointers,true);

G__102852_102866.removeEventListener("pointercancel",dec_pointers,true);

} else {
}

if(cljs.core.truth_(node)){
var G__102853_102867 = node;
G__102853_102867.addEventListener("pointerdown",inc_pointers,true);

G__102853_102867.addEventListener("pointerup",dec_pointers,true);

G__102853_102867.addEventListener("pointercancel",dec_pointers,true);

} else {
}

return cljs.core.reset_BANG_.call(null,_STAR_node,node);
} else {
return null;
}
});
return (function (p__102854){
var map__102855 = p__102854;
var map__102855__$1 = cljs.core.__destructure_map.call(null,map__102855);
var ctx__$1 = map__102855__$1;
var sub__$1 = cljs.core.get.call(null,map__102855__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit__$1 = cljs.core.get.call(null,map__102855__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var scale = cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null))),new cljs.core.Keyword(null,"min","min",444991522),0.2,new cljs.core.Keyword(null,"max","max",61366548),2.5,new cljs.core.Keyword(null,"step","step",1288888124),0.1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),scale,new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__102849_SHARP_){
return emit__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","set-scale","canvas/set-scale",1824782031),parseFloat(p1__102849_SHARP_.target.value)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#canvas","div#canvas",2110735133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"left top",new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)))),")"].join(''),new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),"manipulation"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.background.view,ctx__$1], null),(function (){var iter__5523__auto__ = (function tse$canvas$view_$_iter__102856(s__102857){
return (new cljs.core.LazySeq(null,(function (){
var s__102857__$1 = s__102857;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__102857__$1);
if(temp__5818__auto__){
var s__102857__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__102857__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__102857__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__102859 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__102858 = (0);
while(true){
if((i__102858 < size__5522__auto__)){
var id = cljs.core._nth.call(null,c__5521__auto__,i__102858);
cljs.core.chunk_append.call(null,b__102859,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.card.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__102868 = (i__102858 + (1));
i__102858 = G__102868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102859),tse$canvas$view_$_iter__102856.call(null,cljs.core.chunk_rest.call(null,s__102857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102859),null);
}
} else {
var id = cljs.core.first.call(null,s__102857__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.card.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),tse$canvas$view_$_iter__102856.call(null,cljs.core.rest.call(null,s__102857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.deref.call(null,sub__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","layer-indices","item/layer-indices",618492481),new cljs.core.Keyword(null,"cards","cards",169174038)], null))));
})(),(function (){var iter__5523__auto__ = (function tse$canvas$view_$_iter__102860(s__102861){
return (new cljs.core.LazySeq(null,(function (){
var s__102861__$1 = s__102861;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__102861__$1);
if(temp__5818__auto__){
var s__102861__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__102861__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__102861__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__102863 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__102862 = (0);
while(true){
if((i__102862 < size__5522__auto__)){
var id = cljs.core._nth.call(null,c__5521__auto__,i__102862);
cljs.core.chunk_append.call(null,b__102863,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__102869 = (i__102862 + (1));
i__102862 = G__102869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102863),tse$canvas$view_$_iter__102860.call(null,cljs.core.chunk_rest.call(null,s__102861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__102863),null);
}
} else {
var id = cljs.core.first.call(null,s__102861__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.label.view,ctx__$1,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),tse$canvas$view_$_iter__102860.call(null,cljs.core.rest.call(null,s__102861__$2)));
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

//# sourceMappingURL=canvas.js.map?rel=1767875394133
