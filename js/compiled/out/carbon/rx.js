// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('carbon.rx');
goog.require('cljs.core');

/**
 * @interface
 */
carbon.rx.IReactiveSource = function(){};

carbon.rx.get_rank = (function carbon$rx$get_rank(_){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveSource$get_rank$arity$1 == null))))){
return _.carbon$rx$IReactiveSource$get_rank$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.get_rank[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (carbon.rx.get_rank["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.get-rank",_);
}
}
}
});

carbon.rx.add_sink = (function carbon$rx$add_sink(_,sink){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveSource$add_sink$arity$2 == null))))){
return _.carbon$rx$IReactiveSource$add_sink$arity$2(_,sink);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.add_sink[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,sink);
} else {
var m__4244__auto____$1 = (carbon.rx.add_sink["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,sink);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.add-sink",_);
}
}
}
});

carbon.rx.remove_sink = (function carbon$rx$remove_sink(_,sink){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveSource$remove_sink$arity$2 == null))))){
return _.carbon$rx$IReactiveSource$remove_sink$arity$2(_,sink);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.remove_sink[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,sink);
} else {
var m__4244__auto____$1 = (carbon.rx.remove_sink["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,sink);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.remove-sink",_);
}
}
}
});

carbon.rx.get_sinks = (function carbon$rx$get_sinks(_){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveSource$get_sinks$arity$1 == null))))){
return _.carbon$rx$IReactiveSource$get_sinks$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.get_sinks[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (carbon.rx.get_sinks["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveSource.get-sinks",_);
}
}
}
});


/**
 * @interface
 */
carbon.rx.IReactiveExpression = function(){};

carbon.rx.compute = (function carbon$rx$compute(_){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveExpression$compute$arity$1 == null))))){
return _.carbon$rx$IReactiveExpression$compute$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.compute[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (carbon.rx.compute["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.compute",_);
}
}
}
});

carbon.rx.computed_QMARK_ = (function carbon$rx$computed_QMARK_(_){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveExpression$computed_QMARK_$arity$1 == null))))){
return _.carbon$rx$IReactiveExpression$computed_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.computed_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (carbon.rx.computed_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.computed?",_);
}
}
}
});

carbon.rx.gc = (function carbon$rx$gc(_){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveExpression$gc$arity$1 == null))))){
return _.carbon$rx$IReactiveExpression$gc$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.gc[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (carbon.rx.gc["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.gc",_);
}
}
}
});

carbon.rx.add_source = (function carbon$rx$add_source(_,source){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveExpression$add_source$arity$2 == null))))){
return _.carbon$rx$IReactiveExpression$add_source$arity$2(_,source);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.add_source[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,source);
} else {
var m__4244__auto____$1 = (carbon.rx.add_source["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,source);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.add-source",_);
}
}
}
});

carbon.rx.remove_source = (function carbon$rx$remove_source(_,source){
if(((!((_ == null))) && (!((_.carbon$rx$IReactiveExpression$remove_source$arity$2 == null))))){
return _.carbon$rx$IReactiveExpression$remove_source$arity$2(_,source);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.remove_source[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,source);
} else {
var m__4244__auto____$1 = (carbon.rx.remove_source["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,source);
} else {
throw cljs.core.missing_protocol.call(null,"IReactiveExpression.remove-source",_);
}
}
}
});


/**
 * @interface
 */
carbon.rx.IDrop = function(){};

carbon.rx.add_drop = (function carbon$rx$add_drop(_,key,f){
if(((!((_ == null))) && (!((_.carbon$rx$IDrop$add_drop$arity$3 == null))))){
return _.carbon$rx$IDrop$add_drop$arity$3(_,key,f);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.add_drop[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,key,f);
} else {
var m__4244__auto____$1 = (carbon.rx.add_drop["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,key,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDrop.add-drop",_);
}
}
}
});

carbon.rx.remove_drop = (function carbon$rx$remove_drop(_,key){
if(((!((_ == null))) && (!((_.carbon$rx$IDrop$remove_drop$arity$2 == null))))){
return _.carbon$rx$IDrop$remove_drop$arity$2(_,key);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.remove_drop[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,key);
} else {
var m__4244__auto____$1 = (carbon.rx.remove_drop["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,key);
} else {
throw cljs.core.missing_protocol.call(null,"IDrop.remove-drop",_);
}
}
}
});

