// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.utils');
goog.require('cljs.core');
tse.utils.update_selected = (function tse$utils$update_selected(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32485 = arguments.length;
var i__5770__auto___32486 = (0);
while(true){
if((i__5770__auto___32486 < len__5769__auto___32485)){
args__5775__auto__.push((arguments[i__5770__auto___32486]));

var G__32487 = (i__5770__auto___32486 + (1));
i__5770__auto___32486 = G__32487;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return tse.utils.update_selected.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(tse.utils.update_selected.cljs$core$IFn$_invoke$arity$variadic = (function (items,f,args){
return cljs.core.mapv.call(null,(function (item){
if(cljs.core.truth_(cljs.core.get.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788)))){
return cljs.core.apply.call(null,f,item,args);
} else {
return item;
}
}),items);
}));

(tse.utils.update_selected.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tse.utils.update_selected.cljs$lang$applyTo = (function (seq32482){
var G__32483 = cljs.core.first.call(null,seq32482);
var seq32482__$1 = cljs.core.next.call(null,seq32482);
var G__32484 = cljs.core.first.call(null,seq32482__$1);
var seq32482__$2 = cljs.core.next.call(null,seq32482__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32483,G__32484,seq32482__$2);
}));

tse.utils.measure_html = (function tse$utils$measure_html(html){
var ruler = document.getElementById("ruler");
(ruler.innerHTML = html);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ruler.clientWidth,ruler.clientHeight], null);
});

//# sourceMappingURL=utils.js.map?rel=1710474315230
