// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('carbon.rx');
goog.require('cljs.core');

/**
 * @interface
 */
carbon.rx.IReactiveSource = function(){};

var carbon$rx$IReactiveSource$get_rank$dyn_31999 = (function (_){
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
return carbon$rx$IReactiveSource$get_rank$dyn_31999.call(null,_);
}
});

var carbon$rx$IReactiveSource$add_sink$dyn_32000 = (function (_,sink){
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
return carbon$rx$IReactiveSource$add_sink$dyn_32000.call(null,_,sink);
}
});

var carbon$rx$IReactiveSource$remove_sink$dyn_32001 = (function (_,sink){
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
return carbon$rx$IReactiveSource$remove_sink$dyn_32001.call(null,_,sink);
}
});

var carbon$rx$IReactiveSource$get_sinks$dyn_32002 = (function (_){
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
return carbon$rx$IReactiveSource$get_sinks$dyn_32002.call(null,_);
}
});


/**
 * @interface
 */
carbon.rx.IReactiveExpression = function(){};

var carbon$rx$IReactiveExpression$compute$dyn_32003 = (function (_){
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
return carbon$rx$IReactiveExpression$compute$dyn_32003.call(null,_);
}
});

var carbon$rx$IReactiveExpression$computed_QMARK_$dyn_32004 = (function (_){
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
return carbon$rx$IReactiveExpression$computed_QMARK_$dyn_32004.call(null,_);
}
});

var carbon$rx$IReactiveExpression$gc$dyn_32005 = (function (_){
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
return carbon$rx$IReactiveExpression$gc$dyn_32005.call(null,_);
}
});

var carbon$rx$IReactiveExpression$add_source$dyn_32006 = (function (_,source){
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
return carbon$rx$IReactiveExpression$add_source$dyn_32006.call(null,_,source);
}
});

var carbon$rx$IReactiveExpression$remove_source$dyn_32007 = (function (_,source){
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
return carbon$rx$IReactiveExpression$remove_source$dyn_32007.call(null,_,source);
}
});


/**
 * @interface
 */
carbon.rx.IDrop = function(){};

var carbon$rx$IDrop$add_drop$dyn_32008 = (function (_,key,f){
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
return carbon$rx$IDrop$add_drop$dyn_32008.call(null,_,key,f);
}
});

var carbon$rx$IDrop$remove_drop$dyn_32009 = (function (_,key){
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
return carbon$rx$IDrop$remove_drop$dyn_32009.call(null,_,key);
}
});

var carbon$rx$IDrop$notify_drops$dyn_32010 = (function (_){
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
return carbon$rx$IDrop$notify_drops$dyn_32010.call(null,_);
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
var _STAR_rx_STAR__orig_val__32011 = carbon.rx._STAR_rx_STAR_;
var _STAR_rank_STAR__orig_val__32012 = carbon.rx._STAR_rank_STAR_;
var _STAR_rx_STAR__temp_val__32013 = null;
var _STAR_rank_STAR__temp_val__32014 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32013);

(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__temp_val__32014);

try{var queue__$1 = queue;
var dirty = cljs.core.List.EMPTY;
while(true){
var temp__5816__auto__ = cljs.core.first.call(null,queue__$1);
if(cljs.core.truth_(temp__5816__auto__)){
var x = temp__5816__auto__;
var queue__$2 = cljs.core.disj.call(null,queue__$1,x);
var G__32015 = ((cljs.core._EQ_.call(null,cljs.core.deref.call(null,x),carbon.rx.compute.call(null,x)))?queue__$2:cljs.core.into.call(null,queue__$2,carbon.rx.get_sinks.call(null,x)));
var G__32016 = cljs.core.conj.call(null,dirty,x);
queue__$1 = G__32015;
dirty = G__32016;
continue;
} else {
return dirty;
}
break;
}
}finally {(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__orig_val__32012);

(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32011);
}});
/**
 * Recursively garbage collect all disconnected sources in the `queue`
 */
