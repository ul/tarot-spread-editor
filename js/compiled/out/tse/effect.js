// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.effect');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.effect.schedule = window.requestAnimationFrame;
tse.effect.register_STAR_ = (function tse$effect$register_STAR_(key__GT_fn,key,f){
return cljs.core._vreset_BANG_.call(null,key__GT_fn,cljs.core.assoc.call(null,cljs.core._deref.call(null,key__GT_fn),key,f));
});
tse.effect.perform_STAR_ = (function tse$effect$perform_STAR_(db,emit,sub,key__GT_fn,queue){
var q = cljs.core.deref.call(null,queue);
cljs.core.vreset_BANG_.call(null,queue,cljs.core.PersistentVector.EMPTY);

return carbon.rx.dosync_STAR_.call(null,((function (q){
return (function (){
var seq__53327 = cljs.core.seq.call(null,q);
var chunk__53328 = null;
var count__53329 = (0);
var i__53330 = (0);
while(true){
if((i__53330 < count__53329)){
var vec__53331 = cljs.core._nth.call(null,chunk__53328,i__53330);
var seq__53332 = cljs.core.seq.call(null,vec__53331);
var first__53333 = cljs.core.first.call(null,seq__53332);
var seq__53332__$1 = cljs.core.next.call(null,seq__53332);
var key = first__53333;
var args = seq__53332__$1;
var temp__5557__auto___53339 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5557__auto___53339)){
var f_53340 = temp__5557__auto___53339;
var _STAR_rx_STAR_53334_53341 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{f_53340.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_53334_53341;
}} else {
console.warn("no effect",key);
}


var G__53342 = seq__53327;
var G__53343 = chunk__53328;
var G__53344 = count__53329;
var G__53345 = (i__53330 + (1));
seq__53327 = G__53342;
chunk__53328 = G__53343;
count__53329 = G__53344;
i__53330 = G__53345;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__53327);
if(temp__5559__auto__){
var seq__53327__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53327__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__53327__$1);
var G__53346 = cljs.core.chunk_rest.call(null,seq__53327__$1);
var G__53347 = c__4351__auto__;
var G__53348 = cljs.core.count.call(null,c__4351__auto__);
var G__53349 = (0);
seq__53327 = G__53346;
chunk__53328 = G__53347;
count__53329 = G__53348;
i__53330 = G__53349;
continue;
} else {
var vec__53335 = cljs.core.first.call(null,seq__53327__$1);
var seq__53336 = cljs.core.seq.call(null,vec__53335);
var first__53337 = cljs.core.first.call(null,seq__53336);
var seq__53336__$1 = cljs.core.next.call(null,seq__53336);
var key = first__53337;
var args = seq__53336__$1;
var temp__5557__auto___53350 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5557__auto___53350)){
var f_53351 = temp__5557__auto___53350;
var _STAR_rx_STAR_53338_53352 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{f_53351.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_53338_53352;
}} else {
console.warn("no effect",key);
}


var G__53353 = cljs.core.next.call(null,seq__53327__$1);
var G__53354 = null;
var G__53355 = (0);
var G__53356 = (0);
seq__53327 = G__53353;
chunk__53328 = G__53354;
count__53329 = G__53355;
i__53330 = G__53356;
continue;
}
} else {
return null;
}
}
break;
}
});})(q))
);
});
tse.effect.emit_STAR_ = (function tse$effect$emit_STAR_(perform,queue,v){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,queue))){
tse.effect.schedule.call(null,perform);
} else {
}

return cljs.core._vreset_BANG_.call(null,queue,cljs.core.conj.call(null,cljs.core._deref.call(null,queue),v));
});
tse.effect.make = (function tse$effect$make(db,sub){
var key__GT_fn = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var queue = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var register = ((function (key__GT_fn,queue){
return (function tse$effect$make_$_register(key,f){
return tse.effect.register_STAR_.call(null,key__GT_fn,key,f);
});})(key__GT_fn,queue))
;
var emit = ((function (key__GT_fn,queue){
return (function tse$effect$make_$_emit(v){
return tse.effect.emit_STAR_.call(null,perform,queue,v);
});})(key__GT_fn,queue))
;
var perform = ((function (key__GT_fn,queue){
return (function tse$effect$make_$_perform(){
return tse.effect.perform_STAR_.call(null,db,emit,sub,key__GT_fn,queue);
});})(key__GT_fn,queue))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"register-effect","register-effect",163395106),register,new cljs.core.Keyword(null,"emit","emit",-1327179018),emit], null);
});

//# sourceMappingURL=effect.js.map?rel=1537946281307
