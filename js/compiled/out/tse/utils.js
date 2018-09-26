// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.utils');
goog.require('cljs.core');
tse.utils.update_selected = (function tse$utils$update_selected(var_args){
var args__4534__auto__ = [];
var len__4531__auto___51919 = arguments.length;
var i__4532__auto___51920 = (0);
while(true){
if((i__4532__auto___51920 < len__4531__auto___51919)){
args__4534__auto__.push((arguments[i__4532__auto___51920]));

var G__51921 = (i__4532__auto___51920 + (1));
i__4532__auto___51920 = G__51921;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return tse.utils.update_selected.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

tse.utils.update_selected.cljs$core$IFn$_invoke$arity$variadic = (function (items,f,args){
return cljs.core.mapv.call(null,(function (item){
if(cljs.core.truth_(cljs.core.get.call(null,item,new cljs.core.Keyword(null,"selected?","selected?",-742502788)))){
return cljs.core.apply.call(null,f,item,args);
} else {
return item;
}
}),items);
});

tse.utils.update_selected.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tse.utils.update_selected.cljs$lang$applyTo = (function (seq51916){
var G__51917 = cljs.core.first.call(null,seq51916);
var seq51916__$1 = cljs.core.next.call(null,seq51916);
var G__51918 = cljs.core.first.call(null,seq51916__$1);
var seq51916__$2 = cljs.core.next.call(null,seq51916__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51917,G__51918,seq51916__$2);
});

tse.utils.measure_html = (function tse$utils$measure_html(html){
var ruler = document.getElementById("ruler");
ruler.innerHTML = html;

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ruler.clientWidth,ruler.clientHeight], null);
});

//# sourceMappingURL=utils.js.map?rel=1537946275996