carbon.rx.clean = (function carbon$rx$clean(queue){
var seq__32017 = cljs.core.seq.call(null,queue);
var chunk__32018 = null;
var count__32019 = (0);
var i__32020 = (0);
while(true){
if((i__32020 < count__32019)){
var source = cljs.core._nth.call(null,chunk__32018,i__32020);
carbon.rx.gc.call(null,source);


var G__32021 = seq__32017;
var G__32022 = chunk__32018;
var G__32023 = count__32019;
var G__32024 = (i__32020 + (1));
seq__32017 = G__32021;
chunk__32018 = G__32022;
count__32019 = G__32023;
i__32020 = G__32024;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__32017);
if(temp__5818__auto__){
var seq__32017__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32017__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32017__$1);
var G__32025 = cljs.core.chunk_rest.call(null,seq__32017__$1);
var G__32026 = c__5568__auto__;
var G__32027 = cljs.core.count.call(null,c__5568__auto__);
var G__32028 = (0);
seq__32017 = G__32025;
chunk__32018 = G__32026;
count__32019 = G__32027;
i__32020 = G__32028;
continue;
} else {
var source = cljs.core.first.call(null,seq__32017__$1);
carbon.rx.gc.call(null,source);


var G__32029 = cljs.core.next.call(null,seq__32017__$1);
var G__32030 = null;
var G__32031 = (0);
var G__32032 = (0);
seq__32017 = G__32029;
chunk__32018 = G__32030;
count__32019 = G__32031;
i__32020 = G__32032;
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
var result = (function (){var _STAR_dirty_sinks_STAR__orig_val__32033 = carbon.rx._STAR_dirty_sinks_STAR_;
var _STAR_dirty_sources_STAR__orig_val__32034 = carbon.rx._STAR_dirty_sources_STAR_;
var _STAR_dirty_sinks_STAR__temp_val__32035 = sinks;
var _STAR_dirty_sources_STAR__temp_val__32036 = sources;
(carbon.rx._STAR_dirty_sinks_STAR_ = _STAR_dirty_sinks_STAR__temp_val__32035);

(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__temp_val__32036);

try{return f.call(null);
}finally {(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__orig_val__32034);

(carbon.rx._STAR_dirty_sinks_STAR_ = _STAR_dirty_sinks_STAR__orig_val__32033);
}})();
if(cljs.core.truth_(carbon.rx._STAR_dirty_sinks_STAR_)){
} else {
var _STAR_dirty_sources_STAR__orig_val__32037_32039 = carbon.rx._STAR_dirty_sources_STAR_;
var _STAR_dirty_sources_STAR__temp_val__32038_32040 = sources;
(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__temp_val__32038_32040);

try{cljs.core.swap_BANG_.call(null,carbon.rx._STAR_dirty_sources_STAR_,cljs.core.into,carbon.rx.propagate.call(null,cljs.core.deref.call(null,sinks)));
}finally {(carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR__orig_val__32037_32039);
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
var _STAR_rx_STAR__orig_val__32043 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__32044 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32044);

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1)));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32043);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,x){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__32045 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__32046 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32046);

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1),x));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32045);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,x,y){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__32047 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__32048 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32048);

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1),x,y));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32047);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,xs){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR__orig_val__32049 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__32050 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32050);

try{return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core.deref.call(null,this$__$1),x,y,xs));
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32049);
}}));

(carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__32051 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watches));
var chunk__32052 = null;
var count__32053 = (0);
var i__32054 = (0);
while(true){
if((i__32054 < count__32053)){
var vec__32061 = cljs.core._nth.call(null,chunk__32052,i__32054);
var key = cljs.core.nth.call(null,vec__32061,(0),null);
var f = cljs.core.nth.call(null,vec__32061,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__32119 = seq__32051;
var G__32120 = chunk__32052;
var G__32121 = count__32053;
var G__32122 = (i__32054 + (1));
seq__32051 = G__32119;
chunk__32052 = G__32120;
count__32053 = G__32121;
i__32054 = G__32122;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__32051);
if(temp__5818__auto__){
var seq__32051__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32051__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32051__$1);
var G__32123 = cljs.core.chunk_rest.call(null,seq__32051__$1);
var G__32124 = c__5568__auto__;
var G__32125 = cljs.core.count.call(null,c__5568__auto__);
var G__32126 = (0);
seq__32051 = G__32123;
chunk__32052 = G__32124;
count__32053 = G__32125;
i__32054 = G__32126;
continue;
} else {
var vec__32064 = cljs.core.first.call(null,seq__32051__$1);
var key = cljs.core.nth.call(null,vec__32064,(0),null);
var f = cljs.core.nth.call(null,vec__32064,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__32127 = cljs.core.next.call(null,seq__32051__$1);
var G__32128 = null;
var G__32129 = (0);
var G__32130 = (0);
seq__32051 = G__32127;
chunk__32052 = G__32128;
count__32053 = G__32129;
i__32054 = G__32130;
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
var seq__32067 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.drop));
var chunk__32068 = null;
var count__32069 = (0);
var i__32070 = (0);
while(true){
if((i__32070 < count__32069)){
var vec__32077 = cljs.core._nth.call(null,chunk__32068,i__32070);
var key = cljs.core.nth.call(null,vec__32077,(0),null);
var f = cljs.core.nth.call(null,vec__32077,(1),null);
f.call(null,key,this$__$1);


var G__32131 = seq__32067;
var G__32132 = chunk__32068;
var G__32133 = count__32069;
var G__32134 = (i__32070 + (1));
seq__32067 = G__32131;
chunk__32068 = G__32132;
count__32069 = G__32133;
i__32070 = G__32134;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__32067);
if(temp__5818__auto__){
var seq__32067__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32067__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__32067__$1);
var G__32135 = cljs.core.chunk_rest.call(null,seq__32067__$1);
var G__32136 = c__5568__auto__;
var G__32137 = cljs.core.count.call(null,c__5568__auto__);
var G__32138 = (0);
seq__32067 = G__32135;
chunk__32068 = G__32136;
count__32069 = G__32137;
i__32070 = G__32138;
continue;
} else {
var vec__32080 = cljs.core.first.call(null,seq__32067__$1);
var key = cljs.core.nth.call(null,vec__32080,(0),null);
var f = cljs.core.nth.call(null,vec__32080,(1),null);
f.call(null,key,this$__$1);


var G__32139 = cljs.core.next.call(null,seq__32067__$1);
var G__32140 = null;
var G__32141 = (0);
var G__32142 = (0);
seq__32067 = G__32139;
chunk__32068 = G__32140;
count__32069 = G__32141;
i__32070 = G__32142;
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
var seq__32083_32143 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sources));
var chunk__32084_32144 = null;
var count__32085_32145 = (0);
var i__32086_32146 = (0);
while(true){
if((i__32086_32146 < count__32085_32145)){
var source_32147 = cljs.core._nth.call(null,chunk__32084_32144,i__32086_32146);
carbon.rx.remove_sink.call(null,source_32147,this$__$1);


var G__32148 = seq__32083_32143;
var G__32149 = chunk__32084_32144;
var G__32150 = count__32085_32145;
var G__32151 = (i__32086_32146 + (1));
seq__32083_32143 = G__32148;
chunk__32084_32144 = G__32149;
count__32085_32145 = G__32150;
i__32086_32146 = G__32151;
continue;
} else {
var temp__5818__auto___32152 = cljs.core.seq.call(null,seq__32083_32143);
if(temp__5818__auto___32152){
var seq__32083_32153__$1 = temp__5818__auto___32152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32083_32153__$1)){
var c__5568__auto___32154 = cljs.core.chunk_first.call(null,seq__32083_32153__$1);
var G__32155 = cljs.core.chunk_rest.call(null,seq__32083_32153__$1);
var G__32156 = c__5568__auto___32154;
var G__32157 = cljs.core.count.call(null,c__5568__auto___32154);
var G__32158 = (0);
seq__32083_32143 = G__32155;
chunk__32084_32144 = G__32156;
count__32085_32145 = G__32157;
i__32086_32146 = G__32158;
continue;
} else {
var source_32159 = cljs.core.first.call(null,seq__32083_32153__$1);
carbon.rx.remove_sink.call(null,source_32159,this$__$1);


var G__32160 = cljs.core.next.call(null,seq__32083_32153__$1);
var G__32161 = null;
var G__32162 = (0);
var G__32163 = (0);
seq__32083_32143 = G__32160;
chunk__32084_32144 = G__32161;
count__32085_32145 = G__32162;
i__32086_32146 = G__32163;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,self__.sources,cljs.core.PersistentHashSet.EMPTY);

if(goog.DEBUG){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__32042_SHARP_){
return (this$__$1 === p1__32042_SHARP_);
}),carbon.rx._STAR_provenance_STAR_))){
throw (new Error(["carbon.rx: detected a cycle in computation graph!\n",cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.meta,carbon.rx._STAR_provenance_STAR_))].join('')));
} else {
}
} else {
}

