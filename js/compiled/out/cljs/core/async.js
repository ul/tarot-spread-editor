// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39970 = arguments.length;
switch (G__39970) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39971 = (function (f,blockable,meta39972){
this.f = f;
this.blockable = blockable;
this.meta39972 = meta39972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39973,meta39972__$1){
var self__ = this;
var _39973__$1 = this;
return (new cljs.core.async.t_cljs$core$async39971(self__.f,self__.blockable,meta39972__$1));
}));

(cljs.core.async.t_cljs$core$async39971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39973){
var self__ = this;
var _39973__$1 = this;
return self__.meta39972;
}));

(cljs.core.async.t_cljs$core$async39971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39972","meta39972",1652190580,null)], null);
}));

(cljs.core.async.t_cljs$core$async39971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39971");

(cljs.core.async.t_cljs$core$async39971.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async39971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39971.
 */
cljs.core.async.__GT_t_cljs$core$async39971 = (function cljs$core$async$__GT_t_cljs$core$async39971(f__$1,blockable__$1,meta39972){
return (new cljs.core.async.t_cljs$core$async39971(f__$1,blockable__$1,meta39972));
});

}

return (new cljs.core.async.t_cljs$core$async39971(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__39977 = arguments.length;
switch (G__39977) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39980 = arguments.length;
switch (G__39980) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__39983 = arguments.length;
switch (G__39983) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39985 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39985);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_39985);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__39987 = arguments.length;
switch (G__39987) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5816__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5816__auto__)){
var ret = temp__5816__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5816__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5816__auto__)){
var retb = temp__5816__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___39989 = n;
var x_39990 = (0);
while(true){
if((x_39990 < n__5636__auto___39989)){
(a[x_39990] = (0));

var G__39991 = (x_39990 + (1));
x_39990 = G__39991;
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

var G__39992 = (i + (1));
i = G__39992;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39993 = (function (flag,meta39994){
this.flag = flag;
this.meta39994 = meta39994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39995,meta39994__$1){
var self__ = this;
var _39995__$1 = this;
return (new cljs.core.async.t_cljs$core$async39993(self__.flag,meta39994__$1));
}));

(cljs.core.async.t_cljs$core$async39993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39995){
var self__ = this;
var _39995__$1 = this;
return self__.meta39994;
}));

(cljs.core.async.t_cljs$core$async39993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async39993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39994","meta39994",-2081562187,null)], null);
}));

(cljs.core.async.t_cljs$core$async39993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39993");

(cljs.core.async.t_cljs$core$async39993.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async39993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39993.
 */
cljs.core.async.__GT_t_cljs$core$async39993 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39993(flag__$1,meta39994){
return (new cljs.core.async.t_cljs$core$async39993(flag__$1,meta39994));
});

}

return (new cljs.core.async.t_cljs$core$async39993(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39996 = (function (flag,cb,meta39997){
this.flag = flag;
this.cb = cb;
this.meta39997 = meta39997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39998,meta39997__$1){
var self__ = this;
var _39998__$1 = this;
return (new cljs.core.async.t_cljs$core$async39996(self__.flag,self__.cb,meta39997__$1));
}));

(cljs.core.async.t_cljs$core$async39996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39998){
var self__ = this;
var _39998__$1 = this;
return self__.meta39997;
}));

(cljs.core.async.t_cljs$core$async39996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async39996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39997","meta39997",397385376,null)], null);
}));

(cljs.core.async.t_cljs$core$async39996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39996");

(cljs.core.async.t_cljs$core$async39996.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async39996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39996.
 */
cljs.core.async.__GT_t_cljs$core$async39996 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39996(flag__$1,cb__$1,meta39997){
return (new cljs.core.async.t_cljs$core$async39996(flag__$1,cb__$1,meta39997));
});

}