carbon.rx.notify_drops = (function carbon$rx$notify_drops(_){
if(((!((_ == null))) && (!((_.carbon$rx$IDrop$notify_drops$arity$1 == null))))){
return _.carbon$rx$IDrop$notify_drops$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (carbon.rx.notify_drops[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (carbon.rx.notify_drops["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDrop.notify-drops",_);
}
}
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
var _STAR_rx_STAR_51670 = carbon.rx._STAR_rx_STAR_;
var _STAR_rank_STAR_51671 = carbon.rx._STAR_rank_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

carbon.rx._STAR_rank_STAR_ = null;

try{var queue__$1 = queue;
var dirty = cljs.core.List.EMPTY;
while(true){
var temp__5557__auto__ = cljs.core.first.call(null,queue__$1);
if(cljs.core.truth_(temp__5557__auto__)){
var x = temp__5557__auto__;
var queue__$2 = cljs.core.disj.call(null,queue__$1,x);
var G__51672 = ((cljs.core._EQ_.call(null,cljs.core.deref.call(null,x),carbon.rx.compute.call(null,x)))?queue__$2:cljs.core.into.call(null,queue__$2,carbon.rx.get_sinks.call(null,x)));
var G__51673 = cljs.core.conj.call(null,dirty,x);
queue__$1 = G__51672;
dirty = G__51673;
continue;
} else {
return dirty;
}
break;
}
}finally {carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR_51671;

carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51670;
}});
/**
 * Recursively garbage collect all disconnected sources in the `queue`
 */
carbon.rx.clean = (function carbon$rx$clean(queue){
var seq__51674 = cljs.core.seq.call(null,queue);
var chunk__51675 = null;
var count__51676 = (0);
var i__51677 = (0);
while(true){
if((i__51677 < count__51676)){
var source = cljs.core._nth.call(null,chunk__51675,i__51677);
carbon.rx.gc.call(null,source);


var G__51678 = seq__51674;
var G__51679 = chunk__51675;
var G__51680 = count__51676;
var G__51681 = (i__51677 + (1));
seq__51674 = G__51678;
chunk__51675 = G__51679;
count__51676 = G__51680;
i__51677 = G__51681;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__51674);
if(temp__5559__auto__){
var seq__51674__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51674__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__51674__$1);
var G__51682 = cljs.core.chunk_rest.call(null,seq__51674__$1);
var G__51683 = c__4351__auto__;
var G__51684 = cljs.core.count.call(null,c__4351__auto__);
var G__51685 = (0);
seq__51674 = G__51682;
chunk__51675 = G__51683;
count__51676 = G__51684;
i__51677 = G__51685;
continue;
} else {
var source = cljs.core.first.call(null,seq__51674__$1);
carbon.rx.gc.call(null,source);


var G__51686 = cljs.core.next.call(null,seq__51674__$1);
var G__51687 = null;
var G__51688 = (0);
var G__51689 = (0);
seq__51674 = G__51686;
chunk__51675 = G__51687;
count__51676 = G__51688;
i__51677 = G__51689;
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
var sinks = (function (){var or__3949__auto__ = carbon.rx._STAR_dirty_sinks_STAR_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.call(null,carbon.rx.empty_queue);
}
})();
var sources = (function (){var or__3949__auto__ = carbon.rx._STAR_dirty_sources_STAR_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.call(null,carbon.rx.empty_queue);
}
})();
var result = (function (){var _STAR_dirty_sinks_STAR_51690 = carbon.rx._STAR_dirty_sinks_STAR_;
var _STAR_dirty_sources_STAR_51691 = carbon.rx._STAR_dirty_sources_STAR_;
carbon.rx._STAR_dirty_sinks_STAR_ = sinks;

carbon.rx._STAR_dirty_sources_STAR_ = sources;

try{return f.call(null);
}finally {carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR_51691;

carbon.rx._STAR_dirty_sinks_STAR_ = _STAR_dirty_sinks_STAR_51690;
}})();
if(cljs.core.truth_(carbon.rx._STAR_dirty_sinks_STAR_)){
} else {
var _STAR_dirty_sources_STAR_51692_51693 = carbon.rx._STAR_dirty_sources_STAR_;
carbon.rx._STAR_dirty_sources_STAR_ = sources;

try{cljs.core.swap_BANG_.call(null,carbon.rx._STAR_dirty_sources_STAR_,cljs.core.into,carbon.rx.propagate.call(null,cljs.core.deref.call(null,sinks)));
}finally {carbon.rx._STAR_dirty_sources_STAR_ = _STAR_dirty_sources_STAR_51692_51693;
}}

if(cljs.core.truth_(carbon.rx._STAR_dirty_sources_STAR_)){
} else {
carbon.rx.clean.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,sources)));
}