var old_value = cljs.core.deref.call(null,self__.state);
var r = cljs.core.atom.call(null,(0));
var new_value = (function (){var _STAR_rx_STAR__orig_val__32087 = carbon.rx._STAR_rx_STAR_;
var _STAR_value_STAR__orig_val__32088 = carbon.rx._STAR_value_STAR_;
var _STAR_rank_STAR__orig_val__32089 = carbon.rx._STAR_rank_STAR_;
var _STAR_provenance_STAR__orig_val__32090 = carbon.rx._STAR_provenance_STAR_;
var _STAR_rx_STAR__temp_val__32091 = this$__$1;
var _STAR_value_STAR__temp_val__32092 = old_value;
var _STAR_rank_STAR__temp_val__32093 = r;
var _STAR_provenance_STAR__temp_val__32094 = cljs.core.conj.call(null,carbon.rx._STAR_provenance_STAR_,this$__$1);
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32091);

(carbon.rx._STAR_value_STAR_ = _STAR_value_STAR__temp_val__32092);

(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__temp_val__32093);

(carbon.rx._STAR_provenance_STAR_ = _STAR_provenance_STAR__temp_val__32094);

try{var x = self__.getter.call(null);
return x;
}finally {(carbon.rx._STAR_provenance_STAR_ = _STAR_provenance_STAR__orig_val__32090);

(carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR__orig_val__32089);

(carbon.rx._STAR_value_STAR_ = _STAR_value_STAR__orig_val__32088);

(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32087);
}})();
cljs.core.reset_BANG_.call(null,self__.rank,(cljs.core.deref.call(null,r) + (1)));

if(cljs.core.not_EQ_.call(null,old_value,new_value)){
cljs.core.reset_BANG_.call(null,self__.state,new_value);

var seq__32095_32164 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watches));
var chunk__32096_32165 = null;
var count__32097_32166 = (0);
var i__32098_32167 = (0);
while(true){
if((i__32098_32167 < count__32097_32166)){
var vec__32105_32168 = cljs.core._nth.call(null,chunk__32096_32165,i__32098_32167);
var key_32169 = cljs.core.nth.call(null,vec__32105_32168,(0),null);
var f_32170 = cljs.core.nth.call(null,vec__32105_32168,(1),null);
f_32170.call(null,key_32169,this$__$1,old_value,new_value);


var G__32171 = seq__32095_32164;
var G__32172 = chunk__32096_32165;
var G__32173 = count__32097_32166;
var G__32174 = (i__32098_32167 + (1));
seq__32095_32164 = G__32171;
chunk__32096_32165 = G__32172;
count__32097_32166 = G__32173;
i__32098_32167 = G__32174;
continue;
} else {
var temp__5818__auto___32175 = cljs.core.seq.call(null,seq__32095_32164);
if(temp__5818__auto___32175){
var seq__32095_32176__$1 = temp__5818__auto___32175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32095_32176__$1)){
var c__5568__auto___32177 = cljs.core.chunk_first.call(null,seq__32095_32176__$1);
var G__32178 = cljs.core.chunk_rest.call(null,seq__32095_32176__$1);
var G__32179 = c__5568__auto___32177;
var G__32180 = cljs.core.count.call(null,c__5568__auto___32177);
var G__32181 = (0);
seq__32095_32164 = G__32178;
chunk__32096_32165 = G__32179;
count__32097_32166 = G__32180;
i__32098_32167 = G__32181;
continue;
} else {
var vec__32108_32182 = cljs.core.first.call(null,seq__32095_32176__$1);
var key_32183 = cljs.core.nth.call(null,vec__32108_32182,(0),null);
var f_32184 = cljs.core.nth.call(null,vec__32108_32182,(1),null);
f_32184.call(null,key_32183,this$__$1,old_value,new_value);


var G__32185 = cljs.core.next.call(null,seq__32095_32176__$1);
var G__32186 = null;
var G__32187 = (0);
var G__32188 = (0);
seq__32095_32164 = G__32185;
chunk__32096_32165 = G__32186;
count__32097_32166 = G__32187;
i__32098_32167 = G__32188;
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
var seq__32111_32189 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sources));
var chunk__32112_32190 = null;
var count__32113_32191 = (0);
var i__32114_32192 = (0);
while(true){
if((i__32114_32192 < count__32113_32191)){
var source_32193 = cljs.core._nth.call(null,chunk__32112_32190,i__32114_32192);
carbon.rx.remove_sink.call(null,source_32193,this$__$1);

if((((!((source_32193 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source_32193.carbon$rx$IReactiveExpression$))))?true:(((!source_32193.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_32193):false)):cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_32193))){
carbon.rx.gc.call(null,source_32193);
} else {
}


var G__32194 = seq__32111_32189;
var G__32195 = chunk__32112_32190;
var G__32196 = count__32113_32191;
var G__32197 = (i__32114_32192 + (1));
seq__32111_32189 = G__32194;
chunk__32112_32190 = G__32195;
count__32113_32191 = G__32196;
i__32114_32192 = G__32197;
continue;
} else {
var temp__5818__auto___32198 = cljs.core.seq.call(null,seq__32111_32189);
if(temp__5818__auto___32198){
var seq__32111_32199__$1 = temp__5818__auto___32198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32111_32199__$1)){
var c__5568__auto___32200 = cljs.core.chunk_first.call(null,seq__32111_32199__$1);
var G__32201 = cljs.core.chunk_rest.call(null,seq__32111_32199__$1);
var G__32202 = c__5568__auto___32200;
var G__32203 = cljs.core.count.call(null,c__5568__auto___32200);
var G__32204 = (0);
seq__32111_32189 = G__32201;
chunk__32112_32190 = G__32202;
count__32113_32191 = G__32203;
i__32114_32192 = G__32204;
continue;
} else {
var source_32205 = cljs.core.first.call(null,seq__32111_32199__$1);
carbon.rx.remove_sink.call(null,source_32205,this$__$1);

if((((!((source_32205 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source_32205.carbon$rx$IReactiveExpression$))))?true:(((!source_32205.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_32205):false)):cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_32205))){
carbon.rx.gc.call(null,source_32205);
} else {
}


