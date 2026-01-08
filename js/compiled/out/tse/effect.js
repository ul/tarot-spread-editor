// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.effect');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.effect.schedule = window.requestAnimationFrame;
tse.effect.register_STAR_ = (function tse$effect$register_STAR_(key__GT_fn,key,f){
return cljs.core._vreset_BANG_.call(null,key__GT_fn,cljs.core.assoc.call(null,cljs.core._deref.call(null,key__GT_fn),key,f));
});
tse.effect.perform_STAR_ = (function tse$effect$perform_STAR_(db,emit,emit_sync,sub,key__GT_fn,queue){
var q = cljs.core.deref.call(null,queue);
cljs.core.vreset_BANG_.call(null,queue,cljs.core.PersistentVector.EMPTY);

return carbon.rx.dosync_STAR_.call(null,(function (){
var seq__103007 = cljs.core.seq.call(null,q);
var chunk__103008 = null;
var count__103009 = (0);
var i__103010 = (0);
while(true){
if((i__103010 < count__103009)){
var vec__103021 = cljs.core._nth.call(null,chunk__103008,i__103010);
var seq__103022 = cljs.core.seq.call(null,vec__103021);
var first__103023 = cljs.core.first.call(null,seq__103022);
var seq__103022__$1 = cljs.core.next.call(null,seq__103022);
var key = first__103023;
var args = seq__103022__$1;
var temp__5816__auto___103031 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5816__auto___103031)){
var f_103032 = temp__5816__auto___103031;
var _STAR_rx_STAR__orig_val__103024_103033 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__103025_103034 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__103025_103034);

try{f_103032.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"emit-sync","emit-sync",553453114),emit_sync,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__103024_103033);
}} else {
console.warn("no effect",key);
}


var G__103035 = seq__103007;
var G__103036 = chunk__103008;
var G__103037 = count__103009;
var G__103038 = (i__103010 + (1));
seq__103007 = G__103035;
chunk__103008 = G__103036;
count__103009 = G__103037;
i__103010 = G__103038;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__103007);
if(temp__5818__auto__){
var seq__103007__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103007__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__103007__$1);
var G__103039 = cljs.core.chunk_rest.call(null,seq__103007__$1);
var G__103040 = c__5568__auto__;
var G__103041 = cljs.core.count.call(null,c__5568__auto__);
var G__103042 = (0);
seq__103007 = G__103039;
chunk__103008 = G__103040;
count__103009 = G__103041;
i__103010 = G__103042;
continue;
} else {
var vec__103026 = cljs.core.first.call(null,seq__103007__$1);
var seq__103027 = cljs.core.seq.call(null,vec__103026);
var first__103028 = cljs.core.first.call(null,seq__103027);
var seq__103027__$1 = cljs.core.next.call(null,seq__103027);
var key = first__103028;
var args = seq__103027__$1;
var temp__5816__auto___103043 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5816__auto___103043)){
var f_103044 = temp__5816__auto___103043;
var _STAR_rx_STAR__orig_val__103029_103045 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__103030_103046 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__103030_103046);

try{f_103044.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"emit-sync","emit-sync",553453114),emit_sync,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__103029_103045);
}} else {
console.warn("no effect",key);
}


var G__103047 = cljs.core.next.call(null,seq__103007__$1);
var G__103048 = null;
var G__103049 = (0);
var G__103050 = (0);
seq__103007 = G__103047;
chunk__103008 = G__103048;
count__103009 = G__103049;
i__103010 = G__103050;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
tse.effect.emit_STAR_ = (function tse$effect$emit_STAR_(perform,queue,v){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,queue))){
tse.effect.schedule.call(null,perform);
} else {
}

return cljs.core._vreset_BANG_.call(null,queue,cljs.core.conj.call(null,cljs.core._deref.call(null,queue),v));
});
tse.effect.emit_sync_STAR_ = (function tse$effect$emit_sync_STAR_(db,emit,emit_sync,sub,key__GT_fn,p__103051){
var vec__103052 = p__103051;
var seq__103053 = cljs.core.seq.call(null,vec__103052);
var first__103054 = cljs.core.first.call(null,seq__103053);
var seq__103053__$1 = cljs.core.next.call(null,seq__103053);
var key = first__103054;
var args = seq__103053__$1;
var temp__5816__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5816__auto__)){
var f = temp__5816__auto__;
var _STAR_rx_STAR__orig_val__103055 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__103056 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__103056);

try{return f.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"emit-sync","emit-sync",553453114),emit_sync,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__103055);
}} else {
return console.warn("no effect",key);
}
});
tse.effect.make = (function tse$effect$make(db,sub){
var key__GT_fn = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var queue = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
var register = (function tse$effect$make_$_register(key,f){
return tse.effect.register_STAR_.call(null,key__GT_fn,key,f);
});
var emit = (function tse$effect$make_$_emit(v){
return tse.effect.emit_STAR_.call(null,perform,queue,v);
});
var perform = (function tse$effect$make_$_perform(){
return tse.effect.perform_STAR_.call(null,db,emit,emit_sync,sub,key__GT_fn,queue);
});
var emit_sync = (function tse$effect$make_$_emit_sync(v){
return tse.effect.emit_sync_STAR_.call(null,db,emit,tse$effect$make_$_emit_sync,sub,key__GT_fn,v);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register-effect","register-effect",163395106),register,new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"emit-sync","emit-sync",553453114),emit_sync], null);
});

//# sourceMappingURL=effect.js.map?rel=1767875394254
