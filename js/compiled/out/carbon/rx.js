// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('carbon.rx');
goog.require('cljs.core');

/**
 * @interface
 */
carbon.rx.IReactiveSource = function(){};

var carbon$rx$IReactiveSource$get_rank$dyn_98331 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.get_rank[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (carbon.rx.get_rank["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.get-rank",_);
}
}
});
carbon.rx.get_rank = (function carbon$rx$get_rank(_){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveSource$get_rank$arity$1 == null)))))){
return _.carbon$rx$IReactiveSource$get_rank$arity$1(_);
} else {
return carbon$rx$IReactiveSource$get_rank$dyn_98331.call(null,_);
}
});

var carbon$rx$IReactiveSource$add_sink$dyn_98332 = (function (_,sink){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.add_sink[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,sink);
} else {
var m__5392__auto__ = (carbon.rx.add_sink["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,sink);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.add-sink",_);
}
}
});
carbon.rx.add_sink = (function carbon$rx$add_sink(_,sink){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveSource$add_sink$arity$2 == null)))))){
return _.carbon$rx$IReactiveSource$add_sink$arity$2(_,sink);
} else {
return carbon$rx$IReactiveSource$add_sink$dyn_98332.call(null,_,sink);
}
});

var carbon$rx$IReactiveSource$remove_sink$dyn_98333 = (function (_,sink){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.remove_sink[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,sink);
} else {
var m__5392__auto__ = (carbon.rx.remove_sink["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,sink);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.remove-sink",_);
}
}
});
carbon.rx.remove_sink = (function carbon$rx$remove_sink(_,sink){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveSource$remove_sink$arity$2 == null)))))){
return _.carbon$rx$IReactiveSource$remove_sink$arity$2(_,sink);
} else {
return carbon$rx$IReactiveSource$remove_sink$dyn_98333.call(null,_,sink);
}
});

var carbon$rx$IReactiveSource$get_sinks$dyn_98334 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.get_sinks[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (carbon.rx.get_sinks["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.get-sinks",_);
}
}
});
carbon.rx.get_sinks = (function carbon$rx$get_sinks(_){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveSource$get_sinks$arity$1 == null)))))){
return _.carbon$rx$IReactiveSource$get_sinks$arity$1(_);
} else {
return carbon$rx$IReactiveSource$get_sinks$dyn_98334.call(null,_);
}
});


/**
 * @interface
 */
carbon.rx.IReactiveExpression = function(){};

var carbon$rx$IReactiveExpression$compute$dyn_98335 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.compute[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (carbon.rx.compute["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.compute",_);
}
}
});
carbon.rx.compute = (function carbon$rx$compute(_){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveExpression$compute$arity$1 == null)))))){
return _.carbon$rx$IReactiveExpression$compute$arity$1(_);
} else {
return carbon$rx$IReactiveExpression$compute$dyn_98335.call(null,_);
}
});

var carbon$rx$IReactiveExpression$computed_QMARK_$dyn_98336 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.computed_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (carbon.rx.computed_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.computed?",_);
}
}
});
carbon.rx.computed_QMARK_ = (function carbon$rx$computed_QMARK_(_){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveExpression$computed_QMARK_$arity$1 == null)))))){
return _.carbon$rx$IReactiveExpression$computed_QMARK_$arity$1(_);
} else {
return carbon$rx$IReactiveExpression$computed_QMARK_$dyn_98336.call(null,_);
}
});

var carbon$rx$IReactiveExpression$gc$dyn_98337 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.gc[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (carbon.rx.gc["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.gc",_);
}
}
});
carbon.rx.gc = (function carbon$rx$gc(_){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveExpression$gc$arity$1 == null)))))){
return _.carbon$rx$IReactiveExpression$gc$arity$1(_);
} else {
return carbon$rx$IReactiveExpression$gc$dyn_98337.call(null,_);
}
});

var carbon$rx$IReactiveExpression$add_source$dyn_98338 = (function (_,source){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.add_source[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,source);
} else {
var m__5392__auto__ = (carbon.rx.add_source["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,source);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.add-source",_);
}
}
});
carbon.rx.add_source = (function carbon$rx$add_source(_,source){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveExpression$add_source$arity$2 == null)))))){
return _.carbon$rx$IReactiveExpression$add_source$arity$2(_,source);
} else {
return carbon$rx$IReactiveExpression$add_source$dyn_98338.call(null,_,source);
}
});

