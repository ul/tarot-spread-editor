// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47457 = arguments.length;
switch (G__47457) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47458 = (function (f,blockable,meta47459){
this.f = f;
this.blockable = blockable;
this.meta47459 = meta47459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47460,meta47459__$1){
var self__ = this;
var _47460__$1 = this;
return (new cljs.core.async.t_cljs$core$async47458(self__.f,self__.blockable,meta47459__$1));
});

cljs.core.async.t_cljs$core$async47458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47460){
var self__ = this;
var _47460__$1 = this;
return self__.meta47459;
});

cljs.core.async.t_cljs$core$async47458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47459","meta47459",-320149578,null)], null);
});

cljs.core.async.t_cljs$core$async47458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47458";

cljs.core.async.t_cljs$core$async47458.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async47458");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47458.
 */
cljs.core.async.__GT_t_cljs$core$async47458 = (function cljs$core$async$__GT_t_cljs$core$async47458(f__$1,blockable__$1,meta47459){
return (new cljs.core.async.t_cljs$core$async47458(f__$1,blockable__$1,meta47459));
});

}

return (new cljs.core.async.t_cljs$core$async47458(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47464 = arguments.length;
switch (G__47464) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47467 = arguments.length;
switch (G__47467) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47470 = arguments.length;
switch (G__47470) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47472 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47472);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47472,ret){
return (function (){
return fn1.call(null,val_47472);
});})(val_47472,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47474 = arguments.length;
switch (G__47474) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5557__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5557__auto__)){
var ret = temp__5557__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5557__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5557__auto__)){
var retb = temp__5557__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5557__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5557__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___47476 = n;
var x_47477 = (0);
while(true){
if((x_47477 < n__4408__auto___47476)){
(a[x_47477] = (0));

var G__47478 = (x_47477 + (1));
x_47477 = G__47478;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__47479 = (i + (1));
i = G__47479;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47480 = (function (flag,meta47481){
this.flag = flag;
this.meta47481 = meta47481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47482,meta47481__$1){
var self__ = this;
var _47482__$1 = this;
return (new cljs.core.async.t_cljs$core$async47480(self__.flag,meta47481__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47482){
var self__ = this;
var _47482__$1 = this;
return self__.meta47481;
});})(flag))
;

cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47480.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47481","meta47481",1124401078,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47480";

cljs.core.async.t_cljs$core$async47480.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async47480");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47480.
 */
cljs.core.async.__GT_t_cljs$core$async47480 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47480(flag__$1,meta47481){
return (new cljs.core.async.t_cljs$core$async47480(flag__$1,meta47481));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47480(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47483 = (function (flag,cb,meta47484){
this.flag = flag;
this.cb = cb;
this.meta47484 = meta47484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47485,meta47484__$1){
var self__ = this;
var _47485__$1 = this;
return (new cljs.core.async.t_cljs$core$async47483(self__.flag,self__.cb,meta47484__$1));
});

cljs.core.async.t_cljs$core$async47483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47485){
var self__ = this;
var _47485__$1 = this;
return self__.meta47484;
});

cljs.core.async.t_cljs$core$async47483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47484","meta47484",756566154,null)], null);
});

cljs.core.async.t_cljs$core$async47483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47483";

cljs.core.async.t_cljs$core$async47483.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async47483");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47483.
 */
cljs.core.async.__GT_t_cljs$core$async47483 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47483(flag__$1,cb__$1,meta47484){
return (new cljs.core.async.t_cljs$core$async47483(flag__$1,cb__$1,meta47484));
});

}