return result;
});
carbon.rx.safe_realized_QMARK_ = (function carbon$rx$safe_realized_QMARK_(x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPending$))))?true:false):false)){
return cljs.core.realized_QMARK_.call(null,x);
} else {
return true;
}
});
carbon.rx.fully_realized_QMARK_ = (function carbon$rx$fully_realized_QMARK_(form){
if(cljs.core.seqable_QMARK_.call(null,form)){
var and__3938__auto__ = carbon.rx.safe_realized_QMARK_.call(null,form);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.every_QMARK_.call(null,carbon.rx.fully_realized_QMARK_,form);
} else {
return and__3938__auto__;
}
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
carbon.rx.ReactiveExpression.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<RLens: ");

cljs.core.pr_writer.call(null,cljs.core.deref.call(null,self__.state),writer,opts);

return cljs.core._write.call(null,writer,">");
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.metadata;
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
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

carbon.rx.dosync_STAR_.call(null,((function (___$1){
return (function (){
return self__.setter.call(null,new_value);
});})(___$1))
);

return new_value;
});

carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR_51696 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1)));
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51696;
}});

carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,x){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR_51697 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1),x));
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51697;
}});

carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,x,y){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR_51698 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,cljs.core.deref.call(null,this$__$1),x,y));
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51698;
}});

carbon.rx.ReactiveExpression.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,xs){
var self__ = this;
var this$__$1 = this;
var _STAR_rx_STAR_51699 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core.deref.call(null,this$__$1),x,y,xs));
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51699;
}});

carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__51700 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watches));
var chunk__51701 = null;
var count__51702 = (0);
var i__51703 = (0);
while(true){
if((i__51703 < count__51702)){
var vec__51704 = cljs.core._nth.call(null,chunk__51701,i__51703);
var key = cljs.core.nth.call(null,vec__51704,(0),null);
var f = cljs.core.nth.call(null,vec__51704,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__51744 = seq__51700;
var G__51745 = chunk__51701;
var G__51746 = count__51702;
var G__51747 = (i__51703 + (1));
seq__51700 = G__51744;
chunk__51701 = G__51745;
count__51702 = G__51746;
i__51703 = G__51747;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__51700);
if(temp__5559__auto__){
var seq__51700__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51700__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__51700__$1);
var G__51748 = cljs.core.chunk_rest.call(null,seq__51700__$1);
var G__51749 = c__4351__auto__;
var G__51750 = cljs.core.count.call(null,c__4351__auto__);
var G__51751 = (0);
seq__51700 = G__51748;
chunk__51701 = G__51749;
count__51702 = G__51750;
i__51703 = G__51751;
continue;
} else {
var vec__51707 = cljs.core.first.call(null,seq__51700__$1);
var key = cljs.core.nth.call(null,vec__51707,(0),null);
var f = cljs.core.nth.call(null,vec__51707,(1),null);
f.call(null,key,this$__$1,oldval,newval);


var G__51752 = cljs.core.next.call(null,seq__51700__$1);
var G__51753 = null;
var G__51754 = (0);
var G__51755 = (0);
seq__51700 = G__51752;
chunk__51701 = G__51753;
count__51702 = G__51754;
i__51703 = G__51755;
continue;
}
} else {
return null;
}
}
break;
}
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(carbon.rx.computed_QMARK_.call(null,this$__$1))){
} else {
carbon.rx.compute.call(null,this$__$1);
}

cljs.core.swap_BANG_.call(null,self__.watches,cljs.core.assoc,key,f);

return this$__$1;
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.watches,cljs.core.dissoc,key);

carbon.rx.gc.call(null,this$__$1);

return this$__$1;
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$ = cljs.core.PROTOCOL_SENTINEL;

carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$add_drop$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.drop,cljs.core.assoc,key,f);

return this$__$1;
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$remove_drop$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,self__.drop,cljs.core.dissoc,key);