var carbon$rx$IReactiveExpression$remove_source$dyn_98339 = (function (_,source){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.remove_source[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,source);
} else {
var m__5392__auto__ = (carbon.rx.remove_source["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,source);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.remove-source",_);
}
}
});
carbon.rx.remove_source = (function carbon$rx$remove_source(_,source){
if((((!((_ == null)))) && ((!((_.carbon$rx$IReactiveExpression$remove_source$arity$2 == null)))))){
return _.carbon$rx$IReactiveExpression$remove_source$arity$2(_,source);
} else {
return carbon$rx$IReactiveExpression$remove_source$dyn_98339.call(null,_,source);
}
});


/**
 * @interface
 */
carbon.rx.IDrop = function(){};

var carbon$rx$IDrop$add_drop$dyn_98340 = (function (_,key,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.add_drop[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,key,f);
} else {
var m__5392__auto__ = (carbon.rx.add_drop["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,key,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDrop.add-drop",_);
}
}
});
carbon.rx.add_drop = (function carbon$rx$add_drop(_,key,f){
if((((!((_ == null)))) && ((!((_.carbon$rx$IDrop$add_drop$arity$3 == null)))))){
return _.carbon$rx$IDrop$add_drop$arity$3(_,key,f);
} else {
return carbon$rx$IDrop$add_drop$dyn_98340.call(null,_,key,f);
}
});

var carbon$rx$IDrop$remove_drop$dyn_98341 = (function (_,key){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.remove_drop[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_,key);
} else {
var m__5392__auto__ = (carbon.rx.remove_drop["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_,key);
} else {
throw cljs.core.missing_protocol.call(null,"IDrop.remove-drop",_);
}
}
});
carbon.rx.remove_drop = (function carbon$rx$remove_drop(_,key){
if((((!((_ == null)))) && ((!((_.carbon$rx$IDrop$remove_drop$arity$2 == null)))))){
return _.carbon$rx$IDrop$remove_drop$arity$2(_,key);
} else {
return carbon$rx$IDrop$remove_drop$dyn_98341.call(null,_,key);
}
});

var carbon$rx$IDrop$notify_drops$dyn_98342 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (carbon.rx.notify_drops[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (carbon.rx.notify_drops["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDrop.notify-drops",_);
}
}
});
carbon.rx.notify_drops = (function carbon$rx$notify_drops(_){
if((((!((_ == null)))) && ((!((_.carbon$rx$IDrop$notify_drops$arity$1 == null)))))){
return _.carbon$rx$IDrop$notify_drops$arity$1(_);
} else {
return carbon$rx$IDrop$notify_drops$dyn_98342.call(null,_);
}
});

carbon.rx._STAR_rx_STAR_ = null;
carbon.rx._STAR_value_STAR_ = null;
carbon.rx._STAR_rank_STAR_ = null;
carbon.rx._STAR_dirty_sinks_STAR_ = null;
carbon.rx._STAR_dirty_sources_STAR_ = null;
carbon.rx._STAR_provenance_STAR_ = cljs.core.PersistentVector.EMPTY;
carbon.rx.compare_rank = (function carbon$rx$compare_rank(x,y){
var z = (carbon.rx.get_rank.call(null,x) - carbon.rx.get_rank.call(null,y));
if((z === (0))){
if((x === y)){
return (0);
} else {
return (-1);
}
} else {
return z;
}
});
carbon.rx.empty_queue = cljs.core.sorted_set_by.call(null,carbon.rx.compare_rank);
/**
 * Recursively compute all dirty sinks in the `queue` and return all visited sources to clean.
 */
carbon.rx.propagate = (function carbon$rx$propagate(queue){
var _STAR_rx_STAR__orig_val__98343 = carbon.rx._STAR_rx_STAR_;
var _STAR_rank_STAR__orig_val__98344 = carbon.rx._STAR_rank_STAR_;
var _STAR_rx_STAR__temp_val__98345 = null;
var _STAR_rank_STAR__temp_val__98346 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98345);

(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__temp_val__98346);

try{var queue__$1 = queue;
var dirty = cljs.core.List.EMPTY;
while(true){
var temp__5816__auto__ = cljs.core.first.call(null,queue__$1);
if(cljs.core.truth_(temp__5816__auto__)){
var x = temp__5816__auto__;
var queue__$2 = cljs.core.disj.call(null,queue__$1,x);
var G__98347 = ((cljs.core._EQ_.call(null,cljs.core.deref.call(null,x),carbon.rx.compute.call(null,x)))?queue__$2:cljs.core.into.call(null,queue__$2,carbon.rx.get_sinks.call(null,x)));
var G__98348 = cljs.core.conj.call(null,dirty,x);
queue__$1 = G__98347;
dirty = G__98348;
continue;
} else {
return dirty;
}
break;
}
}finally {(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__orig_val__98344);

(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98343);
}});
/**
 * Recursively garbage collect all disconnected sources in the `queue`
 */
