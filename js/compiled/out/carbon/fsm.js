// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('carbon.fsm');
goog.require('cljs.core');
goog.require('carbon.rx');
carbon.fsm.enter = (function carbon$fsm$enter(state,spec,ctx,event){
var seq__52389 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"enter","enter",1792452624)], null)));
var chunk__52390 = null;
var count__52391 = (0);
var i__52392 = (0);
while(true){
if((i__52392 < count__52391)){
var action = cljs.core._nth.call(null,chunk__52390,i__52392);
action.call(null,ctx,event);


var G__52393 = seq__52389;
var G__52394 = chunk__52390;
var G__52395 = count__52391;
var G__52396 = (i__52392 + (1));
seq__52389 = G__52393;
chunk__52390 = G__52394;
count__52391 = G__52395;
i__52392 = G__52396;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__52389);
if(temp__5559__auto__){
var seq__52389__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52389__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__52389__$1);
var G__52397 = cljs.core.chunk_rest.call(null,seq__52389__$1);
var G__52398 = c__4351__auto__;
var G__52399 = cljs.core.count.call(null,c__4351__auto__);
var G__52400 = (0);
seq__52389 = G__52397;
chunk__52390 = G__52398;
count__52391 = G__52399;
i__52392 = G__52400;
continue;
} else {
var action = cljs.core.first.call(null,seq__52389__$1);
action.call(null,ctx,event);


var G__52401 = cljs.core.next.call(null,seq__52389__$1);
var G__52402 = null;
var G__52403 = (0);
var G__52404 = (0);
seq__52389 = G__52401;
chunk__52390 = G__52402;
count__52391 = G__52403;
i__52392 = G__52404;
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
var seq__52405 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"exit","exit",351849638)], null)));
var chunk__52406 = null;
var count__52407 = (0);
var i__52408 = (0);
while(true){
if((i__52408 < count__52407)){
var action = cljs.core._nth.call(null,chunk__52406,i__52408);
action.call(null,ctx,event);


var G__52409 = seq__52405;
var G__52410 = chunk__52406;
var G__52411 = count__52407;
var G__52412 = (i__52408 + (1));
seq__52405 = G__52409;
chunk__52406 = G__52410;
count__52407 = G__52411;
i__52408 = G__52412;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__52405);
if(temp__5559__auto__){
var seq__52405__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52405__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__52405__$1);
var G__52413 = cljs.core.chunk_rest.call(null,seq__52405__$1);
var G__52414 = c__4351__auto__;
var G__52415 = cljs.core.count.call(null,c__4351__auto__);
var G__52416 = (0);
seq__52405 = G__52413;
chunk__52406 = G__52414;
count__52407 = G__52415;
i__52408 = G__52416;
continue;
} else {
var action = cljs.core.first.call(null,seq__52405__$1);
action.call(null,ctx,event);


var G__52417 = cljs.core.next.call(null,seq__52405__$1);
var G__52418 = null;
var G__52419 = (0);
var G__52420 = (0);
seq__52405 = G__52417;
chunk__52406 = G__52418;
count__52407 = G__52419;
i__52408 = G__52420;
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
var seq__52421 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"input","input",556931961)], null)));
var chunk__52423 = null;
var count__52424 = (0);
var i__52425 = (0);
while(true){
if((i__52425 < count__52424)){
var vec__52427 = cljs.core._nth.call(null,chunk__52423,i__52425);
var condition = cljs.core.nth.call(null,vec__52427,(0),null);
var action = cljs.core.nth.call(null,vec__52427,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
action.call(null,ctx,event);


var G__52433 = seq__52421;
var G__52434 = chunk__52423;
var G__52435 = count__52424;
var G__52436 = (i__52425 + (1));
seq__52421 = G__52433;
chunk__52423 = G__52434;
count__52424 = G__52435;
i__52425 = G__52436;
continue;
} else {
var G__52437 = seq__52421;
var G__52438 = chunk__52423;
var G__52439 = count__52424;
var G__52440 = (i__52425 + (1));
seq__52421 = G__52437;
chunk__52423 = G__52438;
count__52424 = G__52439;
i__52425 = G__52440;
continue;
}
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__52421);
if(temp__5559__auto__){
var seq__52421__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52421__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__52421__$1);
var G__52441 = cljs.core.chunk_rest.call(null,seq__52421__$1);
var G__52442 = c__4351__auto__;
var G__52443 = cljs.core.count.call(null,c__4351__auto__);
var G__52444 = (0);
seq__52421 = G__52441;
chunk__52423 = G__52442;
count__52424 = G__52443;
i__52425 = G__52444;
continue;
} else {
var vec__52430 = cljs.core.first.call(null,seq__52421__$1);
var condition = cljs.core.nth.call(null,vec__52430,(0),null);
var action = cljs.core.nth.call(null,vec__52430,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
action.call(null,ctx,event);


var G__52445 = cljs.core.next.call(null,seq__52421__$1);
var G__52446 = null;
var G__52447 = (0);
var G__52448 = (0);
seq__52421 = G__52445;
chunk__52423 = G__52446;
count__52424 = G__52447;
i__52425 = G__52448;
continue;
} else {
var G__52449 = cljs.core.next.call(null,seq__52421__$1);
var G__52450 = null;
var G__52451 = (0);
var G__52452 = (0);
seq__52421 = G__52449;
chunk__52423 = G__52450;
count__52424 = G__52451;
i__52425 = G__52452;
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
return cljs.core.reduce.call(null,(function (state__$1,p__52453){
var vec__52454 = p__52453;
var condition = cljs.core.nth.call(null,vec__52454,(0),null);
var next_state = cljs.core.nth.call(null,vec__52454,(1),null);
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
var args__4534__auto__ = [];
var len__4531__auto___52462 = arguments.length;
var i__4532__auto___52463 = (0);
while(true){
if((i__4532__auto___52463 < len__4531__auto___52462)){
args__4534__auto__.push((arguments[i__4532__auto___52463]));

var G__52464 = (i__4532__auto___52463 + (1));
i__4532__auto___52463 = G__52464;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return carbon.fsm.on.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

carbon.fsm.on.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var s = cljs.core.set.call(null,xs);
return ((function (s){
return (function (_,p__52458){
var vec__52459 = p__52458;
var y = cljs.core.nth.call(null,vec__52459,(0),null);
return cljs.core.contains_QMARK_.call(null,s,y);
});
;})(s))
});

carbon.fsm.on.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
carbon.fsm.on.cljs$lang$applyTo = (function (seq52457){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52457));
});

carbon.fsm.with$ = (function carbon$fsm$with(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52470 = arguments.length;
var i__4532__auto___52471 = (0);
while(true){
if((i__4532__auto___52471 < len__4531__auto___52470)){
args__4534__auto__.push((arguments[i__4532__auto___52471]));

var G__52472 = (i__4532__auto___52471 + (1));
i__4532__auto___52471 = G__52472;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return carbon.fsm.with$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

carbon.fsm.with$.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var s = cljs.core.set.call(null,xs);
return ((function (s){
return (function (_,p__52466){
var vec__52467 = p__52466;
var ___$1 = cljs.core.nth.call(null,vec__52467,(0),null);
var y = cljs.core.nth.call(null,vec__52467,(1),null);
return cljs.core.contains_QMARK_.call(null,s,y);
});
;})(s))
});

carbon.fsm.with$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
carbon.fsm.with$.cljs$lang$applyTo = (function (seq52465){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52465));
});

carbon.fsm.and_fn = (function carbon$fsm$and_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52474 = arguments.length;
var i__4532__auto___52475 = (0);
while(true){
if((i__4532__auto___52475 < len__4531__auto___52474)){
args__4534__auto__.push((arguments[i__4532__auto___52475]));

var G__52476 = (i__4532__auto___52475 + (1));
i__4532__auto___52475 = G__52476;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return carbon.fsm.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

carbon.fsm.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (preds){
return (function() { 
var G__52477__delegate = function (xs){
var preds__$1 = cljs.core.seq.call(null,preds);
while(true){
if(preds__$1){
var and__3938__auto__ = cljs.core.apply.call(null,cljs.core.first.call(null,preds__$1),xs);
if(cljs.core.truth_(and__3938__auto__)){
var G__52478 = cljs.core.next.call(null,preds__$1);
preds__$1 = G__52478;
continue;
} else {
return and__3938__auto__;
}
} else {
return true;
}
break;
}
};
var G__52477 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__52479__i = 0, G__52479__a = new Array(arguments.length -  0);
while (G__52479__i < G__52479__a.length) {G__52479__a[G__52479__i] = arguments[G__52479__i + 0]; ++G__52479__i;}
  xs = new cljs.core.IndexedSeq(G__52479__a,0,null);
} 
return G__52477__delegate.call(this,xs);};
G__52477.cljs$lang$maxFixedArity = 0;
G__52477.cljs$lang$applyTo = (function (arglist__52480){
var xs = cljs.core.seq(arglist__52480);
return G__52477__delegate(xs);
});
G__52477.cljs$core$IFn$_invoke$arity$variadic = G__52477__delegate;
return G__52477;
})()
;
});

carbon.fsm.and_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
carbon.fsm.and_fn.cljs$lang$applyTo = (function (seq52473){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52473));
});


//# sourceMappingURL=fsm.js.map?rel=1537946277430