return this$__$1;
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IDrop$notify_drops$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__51710 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.drop));
var chunk__51711 = null;
var count__51712 = (0);
var i__51713 = (0);
while(true){
if((i__51713 < count__51712)){
var vec__51714 = cljs.core._nth.call(null,chunk__51711,i__51713);
var key = cljs.core.nth.call(null,vec__51714,(0),null);
var f = cljs.core.nth.call(null,vec__51714,(1),null);
f.call(null,key,this$__$1);


var G__51756 = seq__51710;
var G__51757 = chunk__51711;
var G__51758 = count__51712;
var G__51759 = (i__51713 + (1));
seq__51710 = G__51756;
chunk__51711 = G__51757;
count__51712 = G__51758;
i__51713 = G__51759;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__51710);
if(temp__5559__auto__){
var seq__51710__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51710__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__51710__$1);
var G__51760 = cljs.core.chunk_rest.call(null,seq__51710__$1);
var G__51761 = c__4351__auto__;
var G__51762 = cljs.core.count.call(null,c__4351__auto__);
var G__51763 = (0);
seq__51710 = G__51760;
chunk__51711 = G__51761;
count__51712 = G__51762;
i__51713 = G__51763;
continue;
} else {
var vec__51717 = cljs.core.first.call(null,seq__51710__$1);
var key = cljs.core.nth.call(null,vec__51717,(0),null);
var f = cljs.core.nth.call(null,vec__51717,(1),null);
f.call(null,key,this$__$1);


var G__51764 = cljs.core.next.call(null,seq__51710__$1);
var G__51765 = null;
var G__51766 = (0);
var G__51767 = (0);
seq__51710 = G__51764;
chunk__51711 = G__51765;
count__51712 = G__51766;
i__51713 = G__51767;
continue;
}
} else {
return null;
}
}
break;
}
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$ = cljs.core.PROTOCOL_SENTINEL;

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$get_rank$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.rank);
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$add_sink$arity$2 = (function (_,sink){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sinks,cljs.core.conj,sink);
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$remove_sink$arity$2 = (function (_,sink){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sinks,cljs.core.disj,sink);
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveSource$get_sinks$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.sinks);
});

carbon.rx.ReactiveExpression.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(carbon.rx.computed_QMARK_.call(null,this$__$1))){
} else {
carbon.rx.compute.call(null,this$__$1);
}

carbon.rx.register.call(null,this$__$1);