carbon.rx.clean = (function carbon$rx$clean(queue){
var seq__98349 = cljs.core.seq.call(null,queue);
var chunk__98350 = null;
var count__98351 = (0);
var i__98352 = (0);
while(true){
if((i__98352 < count__98351)){
var source = cljs.core._nth.call(null,chunk__98350,i__98352);
carbon.rx.gc.call(null,source);


var G__98353 = seq__98349;
var G__98354 = chunk__98350;
var G__98355 = count__98351;
var G__98356 = (i__98352 + (1));
seq__98349 = G__98353;
chunk__98350 = G__98354;
count__98351 = G__98355;
i__98352 = G__98356;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__98349);
if(temp__5818__auto__){
var seq__98349__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98349__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__98349__$1);
var G__98357 = cljs.core.chunk_rest.call(null,seq__98349__$1);
var G__98358 = c__5568__auto__;
var G__98359 = cljs.core.count.call(null,c__5568__auto__);
var G__98360 = (0);
seq__98349 = G__98357;
chunk__98350 = G__98358;
count__98351 = G__98359;
i__98352 = G__98360;
continue;
} else {
var source = cljs.core.first.call(null,seq__98349__$1);
carbon.rx.gc.call(null,source);


var G__98361 = cljs.core.next.call(null,seq__98349__$1);
var G__98362 = null;
var G__98363 = (0);
var G__98364 = (0);
seq__98349 = G__98361;
chunk__98350 = G__98362;
count__98351 = G__98363;
i__98352 = G__98364;
continue;
}
} else {
return null;
}
}
break;
}
});
carbon.rx.register = (function carbon$rx$register(source){
if(cljs.core.truth_(carbon.rx._STAR_rx_STAR_)){
carbon.rx.add_sink.call(null,source,carbon.rx._STAR_rx_STAR_);

carbon.rx.add_source.call(null,carbon.rx._STAR_rx_STAR_,source);

return cljs.core.swap_BANG_.call(null,carbon.rx._STAR_rank_STAR_,cljs.core.max,carbon.rx.get_rank.call(null,source));
} else {
return null;
}
});
carbon.rx.dosync_STAR_ = (function carbon$rx$dosync_STAR_(f){
var sinks = (function (){var or__5045__auto__ = carbon.rx._STAR_dirty_sinks_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.atom.call(null,carbon.rx.empty_queue);
}
})();
var sources = (function (){var or__5045__auto__ = carbon.rx._STAR_dirty_sources_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.atom.call(null,carbon.rx.empty_queue);
}
})();
var result = (function (){var _STAR_dirty_sinks_STAR__orig_val__98365 = carbon.rx._STAR_dirty_sinks_STAR_;
var _STAR_dirty_sources_STAR__orig_val__98366 = carbon.rx._STAR_dirty_sources_STAR_;
var _STAR_dirty_sinks_STAR__temp_val__98367 = sinks;
var _STAR_dirty_sources_STAR__temp_val__98368 = sources;
(carbon.rx._STAR_dirty_sinks_STAR_ = _STAR_dirty_sinks_STAR__temp_val__98367);

(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__temp_val__98368);

try{return f.call(null);
}finally {(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__orig_val__98366);

(carbon.rx._STAR_dirty_sinks_STAR_ = _STAR_dirty_sinks_STAR__orig_val__98365);
}})();
if(cljs.core.truth_(carbon.rx._STAR_dirty_sinks_STAR_)){
} else {
var _STAR_dirty_sources_STAR__orig_val__98369_98371 = carbon.rx._STAR_dirty_sources_STAR_;
var _STAR_dirty_sources_STAR__temp_val__98370_98372 = sources;
(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__temp_val__98370_98372);

try{cljs.core.swap_BANG_.call(null,carbon.rx._STAR_dirty_sources_STAR_,cljs.core.into,carbon.rx.propagate.call(null,cljs.core.deref.call(null,sinks)));
}finally {(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__orig_val__98369_98371);
}}

if(cljs.core.truth_(carbon.rx._STAR_dirty_sources_STAR_)){
} else {
carbon.rx.clean.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,sources)));
}

