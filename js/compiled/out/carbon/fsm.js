// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('carbon.fsm');
goog.require('cljs.core');
goog.require('carbon.rx');
carbon.fsm.enter = (function carbon$fsm$enter(state,spec,ctx,event){
var seq__98553 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"enter","enter",1792452624)], null)));
var chunk__98554 = null;
var count__98555 = (0);
var i__98556 = (0);
while(true){
if((i__98556 < count__98555)){
var action = cljs.core._nth.call(null,chunk__98554,i__98556);
action.call(null,ctx,event);


var G__98557 = seq__98553;
var G__98558 = chunk__98554;
var G__98559 = count__98555;
var G__98560 = (i__98556 + (1));
seq__98553 = G__98557;
chunk__98554 = G__98558;
count__98555 = G__98559;
i__98556 = G__98560;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__98553);
if(temp__5818__auto__){
var seq__98553__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98553__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__98553__$1);
var G__98561 = cljs.core.chunk_rest.call(null,seq__98553__$1);
var G__98562 = c__5568__auto__;
var G__98563 = cljs.core.count.call(null,c__5568__auto__);
var G__98564 = (0);
seq__98553 = G__98561;
chunk__98554 = G__98562;
count__98555 = G__98563;
i__98556 = G__98564;
continue;
} else {
var action = cljs.core.first.call(null,seq__98553__$1);
action.call(null,ctx,event);


var G__98565 = cljs.core.next.call(null,seq__98553__$1);
var G__98566 = null;
var G__98567 = (0);
var G__98568 = (0);
seq__98553 = G__98565;
chunk__98554 = G__98566;
count__98555 = G__98567;
i__98556 = G__98568;
continue;
}
} else {
return null;
}
}
break;
}
});
carbon.fsm.exit = (function carbon$fsm$exit(state,spec,ctx,event){
var seq__98569 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"exit","exit",351849638)], null)));
var chunk__98570 = null;
var count__98571 = (0);
var i__98572 = (0);
while(true){
if((i__98572 < count__98571)){
var action = cljs.core._nth.call(null,chunk__98570,i__98572);
action.call(null,ctx,event);


var G__98573 = seq__98569;
var G__98574 = chunk__98570;
var G__98575 = count__98571;
var G__98576 = (i__98572 + (1));
seq__98569 = G__98573;
chunk__98570 = G__98574;
count__98571 = G__98575;
i__98572 = G__98576;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__98569);
if(temp__5818__auto__){
var seq__98569__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98569__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__98569__$1);
var G__98577 = cljs.core.chunk_rest.call(null,seq__98569__$1);
var G__98578 = c__5568__auto__;
var G__98579 = cljs.core.count.call(null,c__5568__auto__);
var G__98580 = (0);
seq__98569 = G__98577;
chunk__98570 = G__98578;
count__98571 = G__98579;
i__98572 = G__98580;
continue;
} else {
var action = cljs.core.first.call(null,seq__98569__$1);
action.call(null,ctx,event);


var G__98581 = cljs.core.next.call(null,seq__98569__$1);
var G__98582 = null;
var G__98583 = (0);
var G__98584 = (0);
seq__98569 = G__98581;
chunk__98570 = G__98582;
count__98571 = G__98583;
i__98572 = G__98584;
continue;
}
} else {
return null;
}
}
break;
}
});
carbon.fsm.input = (function carbon$fsm$input(state,spec,ctx,event){
var seq__98585 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"input","input",556931961)], null)));
var chunk__98587 = null;
var count__98588 = (0);
var i__98589 = (0);
while(true){
if((i__98589 < count__98588)){
var vec__98597 = cljs.core._nth.call(null,chunk__98587,i__98589);
var condition = cljs.core.nth.call(null,vec__98597,(0),null);
var action = cljs.core.nth.call(null,vec__98597,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
action.call(null,ctx,event);


var G__98603 = seq__98585;
var G__98604 = chunk__98587;
var G__98605 = count__98588;
var G__98606 = (i__98589 + (1));
seq__98585 = G__98603;
chunk__98587 = G__98604;
count__98588 = G__98605;
i__98589 = G__98606;
continue;
} else {
var G__98607 = seq__98585;
var G__98608 = chunk__98587;
var G__98609 = count__98588;
var G__98610 = (i__98589 + (1));
seq__98585 = G__98607;
chunk__98587 = G__98608;
count__98588 = G__98609;
i__98589 = G__98610;
continue;
}
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__98585);
if(temp__5818__auto__){
var seq__98585__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98585__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__98585__$1);
var G__98611 = cljs.core.chunk_rest.call(null,seq__98585__$1);
var G__98612 = c__5568__auto__;
var G__98613 = cljs.core.count.call(null,c__5568__auto__);
var G__98614 = (0);
seq__98585 = G__98611;
chunk__98587 = G__98612;
count__98588 = G__98613;
i__98589 = G__98614;
continue;
} else {
var vec__98600 = cljs.core.first.call(null,seq__98585__$1);
var condition = cljs.core.nth.call(null,vec__98600,(0),null);
var action = cljs.core.nth.call(null,vec__98600,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
action.call(null,ctx,event);


var G__98615 = cljs.core.next.call(null,seq__98585__$1);
var G__98616 = null;
var G__98617 = (0);
var G__98618 = (0);
seq__98585 = G__98615;
chunk__98587 = G__98616;
count__98588 = G__98617;
i__98589 = G__98618;
continue;
} else {
var G__98619 = cljs.core.next.call(null,seq__98585__$1);
var G__98620 = null;
var G__98621 = (0);
var G__98622 = (0);
seq__98585 = G__98619;
chunk__98587 = G__98620;
count__98588 = G__98621;
i__98589 = G__98622;
continue;
}
}
} else {
return null;
}
}
break;
}
});
carbon.fsm.transit = (function carbon$fsm$transit(state,spec,ctx,event){
return cljs.core.reduce.call(null,(function (state__$1,p__98623){
var vec__98624 = p__98623;
var condition = cljs.core.nth.call(null,vec__98624,(0),null);
var next_state = cljs.core.nth.call(null,vec__98624,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
return cljs.core.reduced.call(null,(function (){
carbon.fsm.exit.call(null,state__$1,spec,ctx,event);

carbon.fsm.enter.call(null,next_state,spec,ctx,event);

return carbon.fsm.transit.call(null,next_state,spec,ctx,event);
})()
);
} else {
return state__$1;
}
}),state,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"transitions","transitions",-2046216121)], null)));
});
carbon.fsm.execute = (function carbon$fsm$execute(state,spec,ctx,event){
carbon.fsm.input.call(null,state,spec,ctx,event);

return carbon.fsm.transit.call(null,state,spec,ctx,event);
});
carbon.fsm.execute_BANG_ = (function carbon$fsm$execute_BANG_(state,spec,ctx,event){
return carbon.rx.dosync_STAR_.call(null,(function (){
return cljs.core.swap_BANG_.call(null,state,carbon.fsm.execute,spec,ctx,event);
}));
});
/**
 * Returns a function which detects if the first element of its second argument is in `xs` set.
 *   This is convenient for writing input/transition conditions based on matching element type
 *   represented as the first vector element (if you use sum type for events)
 */