return cljs.core.deref.call(null,self__.state);
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$ = cljs.core.PROTOCOL_SENTINEL;

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$computed_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword("carbon.rx","thunk","carbon.rx/thunk",-1283861172));
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__51720_51768 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sources));
var chunk__51721_51769 = null;
var count__51722_51770 = (0);
var i__51723_51771 = (0);
while(true){
if((i__51723_51771 < count__51722_51770)){
var source_51772 = cljs.core._nth.call(null,chunk__51721_51769,i__51723_51771);
carbon.rx.remove_sink.call(null,source_51772,this$__$1);


var G__51773 = seq__51720_51768;
var G__51774 = chunk__51721_51769;
var G__51775 = count__51722_51770;
var G__51776 = (i__51723_51771 + (1));
seq__51720_51768 = G__51773;
chunk__51721_51769 = G__51774;
count__51722_51770 = G__51775;
i__51723_51771 = G__51776;
continue;
} else {
var temp__5559__auto___51777 = cljs.core.seq.call(null,seq__51720_51768);
if(temp__5559__auto___51777){
var seq__51720_51778__$1 = temp__5559__auto___51777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51720_51778__$1)){
var c__4351__auto___51779 = cljs.core.chunk_first.call(null,seq__51720_51778__$1);
var G__51780 = cljs.core.chunk_rest.call(null,seq__51720_51778__$1);
var G__51781 = c__4351__auto___51779;
var G__51782 = cljs.core.count.call(null,c__4351__auto___51779);
var G__51783 = (0);
seq__51720_51768 = G__51780;
chunk__51721_51769 = G__51781;
count__51722_51770 = G__51782;
i__51723_51771 = G__51783;
continue;
} else {
var source_51784 = cljs.core.first.call(null,seq__51720_51778__$1);
carbon.rx.remove_sink.call(null,source_51784,this$__$1);


var G__51785 = cljs.core.next.call(null,seq__51720_51778__$1);
var G__51786 = null;
var G__51787 = (0);
var G__51788 = (0);
seq__51720_51768 = G__51785;
chunk__51721_51769 = G__51786;
count__51722_51770 = G__51787;
i__51723_51771 = G__51788;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,self__.sources,cljs.core.PersistentHashSet.EMPTY);

if(goog.DEBUG){
if(cljs.core.truth_(cljs.core.some.call(null,((function (this$__$1){
return (function (p1__51695_SHARP_){
return (this$__$1 === p1__51695_SHARP_);
});})(this$__$1))
,carbon.rx._STAR_provenance_STAR_))){
throw (new Error(["carbon.rx: detected a cycle in computation graph!\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.meta,carbon.rx._STAR_provenance_STAR_)))].join('')));
} else {
}
} else {
}

var old_value = cljs.core.deref.call(null,self__.state);
var r = cljs.core.atom.call(null,(0));
var new_value = (function (){var _STAR_rx_STAR_51724 = carbon.rx._STAR_rx_STAR_;
var _STAR_value_STAR_51725 = carbon.rx._STAR_value_STAR_;
var _STAR_rank_STAR_51726 = carbon.rx._STAR_rank_STAR_;
var _STAR_provenance_STAR_51727 = carbon.rx._STAR_provenance_STAR_;
carbon.rx._STAR_rx_STAR_ = this$__$1;

carbon.rx._STAR_value_STAR_ = old_value;

carbon.rx._STAR_rank_STAR_ = r;

carbon.rx._STAR_provenance_STAR_ = cljs.core.conj.call(null,carbon.rx._STAR_provenance_STAR_,this$__$1);

try{var x = self__.getter.call(null);
return x;
}finally {carbon.rx._STAR_provenance_STAR_ = _STAR_provenance_STAR_51727;

carbon.rx._STAR_rank_STAR_ = _STAR_rank_STAR_51726;

carbon.rx._STAR_value_STAR_ = _STAR_value_STAR_51725;

carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51724;
}})();
cljs.core.reset_BANG_.call(null,self__.rank,(cljs.core.deref.call(null,r) + (1)));

if(cljs.core.not_EQ_.call(null,old_value,new_value)){
cljs.core.reset_BANG_.call(null,self__.state,new_value);

var seq__51728_51789 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watches));
var chunk__51729_51790 = null;
var count__51730_51791 = (0);
var i__51731_51792 = (0);
while(true){
if((i__51731_51792 < count__51730_51791)){
var vec__51732_51793 = cljs.core._nth.call(null,chunk__51729_51790,i__51731_51792);
var key_51794 = cljs.core.nth.call(null,vec__51732_51793,(0),null);
var f_51795 = cljs.core.nth.call(null,vec__51732_51793,(1),null);
f_51795.call(null,key_51794,this$__$1,old_value,new_value);


var G__51796 = seq__51728_51789;
var G__51797 = chunk__51729_51790;
var G__51798 = count__51730_51791;
var G__51799 = (i__51731_51792 + (1));
seq__51728_51789 = G__51796;
chunk__51729_51790 = G__51797;
count__51730_51791 = G__51798;
i__51731_51792 = G__51799;
continue;
} else {
var temp__5559__auto___51800 = cljs.core.seq.call(null,seq__51728_51789);
if(temp__5559__auto___51800){
var seq__51728_51801__$1 = temp__5559__auto___51800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51728_51801__$1)){
var c__4351__auto___51802 = cljs.core.chunk_first.call(null,seq__51728_51801__$1);
var G__51803 = cljs.core.chunk_rest.call(null,seq__51728_51801__$1);
var G__51804 = c__4351__auto___51802;
var G__51805 = cljs.core.count.call(null,c__4351__auto___51802);
var G__51806 = (0);
seq__51728_51789 = G__51803;
chunk__51729_51790 = G__51804;
count__51730_51791 = G__51805;
i__51731_51792 = G__51806;
continue;
} else {
var vec__51735_51807 = cljs.core.first.call(null,seq__51728_51801__$1);
var key_51808 = cljs.core.nth.call(null,vec__51735_51807,(0),null);
var f_51809 = cljs.core.nth.call(null,vec__51735_51807,(1),null);
f_51809.call(null,key_51808,this$__$1,old_value,new_value);


var G__51810 = cljs.core.next.call(null,seq__51728_51801__$1);
var G__51811 = null;
var G__51812 = (0);
var G__51813 = (0);
seq__51728_51789 = G__51810;
chunk__51729_51790 = G__51811;
count__51730_51791 = G__51812;
i__51731_51792 = G__51813;
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
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$gc$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(carbon.rx._STAR_dirty_sources_STAR_)){
return cljs.core.swap_BANG_.call(null,carbon.rx._STAR_dirty_sources_STAR_,cljs.core.conj,this$__$1);
} else {
if(((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,self__.sinks))) && (cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,self__.watches))))){
var seq__51738_51814 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sources));
var chunk__51739_51815 = null;
var count__51740_51816 = (0);
var i__51741_51817 = (0);
while(true){
if((i__51741_51817 < count__51740_51816)){
var source_51818 = cljs.core._nth.call(null,chunk__51739_51815,i__51741_51817);
carbon.rx.remove_sink.call(null,source_51818,this$__$1);

if(((!((source_51818 == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source_51818.carbon$rx$IReactiveExpression$))))?true:(((!source_51818.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_51818):false)):cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_51818))){
carbon.rx.gc.call(null,source_51818);
} else {
}