return result;
});
carbon.rx.safe_realized_QMARK_ = (function carbon$rx$safe_realized_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPending$))))?true:false):false)){
return cljs.core.realized_QMARK_.call(null,x);
} else {
return true;
}
});
carbon.rx.fully_realized_QMARK_ = (function carbon$rx$fully_realized_QMARK_(form){
if(cljs.core.seqable_QMARK_.call(null,form)){
return ((carbon.rx.safe_realized_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,carbon.rx.fully_realized_QMARK_,form)));
} else {
return carbon.rx.safe_realized_QMARK_.call(null,form);
}
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {carbon.rx.IReactiveSource}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {carbon.rx.IDrop}
 * @implements {cljs.core.IDeref}
 * @implements {carbon.rx.IReactiveExpression}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {carbon.rx.Object}
*/
carbon.rx.ReactiveExpression = (function (getter,setter,metadata,validator,drop,state,watches,rank,sources,sinks){
this.getter = getter;
this.setter = setter;
this.metadata = metadata;
this.validator = validator;
this.drop = drop;
this.state = state;
this.watches = watches;
this.rank = rank;
this.sources = sources;
this.sinks = sinks;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
(carbon.rx.ReactiveExpression.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<RLens: ");

cljs.core.pr_writer.call(null,cljs.core.deref.call(null,self__.state),writer,opts);

return cljs.core._write.call(null,writer,">");
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.metadata;
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.setter)){
} else {
throw (new Error(["Assert failed: ","Can't reset lens w/o setter","\n","setter"].join('')));
}

if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

carbon.rx.dosync_STAR_.call(null,(function (){
return self__.setter.call(null,new_value);
}));

return new_value;
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__98375 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__98376 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98376);

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1)));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98375);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,x){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__98377 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__98378 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98378);

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1),x));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98377);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,x,y){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__98379 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__98380 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98380);

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1),x,y));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98379);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,xs){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__98381 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__98382 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98382);

try{return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core.deref.call(null,this$__$1),x,y,xs));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98381);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__98383 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watches));
var chunk__98384 = null;
var count__98385 = (0);
var i__98386 = (0);
while(true){
if((i__98386 < count__98385)){
var vec__98393 = cljs.core._nth.call(null,chunk__98384,i__98386);
var key = cljs.core.nth.call(null,vec__98393,(0),null);
var f = cljs.core.nth.call(null,vec__98393,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__98451 = seq__98383;
var G__98452 = chunk__98384;
var G__98453 = count__98385;
var G__98454 = (i__98386 + (1));
seq__98383 = G__98451;
chunk__98384 = G__98452;
count__98385 = G__98453;
i__98386 = G__98454;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__98383);
if(temp__5818__auto__){
var seq__98383__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98383__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__98383__$1);
var G__98455 = cljs.core.chunk_rest.call(null,seq__98383__$1);
var G__98456 = c__5568__auto__;
var G__98457 = cljs.core.count.call(null,c__5568__auto__);
var G__98458 = (0);
seq__98383 = G__98455;
chunk__98384 = G__98456;
count__98385 = G__98457;
i__98386 = G__98458;
continue;
} else {
var vec__98396 = cljs.core.first.call(null,seq__98383__$1);
var key = cljs.core.nth.call(null,vec__98396,(0),null);
var f = cljs.core.nth.call(null,vec__98396,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__98459 = cljs.core.next.call(null,seq__98383__$1);
var G__98460 = null;
var G__98461 = (0);
var G__98462 = (0);
seq__98383 = G__98459;
chunk__98384 = G__98460;
count__98385 = G__98461;
i__98386 = G__98462;
continue;
}
} else {
return null;
}
}
break;
}
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(carbon.rx.computed_QMARK_.call(null,this$__$1))){
} else {
carbon.rx.compute.call(null,this$__$1);
}

cljs.core.swap_BANG_.call(null,self__.watches,cljs.core.assoc,key,f);

return this$__$1;
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.watches,cljs.core.dissoc,key);

carbon.rx.gc.call(null,this$__$1);

return this$__$1;
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$ = cljs.core.PROTOCOL_SENTINEL);

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$add_drop$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.drop,cljs.core.assoc,key,f);

return this$__$1;
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$remove_drop$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.drop,cljs.core.dissoc,key);

