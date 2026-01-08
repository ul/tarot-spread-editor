// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.utils');
goog.require('cljs.core');
tse.utils.update_selected = (function tse$utils$update_selected(var_args){
var args__5775__auto__ = [];
var len__5769__auto___98817 = arguments.length;
var i__5770__auto___98818 = (0);
while(true){
if((i__5770__auto___98818 < len__5769__auto___98817)){
args__5775__auto__.push((arguments[i__5770__auto___98818]));

var G__98819 = (i__5770__auto___98818 + (1));
i__5770__auto___98818 = G__98819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return tse.utils.update_selected.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(tse.utils.update_selected.cljs$core$IFn$_invoke$arity$variadic = (function (items,f,args){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,idx,item){
if(cljs.core.truth_(cljs.core.get.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788)))){
return cljs.core.assoc_BANG_.call(null,acc,idx,cljs.core.apply.call(null,f,item,args));
} else {
return acc;
}
}),cljs.core.transient$.call(null,items),items));
}));

(tse.utils.update_selected.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tse.utils.update_selected.cljs$lang$applyTo = (function (seq98814){
var G__98815 = cljs.core.first.call(null,seq98814);
var seq98814__$1 = cljs.core.next.call(null,seq98814);
var G__98816 = cljs.core.first.call(null,seq98814__$1);
var seq98814__$2 = cljs.core.next.call(null,seq98814__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98815,G__98816,seq98814__$2);
}));

tse.utils.measure_html = (function tse$utils$measure_html(html){
var ruler = document.getElementById("ruler");
(ruler.innerHTML = html);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ruler.clientWidth,ruler.clientHeight], null);
});

//# sourceMappingURL=utils.js.map?rel=1767875391521