var G__51819 = seq__51738_51814;
var G__51820 = chunk__51739_51815;
var G__51821 = count__51740_51816;
var G__51822 = (i__51741_51817 + (1));
seq__51738_51814 = G__51819;
chunk__51739_51815 = G__51820;
count__51740_51816 = G__51821;
i__51741_51817 = G__51822;
continue;
} else {
var temp__5559__auto___51823 = cljs.core.seq.call(null,seq__51738_51814);
if(temp__5559__auto___51823){
var seq__51738_51824__$1 = temp__5559__auto___51823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51738_51824__$1)){
var c__4351__auto___51825 = cljs.core.chunk_first.call(null,seq__51738_51824__$1);
var G__51826 = cljs.core.chunk_rest.call(null,seq__51738_51824__$1);
var G__51827 = c__4351__auto___51825;
var G__51828 = cljs.core.count.call(null,c__4351__auto___51825);
var G__51829 = (0);
seq__51738_51814 = G__51826;
chunk__51739_51815 = G__51827;
count__51740_51816 = G__51828;
i__51741_51817 = G__51829;
continue;
} else {
var source_51830 = cljs.core.first.call(null,seq__51738_51824__$1);
carbon.rx.remove_sink.call(null,source_51830,this$__$1);

if(((!((source_51830 == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source_51830.carbon$rx$IReactiveExpression$))))?true:(((!source_51830.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_51830):false)):cljs.core.native_satisfies_QMARK_.call(null,carbon.rx.IReactiveExpression,source_51830))){
carbon.rx.gc.call(null,source_51830);
} else {
}


var G__51831 = cljs.core.next.call(null,seq__51738_51824__$1);
var G__51832 = null;
var G__51833 = (0);
var G__51834 = (0);
seq__51738_51814 = G__51831;
chunk__51739_51815 = G__51832;
count__51740_51816 = G__51833;
i__51741_51817 = G__51834;
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
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$add_source$arity$2 = (function (_,source){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sources,cljs.core.conj,source);
});

carbon.rx.ReactiveExpression.prototype.carbon$rx$IReactiveExpression$remove_source$arity$2 = (function (_,source){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.sources,cljs.core.disj,source);
});

carbon.rx.ReactiveExpression.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null),new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null)], null);
});

carbon.rx.ReactiveExpression.cljs$lang$type = true;

carbon.rx.ReactiveExpression.cljs$lang$ctorStr = "carbon.rx/ReactiveExpression";

carbon.rx.ReactiveExpression.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"carbon.rx/ReactiveExpression");
});

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
var x51835 = a;
x51835.carbon$rx$IReactiveSource$ = cljs.core.PROTOCOL_SENTINEL;

x51835.carbon$rx$IReactiveSource$get_rank$arity$1 = ((function (x51835,sinks){
return (function (___$1){
var ___$2 = this;
return (0);
});})(x51835,sinks))
;

x51835.carbon$rx$IReactiveSource$add_sink$arity$2 = ((function (x51835,sinks){
return (function (___$1,sink){
var ___$2 = this;
return cljs.core.swap_BANG_.call(null,sinks,cljs.core.conj,sink);
});})(x51835,sinks))
;