return this$__$1;
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$notify_drops$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__98399 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.drop));
var chunk__98400 = null;
var count__98401 = (0);
var i__98402 = (0);
while(true){
if((i__98402 < count__98401)){
var vec__98409 = cljs.core._nth.call(null,chunk__98400,i__98402);
var key = cljs.core.nth.call(null,vec__98409,(0),null);
var f = cljs.core.nth.call(null,vec__98409,(1),null);
f.call(null,key,this$__$1);


var G__98463 = seq__98399;
var G__98464 = chunk__98400;
var G__98465 = count__98401;
var G__98466 = (i__98402 + (1));
seq__98399 = G__98463;
chunk__98400 = G__98464;
count__98401 = G__98465;
i__98402 = G__98466;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__98399);
if(temp__5818__auto__){
var seq__98399__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98399__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__98399__$1);
var G__98467 = cljs.core.chunk_rest.call(null,seq__98399__$1);
var G__98468 = c__5568__auto__;
var G__98469 = cljs.core.count.call(null,c__5568__auto__);
var G__98470 = (0);
seq__98399 = G__98467;
chunk__98400 = G__98468;
count__98401 = G__98469;
i__98402 = G__98470;
continue;
} else {
var vec__98412 = cljs.core.first.call(null,seq__98399__$1);
var key = cljs.core.nth.call(null,vec__98412,(0),null);
var f = cljs.core.nth.call(null,vec__98412,(1),null);
f.call(null,key,this$__$1);


var G__98471 = cljs.core.next.call(null,seq__98399__$1);
var G__98472 = null;
var G__98473 = (0);
var G__98474 = (0);
seq__98399 = G__98471;
chunk__98400 = G__98472;
count__98401 = G__98473;
i__98402 = G__98474;
continue;
}
} else {
return null;
}
}
break;
}
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$ = cljs.core.PROTOCOL_SENTINEL);

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$get_rank$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.rank);
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$add_sink$arity$2 = (function (_,sink){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sinks,cljs.core.conj,sink);
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$remove_sink$arity$2 = (function (_,sink){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sinks,cljs.core.disj,sink);
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$get_sinks$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.sinks);
}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(carbon.rx.computed_QMARK_.call(null,this$__$1))){
} else {
carbon.rx.compute.call(null,this$__$1);
}

carbon.rx.register.call(null,this$__$1);

return cljs.core.deref.call(null,self__.state);
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$ = cljs.core.PROTOCOL_SENTINEL);

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$computed_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword("carbon.rx","thunk","carbon.rx/thunk",-1283861172));
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__98415_98475 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sources));
var chunk__98416_98476 = null;
var count__98417_98477 = (0);
var i__98418_98478 = (0);
while(true){
if((i__98418_98478 < count__98417_98477)){
var source_98479 = cljs.core._nth.call(null,chunk__98416_98476,i__98418_98478);
carbon.rx.remove_sink.call(null,source_98479,this$__$1);


var G__98480 = seq__98415_98475;
var G__98481 = chunk__98416_98476;
var G__98482 = count__98417_98477;
var G__98483 = (i__98418_98478 + (1));
seq__98415_98475 = G__98480;
chunk__98416_98476 = G__98481;
count__98417_98477 = G__98482;
i__98418_98478 = G__98483;
continue;
} else {
var temp__5818__auto___98484 = cljs.core.seq.call(null,seq__98415_98475);
if(temp__5818__auto___98484){
var seq__98415_98485__$1 = temp__5818__auto___98484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98415_98485__$1)){
var c__5568__auto___98486 = cljs.core.chunk_first.call(null,seq__98415_98485__$1);
var G__98487 = cljs.core.chunk_rest.call(null,seq__98415_98485__$1);
var G__98488 = c__5568__auto___98486;
var G__98489 = cljs.core.count.call(null,c__5568__auto___98486);
var G__98490 = (0);
seq__98415_98475 = G__98487;
chunk__98416_98476 = G__98488;
count__98417_98477 = G__98489;
i__98418_98478 = G__98490;
continue;
} else {
var source_98491 = cljs.core.first.call(null,seq__98415_98485__$1);
carbon.rx.remove_sink.call(null,source_98491,this$__$1);


var G__98492 = cljs.core.next.call(null,seq__98415_98485__$1);
var G__98493 = null;
var G__98494 = (0);
var G__98495 = (0);
seq__98415_98475 = G__98492;
chunk__98416_98476 = G__98493;
count__98417_98477 = G__98494;
i__98418_98478 = G__98495;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,self__.sources,cljs.core.PersistentHashSet.EMPTY);

if(goog.DEBUG){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__98374_SHARP_){
return (this$__$1 === p1__98374_SHARP_);
}),carbon.rx._STAR_provenance_STAR_))){
throw (new Error(["carbon.rx: detected a cycle in computation graph!\n",cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.meta,carbon.rx._STAR_provenance_STAR_))].join('')));
} else {
}
} else {
}

