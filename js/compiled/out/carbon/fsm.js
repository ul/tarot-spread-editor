// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('carbon.fsm');
goog.require('cljs.core');
goog.require('carbon.rx');
carbon.fsm.enter = (function carbon$fsm$enter(state,spec,ctx,event){
var seq__32221 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"enter","enter",1792452624)], null)));
var chunk__32222 = null;
var count__32223 = (0);
var i__32224 = (0);
while(true){
if((i__32224 < count__32223)){
var action = cljs.core._nth.call(null,chunk__32222,i__32224);
action.call(null,ctx,event);


var G__32225 = seq__32221;
var G__32226 = chunk__32222;
var G__32227 = count__32223;
var G__32228 = (i__32224 + (1));
seq__32221 = G__32225;
chunk__32222 = G__32226;
count__32223 = G__32227;
i__32224 = G__32228;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__32221);
if(temp__5818__auto__){
var seq__32221__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32221__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32221__$1);
var G__32229 = cljs.core.chunk_rest.call(null,seq__32221__$1);
var G__32230 = c__5568__auto__;
var G__32231 = cljs.core.count.call(null,c__5568__auto__);
var G__32232 = (0);
seq__32221 = G__32229;
chunk__32222 = G__32230;
count__32223 = G__32231;
i__32224 = G__32232;
continue;
} else {
var action = cljs.core.first.call(null,seq__32221__$1);
action.call(null,ctx,event);


var G__32233 = cljs.core.next.call(null,seq__32221__$1);
var G__32234 = null;
var G__32235 = (0);
var G__32236 = (0);
seq__32221 = G__32233;
chunk__32222 = G__32234;
count__32223 = G__32235;
i__32224 = G__32236;
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
var seq__32237 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"exit","exit",351849638)], null)));
var chunk__32238 = null;
var count__32239 = (0);
var i__32240 = (0);
while(true){
if((i__32240 < count__32239)){
var action = cljs.core._nth.call(null,chunk__32238,i__32240);
action.call(null,ctx,event);


var G__32241 = seq__32237;
var G__32242 = chunk__32238;
var G__32243 = count__32239;
var G__32244 = (i__32240 + (1));
seq__32237 = G__32241;
chunk__32238 = G__32242;
count__32239 = G__32243;
i__32240 = G__32244;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__32237);
if(temp__5818__auto__){
var seq__32237__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32237__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32237__$1);
var G__32245 = cljs.core.chunk_rest.call(null,seq__32237__$1);
var G__32246 = c__5568__auto__;
var G__32247 = cljs.core.count.call(null,c__5568__auto__);
var G__32248 = (0);
seq__32237 = G__32245;
chunk__32238 = G__32246;
count__32239 = G__32247;
i__32240 = G__32248;
continue;
} else {
var action = cljs.core.first.call(null,seq__32237__$1);
action.call(null,ctx,event);


var G__32249 = cljs.core.next.call(null,seq__32237__$1);
var G__32250 = null;
var G__32251 = (0);
var G__32252 = (0);
seq__32237 = G__32249;
chunk__32238 = G__32250;
count__32239 = G__32251;
i__32240 = G__32252;
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
var seq__32253 = cljs.core.seq.call(null,cljs.core.get_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"input","input",556931961)], null)));
var chunk__32255 = null;
var count__32256 = (0);
var i__32257 = (0);
while(true){
if((i__32257 < count__32256)){
var vec__32265 = cljs.core._nth.call(null,chunk__32255,i__32257);
var condition = cljs.core.nth.call(null,vec__32265,(0),null);
var action = cljs.core.nth.call(null,vec__32265,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
action.call(null,ctx,event);


var G__32271 = seq__32253;
var G__32272 = chunk__32255;
var G__32273 = count__32256;
var G__32274 = (i__32257 + (1));
seq__32253 = G__32271;
chunk__32255 = G__32272;
count__32256 = G__32273;
i__32257 = G__32274;
continue;
} else {
var G__32275 = seq__32253;
var G__32276 = chunk__32255;
var G__32277 = count__32256;
var G__32278 = (i__32257 + (1));
seq__32253 = G__32275;
chunk__32255 = G__32276;
count__32256 = G__32277;
i__32257 = G__32278;
continue;
}
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__32253);
if(temp__5818__auto__){
var seq__32253__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32253__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32253__$1);
var G__32279 = cljs.core.chunk_rest.call(null,seq__32253__$1);
var G__32280 = c__5568__auto__;
var G__32281 = cljs.core.count.call(null,c__5568__auto__);
var G__32282 = (0);
seq__32253 = G__32279;
chunk__32255 = G__32280;
count__32256 = G__32281;
i__32257 = G__32282;
continue;
} else {
var vec__32268 = cljs.core.first.call(null,seq__32253__$1);
var condition = cljs.core.nth.call(null,vec__32268,(0),null);
var action = cljs.core.nth.call(null,vec__32268,(1),null);
if(cljs.core.truth_(condition.call(null,ctx,event))){
action.call(null,ctx,event);


var G__32283 = cljs.core.next.call(null,seq__32253__$1);
var G__32284 = null;
var G__32285 = (0);
var G__32286 = (0);
seq__32253 = G__32283;
chunk__32255 = G__32284;
count__32256 = G__32285;
i__32257 = G__32286;
continue;
} else {
var G__32287 = cljs.core.next.call(null,seq__32253__$1);
var G__32288 = null;
var G__32289 = (0);
var G__32290 = (0);
seq__32253 = G__32287;
chunk__32255 = G__32288;
count__32256 = G__32289;
i__32257 = G__32290;
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
return cljs.core.reduce.call(null,(function (state__$1,p__32291){
var vec__32292 = p__32291;
var condition = cljs.core.nth.call(null,vec__32292,(0),null);
var next_state = cljs.core.nth.call(null,vec__32292,(1),null);
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
var len__5769__auto___32300 = arguments.length;
var i__5770__auto___32301 = (0);
while(true){
if((i__5770__auto___32301 < len__5769__auto___32300)){
args__5775__auto__.push((arguments[i__5770__auto___32301]));

var G__32302 = (i__5770__auto___32301 + (1));
i__5770__auto___32301 = G__32302;
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
return (function (_,p__32296){
var vec__32297 = p__32296;
var y = cljs.core.nth.call(null,vec__32297,(0),null);
return cljs.core.contains_QMARK_.call(null,s,y);
});
}));

(carbon.fsm.on.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(carbon.fsm.on.cljs$lang$applyTo = (function (seq32295){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32295));
}));

carbon.fsm.with$ = (function carbon$fsm$with(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32308 = arguments.length;
var i__5770__auto___32309 = (0);
while(true){
if((i__5770__auto___32309 < len__5769__auto___32308)){
args__5775__auto__.push((arguments[i__5770__auto___32309]));

var G__32310 = (i__5770__auto___32309 + (1));
i__5770__auto___32309 = G__32310;
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
return (function (_,p__32304){
var vec__32305 = p__32304;
var ___$1 = cljs.core.nth.call(null,vec__32305,(0),null);
var y = cljs.core.nth.call(null,vec__32305,(1),null);
return cljs.core.contains_QMARK_.call(null,s,y);
});
}));

(carbon.fsm.with$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(carbon.fsm.with$.cljs$lang$applyTo = (function (seq32303){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32303));
}));

carbon.fsm.and_fn = (function carbon$fsm$and_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32312 = arguments.length;
var i__5770__auto___32313 = (0);
while(true){
if((i__5770__auto___32313 < len__5769__auto___32312)){
args__5775__auto__.push((arguments[i__5770__auto___32313]));

var G__32314 = (i__5770__auto___32313 + (1));
i__5770__auto___32313 = G__32314;
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
var G__32315__delegate = function (xs){
var preds__$1 = cljs.core.seq.call(null,preds);
while(true){
if(preds__$1){
var and__5043__auto__ = cljs.core.apply.call(null,cljs.core.first.call(null,preds__$1),xs);
if(cljs.core.truth_(and__5043__auto__)){
var G__32316 = cljs.core.next.call(null,preds__$1);
preds__$1 = G__32316;
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
var G__32315 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__32317__i = 0, G__32317__a = new Array(arguments.length -  0);
while (G__32317__i < G__32317__a.length) {G__32317__a[G__32317__i] = arguments[G__32317__i + 0]; ++G__32317__i;}
  xs = new cljs.core.IndexedSeq(G__32317__a,0,null);
} 
return G__32315__delegate.call(this,xs);};
G__32315.cljs$lang$maxFixedArity = 0;
G__32315.cljs$lang$applyTo = (function (arglist__32318){
var xs = cljs.core.seq(arglist__32318);
return G__32315__delegate(xs);
});
G__32315.cljs$core$IFn$_invoke$arity$variadic = G__32315__delegate;
return G__32315;
})()
;
}));

(carbon.fsm.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(carbon.fsm.and_fn.cljs$lang$applyTo = (function (seq32311){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32311));
}));


//# sourceMappingURL=fsm.js.map?rel=1710474315089