var G__32206 = cljs.core.next.call(null,seq__32111_32199__$1);
var G__32207 = null;
var G__32208 = (0);
var G__32209 = (0);
seq__32111_32189 = G__32206;
chunk__32112_32190 = G__32207;
count__32113_32191 = G__32208;
i__32114_32192 = G__32209;
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
var x32210 = a;
(x32210.carbon$rx$IReactiveSource$ = cljs.core.PROTOCOL_SENTINEL);

(x32210.carbon$rx$IReactiveSource$get_rank$arity$1 = (function (___$1){
var ___$2 = this;
return (0);
}));

(x32210.carbon$rx$IReactiveSource$add_sink$arity$2 = (function (___$1,sink){
var ___$2 = this;
return cljs.core.swap_BANG_.call(null,sinks,cljs.core.conj,sink);
}));

(x32210.carbon$rx$IReactiveSource$remove_sink$arity$2 = (function (___$1,sink){
var ___$2 = this;
return cljs.core.swap_BANG_.call(null,sinks,cljs.core.disj,sink);
}));

(x32210.carbon$rx$IReactiveSource$get_sinks$arity$1 = (function (___$1){
var ___$2 = this;
return cljs.core.deref.call(null,sinks);
}));

(x32210.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x32210.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
carbon.rx.register.call(null,this$__$1);

cljs.core.add_watch.call(null,this$__$1,this$__$1,carbon.rx.watch);

return this$__$1.state;
}));

return x32210;
});
carbon.rx.cell_STAR_ = (function carbon$rx$cell_STAR_(var_args){
var G__32212 = arguments.length;
switch (G__32212) {
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
var G__32215 = arguments.length;
switch (G__32215) {
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
var _STAR_rx_STAR__orig_val__32217 = carbon.rx._STAR_rx_STAR_;
var _STAR_rx_STAR__temp_val__32218 = null;
(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__temp_val__32218);

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
}finally {(carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR__orig_val__32217);
}});

//# sourceMappingURL=rx.js.map?rel=1710474315053