var old_value = cljs.core.deref.call(null,self__.state);
var r = cljs.core.atom.call(null,(0));
var new_value = (function (){var _STAR_rx_STAR__orig_val__98419 = carbon.rx._STAR_rx_STAR_;
var _STAR_value_STAR__orig_val__98420 = carbon.rx._STAR_value_STAR_;
var _STAR_rank_STAR__orig_val__98421 = carbon.rx._STAR_rank_STAR_;
var _STAR_provenance_STAR__orig_val__98422 = carbon.rx._STAR_provenance_STAR_;
var _STAR_rx_STAR__temp_val__98423 = this$__$1;
var _STAR_value_STAR__temp_val__98424 = old_value;
var _STAR_rank_STAR__temp_val__98425 = r;
var _STAR_provenance_STAR__temp_val__98426 = cljs.core.conj.call(null,carbon.rx._STAR_provenance_STAR_,this$__$1);
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98423);

(carbon.rx._STAR_value_STAR_ = _STAR_value_STAR__temp_val__98424);

(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__temp_val__98425);

(carbon.rx._STAR_provenance_STAR_ = _STAR_provenance_STAR__temp_val__98426);

try{var x = self__.getter.call(null);
return x;
}finally {(carbon.rx._STAR_provenance_STAR_ = _STAR_provenance_STAR__orig_val__98422);

(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__orig_val__98421);

(carbon.rx._STAR_value_STAR_ = _STAR_value_STAR__orig_val__98420);

(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98419);
}})();
cljs.core.reset_BANG_.call(null,self__.rank,(cljs.core.deref.call(null,r) + (1)));

if(cljs.core.not_EQ_.call(null,old_value,new_value)){
cljs.core.reset_BANG_.call(null,self__.state,new_value);

var seq__98427_98496 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watches));
var chunk__98428_98497 = null;
var count__98429_98498 = (0);
var i__98430_98499 = (0);
while(true){
if((i__98430_98499 < count__98429_98498)){
var vec__98437_98500 = cljs.core._nth.call(null,chunk__98428_98497,i__98430_98499);
var key_98501 = cljs.core.nth.call(null,vec__98437_98500,(0),null);
var f_98502 = cljs.core.nth.call(null,vec__98437_98500,(1),null);
f_98502.call(null,key_98501,this$__$1,old_value,new_value);


var G__98503 = seq__98427_98496;
var G__98504 = chunk__98428_98497;
var G__98505 = count__98429_98498;
var G__98506 = (i__98430_98499 + (1));
seq__98427_98496 = G__98503;
chunk__98428_98497 = G__98504;
count__98429_98498 = G__98505;
i__98430_98499 = G__98506;
continue;
} else {
var temp__5818__auto___98507 = cljs.core.seq.call(null,seq__98427_98496);
if(temp__5818__auto___98507){
var seq__98427_98508__$1 = temp__5818__auto___98507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98427_98508__$1)){
var c__5568__auto___98509 = cljs.core.chunk_first.call(null,seq__98427_98508__$1);
var G__98510 = cljs.core.chunk_rest.call(null,seq__98427_98508__$1);
var G__98511 = c__5568__auto___98509;
var G__98512 = cljs.core.count.call(null,c__5568__auto___98509);
var G__98513 = (0);
seq__98427_98496 = G__98510;
chunk__98428_98497 = G__98511;
count__98429_98498 = G__98512;
i__98430_98499 = G__98513;
continue;
} else {
var vec__98440_98514 = cljs.core.first.call(null,seq__98427_98508__$1);
var key_98515 = cljs.core.nth.call(null,vec__98440_98514,(0),null);
var f_98516 = cljs.core.nth.call(null,vec__98440_98514,(1),null);
f_98516.call(null,key_98515,this$__$1,old_value,new_value);


var G__98517 = cljs.core.next.call(null,seq__98427_98508__$1);
var G__98518 = null;
var G__98519 = (0);
var G__98520 = (0);
seq__98427_98496 = G__98517;
chunk__98428_98497 = G__98518;
count__98429_98498 = G__98519;
i__98430_98499 = G__98520;
continue;
}
} else {
}
}
break;
}
} else {
}