return (new cljs.core.async.t_cljs$core$async39996(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39999_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39999_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40000_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40000_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40001 = (i + (1));
i = G__40001;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5818__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5818__auto__)){
var got = temp__5818__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___40006 = arguments.length;
var i__5770__auto___40007 = (0);
while(true){
if((i__5770__auto___40007 < len__5769__auto___40006)){
args__5775__auto__.push((arguments[i__5770__auto___40007]));

var G__40008 = (i__5770__auto___40007 + (1));
i__5770__auto___40007 = G__40008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40004){
var map__40005 = p__40004;
var map__40005__$1 = cljs.core.__destructure_map.call(null,map__40005);
var opts = map__40005__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40002){
var G__40003 = cljs.core.first.call(null,seq40002);
var seq40002__$1 = cljs.core.next.call(null,seq40002);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40003,seq40002__$1);
}));

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
var G__40010 = arguments.length;
switch (G__40010) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39910__auto___40056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40034){
var state_val_40035 = (state_40034[(1)]);
if((state_val_40035 === (7))){
var inst_40030 = (state_40034[(2)]);
var state_40034__$1 = state_40034;
var statearr_40036_40057 = state_40034__$1;
(statearr_40036_40057[(2)] = inst_40030);

(statearr_40036_40057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (1))){
var state_40034__$1 = state_40034;
var statearr_40037_40058 = state_40034__$1;
(statearr_40037_40058[(2)] = null);

(statearr_40037_40058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (4))){
var inst_40013 = (state_40034[(7)]);
var inst_40013__$1 = (state_40034[(2)]);
var inst_40014 = (inst_40013__$1 == null);
var state_40034__$1 = (function (){var statearr_40038 = state_40034;
(statearr_40038[(7)] = inst_40013__$1);

return statearr_40038;
})();
if(cljs.core.truth_(inst_40014)){
var statearr_40039_40059 = state_40034__$1;
(statearr_40039_40059[(1)] = (5));

} else {
var statearr_40040_40060 = state_40034__$1;
(statearr_40040_40060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (13))){
var state_40034__$1 = state_40034;
var statearr_40041_40061 = state_40034__$1;
(statearr_40041_40061[(2)] = null);

(statearr_40041_40061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (6))){
var inst_40013 = (state_40034[(7)]);
var state_40034__$1 = state_40034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40034__$1,(11),to,inst_40013);
} else {
if((state_val_40035 === (3))){
var inst_40032 = (state_40034[(2)]);
var state_40034__$1 = state_40034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40034__$1,inst_40032);
} else {
if((state_val_40035 === (12))){
var state_40034__$1 = state_40034;
var statearr_40042_40062 = state_40034__$1;
(statearr_40042_40062[(2)] = null);

(statearr_40042_40062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (2))){
var state_40034__$1 = state_40034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40034__$1,(4),from);
} else {
if((state_val_40035 === (11))){
var inst_40023 = (state_40034[(2)]);
var state_40034__$1 = state_40034;
if(cljs.core.truth_(inst_40023)){
var statearr_40043_40063 = state_40034__$1;
(statearr_40043_40063[(1)] = (12));

} else {
var statearr_40044_40064 = state_40034__$1;
(statearr_40044_40064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (9))){
var state_40034__$1 = state_40034;
var statearr_40045_40065 = state_40034__$1;
(statearr_40045_40065[(2)] = null);

(statearr_40045_40065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (5))){
var state_40034__$1 = state_40034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40046_40066 = state_40034__$1;
(statearr_40046_40066[(1)] = (8));

} else {
var statearr_40047_40067 = state_40034__$1;
(statearr_40047_40067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (14))){
var inst_40028 = (state_40034[(2)]);
var state_40034__$1 = state_40034;
var statearr_40048_40068 = state_40034__$1;
(statearr_40048_40068[(2)] = inst_40028);

(statearr_40048_40068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (10))){
var inst_40020 = (state_40034[(2)]);
var state_40034__$1 = state_40034;
var statearr_40049_40069 = state_40034__$1;
(statearr_40049_40069[(2)] = inst_40020);

(statearr_40049_40069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40035 === (8))){
var inst_40017 = cljs.core.async.close_BANG_.call(null,to);
var state_40034__$1 = state_40034;
var statearr_40050_40070 = state_40034__$1;
(statearr_40050_40070[(2)] = inst_40017);

(statearr_40050_40070[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_40051 = [null,null,null,null,null,null,null,null];
(statearr_40051[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_40051[(1)] = (1));

return statearr_40051;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_40034){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40052){if((e40052 instanceof Object)){
var ex__39817__auto__ = e40052;
var statearr_40053_40071 = state_40034;
(statearr_40053_40071[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40072 = state_40034;
state_40034 = G__40072;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_40034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_40034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40054 = f__39911__auto__.call(null);
(statearr_40054[(6)] = c__39910__auto___40056);

return statearr_40054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__40073){
var vec__40074 = p__40073;
var v = cljs.core.nth.call(null,vec__40074,(0),null);
var p = cljs.core.nth.call(null,vec__40074,(1),null);
var job = vec__40074;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39910__auto___40245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40081){
var state_val_40082 = (state_40081[(1)]);
if((state_val_40082 === (1))){
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40081__$1,(2),res,v);
} else {
if((state_val_40082 === (2))){
var inst_40078 = (state_40081[(2)]);
var inst_40079 = cljs.core.async.close_BANG_.call(null,res);
var state_40081__$1 = (function (){var statearr_40083 = state_40081;
(statearr_40083[(7)] = inst_40078);

return statearr_40083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40081__$1,inst_40079);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0 = (function (){
var statearr_40084 = [null,null,null,null,null,null,null,null];
(statearr_40084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__);

(statearr_40084[(1)] = (1));

return statearr_40084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1 = (function (state_40081){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40085){if((e40085 instanceof Object)){
var ex__39817__auto__ = e40085;
var statearr_40086_40246 = state_40081;
(statearr_40086_40246[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40247 = state_40081;
state_40081 = G__40247;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = function(state_40081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1.call(this,state_40081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40087 = f__39911__auto__.call(null);
(statearr_40087[(6)] = c__39910__auto___40245);

return statearr_40087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__40088){
var vec__40089 = p__40088;
var v = cljs.core.nth.call(null,vec__40089,(0),null);
var p = cljs.core.nth.call(null,vec__40089,(1),null);
var job = vec__40089;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___40248 = n;
var __40249 = (0);
while(true){
if((__40249 < n__5636__auto___40248)){
var G__40092_40250 = type;
var G__40092_40251__$1 = (((G__40092_40250 instanceof cljs.core.Keyword))?G__40092_40250.fqn:null);
switch (G__40092_40251__$1) {
case "compute":
var c__39910__auto___40253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40249,c__39910__auto___40253,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async){
return (function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = ((function (__40249,c__39910__auto___40253,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async){
return (function (state_40105){
var state_val_40106 = (state_40105[(1)]);
if((state_val_40106 === (1))){
var state_40105__$1 = state_40105;
var statearr_40107_40254 = state_40105__$1;
(statearr_40107_40254[(2)] = null);

(statearr_40107_40254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40106 === (2))){
var state_40105__$1 = state_40105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40105__$1,(4),jobs);
} else {
if((state_val_40106 === (3))){
var inst_40103 = (state_40105[(2)]);
var state_40105__$1 = state_40105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40105__$1,inst_40103);
} else {
if((state_val_40106 === (4))){
var inst_40095 = (state_40105[(2)]);
var inst_40096 = process__$1.call(null,inst_40095);
var state_40105__$1 = state_40105;
if(cljs.core.truth_(inst_40096)){
var statearr_40108_40255 = state_40105__$1;
(statearr_40108_40255[(1)] = (5));

} else {
var statearr_40109_40256 = state_40105__$1;
(statearr_40109_40256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40106 === (5))){
var state_40105__$1 = state_40105;
var statearr_40110_40257 = state_40105__$1;
(statearr_40110_40257[(2)] = null);

(statearr_40110_40257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40106 === (6))){
var state_40105__$1 = state_40105;
var statearr_40111_40258 = state_40105__$1;
(statearr_40111_40258[(2)] = null);

(statearr_40111_40258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40106 === (7))){
var inst_40101 = (state_40105[(2)]);
var state_40105__$1 = state_40105;
var statearr_40112_40259 = state_40105__$1;
(statearr_40112_40259[(2)] = inst_40101);

(statearr_40112_40259[(1)] = (3));


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
});})(__40249,c__39910__auto___40253,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async))
;
return ((function (__40249,switch__39813__auto__,c__39910__auto___40253,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0 = (function (){
var statearr_40113 = [null,null,null,null,null,null,null];
(statearr_40113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__);

(statearr_40113[(1)] = (1));

return statearr_40113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1 = (function (state_40105){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40114){if((e40114 instanceof Object)){
var ex__39817__auto__ = e40114;
var statearr_40115_40260 = state_40105;
(statearr_40115_40260[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40261 = state_40105;
state_40105 = G__40261;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = function(state_40105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1.call(this,state_40105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__;
})()
;})(__40249,switch__39813__auto__,c__39910__auto___40253,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async))
})();
var state__39912__auto__ = (function (){var statearr_40116 = f__39911__auto__.call(null);
(statearr_40116[(6)] = c__39910__auto___40253);

return statearr_40116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
});})(__40249,c__39910__auto___40253,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async))
);


break;
case "async":
var c__39910__auto___40262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40249,c__39910__auto___40262,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async){
return (function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = ((function (__40249,c__39910__auto___40262,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async){
return (function (state_40129){
var state_val_40130 = (state_40129[(1)]);
if((state_val_40130 === (1))){
var state_40129__$1 = state_40129;
var statearr_40131_40263 = state_40129__$1;
(statearr_40131_40263[(2)] = null);

(statearr_40131_40263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40130 === (2))){
var state_40129__$1 = state_40129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40129__$1,(4),jobs);
} else {
if((state_val_40130 === (3))){
var inst_40127 = (state_40129[(2)]);
var state_40129__$1 = state_40129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40129__$1,inst_40127);
} else {
if((state_val_40130 === (4))){
var inst_40119 = (state_40129[(2)]);
var inst_40120 = async.call(null,inst_40119);
var state_40129__$1 = state_40129;
if(cljs.core.truth_(inst_40120)){
var statearr_40132_40264 = state_40129__$1;
(statearr_40132_40264[(1)] = (5));

} else {
var statearr_40133_40265 = state_40129__$1;
(statearr_40133_40265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40130 === (5))){
var state_40129__$1 = state_40129;
var statearr_40134_40266 = state_40129__$1;
(statearr_40134_40266[(2)] = null);

(statearr_40134_40266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40130 === (6))){
var state_40129__$1 = state_40129;
var statearr_40135_40267 = state_40129__$1;
(statearr_40135_40267[(2)] = null);

(statearr_40135_40267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40130 === (7))){
var inst_40125 = (state_40129[(2)]);
var state_40129__$1 = state_40129;
var statearr_40136_40268 = state_40129__$1;
(statearr_40136_40268[(2)] = inst_40125);

(statearr_40136_40268[(1)] = (3));


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
});})(__40249,c__39910__auto___40262,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async))
;
return ((function (__40249,switch__39813__auto__,c__39910__auto___40262,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0 = (function (){
var statearr_40137 = [null,null,null,null,null,null,null];
(statearr_40137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__);

(statearr_40137[(1)] = (1));

return statearr_40137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1 = (function (state_40129){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40138){if((e40138 instanceof Object)){
var ex__39817__auto__ = e40138;
var statearr_40139_40269 = state_40129;
(statearr_40139_40269[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40270 = state_40129;
state_40129 = G__40270;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = function(state_40129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1.call(this,state_40129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__;
})()
;})(__40249,switch__39813__auto__,c__39910__auto___40262,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async))
})();
var state__39912__auto__ = (function (){var statearr_40140 = f__39911__auto__.call(null);
(statearr_40140[(6)] = c__39910__auto___40262);

return statearr_40140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
});})(__40249,c__39910__auto___40262,G__40092_40250,G__40092_40251__$1,n__5636__auto___40248,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40092_40251__$1)].join('')));

}

var G__40271 = (__40249 + (1));
__40249 = G__40271;
continue;
} else {
}
break;
}

var c__39910__auto___40272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40162){
var state_val_40163 = (state_40162[(1)]);
if((state_val_40163 === (7))){
var inst_40158 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40164_40273 = state_40162__$1;
(statearr_40164_40273[(2)] = inst_40158);

(statearr_40164_40273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (1))){
var state_40162__$1 = state_40162;
var statearr_40165_40274 = state_40162__$1;
(statearr_40165_40274[(2)] = null);

(statearr_40165_40274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (4))){
var inst_40143 = (state_40162[(7)]);
var inst_40143__$1 = (state_40162[(2)]);
var inst_40144 = (inst_40143__$1 == null);
var state_40162__$1 = (function (){var statearr_40166 = state_40162;
(statearr_40166[(7)] = inst_40143__$1);

return statearr_40166;
})();
if(cljs.core.truth_(inst_40144)){
var statearr_40167_40275 = state_40162__$1;
(statearr_40167_40275[(1)] = (5));

} else {
var statearr_40168_40276 = state_40162__$1;
(statearr_40168_40276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (6))){
var inst_40148 = (state_40162[(8)]);
var inst_40143 = (state_40162[(7)]);
var inst_40148__$1 = cljs.core.async.chan.call(null,(1));
var inst_40149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40150 = [inst_40143,inst_40148__$1];
var inst_40151 = (new cljs.core.PersistentVector(null,2,(5),inst_40149,inst_40150,null));
var state_40162__$1 = (function (){var statearr_40169 = state_40162;
(statearr_40169[(8)] = inst_40148__$1);

return statearr_40169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40162__$1,(8),jobs,inst_40151);
} else {
if((state_val_40163 === (3))){
var inst_40160 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40162__$1,inst_40160);
} else {
if((state_val_40163 === (2))){
var state_40162__$1 = state_40162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40162__$1,(4),from);
} else {
if((state_val_40163 === (9))){
var inst_40155 = (state_40162[(2)]);
var state_40162__$1 = (function (){var statearr_40170 = state_40162;
(statearr_40170[(9)] = inst_40155);

return statearr_40170;
})();
var statearr_40171_40277 = state_40162__$1;
(statearr_40171_40277[(2)] = null);

(statearr_40171_40277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (5))){
var inst_40146 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40162__$1 = state_40162;
var statearr_40172_40278 = state_40162__$1;
(statearr_40172_40278[(2)] = inst_40146);

(statearr_40172_40278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (8))){
var inst_40148 = (state_40162[(8)]);
var inst_40153 = (state_40162[(2)]);
var state_40162__$1 = (function (){var statearr_40173 = state_40162;
(statearr_40173[(10)] = inst_40153);

return statearr_40173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40162__$1,(9),results,inst_40148);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0 = (function (){
var statearr_40174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__);

(statearr_40174[(1)] = (1));

return statearr_40174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1 = (function (state_40162){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40175){if((e40175 instanceof Object)){
var ex__39817__auto__ = e40175;
var statearr_40176_40279 = state_40162;
(statearr_40176_40279[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40280 = state_40162;
state_40162 = G__40280;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = function(state_40162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1.call(this,state_40162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40177 = f__39911__auto__.call(null);
(statearr_40177[(6)] = c__39910__auto___40272);

return statearr_40177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40215){
var state_val_40216 = (state_40215[(1)]);
if((state_val_40216 === (7))){
var inst_40211 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
var statearr_40217_40281 = state_40215__$1;
(statearr_40217_40281[(2)] = inst_40211);

(statearr_40217_40281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (20))){
var state_40215__$1 = state_40215;
var statearr_40218_40282 = state_40215__$1;
(statearr_40218_40282[(2)] = null);

(statearr_40218_40282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (1))){
var state_40215__$1 = state_40215;
var statearr_40219_40283 = state_40215__$1;
(statearr_40219_40283[(2)] = null);

(statearr_40219_40283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (4))){
var inst_40180 = (state_40215[(7)]);
var inst_40180__$1 = (state_40215[(2)]);
var inst_40181 = (inst_40180__$1 == null);
var state_40215__$1 = (function (){var statearr_40220 = state_40215;
(statearr_40220[(7)] = inst_40180__$1);

return statearr_40220;
})();
if(cljs.core.truth_(inst_40181)){
var statearr_40221_40284 = state_40215__$1;
(statearr_40221_40284[(1)] = (5));

} else {
var statearr_40222_40285 = state_40215__$1;
(statearr_40222_40285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (15))){
var inst_40193 = (state_40215[(8)]);
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40215__$1,(18),to,inst_40193);
} else {
if((state_val_40216 === (21))){
var inst_40206 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
var statearr_40223_40286 = state_40215__$1;
(statearr_40223_40286[(2)] = inst_40206);

(statearr_40223_40286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (13))){
var inst_40208 = (state_40215[(2)]);
var state_40215__$1 = (function (){var statearr_40224 = state_40215;
(statearr_40224[(9)] = inst_40208);

return statearr_40224;
})();
var statearr_40225_40287 = state_40215__$1;
(statearr_40225_40287[(2)] = null);

(statearr_40225_40287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (6))){
var inst_40180 = (state_40215[(7)]);
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40215__$1,(11),inst_40180);
} else {
if((state_val_40216 === (17))){
var inst_40201 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
if(cljs.core.truth_(inst_40201)){
var statearr_40226_40288 = state_40215__$1;
(statearr_40226_40288[(1)] = (19));

} else {
var statearr_40227_40289 = state_40215__$1;
(statearr_40227_40289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (3))){
var inst_40213 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40215__$1,inst_40213);
} else {
if((state_val_40216 === (12))){
var inst_40190 = (state_40215[(10)]);
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40215__$1,(14),inst_40190);
} else {
if((state_val_40216 === (2))){
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40215__$1,(4),results);
} else {
if((state_val_40216 === (19))){
var state_40215__$1 = state_40215;
var statearr_40228_40290 = state_40215__$1;
(statearr_40228_40290[(2)] = null);

(statearr_40228_40290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (11))){
var inst_40190 = (state_40215[(2)]);
var state_40215__$1 = (function (){var statearr_40229 = state_40215;
(statearr_40229[(10)] = inst_40190);

return statearr_40229;
})();
var statearr_40230_40291 = state_40215__$1;
(statearr_40230_40291[(2)] = null);

(statearr_40230_40291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (9))){
var state_40215__$1 = state_40215;
var statearr_40231_40292 = state_40215__$1;
(statearr_40231_40292[(2)] = null);

(statearr_40231_40292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (5))){
var state_40215__$1 = state_40215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40232_40293 = state_40215__$1;
(statearr_40232_40293[(1)] = (8));

} else {
var statearr_40233_40294 = state_40215__$1;
(statearr_40233_40294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (14))){
var inst_40195 = (state_40215[(11)]);
var inst_40193 = (state_40215[(8)]);
var inst_40193__$1 = (state_40215[(2)]);
var inst_40194 = (inst_40193__$1 == null);
var inst_40195__$1 = cljs.core.not.call(null,inst_40194);
var state_40215__$1 = (function (){var statearr_40234 = state_40215;
(statearr_40234[(11)] = inst_40195__$1);

(statearr_40234[(8)] = inst_40193__$1);

return statearr_40234;
})();
if(inst_40195__$1){
var statearr_40235_40295 = state_40215__$1;
(statearr_40235_40295[(1)] = (15));

} else {
var statearr_40236_40296 = state_40215__$1;
(statearr_40236_40296[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (16))){
var inst_40195 = (state_40215[(11)]);
var state_40215__$1 = state_40215;
var statearr_40237_40297 = state_40215__$1;
(statearr_40237_40297[(2)] = inst_40195);

(statearr_40237_40297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (10))){
var inst_40187 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
var statearr_40238_40298 = state_40215__$1;
(statearr_40238_40298[(2)] = inst_40187);

(statearr_40238_40298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (18))){
var inst_40198 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
var statearr_40239_40299 = state_40215__$1;
(statearr_40239_40299[(2)] = inst_40198);

(statearr_40239_40299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (8))){
var inst_40184 = cljs.core.async.close_BANG_.call(null,to);
var state_40215__$1 = state_40215;
var statearr_40240_40300 = state_40215__$1;
(statearr_40240_40300[(2)] = inst_40184);

(statearr_40240_40300[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0 = (function (){
var statearr_40241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__);

(statearr_40241[(1)] = (1));

return statearr_40241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1 = (function (state_40215){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40242){if((e40242 instanceof Object)){
var ex__39817__auto__ = e40242;
var statearr_40243_40301 = state_40215;
(statearr_40243_40301[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40302 = state_40215;
state_40215 = G__40302;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__ = function(state_40215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1.call(this,state_40215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40244 = f__39911__auto__.call(null);
(statearr_40244[(6)] = c__39910__auto__);

return statearr_40244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
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
var G__40304 = arguments.length;
switch (G__40304) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__40307 = arguments.length;
switch (G__40307) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__40310 = arguments.length;
switch (G__40310) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39910__auto___40359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40336){
var state_val_40337 = (state_40336[(1)]);
if((state_val_40337 === (7))){
var inst_40332 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
var statearr_40338_40360 = state_40336__$1;
(statearr_40338_40360[(2)] = inst_40332);

(statearr_40338_40360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (1))){
var state_40336__$1 = state_40336;
var statearr_40339_40361 = state_40336__$1;
(statearr_40339_40361[(2)] = null);

(statearr_40339_40361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (4))){
var inst_40313 = (state_40336[(7)]);
var inst_40313__$1 = (state_40336[(2)]);
var inst_40314 = (inst_40313__$1 == null);
var state_40336__$1 = (function (){var statearr_40340 = state_40336;
(statearr_40340[(7)] = inst_40313__$1);

return statearr_40340;
})();
if(cljs.core.truth_(inst_40314)){
var statearr_40341_40362 = state_40336__$1;
(statearr_40341_40362[(1)] = (5));

} else {
var statearr_40342_40363 = state_40336__$1;
(statearr_40342_40363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (13))){
var state_40336__$1 = state_40336;
var statearr_40343_40364 = state_40336__$1;
(statearr_40343_40364[(2)] = null);

(statearr_40343_40364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (6))){
var inst_40313 = (state_40336[(7)]);
var inst_40319 = p.call(null,inst_40313);
var state_40336__$1 = state_40336;
if(cljs.core.truth_(inst_40319)){
var statearr_40344_40365 = state_40336__$1;
(statearr_40344_40365[(1)] = (9));

} else {
var statearr_40345_40366 = state_40336__$1;
(statearr_40345_40366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (3))){
var inst_40334 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40336__$1,inst_40334);
} else {
if((state_val_40337 === (12))){
var state_40336__$1 = state_40336;
var statearr_40346_40367 = state_40336__$1;
(statearr_40346_40367[(2)] = null);

(statearr_40346_40367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (2))){
var state_40336__$1 = state_40336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40336__$1,(4),ch);
} else {
if((state_val_40337 === (11))){
var inst_40313 = (state_40336[(7)]);
var inst_40323 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40336__$1,(8),inst_40323,inst_40313);
} else {
if((state_val_40337 === (9))){
var state_40336__$1 = state_40336;
var statearr_40347_40368 = state_40336__$1;
(statearr_40347_40368[(2)] = tc);

(statearr_40347_40368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (5))){
var inst_40316 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40317 = cljs.core.async.close_BANG_.call(null,fc);
var state_40336__$1 = (function (){var statearr_40348 = state_40336;
(statearr_40348[(8)] = inst_40316);

return statearr_40348;
})();
var statearr_40349_40369 = state_40336__$1;
(statearr_40349_40369[(2)] = inst_40317);

(statearr_40349_40369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (14))){
var inst_40330 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
var statearr_40350_40370 = state_40336__$1;
(statearr_40350_40370[(2)] = inst_40330);

(statearr_40350_40370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (10))){
var state_40336__$1 = state_40336;
var statearr_40351_40371 = state_40336__$1;
(statearr_40351_40371[(2)] = fc);

(statearr_40351_40371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (8))){
var inst_40325 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
if(cljs.core.truth_(inst_40325)){
var statearr_40352_40372 = state_40336__$1;
(statearr_40352_40372[(1)] = (12));

} else {
var statearr_40353_40373 = state_40336__$1;
(statearr_40353_40373[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_40354 = [null,null,null,null,null,null,null,null,null];
(statearr_40354[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_40354[(1)] = (1));

return statearr_40354;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_40336){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40355){if((e40355 instanceof Object)){
var ex__39817__auto__ = e40355;
var statearr_40356_40374 = state_40336;
(statearr_40356_40374[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40375 = state_40336;
state_40336 = G__40375;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_40336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_40336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40357 = f__39911__auto__.call(null);
(statearr_40357[(6)] = c__39910__auto___40359);

return statearr_40357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40396){
var state_val_40397 = (state_40396[(1)]);
if((state_val_40397 === (7))){
var inst_40392 = (state_40396[(2)]);
var state_40396__$1 = state_40396;
var statearr_40398_40416 = state_40396__$1;
(statearr_40398_40416[(2)] = inst_40392);

(statearr_40398_40416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (1))){
var inst_40376 = init;
var state_40396__$1 = (function (){var statearr_40399 = state_40396;
(statearr_40399[(7)] = inst_40376);

return statearr_40399;
})();
var statearr_40400_40417 = state_40396__$1;
(statearr_40400_40417[(2)] = null);

(statearr_40400_40417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (4))){
var inst_40379 = (state_40396[(8)]);
var inst_40379__$1 = (state_40396[(2)]);
var inst_40380 = (inst_40379__$1 == null);
var state_40396__$1 = (function (){var statearr_40401 = state_40396;
(statearr_40401[(8)] = inst_40379__$1);

return statearr_40401;
})();
if(cljs.core.truth_(inst_40380)){
var statearr_40402_40418 = state_40396__$1;
(statearr_40402_40418[(1)] = (5));

} else {
var statearr_40403_40419 = state_40396__$1;
(statearr_40403_40419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (6))){
var inst_40379 = (state_40396[(8)]);
var inst_40383 = (state_40396[(9)]);
var inst_40376 = (state_40396[(7)]);
var inst_40383__$1 = f.call(null,inst_40376,inst_40379);
var inst_40384 = cljs.core.reduced_QMARK_.call(null,inst_40383__$1);
var state_40396__$1 = (function (){var statearr_40404 = state_40396;
(statearr_40404[(9)] = inst_40383__$1);

return statearr_40404;
})();
if(inst_40384){
var statearr_40405_40420 = state_40396__$1;
(statearr_40405_40420[(1)] = (8));

} else {
var statearr_40406_40421 = state_40396__$1;
(statearr_40406_40421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (3))){
var inst_40394 = (state_40396[(2)]);
var state_40396__$1 = state_40396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40396__$1,inst_40394);
} else {
if((state_val_40397 === (2))){
var state_40396__$1 = state_40396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40396__$1,(4),ch);
} else {
if((state_val_40397 === (9))){
var inst_40383 = (state_40396[(9)]);
var inst_40376 = inst_40383;
var state_40396__$1 = (function (){var statearr_40407 = state_40396;
(statearr_40407[(7)] = inst_40376);

return statearr_40407;
})();
var statearr_40408_40422 = state_40396__$1;
(statearr_40408_40422[(2)] = null);

(statearr_40408_40422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (5))){
var inst_40376 = (state_40396[(7)]);
var state_40396__$1 = state_40396;
var statearr_40409_40423 = state_40396__$1;
(statearr_40409_40423[(2)] = inst_40376);

(statearr_40409_40423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (10))){
var inst_40390 = (state_40396[(2)]);
var state_40396__$1 = state_40396;
var statearr_40410_40424 = state_40396__$1;
(statearr_40410_40424[(2)] = inst_40390);

(statearr_40410_40424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40397 === (8))){
var inst_40383 = (state_40396[(9)]);
var inst_40386 = cljs.core.deref.call(null,inst_40383);
var state_40396__$1 = state_40396;
var statearr_40411_40425 = state_40396__$1;
(statearr_40411_40425[(2)] = inst_40386);

(statearr_40411_40425[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39814__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39814__auto____0 = (function (){
var statearr_40412 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40412[(0)] = cljs$core$async$reduce_$_state_machine__39814__auto__);

(statearr_40412[(1)] = (1));

return statearr_40412;
});
var cljs$core$async$reduce_$_state_machine__39814__auto____1 = (function (state_40396){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40413){if((e40413 instanceof Object)){
var ex__39817__auto__ = e40413;
var statearr_40414_40426 = state_40396;
(statearr_40414_40426[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40427 = state_40396;
state_40396 = G__40427;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39814__auto__ = function(state_40396){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39814__auto____1.call(this,state_40396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39814__auto____0;
cljs$core$async$reduce_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39814__auto____1;
return cljs$core$async$reduce_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40415 = f__39911__auto__.call(null);
(statearr_40415[(6)] = c__39910__auto__);

return statearr_40415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40433){
var state_val_40434 = (state_40433[(1)]);
if((state_val_40434 === (1))){
var inst_40428 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40433__$1,(2),inst_40428);
} else {
if((state_val_40434 === (2))){
var inst_40430 = (state_40433[(2)]);
var inst_40431 = f__$1.call(null,inst_40430);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40433__$1,inst_40431);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39814__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39814__auto____0 = (function (){
var statearr_40435 = [null,null,null,null,null,null,null];
(statearr_40435[(0)] = cljs$core$async$transduce_$_state_machine__39814__auto__);

(statearr_40435[(1)] = (1));

return statearr_40435;
});
var cljs$core$async$transduce_$_state_machine__39814__auto____1 = (function (state_40433){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40436){if((e40436 instanceof Object)){
var ex__39817__auto__ = e40436;
var statearr_40437_40439 = state_40433;
(statearr_40437_40439[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40440 = state_40433;
state_40433 = G__40440;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39814__auto__ = function(state_40433){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39814__auto____1.call(this,state_40433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39814__auto____0;
cljs$core$async$transduce_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39814__auto____1;
return cljs$core$async$transduce_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40438 = f__39911__auto__.call(null);
(statearr_40438[(6)] = c__39910__auto__);

return statearr_40438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
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
var G__40442 = arguments.length;
switch (G__40442) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40467){
var state_val_40468 = (state_40467[(1)]);
if((state_val_40468 === (7))){
var inst_40449 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
var statearr_40469_40490 = state_40467__$1;
(statearr_40469_40490[(2)] = inst_40449);

(statearr_40469_40490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (1))){
var inst_40443 = cljs.core.seq.call(null,coll);
var inst_40444 = inst_40443;
var state_40467__$1 = (function (){var statearr_40470 = state_40467;
(statearr_40470[(7)] = inst_40444);

return statearr_40470;
})();
var statearr_40471_40491 = state_40467__$1;
(statearr_40471_40491[(2)] = null);

(statearr_40471_40491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (4))){
var inst_40444 = (state_40467[(7)]);
var inst_40447 = cljs.core.first.call(null,inst_40444);
var state_40467__$1 = state_40467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40467__$1,(7),ch,inst_40447);
} else {
if((state_val_40468 === (13))){
var inst_40461 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
var statearr_40472_40492 = state_40467__$1;
(statearr_40472_40492[(2)] = inst_40461);

(statearr_40472_40492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (6))){
var inst_40452 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
if(cljs.core.truth_(inst_40452)){
var statearr_40473_40493 = state_40467__$1;
(statearr_40473_40493[(1)] = (8));

} else {
var statearr_40474_40494 = state_40467__$1;
(statearr_40474_40494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (3))){
var inst_40465 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40467__$1,inst_40465);
} else {
if((state_val_40468 === (12))){
var state_40467__$1 = state_40467;
var statearr_40475_40495 = state_40467__$1;
(statearr_40475_40495[(2)] = null);

(statearr_40475_40495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (2))){
var inst_40444 = (state_40467[(7)]);
var state_40467__$1 = state_40467;
if(cljs.core.truth_(inst_40444)){
var statearr_40476_40496 = state_40467__$1;
(statearr_40476_40496[(1)] = (4));

} else {
var statearr_40477_40497 = state_40467__$1;
(statearr_40477_40497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (11))){
var inst_40458 = cljs.core.async.close_BANG_.call(null,ch);
var state_40467__$1 = state_40467;
var statearr_40478_40498 = state_40467__$1;
(statearr_40478_40498[(2)] = inst_40458);

(statearr_40478_40498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (9))){
var state_40467__$1 = state_40467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40479_40499 = state_40467__$1;
(statearr_40479_40499[(1)] = (11));

} else {
var statearr_40480_40500 = state_40467__$1;
(statearr_40480_40500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (5))){
var inst_40444 = (state_40467[(7)]);
var state_40467__$1 = state_40467;
var statearr_40481_40501 = state_40467__$1;
(statearr_40481_40501[(2)] = inst_40444);

(statearr_40481_40501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (10))){
var inst_40463 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
var statearr_40482_40502 = state_40467__$1;
(statearr_40482_40502[(2)] = inst_40463);

(statearr_40482_40502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (8))){
var inst_40444 = (state_40467[(7)]);
var inst_40454 = cljs.core.next.call(null,inst_40444);
var inst_40444__$1 = inst_40454;
var state_40467__$1 = (function (){var statearr_40483 = state_40467;
(statearr_40483[(7)] = inst_40444__$1);

return statearr_40483;
})();
var statearr_40484_40503 = state_40467__$1;
(statearr_40484_40503[(2)] = null);

(statearr_40484_40503[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_40485 = [null,null,null,null,null,null,null,null];
(statearr_40485[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_40485[(1)] = (1));

return statearr_40485;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_40467){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40486){if((e40486 instanceof Object)){
var ex__39817__auto__ = e40486;
var statearr_40487_40504 = state_40467;
(statearr_40487_40504[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40505 = state_40467;
state_40467 = G__40505;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_40467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_40467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40488 = f__39911__auto__.call(null);
(statearr_40488[(6)] = c__39910__auto__);

return statearr_40488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_40506 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40506.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40507 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40507.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40508 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40508.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40509 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40509.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40510 = (function (ch,cs,meta40511){
this.ch = ch;
this.cs = cs;
this.meta40511 = meta40511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40512,meta40511__$1){
var self__ = this;
var _40512__$1 = this;
return (new cljs.core.async.t_cljs$core$async40510(self__.ch,self__.cs,meta40511__$1));
}));

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40512){
var self__ = this;
var _40512__$1 = this;
return self__.meta40511;
}));

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40510.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40511","meta40511",1199168496,null)], null);
}));

(cljs.core.async.t_cljs$core$async40510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40510");

(cljs.core.async.t_cljs$core$async40510.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async40510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40510.
 */
cljs.core.async.__GT_t_cljs$core$async40510 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40510(ch__$1,cs__$1,meta40511){
return (new cljs.core.async.t_cljs$core$async40510(ch__$1,cs__$1,meta40511));
});

}

return (new cljs.core.async.t_cljs$core$async40510(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__39910__auto___40732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40647){
var state_val_40648 = (state_40647[(1)]);
if((state_val_40648 === (7))){
var inst_40643 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40649_40733 = state_40647__$1;
(statearr_40649_40733[(2)] = inst_40643);

(statearr_40649_40733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (20))){
var inst_40546 = (state_40647[(7)]);
var inst_40558 = cljs.core.first.call(null,inst_40546);
var inst_40559 = cljs.core.nth.call(null,inst_40558,(0),null);
var inst_40560 = cljs.core.nth.call(null,inst_40558,(1),null);
var state_40647__$1 = (function (){var statearr_40650 = state_40647;
(statearr_40650[(8)] = inst_40559);

return statearr_40650;
})();
if(cljs.core.truth_(inst_40560)){
var statearr_40651_40734 = state_40647__$1;
(statearr_40651_40734[(1)] = (22));

} else {
var statearr_40652_40735 = state_40647__$1;
(statearr_40652_40735[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (27))){
var inst_40515 = (state_40647[(9)]);
var inst_40595 = (state_40647[(10)]);
var inst_40590 = (state_40647[(11)]);
var inst_40588 = (state_40647[(12)]);
var inst_40595__$1 = cljs.core._nth.call(null,inst_40588,inst_40590);
var inst_40596 = cljs.core.async.put_BANG_.call(null,inst_40595__$1,inst_40515,done);
var state_40647__$1 = (function (){var statearr_40653 = state_40647;
(statearr_40653[(10)] = inst_40595__$1);

return statearr_40653;
})();
if(cljs.core.truth_(inst_40596)){
var statearr_40654_40736 = state_40647__$1;
(statearr_40654_40736[(1)] = (30));

} else {
var statearr_40655_40737 = state_40647__$1;
(statearr_40655_40737[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (1))){
var state_40647__$1 = state_40647;
var statearr_40656_40738 = state_40647__$1;
(statearr_40656_40738[(2)] = null);

(statearr_40656_40738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (24))){
var inst_40546 = (state_40647[(7)]);
var inst_40565 = (state_40647[(2)]);
var inst_40566 = cljs.core.next.call(null,inst_40546);
var inst_40524 = inst_40566;
var inst_40525 = null;
var inst_40526 = (0);
var inst_40527 = (0);
var state_40647__$1 = (function (){var statearr_40657 = state_40647;
(statearr_40657[(13)] = inst_40527);

(statearr_40657[(14)] = inst_40524);

(statearr_40657[(15)] = inst_40526);

(statearr_40657[(16)] = inst_40525);

(statearr_40657[(17)] = inst_40565);

return statearr_40657;
})();
var statearr_40658_40739 = state_40647__$1;
(statearr_40658_40739[(2)] = null);

(statearr_40658_40739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (39))){
var state_40647__$1 = state_40647;
var statearr_40662_40740 = state_40647__$1;
(statearr_40662_40740[(2)] = null);

(statearr_40662_40740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (4))){
var inst_40515 = (state_40647[(9)]);
var inst_40515__$1 = (state_40647[(2)]);
var inst_40516 = (inst_40515__$1 == null);
var state_40647__$1 = (function (){var statearr_40663 = state_40647;
(statearr_40663[(9)] = inst_40515__$1);

return statearr_40663;
})();
if(cljs.core.truth_(inst_40516)){
var statearr_40664_40741 = state_40647__$1;
(statearr_40664_40741[(1)] = (5));

} else {
var statearr_40665_40742 = state_40647__$1;
(statearr_40665_40742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (15))){
var inst_40527 = (state_40647[(13)]);
var inst_40524 = (state_40647[(14)]);
var inst_40526 = (state_40647[(15)]);
var inst_40525 = (state_40647[(16)]);
var inst_40542 = (state_40647[(2)]);
var inst_40543 = (inst_40527 + (1));
var tmp40659 = inst_40524;
var tmp40660 = inst_40526;
var tmp40661 = inst_40525;
var inst_40524__$1 = tmp40659;
var inst_40525__$1 = tmp40661;
var inst_40526__$1 = tmp40660;
var inst_40527__$1 = inst_40543;
var state_40647__$1 = (function (){var statearr_40666 = state_40647;
(statearr_40666[(13)] = inst_40527__$1);

(statearr_40666[(14)] = inst_40524__$1);

(statearr_40666[(15)] = inst_40526__$1);

(statearr_40666[(16)] = inst_40525__$1);

(statearr_40666[(18)] = inst_40542);

return statearr_40666;
})();
var statearr_40667_40743 = state_40647__$1;
(statearr_40667_40743[(2)] = null);

(statearr_40667_40743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (21))){
var inst_40569 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40671_40744 = state_40647__$1;
(statearr_40671_40744[(2)] = inst_40569);

(statearr_40671_40744[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (31))){
var inst_40595 = (state_40647[(10)]);
var inst_40599 = done.call(null,null);
var inst_40600 = cljs.core.async.untap_STAR_.call(null,m,inst_40595);
var state_40647__$1 = (function (){var statearr_40672 = state_40647;
(statearr_40672[(19)] = inst_40599);

return statearr_40672;
})();
var statearr_40673_40745 = state_40647__$1;
(statearr_40673_40745[(2)] = inst_40600);

(statearr_40673_40745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (32))){
var inst_40587 = (state_40647[(20)]);
var inst_40590 = (state_40647[(11)]);
var inst_40589 = (state_40647[(21)]);
var inst_40588 = (state_40647[(12)]);
var inst_40602 = (state_40647[(2)]);
var inst_40603 = (inst_40590 + (1));
var tmp40668 = inst_40587;
var tmp40669 = inst_40589;
var tmp40670 = inst_40588;
var inst_40587__$1 = tmp40668;
var inst_40588__$1 = tmp40670;
var inst_40589__$1 = tmp40669;
var inst_40590__$1 = inst_40603;
var state_40647__$1 = (function (){var statearr_40674 = state_40647;
(statearr_40674[(20)] = inst_40587__$1);

(statearr_40674[(22)] = inst_40602);

(statearr_40674[(11)] = inst_40590__$1);

(statearr_40674[(21)] = inst_40589__$1);

(statearr_40674[(12)] = inst_40588__$1);

return statearr_40674;
})();
var statearr_40675_40746 = state_40647__$1;
(statearr_40675_40746[(2)] = null);

(statearr_40675_40746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (40))){
var inst_40615 = (state_40647[(23)]);
var inst_40619 = done.call(null,null);
var inst_40620 = cljs.core.async.untap_STAR_.call(null,m,inst_40615);
var state_40647__$1 = (function (){var statearr_40676 = state_40647;
(statearr_40676[(24)] = inst_40619);

return statearr_40676;
})();
var statearr_40677_40747 = state_40647__$1;
(statearr_40677_40747[(2)] = inst_40620);

(statearr_40677_40747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (33))){
var inst_40606 = (state_40647[(25)]);
var inst_40608 = cljs.core.chunked_seq_QMARK_.call(null,inst_40606);
var state_40647__$1 = state_40647;
if(inst_40608){
var statearr_40678_40748 = state_40647__$1;
(statearr_40678_40748[(1)] = (36));

} else {
var statearr_40679_40749 = state_40647__$1;
(statearr_40679_40749[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (13))){
var inst_40536 = (state_40647[(26)]);
var inst_40539 = cljs.core.async.close_BANG_.call(null,inst_40536);
var state_40647__$1 = state_40647;
var statearr_40680_40750 = state_40647__$1;
(statearr_40680_40750[(2)] = inst_40539);

(statearr_40680_40750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (22))){
var inst_40559 = (state_40647[(8)]);
var inst_40562 = cljs.core.async.close_BANG_.call(null,inst_40559);
var state_40647__$1 = state_40647;
var statearr_40681_40751 = state_40647__$1;
(statearr_40681_40751[(2)] = inst_40562);

(statearr_40681_40751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (36))){
var inst_40606 = (state_40647[(25)]);
var inst_40610 = cljs.core.chunk_first.call(null,inst_40606);
var inst_40611 = cljs.core.chunk_rest.call(null,inst_40606);
var inst_40612 = cljs.core.count.call(null,inst_40610);
var inst_40587 = inst_40611;
var inst_40588 = inst_40610;
var inst_40589 = inst_40612;
var inst_40590 = (0);
var state_40647__$1 = (function (){var statearr_40682 = state_40647;
(statearr_40682[(20)] = inst_40587);

(statearr_40682[(11)] = inst_40590);

(statearr_40682[(21)] = inst_40589);

(statearr_40682[(12)] = inst_40588);

return statearr_40682;
})();
var statearr_40683_40752 = state_40647__$1;
(statearr_40683_40752[(2)] = null);

(statearr_40683_40752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (41))){
var inst_40606 = (state_40647[(25)]);
var inst_40622 = (state_40647[(2)]);
var inst_40623 = cljs.core.next.call(null,inst_40606);
var inst_40587 = inst_40623;
var inst_40588 = null;
var inst_40589 = (0);
var inst_40590 = (0);
var state_40647__$1 = (function (){var statearr_40684 = state_40647;
(statearr_40684[(20)] = inst_40587);

(statearr_40684[(27)] = inst_40622);

(statearr_40684[(11)] = inst_40590);

(statearr_40684[(21)] = inst_40589);

(statearr_40684[(12)] = inst_40588);

return statearr_40684;
})();
var statearr_40685_40753 = state_40647__$1;
(statearr_40685_40753[(2)] = null);

(statearr_40685_40753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (43))){
var state_40647__$1 = state_40647;
var statearr_40686_40754 = state_40647__$1;
(statearr_40686_40754[(2)] = null);

(statearr_40686_40754[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (29))){
var inst_40631 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40687_40755 = state_40647__$1;
(statearr_40687_40755[(2)] = inst_40631);

(statearr_40687_40755[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (44))){
var inst_40640 = (state_40647[(2)]);
var state_40647__$1 = (function (){var statearr_40688 = state_40647;
(statearr_40688[(28)] = inst_40640);

return statearr_40688;
})();
var statearr_40689_40756 = state_40647__$1;
(statearr_40689_40756[(2)] = null);

(statearr_40689_40756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (6))){
var inst_40579 = (state_40647[(29)]);
var inst_40578 = cljs.core.deref.call(null,cs);
var inst_40579__$1 = cljs.core.keys.call(null,inst_40578);
var inst_40580 = cljs.core.count.call(null,inst_40579__$1);
var inst_40581 = cljs.core.reset_BANG_.call(null,dctr,inst_40580);
var inst_40586 = cljs.core.seq.call(null,inst_40579__$1);
var inst_40587 = inst_40586;
var inst_40588 = null;
var inst_40589 = (0);
var inst_40590 = (0);
var state_40647__$1 = (function (){var statearr_40690 = state_40647;
(statearr_40690[(20)] = inst_40587);

(statearr_40690[(30)] = inst_40581);

(statearr_40690[(11)] = inst_40590);

(statearr_40690[(21)] = inst_40589);

(statearr_40690[(12)] = inst_40588);

(statearr_40690[(29)] = inst_40579__$1);

return statearr_40690;
})();
var statearr_40691_40757 = state_40647__$1;
(statearr_40691_40757[(2)] = null);

(statearr_40691_40757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (28))){
var inst_40587 = (state_40647[(20)]);
var inst_40606 = (state_40647[(25)]);
var inst_40606__$1 = cljs.core.seq.call(null,inst_40587);
var state_40647__$1 = (function (){var statearr_40692 = state_40647;
(statearr_40692[(25)] = inst_40606__$1);

return statearr_40692;
})();
if(inst_40606__$1){
var statearr_40693_40758 = state_40647__$1;
(statearr_40693_40758[(1)] = (33));

} else {
var statearr_40694_40759 = state_40647__$1;
(statearr_40694_40759[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (25))){
var inst_40590 = (state_40647[(11)]);
var inst_40589 = (state_40647[(21)]);
var inst_40592 = (inst_40590 < inst_40589);
var inst_40593 = inst_40592;
var state_40647__$1 = state_40647;
if(cljs.core.truth_(inst_40593)){
var statearr_40695_40760 = state_40647__$1;
(statearr_40695_40760[(1)] = (27));

} else {
var statearr_40696_40761 = state_40647__$1;
(statearr_40696_40761[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (34))){
var state_40647__$1 = state_40647;
var statearr_40697_40762 = state_40647__$1;
(statearr_40697_40762[(2)] = null);

(statearr_40697_40762[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (17))){
var state_40647__$1 = state_40647;
var statearr_40698_40763 = state_40647__$1;
(statearr_40698_40763[(2)] = null);

(statearr_40698_40763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (3))){
var inst_40645 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40647__$1,inst_40645);
} else {
if((state_val_40648 === (12))){
var inst_40574 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40699_40764 = state_40647__$1;
(statearr_40699_40764[(2)] = inst_40574);

(statearr_40699_40764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (2))){
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40647__$1,(4),ch);
} else {
if((state_val_40648 === (23))){
var state_40647__$1 = state_40647;
var statearr_40700_40765 = state_40647__$1;
(statearr_40700_40765[(2)] = null);

(statearr_40700_40765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (35))){
var inst_40629 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40701_40766 = state_40647__$1;
(statearr_40701_40766[(2)] = inst_40629);

(statearr_40701_40766[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (19))){
var inst_40546 = (state_40647[(7)]);
var inst_40550 = cljs.core.chunk_first.call(null,inst_40546);
var inst_40551 = cljs.core.chunk_rest.call(null,inst_40546);
var inst_40552 = cljs.core.count.call(null,inst_40550);
var inst_40524 = inst_40551;
var inst_40525 = inst_40550;
var inst_40526 = inst_40552;
var inst_40527 = (0);
var state_40647__$1 = (function (){var statearr_40702 = state_40647;
(statearr_40702[(13)] = inst_40527);

(statearr_40702[(14)] = inst_40524);

(statearr_40702[(15)] = inst_40526);

(statearr_40702[(16)] = inst_40525);

return statearr_40702;
})();
var statearr_40703_40767 = state_40647__$1;
(statearr_40703_40767[(2)] = null);

(statearr_40703_40767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (11))){
var inst_40524 = (state_40647[(14)]);
var inst_40546 = (state_40647[(7)]);
var inst_40546__$1 = cljs.core.seq.call(null,inst_40524);
var state_40647__$1 = (function (){var statearr_40704 = state_40647;
(statearr_40704[(7)] = inst_40546__$1);

return statearr_40704;
})();
if(inst_40546__$1){
var statearr_40705_40768 = state_40647__$1;
(statearr_40705_40768[(1)] = (16));

} else {
var statearr_40706_40769 = state_40647__$1;
(statearr_40706_40769[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (9))){
var inst_40576 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40707_40770 = state_40647__$1;
(statearr_40707_40770[(2)] = inst_40576);

(statearr_40707_40770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (5))){
var inst_40522 = cljs.core.deref.call(null,cs);
var inst_40523 = cljs.core.seq.call(null,inst_40522);
var inst_40524 = inst_40523;
var inst_40525 = null;
var inst_40526 = (0);
var inst_40527 = (0);
var state_40647__$1 = (function (){var statearr_40708 = state_40647;
(statearr_40708[(13)] = inst_40527);

(statearr_40708[(14)] = inst_40524);

(statearr_40708[(15)] = inst_40526);

(statearr_40708[(16)] = inst_40525);

return statearr_40708;
})();
var statearr_40709_40771 = state_40647__$1;
(statearr_40709_40771[(2)] = null);

(statearr_40709_40771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (14))){
var state_40647__$1 = state_40647;
var statearr_40710_40772 = state_40647__$1;
(statearr_40710_40772[(2)] = null);

(statearr_40710_40772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (45))){
var inst_40637 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40711_40773 = state_40647__$1;
(statearr_40711_40773[(2)] = inst_40637);

(statearr_40711_40773[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (26))){
var inst_40579 = (state_40647[(29)]);
var inst_40633 = (state_40647[(2)]);
var inst_40634 = cljs.core.seq.call(null,inst_40579);
var state_40647__$1 = (function (){var statearr_40712 = state_40647;
(statearr_40712[(31)] = inst_40633);

return statearr_40712;
})();
if(inst_40634){
var statearr_40713_40774 = state_40647__$1;
(statearr_40713_40774[(1)] = (42));

} else {
var statearr_40714_40775 = state_40647__$1;
(statearr_40714_40775[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (16))){
var inst_40546 = (state_40647[(7)]);
var inst_40548 = cljs.core.chunked_seq_QMARK_.call(null,inst_40546);
var state_40647__$1 = state_40647;
if(inst_40548){
var statearr_40715_40776 = state_40647__$1;
(statearr_40715_40776[(1)] = (19));

} else {
var statearr_40716_40777 = state_40647__$1;
(statearr_40716_40777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (38))){
var inst_40626 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40717_40778 = state_40647__$1;
(statearr_40717_40778[(2)] = inst_40626);

(statearr_40717_40778[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (30))){
var state_40647__$1 = state_40647;
var statearr_40718_40779 = state_40647__$1;
(statearr_40718_40779[(2)] = null);

(statearr_40718_40779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (10))){
var inst_40527 = (state_40647[(13)]);
var inst_40525 = (state_40647[(16)]);
var inst_40535 = cljs.core._nth.call(null,inst_40525,inst_40527);
var inst_40536 = cljs.core.nth.call(null,inst_40535,(0),null);
var inst_40537 = cljs.core.nth.call(null,inst_40535,(1),null);
var state_40647__$1 = (function (){var statearr_40719 = state_40647;
(statearr_40719[(26)] = inst_40536);

return statearr_40719;
})();
if(cljs.core.truth_(inst_40537)){
var statearr_40720_40780 = state_40647__$1;
(statearr_40720_40780[(1)] = (13));

} else {
var statearr_40721_40781 = state_40647__$1;
(statearr_40721_40781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (18))){
var inst_40572 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40722_40782 = state_40647__$1;
(statearr_40722_40782[(2)] = inst_40572);

(statearr_40722_40782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (42))){
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40647__$1,(45),dchan);
} else {
if((state_val_40648 === (37))){
var inst_40515 = (state_40647[(9)]);
var inst_40615 = (state_40647[(23)]);
var inst_40606 = (state_40647[(25)]);
var inst_40615__$1 = cljs.core.first.call(null,inst_40606);
var inst_40616 = cljs.core.async.put_BANG_.call(null,inst_40615__$1,inst_40515,done);
var state_40647__$1 = (function (){var statearr_40723 = state_40647;
(statearr_40723[(23)] = inst_40615__$1);

return statearr_40723;
})();
if(cljs.core.truth_(inst_40616)){
var statearr_40724_40783 = state_40647__$1;
(statearr_40724_40783[(1)] = (39));

} else {
var statearr_40725_40784 = state_40647__$1;
(statearr_40725_40784[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (8))){
var inst_40527 = (state_40647[(13)]);
var inst_40526 = (state_40647[(15)]);
var inst_40529 = (inst_40527 < inst_40526);
var inst_40530 = inst_40529;
var state_40647__$1 = state_40647;
if(cljs.core.truth_(inst_40530)){
var statearr_40726_40785 = state_40647__$1;
(statearr_40726_40785[(1)] = (10));

} else {
var statearr_40727_40786 = state_40647__$1;
(statearr_40727_40786[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__39814__auto__ = null;
var cljs$core$async$mult_$_state_machine__39814__auto____0 = (function (){
var statearr_40728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40728[(0)] = cljs$core$async$mult_$_state_machine__39814__auto__);

(statearr_40728[(1)] = (1));

return statearr_40728;
});
var cljs$core$async$mult_$_state_machine__39814__auto____1 = (function (state_40647){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40729){if((e40729 instanceof Object)){
var ex__39817__auto__ = e40729;
var statearr_40730_40787 = state_40647;
(statearr_40730_40787[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40788 = state_40647;
state_40647 = G__40788;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39814__auto__ = function(state_40647){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39814__auto____1.call(this,state_40647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39814__auto____0;
cljs$core$async$mult_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39814__auto____1;
return cljs$core$async$mult_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40731 = f__39911__auto__.call(null);
(statearr_40731[(6)] = c__39910__auto___40732);

return statearr_40731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40790 = arguments.length;
switch (G__40790) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_40792 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40792.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40793 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40793.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40794 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40794.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40795 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40795.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40796 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40796.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40806 = arguments.length;
var i__5770__auto___40807 = (0);
while(true){
if((i__5770__auto___40807 < len__5769__auto___40806)){
args__5775__auto__.push((arguments[i__5770__auto___40807]));

var G__40808 = (i__5770__auto___40807 + (1));
i__5770__auto___40807 = G__40808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40801){
var map__40802 = p__40801;
var map__40802__$1 = cljs.core.__destructure_map.call(null,map__40802);
var opts = map__40802__$1;
var statearr_40803_40809 = state;
(statearr_40803_40809[(1)] = cont_block);


var temp__5818__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_40804_40810 = state;
(statearr_40804_40810[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5818__auto__)){
var cb = temp__5818__auto__;
var statearr_40805_40811 = state;
(statearr_40805_40811[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40797){
var G__40798 = cljs.core.first.call(null,seq40797);
var seq40797__$1 = cljs.core.next.call(null,seq40797);
var G__40799 = cljs.core.first.call(null,seq40797__$1);
var seq40797__$2 = cljs.core.next.call(null,seq40797__$1);
var G__40800 = cljs.core.first.call(null,seq40797__$2);
var seq40797__$3 = cljs.core.next.call(null,seq40797__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40798,G__40799,G__40800,seq40797__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40812 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40813){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40813 = meta40813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40814,meta40813__$1){
var self__ = this;
var _40814__$1 = this;
return (new cljs.core.async.t_cljs$core$async40812(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40813__$1));
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40814){
var self__ = this;
var _40814__$1 = this;
return self__.meta40813;
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async40812.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async40812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40813","meta40813",-498118074,null)], null);
}));

(cljs.core.async.t_cljs$core$async40812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40812");

(cljs.core.async.t_cljs$core$async40812.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async40812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40812.
 */
cljs.core.async.__GT_t_cljs$core$async40812 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40812(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40813){
return (new cljs.core.async.t_cljs$core$async40812(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40813));
});

}

return (new cljs.core.async.t_cljs$core$async40812(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39910__auto___40926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_40882){
var state_val_40883 = (state_40882[(1)]);
if((state_val_40883 === (7))){
var inst_40842 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
if(cljs.core.truth_(inst_40842)){
var statearr_40884_40927 = state_40882__$1;
(statearr_40884_40927[(1)] = (8));

} else {
var statearr_40885_40928 = state_40882__$1;
(statearr_40885_40928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (20))){
var inst_40835 = (state_40882[(7)]);
var state_40882__$1 = state_40882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40882__$1,(23),out,inst_40835);
} else {
if((state_val_40883 === (1))){
var inst_40818 = calc_state.call(null);
var inst_40819 = cljs.core.__destructure_map.call(null,inst_40818);
var inst_40820 = cljs.core.get.call(null,inst_40819,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40821 = cljs.core.get.call(null,inst_40819,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40822 = cljs.core.get.call(null,inst_40819,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40823 = inst_40818;
var state_40882__$1 = (function (){var statearr_40886 = state_40882;
(statearr_40886[(8)] = inst_40820);

(statearr_40886[(9)] = inst_40821);

(statearr_40886[(10)] = inst_40823);

(statearr_40886[(11)] = inst_40822);

return statearr_40886;
})();
var statearr_40887_40929 = state_40882__$1;
(statearr_40887_40929[(2)] = null);

(statearr_40887_40929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (24))){
var inst_40826 = (state_40882[(12)]);
var inst_40823 = inst_40826;
var state_40882__$1 = (function (){var statearr_40888 = state_40882;
(statearr_40888[(10)] = inst_40823);

return statearr_40888;
})();
var statearr_40889_40930 = state_40882__$1;
(statearr_40889_40930[(2)] = null);

(statearr_40889_40930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (4))){
var inst_40835 = (state_40882[(7)]);
var inst_40837 = (state_40882[(13)]);
var inst_40834 = (state_40882[(2)]);
var inst_40835__$1 = cljs.core.nth.call(null,inst_40834,(0),null);
var inst_40836 = cljs.core.nth.call(null,inst_40834,(1),null);
var inst_40837__$1 = (inst_40835__$1 == null);
var state_40882__$1 = (function (){var statearr_40890 = state_40882;
(statearr_40890[(7)] = inst_40835__$1);

(statearr_40890[(13)] = inst_40837__$1);

(statearr_40890[(14)] = inst_40836);

return statearr_40890;
})();
if(cljs.core.truth_(inst_40837__$1)){
var statearr_40891_40931 = state_40882__$1;
(statearr_40891_40931[(1)] = (5));

} else {
var statearr_40892_40932 = state_40882__$1;
(statearr_40892_40932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (15))){
var inst_40827 = (state_40882[(15)]);
var inst_40856 = (state_40882[(16)]);
var inst_40856__$1 = cljs.core.empty_QMARK_.call(null,inst_40827);
var state_40882__$1 = (function (){var statearr_40893 = state_40882;
(statearr_40893[(16)] = inst_40856__$1);

return statearr_40893;
})();
if(inst_40856__$1){
var statearr_40894_40933 = state_40882__$1;
(statearr_40894_40933[(1)] = (17));

} else {
var statearr_40895_40934 = state_40882__$1;
(statearr_40895_40934[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (21))){
var inst_40826 = (state_40882[(12)]);
var inst_40823 = inst_40826;
var state_40882__$1 = (function (){var statearr_40896 = state_40882;
(statearr_40896[(10)] = inst_40823);

return statearr_40896;
})();
var statearr_40897_40935 = state_40882__$1;
(statearr_40897_40935[(2)] = null);

(statearr_40897_40935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (13))){
var inst_40849 = (state_40882[(2)]);
var inst_40850 = calc_state.call(null);
var inst_40823 = inst_40850;
var state_40882__$1 = (function (){var statearr_40898 = state_40882;
(statearr_40898[(17)] = inst_40849);

(statearr_40898[(10)] = inst_40823);

return statearr_40898;
})();
var statearr_40899_40936 = state_40882__$1;
(statearr_40899_40936[(2)] = null);

(statearr_40899_40936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (22))){
var inst_40876 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
var statearr_40900_40937 = state_40882__$1;
(statearr_40900_40937[(2)] = inst_40876);

(statearr_40900_40937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (6))){
var inst_40836 = (state_40882[(14)]);
var inst_40840 = cljs.core._EQ_.call(null,inst_40836,change);
var state_40882__$1 = state_40882;
var statearr_40901_40938 = state_40882__$1;
(statearr_40901_40938[(2)] = inst_40840);

(statearr_40901_40938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (25))){
var state_40882__$1 = state_40882;
var statearr_40902_40939 = state_40882__$1;
(statearr_40902_40939[(2)] = null);

(statearr_40902_40939[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (17))){
var inst_40836 = (state_40882[(14)]);
var inst_40828 = (state_40882[(18)]);
var inst_40858 = inst_40828.call(null,inst_40836);
var inst_40859 = cljs.core.not.call(null,inst_40858);
var state_40882__$1 = state_40882;
var statearr_40903_40940 = state_40882__$1;
(statearr_40903_40940[(2)] = inst_40859);

(statearr_40903_40940[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (3))){
var inst_40880 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40882__$1,inst_40880);
} else {
if((state_val_40883 === (12))){
var state_40882__$1 = state_40882;
var statearr_40904_40941 = state_40882__$1;
(statearr_40904_40941[(2)] = null);

(statearr_40904_40941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (2))){
var inst_40826 = (state_40882[(12)]);
var inst_40823 = (state_40882[(10)]);
var inst_40826__$1 = cljs.core.__destructure_map.call(null,inst_40823);
var inst_40827 = cljs.core.get.call(null,inst_40826__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40828 = cljs.core.get.call(null,inst_40826__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40829 = cljs.core.get.call(null,inst_40826__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40882__$1 = (function (){var statearr_40905 = state_40882;
(statearr_40905[(12)] = inst_40826__$1);

(statearr_40905[(18)] = inst_40828);

(statearr_40905[(15)] = inst_40827);

return statearr_40905;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40882__$1,(4),inst_40829);
} else {
if((state_val_40883 === (23))){
var inst_40867 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
if(cljs.core.truth_(inst_40867)){
var statearr_40906_40942 = state_40882__$1;
(statearr_40906_40942[(1)] = (24));

} else {
var statearr_40907_40943 = state_40882__$1;
(statearr_40907_40943[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (19))){
var inst_40862 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
var statearr_40908_40944 = state_40882__$1;
(statearr_40908_40944[(2)] = inst_40862);

(statearr_40908_40944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (11))){
var inst_40836 = (state_40882[(14)]);
var inst_40846 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40836);
var state_40882__$1 = state_40882;
var statearr_40909_40945 = state_40882__$1;
(statearr_40909_40945[(2)] = inst_40846);

(statearr_40909_40945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (9))){
var inst_40836 = (state_40882[(14)]);
var inst_40853 = (state_40882[(19)]);
var inst_40827 = (state_40882[(15)]);
var inst_40853__$1 = inst_40827.call(null,inst_40836);
var state_40882__$1 = (function (){var statearr_40910 = state_40882;
(statearr_40910[(19)] = inst_40853__$1);

return statearr_40910;
})();
if(cljs.core.truth_(inst_40853__$1)){
var statearr_40911_40946 = state_40882__$1;
(statearr_40911_40946[(1)] = (14));

} else {
var statearr_40912_40947 = state_40882__$1;
(statearr_40912_40947[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (5))){
var inst_40837 = (state_40882[(13)]);
var state_40882__$1 = state_40882;
var statearr_40913_40948 = state_40882__$1;
(statearr_40913_40948[(2)] = inst_40837);

(statearr_40913_40948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (14))){
var inst_40853 = (state_40882[(19)]);
var state_40882__$1 = state_40882;
var statearr_40914_40949 = state_40882__$1;
(statearr_40914_40949[(2)] = inst_40853);

(statearr_40914_40949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (26))){
var inst_40872 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
var statearr_40915_40950 = state_40882__$1;
(statearr_40915_40950[(2)] = inst_40872);

(statearr_40915_40950[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (16))){
var inst_40864 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
if(cljs.core.truth_(inst_40864)){
var statearr_40916_40951 = state_40882__$1;
(statearr_40916_40951[(1)] = (20));

} else {
var statearr_40917_40952 = state_40882__$1;
(statearr_40917_40952[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (10))){
var inst_40878 = (state_40882[(2)]);
var state_40882__$1 = state_40882;
var statearr_40918_40953 = state_40882__$1;
(statearr_40918_40953[(2)] = inst_40878);

(statearr_40918_40953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (18))){
var inst_40856 = (state_40882[(16)]);
var state_40882__$1 = state_40882;
var statearr_40919_40954 = state_40882__$1;
(statearr_40919_40954[(2)] = inst_40856);

(statearr_40919_40954[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40883 === (8))){
var inst_40835 = (state_40882[(7)]);
var inst_40844 = (inst_40835 == null);
var state_40882__$1 = state_40882;
if(cljs.core.truth_(inst_40844)){
var statearr_40920_40955 = state_40882__$1;
(statearr_40920_40955[(1)] = (11));

} else {
var statearr_40921_40956 = state_40882__$1;
(statearr_40921_40956[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__39814__auto__ = null;
var cljs$core$async$mix_$_state_machine__39814__auto____0 = (function (){
var statearr_40922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40922[(0)] = cljs$core$async$mix_$_state_machine__39814__auto__);

(statearr_40922[(1)] = (1));

return statearr_40922;
});
var cljs$core$async$mix_$_state_machine__39814__auto____1 = (function (state_40882){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_40882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e40923){if((e40923 instanceof Object)){
var ex__39817__auto__ = e40923;
var statearr_40924_40957 = state_40882;
(statearr_40924_40957[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40958 = state_40882;
state_40882 = G__40958;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39814__auto__ = function(state_40882){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39814__auto____1.call(this,state_40882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39814__auto____0;
cljs$core$async$mix_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39814__auto____1;
return cljs$core$async$mix_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_40925 = f__39911__auto__.call(null);
(statearr_40925[(6)] = c__39910__auto___40926);

return statearr_40925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_40961 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40961.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40962 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40962.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40963 = (function() {
var G__40964 = null;
var G__40964__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__40964__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__40964 = function(p,v){
switch(arguments.length){
case 1:
return G__40964__1.call(this,p);
case 2:
return G__40964__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40964.cljs$core$IFn$_invoke$arity$1 = G__40964__1;
G__40964.cljs$core$IFn$_invoke$arity$2 = G__40964__2;
return G__40964;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40960 = arguments.length;
switch (G__40960) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40963.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40963.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__40968 = arguments.length;
switch (G__40968) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__40966_SHARP_){
if(cljs.core.truth_(p1__40966_SHARP_.call(null,topic))){
return p1__40966_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40966_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40969 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40970){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40970 = meta40970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40971,meta40970__$1){
var self__ = this;
var _40971__$1 = this;
return (new cljs.core.async.t_cljs$core$async40969(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40970__$1));
}));

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40971){
var self__ = this;
var _40971__$1 = this;
return self__.meta40970;
}));

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5818__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5818__auto__)){
var m = temp__5818__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40970","meta40970",1693698298,null)], null);
}));

(cljs.core.async.t_cljs$core$async40969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40969");

(cljs.core.async.t_cljs$core$async40969.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async40969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40969.
 */
cljs.core.async.__GT_t_cljs$core$async40969 = (function cljs$core$async$__GT_t_cljs$core$async40969(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40970){
return (new cljs.core.async.t_cljs$core$async40969(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40970));
});

}

return (new cljs.core.async.t_cljs$core$async40969(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39910__auto___41089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41043){
var state_val_41044 = (state_41043[(1)]);
if((state_val_41044 === (7))){
var inst_41039 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41045_41090 = state_41043__$1;
(statearr_41045_41090[(2)] = inst_41039);

(statearr_41045_41090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (20))){
var state_41043__$1 = state_41043;
var statearr_41046_41091 = state_41043__$1;
(statearr_41046_41091[(2)] = null);

(statearr_41046_41091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (1))){
var state_41043__$1 = state_41043;
var statearr_41047_41092 = state_41043__$1;
(statearr_41047_41092[(2)] = null);

(statearr_41047_41092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (24))){
var inst_41022 = (state_41043[(7)]);
var inst_41031 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41022);
var state_41043__$1 = state_41043;
var statearr_41048_41093 = state_41043__$1;
(statearr_41048_41093[(2)] = inst_41031);

(statearr_41048_41093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (4))){
var inst_40974 = (state_41043[(8)]);
var inst_40974__$1 = (state_41043[(2)]);
var inst_40975 = (inst_40974__$1 == null);
var state_41043__$1 = (function (){var statearr_41049 = state_41043;
(statearr_41049[(8)] = inst_40974__$1);

return statearr_41049;
})();
if(cljs.core.truth_(inst_40975)){
var statearr_41050_41094 = state_41043__$1;
(statearr_41050_41094[(1)] = (5));

} else {
var statearr_41051_41095 = state_41043__$1;
(statearr_41051_41095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (15))){
var inst_41016 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41052_41096 = state_41043__$1;
(statearr_41052_41096[(2)] = inst_41016);

(statearr_41052_41096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (21))){
var inst_41036 = (state_41043[(2)]);
var state_41043__$1 = (function (){var statearr_41053 = state_41043;
(statearr_41053[(9)] = inst_41036);

return statearr_41053;
})();
var statearr_41054_41097 = state_41043__$1;
(statearr_41054_41097[(2)] = null);

(statearr_41054_41097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (13))){
var inst_40998 = (state_41043[(10)]);
var inst_41000 = cljs.core.chunked_seq_QMARK_.call(null,inst_40998);
var state_41043__$1 = state_41043;
if(inst_41000){
var statearr_41055_41098 = state_41043__$1;
(statearr_41055_41098[(1)] = (16));

} else {
var statearr_41056_41099 = state_41043__$1;
(statearr_41056_41099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (22))){
var inst_41028 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
if(cljs.core.truth_(inst_41028)){
var statearr_41057_41100 = state_41043__$1;
(statearr_41057_41100[(1)] = (23));

} else {
var statearr_41058_41101 = state_41043__$1;
(statearr_41058_41101[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (6))){
var inst_41024 = (state_41043[(11)]);
var inst_40974 = (state_41043[(8)]);
var inst_41022 = (state_41043[(7)]);
var inst_41022__$1 = topic_fn.call(null,inst_40974);
var inst_41023 = cljs.core.deref.call(null,mults);
var inst_41024__$1 = cljs.core.get.call(null,inst_41023,inst_41022__$1);
var state_41043__$1 = (function (){var statearr_41059 = state_41043;
(statearr_41059[(11)] = inst_41024__$1);

(statearr_41059[(7)] = inst_41022__$1);

return statearr_41059;
})();
if(cljs.core.truth_(inst_41024__$1)){
var statearr_41060_41102 = state_41043__$1;
(statearr_41060_41102[(1)] = (19));

} else {
var statearr_41061_41103 = state_41043__$1;
(statearr_41061_41103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (25))){
var inst_41033 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41062_41104 = state_41043__$1;
(statearr_41062_41104[(2)] = inst_41033);

(statearr_41062_41104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (17))){
var inst_40998 = (state_41043[(10)]);
var inst_41007 = cljs.core.first.call(null,inst_40998);
var inst_41008 = cljs.core.async.muxch_STAR_.call(null,inst_41007);
var inst_41009 = cljs.core.async.close_BANG_.call(null,inst_41008);
var inst_41010 = cljs.core.next.call(null,inst_40998);
var inst_40984 = inst_41010;
var inst_40985 = null;
var inst_40986 = (0);
var inst_40987 = (0);
var state_41043__$1 = (function (){var statearr_41063 = state_41043;
(statearr_41063[(12)] = inst_41009);

(statearr_41063[(13)] = inst_40986);

(statearr_41063[(14)] = inst_40984);

(statearr_41063[(15)] = inst_40985);

(statearr_41063[(16)] = inst_40987);

return statearr_41063;
})();
var statearr_41064_41105 = state_41043__$1;
(statearr_41064_41105[(2)] = null);

(statearr_41064_41105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (3))){
var inst_41041 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41043__$1,inst_41041);
} else {
if((state_val_41044 === (12))){
var inst_41018 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41065_41106 = state_41043__$1;
(statearr_41065_41106[(2)] = inst_41018);

(statearr_41065_41106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (2))){
var state_41043__$1 = state_41043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41043__$1,(4),ch);
} else {
if((state_val_41044 === (23))){
var state_41043__$1 = state_41043;
var statearr_41066_41107 = state_41043__$1;
(statearr_41066_41107[(2)] = null);

(statearr_41066_41107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (19))){
var inst_41024 = (state_41043[(11)]);
var inst_40974 = (state_41043[(8)]);
var inst_41026 = cljs.core.async.muxch_STAR_.call(null,inst_41024);
var state_41043__$1 = state_41043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41043__$1,(22),inst_41026,inst_40974);
} else {
if((state_val_41044 === (11))){
var inst_40984 = (state_41043[(14)]);
var inst_40998 = (state_41043[(10)]);
var inst_40998__$1 = cljs.core.seq.call(null,inst_40984);
var state_41043__$1 = (function (){var statearr_41067 = state_41043;
(statearr_41067[(10)] = inst_40998__$1);

return statearr_41067;
})();
if(inst_40998__$1){
var statearr_41068_41108 = state_41043__$1;
(statearr_41068_41108[(1)] = (13));

} else {
var statearr_41069_41109 = state_41043__$1;
(statearr_41069_41109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (9))){
var inst_41020 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41070_41110 = state_41043__$1;
(statearr_41070_41110[(2)] = inst_41020);

(statearr_41070_41110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (5))){
var inst_40981 = cljs.core.deref.call(null,mults);
var inst_40982 = cljs.core.vals.call(null,inst_40981);
var inst_40983 = cljs.core.seq.call(null,inst_40982);
var inst_40984 = inst_40983;
var inst_40985 = null;
var inst_40986 = (0);
var inst_40987 = (0);
var state_41043__$1 = (function (){var statearr_41071 = state_41043;
(statearr_41071[(13)] = inst_40986);

(statearr_41071[(14)] = inst_40984);

(statearr_41071[(15)] = inst_40985);

(statearr_41071[(16)] = inst_40987);

return statearr_41071;
})();
var statearr_41072_41111 = state_41043__$1;
(statearr_41072_41111[(2)] = null);

(statearr_41072_41111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (14))){
var state_41043__$1 = state_41043;
var statearr_41076_41112 = state_41043__$1;
(statearr_41076_41112[(2)] = null);

(statearr_41076_41112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (16))){
var inst_40998 = (state_41043[(10)]);
var inst_41002 = cljs.core.chunk_first.call(null,inst_40998);
var inst_41003 = cljs.core.chunk_rest.call(null,inst_40998);
var inst_41004 = cljs.core.count.call(null,inst_41002);
var inst_40984 = inst_41003;
var inst_40985 = inst_41002;
var inst_40986 = inst_41004;
var inst_40987 = (0);
var state_41043__$1 = (function (){var statearr_41077 = state_41043;
(statearr_41077[(13)] = inst_40986);

(statearr_41077[(14)] = inst_40984);

(statearr_41077[(15)] = inst_40985);

(statearr_41077[(16)] = inst_40987);

return statearr_41077;
})();
var statearr_41078_41113 = state_41043__$1;
(statearr_41078_41113[(2)] = null);

(statearr_41078_41113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (10))){
var inst_40986 = (state_41043[(13)]);
var inst_40984 = (state_41043[(14)]);
var inst_40985 = (state_41043[(15)]);
var inst_40987 = (state_41043[(16)]);
var inst_40992 = cljs.core._nth.call(null,inst_40985,inst_40987);
var inst_40993 = cljs.core.async.muxch_STAR_.call(null,inst_40992);
var inst_40994 = cljs.core.async.close_BANG_.call(null,inst_40993);
var inst_40995 = (inst_40987 + (1));
var tmp41073 = inst_40986;
var tmp41074 = inst_40984;
var tmp41075 = inst_40985;
var inst_40984__$1 = tmp41074;
var inst_40985__$1 = tmp41075;
var inst_40986__$1 = tmp41073;
var inst_40987__$1 = inst_40995;
var state_41043__$1 = (function (){var statearr_41079 = state_41043;
(statearr_41079[(13)] = inst_40986__$1);

(statearr_41079[(14)] = inst_40984__$1);

(statearr_41079[(15)] = inst_40985__$1);

(statearr_41079[(17)] = inst_40994);

(statearr_41079[(16)] = inst_40987__$1);

return statearr_41079;
})();
var statearr_41080_41114 = state_41043__$1;
(statearr_41080_41114[(2)] = null);

(statearr_41080_41114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (18))){
var inst_41013 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41081_41115 = state_41043__$1;
(statearr_41081_41115[(2)] = inst_41013);

(statearr_41081_41115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (8))){
var inst_40986 = (state_41043[(13)]);
var inst_40987 = (state_41043[(16)]);
var inst_40989 = (inst_40987 < inst_40986);
var inst_40990 = inst_40989;
var state_41043__$1 = state_41043;
if(cljs.core.truth_(inst_40990)){
var statearr_41082_41116 = state_41043__$1;
(statearr_41082_41116[(1)] = (10));

} else {
var statearr_41083_41117 = state_41043__$1;
(statearr_41083_41117[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41084[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41084[(1)] = (1));

return statearr_41084;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41043){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41085){if((e41085 instanceof Object)){
var ex__39817__auto__ = e41085;
var statearr_41086_41118 = state_41043;
(statearr_41086_41118[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41119 = state_41043;
state_41043 = G__41119;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41087 = f__39911__auto__.call(null);
(statearr_41087[(6)] = c__39910__auto___41089);

return statearr_41087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41121 = arguments.length;
switch (G__41121) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__41124 = arguments.length;
switch (G__41124) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__41127 = arguments.length;
switch (G__41127) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__39910__auto___41194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41166){
var state_val_41167 = (state_41166[(1)]);
if((state_val_41167 === (7))){
var state_41166__$1 = state_41166;
var statearr_41168_41195 = state_41166__$1;
(statearr_41168_41195[(2)] = null);

(statearr_41168_41195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (1))){
var state_41166__$1 = state_41166;
var statearr_41169_41196 = state_41166__$1;
(statearr_41169_41196[(2)] = null);

(statearr_41169_41196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (4))){
var inst_41130 = (state_41166[(7)]);
var inst_41132 = (inst_41130 < cnt);
var state_41166__$1 = state_41166;
if(cljs.core.truth_(inst_41132)){
var statearr_41170_41197 = state_41166__$1;
(statearr_41170_41197[(1)] = (6));

} else {
var statearr_41171_41198 = state_41166__$1;
(statearr_41171_41198[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (15))){
var inst_41162 = (state_41166[(2)]);
var state_41166__$1 = state_41166;
var statearr_41172_41199 = state_41166__$1;
(statearr_41172_41199[(2)] = inst_41162);

(statearr_41172_41199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (13))){
var inst_41155 = cljs.core.async.close_BANG_.call(null,out);
var state_41166__$1 = state_41166;
var statearr_41173_41200 = state_41166__$1;
(statearr_41173_41200[(2)] = inst_41155);

(statearr_41173_41200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (6))){
var state_41166__$1 = state_41166;
var statearr_41174_41201 = state_41166__$1;
(statearr_41174_41201[(2)] = null);

(statearr_41174_41201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (3))){
var inst_41164 = (state_41166[(2)]);
var state_41166__$1 = state_41166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41166__$1,inst_41164);
} else {
if((state_val_41167 === (12))){
var inst_41152 = (state_41166[(8)]);
var inst_41152__$1 = (state_41166[(2)]);
var inst_41153 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41152__$1);
var state_41166__$1 = (function (){var statearr_41175 = state_41166;
(statearr_41175[(8)] = inst_41152__$1);

return statearr_41175;
})();
if(cljs.core.truth_(inst_41153)){
var statearr_41176_41202 = state_41166__$1;
(statearr_41176_41202[(1)] = (13));

} else {
var statearr_41177_41203 = state_41166__$1;
(statearr_41177_41203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (2))){
var inst_41129 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41130 = (0);
var state_41166__$1 = (function (){var statearr_41178 = state_41166;
(statearr_41178[(9)] = inst_41129);

(statearr_41178[(7)] = inst_41130);

return statearr_41178;
})();
var statearr_41179_41204 = state_41166__$1;
(statearr_41179_41204[(2)] = null);

(statearr_41179_41204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (11))){
var inst_41130 = (state_41166[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41166,(10),Object,null,(9));
var inst_41139 = chs__$1.call(null,inst_41130);
var inst_41140 = done.call(null,inst_41130);
var inst_41141 = cljs.core.async.take_BANG_.call(null,inst_41139,inst_41140);
var state_41166__$1 = state_41166;
var statearr_41180_41205 = state_41166__$1;
(statearr_41180_41205[(2)] = inst_41141);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41166__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (9))){
var inst_41130 = (state_41166[(7)]);
var inst_41143 = (state_41166[(2)]);
var inst_41144 = (inst_41130 + (1));
var inst_41130__$1 = inst_41144;
var state_41166__$1 = (function (){var statearr_41181 = state_41166;
(statearr_41181[(10)] = inst_41143);

(statearr_41181[(7)] = inst_41130__$1);

return statearr_41181;
})();
var statearr_41182_41206 = state_41166__$1;
(statearr_41182_41206[(2)] = null);

(statearr_41182_41206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (5))){
var inst_41150 = (state_41166[(2)]);
var state_41166__$1 = (function (){var statearr_41183 = state_41166;
(statearr_41183[(11)] = inst_41150);

return statearr_41183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41166__$1,(12),dchan);
} else {
if((state_val_41167 === (14))){
var inst_41152 = (state_41166[(8)]);
var inst_41157 = cljs.core.apply.call(null,f,inst_41152);
var state_41166__$1 = state_41166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41166__$1,(16),out,inst_41157);
} else {
if((state_val_41167 === (16))){
var inst_41159 = (state_41166[(2)]);
var state_41166__$1 = (function (){var statearr_41184 = state_41166;
(statearr_41184[(12)] = inst_41159);

return statearr_41184;
})();
var statearr_41185_41207 = state_41166__$1;
(statearr_41185_41207[(2)] = null);

(statearr_41185_41207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (10))){
var inst_41134 = (state_41166[(2)]);
var inst_41135 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41166__$1 = (function (){var statearr_41186 = state_41166;
(statearr_41186[(13)] = inst_41134);

return statearr_41186;
})();
var statearr_41187_41208 = state_41166__$1;
(statearr_41187_41208[(2)] = inst_41135);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41166__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (8))){
var inst_41148 = (state_41166[(2)]);
var state_41166__$1 = state_41166;
var statearr_41188_41209 = state_41166__$1;
(statearr_41188_41209[(2)] = inst_41148);

(statearr_41188_41209[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41189[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41189[(1)] = (1));

return statearr_41189;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41166){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41190){if((e41190 instanceof Object)){
var ex__39817__auto__ = e41190;
var statearr_41191_41210 = state_41166;
(statearr_41191_41210[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41211 = state_41166;
state_41166 = G__41211;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41192 = f__39911__auto__.call(null);
(statearr_41192[(6)] = c__39910__auto___41194);

return statearr_41192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41214 = arguments.length;
switch (G__41214) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39910__auto___41268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41246){
var state_val_41247 = (state_41246[(1)]);
if((state_val_41247 === (7))){
var inst_41225 = (state_41246[(7)]);
var inst_41226 = (state_41246[(8)]);
var inst_41225__$1 = (state_41246[(2)]);
var inst_41226__$1 = cljs.core.nth.call(null,inst_41225__$1,(0),null);
var inst_41227 = cljs.core.nth.call(null,inst_41225__$1,(1),null);
var inst_41228 = (inst_41226__$1 == null);
var state_41246__$1 = (function (){var statearr_41248 = state_41246;
(statearr_41248[(9)] = inst_41227);

(statearr_41248[(7)] = inst_41225__$1);

(statearr_41248[(8)] = inst_41226__$1);

return statearr_41248;
})();
if(cljs.core.truth_(inst_41228)){
var statearr_41249_41269 = state_41246__$1;
(statearr_41249_41269[(1)] = (8));

} else {
var statearr_41250_41270 = state_41246__$1;
(statearr_41250_41270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (1))){
var inst_41215 = cljs.core.vec.call(null,chs);
var inst_41216 = inst_41215;
var state_41246__$1 = (function (){var statearr_41251 = state_41246;
(statearr_41251[(10)] = inst_41216);

return statearr_41251;
})();
var statearr_41252_41271 = state_41246__$1;
(statearr_41252_41271[(2)] = null);

(statearr_41252_41271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (4))){
var inst_41216 = (state_41246[(10)]);
var state_41246__$1 = state_41246;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41246__$1,(7),inst_41216);
} else {
if((state_val_41247 === (6))){
var inst_41242 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41253_41272 = state_41246__$1;
(statearr_41253_41272[(2)] = inst_41242);

(statearr_41253_41272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (3))){
var inst_41244 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41246__$1,inst_41244);
} else {
if((state_val_41247 === (2))){
var inst_41216 = (state_41246[(10)]);
var inst_41218 = cljs.core.count.call(null,inst_41216);
var inst_41219 = (inst_41218 > (0));
var state_41246__$1 = state_41246;
if(cljs.core.truth_(inst_41219)){
var statearr_41255_41273 = state_41246__$1;
(statearr_41255_41273[(1)] = (4));

} else {
var statearr_41256_41274 = state_41246__$1;
(statearr_41256_41274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (11))){
var inst_41216 = (state_41246[(10)]);
var inst_41235 = (state_41246[(2)]);
var tmp41254 = inst_41216;
var inst_41216__$1 = tmp41254;
var state_41246__$1 = (function (){var statearr_41257 = state_41246;
(statearr_41257[(10)] = inst_41216__$1);

(statearr_41257[(11)] = inst_41235);

return statearr_41257;
})();
var statearr_41258_41275 = state_41246__$1;
(statearr_41258_41275[(2)] = null);

(statearr_41258_41275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (9))){
var inst_41226 = (state_41246[(8)]);
var state_41246__$1 = state_41246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41246__$1,(11),out,inst_41226);
} else {
if((state_val_41247 === (5))){
var inst_41240 = cljs.core.async.close_BANG_.call(null,out);
var state_41246__$1 = state_41246;
var statearr_41259_41276 = state_41246__$1;
(statearr_41259_41276[(2)] = inst_41240);

(statearr_41259_41276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (10))){
var inst_41238 = (state_41246[(2)]);
var state_41246__$1 = state_41246;
var statearr_41260_41277 = state_41246__$1;
(statearr_41260_41277[(2)] = inst_41238);

(statearr_41260_41277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41247 === (8))){
var inst_41227 = (state_41246[(9)]);
var inst_41216 = (state_41246[(10)]);
var inst_41225 = (state_41246[(7)]);
var inst_41226 = (state_41246[(8)]);
var inst_41230 = (function (){var cs = inst_41216;
var vec__41221 = inst_41225;
var v = inst_41226;
var c = inst_41227;
return (function (p1__41212_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41212_SHARP_);
});
})();
var inst_41231 = cljs.core.filterv.call(null,inst_41230,inst_41216);
var inst_41216__$1 = inst_41231;
var state_41246__$1 = (function (){var statearr_41261 = state_41246;
(statearr_41261[(10)] = inst_41216__$1);

return statearr_41261;
})();
var statearr_41262_41278 = state_41246__$1;
(statearr_41262_41278[(2)] = null);

(statearr_41262_41278[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41263[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41263[(1)] = (1));

return statearr_41263;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41246){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41264){if((e41264 instanceof Object)){
var ex__39817__auto__ = e41264;
var statearr_41265_41279 = state_41246;
(statearr_41265_41279[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41280 = state_41246;
state_41246 = G__41280;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41266 = f__39911__auto__.call(null);
(statearr_41266[(6)] = c__39910__auto___41268);

return statearr_41266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__41282 = arguments.length;
switch (G__41282) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39910__auto___41327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41306){
var state_val_41307 = (state_41306[(1)]);
if((state_val_41307 === (7))){
var inst_41288 = (state_41306[(7)]);
var inst_41288__$1 = (state_41306[(2)]);
var inst_41289 = (inst_41288__$1 == null);
var inst_41290 = cljs.core.not.call(null,inst_41289);
var state_41306__$1 = (function (){var statearr_41308 = state_41306;
(statearr_41308[(7)] = inst_41288__$1);

return statearr_41308;
})();
if(inst_41290){
var statearr_41309_41328 = state_41306__$1;
(statearr_41309_41328[(1)] = (8));

} else {
var statearr_41310_41329 = state_41306__$1;
(statearr_41310_41329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (1))){
var inst_41283 = (0);
var state_41306__$1 = (function (){var statearr_41311 = state_41306;
(statearr_41311[(8)] = inst_41283);

return statearr_41311;
})();
var statearr_41312_41330 = state_41306__$1;
(statearr_41312_41330[(2)] = null);

(statearr_41312_41330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (4))){
var state_41306__$1 = state_41306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41306__$1,(7),ch);
} else {
if((state_val_41307 === (6))){
var inst_41301 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
var statearr_41313_41331 = state_41306__$1;
(statearr_41313_41331[(2)] = inst_41301);

(statearr_41313_41331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (3))){
var inst_41303 = (state_41306[(2)]);
var inst_41304 = cljs.core.async.close_BANG_.call(null,out);
var state_41306__$1 = (function (){var statearr_41314 = state_41306;
(statearr_41314[(9)] = inst_41303);

return statearr_41314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41306__$1,inst_41304);
} else {
if((state_val_41307 === (2))){
var inst_41283 = (state_41306[(8)]);
var inst_41285 = (inst_41283 < n);
var state_41306__$1 = state_41306;
if(cljs.core.truth_(inst_41285)){
var statearr_41315_41332 = state_41306__$1;
(statearr_41315_41332[(1)] = (4));

} else {
var statearr_41316_41333 = state_41306__$1;
(statearr_41316_41333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (11))){
var inst_41283 = (state_41306[(8)]);
var inst_41293 = (state_41306[(2)]);
var inst_41294 = (inst_41283 + (1));
var inst_41283__$1 = inst_41294;
var state_41306__$1 = (function (){var statearr_41317 = state_41306;
(statearr_41317[(10)] = inst_41293);

(statearr_41317[(8)] = inst_41283__$1);

return statearr_41317;
})();
var statearr_41318_41334 = state_41306__$1;
(statearr_41318_41334[(2)] = null);

(statearr_41318_41334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (9))){
var state_41306__$1 = state_41306;
var statearr_41319_41335 = state_41306__$1;
(statearr_41319_41335[(2)] = null);

(statearr_41319_41335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (5))){
var state_41306__$1 = state_41306;
var statearr_41320_41336 = state_41306__$1;
(statearr_41320_41336[(2)] = null);

(statearr_41320_41336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (10))){
var inst_41298 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
var statearr_41321_41337 = state_41306__$1;
(statearr_41321_41337[(2)] = inst_41298);

(statearr_41321_41337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (8))){
var inst_41288 = (state_41306[(7)]);
var state_41306__$1 = state_41306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41306__$1,(11),out,inst_41288);
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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41322[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41322[(1)] = (1));

return statearr_41322;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41306){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41323){if((e41323 instanceof Object)){
var ex__39817__auto__ = e41323;
var statearr_41324_41338 = state_41306;
(statearr_41324_41338[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41339 = state_41306;
state_41306 = G__41339;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41325 = f__39911__auto__.call(null);
(statearr_41325[(6)] = c__39910__auto___41327);

return statearr_41325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41341 = (function (f,ch,meta41342){
this.f = f;
this.ch = ch;
this.meta41342 = meta41342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41343,meta41342__$1){
var self__ = this;
var _41343__$1 = this;
return (new cljs.core.async.t_cljs$core$async41341(self__.f,self__.ch,meta41342__$1));
}));

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41343){
var self__ = this;
var _41343__$1 = this;
return self__.meta41342;
}));

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41344 = (function (f,ch,meta41342,_,fn1,meta41345){
this.f = f;
this.ch = ch;
this.meta41342 = meta41342;
this._ = _;
this.fn1 = fn1;
this.meta41345 = meta41345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41346,meta41345__$1){
var self__ = this;
var _41346__$1 = this;
return (new cljs.core.async.t_cljs$core$async41344(self__.f,self__.ch,self__.meta41342,self__._,self__.fn1,meta41345__$1));
}));

(cljs.core.async.t_cljs$core$async41344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41346){
var self__ = this;
var _41346__$1 = this;
return self__.meta41345;
}));

(cljs.core.async.t_cljs$core$async41344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__41340_SHARP_){
return f1.call(null,(((p1__41340_SHARP_ == null))?null:self__.f.call(null,p1__41340_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async41344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41342","meta41342",-2053411391,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41341","cljs.core.async/t_cljs$core$async41341",1420417214,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41345","meta41345",-382639001,null)], null);
}));

(cljs.core.async.t_cljs$core$async41344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41344");

(cljs.core.async.t_cljs$core$async41344.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41344.
 */
cljs.core.async.__GT_t_cljs$core$async41344 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41344(f__$1,ch__$1,meta41342__$1,___$2,fn1__$1,meta41345){
return (new cljs.core.async.t_cljs$core$async41344(f__$1,ch__$1,meta41342__$1,___$2,fn1__$1,meta41345));
});

}

return (new cljs.core.async.t_cljs$core$async41344(self__.f,self__.ch,self__.meta41342,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41342","meta41342",-2053411391,null)], null);
}));

(cljs.core.async.t_cljs$core$async41341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41341");

(cljs.core.async.t_cljs$core$async41341.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41341.
 */
cljs.core.async.__GT_t_cljs$core$async41341 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41341(f__$1,ch__$1,meta41342){
return (new cljs.core.async.t_cljs$core$async41341(f__$1,ch__$1,meta41342));
});

}

return (new cljs.core.async.t_cljs$core$async41341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41347 = (function (f,ch,meta41348){
this.f = f;
this.ch = ch;
this.meta41348 = meta41348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41349,meta41348__$1){
var self__ = this;
var _41349__$1 = this;
return (new cljs.core.async.t_cljs$core$async41347(self__.f,self__.ch,meta41348__$1));
}));

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41349){
var self__ = this;
var _41349__$1 = this;
return self__.meta41348;
}));

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async41347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41348","meta41348",492905425,null)], null);
}));

(cljs.core.async.t_cljs$core$async41347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41347");

(cljs.core.async.t_cljs$core$async41347.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41347.
 */
cljs.core.async.__GT_t_cljs$core$async41347 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41347(f__$1,ch__$1,meta41348){
return (new cljs.core.async.t_cljs$core$async41347(f__$1,ch__$1,meta41348));
});

}

return (new cljs.core.async.t_cljs$core$async41347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41350 = (function (p,ch,meta41351){
this.p = p;
this.ch = ch;
this.meta41351 = meta41351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41352,meta41351__$1){
var self__ = this;
var _41352__$1 = this;
return (new cljs.core.async.t_cljs$core$async41350(self__.p,self__.ch,meta41351__$1));
}));

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41352){
var self__ = this;
var _41352__$1 = this;
return self__.meta41351;
}));

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41351","meta41351",1084611341,null)], null);
}));

(cljs.core.async.t_cljs$core$async41350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41350");

(cljs.core.async.t_cljs$core$async41350.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async41350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41350.
 */
cljs.core.async.__GT_t_cljs$core$async41350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41350(p__$1,ch__$1,meta41351){
return (new cljs.core.async.t_cljs$core$async41350(p__$1,ch__$1,meta41351));
});

}

return (new cljs.core.async.t_cljs$core$async41350(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41354 = arguments.length;
switch (G__41354) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39910__auto___41394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41375){
var state_val_41376 = (state_41375[(1)]);
if((state_val_41376 === (7))){
var inst_41371 = (state_41375[(2)]);
var state_41375__$1 = state_41375;
var statearr_41377_41395 = state_41375__$1;
(statearr_41377_41395[(2)] = inst_41371);

(statearr_41377_41395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (1))){
var state_41375__$1 = state_41375;
var statearr_41378_41396 = state_41375__$1;
(statearr_41378_41396[(2)] = null);

(statearr_41378_41396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (4))){
var inst_41357 = (state_41375[(7)]);
var inst_41357__$1 = (state_41375[(2)]);
var inst_41358 = (inst_41357__$1 == null);
var state_41375__$1 = (function (){var statearr_41379 = state_41375;
(statearr_41379[(7)] = inst_41357__$1);

return statearr_41379;
})();
if(cljs.core.truth_(inst_41358)){
var statearr_41380_41397 = state_41375__$1;
(statearr_41380_41397[(1)] = (5));

} else {
var statearr_41381_41398 = state_41375__$1;
(statearr_41381_41398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (6))){
var inst_41357 = (state_41375[(7)]);
var inst_41362 = p.call(null,inst_41357);
var state_41375__$1 = state_41375;
if(cljs.core.truth_(inst_41362)){
var statearr_41382_41399 = state_41375__$1;
(statearr_41382_41399[(1)] = (8));

} else {
var statearr_41383_41400 = state_41375__$1;
(statearr_41383_41400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (3))){
var inst_41373 = (state_41375[(2)]);
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41375__$1,inst_41373);
} else {
if((state_val_41376 === (2))){
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41375__$1,(4),ch);
} else {
if((state_val_41376 === (11))){
var inst_41365 = (state_41375[(2)]);
var state_41375__$1 = state_41375;
var statearr_41384_41401 = state_41375__$1;
(statearr_41384_41401[(2)] = inst_41365);

(statearr_41384_41401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (9))){
var state_41375__$1 = state_41375;
var statearr_41385_41402 = state_41375__$1;
(statearr_41385_41402[(2)] = null);

(statearr_41385_41402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (5))){
var inst_41360 = cljs.core.async.close_BANG_.call(null,out);
var state_41375__$1 = state_41375;
var statearr_41386_41403 = state_41375__$1;
(statearr_41386_41403[(2)] = inst_41360);

(statearr_41386_41403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (10))){
var inst_41368 = (state_41375[(2)]);
var state_41375__$1 = (function (){var statearr_41387 = state_41375;
(statearr_41387[(8)] = inst_41368);

return statearr_41387;
})();
var statearr_41388_41404 = state_41375__$1;
(statearr_41388_41404[(2)] = null);

(statearr_41388_41404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41376 === (8))){
var inst_41357 = (state_41375[(7)]);
var state_41375__$1 = state_41375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41375__$1,(11),out,inst_41357);
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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41389 = [null,null,null,null,null,null,null,null,null];
(statearr_41389[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41389[(1)] = (1));

return statearr_41389;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41375){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41390){if((e41390 instanceof Object)){
var ex__39817__auto__ = e41390;
var statearr_41391_41405 = state_41375;
(statearr_41391_41405[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41406 = state_41375;
state_41375 = G__41406;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41392 = f__39911__auto__.call(null);
(statearr_41392[(6)] = c__39910__auto___41394);

return statearr_41392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41408 = arguments.length;
switch (G__41408) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41471){
var state_val_41472 = (state_41471[(1)]);
if((state_val_41472 === (7))){
var inst_41467 = (state_41471[(2)]);
var state_41471__$1 = state_41471;
var statearr_41473_41511 = state_41471__$1;
(statearr_41473_41511[(2)] = inst_41467);

(statearr_41473_41511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (20))){
var inst_41437 = (state_41471[(7)]);
var inst_41448 = (state_41471[(2)]);
var inst_41449 = cljs.core.next.call(null,inst_41437);
var inst_41423 = inst_41449;
var inst_41424 = null;
var inst_41425 = (0);
var inst_41426 = (0);
var state_41471__$1 = (function (){var statearr_41474 = state_41471;
(statearr_41474[(8)] = inst_41424);

(statearr_41474[(9)] = inst_41448);

(statearr_41474[(10)] = inst_41423);

(statearr_41474[(11)] = inst_41425);

(statearr_41474[(12)] = inst_41426);

return statearr_41474;
})();
var statearr_41475_41512 = state_41471__$1;
(statearr_41475_41512[(2)] = null);

(statearr_41475_41512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (1))){
var state_41471__$1 = state_41471;
var statearr_41476_41513 = state_41471__$1;
(statearr_41476_41513[(2)] = null);

(statearr_41476_41513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (4))){
var inst_41412 = (state_41471[(13)]);
var inst_41412__$1 = (state_41471[(2)]);
var inst_41413 = (inst_41412__$1 == null);
var state_41471__$1 = (function (){var statearr_41477 = state_41471;
(statearr_41477[(13)] = inst_41412__$1);

return statearr_41477;
})();
if(cljs.core.truth_(inst_41413)){
var statearr_41478_41514 = state_41471__$1;
(statearr_41478_41514[(1)] = (5));

} else {
var statearr_41479_41515 = state_41471__$1;
(statearr_41479_41515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (15))){
var state_41471__$1 = state_41471;
var statearr_41483_41516 = state_41471__$1;
(statearr_41483_41516[(2)] = null);

(statearr_41483_41516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (21))){
var state_41471__$1 = state_41471;
var statearr_41484_41517 = state_41471__$1;
(statearr_41484_41517[(2)] = null);

(statearr_41484_41517[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (13))){
var inst_41424 = (state_41471[(8)]);
var inst_41423 = (state_41471[(10)]);
var inst_41425 = (state_41471[(11)]);
var inst_41426 = (state_41471[(12)]);
var inst_41433 = (state_41471[(2)]);
var inst_41434 = (inst_41426 + (1));
var tmp41480 = inst_41424;
var tmp41481 = inst_41423;
var tmp41482 = inst_41425;
var inst_41423__$1 = tmp41481;
var inst_41424__$1 = tmp41480;
var inst_41425__$1 = tmp41482;
var inst_41426__$1 = inst_41434;
var state_41471__$1 = (function (){var statearr_41485 = state_41471;
(statearr_41485[(8)] = inst_41424__$1);

(statearr_41485[(10)] = inst_41423__$1);

(statearr_41485[(11)] = inst_41425__$1);

(statearr_41485[(14)] = inst_41433);

(statearr_41485[(12)] = inst_41426__$1);

return statearr_41485;
})();
var statearr_41486_41518 = state_41471__$1;
(statearr_41486_41518[(2)] = null);

(statearr_41486_41518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (22))){
var state_41471__$1 = state_41471;
var statearr_41487_41519 = state_41471__$1;
(statearr_41487_41519[(2)] = null);

(statearr_41487_41519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (6))){
var inst_41412 = (state_41471[(13)]);
var inst_41421 = f.call(null,inst_41412);
var inst_41422 = cljs.core.seq.call(null,inst_41421);
var inst_41423 = inst_41422;
var inst_41424 = null;
var inst_41425 = (0);
var inst_41426 = (0);
var state_41471__$1 = (function (){var statearr_41488 = state_41471;
(statearr_41488[(8)] = inst_41424);

(statearr_41488[(10)] = inst_41423);

(statearr_41488[(11)] = inst_41425);

(statearr_41488[(12)] = inst_41426);

return statearr_41488;
})();
var statearr_41489_41520 = state_41471__$1;
(statearr_41489_41520[(2)] = null);

(statearr_41489_41520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (17))){
var inst_41437 = (state_41471[(7)]);
var inst_41441 = cljs.core.chunk_first.call(null,inst_41437);
var inst_41442 = cljs.core.chunk_rest.call(null,inst_41437);
var inst_41443 = cljs.core.count.call(null,inst_41441);
var inst_41423 = inst_41442;
var inst_41424 = inst_41441;
var inst_41425 = inst_41443;
var inst_41426 = (0);
var state_41471__$1 = (function (){var statearr_41490 = state_41471;
(statearr_41490[(8)] = inst_41424);

(statearr_41490[(10)] = inst_41423);

(statearr_41490[(11)] = inst_41425);

(statearr_41490[(12)] = inst_41426);

return statearr_41490;
})();
var statearr_41491_41521 = state_41471__$1;
(statearr_41491_41521[(2)] = null);

(statearr_41491_41521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (3))){
var inst_41469 = (state_41471[(2)]);
var state_41471__$1 = state_41471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41471__$1,inst_41469);
} else {
if((state_val_41472 === (12))){
var inst_41457 = (state_41471[(2)]);
var state_41471__$1 = state_41471;
var statearr_41492_41522 = state_41471__$1;
(statearr_41492_41522[(2)] = inst_41457);

(statearr_41492_41522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (2))){
var state_41471__$1 = state_41471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41471__$1,(4),in$);
} else {
if((state_val_41472 === (23))){
var inst_41465 = (state_41471[(2)]);
var state_41471__$1 = state_41471;
var statearr_41493_41523 = state_41471__$1;
(statearr_41493_41523[(2)] = inst_41465);

(statearr_41493_41523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (19))){
var inst_41452 = (state_41471[(2)]);
var state_41471__$1 = state_41471;
var statearr_41494_41524 = state_41471__$1;
(statearr_41494_41524[(2)] = inst_41452);

(statearr_41494_41524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (11))){
var inst_41423 = (state_41471[(10)]);
var inst_41437 = (state_41471[(7)]);
var inst_41437__$1 = cljs.core.seq.call(null,inst_41423);
var state_41471__$1 = (function (){var statearr_41495 = state_41471;
(statearr_41495[(7)] = inst_41437__$1);

return statearr_41495;
})();
if(inst_41437__$1){
var statearr_41496_41525 = state_41471__$1;
(statearr_41496_41525[(1)] = (14));

} else {
var statearr_41497_41526 = state_41471__$1;
(statearr_41497_41526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (9))){
var inst_41459 = (state_41471[(2)]);
var inst_41460 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41471__$1 = (function (){var statearr_41498 = state_41471;
(statearr_41498[(15)] = inst_41459);

return statearr_41498;
})();
if(cljs.core.truth_(inst_41460)){
var statearr_41499_41527 = state_41471__$1;
(statearr_41499_41527[(1)] = (21));

} else {
var statearr_41500_41528 = state_41471__$1;
(statearr_41500_41528[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (5))){
var inst_41415 = cljs.core.async.close_BANG_.call(null,out);
var state_41471__$1 = state_41471;
var statearr_41501_41529 = state_41471__$1;
(statearr_41501_41529[(2)] = inst_41415);

(statearr_41501_41529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (14))){
var inst_41437 = (state_41471[(7)]);
var inst_41439 = cljs.core.chunked_seq_QMARK_.call(null,inst_41437);
var state_41471__$1 = state_41471;
if(inst_41439){
var statearr_41502_41530 = state_41471__$1;
(statearr_41502_41530[(1)] = (17));

} else {
var statearr_41503_41531 = state_41471__$1;
(statearr_41503_41531[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (16))){
var inst_41455 = (state_41471[(2)]);
var state_41471__$1 = state_41471;
var statearr_41504_41532 = state_41471__$1;
(statearr_41504_41532[(2)] = inst_41455);

(statearr_41504_41532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41472 === (10))){
var inst_41424 = (state_41471[(8)]);
var inst_41426 = (state_41471[(12)]);
var inst_41431 = cljs.core._nth.call(null,inst_41424,inst_41426);
var state_41471__$1 = state_41471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41471__$1,(13),out,inst_41431);
} else {
if((state_val_41472 === (18))){
var inst_41437 = (state_41471[(7)]);
var inst_41446 = cljs.core.first.call(null,inst_41437);
var state_41471__$1 = state_41471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41471__$1,(20),out,inst_41446);
} else {
if((state_val_41472 === (8))){
var inst_41425 = (state_41471[(11)]);
var inst_41426 = (state_41471[(12)]);
var inst_41428 = (inst_41426 < inst_41425);
var inst_41429 = inst_41428;
var state_41471__$1 = state_41471;
if(cljs.core.truth_(inst_41429)){
var statearr_41505_41533 = state_41471__$1;
(statearr_41505_41533[(1)] = (10));

} else {
var statearr_41506_41534 = state_41471__$1;
(statearr_41506_41534[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39814__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39814__auto____0 = (function (){
var statearr_41507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41507[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39814__auto__);

(statearr_41507[(1)] = (1));

return statearr_41507;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39814__auto____1 = (function (state_41471){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41508){if((e41508 instanceof Object)){
var ex__39817__auto__ = e41508;
var statearr_41509_41535 = state_41471;
(statearr_41509_41535[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41536 = state_41471;
state_41471 = G__41536;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39814__auto__ = function(state_41471){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39814__auto____1.call(this,state_41471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39814__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39814__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41510 = f__39911__auto__.call(null);
(statearr_41510[(6)] = c__39910__auto__);

return statearr_41510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41538 = arguments.length;
switch (G__41538) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41541 = arguments.length;
switch (G__41541) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41544 = arguments.length;
switch (G__41544) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39910__auto___41591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41568){
var state_val_41569 = (state_41568[(1)]);
if((state_val_41569 === (7))){
var inst_41563 = (state_41568[(2)]);
var state_41568__$1 = state_41568;
var statearr_41570_41592 = state_41568__$1;
(statearr_41570_41592[(2)] = inst_41563);

(statearr_41570_41592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (1))){
var inst_41545 = null;
var state_41568__$1 = (function (){var statearr_41571 = state_41568;
(statearr_41571[(7)] = inst_41545);

return statearr_41571;
})();
var statearr_41572_41593 = state_41568__$1;
(statearr_41572_41593[(2)] = null);

(statearr_41572_41593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (4))){
var inst_41548 = (state_41568[(8)]);
var inst_41548__$1 = (state_41568[(2)]);
var inst_41549 = (inst_41548__$1 == null);
var inst_41550 = cljs.core.not.call(null,inst_41549);
var state_41568__$1 = (function (){var statearr_41573 = state_41568;
(statearr_41573[(8)] = inst_41548__$1);

return statearr_41573;
})();
if(inst_41550){
var statearr_41574_41594 = state_41568__$1;
(statearr_41574_41594[(1)] = (5));

} else {
var statearr_41575_41595 = state_41568__$1;
(statearr_41575_41595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (6))){
var state_41568__$1 = state_41568;
var statearr_41576_41596 = state_41568__$1;
(statearr_41576_41596[(2)] = null);

(statearr_41576_41596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (3))){
var inst_41565 = (state_41568[(2)]);
var inst_41566 = cljs.core.async.close_BANG_.call(null,out);
var state_41568__$1 = (function (){var statearr_41577 = state_41568;
(statearr_41577[(9)] = inst_41565);

return statearr_41577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41568__$1,inst_41566);
} else {
if((state_val_41569 === (2))){
var state_41568__$1 = state_41568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41568__$1,(4),ch);
} else {
if((state_val_41569 === (11))){
var inst_41548 = (state_41568[(8)]);
var inst_41557 = (state_41568[(2)]);
var inst_41545 = inst_41548;
var state_41568__$1 = (function (){var statearr_41578 = state_41568;
(statearr_41578[(7)] = inst_41545);

(statearr_41578[(10)] = inst_41557);

return statearr_41578;
})();
var statearr_41579_41597 = state_41568__$1;
(statearr_41579_41597[(2)] = null);

(statearr_41579_41597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (9))){
var inst_41548 = (state_41568[(8)]);
var state_41568__$1 = state_41568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41568__$1,(11),out,inst_41548);
} else {
if((state_val_41569 === (5))){
var inst_41545 = (state_41568[(7)]);
var inst_41548 = (state_41568[(8)]);
var inst_41552 = cljs.core._EQ_.call(null,inst_41548,inst_41545);
var state_41568__$1 = state_41568;
if(inst_41552){
var statearr_41581_41598 = state_41568__$1;
(statearr_41581_41598[(1)] = (8));

} else {
var statearr_41582_41599 = state_41568__$1;
(statearr_41582_41599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (10))){
var inst_41560 = (state_41568[(2)]);
var state_41568__$1 = state_41568;
var statearr_41583_41600 = state_41568__$1;
(statearr_41583_41600[(2)] = inst_41560);

(statearr_41583_41600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (8))){
var inst_41545 = (state_41568[(7)]);
var tmp41580 = inst_41545;
var inst_41545__$1 = tmp41580;
var state_41568__$1 = (function (){var statearr_41584 = state_41568;
(statearr_41584[(7)] = inst_41545__$1);

return statearr_41584;
})();
var statearr_41585_41601 = state_41568__$1;
(statearr_41585_41601[(2)] = null);

(statearr_41585_41601[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41586[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41586[(1)] = (1));

return statearr_41586;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41568){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41587){if((e41587 instanceof Object)){
var ex__39817__auto__ = e41587;
var statearr_41588_41602 = state_41568;
(statearr_41588_41602[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41603 = state_41568;
state_41568 = G__41603;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41589 = f__39911__auto__.call(null);
(statearr_41589[(6)] = c__39910__auto___41591);

return statearr_41589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41605 = arguments.length;
switch (G__41605) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39910__auto___41671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41643){
var state_val_41644 = (state_41643[(1)]);
if((state_val_41644 === (7))){
var inst_41639 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
var statearr_41645_41672 = state_41643__$1;
(statearr_41645_41672[(2)] = inst_41639);

(statearr_41645_41672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (1))){
var inst_41606 = (new Array(n));
var inst_41607 = inst_41606;
var inst_41608 = (0);
var state_41643__$1 = (function (){var statearr_41646 = state_41643;
(statearr_41646[(7)] = inst_41608);

(statearr_41646[(8)] = inst_41607);

return statearr_41646;
})();
var statearr_41647_41673 = state_41643__$1;
(statearr_41647_41673[(2)] = null);

(statearr_41647_41673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (4))){
var inst_41611 = (state_41643[(9)]);
var inst_41611__$1 = (state_41643[(2)]);
var inst_41612 = (inst_41611__$1 == null);
var inst_41613 = cljs.core.not.call(null,inst_41612);
var state_41643__$1 = (function (){var statearr_41648 = state_41643;
(statearr_41648[(9)] = inst_41611__$1);

return statearr_41648;
})();
if(inst_41613){
var statearr_41649_41674 = state_41643__$1;
(statearr_41649_41674[(1)] = (5));

} else {
var statearr_41650_41675 = state_41643__$1;
(statearr_41650_41675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (15))){
var inst_41633 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
var statearr_41651_41676 = state_41643__$1;
(statearr_41651_41676[(2)] = inst_41633);

(statearr_41651_41676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (13))){
var state_41643__$1 = state_41643;
var statearr_41652_41677 = state_41643__$1;
(statearr_41652_41677[(2)] = null);

(statearr_41652_41677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (6))){
var inst_41608 = (state_41643[(7)]);
var inst_41629 = (inst_41608 > (0));
var state_41643__$1 = state_41643;
if(cljs.core.truth_(inst_41629)){
var statearr_41653_41678 = state_41643__$1;
(statearr_41653_41678[(1)] = (12));

} else {
var statearr_41654_41679 = state_41643__$1;
(statearr_41654_41679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (3))){
var inst_41641 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41643__$1,inst_41641);
} else {
if((state_val_41644 === (12))){
var inst_41607 = (state_41643[(8)]);
var inst_41631 = cljs.core.vec.call(null,inst_41607);
var state_41643__$1 = state_41643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41643__$1,(15),out,inst_41631);
} else {
if((state_val_41644 === (2))){
var state_41643__$1 = state_41643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41643__$1,(4),ch);
} else {
if((state_val_41644 === (11))){
var inst_41623 = (state_41643[(2)]);
var inst_41624 = (new Array(n));
var inst_41607 = inst_41624;
var inst_41608 = (0);
var state_41643__$1 = (function (){var statearr_41655 = state_41643;
(statearr_41655[(7)] = inst_41608);

(statearr_41655[(10)] = inst_41623);

(statearr_41655[(8)] = inst_41607);

return statearr_41655;
})();
var statearr_41656_41680 = state_41643__$1;
(statearr_41656_41680[(2)] = null);

(statearr_41656_41680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (9))){
var inst_41607 = (state_41643[(8)]);
var inst_41621 = cljs.core.vec.call(null,inst_41607);
var state_41643__$1 = state_41643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41643__$1,(11),out,inst_41621);
} else {
if((state_val_41644 === (5))){
var inst_41608 = (state_41643[(7)]);
var inst_41611 = (state_41643[(9)]);
var inst_41607 = (state_41643[(8)]);
var inst_41616 = (state_41643[(11)]);
var inst_41615 = (inst_41607[inst_41608] = inst_41611);
var inst_41616__$1 = (inst_41608 + (1));
var inst_41617 = (inst_41616__$1 < n);
var state_41643__$1 = (function (){var statearr_41657 = state_41643;
(statearr_41657[(12)] = inst_41615);

(statearr_41657[(11)] = inst_41616__$1);

return statearr_41657;
})();
if(cljs.core.truth_(inst_41617)){
var statearr_41658_41681 = state_41643__$1;
(statearr_41658_41681[(1)] = (8));

} else {
var statearr_41659_41682 = state_41643__$1;
(statearr_41659_41682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (14))){
var inst_41636 = (state_41643[(2)]);
var inst_41637 = cljs.core.async.close_BANG_.call(null,out);
var state_41643__$1 = (function (){var statearr_41661 = state_41643;
(statearr_41661[(13)] = inst_41636);

return statearr_41661;
})();
var statearr_41662_41683 = state_41643__$1;
(statearr_41662_41683[(2)] = inst_41637);

(statearr_41662_41683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (10))){
var inst_41627 = (state_41643[(2)]);
var state_41643__$1 = state_41643;
var statearr_41663_41684 = state_41643__$1;
(statearr_41663_41684[(2)] = inst_41627);

(statearr_41663_41684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41644 === (8))){
var inst_41607 = (state_41643[(8)]);
var inst_41616 = (state_41643[(11)]);
var tmp41660 = inst_41607;
var inst_41607__$1 = tmp41660;
var inst_41608 = inst_41616;
var state_41643__$1 = (function (){var statearr_41664 = state_41643;
(statearr_41664[(7)] = inst_41608);

(statearr_41664[(8)] = inst_41607__$1);

return statearr_41664;
})();
var statearr_41665_41685 = state_41643__$1;
(statearr_41665_41685[(2)] = null);

(statearr_41665_41685[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41666[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41666[(1)] = (1));

return statearr_41666;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41643){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41667){if((e41667 instanceof Object)){
var ex__39817__auto__ = e41667;
var statearr_41668_41686 = state_41643;
(statearr_41668_41686[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41687 = state_41643;
state_41643 = G__41687;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41669 = f__39911__auto__.call(null);
(statearr_41669[(6)] = c__39910__auto___41671);

return statearr_41669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41689 = arguments.length;
switch (G__41689) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39910__auto___41766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_41734){
var state_val_41735 = (state_41734[(1)]);
if((state_val_41735 === (7))){
var inst_41730 = (state_41734[(2)]);
var state_41734__$1 = state_41734;
var statearr_41736_41767 = state_41734__$1;
(statearr_41736_41767[(2)] = inst_41730);

(statearr_41736_41767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (1))){
var inst_41690 = [];
var inst_41691 = inst_41690;
var inst_41692 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41734__$1 = (function (){var statearr_41737 = state_41734;
(statearr_41737[(7)] = inst_41691);

(statearr_41737[(8)] = inst_41692);

return statearr_41737;
})();
var statearr_41738_41768 = state_41734__$1;
(statearr_41738_41768[(2)] = null);

(statearr_41738_41768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (4))){
var inst_41695 = (state_41734[(9)]);
var inst_41695__$1 = (state_41734[(2)]);
var inst_41696 = (inst_41695__$1 == null);
var inst_41697 = cljs.core.not.call(null,inst_41696);
var state_41734__$1 = (function (){var statearr_41739 = state_41734;
(statearr_41739[(9)] = inst_41695__$1);

return statearr_41739;
})();
if(inst_41697){
var statearr_41740_41769 = state_41734__$1;
(statearr_41740_41769[(1)] = (5));

} else {
var statearr_41741_41770 = state_41734__$1;
(statearr_41741_41770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (15))){
var inst_41691 = (state_41734[(7)]);
var inst_41722 = cljs.core.vec.call(null,inst_41691);
var state_41734__$1 = state_41734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41734__$1,(18),out,inst_41722);
} else {
if((state_val_41735 === (13))){
var inst_41717 = (state_41734[(2)]);
var state_41734__$1 = state_41734;
var statearr_41742_41771 = state_41734__$1;
(statearr_41742_41771[(2)] = inst_41717);

(statearr_41742_41771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (6))){
var inst_41691 = (state_41734[(7)]);
var inst_41719 = inst_41691.length;
var inst_41720 = (inst_41719 > (0));
var state_41734__$1 = state_41734;
if(cljs.core.truth_(inst_41720)){
var statearr_41743_41772 = state_41734__$1;
(statearr_41743_41772[(1)] = (15));

} else {
var statearr_41744_41773 = state_41734__$1;
(statearr_41744_41773[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (17))){
var inst_41727 = (state_41734[(2)]);
var inst_41728 = cljs.core.async.close_BANG_.call(null,out);
var state_41734__$1 = (function (){var statearr_41745 = state_41734;
(statearr_41745[(10)] = inst_41727);

return statearr_41745;
})();
var statearr_41746_41774 = state_41734__$1;
(statearr_41746_41774[(2)] = inst_41728);

(statearr_41746_41774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (3))){
var inst_41732 = (state_41734[(2)]);
var state_41734__$1 = state_41734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41734__$1,inst_41732);
} else {
if((state_val_41735 === (12))){
var inst_41691 = (state_41734[(7)]);
var inst_41710 = cljs.core.vec.call(null,inst_41691);
var state_41734__$1 = state_41734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41734__$1,(14),out,inst_41710);
} else {
if((state_val_41735 === (2))){
var state_41734__$1 = state_41734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41734__$1,(4),ch);
} else {
if((state_val_41735 === (11))){
var inst_41699 = (state_41734[(11)]);
var inst_41691 = (state_41734[(7)]);
var inst_41695 = (state_41734[(9)]);
var inst_41707 = inst_41691.push(inst_41695);
var tmp41747 = inst_41691;
var inst_41691__$1 = tmp41747;
var inst_41692 = inst_41699;
var state_41734__$1 = (function (){var statearr_41748 = state_41734;
(statearr_41748[(7)] = inst_41691__$1);

(statearr_41748[(8)] = inst_41692);

(statearr_41748[(12)] = inst_41707);

return statearr_41748;
})();
var statearr_41749_41775 = state_41734__$1;
(statearr_41749_41775[(2)] = null);

(statearr_41749_41775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (9))){
var inst_41692 = (state_41734[(8)]);
var inst_41703 = cljs.core.keyword_identical_QMARK_.call(null,inst_41692,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41734__$1 = state_41734;
var statearr_41750_41776 = state_41734__$1;
(statearr_41750_41776[(2)] = inst_41703);

(statearr_41750_41776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (5))){
var inst_41700 = (state_41734[(13)]);
var inst_41699 = (state_41734[(11)]);
var inst_41695 = (state_41734[(9)]);
var inst_41692 = (state_41734[(8)]);
var inst_41699__$1 = f.call(null,inst_41695);
var inst_41700__$1 = cljs.core._EQ_.call(null,inst_41699__$1,inst_41692);
var state_41734__$1 = (function (){var statearr_41751 = state_41734;
(statearr_41751[(13)] = inst_41700__$1);

(statearr_41751[(11)] = inst_41699__$1);

return statearr_41751;
})();
if(inst_41700__$1){
var statearr_41752_41777 = state_41734__$1;
(statearr_41752_41777[(1)] = (8));

} else {
var statearr_41753_41778 = state_41734__$1;
(statearr_41753_41778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (14))){
var inst_41699 = (state_41734[(11)]);
var inst_41695 = (state_41734[(9)]);
var inst_41712 = (state_41734[(2)]);
var inst_41713 = [];
var inst_41714 = inst_41713.push(inst_41695);
var inst_41691 = inst_41713;
var inst_41692 = inst_41699;
var state_41734__$1 = (function (){var statearr_41754 = state_41734;
(statearr_41754[(7)] = inst_41691);

(statearr_41754[(14)] = inst_41712);

(statearr_41754[(8)] = inst_41692);

(statearr_41754[(15)] = inst_41714);

return statearr_41754;
})();
var statearr_41755_41779 = state_41734__$1;
(statearr_41755_41779[(2)] = null);

(statearr_41755_41779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (16))){
var state_41734__$1 = state_41734;
var statearr_41756_41780 = state_41734__$1;
(statearr_41756_41780[(2)] = null);

(statearr_41756_41780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (10))){
var inst_41705 = (state_41734[(2)]);
var state_41734__$1 = state_41734;
if(cljs.core.truth_(inst_41705)){
var statearr_41757_41781 = state_41734__$1;
(statearr_41757_41781[(1)] = (11));

} else {
var statearr_41758_41782 = state_41734__$1;
(statearr_41758_41782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (18))){
var inst_41724 = (state_41734[(2)]);
var state_41734__$1 = state_41734;
var statearr_41759_41783 = state_41734__$1;
(statearr_41759_41783[(2)] = inst_41724);

(statearr_41759_41783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41735 === (8))){
var inst_41700 = (state_41734[(13)]);
var state_41734__$1 = state_41734;
var statearr_41760_41784 = state_41734__$1;
(statearr_41760_41784[(2)] = inst_41700);

(statearr_41760_41784[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__39814__auto__ = null;
var cljs$core$async$state_machine__39814__auto____0 = (function (){
var statearr_41761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41761[(0)] = cljs$core$async$state_machine__39814__auto__);

(statearr_41761[(1)] = (1));

return statearr_41761;
});
var cljs$core$async$state_machine__39814__auto____1 = (function (state_41734){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_41734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e41762){if((e41762 instanceof Object)){
var ex__39817__auto__ = e41762;
var statearr_41763_41785 = state_41734;
(statearr_41763_41785[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41786 = state_41734;
state_41734 = G__41786;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
cljs$core$async$state_machine__39814__auto__ = function(state_41734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39814__auto____1.call(this,state_41734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39814__auto____0;
cljs$core$async$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39814__auto____1;
return cljs$core$async$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_41764 = f__39911__auto__.call(null);
(statearr_41764[(6)] = c__39910__auto___41766);

return statearr_41764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1710474319313