x51835.carbon$rx$IReactiveSource$remove_sink$arity$2 = ((function (x51835,sinks){
return (function (___$1,sink){
var ___$2 = this;
return cljs.core.swap_BANG_.call(null,sinks,cljs.core.disj,sink);
});})(x51835,sinks))
;

x51835.carbon$rx$IReactiveSource$get_sinks$arity$1 = ((function (x51835,sinks){
return (function (___$1){
var ___$2 = this;
return cljs.core.deref.call(null,sinks);
});})(x51835,sinks))
;

x51835.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x51835.cljs$core$IDeref$_deref$arity$1 = ((function (x51835,sinks){
return (function (this$){
var this$__$1 = this;
carbon.rx.register.call(null,this$__$1);

cljs.core.add_watch.call(null,this$__$1,this$__$1,carbon.rx.watch);

return this$__$1.state;
});})(x51835,sinks))
;

return x51835;
});
carbon.rx.cell_STAR_ = (function carbon$rx$cell_STAR_(var_args){
var G__51837 = arguments.length;
switch (G__51837) {
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

carbon.rx.cell_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return carbon.rx.atom__GT_cell.call(null,cljs.core.atom.call(null,x),null);
});

carbon.rx.cell_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,m){
return carbon.rx.atom__GT_cell.call(null,cljs.core.apply.call(null,cljs.core.atom,x,cljs.core.flatten.call(null,cljs.core.seq.call(null,m))),cljs.core.get.call(null,m,new cljs.core.Keyword(null,"meta","meta",1499536964)));
});

carbon.rx.cell_STAR_.cljs$lang$maxFixedArity = 2;

carbon.rx.rx_STAR_ = (function carbon$rx$rx_STAR_(var_args){
var G__51840 = arguments.length;
switch (G__51840) {
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

carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (getter){
return carbon.rx.rx_STAR_.call(null,getter,null,null,null,null);
});

carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (getter,setter){
return carbon.rx.rx_STAR_.call(null,getter,setter,null,null,null);
});

carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (getter,setter,meta){
return carbon.rx.rx_STAR_.call(null,getter,setter,meta,null,null);
});

carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (getter,setter,meta,validator){
return carbon.rx.rx_STAR_.call(null,getter,setter,meta,validator,null);
});

carbon.rx.rx_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (getter,setter,meta,validator,drop){
return (new carbon.rx.ReactiveExpression(getter,setter,meta,validator,cljs.core.atom.call(null,drop),cljs.core.atom.call(null,new cljs.core.Keyword("carbon.rx","thunk","carbon.rx/thunk",-1283861172)),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)));
});

carbon.rx.rx_STAR_.cljs$lang$maxFixedArity = 5;

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
var _STAR_rx_STAR_51842 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{var path__$1 = carbon.rx.normalize_cursor_path.call(null,path);
var or__3949__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,carbon.rx.cursor_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,path__$1], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var x = carbon.rx.rx_STAR_.call(null,((function (or__3949__auto__,path__$1,_STAR_rx_STAR_51842){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parent),path__$1);
});})(or__3949__auto__,path__$1,_STAR_rx_STAR_51842))
,cljs.core.partial.call(null,cljs.core.swap_BANG_,parent,cljs.core.assoc_in,path__$1),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"form","form",-1624062471),"(macros/lens (get-in @parent path) (partial swap! parent assoc-in path))\n",new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/rprakapchuk/tarot-spread-editor/resources/public/js/compiled/out/carbon/rx.cljc",new cljs.core.Keyword(null,"line","line",212345235),331,new cljs.core.Keyword(null,"column","column",2078222095),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),331,new cljs.core.Keyword(null,"end-column","end-column",1425389514),91], null));
carbon.rx.add_drop.call(null,x,new cljs.core.Keyword("carbon.rx","cursor","carbon.rx/cursor",1301806193),((function (x,or__3949__auto__,path__$1,_STAR_rx_STAR_51842){
return (function (){
return cljs.core.swap_BANG_.call(null,carbon.rx.cursor_cache,carbon.rx.cache_dissoc,parent,path__$1);
});})(x,or__3949__auto__,path__$1,_STAR_rx_STAR_51842))
);

cljs.core.swap_BANG_.call(null,carbon.rx.cursor_cache,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,path__$1], null),x);

return x;
}
}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51842;
}});

//# sourceMappingURL=rx.js.map?rel=1537946275623