return new_value;
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$gc$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(carbon.rx._STAR_dirty_sources_STAR_)){
return cljs.core.swap_BANG_.call(null,carbon.rx._STAR_dirty_sources_STAR_,cljs.core.conj,this$__$1);
} else {
if(((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,self__.sinks))) && (cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,self__.watches))))){
var seq__98443_98521 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sources));
var chunk__98444_98522 = null;
var count__98445_98523 = (0);
var i__98446_98524 = (0);
while(true){
if((i__98446_98524 < count__98445_98523)){
var source_98525 = cljs.core._nth.call(null,chunk__98444_98522,i__98446_98524);
carbon.rx.remove_sink.call(null,source_98525,this$__$1);

if((((!((source_98525 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source_98525.carbon$rx$IReactiveExpression$))))?true:(((!source_98525.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_98525):false)):cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_98525))){
carbon.rx.gc.call(null,source_98525);
} else {
}


var G__98526 = seq__98443_98521;
var G__98527 = chunk__98444_98522;
var G__98528 = count__98445_98523;
var G__98529 = (i__98446_98524 + (1));
seq__98443_98521 = G__98526;
chunk__98444_98522 = G__98527;
count__98445_98523 = G__98528;
i__98446_98524 = G__98529;
continue;
} else {
var temp__5818__auto___98530 = cljs.core.seq.call(null,seq__98443_98521);
if(temp__5818__auto___98530){
var seq__98443_98531__$1 = temp__5818__auto___98530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__98443_98531__$1)){
var c__5568__auto___98532 = cljs.core.chunk_first.call(null,seq__98443_98531__$1);
var G__98533 = cljs.core.chunk_rest.call(null,seq__98443_98531__$1);
var G__98534 = c__5568__auto___98532;
var G__98535 = cljs.core.count.call(null,c__5568__auto___98532);
var G__98536 = (0);
seq__98443_98521 = G__98533;
chunk__98444_98522 = G__98534;
count__98445_98523 = G__98535;
i__98446_98524 = G__98536;
continue;
} else {
var source_98537 = cljs.core.first.call(null,seq__98443_98531__$1);
carbon.rx.remove_sink.call(null,source_98537,this$__$1);

if((((!((source_98537 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source_98537.carbon$rx$IReactiveExpression$))))?true:(((!source_98537.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_98537):false)):cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_98537))){
carbon.rx.gc.call(null,source_98537);
} else {
}


var G__98538 = cljs.core.next.call(null,seq__98443_98531__$1);
var G__98539 = null;
var G__98540 = (0);
var G__98541 = (0);
seq__98443_98521 = G__98538;
chunk__98444_98522 = G__98539;
count__98445_98523 = G__98540;
i__98446_98524 = G__98541;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,self__.sources,cljs.core.PersistentHashSet.EMPTY);

cljs.core.reset_BANG_.call(null,self__.state,new cljs.core.Keyword("carbon.rx","thunk","carbon.rx/thunk",-1283861172));

return carbon.rx.notify_drops.call(null,this$__$1);
} else {
return null;
}
}
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$add_source$arity$2 = (function (_,source){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sources,cljs.core.conj,source);
}));

(carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$remove_source$arity$2 = (function (_,source){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sources,cljs.core.disj,source);
}));

(carbon.rx.ReactiveExpression.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null),new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null)], null);
}));

(carbon.rx.ReactiveExpression.cljs$lang$type = true);

(carbon.rx.ReactiveExpression.cljs$lang$ctorStr = "carbon.rx/ReactiveExpression");

(carbon.rx.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"carbon.rx/ReactiveExpression");
}));

/**
 * Positional factory function for carbon.rx/ReactiveExpression.
 */
carbon.rx.__GT_ReactiveExpression = (function carbon$rx$__GT_ReactiveExpression(getter,setter,metadata,validator,drop,state,watches,rank,sources,sinks){
return (new carbon.rx.ReactiveExpression(getter,setter,metadata,validator,drop,state,watches,rank,sources,sinks));
});

carbon.rx.watch = (function carbon$rx$watch(source,_,o,n){
if(cljs.core.not_EQ_.call(null,o,n)){
return carbon.rx.dosync_STAR_.call(null,(function (){
return cljs.core.swap_BANG_.call(null,carbon.rx._STAR_dirty_sinks_STAR_,cljs.core.into,carbon.rx.get_sinks.call(null,source));
}));
} else {
return null;
}
});
carbon.rx.atom__GT_cell = (function carbon$rx$atom__GT_cell(a,_){
var sinks = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x98542 = a;
(x98542.carbon$rx$IReactiveSource$ = cljs.core.PROTOCOL_SENTINEL);

(x98542.carbon$rx$IReactiveSource$get_rank$arity$1 = (function (___$1){
var ___$2 = this;
return (0);
}));

(x98542.carbon$rx$IReactiveSource$add_sink$arity$2 = (function (___$1,sink){
var ___$2 = this;
return cljs.core.swap_BANG_.call(null,sinks,cljs.core.conj,sink);
}));

(x98542.carbon$rx$IReactiveSource$remove_sink$arity$2 = (function (___$1,sink){
var ___$2 = this;
return cljs.core.swap_BANG_.call(null,sinks,cljs.core.disj,sink);
}));

(x98542.carbon$rx$IReactiveSource$get_sinks$arity$1 = (function (___$1){
var ___$2 = this;
return cljs.core.deref.call(null,sinks);
}));

(x98542.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x98542.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
carbon.rx.register.call(null,this$__$1);

cljs.core.add_watch.call(null,this$__$1,this$__$1,carbon.rx.watch);

return this$__$1.state;
}));