carbon.fsm.on = (function carbon$fsm$on(var_args){
var args__5775__auto__ = [];
var len__5769__auto___98632 = arguments.length;
var i__5770__auto___98633 = (0);
while(true){
if((i__5770__auto___98633 < len__5769__auto___98632)){
args__5775__auto__.push((arguments[i__5770__auto___98633]));

var G__98634 = (i__5770__auto___98633 + (1));
i__5770__auto___98633 = G__98634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return carbon.fsm.on.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(carbon.fsm.on.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var s = cljs.core.set.call(null,xs);
return (function (_,p__98628){
var vec__98629 = p__98628;
var y = cljs.core.nth.call(null,vec__98629,(0),null);
return cljs.core.contains_QMARK_.call(null,s,y);
});
}));

(carbon.fsm.on.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(carbon.fsm.on.cljs$lang$applyTo = (function (seq98627){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq98627));
}));

carbon.fsm.with$ = (function carbon$fsm$with(var_args){
var args__5775__auto__ = [];
var len__5769__auto___98640 = arguments.length;
var i__5770__auto___98641 = (0);
while(true){
if((i__5770__auto___98641 < len__5769__auto___98640)){
args__5775__auto__.push((arguments[i__5770__auto___98641]));

var G__98642 = (i__5770__auto___98641 + (1));
i__5770__auto___98641 = G__98642;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return carbon.fsm.with$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(carbon.fsm.with$.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var s = cljs.core.set.call(null,xs);
return (function (_,p__98636){
var vec__98637 = p__98636;
var ___$1 = cljs.core.nth.call(null,vec__98637,(0),null);
var y = cljs.core.nth.call(null,vec__98637,(1),null);
return cljs.core.contains_QMARK_.call(null,s,y);
});
}));

(carbon.fsm.with$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(carbon.fsm.with$.cljs$lang$applyTo = (function (seq98635){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq98635));
}));

carbon.fsm.and_fn = (function carbon$fsm$and_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___98644 = arguments.length;
var i__5770__auto___98645 = (0);
while(true){
if((i__5770__auto___98645 < len__5769__auto___98644)){
args__5775__auto__.push((arguments[i__5770__auto___98645]));

var G__98646 = (i__5770__auto___98645 + (1));
i__5770__auto___98645 = G__98646;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return carbon.fsm.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(carbon.fsm.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (preds){
return (function() { 
var G__98647__delegate = function (xs){
var preds__$1 = cljs.core.seq.call(null,preds);
while(true){
if(preds__$1){
var and__5043__auto__ = cljs.core.apply.call(null,cljs.core.first.call(null,preds__$1),xs);
if(cljs.core.truth_(and__5043__auto__)){
var G__98648 = cljs.core.next.call(null,preds__$1);
preds__$1 = G__98648;
continue;
} else {
return and__5043__auto__;
}
} else {
return true;
}
break;
}
};
var G__98647 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__98649__i = 0, G__98649__a = new Array(arguments.length -  0);
while (G__98649__i < G__98649__a.length) {G__98649__a[G__98649__i] = arguments[G__98649__i + 0]; ++G__98649__i;}
  xs = new cljs.core.IndexedSeq(G__98649__a,0,null);
} 
return G__98647__delegate.call(this,xs);};
G__98647.cljs$lang$maxFixedArity = 0;
G__98647.cljs$lang$applyTo = (function (arglist__98650){
var xs = cljs.core.seq(arglist__98650);
return G__98647__delegate(xs);
});
G__98647.cljs$core$IFn$_invoke$arity$variadic = G__98647__delegate;
return G__98647;
})()
;
}));

(carbon.fsm.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(carbon.fsm.and_fn.cljs$lang$applyTo = (function (seq98643){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq98643));
}));


//# sourceMappingURL=fsm.js.map?rel=1767875391399
