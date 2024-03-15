// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
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

return carbon.rx.dosync_STAR_.call(null,(function (){
var seq__36622 = cljs.core.seq.call(null,q);
var chunk__36623 = null;
var count__36624 = (0);
var i__36625 = (0);
while(true){
if((i__36625 < count__36624)){
var vec__36636 = cljs.core._nth.call(null,chunk__36623,i__36625);
var seq__36637 = cljs.core.seq.call(null,vec__36636);
var first__36638 = cljs.core.first.call(null,seq__36637);
var seq__36637__$1 = cljs.core.next.call(null,seq__36637);
var key = first__36638;
var args = seq__36637__$1;
var temp__5816__auto___36646 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5816__auto___36646)){
var f_36647 = temp__5816__auto___36646;
var _STAR_rx_STAR__orig_val__36639_36648 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__36640_36649 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__36640_36649);

try{f_36647.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__36639_36648);
}} else {
console.warn("no effect",key);
}


var G__36650 = seq__36622;
var G__36651 = chunk__36623;
var G__36652 = count__36624;
var G__36653 = (i__36625 + (1));
seq__36622 = G__36650;
chunk__36623 = G__36651;
count__36624 = G__36652;
i__36625 = G__36653;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__36622);
if(temp__5818__auto__){
var seq__36622__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36622__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__36622__$1);
var G__36654 = cljs.core.chunk_rest.call(null,seq__36622__$1);
var G__36655 = c__5568__auto__;
var G__36656 = cljs.core.count.call(null,c__5568__auto__);
var G__36657 = (0);
seq__36622 = G__36654;
chunk__36623 = G__36655;
count__36624 = G__36656;
i__36625 = G__36657;
continue;
} else {
var vec__36641 = cljs.core.first.call(null,seq__36622__$1);
var seq__36642 = cljs.core.seq.call(null,vec__36641);
var first__36643 = cljs.core.first.call(null,seq__36642);
var seq__36642__$1 = cljs.core.next.call(null,seq__36642);
var key = first__36643;
var args = seq__36642__$1;
var temp__5816__auto___36658 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5816__auto___36658)){
var f_36659 = temp__5816__auto___36658;
var _STAR_rx_STAR__orig_val__36644_36660 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__36645_36661 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__36645_36661);

try{f_36659.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"emit","emit",-1327179018),emit,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__36644_36660);
}} else {
console.warn("no effect",key);
}


var G__36662 = cljs.core.next.call(null,seq__36622__$1);
var G__36663 = null;
var G__36664 = (0);
var G__36665 = (0);
seq__36622 = G__36662;
chunk__36623 = G__36663;
count__36624 = G__36664;
i__36625 = G__36665;
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
return tse.effect.perform_STAR_.call(null,db,emit,sub,key__GT_fn,queue);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"register-effect","register-effect",163395106),register,new cljs.core.Keyword(null,"emit","emit",-1327179018),emit], null);
});

//# sourceMappingURL=effect.js.map?rel=1710474317923