return x98542;
});
carbon.rx.cell_STAR_ = (function carbon$rx$cell_STAR_(var_args){
var G__98544 = arguments.length;
switch (G__98544) {
case 1:
return carbon.rx.cell_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return carbon.rx.cell_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(carbon.rx.cell_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return carbon.rx.atom__GT_cell.call(null,cljs.core.atom.call(null,x),null);
}));

(carbon.rx.cell_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,m){
return carbon.rx.atom__GT_cell.call(null,cljs.core.apply.call(null,cljs.core.atom,x,cljs.core.flatten.call(null,cljs.core.seq.call(null,m))),cljs.core.get.call(null,m,new cljs.core.Keyword(null,"meta","meta",1499536964)));
}));

(carbon.rx.cell_STAR_.cljs$lang$maxFixedArity = 2);

carbon.rx.rx_STAR_ = (function carbon$rx$rx_STAR_(var_args){
var G__98547 = arguments.length;
switch (G__98547) {
case 1:
return carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (getter){
return carbon.rx.rx_STAR_.call(null,getter,null,null,null,null);
}));

(carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (getter,setter){
return carbon.rx.rx_STAR_.call(null,getter,setter,null,null,null);
}));

(carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (getter,setter,meta){
return carbon.rx.rx_STAR_.call(null,getter,setter,meta,null,null);
}));

(carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (getter,setter,meta,validator){
return carbon.rx.rx_STAR_.call(null,getter,setter,meta,validator,null);
}));

(carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (getter,setter,meta,validator,drop){
return (new carbon.rx.ReactiveExpression(getter,setter,meta,validator,cljs.core.atom.call(null,drop),cljs.core.atom.call(null,new cljs.core.Keyword("carbon.rx","thunk","carbon.rx/thunk",-1283861172)),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)));
}));

(carbon.rx.rx_STAR_.cljs$lang$maxFixedArity = 5);

carbon.rx.cursor_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
carbon.rx.cache_dissoc = (function carbon$rx$cache_dissoc(cache,parent,path){
var cache__$1 = cljs.core.update.call(null,cache,parent,cljs.core.dissoc,path);
if(cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,cache__$1,parent))){
return cljs.core.dissoc.call(null,cache__$1,parent);
} else {
return cache__$1;
}
});
carbon.rx.normalize_cursor_path = cljs.core.vec;
carbon.rx.cursor = (function carbon$rx$cursor(parent,path){
var _STAR_rx_STAR__orig_val__98549 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__98550 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__98550);

try{var path__$1 = carbon.rx.normalize_cursor_path.call(null,path);
var or__5045__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,carbon.rx.cursor_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,path__$1], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var x = carbon.rx.rx_STAR_.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parent),path__$1);
}),cljs.core.partial.call(null,cljs.core.swap_BANG_,parent,cljs.core.assoc_in,path__$1),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"form","form",-1624062471),"(macros/lens (get-in @parent path) (partial swap! parent assoc-in path))\n",new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/ul/tarot-spread-editor/resources/public/js/compiled/out/carbon/rx.cljc",new cljs.core.Keyword(null,"line","line",212345235),331,new cljs.core.Keyword(null,"column","column",2078222095),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),331,new cljs.core.Keyword(null,"end-column","end-column",1425389514),91], null));
carbon.rx.add_drop.call(null,x,new cljs.core.Keyword("carbon.rx","cursor","carbon.rx/cursor",1301806193),(function (){
return cljs.core.swap_BANG_.call(null,carbon.rx.cursor_cache,carbon.rx.cache_dissoc,parent,path__$1);
}));

cljs.core.swap_BANG_.call(null,carbon.rx.cursor_cache,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,path__$1], null),x);

return x;
}
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__98549);
}});

//# sourceMappingURL=rx.js.map?rel=1767875391365