return (new cljs.core.async.t_cljs$core$async47483(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47486_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47486_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47487_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47487_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47488 = (i + (1));
i = G__47488;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5559__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5559__auto__)){
var got = temp__5559__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___47494 = arguments.length;
var i__4532__auto___47495 = (0);
while(true){
if((i__4532__auto___47495 < len__4531__auto___47494)){
args__4534__auto__.push((arguments[i__4532__auto___47495]));

var G__47496 = (i__4532__auto___47495 + (1));
i__4532__auto___47495 = G__47496;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47491){
var map__47492 = p__47491;
var map__47492__$1 = ((((!((map__47492 == null)))?(((((map__47492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47492):map__47492);
var opts = map__47492__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47489){
var G__47490 = cljs.core.first.call(null,seq47489);
var seq47489__$1 = cljs.core.next.call(null,seq47489);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47490,seq47489__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47498 = arguments.length;
switch (G__47498) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32422__auto___47544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___47544){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___47544){
return (function (state_47522){
var state_val_47523 = (state_47522[(1)]);
if((state_val_47523 === (7))){
var inst_47518 = (state_47522[(2)]);
var state_47522__$1 = state_47522;
var statearr_47524_47545 = state_47522__$1;
(statearr_47524_47545[(2)] = inst_47518);

(statearr_47524_47545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (1))){
var state_47522__$1 = state_47522;
var statearr_47525_47546 = state_47522__$1;
(statearr_47525_47546[(2)] = null);

(statearr_47525_47546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (4))){
var inst_47501 = (state_47522[(7)]);
var inst_47501__$1 = (state_47522[(2)]);
var inst_47502 = (inst_47501__$1 == null);
var state_47522__$1 = (function (){var statearr_47526 = state_47522;
(statearr_47526[(7)] = inst_47501__$1);

return statearr_47526;
})();
if(cljs.core.truth_(inst_47502)){
var statearr_47527_47547 = state_47522__$1;
(statearr_47527_47547[(1)] = (5));

} else {
var statearr_47528_47548 = state_47522__$1;
(statearr_47528_47548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (13))){
var state_47522__$1 = state_47522;
var statearr_47529_47549 = state_47522__$1;
(statearr_47529_47549[(2)] = null);

(statearr_47529_47549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (6))){
var inst_47501 = (state_47522[(7)]);
var state_47522__$1 = state_47522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47522__$1,(11),to,inst_47501);
} else {
if((state_val_47523 === (3))){
var inst_47520 = (state_47522[(2)]);
var state_47522__$1 = state_47522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47522__$1,inst_47520);
} else {
if((state_val_47523 === (12))){
var state_47522__$1 = state_47522;
var statearr_47530_47550 = state_47522__$1;
(statearr_47530_47550[(2)] = null);

(statearr_47530_47550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (2))){
var state_47522__$1 = state_47522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47522__$1,(4),from);
} else {
if((state_val_47523 === (11))){
var inst_47511 = (state_47522[(2)]);
var state_47522__$1 = state_47522;
if(cljs.core.truth_(inst_47511)){
var statearr_47531_47551 = state_47522__$1;
(statearr_47531_47551[(1)] = (12));

} else {
var statearr_47532_47552 = state_47522__$1;
(statearr_47532_47552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (9))){
var state_47522__$1 = state_47522;
var statearr_47533_47553 = state_47522__$1;
(statearr_47533_47553[(2)] = null);

(statearr_47533_47553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (5))){
var state_47522__$1 = state_47522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47534_47554 = state_47522__$1;
(statearr_47534_47554[(1)] = (8));

} else {
var statearr_47535_47555 = state_47522__$1;
(statearr_47535_47555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (14))){
var inst_47516 = (state_47522[(2)]);
var state_47522__$1 = state_47522;
var statearr_47536_47556 = state_47522__$1;
(statearr_47536_47556[(2)] = inst_47516);

(statearr_47536_47556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (10))){
var inst_47508 = (state_47522[(2)]);
var state_47522__$1 = state_47522;
var statearr_47537_47557 = state_47522__$1;
(statearr_47537_47557[(2)] = inst_47508);

(statearr_47537_47557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47523 === (8))){
var inst_47505 = cljs.core.async.close_BANG_.call(null,to);
var state_47522__$1 = state_47522;
var statearr_47538_47558 = state_47522__$1;
(statearr_47538_47558[(2)] = inst_47505);

(statearr_47538_47558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___47544))
;
return ((function (switch__32331__auto__,c__32422__auto___47544){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_47539 = [null,null,null,null,null,null,null,null];
(statearr_47539[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_47539[(1)] = (1));

return statearr_47539;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_47522){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47540){if((e47540 instanceof Object)){
var ex__32335__auto__ = e47540;
var statearr_47541_47559 = state_47522;
(statearr_47541_47559[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47560 = state_47522;
state_47522 = G__47560;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_47522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_47522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___47544))
})();
var state__32424__auto__ = (function (){var statearr_47542 = f__32423__auto__.call(null);
(statearr_47542[(6)] = c__32422__auto___47544);

return statearr_47542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___47544))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__47561){
var vec__47562 = p__47561;
var v = cljs.core.nth.call(null,vec__47562,(0),null);
var p = cljs.core.nth.call(null,vec__47562,(1),null);
var job = vec__47562;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32422__auto___47733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___47733,res,vec__47562,v,p,job,jobs,results){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___47733,res,vec__47562,v,p,job,jobs,results){
return (function (state_47569){
var state_val_47570 = (state_47569[(1)]);
if((state_val_47570 === (1))){
var state_47569__$1 = state_47569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47569__$1,(2),res,v);
} else {
if((state_val_47570 === (2))){
var inst_47566 = (state_47569[(2)]);
var inst_47567 = cljs.core.async.close_BANG_.call(null,res);
var state_47569__$1 = (function (){var statearr_47571 = state_47569;
(statearr_47571[(7)] = inst_47566);

return statearr_47571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47569__$1,inst_47567);
} else {
return null;
}
}
});})(c__32422__auto___47733,res,vec__47562,v,p,job,jobs,results))
;
return ((function (switch__32331__auto__,c__32422__auto___47733,res,vec__47562,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0 = (function (){
var statearr_47572 = [null,null,null,null,null,null,null,null];
(statearr_47572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__);

(statearr_47572[(1)] = (1));

return statearr_47572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1 = (function (state_47569){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47573){if((e47573 instanceof Object)){
var ex__32335__auto__ = e47573;
var statearr_47574_47734 = state_47569;
(statearr_47574_47734[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47735 = state_47569;
state_47569 = G__47735;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = function(state_47569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1.call(this,state_47569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___47733,res,vec__47562,v,p,job,jobs,results))
})();
var state__32424__auto__ = (function (){var statearr_47575 = f__32423__auto__.call(null);
(statearr_47575[(6)] = c__32422__auto___47733);

return statearr_47575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___47733,res,vec__47562,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__47576){
var vec__47577 = p__47576;
var v = cljs.core.nth.call(null,vec__47577,(0),null);
var p = cljs.core.nth.call(null,vec__47577,(1),null);
var job = vec__47577;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4408__auto___47736 = n;
var __47737 = (0);
while(true){
if((__47737 < n__4408__auto___47736)){
var G__47580_47738 = type;
var G__47580_47739__$1 = (((G__47580_47738 instanceof cljs.core.Keyword))?G__47580_47738.fqn:null);
switch (G__47580_47739__$1) {
case "compute":
var c__32422__auto___47741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47737,c__32422__auto___47741,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (__47737,c__32422__auto___47741,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async){
return (function (state_47593){
var state_val_47594 = (state_47593[(1)]);
if((state_val_47594 === (1))){
var state_47593__$1 = state_47593;
var statearr_47595_47742 = state_47593__$1;
(statearr_47595_47742[(2)] = null);

(statearr_47595_47742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (2))){
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47593__$1,(4),jobs);
} else {
if((state_val_47594 === (3))){
var inst_47591 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47593__$1,inst_47591);
} else {
if((state_val_47594 === (4))){
var inst_47583 = (state_47593[(2)]);
var inst_47584 = process__$1.call(null,inst_47583);
var state_47593__$1 = state_47593;
if(cljs.core.truth_(inst_47584)){
var statearr_47596_47743 = state_47593__$1;
(statearr_47596_47743[(1)] = (5));

} else {
var statearr_47597_47744 = state_47593__$1;
(statearr_47597_47744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (5))){
var state_47593__$1 = state_47593;
var statearr_47598_47745 = state_47593__$1;
(statearr_47598_47745[(2)] = null);

(statearr_47598_47745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (6))){
var state_47593__$1 = state_47593;
var statearr_47599_47746 = state_47593__$1;
(statearr_47599_47746[(2)] = null);

(statearr_47599_47746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47594 === (7))){
var inst_47589 = (state_47593[(2)]);
var state_47593__$1 = state_47593;
var statearr_47600_47747 = state_47593__$1;
(statearr_47600_47747[(2)] = inst_47589);

(statearr_47600_47747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47737,c__32422__auto___47741,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async))
;
return ((function (__47737,switch__32331__auto__,c__32422__auto___47741,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0 = (function (){
var statearr_47601 = [null,null,null,null,null,null,null];
(statearr_47601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__);

(statearr_47601[(1)] = (1));

return statearr_47601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1 = (function (state_47593){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47602){if((e47602 instanceof Object)){
var ex__32335__auto__ = e47602;
var statearr_47603_47748 = state_47593;
(statearr_47603_47748[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47749 = state_47593;
state_47593 = G__47749;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = function(state_47593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1.call(this,state_47593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__;
})()
;})(__47737,switch__32331__auto__,c__32422__auto___47741,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async))
})();
var state__32424__auto__ = (function (){var statearr_47604 = f__32423__auto__.call(null);
(statearr_47604[(6)] = c__32422__auto___47741);

return statearr_47604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(__47737,c__32422__auto___47741,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async))
);


break;
case "async":
var c__32422__auto___47750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47737,c__32422__auto___47750,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (__47737,c__32422__auto___47750,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async){
return (function (state_47617){
var state_val_47618 = (state_47617[(1)]);
if((state_val_47618 === (1))){
var state_47617__$1 = state_47617;
var statearr_47619_47751 = state_47617__$1;
(statearr_47619_47751[(2)] = null);

(statearr_47619_47751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47618 === (2))){
var state_47617__$1 = state_47617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47617__$1,(4),jobs);
} else {
if((state_val_47618 === (3))){
var inst_47615 = (state_47617[(2)]);
var state_47617__$1 = state_47617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47617__$1,inst_47615);
} else {
if((state_val_47618 === (4))){
var inst_47607 = (state_47617[(2)]);
var inst_47608 = async.call(null,inst_47607);
var state_47617__$1 = state_47617;
if(cljs.core.truth_(inst_47608)){
var statearr_47620_47752 = state_47617__$1;
(statearr_47620_47752[(1)] = (5));

} else {
var statearr_47621_47753 = state_47617__$1;
(statearr_47621_47753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47618 === (5))){
var state_47617__$1 = state_47617;
var statearr_47622_47754 = state_47617__$1;
(statearr_47622_47754[(2)] = null);

(statearr_47622_47754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47618 === (6))){
var state_47617__$1 = state_47617;
var statearr_47623_47755 = state_47617__$1;
(statearr_47623_47755[(2)] = null);

(statearr_47623_47755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47618 === (7))){
var inst_47613 = (state_47617[(2)]);
var state_47617__$1 = state_47617;
var statearr_47624_47756 = state_47617__$1;
(statearr_47624_47756[(2)] = inst_47613);

(statearr_47624_47756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47737,c__32422__auto___47750,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async))
;
return ((function (__47737,switch__32331__auto__,c__32422__auto___47750,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0 = (function (){
var statearr_47625 = [null,null,null,null,null,null,null];
(statearr_47625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__);

(statearr_47625[(1)] = (1));

return statearr_47625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1 = (function (state_47617){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47626){if((e47626 instanceof Object)){
var ex__32335__auto__ = e47626;
var statearr_47627_47757 = state_47617;
(statearr_47627_47757[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47758 = state_47617;
state_47617 = G__47758;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = function(state_47617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1.call(this,state_47617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__;
})()
;})(__47737,switch__32331__auto__,c__32422__auto___47750,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async))
})();
var state__32424__auto__ = (function (){var statearr_47628 = f__32423__auto__.call(null);
(statearr_47628[(6)] = c__32422__auto___47750);

return statearr_47628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(__47737,c__32422__auto___47750,G__47580_47738,G__47580_47739__$1,n__4408__auto___47736,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47580_47739__$1)].join('')));

}

var G__47759 = (__47737 + (1));
__47737 = G__47759;
continue;
} else {
}
break;
}

var c__32422__auto___47760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___47760,jobs,results,process__$1,async){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___47760,jobs,results,process__$1,async){
return (function (state_47650){
var state_val_47651 = (state_47650[(1)]);
if((state_val_47651 === (7))){
var inst_47646 = (state_47650[(2)]);
var state_47650__$1 = state_47650;
var statearr_47652_47761 = state_47650__$1;
(statearr_47652_47761[(2)] = inst_47646);

(statearr_47652_47761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (1))){
var state_47650__$1 = state_47650;
var statearr_47653_47762 = state_47650__$1;
(statearr_47653_47762[(2)] = null);

(statearr_47653_47762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (4))){
var inst_47631 = (state_47650[(7)]);
var inst_47631__$1 = (state_47650[(2)]);
var inst_47632 = (inst_47631__$1 == null);
var state_47650__$1 = (function (){var statearr_47654 = state_47650;
(statearr_47654[(7)] = inst_47631__$1);

return statearr_47654;
})();
if(cljs.core.truth_(inst_47632)){
var statearr_47655_47763 = state_47650__$1;
(statearr_47655_47763[(1)] = (5));

} else {
var statearr_47656_47764 = state_47650__$1;
(statearr_47656_47764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (6))){
var inst_47631 = (state_47650[(7)]);
var inst_47636 = (state_47650[(8)]);
var inst_47636__$1 = cljs.core.async.chan.call(null,(1));
var inst_47637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47638 = [inst_47631,inst_47636__$1];
var inst_47639 = (new cljs.core.PersistentVector(null,2,(5),inst_47637,inst_47638,null));
var state_47650__$1 = (function (){var statearr_47657 = state_47650;
(statearr_47657[(8)] = inst_47636__$1);

return statearr_47657;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47650__$1,(8),jobs,inst_47639);
} else {
if((state_val_47651 === (3))){
var inst_47648 = (state_47650[(2)]);
var state_47650__$1 = state_47650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47650__$1,inst_47648);
} else {
if((state_val_47651 === (2))){
var state_47650__$1 = state_47650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47650__$1,(4),from);
} else {
if((state_val_47651 === (9))){
var inst_47643 = (state_47650[(2)]);
var state_47650__$1 = (function (){var statearr_47658 = state_47650;
(statearr_47658[(9)] = inst_47643);

return statearr_47658;
})();
var statearr_47659_47765 = state_47650__$1;
(statearr_47659_47765[(2)] = null);

(statearr_47659_47765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (5))){
var inst_47634 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47650__$1 = state_47650;
var statearr_47660_47766 = state_47650__$1;
(statearr_47660_47766[(2)] = inst_47634);

(statearr_47660_47766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (8))){
var inst_47636 = (state_47650[(8)]);
var inst_47641 = (state_47650[(2)]);
var state_47650__$1 = (function (){var statearr_47661 = state_47650;
(statearr_47661[(10)] = inst_47641);

return statearr_47661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47650__$1,(9),results,inst_47636);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___47760,jobs,results,process__$1,async))
;
return ((function (switch__32331__auto__,c__32422__auto___47760,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0 = (function (){
var statearr_47662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__);

(statearr_47662[(1)] = (1));

return statearr_47662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1 = (function (state_47650){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47663){if((e47663 instanceof Object)){
var ex__32335__auto__ = e47663;
var statearr_47664_47767 = state_47650;
(statearr_47664_47767[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47768 = state_47650;
state_47650 = G__47768;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = function(state_47650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1.call(this,state_47650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___47760,jobs,results,process__$1,async))
})();
var state__32424__auto__ = (function (){var statearr_47665 = f__32423__auto__.call(null);
(statearr_47665[(6)] = c__32422__auto___47760);

return statearr_47665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___47760,jobs,results,process__$1,async))
);


var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__,jobs,results,process__$1,async){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__,jobs,results,process__$1,async){
return (function (state_47703){
var state_val_47704 = (state_47703[(1)]);
if((state_val_47704 === (7))){
var inst_47699 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
var statearr_47705_47769 = state_47703__$1;
(statearr_47705_47769[(2)] = inst_47699);

(statearr_47705_47769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (20))){
var state_47703__$1 = state_47703;
var statearr_47706_47770 = state_47703__$1;
(statearr_47706_47770[(2)] = null);

(statearr_47706_47770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (1))){
var state_47703__$1 = state_47703;
var statearr_47707_47771 = state_47703__$1;
(statearr_47707_47771[(2)] = null);

(statearr_47707_47771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (4))){
var inst_47668 = (state_47703[(7)]);
var inst_47668__$1 = (state_47703[(2)]);
var inst_47669 = (inst_47668__$1 == null);
var state_47703__$1 = (function (){var statearr_47708 = state_47703;
(statearr_47708[(7)] = inst_47668__$1);

return statearr_47708;
})();
if(cljs.core.truth_(inst_47669)){
var statearr_47709_47772 = state_47703__$1;
(statearr_47709_47772[(1)] = (5));

} else {
var statearr_47710_47773 = state_47703__$1;
(statearr_47710_47773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (15))){
var inst_47681 = (state_47703[(8)]);
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47703__$1,(18),to,inst_47681);
} else {
if((state_val_47704 === (21))){
var inst_47694 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
var statearr_47711_47774 = state_47703__$1;
(statearr_47711_47774[(2)] = inst_47694);

(statearr_47711_47774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (13))){
var inst_47696 = (state_47703[(2)]);
var state_47703__$1 = (function (){var statearr_47712 = state_47703;
(statearr_47712[(9)] = inst_47696);

return statearr_47712;
})();
var statearr_47713_47775 = state_47703__$1;
(statearr_47713_47775[(2)] = null);

(statearr_47713_47775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (6))){
var inst_47668 = (state_47703[(7)]);
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47703__$1,(11),inst_47668);
} else {
if((state_val_47704 === (17))){
var inst_47689 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
if(cljs.core.truth_(inst_47689)){
var statearr_47714_47776 = state_47703__$1;
(statearr_47714_47776[(1)] = (19));

} else {
var statearr_47715_47777 = state_47703__$1;
(statearr_47715_47777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (3))){
var inst_47701 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47703__$1,inst_47701);
} else {
if((state_val_47704 === (12))){
var inst_47678 = (state_47703[(10)]);
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47703__$1,(14),inst_47678);
} else {
if((state_val_47704 === (2))){
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47703__$1,(4),results);
} else {
if((state_val_47704 === (19))){
var state_47703__$1 = state_47703;
var statearr_47716_47778 = state_47703__$1;
(statearr_47716_47778[(2)] = null);

(statearr_47716_47778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (11))){
var inst_47678 = (state_47703[(2)]);
var state_47703__$1 = (function (){var statearr_47717 = state_47703;
(statearr_47717[(10)] = inst_47678);

return statearr_47717;
})();
var statearr_47718_47779 = state_47703__$1;
(statearr_47718_47779[(2)] = null);

(statearr_47718_47779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (9))){
var state_47703__$1 = state_47703;
var statearr_47719_47780 = state_47703__$1;
(statearr_47719_47780[(2)] = null);

(statearr_47719_47780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (5))){
var state_47703__$1 = state_47703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47720_47781 = state_47703__$1;
(statearr_47720_47781[(1)] = (8));

} else {
var statearr_47721_47782 = state_47703__$1;
(statearr_47721_47782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (14))){
var inst_47681 = (state_47703[(8)]);
var inst_47683 = (state_47703[(11)]);
var inst_47681__$1 = (state_47703[(2)]);
var inst_47682 = (inst_47681__$1 == null);
var inst_47683__$1 = cljs.core.not.call(null,inst_47682);
var state_47703__$1 = (function (){var statearr_47722 = state_47703;
(statearr_47722[(8)] = inst_47681__$1);

(statearr_47722[(11)] = inst_47683__$1);

return statearr_47722;
})();
if(inst_47683__$1){
var statearr_47723_47783 = state_47703__$1;
(statearr_47723_47783[(1)] = (15));

} else {
var statearr_47724_47784 = state_47703__$1;
(statearr_47724_47784[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (16))){
var inst_47683 = (state_47703[(11)]);
var state_47703__$1 = state_47703;
var statearr_47725_47785 = state_47703__$1;
(statearr_47725_47785[(2)] = inst_47683);

(statearr_47725_47785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (10))){
var inst_47675 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
var statearr_47726_47786 = state_47703__$1;
(statearr_47726_47786[(2)] = inst_47675);

(statearr_47726_47786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (18))){
var inst_47686 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
var statearr_47727_47787 = state_47703__$1;
(statearr_47727_47787[(2)] = inst_47686);

(statearr_47727_47787[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (8))){
var inst_47672 = cljs.core.async.close_BANG_.call(null,to);
var state_47703__$1 = state_47703;
var statearr_47728_47788 = state_47703__$1;
(statearr_47728_47788[(2)] = inst_47672);

(statearr_47728_47788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto__,jobs,results,process__$1,async))
;
return ((function (switch__32331__auto__,c__32422__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0 = (function (){
var statearr_47729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__);

(statearr_47729[(1)] = (1));

return statearr_47729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1 = (function (state_47703){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47730){if((e47730 instanceof Object)){
var ex__32335__auto__ = e47730;
var statearr_47731_47789 = state_47703;
(statearr_47731_47789[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47790 = state_47703;
state_47703 = G__47790;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__ = function(state_47703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1.call(this,state_47703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__,jobs,results,process__$1,async))
})();
var state__32424__auto__ = (function (){var statearr_47732 = f__32423__auto__.call(null);
(statearr_47732[(6)] = c__32422__auto__);

return statearr_47732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__,jobs,results,process__$1,async))
);

return c__32422__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47792 = arguments.length;
switch (G__47792) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47795 = arguments.length;
switch (G__47795) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47798 = arguments.length;
switch (G__47798) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32422__auto___47847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___47847,tc,fc){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___47847,tc,fc){
return (function (state_47824){
var state_val_47825 = (state_47824[(1)]);
if((state_val_47825 === (7))){
var inst_47820 = (state_47824[(2)]);
var state_47824__$1 = state_47824;
var statearr_47826_47848 = state_47824__$1;
(statearr_47826_47848[(2)] = inst_47820);

(statearr_47826_47848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (1))){
var state_47824__$1 = state_47824;
var statearr_47827_47849 = state_47824__$1;
(statearr_47827_47849[(2)] = null);

(statearr_47827_47849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (4))){
var inst_47801 = (state_47824[(7)]);
var inst_47801__$1 = (state_47824[(2)]);
var inst_47802 = (inst_47801__$1 == null);
var state_47824__$1 = (function (){var statearr_47828 = state_47824;
(statearr_47828[(7)] = inst_47801__$1);

return statearr_47828;
})();
if(cljs.core.truth_(inst_47802)){
var statearr_47829_47850 = state_47824__$1;
(statearr_47829_47850[(1)] = (5));

} else {
var statearr_47830_47851 = state_47824__$1;
(statearr_47830_47851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (13))){
var state_47824__$1 = state_47824;
var statearr_47831_47852 = state_47824__$1;
(statearr_47831_47852[(2)] = null);

(statearr_47831_47852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (6))){
var inst_47801 = (state_47824[(7)]);
var inst_47807 = p.call(null,inst_47801);
var state_47824__$1 = state_47824;
if(cljs.core.truth_(inst_47807)){
var statearr_47832_47853 = state_47824__$1;
(statearr_47832_47853[(1)] = (9));

} else {
var statearr_47833_47854 = state_47824__$1;
(statearr_47833_47854[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (3))){
var inst_47822 = (state_47824[(2)]);
var state_47824__$1 = state_47824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47824__$1,inst_47822);
} else {
if((state_val_47825 === (12))){
var state_47824__$1 = state_47824;
var statearr_47834_47855 = state_47824__$1;
(statearr_47834_47855[(2)] = null);

(statearr_47834_47855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (2))){
var state_47824__$1 = state_47824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47824__$1,(4),ch);
} else {
if((state_val_47825 === (11))){
var inst_47801 = (state_47824[(7)]);
var inst_47811 = (state_47824[(2)]);
var state_47824__$1 = state_47824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47824__$1,(8),inst_47811,inst_47801);
} else {
if((state_val_47825 === (9))){
var state_47824__$1 = state_47824;
var statearr_47835_47856 = state_47824__$1;
(statearr_47835_47856[(2)] = tc);

(statearr_47835_47856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (5))){
var inst_47804 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47805 = cljs.core.async.close_BANG_.call(null,fc);
var state_47824__$1 = (function (){var statearr_47836 = state_47824;
(statearr_47836[(8)] = inst_47804);

return statearr_47836;
})();
var statearr_47837_47857 = state_47824__$1;
(statearr_47837_47857[(2)] = inst_47805);

(statearr_47837_47857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (14))){
var inst_47818 = (state_47824[(2)]);
var state_47824__$1 = state_47824;
var statearr_47838_47858 = state_47824__$1;
(statearr_47838_47858[(2)] = inst_47818);

(statearr_47838_47858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (10))){
var state_47824__$1 = state_47824;
var statearr_47839_47859 = state_47824__$1;
(statearr_47839_47859[(2)] = fc);

(statearr_47839_47859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47825 === (8))){
var inst_47813 = (state_47824[(2)]);
var state_47824__$1 = state_47824;
if(cljs.core.truth_(inst_47813)){
var statearr_47840_47860 = state_47824__$1;
(statearr_47840_47860[(1)] = (12));

} else {
var statearr_47841_47861 = state_47824__$1;
(statearr_47841_47861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___47847,tc,fc))
;
return ((function (switch__32331__auto__,c__32422__auto___47847,tc,fc){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_47842 = [null,null,null,null,null,null,null,null,null];
(statearr_47842[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_47842[(1)] = (1));

return statearr_47842;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_47824){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47843){if((e47843 instanceof Object)){
var ex__32335__auto__ = e47843;
var statearr_47844_47862 = state_47824;
(statearr_47844_47862[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47863 = state_47824;
state_47824 = G__47863;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_47824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_47824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___47847,tc,fc))
})();
var state__32424__auto__ = (function (){var statearr_47845 = f__32423__auto__.call(null);
(statearr_47845[(6)] = c__32422__auto___47847);

return statearr_47845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___47847,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__){
return (function (state_47884){
var state_val_47885 = (state_47884[(1)]);
if((state_val_47885 === (7))){
var inst_47880 = (state_47884[(2)]);
var state_47884__$1 = state_47884;
var statearr_47886_47904 = state_47884__$1;
(statearr_47886_47904[(2)] = inst_47880);

(statearr_47886_47904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (1))){
var inst_47864 = init;
var state_47884__$1 = (function (){var statearr_47887 = state_47884;
(statearr_47887[(7)] = inst_47864);

return statearr_47887;
})();
var statearr_47888_47905 = state_47884__$1;
(statearr_47888_47905[(2)] = null);

(statearr_47888_47905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (4))){
var inst_47867 = (state_47884[(8)]);
var inst_47867__$1 = (state_47884[(2)]);
var inst_47868 = (inst_47867__$1 == null);
var state_47884__$1 = (function (){var statearr_47889 = state_47884;
(statearr_47889[(8)] = inst_47867__$1);

return statearr_47889;
})();
if(cljs.core.truth_(inst_47868)){
var statearr_47890_47906 = state_47884__$1;
(statearr_47890_47906[(1)] = (5));

} else {
var statearr_47891_47907 = state_47884__$1;
(statearr_47891_47907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (6))){
var inst_47871 = (state_47884[(9)]);
var inst_47867 = (state_47884[(8)]);
var inst_47864 = (state_47884[(7)]);
var inst_47871__$1 = f.call(null,inst_47864,inst_47867);
var inst_47872 = cljs.core.reduced_QMARK_.call(null,inst_47871__$1);
var state_47884__$1 = (function (){var statearr_47892 = state_47884;
(statearr_47892[(9)] = inst_47871__$1);

return statearr_47892;
})();
if(inst_47872){
var statearr_47893_47908 = state_47884__$1;
(statearr_47893_47908[(1)] = (8));

} else {
var statearr_47894_47909 = state_47884__$1;
(statearr_47894_47909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (3))){
var inst_47882 = (state_47884[(2)]);
var state_47884__$1 = state_47884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47884__$1,inst_47882);
} else {
if((state_val_47885 === (2))){
var state_47884__$1 = state_47884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47884__$1,(4),ch);
} else {
if((state_val_47885 === (9))){
var inst_47871 = (state_47884[(9)]);
var inst_47864 = inst_47871;
var state_47884__$1 = (function (){var statearr_47895 = state_47884;
(statearr_47895[(7)] = inst_47864);

return statearr_47895;
})();
var statearr_47896_47910 = state_47884__$1;
(statearr_47896_47910[(2)] = null);

(statearr_47896_47910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (5))){
var inst_47864 = (state_47884[(7)]);
var state_47884__$1 = state_47884;
var statearr_47897_47911 = state_47884__$1;
(statearr_47897_47911[(2)] = inst_47864);

(statearr_47897_47911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (10))){
var inst_47878 = (state_47884[(2)]);
var state_47884__$1 = state_47884;
var statearr_47898_47912 = state_47884__$1;
(statearr_47898_47912[(2)] = inst_47878);

(statearr_47898_47912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47885 === (8))){
var inst_47871 = (state_47884[(9)]);
var inst_47874 = cljs.core.deref.call(null,inst_47871);
var state_47884__$1 = state_47884;
var statearr_47899_47913 = state_47884__$1;
(statearr_47899_47913[(2)] = inst_47874);

(statearr_47899_47913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto__))
;
return ((function (switch__32331__auto__,c__32422__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32332__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32332__auto____0 = (function (){
var statearr_47900 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47900[(0)] = cljs$core$async$reduce_$_state_machine__32332__auto__);

(statearr_47900[(1)] = (1));

return statearr_47900;
});
var cljs$core$async$reduce_$_state_machine__32332__auto____1 = (function (state_47884){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47901){if((e47901 instanceof Object)){
var ex__32335__auto__ = e47901;
var statearr_47902_47914 = state_47884;
(statearr_47902_47914[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47915 = state_47884;
state_47884 = G__47915;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32332__auto__ = function(state_47884){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32332__auto____1.call(this,state_47884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32332__auto____0;
cljs$core$async$reduce_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32332__auto____1;
return cljs$core$async$reduce_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__))
})();
var state__32424__auto__ = (function (){var statearr_47903 = f__32423__auto__.call(null);
(statearr_47903[(6)] = c__32422__auto__);

return statearr_47903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__))
);

return c__32422__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__,f__$1){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__,f__$1){
return (function (state_47921){
var state_val_47922 = (state_47921[(1)]);
if((state_val_47922 === (1))){
var inst_47916 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47921__$1 = state_47921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47921__$1,(2),inst_47916);
} else {
if((state_val_47922 === (2))){
var inst_47918 = (state_47921[(2)]);
var inst_47919 = f__$1.call(null,inst_47918);
var state_47921__$1 = state_47921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47921__$1,inst_47919);
} else {
return null;
}
}
});})(c__32422__auto__,f__$1))
;
return ((function (switch__32331__auto__,c__32422__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32332__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32332__auto____0 = (function (){
var statearr_47923 = [null,null,null,null,null,null,null];
(statearr_47923[(0)] = cljs$core$async$transduce_$_state_machine__32332__auto__);

(statearr_47923[(1)] = (1));

return statearr_47923;
});
var cljs$core$async$transduce_$_state_machine__32332__auto____1 = (function (state_47921){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47924){if((e47924 instanceof Object)){
var ex__32335__auto__ = e47924;
var statearr_47925_47927 = state_47921;
(statearr_47925_47927[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47928 = state_47921;
state_47921 = G__47928;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32332__auto__ = function(state_47921){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32332__auto____1.call(this,state_47921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32332__auto____0;
cljs$core$async$transduce_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32332__auto____1;
return cljs$core$async$transduce_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__,f__$1))
})();
var state__32424__auto__ = (function (){var statearr_47926 = f__32423__auto__.call(null);
(statearr_47926[(6)] = c__32422__auto__);

return statearr_47926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__,f__$1))
);

return c__32422__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47930 = arguments.length;
switch (G__47930) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__){
return (function (state_47955){
var state_val_47956 = (state_47955[(1)]);
if((state_val_47956 === (7))){
var inst_47937 = (state_47955[(2)]);
var state_47955__$1 = state_47955;
var statearr_47957_47978 = state_47955__$1;
(statearr_47957_47978[(2)] = inst_47937);

(statearr_47957_47978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (1))){
var inst_47931 = cljs.core.seq.call(null,coll);
var inst_47932 = inst_47931;
var state_47955__$1 = (function (){var statearr_47958 = state_47955;
(statearr_47958[(7)] = inst_47932);

return statearr_47958;
})();
var statearr_47959_47979 = state_47955__$1;
(statearr_47959_47979[(2)] = null);

(statearr_47959_47979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (4))){
var inst_47932 = (state_47955[(7)]);
var inst_47935 = cljs.core.first.call(null,inst_47932);
var state_47955__$1 = state_47955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47955__$1,(7),ch,inst_47935);
} else {
if((state_val_47956 === (13))){
var inst_47949 = (state_47955[(2)]);
var state_47955__$1 = state_47955;
var statearr_47960_47980 = state_47955__$1;
(statearr_47960_47980[(2)] = inst_47949);

(statearr_47960_47980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (6))){
var inst_47940 = (state_47955[(2)]);
var state_47955__$1 = state_47955;
if(cljs.core.truth_(inst_47940)){
var statearr_47961_47981 = state_47955__$1;
(statearr_47961_47981[(1)] = (8));

} else {
var statearr_47962_47982 = state_47955__$1;
(statearr_47962_47982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (3))){
var inst_47953 = (state_47955[(2)]);
var state_47955__$1 = state_47955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47955__$1,inst_47953);
} else {
if((state_val_47956 === (12))){
var state_47955__$1 = state_47955;
var statearr_47963_47983 = state_47955__$1;
(statearr_47963_47983[(2)] = null);

(statearr_47963_47983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (2))){
var inst_47932 = (state_47955[(7)]);
var state_47955__$1 = state_47955;
if(cljs.core.truth_(inst_47932)){
var statearr_47964_47984 = state_47955__$1;
(statearr_47964_47984[(1)] = (4));

} else {
var statearr_47965_47985 = state_47955__$1;
(statearr_47965_47985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (11))){
var inst_47946 = cljs.core.async.close_BANG_.call(null,ch);
var state_47955__$1 = state_47955;
var statearr_47966_47986 = state_47955__$1;
(statearr_47966_47986[(2)] = inst_47946);

(statearr_47966_47986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (9))){
var state_47955__$1 = state_47955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47967_47987 = state_47955__$1;
(statearr_47967_47987[(1)] = (11));

} else {
var statearr_47968_47988 = state_47955__$1;
(statearr_47968_47988[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (5))){
var inst_47932 = (state_47955[(7)]);
var state_47955__$1 = state_47955;
var statearr_47969_47989 = state_47955__$1;
(statearr_47969_47989[(2)] = inst_47932);

(statearr_47969_47989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (10))){
var inst_47951 = (state_47955[(2)]);
var state_47955__$1 = state_47955;
var statearr_47970_47990 = state_47955__$1;
(statearr_47970_47990[(2)] = inst_47951);

(statearr_47970_47990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47956 === (8))){
var inst_47932 = (state_47955[(7)]);
var inst_47942 = cljs.core.next.call(null,inst_47932);
var inst_47932__$1 = inst_47942;
var state_47955__$1 = (function (){var statearr_47971 = state_47955;
(statearr_47971[(7)] = inst_47932__$1);

return statearr_47971;
})();
var statearr_47972_47991 = state_47955__$1;
(statearr_47972_47991[(2)] = null);

(statearr_47972_47991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto__))
;
return ((function (switch__32331__auto__,c__32422__auto__){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_47973 = [null,null,null,null,null,null,null,null];
(statearr_47973[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_47973[(1)] = (1));

return statearr_47973;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_47955){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_47955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e47974){if((e47974 instanceof Object)){
var ex__32335__auto__ = e47974;
var statearr_47975_47992 = state_47955;
(statearr_47975_47992[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47993 = state_47955;
state_47955 = G__47993;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_47955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_47955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__))
})();
var state__32424__auto__ = (function (){var statearr_47976 = f__32423__auto__.call(null);
(statearr_47976[(6)] = c__32422__auto__);

return statearr_47976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__))
);

return c__32422__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47994 = (function (ch,cs,meta47995){
this.ch = ch;
this.cs = cs;
this.meta47995 = meta47995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47996,meta47995__$1){
var self__ = this;
var _47996__$1 = this;
return (new cljs.core.async.t_cljs$core$async47994(self__.ch,self__.cs,meta47995__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47996){
var self__ = this;
var _47996__$1 = this;
return self__.meta47995;
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47995","meta47995",-1449589813,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47994";

cljs.core.async.t_cljs$core$async47994.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async47994");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47994.
 */
cljs.core.async.__GT_t_cljs$core$async47994 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47994(ch__$1,cs__$1,meta47995){
return (new cljs.core.async.t_cljs$core$async47994(ch__$1,cs__$1,meta47995));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47994(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32422__auto___48216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48216,cs,m,dchan,dctr,done){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48216,cs,m,dchan,dctr,done){
return (function (state_48131){
var state_val_48132 = (state_48131[(1)]);
if((state_val_48132 === (7))){
var inst_48127 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48133_48217 = state_48131__$1;
(statearr_48133_48217[(2)] = inst_48127);

(statearr_48133_48217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (20))){
var inst_48030 = (state_48131[(7)]);
var inst_48042 = cljs.core.first.call(null,inst_48030);
var inst_48043 = cljs.core.nth.call(null,inst_48042,(0),null);
var inst_48044 = cljs.core.nth.call(null,inst_48042,(1),null);
var state_48131__$1 = (function (){var statearr_48134 = state_48131;
(statearr_48134[(8)] = inst_48043);

return statearr_48134;
})();
if(cljs.core.truth_(inst_48044)){
var statearr_48135_48218 = state_48131__$1;
(statearr_48135_48218[(1)] = (22));

} else {
var statearr_48136_48219 = state_48131__$1;
(statearr_48136_48219[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (27))){
var inst_47999 = (state_48131[(9)]);
var inst_48074 = (state_48131[(10)]);
var inst_48079 = (state_48131[(11)]);
var inst_48072 = (state_48131[(12)]);
var inst_48079__$1 = cljs.core._nth.call(null,inst_48072,inst_48074);
var inst_48080 = cljs.core.async.put_BANG_.call(null,inst_48079__$1,inst_47999,done);
var state_48131__$1 = (function (){var statearr_48137 = state_48131;
(statearr_48137[(11)] = inst_48079__$1);

return statearr_48137;
})();
if(cljs.core.truth_(inst_48080)){
var statearr_48138_48220 = state_48131__$1;
(statearr_48138_48220[(1)] = (30));

} else {
var statearr_48139_48221 = state_48131__$1;
(statearr_48139_48221[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (1))){
var state_48131__$1 = state_48131;
var statearr_48140_48222 = state_48131__$1;
(statearr_48140_48222[(2)] = null);

(statearr_48140_48222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (24))){
var inst_48030 = (state_48131[(7)]);
var inst_48049 = (state_48131[(2)]);
var inst_48050 = cljs.core.next.call(null,inst_48030);
var inst_48008 = inst_48050;
var inst_48009 = null;
var inst_48010 = (0);
var inst_48011 = (0);
var state_48131__$1 = (function (){var statearr_48141 = state_48131;
(statearr_48141[(13)] = inst_48008);

(statearr_48141[(14)] = inst_48010);

(statearr_48141[(15)] = inst_48049);

(statearr_48141[(16)] = inst_48011);

(statearr_48141[(17)] = inst_48009);

return statearr_48141;
})();
var statearr_48142_48223 = state_48131__$1;
(statearr_48142_48223[(2)] = null);

(statearr_48142_48223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (39))){
var state_48131__$1 = state_48131;
var statearr_48146_48224 = state_48131__$1;
(statearr_48146_48224[(2)] = null);

(statearr_48146_48224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (4))){
var inst_47999 = (state_48131[(9)]);
var inst_47999__$1 = (state_48131[(2)]);
var inst_48000 = (inst_47999__$1 == null);
var state_48131__$1 = (function (){var statearr_48147 = state_48131;
(statearr_48147[(9)] = inst_47999__$1);

return statearr_48147;
})();
if(cljs.core.truth_(inst_48000)){
var statearr_48148_48225 = state_48131__$1;
(statearr_48148_48225[(1)] = (5));

} else {
var statearr_48149_48226 = state_48131__$1;
(statearr_48149_48226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (15))){
var inst_48008 = (state_48131[(13)]);
var inst_48010 = (state_48131[(14)]);
var inst_48011 = (state_48131[(16)]);
var inst_48009 = (state_48131[(17)]);
var inst_48026 = (state_48131[(2)]);
var inst_48027 = (inst_48011 + (1));
var tmp48143 = inst_48008;
var tmp48144 = inst_48010;
var tmp48145 = inst_48009;
var inst_48008__$1 = tmp48143;
var inst_48009__$1 = tmp48145;
var inst_48010__$1 = tmp48144;
var inst_48011__$1 = inst_48027;
var state_48131__$1 = (function (){var statearr_48150 = state_48131;
(statearr_48150[(13)] = inst_48008__$1);

(statearr_48150[(14)] = inst_48010__$1);

(statearr_48150[(16)] = inst_48011__$1);

(statearr_48150[(18)] = inst_48026);

(statearr_48150[(17)] = inst_48009__$1);

return statearr_48150;
})();
var statearr_48151_48227 = state_48131__$1;
(statearr_48151_48227[(2)] = null);

(statearr_48151_48227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (21))){
var inst_48053 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48155_48228 = state_48131__$1;
(statearr_48155_48228[(2)] = inst_48053);

(statearr_48155_48228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (31))){
var inst_48079 = (state_48131[(11)]);
var inst_48083 = done.call(null,null);
var inst_48084 = cljs.core.async.untap_STAR_.call(null,m,inst_48079);
var state_48131__$1 = (function (){var statearr_48156 = state_48131;
(statearr_48156[(19)] = inst_48083);

return statearr_48156;
})();
var statearr_48157_48229 = state_48131__$1;
(statearr_48157_48229[(2)] = inst_48084);

(statearr_48157_48229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (32))){
var inst_48071 = (state_48131[(20)]);
var inst_48074 = (state_48131[(10)]);
var inst_48073 = (state_48131[(21)]);
var inst_48072 = (state_48131[(12)]);
var inst_48086 = (state_48131[(2)]);
var inst_48087 = (inst_48074 + (1));
var tmp48152 = inst_48071;
var tmp48153 = inst_48073;
var tmp48154 = inst_48072;
var inst_48071__$1 = tmp48152;
var inst_48072__$1 = tmp48154;
var inst_48073__$1 = tmp48153;
var inst_48074__$1 = inst_48087;
var state_48131__$1 = (function (){var statearr_48158 = state_48131;
(statearr_48158[(22)] = inst_48086);

(statearr_48158[(20)] = inst_48071__$1);

(statearr_48158[(10)] = inst_48074__$1);

(statearr_48158[(21)] = inst_48073__$1);

(statearr_48158[(12)] = inst_48072__$1);

return statearr_48158;
})();
var statearr_48159_48230 = state_48131__$1;
(statearr_48159_48230[(2)] = null);

(statearr_48159_48230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (40))){
var inst_48099 = (state_48131[(23)]);
var inst_48103 = done.call(null,null);
var inst_48104 = cljs.core.async.untap_STAR_.call(null,m,inst_48099);
var state_48131__$1 = (function (){var statearr_48160 = state_48131;
(statearr_48160[(24)] = inst_48103);

return statearr_48160;
})();
var statearr_48161_48231 = state_48131__$1;
(statearr_48161_48231[(2)] = inst_48104);

(statearr_48161_48231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (33))){
var inst_48090 = (state_48131[(25)]);
var inst_48092 = cljs.core.chunked_seq_QMARK_.call(null,inst_48090);
var state_48131__$1 = state_48131;
if(inst_48092){
var statearr_48162_48232 = state_48131__$1;
(statearr_48162_48232[(1)] = (36));

} else {
var statearr_48163_48233 = state_48131__$1;
(statearr_48163_48233[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (13))){
var inst_48020 = (state_48131[(26)]);
var inst_48023 = cljs.core.async.close_BANG_.call(null,inst_48020);
var state_48131__$1 = state_48131;
var statearr_48164_48234 = state_48131__$1;
(statearr_48164_48234[(2)] = inst_48023);

(statearr_48164_48234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (22))){
var inst_48043 = (state_48131[(8)]);
var inst_48046 = cljs.core.async.close_BANG_.call(null,inst_48043);
var state_48131__$1 = state_48131;
var statearr_48165_48235 = state_48131__$1;
(statearr_48165_48235[(2)] = inst_48046);

(statearr_48165_48235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (36))){
var inst_48090 = (state_48131[(25)]);
var inst_48094 = cljs.core.chunk_first.call(null,inst_48090);
var inst_48095 = cljs.core.chunk_rest.call(null,inst_48090);
var inst_48096 = cljs.core.count.call(null,inst_48094);
var inst_48071 = inst_48095;
var inst_48072 = inst_48094;
var inst_48073 = inst_48096;
var inst_48074 = (0);
var state_48131__$1 = (function (){var statearr_48166 = state_48131;
(statearr_48166[(20)] = inst_48071);

(statearr_48166[(10)] = inst_48074);

(statearr_48166[(21)] = inst_48073);

(statearr_48166[(12)] = inst_48072);

return statearr_48166;
})();
var statearr_48167_48236 = state_48131__$1;
(statearr_48167_48236[(2)] = null);

(statearr_48167_48236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (41))){
var inst_48090 = (state_48131[(25)]);
var inst_48106 = (state_48131[(2)]);
var inst_48107 = cljs.core.next.call(null,inst_48090);
var inst_48071 = inst_48107;
var inst_48072 = null;
var inst_48073 = (0);
var inst_48074 = (0);
var state_48131__$1 = (function (){var statearr_48168 = state_48131;
(statearr_48168[(20)] = inst_48071);

(statearr_48168[(27)] = inst_48106);

(statearr_48168[(10)] = inst_48074);

(statearr_48168[(21)] = inst_48073);

(statearr_48168[(12)] = inst_48072);

return statearr_48168;
})();
var statearr_48169_48237 = state_48131__$1;
(statearr_48169_48237[(2)] = null);

(statearr_48169_48237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (43))){
var state_48131__$1 = state_48131;
var statearr_48170_48238 = state_48131__$1;
(statearr_48170_48238[(2)] = null);

(statearr_48170_48238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (29))){
var inst_48115 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48171_48239 = state_48131__$1;
(statearr_48171_48239[(2)] = inst_48115);

(statearr_48171_48239[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (44))){
var inst_48124 = (state_48131[(2)]);
var state_48131__$1 = (function (){var statearr_48172 = state_48131;
(statearr_48172[(28)] = inst_48124);

return statearr_48172;
})();
var statearr_48173_48240 = state_48131__$1;
(statearr_48173_48240[(2)] = null);

(statearr_48173_48240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (6))){
var inst_48063 = (state_48131[(29)]);
var inst_48062 = cljs.core.deref.call(null,cs);
var inst_48063__$1 = cljs.core.keys.call(null,inst_48062);
var inst_48064 = cljs.core.count.call(null,inst_48063__$1);
var inst_48065 = cljs.core.reset_BANG_.call(null,dctr,inst_48064);
var inst_48070 = cljs.core.seq.call(null,inst_48063__$1);
var inst_48071 = inst_48070;
var inst_48072 = null;
var inst_48073 = (0);
var inst_48074 = (0);
var state_48131__$1 = (function (){var statearr_48174 = state_48131;
(statearr_48174[(20)] = inst_48071);

(statearr_48174[(10)] = inst_48074);

(statearr_48174[(21)] = inst_48073);

(statearr_48174[(12)] = inst_48072);

(statearr_48174[(29)] = inst_48063__$1);

(statearr_48174[(30)] = inst_48065);

return statearr_48174;
})();
var statearr_48175_48241 = state_48131__$1;
(statearr_48175_48241[(2)] = null);

(statearr_48175_48241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (28))){
var inst_48071 = (state_48131[(20)]);
var inst_48090 = (state_48131[(25)]);
var inst_48090__$1 = cljs.core.seq.call(null,inst_48071);
var state_48131__$1 = (function (){var statearr_48176 = state_48131;
(statearr_48176[(25)] = inst_48090__$1);

return statearr_48176;
})();
if(inst_48090__$1){
var statearr_48177_48242 = state_48131__$1;
(statearr_48177_48242[(1)] = (33));

} else {
var statearr_48178_48243 = state_48131__$1;
(statearr_48178_48243[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (25))){
var inst_48074 = (state_48131[(10)]);
var inst_48073 = (state_48131[(21)]);
var inst_48076 = (inst_48074 < inst_48073);
var inst_48077 = inst_48076;
var state_48131__$1 = state_48131;
if(cljs.core.truth_(inst_48077)){
var statearr_48179_48244 = state_48131__$1;
(statearr_48179_48244[(1)] = (27));

} else {
var statearr_48180_48245 = state_48131__$1;
(statearr_48180_48245[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (34))){
var state_48131__$1 = state_48131;
var statearr_48181_48246 = state_48131__$1;
(statearr_48181_48246[(2)] = null);

(statearr_48181_48246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (17))){
var state_48131__$1 = state_48131;
var statearr_48182_48247 = state_48131__$1;
(statearr_48182_48247[(2)] = null);

(statearr_48182_48247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (3))){
var inst_48129 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48131__$1,inst_48129);
} else {
if((state_val_48132 === (12))){
var inst_48058 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48183_48248 = state_48131__$1;
(statearr_48183_48248[(2)] = inst_48058);

(statearr_48183_48248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (2))){
var state_48131__$1 = state_48131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48131__$1,(4),ch);
} else {
if((state_val_48132 === (23))){
var state_48131__$1 = state_48131;
var statearr_48184_48249 = state_48131__$1;
(statearr_48184_48249[(2)] = null);

(statearr_48184_48249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (35))){
var inst_48113 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48185_48250 = state_48131__$1;
(statearr_48185_48250[(2)] = inst_48113);

(statearr_48185_48250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (19))){
var inst_48030 = (state_48131[(7)]);
var inst_48034 = cljs.core.chunk_first.call(null,inst_48030);
var inst_48035 = cljs.core.chunk_rest.call(null,inst_48030);
var inst_48036 = cljs.core.count.call(null,inst_48034);
var inst_48008 = inst_48035;
var inst_48009 = inst_48034;
var inst_48010 = inst_48036;
var inst_48011 = (0);
var state_48131__$1 = (function (){var statearr_48186 = state_48131;
(statearr_48186[(13)] = inst_48008);

(statearr_48186[(14)] = inst_48010);

(statearr_48186[(16)] = inst_48011);

(statearr_48186[(17)] = inst_48009);

return statearr_48186;
})();
var statearr_48187_48251 = state_48131__$1;
(statearr_48187_48251[(2)] = null);

(statearr_48187_48251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (11))){
var inst_48008 = (state_48131[(13)]);
var inst_48030 = (state_48131[(7)]);
var inst_48030__$1 = cljs.core.seq.call(null,inst_48008);
var state_48131__$1 = (function (){var statearr_48188 = state_48131;
(statearr_48188[(7)] = inst_48030__$1);

return statearr_48188;
})();
if(inst_48030__$1){
var statearr_48189_48252 = state_48131__$1;
(statearr_48189_48252[(1)] = (16));

} else {
var statearr_48190_48253 = state_48131__$1;
(statearr_48190_48253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (9))){
var inst_48060 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48191_48254 = state_48131__$1;
(statearr_48191_48254[(2)] = inst_48060);

(statearr_48191_48254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (5))){
var inst_48006 = cljs.core.deref.call(null,cs);
var inst_48007 = cljs.core.seq.call(null,inst_48006);
var inst_48008 = inst_48007;
var inst_48009 = null;
var inst_48010 = (0);
var inst_48011 = (0);
var state_48131__$1 = (function (){var statearr_48192 = state_48131;
(statearr_48192[(13)] = inst_48008);

(statearr_48192[(14)] = inst_48010);

(statearr_48192[(16)] = inst_48011);

(statearr_48192[(17)] = inst_48009);

return statearr_48192;
})();
var statearr_48193_48255 = state_48131__$1;
(statearr_48193_48255[(2)] = null);

(statearr_48193_48255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (14))){
var state_48131__$1 = state_48131;
var statearr_48194_48256 = state_48131__$1;
(statearr_48194_48256[(2)] = null);

(statearr_48194_48256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (45))){
var inst_48121 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48195_48257 = state_48131__$1;
(statearr_48195_48257[(2)] = inst_48121);

(statearr_48195_48257[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (26))){
var inst_48063 = (state_48131[(29)]);
var inst_48117 = (state_48131[(2)]);
var inst_48118 = cljs.core.seq.call(null,inst_48063);
var state_48131__$1 = (function (){var statearr_48196 = state_48131;
(statearr_48196[(31)] = inst_48117);

return statearr_48196;
})();
if(inst_48118){
var statearr_48197_48258 = state_48131__$1;
(statearr_48197_48258[(1)] = (42));

} else {
var statearr_48198_48259 = state_48131__$1;
(statearr_48198_48259[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (16))){
var inst_48030 = (state_48131[(7)]);
var inst_48032 = cljs.core.chunked_seq_QMARK_.call(null,inst_48030);
var state_48131__$1 = state_48131;
if(inst_48032){
var statearr_48199_48260 = state_48131__$1;
(statearr_48199_48260[(1)] = (19));

} else {
var statearr_48200_48261 = state_48131__$1;
(statearr_48200_48261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (38))){
var inst_48110 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48201_48262 = state_48131__$1;
(statearr_48201_48262[(2)] = inst_48110);

(statearr_48201_48262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (30))){
var state_48131__$1 = state_48131;
var statearr_48202_48263 = state_48131__$1;
(statearr_48202_48263[(2)] = null);

(statearr_48202_48263[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (10))){
var inst_48011 = (state_48131[(16)]);
var inst_48009 = (state_48131[(17)]);
var inst_48019 = cljs.core._nth.call(null,inst_48009,inst_48011);
var inst_48020 = cljs.core.nth.call(null,inst_48019,(0),null);
var inst_48021 = cljs.core.nth.call(null,inst_48019,(1),null);
var state_48131__$1 = (function (){var statearr_48203 = state_48131;
(statearr_48203[(26)] = inst_48020);

return statearr_48203;
})();
if(cljs.core.truth_(inst_48021)){
var statearr_48204_48264 = state_48131__$1;
(statearr_48204_48264[(1)] = (13));

} else {
var statearr_48205_48265 = state_48131__$1;
(statearr_48205_48265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (18))){
var inst_48056 = (state_48131[(2)]);
var state_48131__$1 = state_48131;
var statearr_48206_48266 = state_48131__$1;
(statearr_48206_48266[(2)] = inst_48056);

(statearr_48206_48266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (42))){
var state_48131__$1 = state_48131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48131__$1,(45),dchan);
} else {
if((state_val_48132 === (37))){
var inst_48099 = (state_48131[(23)]);
var inst_47999 = (state_48131[(9)]);
var inst_48090 = (state_48131[(25)]);
var inst_48099__$1 = cljs.core.first.call(null,inst_48090);
var inst_48100 = cljs.core.async.put_BANG_.call(null,inst_48099__$1,inst_47999,done);
var state_48131__$1 = (function (){var statearr_48207 = state_48131;
(statearr_48207[(23)] = inst_48099__$1);

return statearr_48207;
})();
if(cljs.core.truth_(inst_48100)){
var statearr_48208_48267 = state_48131__$1;
(statearr_48208_48267[(1)] = (39));

} else {
var statearr_48209_48268 = state_48131__$1;
(statearr_48209_48268[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48132 === (8))){
var inst_48010 = (state_48131[(14)]);
var inst_48011 = (state_48131[(16)]);
var inst_48013 = (inst_48011 < inst_48010);
var inst_48014 = inst_48013;
var state_48131__$1 = state_48131;
if(cljs.core.truth_(inst_48014)){
var statearr_48210_48269 = state_48131__$1;
(statearr_48210_48269[(1)] = (10));

} else {
var statearr_48211_48270 = state_48131__$1;
(statearr_48211_48270[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48216,cs,m,dchan,dctr,done))
;
return ((function (switch__32331__auto__,c__32422__auto___48216,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32332__auto__ = null;
var cljs$core$async$mult_$_state_machine__32332__auto____0 = (function (){
var statearr_48212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48212[(0)] = cljs$core$async$mult_$_state_machine__32332__auto__);

(statearr_48212[(1)] = (1));

return statearr_48212;
});
var cljs$core$async$mult_$_state_machine__32332__auto____1 = (function (state_48131){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48213){if((e48213 instanceof Object)){
var ex__32335__auto__ = e48213;
var statearr_48214_48271 = state_48131;
(statearr_48214_48271[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48272 = state_48131;
state_48131 = G__48272;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32332__auto__ = function(state_48131){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32332__auto____1.call(this,state_48131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32332__auto____0;
cljs$core$async$mult_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32332__auto____1;
return cljs$core$async$mult_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48216,cs,m,dchan,dctr,done))
})();
var state__32424__auto__ = (function (){var statearr_48215 = f__32423__auto__.call(null);
(statearr_48215[(6)] = c__32422__auto___48216);

return statearr_48215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48216,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48274 = arguments.length;
switch (G__48274) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___48286 = arguments.length;
var i__4532__auto___48287 = (0);
while(true){
if((i__4532__auto___48287 < len__4531__auto___48286)){
args__4534__auto__.push((arguments[i__4532__auto___48287]));

var G__48288 = (i__4532__auto___48287 + (1));
i__4532__auto___48287 = G__48288;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48280){
var map__48281 = p__48280;
var map__48281__$1 = ((((!((map__48281 == null)))?(((((map__48281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48281):map__48281);
var opts = map__48281__$1;
var statearr_48283_48289 = state;
(statearr_48283_48289[(1)] = cont_block);


var temp__5559__auto__ = cljs.core.async.do_alts.call(null,((function (map__48281,map__48281__$1,opts){
return (function (val){
var statearr_48284_48290 = state;
(statearr_48284_48290[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48281,map__48281__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5559__auto__)){
var cb = temp__5559__auto__;
var statearr_48285_48291 = state;
(statearr_48285_48291[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48276){
var G__48277 = cljs.core.first.call(null,seq48276);
var seq48276__$1 = cljs.core.next.call(null,seq48276);
var G__48278 = cljs.core.first.call(null,seq48276__$1);
var seq48276__$2 = cljs.core.next.call(null,seq48276__$1);
var G__48279 = cljs.core.first.call(null,seq48276__$2);
var seq48276__$3 = cljs.core.next.call(null,seq48276__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48277,G__48278,G__48279,seq48276__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48292 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48293){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48293 = meta48293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48294,meta48293__$1){
var self__ = this;
var _48294__$1 = this;
return (new cljs.core.async.t_cljs$core$async48292(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48293__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48294){
var self__ = this;
var _48294__$1 = this;
return self__.meta48293;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48293","meta48293",496613915,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48292";

cljs.core.async.t_cljs$core$async48292.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async48292");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48292.
 */
cljs.core.async.__GT_t_cljs$core$async48292 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48292(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48293){
return (new cljs.core.async.t_cljs$core$async48292(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48293));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48292(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32422__auto___48456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48396){
var state_val_48397 = (state_48396[(1)]);
if((state_val_48397 === (7))){
var inst_48311 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
var statearr_48398_48457 = state_48396__$1;
(statearr_48398_48457[(2)] = inst_48311);

(statearr_48398_48457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (20))){
var inst_48323 = (state_48396[(7)]);
var state_48396__$1 = state_48396;
var statearr_48399_48458 = state_48396__$1;
(statearr_48399_48458[(2)] = inst_48323);

(statearr_48399_48458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (27))){
var state_48396__$1 = state_48396;
var statearr_48400_48459 = state_48396__$1;
(statearr_48400_48459[(2)] = null);

(statearr_48400_48459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (1))){
var inst_48298 = (state_48396[(8)]);
var inst_48298__$1 = calc_state.call(null);
var inst_48300 = (inst_48298__$1 == null);
var inst_48301 = cljs.core.not.call(null,inst_48300);
var state_48396__$1 = (function (){var statearr_48401 = state_48396;
(statearr_48401[(8)] = inst_48298__$1);

return statearr_48401;
})();
if(inst_48301){
var statearr_48402_48460 = state_48396__$1;
(statearr_48402_48460[(1)] = (2));

} else {
var statearr_48403_48461 = state_48396__$1;
(statearr_48403_48461[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (24))){
var inst_48347 = (state_48396[(9)]);
var inst_48370 = (state_48396[(10)]);
var inst_48356 = (state_48396[(11)]);
var inst_48370__$1 = inst_48347.call(null,inst_48356);
var state_48396__$1 = (function (){var statearr_48404 = state_48396;
(statearr_48404[(10)] = inst_48370__$1);

return statearr_48404;
})();
if(cljs.core.truth_(inst_48370__$1)){
var statearr_48405_48462 = state_48396__$1;
(statearr_48405_48462[(1)] = (29));

} else {
var statearr_48406_48463 = state_48396__$1;
(statearr_48406_48463[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (4))){
var inst_48314 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48314)){
var statearr_48407_48464 = state_48396__$1;
(statearr_48407_48464[(1)] = (8));

} else {
var statearr_48408_48465 = state_48396__$1;
(statearr_48408_48465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (15))){
var inst_48341 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48341)){
var statearr_48409_48466 = state_48396__$1;
(statearr_48409_48466[(1)] = (19));

} else {
var statearr_48410_48467 = state_48396__$1;
(statearr_48410_48467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (21))){
var inst_48346 = (state_48396[(12)]);
var inst_48346__$1 = (state_48396[(2)]);
var inst_48347 = cljs.core.get.call(null,inst_48346__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48348 = cljs.core.get.call(null,inst_48346__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48349 = cljs.core.get.call(null,inst_48346__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48396__$1 = (function (){var statearr_48411 = state_48396;
(statearr_48411[(13)] = inst_48348);

(statearr_48411[(9)] = inst_48347);

(statearr_48411[(12)] = inst_48346__$1);

return statearr_48411;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48396__$1,(22),inst_48349);
} else {
if((state_val_48397 === (31))){
var inst_48378 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48378)){
var statearr_48412_48468 = state_48396__$1;
(statearr_48412_48468[(1)] = (32));

} else {
var statearr_48413_48469 = state_48396__$1;
(statearr_48413_48469[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (32))){
var inst_48355 = (state_48396[(14)]);
var state_48396__$1 = state_48396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48396__$1,(35),out,inst_48355);
} else {
if((state_val_48397 === (33))){
var inst_48346 = (state_48396[(12)]);
var inst_48323 = inst_48346;
var state_48396__$1 = (function (){var statearr_48414 = state_48396;
(statearr_48414[(7)] = inst_48323);

return statearr_48414;
})();
var statearr_48415_48470 = state_48396__$1;
(statearr_48415_48470[(2)] = null);

(statearr_48415_48470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (13))){
var inst_48323 = (state_48396[(7)]);
var inst_48330 = inst_48323.cljs$lang$protocol_mask$partition0$;
var inst_48331 = (inst_48330 & (64));
var inst_48332 = inst_48323.cljs$core$ISeq$;
var inst_48333 = (cljs.core.PROTOCOL_SENTINEL === inst_48332);
var inst_48334 = ((inst_48331) || (inst_48333));
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48334)){
var statearr_48416_48471 = state_48396__$1;
(statearr_48416_48471[(1)] = (16));

} else {
var statearr_48417_48472 = state_48396__$1;
(statearr_48417_48472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (22))){
var inst_48355 = (state_48396[(14)]);
var inst_48356 = (state_48396[(11)]);
var inst_48354 = (state_48396[(2)]);
var inst_48355__$1 = cljs.core.nth.call(null,inst_48354,(0),null);
var inst_48356__$1 = cljs.core.nth.call(null,inst_48354,(1),null);
var inst_48357 = (inst_48355__$1 == null);
var inst_48358 = cljs.core._EQ_.call(null,inst_48356__$1,change);
var inst_48359 = ((inst_48357) || (inst_48358));
var state_48396__$1 = (function (){var statearr_48418 = state_48396;
(statearr_48418[(14)] = inst_48355__$1);

(statearr_48418[(11)] = inst_48356__$1);

return statearr_48418;
})();
if(cljs.core.truth_(inst_48359)){
var statearr_48419_48473 = state_48396__$1;
(statearr_48419_48473[(1)] = (23));

} else {
var statearr_48420_48474 = state_48396__$1;
(statearr_48420_48474[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (36))){
var inst_48346 = (state_48396[(12)]);
var inst_48323 = inst_48346;
var state_48396__$1 = (function (){var statearr_48421 = state_48396;
(statearr_48421[(7)] = inst_48323);

return statearr_48421;
})();
var statearr_48422_48475 = state_48396__$1;
(statearr_48422_48475[(2)] = null);

(statearr_48422_48475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (29))){
var inst_48370 = (state_48396[(10)]);
var state_48396__$1 = state_48396;
var statearr_48423_48476 = state_48396__$1;
(statearr_48423_48476[(2)] = inst_48370);

(statearr_48423_48476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (6))){
var state_48396__$1 = state_48396;
var statearr_48424_48477 = state_48396__$1;
(statearr_48424_48477[(2)] = false);

(statearr_48424_48477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (28))){
var inst_48366 = (state_48396[(2)]);
var inst_48367 = calc_state.call(null);
var inst_48323 = inst_48367;
var state_48396__$1 = (function (){var statearr_48425 = state_48396;
(statearr_48425[(7)] = inst_48323);

(statearr_48425[(15)] = inst_48366);

return statearr_48425;
})();
var statearr_48426_48478 = state_48396__$1;
(statearr_48426_48478[(2)] = null);

(statearr_48426_48478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (25))){
var inst_48392 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
var statearr_48427_48479 = state_48396__$1;
(statearr_48427_48479[(2)] = inst_48392);

(statearr_48427_48479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (34))){
var inst_48390 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
var statearr_48428_48480 = state_48396__$1;
(statearr_48428_48480[(2)] = inst_48390);

(statearr_48428_48480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (17))){
var state_48396__$1 = state_48396;
var statearr_48429_48481 = state_48396__$1;
(statearr_48429_48481[(2)] = false);

(statearr_48429_48481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (3))){
var state_48396__$1 = state_48396;
var statearr_48430_48482 = state_48396__$1;
(statearr_48430_48482[(2)] = false);

(statearr_48430_48482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (12))){
var inst_48394 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48396__$1,inst_48394);
} else {
if((state_val_48397 === (2))){
var inst_48298 = (state_48396[(8)]);
var inst_48303 = inst_48298.cljs$lang$protocol_mask$partition0$;
var inst_48304 = (inst_48303 & (64));
var inst_48305 = inst_48298.cljs$core$ISeq$;
var inst_48306 = (cljs.core.PROTOCOL_SENTINEL === inst_48305);
var inst_48307 = ((inst_48304) || (inst_48306));
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48307)){
var statearr_48431_48483 = state_48396__$1;
(statearr_48431_48483[(1)] = (5));

} else {
var statearr_48432_48484 = state_48396__$1;
(statearr_48432_48484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (23))){
var inst_48355 = (state_48396[(14)]);
var inst_48361 = (inst_48355 == null);
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48361)){
var statearr_48433_48485 = state_48396__$1;
(statearr_48433_48485[(1)] = (26));

} else {
var statearr_48434_48486 = state_48396__$1;
(statearr_48434_48486[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (35))){
var inst_48381 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
if(cljs.core.truth_(inst_48381)){
var statearr_48435_48487 = state_48396__$1;
(statearr_48435_48487[(1)] = (36));

} else {
var statearr_48436_48488 = state_48396__$1;
(statearr_48436_48488[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (19))){
var inst_48323 = (state_48396[(7)]);
var inst_48343 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48323);
var state_48396__$1 = state_48396;
var statearr_48437_48489 = state_48396__$1;
(statearr_48437_48489[(2)] = inst_48343);

(statearr_48437_48489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (11))){
var inst_48323 = (state_48396[(7)]);
var inst_48327 = (inst_48323 == null);
var inst_48328 = cljs.core.not.call(null,inst_48327);
var state_48396__$1 = state_48396;
if(inst_48328){
var statearr_48438_48490 = state_48396__$1;
(statearr_48438_48490[(1)] = (13));

} else {
var statearr_48439_48491 = state_48396__$1;
(statearr_48439_48491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (9))){
var inst_48298 = (state_48396[(8)]);
var state_48396__$1 = state_48396;
var statearr_48440_48492 = state_48396__$1;
(statearr_48440_48492[(2)] = inst_48298);

(statearr_48440_48492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (5))){
var state_48396__$1 = state_48396;
var statearr_48441_48493 = state_48396__$1;
(statearr_48441_48493[(2)] = true);

(statearr_48441_48493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (14))){
var state_48396__$1 = state_48396;
var statearr_48442_48494 = state_48396__$1;
(statearr_48442_48494[(2)] = false);

(statearr_48442_48494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (26))){
var inst_48356 = (state_48396[(11)]);
var inst_48363 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48356);
var state_48396__$1 = state_48396;
var statearr_48443_48495 = state_48396__$1;
(statearr_48443_48495[(2)] = inst_48363);

(statearr_48443_48495[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (16))){
var state_48396__$1 = state_48396;
var statearr_48444_48496 = state_48396__$1;
(statearr_48444_48496[(2)] = true);

(statearr_48444_48496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (38))){
var inst_48386 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
var statearr_48445_48497 = state_48396__$1;
(statearr_48445_48497[(2)] = inst_48386);

(statearr_48445_48497[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (30))){
var inst_48348 = (state_48396[(13)]);
var inst_48347 = (state_48396[(9)]);
var inst_48356 = (state_48396[(11)]);
var inst_48373 = cljs.core.empty_QMARK_.call(null,inst_48347);
var inst_48374 = inst_48348.call(null,inst_48356);
var inst_48375 = cljs.core.not.call(null,inst_48374);
var inst_48376 = ((inst_48373) && (inst_48375));
var state_48396__$1 = state_48396;
var statearr_48446_48498 = state_48396__$1;
(statearr_48446_48498[(2)] = inst_48376);

(statearr_48446_48498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (10))){
var inst_48298 = (state_48396[(8)]);
var inst_48319 = (state_48396[(2)]);
var inst_48320 = cljs.core.get.call(null,inst_48319,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48321 = cljs.core.get.call(null,inst_48319,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48322 = cljs.core.get.call(null,inst_48319,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48323 = inst_48298;
var state_48396__$1 = (function (){var statearr_48447 = state_48396;
(statearr_48447[(7)] = inst_48323);

(statearr_48447[(16)] = inst_48321);

(statearr_48447[(17)] = inst_48322);

(statearr_48447[(18)] = inst_48320);

return statearr_48447;
})();
var statearr_48448_48499 = state_48396__$1;
(statearr_48448_48499[(2)] = null);

(statearr_48448_48499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (18))){
var inst_48338 = (state_48396[(2)]);
var state_48396__$1 = state_48396;
var statearr_48449_48500 = state_48396__$1;
(statearr_48449_48500[(2)] = inst_48338);

(statearr_48449_48500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (37))){
var state_48396__$1 = state_48396;
var statearr_48450_48501 = state_48396__$1;
(statearr_48450_48501[(2)] = null);

(statearr_48450_48501[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48397 === (8))){
var inst_48298 = (state_48396[(8)]);
var inst_48316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48298);
var state_48396__$1 = state_48396;
var statearr_48451_48502 = state_48396__$1;
(statearr_48451_48502[(2)] = inst_48316);

(statearr_48451_48502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32331__auto__,c__32422__auto___48456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32332__auto__ = null;
var cljs$core$async$mix_$_state_machine__32332__auto____0 = (function (){
var statearr_48452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48452[(0)] = cljs$core$async$mix_$_state_machine__32332__auto__);

(statearr_48452[(1)] = (1));

return statearr_48452;
});
var cljs$core$async$mix_$_state_machine__32332__auto____1 = (function (state_48396){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48453){if((e48453 instanceof Object)){
var ex__32335__auto__ = e48453;
var statearr_48454_48503 = state_48396;
(statearr_48454_48503[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48504 = state_48396;
state_48396 = G__48504;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32332__auto__ = function(state_48396){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32332__auto____1.call(this,state_48396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32332__auto____0;
cljs$core$async$mix_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32332__auto____1;
return cljs$core$async$mix_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32424__auto__ = (function (){var statearr_48455 = f__32423__auto__.call(null);
(statearr_48455[(6)] = c__32422__auto___48456);

return statearr_48455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48506 = arguments.length;
switch (G__48506) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48510 = arguments.length;
switch (G__48510) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__48508_SHARP_){
if(cljs.core.truth_(p1__48508_SHARP_.call(null,topic))){
return p1__48508_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48508_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48511 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48512){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48512 = meta48512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48513,meta48512__$1){
var self__ = this;
var _48513__$1 = this;
return (new cljs.core.async.t_cljs$core$async48511(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48512__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48513){
var self__ = this;
var _48513__$1 = this;
return self__.meta48512;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5559__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5559__auto__)){
var m = temp__5559__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48512","meta48512",-373728214,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48511";

cljs.core.async.t_cljs$core$async48511.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async48511");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48511.
 */
cljs.core.async.__GT_t_cljs$core$async48511 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48512){
return (new cljs.core.async.t_cljs$core$async48511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48512));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48511(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32422__auto___48631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48631,mults,ensure_mult,p){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48631,mults,ensure_mult,p){
return (function (state_48585){
var state_val_48586 = (state_48585[(1)]);
if((state_val_48586 === (7))){
var inst_48581 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
var statearr_48587_48632 = state_48585__$1;
(statearr_48587_48632[(2)] = inst_48581);

(statearr_48587_48632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (20))){
var state_48585__$1 = state_48585;
var statearr_48588_48633 = state_48585__$1;
(statearr_48588_48633[(2)] = null);

(statearr_48588_48633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (1))){
var state_48585__$1 = state_48585;
var statearr_48589_48634 = state_48585__$1;
(statearr_48589_48634[(2)] = null);

(statearr_48589_48634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (24))){
var inst_48564 = (state_48585[(7)]);
var inst_48573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48564);
var state_48585__$1 = state_48585;
var statearr_48590_48635 = state_48585__$1;
(statearr_48590_48635[(2)] = inst_48573);

(statearr_48590_48635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (4))){
var inst_48516 = (state_48585[(8)]);
var inst_48516__$1 = (state_48585[(2)]);
var inst_48517 = (inst_48516__$1 == null);
var state_48585__$1 = (function (){var statearr_48591 = state_48585;
(statearr_48591[(8)] = inst_48516__$1);

return statearr_48591;
})();
if(cljs.core.truth_(inst_48517)){
var statearr_48592_48636 = state_48585__$1;
(statearr_48592_48636[(1)] = (5));

} else {
var statearr_48593_48637 = state_48585__$1;
(statearr_48593_48637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (15))){
var inst_48558 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
var statearr_48594_48638 = state_48585__$1;
(statearr_48594_48638[(2)] = inst_48558);

(statearr_48594_48638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (21))){
var inst_48578 = (state_48585[(2)]);
var state_48585__$1 = (function (){var statearr_48595 = state_48585;
(statearr_48595[(9)] = inst_48578);

return statearr_48595;
})();
var statearr_48596_48639 = state_48585__$1;
(statearr_48596_48639[(2)] = null);

(statearr_48596_48639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (13))){
var inst_48540 = (state_48585[(10)]);
var inst_48542 = cljs.core.chunked_seq_QMARK_.call(null,inst_48540);
var state_48585__$1 = state_48585;
if(inst_48542){
var statearr_48597_48640 = state_48585__$1;
(statearr_48597_48640[(1)] = (16));

} else {
var statearr_48598_48641 = state_48585__$1;
(statearr_48598_48641[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (22))){
var inst_48570 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
if(cljs.core.truth_(inst_48570)){
var statearr_48599_48642 = state_48585__$1;
(statearr_48599_48642[(1)] = (23));

} else {
var statearr_48600_48643 = state_48585__$1;
(statearr_48600_48643[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (6))){
var inst_48566 = (state_48585[(11)]);
var inst_48564 = (state_48585[(7)]);
var inst_48516 = (state_48585[(8)]);
var inst_48564__$1 = topic_fn.call(null,inst_48516);
var inst_48565 = cljs.core.deref.call(null,mults);
var inst_48566__$1 = cljs.core.get.call(null,inst_48565,inst_48564__$1);
var state_48585__$1 = (function (){var statearr_48601 = state_48585;
(statearr_48601[(11)] = inst_48566__$1);

(statearr_48601[(7)] = inst_48564__$1);

return statearr_48601;
})();
if(cljs.core.truth_(inst_48566__$1)){
var statearr_48602_48644 = state_48585__$1;
(statearr_48602_48644[(1)] = (19));

} else {
var statearr_48603_48645 = state_48585__$1;
(statearr_48603_48645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (25))){
var inst_48575 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
var statearr_48604_48646 = state_48585__$1;
(statearr_48604_48646[(2)] = inst_48575);

(statearr_48604_48646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (17))){
var inst_48540 = (state_48585[(10)]);
var inst_48549 = cljs.core.first.call(null,inst_48540);
var inst_48550 = cljs.core.async.muxch_STAR_.call(null,inst_48549);
var inst_48551 = cljs.core.async.close_BANG_.call(null,inst_48550);
var inst_48552 = cljs.core.next.call(null,inst_48540);
var inst_48526 = inst_48552;
var inst_48527 = null;
var inst_48528 = (0);
var inst_48529 = (0);
var state_48585__$1 = (function (){var statearr_48605 = state_48585;
(statearr_48605[(12)] = inst_48528);

(statearr_48605[(13)] = inst_48526);

(statearr_48605[(14)] = inst_48529);

(statearr_48605[(15)] = inst_48551);

(statearr_48605[(16)] = inst_48527);

return statearr_48605;
})();
var statearr_48606_48647 = state_48585__$1;
(statearr_48606_48647[(2)] = null);

(statearr_48606_48647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (3))){
var inst_48583 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48585__$1,inst_48583);
} else {
if((state_val_48586 === (12))){
var inst_48560 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
var statearr_48607_48648 = state_48585__$1;
(statearr_48607_48648[(2)] = inst_48560);

(statearr_48607_48648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (2))){
var state_48585__$1 = state_48585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48585__$1,(4),ch);
} else {
if((state_val_48586 === (23))){
var state_48585__$1 = state_48585;
var statearr_48608_48649 = state_48585__$1;
(statearr_48608_48649[(2)] = null);

(statearr_48608_48649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (19))){
var inst_48566 = (state_48585[(11)]);
var inst_48516 = (state_48585[(8)]);
var inst_48568 = cljs.core.async.muxch_STAR_.call(null,inst_48566);
var state_48585__$1 = state_48585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48585__$1,(22),inst_48568,inst_48516);
} else {
if((state_val_48586 === (11))){
var inst_48526 = (state_48585[(13)]);
var inst_48540 = (state_48585[(10)]);
var inst_48540__$1 = cljs.core.seq.call(null,inst_48526);
var state_48585__$1 = (function (){var statearr_48609 = state_48585;
(statearr_48609[(10)] = inst_48540__$1);

return statearr_48609;
})();
if(inst_48540__$1){
var statearr_48610_48650 = state_48585__$1;
(statearr_48610_48650[(1)] = (13));

} else {
var statearr_48611_48651 = state_48585__$1;
(statearr_48611_48651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (9))){
var inst_48562 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
var statearr_48612_48652 = state_48585__$1;
(statearr_48612_48652[(2)] = inst_48562);

(statearr_48612_48652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (5))){
var inst_48523 = cljs.core.deref.call(null,mults);
var inst_48524 = cljs.core.vals.call(null,inst_48523);
var inst_48525 = cljs.core.seq.call(null,inst_48524);
var inst_48526 = inst_48525;
var inst_48527 = null;
var inst_48528 = (0);
var inst_48529 = (0);
var state_48585__$1 = (function (){var statearr_48613 = state_48585;
(statearr_48613[(12)] = inst_48528);

(statearr_48613[(13)] = inst_48526);

(statearr_48613[(14)] = inst_48529);

(statearr_48613[(16)] = inst_48527);

return statearr_48613;
})();
var statearr_48614_48653 = state_48585__$1;
(statearr_48614_48653[(2)] = null);

(statearr_48614_48653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (14))){
var state_48585__$1 = state_48585;
var statearr_48618_48654 = state_48585__$1;
(statearr_48618_48654[(2)] = null);

(statearr_48618_48654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (16))){
var inst_48540 = (state_48585[(10)]);
var inst_48544 = cljs.core.chunk_first.call(null,inst_48540);
var inst_48545 = cljs.core.chunk_rest.call(null,inst_48540);
var inst_48546 = cljs.core.count.call(null,inst_48544);
var inst_48526 = inst_48545;
var inst_48527 = inst_48544;
var inst_48528 = inst_48546;
var inst_48529 = (0);
var state_48585__$1 = (function (){var statearr_48619 = state_48585;
(statearr_48619[(12)] = inst_48528);

(statearr_48619[(13)] = inst_48526);

(statearr_48619[(14)] = inst_48529);

(statearr_48619[(16)] = inst_48527);

return statearr_48619;
})();
var statearr_48620_48655 = state_48585__$1;
(statearr_48620_48655[(2)] = null);

(statearr_48620_48655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (10))){
var inst_48528 = (state_48585[(12)]);
var inst_48526 = (state_48585[(13)]);
var inst_48529 = (state_48585[(14)]);
var inst_48527 = (state_48585[(16)]);
var inst_48534 = cljs.core._nth.call(null,inst_48527,inst_48529);
var inst_48535 = cljs.core.async.muxch_STAR_.call(null,inst_48534);
var inst_48536 = cljs.core.async.close_BANG_.call(null,inst_48535);
var inst_48537 = (inst_48529 + (1));
var tmp48615 = inst_48528;
var tmp48616 = inst_48526;
var tmp48617 = inst_48527;
var inst_48526__$1 = tmp48616;
var inst_48527__$1 = tmp48617;
var inst_48528__$1 = tmp48615;
var inst_48529__$1 = inst_48537;
var state_48585__$1 = (function (){var statearr_48621 = state_48585;
(statearr_48621[(12)] = inst_48528__$1);

(statearr_48621[(13)] = inst_48526__$1);

(statearr_48621[(14)] = inst_48529__$1);

(statearr_48621[(17)] = inst_48536);

(statearr_48621[(16)] = inst_48527__$1);

return statearr_48621;
})();
var statearr_48622_48656 = state_48585__$1;
(statearr_48622_48656[(2)] = null);

(statearr_48622_48656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (18))){
var inst_48555 = (state_48585[(2)]);
var state_48585__$1 = state_48585;
var statearr_48623_48657 = state_48585__$1;
(statearr_48623_48657[(2)] = inst_48555);

(statearr_48623_48657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48586 === (8))){
var inst_48528 = (state_48585[(12)]);
var inst_48529 = (state_48585[(14)]);
var inst_48531 = (inst_48529 < inst_48528);
var inst_48532 = inst_48531;
var state_48585__$1 = state_48585;
if(cljs.core.truth_(inst_48532)){
var statearr_48624_48658 = state_48585__$1;
(statearr_48624_48658[(1)] = (10));

} else {
var statearr_48625_48659 = state_48585__$1;
(statearr_48625_48659[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48631,mults,ensure_mult,p))
;
return ((function (switch__32331__auto__,c__32422__auto___48631,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_48626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48626[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_48626[(1)] = (1));

return statearr_48626;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_48585){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48627){if((e48627 instanceof Object)){
var ex__32335__auto__ = e48627;
var statearr_48628_48660 = state_48585;
(statearr_48628_48660[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48661 = state_48585;
state_48585 = G__48661;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_48585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_48585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48631,mults,ensure_mult,p))
})();
var state__32424__auto__ = (function (){var statearr_48629 = f__32423__auto__.call(null);
(statearr_48629[(6)] = c__32422__auto___48631);

return statearr_48629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48631,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48663 = arguments.length;
switch (G__48663) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48666 = arguments.length;
switch (G__48666) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48669 = arguments.length;
switch (G__48669) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32422__auto___48736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48736,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48736,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48708){
var state_val_48709 = (state_48708[(1)]);
if((state_val_48709 === (7))){
var state_48708__$1 = state_48708;
var statearr_48710_48737 = state_48708__$1;
(statearr_48710_48737[(2)] = null);

(statearr_48710_48737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (1))){
var state_48708__$1 = state_48708;
var statearr_48711_48738 = state_48708__$1;
(statearr_48711_48738[(2)] = null);

(statearr_48711_48738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (4))){
var inst_48672 = (state_48708[(7)]);
var inst_48674 = (inst_48672 < cnt);
var state_48708__$1 = state_48708;
if(cljs.core.truth_(inst_48674)){
var statearr_48712_48739 = state_48708__$1;
(statearr_48712_48739[(1)] = (6));

} else {
var statearr_48713_48740 = state_48708__$1;
(statearr_48713_48740[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (15))){
var inst_48704 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
var statearr_48714_48741 = state_48708__$1;
(statearr_48714_48741[(2)] = inst_48704);

(statearr_48714_48741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (13))){
var inst_48697 = cljs.core.async.close_BANG_.call(null,out);
var state_48708__$1 = state_48708;
var statearr_48715_48742 = state_48708__$1;
(statearr_48715_48742[(2)] = inst_48697);

(statearr_48715_48742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (6))){
var state_48708__$1 = state_48708;
var statearr_48716_48743 = state_48708__$1;
(statearr_48716_48743[(2)] = null);

(statearr_48716_48743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (3))){
var inst_48706 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48708__$1,inst_48706);
} else {
if((state_val_48709 === (12))){
var inst_48694 = (state_48708[(8)]);
var inst_48694__$1 = (state_48708[(2)]);
var inst_48695 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48694__$1);
var state_48708__$1 = (function (){var statearr_48717 = state_48708;
(statearr_48717[(8)] = inst_48694__$1);

return statearr_48717;
})();
if(cljs.core.truth_(inst_48695)){
var statearr_48718_48744 = state_48708__$1;
(statearr_48718_48744[(1)] = (13));

} else {
var statearr_48719_48745 = state_48708__$1;
(statearr_48719_48745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (2))){
var inst_48671 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48672 = (0);
var state_48708__$1 = (function (){var statearr_48720 = state_48708;
(statearr_48720[(7)] = inst_48672);

(statearr_48720[(9)] = inst_48671);

return statearr_48720;
})();
var statearr_48721_48746 = state_48708__$1;
(statearr_48721_48746[(2)] = null);

(statearr_48721_48746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (11))){
var inst_48672 = (state_48708[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48708,(10),Object,null,(9));
var inst_48681 = chs__$1.call(null,inst_48672);
var inst_48682 = done.call(null,inst_48672);
var inst_48683 = cljs.core.async.take_BANG_.call(null,inst_48681,inst_48682);
var state_48708__$1 = state_48708;
var statearr_48722_48747 = state_48708__$1;
(statearr_48722_48747[(2)] = inst_48683);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48708__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (9))){
var inst_48672 = (state_48708[(7)]);
var inst_48685 = (state_48708[(2)]);
var inst_48686 = (inst_48672 + (1));
var inst_48672__$1 = inst_48686;
var state_48708__$1 = (function (){var statearr_48723 = state_48708;
(statearr_48723[(7)] = inst_48672__$1);

(statearr_48723[(10)] = inst_48685);

return statearr_48723;
})();
var statearr_48724_48748 = state_48708__$1;
(statearr_48724_48748[(2)] = null);

(statearr_48724_48748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (5))){
var inst_48692 = (state_48708[(2)]);
var state_48708__$1 = (function (){var statearr_48725 = state_48708;
(statearr_48725[(11)] = inst_48692);

return statearr_48725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48708__$1,(12),dchan);
} else {
if((state_val_48709 === (14))){
var inst_48694 = (state_48708[(8)]);
var inst_48699 = cljs.core.apply.call(null,f,inst_48694);
var state_48708__$1 = state_48708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48708__$1,(16),out,inst_48699);
} else {
if((state_val_48709 === (16))){
var inst_48701 = (state_48708[(2)]);
var state_48708__$1 = (function (){var statearr_48726 = state_48708;
(statearr_48726[(12)] = inst_48701);

return statearr_48726;
})();
var statearr_48727_48749 = state_48708__$1;
(statearr_48727_48749[(2)] = null);

(statearr_48727_48749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (10))){
var inst_48676 = (state_48708[(2)]);
var inst_48677 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48708__$1 = (function (){var statearr_48728 = state_48708;
(statearr_48728[(13)] = inst_48676);

return statearr_48728;
})();
var statearr_48729_48750 = state_48708__$1;
(statearr_48729_48750[(2)] = inst_48677);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48708__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48709 === (8))){
var inst_48690 = (state_48708[(2)]);
var state_48708__$1 = state_48708;
var statearr_48730_48751 = state_48708__$1;
(statearr_48730_48751[(2)] = inst_48690);

(statearr_48730_48751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48736,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32331__auto__,c__32422__auto___48736,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_48731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48731[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_48731[(1)] = (1));

return statearr_48731;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_48708){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48732){if((e48732 instanceof Object)){
var ex__32335__auto__ = e48732;
var statearr_48733_48752 = state_48708;
(statearr_48733_48752[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48753 = state_48708;
state_48708 = G__48753;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_48708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_48708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48736,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32424__auto__ = (function (){var statearr_48734 = f__32423__auto__.call(null);
(statearr_48734[(6)] = c__32422__auto___48736);

return statearr_48734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48736,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48756 = arguments.length;
switch (G__48756) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32422__auto___48810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48810,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48810,out){
return (function (state_48788){
var state_val_48789 = (state_48788[(1)]);
if((state_val_48789 === (7))){
var inst_48768 = (state_48788[(7)]);
var inst_48767 = (state_48788[(8)]);
var inst_48767__$1 = (state_48788[(2)]);
var inst_48768__$1 = cljs.core.nth.call(null,inst_48767__$1,(0),null);
var inst_48769 = cljs.core.nth.call(null,inst_48767__$1,(1),null);
var inst_48770 = (inst_48768__$1 == null);
var state_48788__$1 = (function (){var statearr_48790 = state_48788;
(statearr_48790[(7)] = inst_48768__$1);

(statearr_48790[(9)] = inst_48769);

(statearr_48790[(8)] = inst_48767__$1);

return statearr_48790;
})();
if(cljs.core.truth_(inst_48770)){
var statearr_48791_48811 = state_48788__$1;
(statearr_48791_48811[(1)] = (8));

} else {
var statearr_48792_48812 = state_48788__$1;
(statearr_48792_48812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (1))){
var inst_48757 = cljs.core.vec.call(null,chs);
var inst_48758 = inst_48757;
var state_48788__$1 = (function (){var statearr_48793 = state_48788;
(statearr_48793[(10)] = inst_48758);

return statearr_48793;
})();
var statearr_48794_48813 = state_48788__$1;
(statearr_48794_48813[(2)] = null);

(statearr_48794_48813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (4))){
var inst_48758 = (state_48788[(10)]);
var state_48788__$1 = state_48788;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48788__$1,(7),inst_48758);
} else {
if((state_val_48789 === (6))){
var inst_48784 = (state_48788[(2)]);
var state_48788__$1 = state_48788;
var statearr_48795_48814 = state_48788__$1;
(statearr_48795_48814[(2)] = inst_48784);

(statearr_48795_48814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (3))){
var inst_48786 = (state_48788[(2)]);
var state_48788__$1 = state_48788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48788__$1,inst_48786);
} else {
if((state_val_48789 === (2))){
var inst_48758 = (state_48788[(10)]);
var inst_48760 = cljs.core.count.call(null,inst_48758);
var inst_48761 = (inst_48760 > (0));
var state_48788__$1 = state_48788;
if(cljs.core.truth_(inst_48761)){
var statearr_48797_48815 = state_48788__$1;
(statearr_48797_48815[(1)] = (4));

} else {
var statearr_48798_48816 = state_48788__$1;
(statearr_48798_48816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (11))){
var inst_48758 = (state_48788[(10)]);
var inst_48777 = (state_48788[(2)]);
var tmp48796 = inst_48758;
var inst_48758__$1 = tmp48796;
var state_48788__$1 = (function (){var statearr_48799 = state_48788;
(statearr_48799[(10)] = inst_48758__$1);

(statearr_48799[(11)] = inst_48777);

return statearr_48799;
})();
var statearr_48800_48817 = state_48788__$1;
(statearr_48800_48817[(2)] = null);

(statearr_48800_48817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (9))){
var inst_48768 = (state_48788[(7)]);
var state_48788__$1 = state_48788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48788__$1,(11),out,inst_48768);
} else {
if((state_val_48789 === (5))){
var inst_48782 = cljs.core.async.close_BANG_.call(null,out);
var state_48788__$1 = state_48788;
var statearr_48801_48818 = state_48788__$1;
(statearr_48801_48818[(2)] = inst_48782);

(statearr_48801_48818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (10))){
var inst_48780 = (state_48788[(2)]);
var state_48788__$1 = state_48788;
var statearr_48802_48819 = state_48788__$1;
(statearr_48802_48819[(2)] = inst_48780);

(statearr_48802_48819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48789 === (8))){
var inst_48758 = (state_48788[(10)]);
var inst_48768 = (state_48788[(7)]);
var inst_48769 = (state_48788[(9)]);
var inst_48767 = (state_48788[(8)]);
var inst_48772 = (function (){var cs = inst_48758;
var vec__48763 = inst_48767;
var v = inst_48768;
var c = inst_48769;
return ((function (cs,vec__48763,v,c,inst_48758,inst_48768,inst_48769,inst_48767,state_val_48789,c__32422__auto___48810,out){
return (function (p1__48754_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48754_SHARP_);
});
;})(cs,vec__48763,v,c,inst_48758,inst_48768,inst_48769,inst_48767,state_val_48789,c__32422__auto___48810,out))
})();
var inst_48773 = cljs.core.filterv.call(null,inst_48772,inst_48758);
var inst_48758__$1 = inst_48773;
var state_48788__$1 = (function (){var statearr_48803 = state_48788;
(statearr_48803[(10)] = inst_48758__$1);

return statearr_48803;
})();
var statearr_48804_48820 = state_48788__$1;
(statearr_48804_48820[(2)] = null);

(statearr_48804_48820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48810,out))
;
return ((function (switch__32331__auto__,c__32422__auto___48810,out){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_48805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48805[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_48805[(1)] = (1));

return statearr_48805;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_48788){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48806){if((e48806 instanceof Object)){
var ex__32335__auto__ = e48806;
var statearr_48807_48821 = state_48788;
(statearr_48807_48821[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48822 = state_48788;
state_48788 = G__48822;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_48788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_48788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48810,out))
})();
var state__32424__auto__ = (function (){var statearr_48808 = f__32423__auto__.call(null);
(statearr_48808[(6)] = c__32422__auto___48810);

return statearr_48808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48810,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48824 = arguments.length;
switch (G__48824) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32422__auto___48869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48869,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48869,out){
return (function (state_48848){
var state_val_48849 = (state_48848[(1)]);
if((state_val_48849 === (7))){
var inst_48830 = (state_48848[(7)]);
var inst_48830__$1 = (state_48848[(2)]);
var inst_48831 = (inst_48830__$1 == null);
var inst_48832 = cljs.core.not.call(null,inst_48831);
var state_48848__$1 = (function (){var statearr_48850 = state_48848;
(statearr_48850[(7)] = inst_48830__$1);

return statearr_48850;
})();
if(inst_48832){
var statearr_48851_48870 = state_48848__$1;
(statearr_48851_48870[(1)] = (8));

} else {
var statearr_48852_48871 = state_48848__$1;
(statearr_48852_48871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (1))){
var inst_48825 = (0);
var state_48848__$1 = (function (){var statearr_48853 = state_48848;
(statearr_48853[(8)] = inst_48825);

return statearr_48853;
})();
var statearr_48854_48872 = state_48848__$1;
(statearr_48854_48872[(2)] = null);

(statearr_48854_48872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (4))){
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48848__$1,(7),ch);
} else {
if((state_val_48849 === (6))){
var inst_48843 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48855_48873 = state_48848__$1;
(statearr_48855_48873[(2)] = inst_48843);

(statearr_48855_48873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (3))){
var inst_48845 = (state_48848[(2)]);
var inst_48846 = cljs.core.async.close_BANG_.call(null,out);
var state_48848__$1 = (function (){var statearr_48856 = state_48848;
(statearr_48856[(9)] = inst_48845);

return statearr_48856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48848__$1,inst_48846);
} else {
if((state_val_48849 === (2))){
var inst_48825 = (state_48848[(8)]);
var inst_48827 = (inst_48825 < n);
var state_48848__$1 = state_48848;
if(cljs.core.truth_(inst_48827)){
var statearr_48857_48874 = state_48848__$1;
(statearr_48857_48874[(1)] = (4));

} else {
var statearr_48858_48875 = state_48848__$1;
(statearr_48858_48875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (11))){
var inst_48825 = (state_48848[(8)]);
var inst_48835 = (state_48848[(2)]);
var inst_48836 = (inst_48825 + (1));
var inst_48825__$1 = inst_48836;
var state_48848__$1 = (function (){var statearr_48859 = state_48848;
(statearr_48859[(8)] = inst_48825__$1);

(statearr_48859[(10)] = inst_48835);

return statearr_48859;
})();
var statearr_48860_48876 = state_48848__$1;
(statearr_48860_48876[(2)] = null);

(statearr_48860_48876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (9))){
var state_48848__$1 = state_48848;
var statearr_48861_48877 = state_48848__$1;
(statearr_48861_48877[(2)] = null);

(statearr_48861_48877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (5))){
var state_48848__$1 = state_48848;
var statearr_48862_48878 = state_48848__$1;
(statearr_48862_48878[(2)] = null);

(statearr_48862_48878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (10))){
var inst_48840 = (state_48848[(2)]);
var state_48848__$1 = state_48848;
var statearr_48863_48879 = state_48848__$1;
(statearr_48863_48879[(2)] = inst_48840);

(statearr_48863_48879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48849 === (8))){
var inst_48830 = (state_48848[(7)]);
var state_48848__$1 = state_48848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48848__$1,(11),out,inst_48830);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48869,out))
;
return ((function (switch__32331__auto__,c__32422__auto___48869,out){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_48864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48864[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_48864[(1)] = (1));

return statearr_48864;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_48848){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48865){if((e48865 instanceof Object)){
var ex__32335__auto__ = e48865;
var statearr_48866_48880 = state_48848;
(statearr_48866_48880[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48881 = state_48848;
state_48848 = G__48881;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_48848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_48848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48869,out))
})();
var state__32424__auto__ = (function (){var statearr_48867 = f__32423__auto__.call(null);
(statearr_48867[(6)] = c__32422__auto___48869);

return statearr_48867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48869,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48883 = (function (f,ch,meta48884){
this.f = f;
this.ch = ch;
this.meta48884 = meta48884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48885,meta48884__$1){
var self__ = this;
var _48885__$1 = this;
return (new cljs.core.async.t_cljs$core$async48883(self__.f,self__.ch,meta48884__$1));
});

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48885){
var self__ = this;
var _48885__$1 = this;
return self__.meta48884;
});

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48886 = (function (f,ch,meta48884,_,fn1,meta48887){
this.f = f;
this.ch = ch;
this.meta48884 = meta48884;
this._ = _;
this.fn1 = fn1;
this.meta48887 = meta48887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48888,meta48887__$1){
var self__ = this;
var _48888__$1 = this;
return (new cljs.core.async.t_cljs$core$async48886(self__.f,self__.ch,self__.meta48884,self__._,self__.fn1,meta48887__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48888){
var self__ = this;
var _48888__$1 = this;
return self__.meta48887;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48882_SHARP_){
return f1.call(null,(((p1__48882_SHARP_ == null))?null:self__.f.call(null,p1__48882_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48886.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48884","meta48884",-261795988,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48883","cljs.core.async/t_cljs$core$async48883",-1326721362,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48887","meta48887",945857089,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48886";

cljs.core.async.t_cljs$core$async48886.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async48886");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48886.
 */
cljs.core.async.__GT_t_cljs$core$async48886 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48886(f__$1,ch__$1,meta48884__$1,___$2,fn1__$1,meta48887){
return (new cljs.core.async.t_cljs$core$async48886(f__$1,ch__$1,meta48884__$1,___$2,fn1__$1,meta48887));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48886(self__.f,self__.ch,self__.meta48884,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48884","meta48884",-261795988,null)], null);
});

cljs.core.async.t_cljs$core$async48883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48883";

cljs.core.async.t_cljs$core$async48883.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async48883");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48883.
 */
cljs.core.async.__GT_t_cljs$core$async48883 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48883(f__$1,ch__$1,meta48884){
return (new cljs.core.async.t_cljs$core$async48883(f__$1,ch__$1,meta48884));
});

}

return (new cljs.core.async.t_cljs$core$async48883(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48889 = (function (f,ch,meta48890){
this.f = f;
this.ch = ch;
this.meta48890 = meta48890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48891,meta48890__$1){
var self__ = this;
var _48891__$1 = this;
return (new cljs.core.async.t_cljs$core$async48889(self__.f,self__.ch,meta48890__$1));
});

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48891){
var self__ = this;
var _48891__$1 = this;
return self__.meta48890;
});

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48890","meta48890",1973985762,null)], null);
});

cljs.core.async.t_cljs$core$async48889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48889";

cljs.core.async.t_cljs$core$async48889.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async48889");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48889.
 */
cljs.core.async.__GT_t_cljs$core$async48889 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48889(f__$1,ch__$1,meta48890){
return (new cljs.core.async.t_cljs$core$async48889(f__$1,ch__$1,meta48890));
});

}

return (new cljs.core.async.t_cljs$core$async48889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48892 = (function (p,ch,meta48893){
this.p = p;
this.ch = ch;
this.meta48893 = meta48893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48894,meta48893__$1){
var self__ = this;
var _48894__$1 = this;
return (new cljs.core.async.t_cljs$core$async48892(self__.p,self__.ch,meta48893__$1));
});

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48894){
var self__ = this;
var _48894__$1 = this;
return self__.meta48893;
});

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48893","meta48893",1192389967,null)], null);
});

cljs.core.async.t_cljs$core$async48892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48892";

cljs.core.async.t_cljs$core$async48892.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async48892");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48892.
 */
cljs.core.async.__GT_t_cljs$core$async48892 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48892(p__$1,ch__$1,meta48893){
return (new cljs.core.async.t_cljs$core$async48892(p__$1,ch__$1,meta48893));
});

}

return (new cljs.core.async.t_cljs$core$async48892(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48896 = arguments.length;
switch (G__48896) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32422__auto___48936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___48936,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___48936,out){
return (function (state_48917){
var state_val_48918 = (state_48917[(1)]);
if((state_val_48918 === (7))){
var inst_48913 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48919_48937 = state_48917__$1;
(statearr_48919_48937[(2)] = inst_48913);

(statearr_48919_48937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (1))){
var state_48917__$1 = state_48917;
var statearr_48920_48938 = state_48917__$1;
(statearr_48920_48938[(2)] = null);

(statearr_48920_48938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (4))){
var inst_48899 = (state_48917[(7)]);
var inst_48899__$1 = (state_48917[(2)]);
var inst_48900 = (inst_48899__$1 == null);
var state_48917__$1 = (function (){var statearr_48921 = state_48917;
(statearr_48921[(7)] = inst_48899__$1);

return statearr_48921;
})();
if(cljs.core.truth_(inst_48900)){
var statearr_48922_48939 = state_48917__$1;
(statearr_48922_48939[(1)] = (5));

} else {
var statearr_48923_48940 = state_48917__$1;
(statearr_48923_48940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (6))){
var inst_48899 = (state_48917[(7)]);
var inst_48904 = p.call(null,inst_48899);
var state_48917__$1 = state_48917;
if(cljs.core.truth_(inst_48904)){
var statearr_48924_48941 = state_48917__$1;
(statearr_48924_48941[(1)] = (8));

} else {
var statearr_48925_48942 = state_48917__$1;
(statearr_48925_48942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (3))){
var inst_48915 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48917__$1,inst_48915);
} else {
if((state_val_48918 === (2))){
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48917__$1,(4),ch);
} else {
if((state_val_48918 === (11))){
var inst_48907 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48926_48943 = state_48917__$1;
(statearr_48926_48943[(2)] = inst_48907);

(statearr_48926_48943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (9))){
var state_48917__$1 = state_48917;
var statearr_48927_48944 = state_48917__$1;
(statearr_48927_48944[(2)] = null);

(statearr_48927_48944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (5))){
var inst_48902 = cljs.core.async.close_BANG_.call(null,out);
var state_48917__$1 = state_48917;
var statearr_48928_48945 = state_48917__$1;
(statearr_48928_48945[(2)] = inst_48902);

(statearr_48928_48945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (10))){
var inst_48910 = (state_48917[(2)]);
var state_48917__$1 = (function (){var statearr_48929 = state_48917;
(statearr_48929[(8)] = inst_48910);

return statearr_48929;
})();
var statearr_48930_48946 = state_48917__$1;
(statearr_48930_48946[(2)] = null);

(statearr_48930_48946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (8))){
var inst_48899 = (state_48917[(7)]);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48917__$1,(11),out,inst_48899);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___48936,out))
;
return ((function (switch__32331__auto__,c__32422__auto___48936,out){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_48931 = [null,null,null,null,null,null,null,null,null];
(statearr_48931[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_48931[(1)] = (1));

return statearr_48931;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_48917){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_48917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e48932){if((e48932 instanceof Object)){
var ex__32335__auto__ = e48932;
var statearr_48933_48947 = state_48917;
(statearr_48933_48947[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48948 = state_48917;
state_48917 = G__48948;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_48917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_48917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___48936,out))
})();
var state__32424__auto__ = (function (){var statearr_48934 = f__32423__auto__.call(null);
(statearr_48934[(6)] = c__32422__auto___48936);

return statearr_48934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___48936,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48950 = arguments.length;
switch (G__48950) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__){
return (function (state_49013){
var state_val_49014 = (state_49013[(1)]);
if((state_val_49014 === (7))){
var inst_49009 = (state_49013[(2)]);
var state_49013__$1 = state_49013;
var statearr_49015_49053 = state_49013__$1;
(statearr_49015_49053[(2)] = inst_49009);

(statearr_49015_49053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (20))){
var inst_48979 = (state_49013[(7)]);
var inst_48990 = (state_49013[(2)]);
var inst_48991 = cljs.core.next.call(null,inst_48979);
var inst_48965 = inst_48991;
var inst_48966 = null;
var inst_48967 = (0);
var inst_48968 = (0);
var state_49013__$1 = (function (){var statearr_49016 = state_49013;
(statearr_49016[(8)] = inst_48966);

(statearr_49016[(9)] = inst_48990);

(statearr_49016[(10)] = inst_48965);

(statearr_49016[(11)] = inst_48967);

(statearr_49016[(12)] = inst_48968);

return statearr_49016;
})();
var statearr_49017_49054 = state_49013__$1;
(statearr_49017_49054[(2)] = null);

(statearr_49017_49054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (1))){
var state_49013__$1 = state_49013;
var statearr_49018_49055 = state_49013__$1;
(statearr_49018_49055[(2)] = null);

(statearr_49018_49055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (4))){
var inst_48954 = (state_49013[(13)]);
var inst_48954__$1 = (state_49013[(2)]);
var inst_48955 = (inst_48954__$1 == null);
var state_49013__$1 = (function (){var statearr_49019 = state_49013;
(statearr_49019[(13)] = inst_48954__$1);

return statearr_49019;
})();
if(cljs.core.truth_(inst_48955)){
var statearr_49020_49056 = state_49013__$1;
(statearr_49020_49056[(1)] = (5));

} else {
var statearr_49021_49057 = state_49013__$1;
(statearr_49021_49057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (15))){
var state_49013__$1 = state_49013;
var statearr_49025_49058 = state_49013__$1;
(statearr_49025_49058[(2)] = null);

(statearr_49025_49058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (21))){
var state_49013__$1 = state_49013;
var statearr_49026_49059 = state_49013__$1;
(statearr_49026_49059[(2)] = null);

(statearr_49026_49059[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (13))){
var inst_48966 = (state_49013[(8)]);
var inst_48965 = (state_49013[(10)]);
var inst_48967 = (state_49013[(11)]);
var inst_48968 = (state_49013[(12)]);
var inst_48975 = (state_49013[(2)]);
var inst_48976 = (inst_48968 + (1));
var tmp49022 = inst_48966;
var tmp49023 = inst_48965;
var tmp49024 = inst_48967;
var inst_48965__$1 = tmp49023;
var inst_48966__$1 = tmp49022;
var inst_48967__$1 = tmp49024;
var inst_48968__$1 = inst_48976;
var state_49013__$1 = (function (){var statearr_49027 = state_49013;
(statearr_49027[(14)] = inst_48975);

(statearr_49027[(8)] = inst_48966__$1);

(statearr_49027[(10)] = inst_48965__$1);

(statearr_49027[(11)] = inst_48967__$1);

(statearr_49027[(12)] = inst_48968__$1);

return statearr_49027;
})();
var statearr_49028_49060 = state_49013__$1;
(statearr_49028_49060[(2)] = null);

(statearr_49028_49060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (22))){
var state_49013__$1 = state_49013;
var statearr_49029_49061 = state_49013__$1;
(statearr_49029_49061[(2)] = null);

(statearr_49029_49061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (6))){
var inst_48954 = (state_49013[(13)]);
var inst_48963 = f.call(null,inst_48954);
var inst_48964 = cljs.core.seq.call(null,inst_48963);
var inst_48965 = inst_48964;
var inst_48966 = null;
var inst_48967 = (0);
var inst_48968 = (0);
var state_49013__$1 = (function (){var statearr_49030 = state_49013;
(statearr_49030[(8)] = inst_48966);

(statearr_49030[(10)] = inst_48965);

(statearr_49030[(11)] = inst_48967);

(statearr_49030[(12)] = inst_48968);

return statearr_49030;
})();
var statearr_49031_49062 = state_49013__$1;
(statearr_49031_49062[(2)] = null);

(statearr_49031_49062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (17))){
var inst_48979 = (state_49013[(7)]);
var inst_48983 = cljs.core.chunk_first.call(null,inst_48979);
var inst_48984 = cljs.core.chunk_rest.call(null,inst_48979);
var inst_48985 = cljs.core.count.call(null,inst_48983);
var inst_48965 = inst_48984;
var inst_48966 = inst_48983;
var inst_48967 = inst_48985;
var inst_48968 = (0);
var state_49013__$1 = (function (){var statearr_49032 = state_49013;
(statearr_49032[(8)] = inst_48966);

(statearr_49032[(10)] = inst_48965);

(statearr_49032[(11)] = inst_48967);

(statearr_49032[(12)] = inst_48968);

return statearr_49032;
})();
var statearr_49033_49063 = state_49013__$1;
(statearr_49033_49063[(2)] = null);

(statearr_49033_49063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (3))){
var inst_49011 = (state_49013[(2)]);
var state_49013__$1 = state_49013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49013__$1,inst_49011);
} else {
if((state_val_49014 === (12))){
var inst_48999 = (state_49013[(2)]);
var state_49013__$1 = state_49013;
var statearr_49034_49064 = state_49013__$1;
(statearr_49034_49064[(2)] = inst_48999);

(statearr_49034_49064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (2))){
var state_49013__$1 = state_49013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49013__$1,(4),in$);
} else {
if((state_val_49014 === (23))){
var inst_49007 = (state_49013[(2)]);
var state_49013__$1 = state_49013;
var statearr_49035_49065 = state_49013__$1;
(statearr_49035_49065[(2)] = inst_49007);

(statearr_49035_49065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (19))){
var inst_48994 = (state_49013[(2)]);
var state_49013__$1 = state_49013;
var statearr_49036_49066 = state_49013__$1;
(statearr_49036_49066[(2)] = inst_48994);

(statearr_49036_49066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (11))){
var inst_48979 = (state_49013[(7)]);
var inst_48965 = (state_49013[(10)]);
var inst_48979__$1 = cljs.core.seq.call(null,inst_48965);
var state_49013__$1 = (function (){var statearr_49037 = state_49013;
(statearr_49037[(7)] = inst_48979__$1);

return statearr_49037;
})();
if(inst_48979__$1){
var statearr_49038_49067 = state_49013__$1;
(statearr_49038_49067[(1)] = (14));

} else {
var statearr_49039_49068 = state_49013__$1;
(statearr_49039_49068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (9))){
var inst_49001 = (state_49013[(2)]);
var inst_49002 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49013__$1 = (function (){var statearr_49040 = state_49013;
(statearr_49040[(15)] = inst_49001);

return statearr_49040;
})();
if(cljs.core.truth_(inst_49002)){
var statearr_49041_49069 = state_49013__$1;
(statearr_49041_49069[(1)] = (21));

} else {
var statearr_49042_49070 = state_49013__$1;
(statearr_49042_49070[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (5))){
var inst_48957 = cljs.core.async.close_BANG_.call(null,out);
var state_49013__$1 = state_49013;
var statearr_49043_49071 = state_49013__$1;
(statearr_49043_49071[(2)] = inst_48957);

(statearr_49043_49071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (14))){
var inst_48979 = (state_49013[(7)]);
var inst_48981 = cljs.core.chunked_seq_QMARK_.call(null,inst_48979);
var state_49013__$1 = state_49013;
if(inst_48981){
var statearr_49044_49072 = state_49013__$1;
(statearr_49044_49072[(1)] = (17));

} else {
var statearr_49045_49073 = state_49013__$1;
(statearr_49045_49073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (16))){
var inst_48997 = (state_49013[(2)]);
var state_49013__$1 = state_49013;
var statearr_49046_49074 = state_49013__$1;
(statearr_49046_49074[(2)] = inst_48997);

(statearr_49046_49074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49014 === (10))){
var inst_48966 = (state_49013[(8)]);
var inst_48968 = (state_49013[(12)]);
var inst_48973 = cljs.core._nth.call(null,inst_48966,inst_48968);
var state_49013__$1 = state_49013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49013__$1,(13),out,inst_48973);
} else {
if((state_val_49014 === (18))){
var inst_48979 = (state_49013[(7)]);
var inst_48988 = cljs.core.first.call(null,inst_48979);
var state_49013__$1 = state_49013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49013__$1,(20),out,inst_48988);
} else {
if((state_val_49014 === (8))){
var inst_48967 = (state_49013[(11)]);
var inst_48968 = (state_49013[(12)]);
var inst_48970 = (inst_48968 < inst_48967);
var inst_48971 = inst_48970;
var state_49013__$1 = state_49013;
if(cljs.core.truth_(inst_48971)){
var statearr_49047_49075 = state_49013__$1;
(statearr_49047_49075[(1)] = (10));

} else {
var statearr_49048_49076 = state_49013__$1;
(statearr_49048_49076[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto__))
;
return ((function (switch__32331__auto__,c__32422__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32332__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32332__auto____0 = (function (){
var statearr_49049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49049[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32332__auto__);

(statearr_49049[(1)] = (1));

return statearr_49049;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32332__auto____1 = (function (state_49013){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e49050){if((e49050 instanceof Object)){
var ex__32335__auto__ = e49050;
var statearr_49051_49077 = state_49013;
(statearr_49051_49077[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49078 = state_49013;
state_49013 = G__49078;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32332__auto__ = function(state_49013){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32332__auto____1.call(this,state_49013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32332__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32332__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__))
})();
var state__32424__auto__ = (function (){var statearr_49052 = f__32423__auto__.call(null);
(statearr_49052[(6)] = c__32422__auto__);

return statearr_49052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__))
);

return c__32422__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49080 = arguments.length;
switch (G__49080) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49083 = arguments.length;
switch (G__49083) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49086 = arguments.length;
switch (G__49086) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32422__auto___49133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___49133,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___49133,out){
return (function (state_49110){
var state_val_49111 = (state_49110[(1)]);
if((state_val_49111 === (7))){
var inst_49105 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49112_49134 = state_49110__$1;
(statearr_49112_49134[(2)] = inst_49105);

(statearr_49112_49134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (1))){
var inst_49087 = null;
var state_49110__$1 = (function (){var statearr_49113 = state_49110;
(statearr_49113[(7)] = inst_49087);

return statearr_49113;
})();
var statearr_49114_49135 = state_49110__$1;
(statearr_49114_49135[(2)] = null);

(statearr_49114_49135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (4))){
var inst_49090 = (state_49110[(8)]);
var inst_49090__$1 = (state_49110[(2)]);
var inst_49091 = (inst_49090__$1 == null);
var inst_49092 = cljs.core.not.call(null,inst_49091);
var state_49110__$1 = (function (){var statearr_49115 = state_49110;
(statearr_49115[(8)] = inst_49090__$1);

return statearr_49115;
})();
if(inst_49092){
var statearr_49116_49136 = state_49110__$1;
(statearr_49116_49136[(1)] = (5));

} else {
var statearr_49117_49137 = state_49110__$1;
(statearr_49117_49137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (6))){
var state_49110__$1 = state_49110;
var statearr_49118_49138 = state_49110__$1;
(statearr_49118_49138[(2)] = null);

(statearr_49118_49138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (3))){
var inst_49107 = (state_49110[(2)]);
var inst_49108 = cljs.core.async.close_BANG_.call(null,out);
var state_49110__$1 = (function (){var statearr_49119 = state_49110;
(statearr_49119[(9)] = inst_49107);

return statearr_49119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49110__$1,inst_49108);
} else {
if((state_val_49111 === (2))){
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49110__$1,(4),ch);
} else {
if((state_val_49111 === (11))){
var inst_49090 = (state_49110[(8)]);
var inst_49099 = (state_49110[(2)]);
var inst_49087 = inst_49090;
var state_49110__$1 = (function (){var statearr_49120 = state_49110;
(statearr_49120[(10)] = inst_49099);

(statearr_49120[(7)] = inst_49087);

return statearr_49120;
})();
var statearr_49121_49139 = state_49110__$1;
(statearr_49121_49139[(2)] = null);

(statearr_49121_49139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (9))){
var inst_49090 = (state_49110[(8)]);
var state_49110__$1 = state_49110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49110__$1,(11),out,inst_49090);
} else {
if((state_val_49111 === (5))){
var inst_49090 = (state_49110[(8)]);
var inst_49087 = (state_49110[(7)]);
var inst_49094 = cljs.core._EQ_.call(null,inst_49090,inst_49087);
var state_49110__$1 = state_49110;
if(inst_49094){
var statearr_49123_49140 = state_49110__$1;
(statearr_49123_49140[(1)] = (8));

} else {
var statearr_49124_49141 = state_49110__$1;
(statearr_49124_49141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (10))){
var inst_49102 = (state_49110[(2)]);
var state_49110__$1 = state_49110;
var statearr_49125_49142 = state_49110__$1;
(statearr_49125_49142[(2)] = inst_49102);

(statearr_49125_49142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49111 === (8))){
var inst_49087 = (state_49110[(7)]);
var tmp49122 = inst_49087;
var inst_49087__$1 = tmp49122;
var state_49110__$1 = (function (){var statearr_49126 = state_49110;
(statearr_49126[(7)] = inst_49087__$1);

return statearr_49126;
})();
var statearr_49127_49143 = state_49110__$1;
(statearr_49127_49143[(2)] = null);

(statearr_49127_49143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___49133,out))
;
return ((function (switch__32331__auto__,c__32422__auto___49133,out){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_49128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49128[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_49128[(1)] = (1));

return statearr_49128;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_49110){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e49129){if((e49129 instanceof Object)){
var ex__32335__auto__ = e49129;
var statearr_49130_49144 = state_49110;
(statearr_49130_49144[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49145 = state_49110;
state_49110 = G__49145;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_49110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_49110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___49133,out))
})();
var state__32424__auto__ = (function (){var statearr_49131 = f__32423__auto__.call(null);
(statearr_49131[(6)] = c__32422__auto___49133);

return statearr_49131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___49133,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49147 = arguments.length;
switch (G__49147) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32422__auto___49213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___49213,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___49213,out){
return (function (state_49185){
var state_val_49186 = (state_49185[(1)]);
if((state_val_49186 === (7))){
var inst_49181 = (state_49185[(2)]);
var state_49185__$1 = state_49185;
var statearr_49187_49214 = state_49185__$1;
(statearr_49187_49214[(2)] = inst_49181);

(statearr_49187_49214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (1))){
var inst_49148 = (new Array(n));
var inst_49149 = inst_49148;
var inst_49150 = (0);
var state_49185__$1 = (function (){var statearr_49188 = state_49185;
(statearr_49188[(7)] = inst_49150);

(statearr_49188[(8)] = inst_49149);

return statearr_49188;
})();
var statearr_49189_49215 = state_49185__$1;
(statearr_49189_49215[(2)] = null);

(statearr_49189_49215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (4))){
var inst_49153 = (state_49185[(9)]);
var inst_49153__$1 = (state_49185[(2)]);
var inst_49154 = (inst_49153__$1 == null);
var inst_49155 = cljs.core.not.call(null,inst_49154);
var state_49185__$1 = (function (){var statearr_49190 = state_49185;
(statearr_49190[(9)] = inst_49153__$1);

return statearr_49190;
})();
if(inst_49155){
var statearr_49191_49216 = state_49185__$1;
(statearr_49191_49216[(1)] = (5));

} else {
var statearr_49192_49217 = state_49185__$1;
(statearr_49192_49217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (15))){
var inst_49175 = (state_49185[(2)]);
var state_49185__$1 = state_49185;
var statearr_49193_49218 = state_49185__$1;
(statearr_49193_49218[(2)] = inst_49175);

(statearr_49193_49218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (13))){
var state_49185__$1 = state_49185;
var statearr_49194_49219 = state_49185__$1;
(statearr_49194_49219[(2)] = null);

(statearr_49194_49219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (6))){
var inst_49150 = (state_49185[(7)]);
var inst_49171 = (inst_49150 > (0));
var state_49185__$1 = state_49185;
if(cljs.core.truth_(inst_49171)){
var statearr_49195_49220 = state_49185__$1;
(statearr_49195_49220[(1)] = (12));

} else {
var statearr_49196_49221 = state_49185__$1;
(statearr_49196_49221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (3))){
var inst_49183 = (state_49185[(2)]);
var state_49185__$1 = state_49185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49185__$1,inst_49183);
} else {
if((state_val_49186 === (12))){
var inst_49149 = (state_49185[(8)]);
var inst_49173 = cljs.core.vec.call(null,inst_49149);
var state_49185__$1 = state_49185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49185__$1,(15),out,inst_49173);
} else {
if((state_val_49186 === (2))){
var state_49185__$1 = state_49185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49185__$1,(4),ch);
} else {
if((state_val_49186 === (11))){
var inst_49165 = (state_49185[(2)]);
var inst_49166 = (new Array(n));
var inst_49149 = inst_49166;
var inst_49150 = (0);
var state_49185__$1 = (function (){var statearr_49197 = state_49185;
(statearr_49197[(7)] = inst_49150);

(statearr_49197[(8)] = inst_49149);

(statearr_49197[(10)] = inst_49165);

return statearr_49197;
})();
var statearr_49198_49222 = state_49185__$1;
(statearr_49198_49222[(2)] = null);

(statearr_49198_49222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (9))){
var inst_49149 = (state_49185[(8)]);
var inst_49163 = cljs.core.vec.call(null,inst_49149);
var state_49185__$1 = state_49185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49185__$1,(11),out,inst_49163);
} else {
if((state_val_49186 === (5))){
var inst_49158 = (state_49185[(11)]);
var inst_49153 = (state_49185[(9)]);
var inst_49150 = (state_49185[(7)]);
var inst_49149 = (state_49185[(8)]);
var inst_49157 = (inst_49149[inst_49150] = inst_49153);
var inst_49158__$1 = (inst_49150 + (1));
var inst_49159 = (inst_49158__$1 < n);
var state_49185__$1 = (function (){var statearr_49199 = state_49185;
(statearr_49199[(11)] = inst_49158__$1);

(statearr_49199[(12)] = inst_49157);

return statearr_49199;
})();
if(cljs.core.truth_(inst_49159)){
var statearr_49200_49223 = state_49185__$1;
(statearr_49200_49223[(1)] = (8));

} else {
var statearr_49201_49224 = state_49185__$1;
(statearr_49201_49224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (14))){
var inst_49178 = (state_49185[(2)]);
var inst_49179 = cljs.core.async.close_BANG_.call(null,out);
var state_49185__$1 = (function (){var statearr_49203 = state_49185;
(statearr_49203[(13)] = inst_49178);

return statearr_49203;
})();
var statearr_49204_49225 = state_49185__$1;
(statearr_49204_49225[(2)] = inst_49179);

(statearr_49204_49225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (10))){
var inst_49169 = (state_49185[(2)]);
var state_49185__$1 = state_49185;
var statearr_49205_49226 = state_49185__$1;
(statearr_49205_49226[(2)] = inst_49169);

(statearr_49205_49226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49186 === (8))){
var inst_49158 = (state_49185[(11)]);
var inst_49149 = (state_49185[(8)]);
var tmp49202 = inst_49149;
var inst_49149__$1 = tmp49202;
var inst_49150 = inst_49158;
var state_49185__$1 = (function (){var statearr_49206 = state_49185;
(statearr_49206[(7)] = inst_49150);

(statearr_49206[(8)] = inst_49149__$1);

return statearr_49206;
})();
var statearr_49207_49227 = state_49185__$1;
(statearr_49207_49227[(2)] = null);

(statearr_49207_49227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___49213,out))
;
return ((function (switch__32331__auto__,c__32422__auto___49213,out){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_49208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49208[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_49208[(1)] = (1));

return statearr_49208;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_49185){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e49209){if((e49209 instanceof Object)){
var ex__32335__auto__ = e49209;
var statearr_49210_49228 = state_49185;
(statearr_49210_49228[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49229 = state_49185;
state_49185 = G__49229;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_49185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_49185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___49213,out))
})();
var state__32424__auto__ = (function (){var statearr_49211 = f__32423__auto__.call(null);
(statearr_49211[(6)] = c__32422__auto___49213);

return statearr_49211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___49213,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49231 = arguments.length;
switch (G__49231) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32422__auto___49301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___49301,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___49301,out){
return (function (state_49273){
var state_val_49274 = (state_49273[(1)]);
if((state_val_49274 === (7))){
var inst_49269 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
var statearr_49275_49302 = state_49273__$1;
(statearr_49275_49302[(2)] = inst_49269);

(statearr_49275_49302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (1))){
var inst_49232 = [];
var inst_49233 = inst_49232;
var inst_49234 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49273__$1 = (function (){var statearr_49276 = state_49273;
(statearr_49276[(7)] = inst_49233);

(statearr_49276[(8)] = inst_49234);

return statearr_49276;
})();
var statearr_49277_49303 = state_49273__$1;
(statearr_49277_49303[(2)] = null);

(statearr_49277_49303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (4))){
var inst_49237 = (state_49273[(9)]);
var inst_49237__$1 = (state_49273[(2)]);
var inst_49238 = (inst_49237__$1 == null);
var inst_49239 = cljs.core.not.call(null,inst_49238);
var state_49273__$1 = (function (){var statearr_49278 = state_49273;
(statearr_49278[(9)] = inst_49237__$1);

return statearr_49278;
})();
if(inst_49239){
var statearr_49279_49304 = state_49273__$1;
(statearr_49279_49304[(1)] = (5));

} else {
var statearr_49280_49305 = state_49273__$1;
(statearr_49280_49305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (15))){
var inst_49263 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
var statearr_49281_49306 = state_49273__$1;
(statearr_49281_49306[(2)] = inst_49263);

(statearr_49281_49306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (13))){
var state_49273__$1 = state_49273;
var statearr_49282_49307 = state_49273__$1;
(statearr_49282_49307[(2)] = null);

(statearr_49282_49307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (6))){
var inst_49233 = (state_49273[(7)]);
var inst_49258 = inst_49233.length;
var inst_49259 = (inst_49258 > (0));
var state_49273__$1 = state_49273;
if(cljs.core.truth_(inst_49259)){
var statearr_49283_49308 = state_49273__$1;
(statearr_49283_49308[(1)] = (12));

} else {
var statearr_49284_49309 = state_49273__$1;
(statearr_49284_49309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (3))){
var inst_49271 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49273__$1,inst_49271);
} else {
if((state_val_49274 === (12))){
var inst_49233 = (state_49273[(7)]);
var inst_49261 = cljs.core.vec.call(null,inst_49233);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49273__$1,(15),out,inst_49261);
} else {
if((state_val_49274 === (2))){
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49273__$1,(4),ch);
} else {
if((state_val_49274 === (11))){
var inst_49237 = (state_49273[(9)]);
var inst_49241 = (state_49273[(10)]);
var inst_49251 = (state_49273[(2)]);
var inst_49252 = [];
var inst_49253 = inst_49252.push(inst_49237);
var inst_49233 = inst_49252;
var inst_49234 = inst_49241;
var state_49273__$1 = (function (){var statearr_49285 = state_49273;
(statearr_49285[(7)] = inst_49233);

(statearr_49285[(8)] = inst_49234);

(statearr_49285[(11)] = inst_49253);

(statearr_49285[(12)] = inst_49251);

return statearr_49285;
})();
var statearr_49286_49310 = state_49273__$1;
(statearr_49286_49310[(2)] = null);

(statearr_49286_49310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (9))){
var inst_49233 = (state_49273[(7)]);
var inst_49249 = cljs.core.vec.call(null,inst_49233);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49273__$1,(11),out,inst_49249);
} else {
if((state_val_49274 === (5))){
var inst_49234 = (state_49273[(8)]);
var inst_49237 = (state_49273[(9)]);
var inst_49241 = (state_49273[(10)]);
var inst_49241__$1 = f.call(null,inst_49237);
var inst_49242 = cljs.core._EQ_.call(null,inst_49241__$1,inst_49234);
var inst_49243 = cljs.core.keyword_identical_QMARK_.call(null,inst_49234,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49244 = ((inst_49242) || (inst_49243));
var state_49273__$1 = (function (){var statearr_49287 = state_49273;
(statearr_49287[(10)] = inst_49241__$1);

return statearr_49287;
})();
if(cljs.core.truth_(inst_49244)){
var statearr_49288_49311 = state_49273__$1;
(statearr_49288_49311[(1)] = (8));

} else {
var statearr_49289_49312 = state_49273__$1;
(statearr_49289_49312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (14))){
var inst_49266 = (state_49273[(2)]);
var inst_49267 = cljs.core.async.close_BANG_.call(null,out);
var state_49273__$1 = (function (){var statearr_49291 = state_49273;
(statearr_49291[(13)] = inst_49266);

return statearr_49291;
})();
var statearr_49292_49313 = state_49273__$1;
(statearr_49292_49313[(2)] = inst_49267);

(statearr_49292_49313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (10))){
var inst_49256 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
var statearr_49293_49314 = state_49273__$1;
(statearr_49293_49314[(2)] = inst_49256);

(statearr_49293_49314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (8))){
var inst_49233 = (state_49273[(7)]);
var inst_49237 = (state_49273[(9)]);
var inst_49241 = (state_49273[(10)]);
var inst_49246 = inst_49233.push(inst_49237);
var tmp49290 = inst_49233;
var inst_49233__$1 = tmp49290;
var inst_49234 = inst_49241;
var state_49273__$1 = (function (){var statearr_49294 = state_49273;
(statearr_49294[(7)] = inst_49233__$1);

(statearr_49294[(8)] = inst_49234);

(statearr_49294[(14)] = inst_49246);

return statearr_49294;
})();
var statearr_49295_49315 = state_49273__$1;
(statearr_49295_49315[(2)] = null);

(statearr_49295_49315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32422__auto___49301,out))
;
return ((function (switch__32331__auto__,c__32422__auto___49301,out){
return (function() {
var cljs$core$async$state_machine__32332__auto__ = null;
var cljs$core$async$state_machine__32332__auto____0 = (function (){
var statearr_49296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49296[(0)] = cljs$core$async$state_machine__32332__auto__);

(statearr_49296[(1)] = (1));

return statearr_49296;
});
var cljs$core$async$state_machine__32332__auto____1 = (function (state_49273){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e49297){if((e49297 instanceof Object)){
var ex__32335__auto__ = e49297;
var statearr_49298_49316 = state_49273;
(statearr_49298_49316[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49317 = state_49273;
state_49273 = G__49317;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
cljs$core$async$state_machine__32332__auto__ = function(state_49273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32332__auto____1.call(this,state_49273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32332__auto____0;
cljs$core$async$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32332__auto____1;
return cljs$core$async$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___49301,out))
})();
var state__32424__auto__ = (function (){var statearr_49299 = f__32423__auto__.call(null);
(statearr_49299[(6)] = c__32422__auto___49301);

return statearr_49299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___49301,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1537946267701
