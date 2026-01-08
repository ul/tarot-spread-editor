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
var G__104659 = arguments.length;
switch (G__104659) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async104660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104660 = (function (f,blockable,meta104661){
this.f = f;
this.blockable = blockable;
this.meta104661 = meta104661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async104660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104662,meta104661__$1){
var self__ = this;
var _104662__$1 = this;
return (new cljs.core.async.t_cljs$core$async104660(self__.f,self__.blockable,meta104661__$1));
}));

(cljs.core.async.t_cljs$core$async104660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104662){
var self__ = this;
var _104662__$1 = this;
return self__.meta104661;
}));

(cljs.core.async.t_cljs$core$async104660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async104660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async104660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async104660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta104661","meta104661",-1702556825,null)], null);
}));

(cljs.core.async.t_cljs$core$async104660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async104660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104660");

(cljs.core.async.t_cljs$core$async104660.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async104660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async104660.
 */
cljs.core.async.__GT_t_cljs$core$async104660 = (function cljs$core$async$__GT_t_cljs$core$async104660(f__$1,blockable__$1,meta104661){
return (new cljs.core.async.t_cljs$core$async104660(f__$1,blockable__$1,meta104661));
});

}

return (new cljs.core.async.t_cljs$core$async104660(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__104666 = arguments.length;
switch (G__104666) {
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
var G__104669 = arguments.length;
switch (G__104669) {
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
var G__104672 = arguments.length;
switch (G__104672) {
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
var val_104674 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_104674);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_104674);
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
var G__104676 = arguments.length;
switch (G__104676) {
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
var n__5636__auto___104678 = n;
var x_104679 = (0);
while(true){
if((x_104679 < n__5636__auto___104678)){
(a[x_104679] = (0));

var G__104680 = (x_104679 + (1));
x_104679 = G__104680;
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

var G__104681 = (i + (1));
i = G__104681;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async104682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104682 = (function (flag,meta104683){
this.flag = flag;
this.meta104683 = meta104683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async104682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104684,meta104683__$1){
var self__ = this;
var _104684__$1 = this;
return (new cljs.core.async.t_cljs$core$async104682(self__.flag,meta104683__$1));
}));

(cljs.core.async.t_cljs$core$async104682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104684){
var self__ = this;
var _104684__$1 = this;
return self__.meta104683;
}));

(cljs.core.async.t_cljs$core$async104682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async104682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async104682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async104682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta104683","meta104683",-140535419,null)], null);
}));

(cljs.core.async.t_cljs$core$async104682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async104682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104682");

(cljs.core.async.t_cljs$core$async104682.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async104682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async104682.
 */
cljs.core.async.__GT_t_cljs$core$async104682 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async104682(flag__$1,meta104683){
return (new cljs.core.async.t_cljs$core$async104682(flag__$1,meta104683));
});

}

return (new cljs.core.async.t_cljs$core$async104682(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async104685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104685 = (function (flag,cb,meta104686){
this.flag = flag;
this.cb = cb;
this.meta104686 = meta104686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async104685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104687,meta104686__$1){
var self__ = this;
var _104687__$1 = this;
return (new cljs.core.async.t_cljs$core$async104685(self__.flag,self__.cb,meta104686__$1));
}));

(cljs.core.async.t_cljs$core$async104685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104687){
var self__ = this;
var _104687__$1 = this;
return self__.meta104686;
}));

(cljs.core.async.t_cljs$core$async104685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async104685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async104685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async104685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta104686","meta104686",-2106304342,null)], null);
}));

(cljs.core.async.t_cljs$core$async104685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async104685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104685");

(cljs.core.async.t_cljs$core$async104685.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async104685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async104685.
 */
cljs.core.async.__GT_t_cljs$core$async104685 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async104685(flag__$1,cb__$1,meta104686){
return (new cljs.core.async.t_cljs$core$async104685(flag__$1,cb__$1,meta104686));
});

}

return (new cljs.core.async.t_cljs$core$async104685(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__104688_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104688_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__104689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104689_SHARP_,port], null));
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
var G__104690 = (i + (1));
i = G__104690;
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
var len__5769__auto___104695 = arguments.length;
var i__5770__auto___104696 = (0);
while(true){
if((i__5770__auto___104696 < len__5769__auto___104695)){
args__5775__auto__.push((arguments[i__5770__auto___104696]));

var G__104697 = (i__5770__auto___104696 + (1));
i__5770__auto___104696 = G__104697;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__104693){
var map__104694 = p__104693;
var map__104694__$1 = cljs.core.__destructure_map.call(null,map__104694);
var opts = map__104694__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq104691){
var G__104692 = cljs.core.first.call(null,seq104691);
var seq104691__$1 = cljs.core.next.call(null,seq104691);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104692,seq104691__$1);
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
var G__104699 = arguments.length;
switch (G__104699) {
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
var c__33067__auto___104745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_104723){
var state_val_104724 = (state_104723[(1)]);
if((state_val_104724 === (7))){
var inst_104719 = (state_104723[(2)]);
var state_104723__$1 = state_104723;
var statearr_104725_104746 = state_104723__$1;
(statearr_104725_104746[(2)] = inst_104719);

(statearr_104725_104746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (1))){
var state_104723__$1 = state_104723;
var statearr_104726_104747 = state_104723__$1;
(statearr_104726_104747[(2)] = null);

(statearr_104726_104747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (4))){
var inst_104702 = (state_104723[(7)]);
var inst_104702__$1 = (state_104723[(2)]);
var inst_104703 = (inst_104702__$1 == null);
var state_104723__$1 = (function (){var statearr_104727 = state_104723;
(statearr_104727[(7)] = inst_104702__$1);

return statearr_104727;
})();
if(cljs.core.truth_(inst_104703)){
var statearr_104728_104748 = state_104723__$1;
(statearr_104728_104748[(1)] = (5));

} else {
var statearr_104729_104749 = state_104723__$1;
(statearr_104729_104749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (13))){
var state_104723__$1 = state_104723;
var statearr_104730_104750 = state_104723__$1;
(statearr_104730_104750[(2)] = null);

(statearr_104730_104750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (6))){
var inst_104702 = (state_104723[(7)]);
var state_104723__$1 = state_104723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104723__$1,(11),to,inst_104702);
} else {
if((state_val_104724 === (3))){
var inst_104721 = (state_104723[(2)]);
var state_104723__$1 = state_104723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104723__$1,inst_104721);
} else {
if((state_val_104724 === (12))){
var state_104723__$1 = state_104723;
var statearr_104731_104751 = state_104723__$1;
(statearr_104731_104751[(2)] = null);

(statearr_104731_104751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (2))){
var state_104723__$1 = state_104723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104723__$1,(4),from);
} else {
if((state_val_104724 === (11))){
var inst_104712 = (state_104723[(2)]);
var state_104723__$1 = state_104723;
if(cljs.core.truth_(inst_104712)){
var statearr_104732_104752 = state_104723__$1;
(statearr_104732_104752[(1)] = (12));

} else {
var statearr_104733_104753 = state_104723__$1;
(statearr_104733_104753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (9))){
var state_104723__$1 = state_104723;
var statearr_104734_104754 = state_104723__$1;
(statearr_104734_104754[(2)] = null);

(statearr_104734_104754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (5))){
var state_104723__$1 = state_104723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_104735_104755 = state_104723__$1;
(statearr_104735_104755[(1)] = (8));

} else {
var statearr_104736_104756 = state_104723__$1;
(statearr_104736_104756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (14))){
var inst_104717 = (state_104723[(2)]);
var state_104723__$1 = state_104723;
var statearr_104737_104757 = state_104723__$1;
(statearr_104737_104757[(2)] = inst_104717);

(statearr_104737_104757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (10))){
var inst_104709 = (state_104723[(2)]);
var state_104723__$1 = state_104723;
var statearr_104738_104758 = state_104723__$1;
(statearr_104738_104758[(2)] = inst_104709);

(statearr_104738_104758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104724 === (8))){
var inst_104706 = cljs.core.async.close_BANG_.call(null,to);
var state_104723__$1 = state_104723;
var statearr_104739_104759 = state_104723__$1;
(statearr_104739_104759[(2)] = inst_104706);

(statearr_104739_104759[(1)] = (10));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_104740 = [null,null,null,null,null,null,null,null];
(statearr_104740[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_104740[(1)] = (1));

return statearr_104740;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_104723){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_104723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e104741){if((e104741 instanceof Object)){
var ex__32974__auto__ = e104741;
var statearr_104742_104760 = state_104723;
(statearr_104742_104760[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104761 = state_104723;
state_104723 = G__104761;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_104723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_104723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_104743 = f__33068__auto__.call(null);
(statearr_104743[(6)] = c__33067__auto___104745);

return statearr_104743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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
var process__$2 = (function (p__104762){
var vec__104763 = p__104762;
var v = cljs.core.nth.call(null,vec__104763,(0),null);
var p = cljs.core.nth.call(null,vec__104763,(1),null);
var job = vec__104763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33067__auto___104934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_104770){
var state_val_104771 = (state_104770[(1)]);
if((state_val_104771 === (1))){
var state_104770__$1 = state_104770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104770__$1,(2),res,v);
} else {
if((state_val_104771 === (2))){
var inst_104767 = (state_104770[(2)]);
var inst_104768 = cljs.core.async.close_BANG_.call(null,res);
var state_104770__$1 = (function (){var statearr_104772 = state_104770;
(statearr_104772[(7)] = inst_104767);

return statearr_104772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104770__$1,inst_104768);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0 = (function (){
var statearr_104773 = [null,null,null,null,null,null,null,null];
(statearr_104773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__);

(statearr_104773[(1)] = (1));

return statearr_104773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1 = (function (state_104770){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_104770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e104774){if((e104774 instanceof Object)){
var ex__32974__auto__ = e104774;
var statearr_104775_104935 = state_104770;
(statearr_104775_104935[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104936 = state_104770;
state_104770 = G__104936;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = function(state_104770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1.call(this,state_104770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_104776 = f__33068__auto__.call(null);
(statearr_104776[(6)] = c__33067__auto___104934);

return statearr_104776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__104777){
var vec__104778 = p__104777;
var v = cljs.core.nth.call(null,vec__104778,(0),null);
var p = cljs.core.nth.call(null,vec__104778,(1),null);
var job = vec__104778;
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
var n__5636__auto___104937 = n;
var __104938 = (0);
while(true){
if((__104938 < n__5636__auto___104937)){
var G__104781_104939 = type;
var G__104781_104940__$1 = (((G__104781_104939 instanceof cljs.core.Keyword))?G__104781_104939.fqn:null);
switch (G__104781_104940__$1) {
case "compute":
var c__33067__auto___104942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__104938,c__33067__auto___104942,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async){
return (function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = ((function (__104938,c__33067__auto___104942,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async){
return (function (state_104794){
var state_val_104795 = (state_104794[(1)]);
if((state_val_104795 === (1))){
var state_104794__$1 = state_104794;
var statearr_104796_104943 = state_104794__$1;
(statearr_104796_104943[(2)] = null);

(statearr_104796_104943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104795 === (2))){
var state_104794__$1 = state_104794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104794__$1,(4),jobs);
} else {
if((state_val_104795 === (3))){
var inst_104792 = (state_104794[(2)]);
var state_104794__$1 = state_104794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104794__$1,inst_104792);
} else {
if((state_val_104795 === (4))){
var inst_104784 = (state_104794[(2)]);
var inst_104785 = process__$2.call(null,inst_104784);
var state_104794__$1 = state_104794;
if(cljs.core.truth_(inst_104785)){
var statearr_104797_104944 = state_104794__$1;
(statearr_104797_104944[(1)] = (5));

} else {
var statearr_104798_104945 = state_104794__$1;
(statearr_104798_104945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104795 === (5))){
var state_104794__$1 = state_104794;
var statearr_104799_104946 = state_104794__$1;
(statearr_104799_104946[(2)] = null);

(statearr_104799_104946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104795 === (6))){
var state_104794__$1 = state_104794;
var statearr_104800_104947 = state_104794__$1;
(statearr_104800_104947[(2)] = null);

(statearr_104800_104947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104795 === (7))){
var inst_104790 = (state_104794[(2)]);
var state_104794__$1 = state_104794;
var statearr_104801_104948 = state_104794__$1;
(statearr_104801_104948[(2)] = inst_104790);

(statearr_104801_104948[(1)] = (3));


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
});})(__104938,c__33067__auto___104942,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async))
;
return ((function (__104938,switch__32970__auto__,c__33067__auto___104942,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0 = (function (){
var statearr_104802 = [null,null,null,null,null,null,null];
(statearr_104802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__);

(statearr_104802[(1)] = (1));

return statearr_104802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1 = (function (state_104794){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_104794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e104803){if((e104803 instanceof Object)){
var ex__32974__auto__ = e104803;
var statearr_104804_104949 = state_104794;
(statearr_104804_104949[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104950 = state_104794;
state_104794 = G__104950;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = function(state_104794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1.call(this,state_104794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__;
})()
;})(__104938,switch__32970__auto__,c__33067__auto___104942,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async))
})();
var state__33069__auto__ = (function (){var statearr_104805 = f__33068__auto__.call(null);
(statearr_104805[(6)] = c__33067__auto___104942);

return statearr_104805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
});})(__104938,c__33067__auto___104942,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async))
);


break;
case "async":
var c__33067__auto___104951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__104938,c__33067__auto___104951,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async){
return (function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = ((function (__104938,c__33067__auto___104951,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async){
return (function (state_104818){
var state_val_104819 = (state_104818[(1)]);
if((state_val_104819 === (1))){
var state_104818__$1 = state_104818;
var statearr_104820_104952 = state_104818__$1;
(statearr_104820_104952[(2)] = null);

(statearr_104820_104952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104819 === (2))){
var state_104818__$1 = state_104818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104818__$1,(4),jobs);
} else {
if((state_val_104819 === (3))){
var inst_104816 = (state_104818[(2)]);
var state_104818__$1 = state_104818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104818__$1,inst_104816);
} else {
if((state_val_104819 === (4))){
var inst_104808 = (state_104818[(2)]);
var inst_104809 = async.call(null,inst_104808);
var state_104818__$1 = state_104818;
if(cljs.core.truth_(inst_104809)){
var statearr_104821_104953 = state_104818__$1;
(statearr_104821_104953[(1)] = (5));

} else {
var statearr_104822_104954 = state_104818__$1;
(statearr_104822_104954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104819 === (5))){
var state_104818__$1 = state_104818;
var statearr_104823_104955 = state_104818__$1;
(statearr_104823_104955[(2)] = null);

(statearr_104823_104955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104819 === (6))){
var state_104818__$1 = state_104818;
var statearr_104824_104956 = state_104818__$1;
(statearr_104824_104956[(2)] = null);

(statearr_104824_104956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104819 === (7))){
var inst_104814 = (state_104818[(2)]);
var state_104818__$1 = state_104818;
var statearr_104825_104957 = state_104818__$1;
(statearr_104825_104957[(2)] = inst_104814);

(statearr_104825_104957[(1)] = (3));


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
});})(__104938,c__33067__auto___104951,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async))
;
return ((function (__104938,switch__32970__auto__,c__33067__auto___104951,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0 = (function (){
var statearr_104826 = [null,null,null,null,null,null,null];
(statearr_104826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__);

(statearr_104826[(1)] = (1));

return statearr_104826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1 = (function (state_104818){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_104818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e104827){if((e104827 instanceof Object)){
var ex__32974__auto__ = e104827;
var statearr_104828_104958 = state_104818;
(statearr_104828_104958[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104959 = state_104818;
state_104818 = G__104959;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = function(state_104818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1.call(this,state_104818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__;
})()
;})(__104938,switch__32970__auto__,c__33067__auto___104951,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async))
})();
var state__33069__auto__ = (function (){var statearr_104829 = f__33068__auto__.call(null);
(statearr_104829[(6)] = c__33067__auto___104951);

return statearr_104829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
});})(__104938,c__33067__auto___104951,G__104781_104939,G__104781_104940__$1,n__5636__auto___104937,jobs,results,process__$2,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__104781_104940__$1)].join('')));

}

var G__104960 = (__104938 + (1));
__104938 = G__104960;
continue;
} else {
}
break;
}

var c__33067__auto___104961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_104851){
var state_val_104852 = (state_104851[(1)]);
if((state_val_104852 === (7))){
var inst_104847 = (state_104851[(2)]);
var state_104851__$1 = state_104851;
var statearr_104853_104962 = state_104851__$1;
(statearr_104853_104962[(2)] = inst_104847);

(statearr_104853_104962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104852 === (1))){
var state_104851__$1 = state_104851;
var statearr_104854_104963 = state_104851__$1;
(statearr_104854_104963[(2)] = null);

(statearr_104854_104963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104852 === (4))){
var inst_104832 = (state_104851[(7)]);
var inst_104832__$1 = (state_104851[(2)]);
var inst_104833 = (inst_104832__$1 == null);
var state_104851__$1 = (function (){var statearr_104855 = state_104851;
(statearr_104855[(7)] = inst_104832__$1);

return statearr_104855;
})();
if(cljs.core.truth_(inst_104833)){
var statearr_104856_104964 = state_104851__$1;
(statearr_104856_104964[(1)] = (5));

} else {
var statearr_104857_104965 = state_104851__$1;
(statearr_104857_104965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104852 === (6))){
var inst_104837 = (state_104851[(8)]);
var inst_104832 = (state_104851[(7)]);
var inst_104837__$1 = cljs.core.async.chan.call(null,(1));
var inst_104838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104839 = [inst_104832,inst_104837__$1];
var inst_104840 = (new cljs.core.PersistentVector(null,2,(5),inst_104838,inst_104839,null));
var state_104851__$1 = (function (){var statearr_104858 = state_104851;
(statearr_104858[(8)] = inst_104837__$1);

return statearr_104858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104851__$1,(8),jobs,inst_104840);
} else {
if((state_val_104852 === (3))){
var inst_104849 = (state_104851[(2)]);
var state_104851__$1 = state_104851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104851__$1,inst_104849);
} else {
if((state_val_104852 === (2))){
var state_104851__$1 = state_104851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104851__$1,(4),from);
} else {
if((state_val_104852 === (9))){
var inst_104844 = (state_104851[(2)]);
var state_104851__$1 = (function (){var statearr_104859 = state_104851;
(statearr_104859[(9)] = inst_104844);

return statearr_104859;
})();
var statearr_104860_104966 = state_104851__$1;
(statearr_104860_104966[(2)] = null);

(statearr_104860_104966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104852 === (5))){
var inst_104835 = cljs.core.async.close_BANG_.call(null,jobs);
var state_104851__$1 = state_104851;
var statearr_104861_104967 = state_104851__$1;
(statearr_104861_104967[(2)] = inst_104835);

(statearr_104861_104967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104852 === (8))){
var inst_104837 = (state_104851[(8)]);
var inst_104842 = (state_104851[(2)]);
var state_104851__$1 = (function (){var statearr_104862 = state_104851;
(statearr_104862[(10)] = inst_104842);

return statearr_104862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104851__$1,(9),results,inst_104837);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0 = (function (){
var statearr_104863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_104863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__);

(statearr_104863[(1)] = (1));

return statearr_104863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1 = (function (state_104851){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_104851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e104864){if((e104864 instanceof Object)){
var ex__32974__auto__ = e104864;
var statearr_104865_104968 = state_104851;
(statearr_104865_104968[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104969 = state_104851;
state_104851 = G__104969;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = function(state_104851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1.call(this,state_104851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_104866 = f__33068__auto__.call(null);
(statearr_104866[(6)] = c__33067__auto___104961);

return statearr_104866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_104904){
var state_val_104905 = (state_104904[(1)]);
if((state_val_104905 === (7))){
var inst_104900 = (state_104904[(2)]);
var state_104904__$1 = state_104904;
var statearr_104906_104970 = state_104904__$1;
(statearr_104906_104970[(2)] = inst_104900);

(statearr_104906_104970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (20))){
var state_104904__$1 = state_104904;
var statearr_104907_104971 = state_104904__$1;
(statearr_104907_104971[(2)] = null);

(statearr_104907_104971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (1))){
var state_104904__$1 = state_104904;
var statearr_104908_104972 = state_104904__$1;
(statearr_104908_104972[(2)] = null);

(statearr_104908_104972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (4))){
var inst_104869 = (state_104904[(7)]);
var inst_104869__$1 = (state_104904[(2)]);
var inst_104870 = (inst_104869__$1 == null);
var state_104904__$1 = (function (){var statearr_104909 = state_104904;
(statearr_104909[(7)] = inst_104869__$1);

return statearr_104909;
})();
if(cljs.core.truth_(inst_104870)){
var statearr_104910_104973 = state_104904__$1;
(statearr_104910_104973[(1)] = (5));

} else {
var statearr_104911_104974 = state_104904__$1;
(statearr_104911_104974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (15))){
var inst_104882 = (state_104904[(8)]);
var state_104904__$1 = state_104904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104904__$1,(18),to,inst_104882);
} else {
if((state_val_104905 === (21))){
var inst_104895 = (state_104904[(2)]);
var state_104904__$1 = state_104904;
var statearr_104912_104975 = state_104904__$1;
(statearr_104912_104975[(2)] = inst_104895);

(statearr_104912_104975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (13))){
var inst_104897 = (state_104904[(2)]);
var state_104904__$1 = (function (){var statearr_104913 = state_104904;
(statearr_104913[(9)] = inst_104897);

return statearr_104913;
})();
var statearr_104914_104976 = state_104904__$1;
(statearr_104914_104976[(2)] = null);

(statearr_104914_104976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (6))){
var inst_104869 = (state_104904[(7)]);
var state_104904__$1 = state_104904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104904__$1,(11),inst_104869);
} else {
if((state_val_104905 === (17))){
var inst_104890 = (state_104904[(2)]);
var state_104904__$1 = state_104904;
if(cljs.core.truth_(inst_104890)){
var statearr_104915_104977 = state_104904__$1;
(statearr_104915_104977[(1)] = (19));

} else {
var statearr_104916_104978 = state_104904__$1;
(statearr_104916_104978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (3))){
var inst_104902 = (state_104904[(2)]);
var state_104904__$1 = state_104904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104904__$1,inst_104902);
} else {
if((state_val_104905 === (12))){
var inst_104879 = (state_104904[(10)]);
var state_104904__$1 = state_104904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104904__$1,(14),inst_104879);
} else {
if((state_val_104905 === (2))){
var state_104904__$1 = state_104904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104904__$1,(4),results);
} else {
if((state_val_104905 === (19))){
var state_104904__$1 = state_104904;
var statearr_104917_104979 = state_104904__$1;
(statearr_104917_104979[(2)] = null);

(statearr_104917_104979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (11))){
var inst_104879 = (state_104904[(2)]);
var state_104904__$1 = (function (){var statearr_104918 = state_104904;
(statearr_104918[(10)] = inst_104879);

return statearr_104918;
})();
var statearr_104919_104980 = state_104904__$1;
(statearr_104919_104980[(2)] = null);

(statearr_104919_104980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (9))){
var state_104904__$1 = state_104904;
var statearr_104920_104981 = state_104904__$1;
(statearr_104920_104981[(2)] = null);

(statearr_104920_104981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (5))){
var state_104904__$1 = state_104904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_104921_104982 = state_104904__$1;
(statearr_104921_104982[(1)] = (8));

} else {
var statearr_104922_104983 = state_104904__$1;
(statearr_104922_104983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (14))){
var inst_104884 = (state_104904[(11)]);
var inst_104882 = (state_104904[(8)]);
var inst_104882__$1 = (state_104904[(2)]);
var inst_104883 = (inst_104882__$1 == null);
var inst_104884__$1 = cljs.core.not.call(null,inst_104883);
var state_104904__$1 = (function (){var statearr_104923 = state_104904;
(statearr_104923[(11)] = inst_104884__$1);

(statearr_104923[(8)] = inst_104882__$1);

return statearr_104923;
})();
if(inst_104884__$1){
var statearr_104924_104984 = state_104904__$1;
(statearr_104924_104984[(1)] = (15));

} else {
var statearr_104925_104985 = state_104904__$1;
(statearr_104925_104985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (16))){
var inst_104884 = (state_104904[(11)]);
var state_104904__$1 = state_104904;
var statearr_104926_104986 = state_104904__$1;
(statearr_104926_104986[(2)] = inst_104884);

(statearr_104926_104986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (10))){
var inst_104876 = (state_104904[(2)]);
var state_104904__$1 = state_104904;
var statearr_104927_104987 = state_104904__$1;
(statearr_104927_104987[(2)] = inst_104876);

(statearr_104927_104987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (18))){
var inst_104887 = (state_104904[(2)]);
var state_104904__$1 = state_104904;
var statearr_104928_104988 = state_104904__$1;
(statearr_104928_104988[(2)] = inst_104887);

(statearr_104928_104988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104905 === (8))){
var inst_104873 = cljs.core.async.close_BANG_.call(null,to);
var state_104904__$1 = state_104904;
var statearr_104929_104989 = state_104904__$1;
(statearr_104929_104989[(2)] = inst_104873);

(statearr_104929_104989[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0 = (function (){
var statearr_104930 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__);

(statearr_104930[(1)] = (1));

return statearr_104930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1 = (function (state_104904){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_104904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e104931){if((e104931 instanceof Object)){
var ex__32974__auto__ = e104931;
var statearr_104932_104990 = state_104904;
(statearr_104932_104990[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104991 = state_104904;
state_104904 = G__104991;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__ = function(state_104904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1.call(this,state_104904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_104933 = f__33068__auto__.call(null);
(statearr_104933[(6)] = c__33067__auto__);

return statearr_104933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
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
var G__104993 = arguments.length;
switch (G__104993) {
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
var G__104996 = arguments.length;
switch (G__104996) {
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
var G__104999 = arguments.length;
switch (G__104999) {
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
var c__33067__auto___105048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105025){
var state_val_105026 = (state_105025[(1)]);
if((state_val_105026 === (7))){
var inst_105021 = (state_105025[(2)]);
var state_105025__$1 = state_105025;
var statearr_105027_105049 = state_105025__$1;
(statearr_105027_105049[(2)] = inst_105021);

(statearr_105027_105049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (1))){
var state_105025__$1 = state_105025;
var statearr_105028_105050 = state_105025__$1;
(statearr_105028_105050[(2)] = null);

(statearr_105028_105050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (4))){
var inst_105002 = (state_105025[(7)]);
var inst_105002__$1 = (state_105025[(2)]);
var inst_105003 = (inst_105002__$1 == null);
var state_105025__$1 = (function (){var statearr_105029 = state_105025;
(statearr_105029[(7)] = inst_105002__$1);

return statearr_105029;
})();
if(cljs.core.truth_(inst_105003)){
var statearr_105030_105051 = state_105025__$1;
(statearr_105030_105051[(1)] = (5));

} else {
var statearr_105031_105052 = state_105025__$1;
(statearr_105031_105052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (13))){
var state_105025__$1 = state_105025;
var statearr_105032_105053 = state_105025__$1;
(statearr_105032_105053[(2)] = null);

(statearr_105032_105053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (6))){
var inst_105002 = (state_105025[(7)]);
var inst_105008 = p.call(null,inst_105002);
var state_105025__$1 = state_105025;
if(cljs.core.truth_(inst_105008)){
var statearr_105033_105054 = state_105025__$1;
(statearr_105033_105054[(1)] = (9));

} else {
var statearr_105034_105055 = state_105025__$1;
(statearr_105034_105055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (3))){
var inst_105023 = (state_105025[(2)]);
var state_105025__$1 = state_105025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105025__$1,inst_105023);
} else {
if((state_val_105026 === (12))){
var state_105025__$1 = state_105025;
var statearr_105035_105056 = state_105025__$1;
(statearr_105035_105056[(2)] = null);

(statearr_105035_105056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (2))){
var state_105025__$1 = state_105025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105025__$1,(4),ch);
} else {
if((state_val_105026 === (11))){
var inst_105002 = (state_105025[(7)]);
var inst_105012 = (state_105025[(2)]);
var state_105025__$1 = state_105025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105025__$1,(8),inst_105012,inst_105002);
} else {
if((state_val_105026 === (9))){
var state_105025__$1 = state_105025;
var statearr_105036_105057 = state_105025__$1;
(statearr_105036_105057[(2)] = tc);

(statearr_105036_105057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (5))){
var inst_105005 = cljs.core.async.close_BANG_.call(null,tc);
var inst_105006 = cljs.core.async.close_BANG_.call(null,fc);
var state_105025__$1 = (function (){var statearr_105037 = state_105025;
(statearr_105037[(8)] = inst_105005);

return statearr_105037;
})();
var statearr_105038_105058 = state_105025__$1;
(statearr_105038_105058[(2)] = inst_105006);

(statearr_105038_105058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (14))){
var inst_105019 = (state_105025[(2)]);
var state_105025__$1 = state_105025;
var statearr_105039_105059 = state_105025__$1;
(statearr_105039_105059[(2)] = inst_105019);

(statearr_105039_105059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (10))){
var state_105025__$1 = state_105025;
var statearr_105040_105060 = state_105025__$1;
(statearr_105040_105060[(2)] = fc);

(statearr_105040_105060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105026 === (8))){
var inst_105014 = (state_105025[(2)]);
var state_105025__$1 = state_105025;
if(cljs.core.truth_(inst_105014)){
var statearr_105041_105061 = state_105025__$1;
(statearr_105041_105061[(1)] = (12));

} else {
var statearr_105042_105062 = state_105025__$1;
(statearr_105042_105062[(1)] = (13));

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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_105043 = [null,null,null,null,null,null,null,null,null];
(statearr_105043[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_105043[(1)] = (1));

return statearr_105043;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_105025){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105044){if((e105044 instanceof Object)){
var ex__32974__auto__ = e105044;
var statearr_105045_105063 = state_105025;
(statearr_105045_105063[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105064 = state_105025;
state_105025 = G__105064;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_105025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_105025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105046 = f__33068__auto__.call(null);
(statearr_105046[(6)] = c__33067__auto___105048);

return statearr_105046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105085){
var state_val_105086 = (state_105085[(1)]);
if((state_val_105086 === (7))){
var inst_105081 = (state_105085[(2)]);
var state_105085__$1 = state_105085;
var statearr_105087_105105 = state_105085__$1;
(statearr_105087_105105[(2)] = inst_105081);

(statearr_105087_105105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (1))){
var inst_105065 = init;
var state_105085__$1 = (function (){var statearr_105088 = state_105085;
(statearr_105088[(7)] = inst_105065);

return statearr_105088;
})();
var statearr_105089_105106 = state_105085__$1;
(statearr_105089_105106[(2)] = null);

(statearr_105089_105106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (4))){
var inst_105068 = (state_105085[(8)]);
var inst_105068__$1 = (state_105085[(2)]);
var inst_105069 = (inst_105068__$1 == null);
var state_105085__$1 = (function (){var statearr_105090 = state_105085;
(statearr_105090[(8)] = inst_105068__$1);

return statearr_105090;
})();
if(cljs.core.truth_(inst_105069)){
var statearr_105091_105107 = state_105085__$1;
(statearr_105091_105107[(1)] = (5));

} else {
var statearr_105092_105108 = state_105085__$1;
(statearr_105092_105108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (6))){
var inst_105068 = (state_105085[(8)]);
var inst_105065 = (state_105085[(7)]);
var inst_105072 = (state_105085[(9)]);
var inst_105072__$1 = f.call(null,inst_105065,inst_105068);
var inst_105073 = cljs.core.reduced_QMARK_.call(null,inst_105072__$1);
var state_105085__$1 = (function (){var statearr_105093 = state_105085;
(statearr_105093[(9)] = inst_105072__$1);

return statearr_105093;
})();
if(inst_105073){
var statearr_105094_105109 = state_105085__$1;
(statearr_105094_105109[(1)] = (8));

} else {
var statearr_105095_105110 = state_105085__$1;
(statearr_105095_105110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (3))){
var inst_105083 = (state_105085[(2)]);
var state_105085__$1 = state_105085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105085__$1,inst_105083);
} else {
if((state_val_105086 === (2))){
var state_105085__$1 = state_105085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105085__$1,(4),ch);
} else {
if((state_val_105086 === (9))){
var inst_105072 = (state_105085[(9)]);
var inst_105065 = inst_105072;
var state_105085__$1 = (function (){var statearr_105096 = state_105085;
(statearr_105096[(7)] = inst_105065);

return statearr_105096;
})();
var statearr_105097_105111 = state_105085__$1;
(statearr_105097_105111[(2)] = null);

(statearr_105097_105111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (5))){
var inst_105065 = (state_105085[(7)]);
var state_105085__$1 = state_105085;
var statearr_105098_105112 = state_105085__$1;
(statearr_105098_105112[(2)] = inst_105065);

(statearr_105098_105112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (10))){
var inst_105079 = (state_105085[(2)]);
var state_105085__$1 = state_105085;
var statearr_105099_105113 = state_105085__$1;
(statearr_105099_105113[(2)] = inst_105079);

(statearr_105099_105113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105086 === (8))){
var inst_105072 = (state_105085[(9)]);
var inst_105075 = cljs.core.deref.call(null,inst_105072);
var state_105085__$1 = state_105085;
var statearr_105100_105114 = state_105085__$1;
(statearr_105100_105114[(2)] = inst_105075);

(statearr_105100_105114[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32971__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32971__auto____0 = (function (){
var statearr_105101 = [null,null,null,null,null,null,null,null,null,null];
(statearr_105101[(0)] = cljs$core$async$reduce_$_state_machine__32971__auto__);

(statearr_105101[(1)] = (1));

return statearr_105101;
});
var cljs$core$async$reduce_$_state_machine__32971__auto____1 = (function (state_105085){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105102){if((e105102 instanceof Object)){
var ex__32974__auto__ = e105102;
var statearr_105103_105115 = state_105085;
(statearr_105103_105115[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105116 = state_105085;
state_105085 = G__105116;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32971__auto__ = function(state_105085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32971__auto____1.call(this,state_105085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32971__auto____0;
cljs$core$async$reduce_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32971__auto____1;
return cljs$core$async$reduce_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105104 = f__33068__auto__.call(null);
(statearr_105104[(6)] = c__33067__auto__);

return statearr_105104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105122){
var state_val_105123 = (state_105122[(1)]);
if((state_val_105123 === (1))){
var inst_105117 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_105122__$1 = state_105122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105122__$1,(2),inst_105117);
} else {
if((state_val_105123 === (2))){
var inst_105119 = (state_105122[(2)]);
var inst_105120 = f__$1.call(null,inst_105119);
var state_105122__$1 = state_105122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105122__$1,inst_105120);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32971__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32971__auto____0 = (function (){
var statearr_105124 = [null,null,null,null,null,null,null];
(statearr_105124[(0)] = cljs$core$async$transduce_$_state_machine__32971__auto__);

(statearr_105124[(1)] = (1));

return statearr_105124;
});
var cljs$core$async$transduce_$_state_machine__32971__auto____1 = (function (state_105122){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105125){if((e105125 instanceof Object)){
var ex__32974__auto__ = e105125;
var statearr_105126_105128 = state_105122;
(statearr_105126_105128[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105129 = state_105122;
state_105122 = G__105129;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32971__auto__ = function(state_105122){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32971__auto____1.call(this,state_105122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32971__auto____0;
cljs$core$async$transduce_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32971__auto____1;
return cljs$core$async$transduce_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105127 = f__33068__auto__.call(null);
(statearr_105127[(6)] = c__33067__auto__);

return statearr_105127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
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
var G__105131 = arguments.length;
switch (G__105131) {
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
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105156){
var state_val_105157 = (state_105156[(1)]);
if((state_val_105157 === (7))){
var inst_105138 = (state_105156[(2)]);
var state_105156__$1 = state_105156;
var statearr_105158_105179 = state_105156__$1;
(statearr_105158_105179[(2)] = inst_105138);

(statearr_105158_105179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (1))){
var inst_105132 = cljs.core.seq.call(null,coll);
var inst_105133 = inst_105132;
var state_105156__$1 = (function (){var statearr_105159 = state_105156;
(statearr_105159[(7)] = inst_105133);

return statearr_105159;
})();
var statearr_105160_105180 = state_105156__$1;
(statearr_105160_105180[(2)] = null);

(statearr_105160_105180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (4))){
var inst_105133 = (state_105156[(7)]);
var inst_105136 = cljs.core.first.call(null,inst_105133);
var state_105156__$1 = state_105156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105156__$1,(7),ch,inst_105136);
} else {
if((state_val_105157 === (13))){
var inst_105150 = (state_105156[(2)]);
var state_105156__$1 = state_105156;
var statearr_105161_105181 = state_105156__$1;
(statearr_105161_105181[(2)] = inst_105150);

(statearr_105161_105181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (6))){
var inst_105141 = (state_105156[(2)]);
var state_105156__$1 = state_105156;
if(cljs.core.truth_(inst_105141)){
var statearr_105162_105182 = state_105156__$1;
(statearr_105162_105182[(1)] = (8));

} else {
var statearr_105163_105183 = state_105156__$1;
(statearr_105163_105183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (3))){
var inst_105154 = (state_105156[(2)]);
var state_105156__$1 = state_105156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105156__$1,inst_105154);
} else {
if((state_val_105157 === (12))){
var state_105156__$1 = state_105156;
var statearr_105164_105184 = state_105156__$1;
(statearr_105164_105184[(2)] = null);

(statearr_105164_105184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (2))){
var inst_105133 = (state_105156[(7)]);
var state_105156__$1 = state_105156;
if(cljs.core.truth_(inst_105133)){
var statearr_105165_105185 = state_105156__$1;
(statearr_105165_105185[(1)] = (4));

} else {
var statearr_105166_105186 = state_105156__$1;
(statearr_105166_105186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (11))){
var inst_105147 = cljs.core.async.close_BANG_.call(null,ch);
var state_105156__$1 = state_105156;
var statearr_105167_105187 = state_105156__$1;
(statearr_105167_105187[(2)] = inst_105147);

(statearr_105167_105187[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (9))){
var state_105156__$1 = state_105156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_105168_105188 = state_105156__$1;
(statearr_105168_105188[(1)] = (11));

} else {
var statearr_105169_105189 = state_105156__$1;
(statearr_105169_105189[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (5))){
var inst_105133 = (state_105156[(7)]);
var state_105156__$1 = state_105156;
var statearr_105170_105190 = state_105156__$1;
(statearr_105170_105190[(2)] = inst_105133);

(statearr_105170_105190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (10))){
var inst_105152 = (state_105156[(2)]);
var state_105156__$1 = state_105156;
var statearr_105171_105191 = state_105156__$1;
(statearr_105171_105191[(2)] = inst_105152);

(statearr_105171_105191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105157 === (8))){
var inst_105133 = (state_105156[(7)]);
var inst_105143 = cljs.core.next.call(null,inst_105133);
var inst_105133__$1 = inst_105143;
var state_105156__$1 = (function (){var statearr_105172 = state_105156;
(statearr_105172[(7)] = inst_105133__$1);

return statearr_105172;
})();
var statearr_105173_105192 = state_105156__$1;
(statearr_105173_105192[(2)] = null);

(statearr_105173_105192[(1)] = (2));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_105174 = [null,null,null,null,null,null,null,null];
(statearr_105174[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_105174[(1)] = (1));

return statearr_105174;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_105156){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105175){if((e105175 instanceof Object)){
var ex__32974__auto__ = e105175;
var statearr_105176_105193 = state_105156;
(statearr_105176_105193[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105194 = state_105156;
state_105156 = G__105194;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_105156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_105156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105177 = f__33068__auto__.call(null);
(statearr_105177[(6)] = c__33067__auto__);

return statearr_105177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_105195 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_105195.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_105196 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_105196.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_105197 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_105197.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_105198 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_105198.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105199 = (function (ch,cs,meta105200){
this.ch = ch;
this.cs = cs;
this.meta105200 = meta105200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105201,meta105200__$1){
var self__ = this;
var _105201__$1 = this;
return (new cljs.core.async.t_cljs$core$async105199(self__.ch,self__.cs,meta105200__$1));
}));

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105201){
var self__ = this;
var _105201__$1 = this;
return self__.meta105200;
}));

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async105199.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async105199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta105200","meta105200",1136655195,null)], null);
}));

(cljs.core.async.t_cljs$core$async105199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105199");

(cljs.core.async.t_cljs$core$async105199.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async105199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105199.
 */
cljs.core.async.__GT_t_cljs$core$async105199 = (function cljs$core$async$mult_$___GT_t_cljs$core$async105199(ch__$1,cs__$1,meta105200){
return (new cljs.core.async.t_cljs$core$async105199(ch__$1,cs__$1,meta105200));
});

}

return (new cljs.core.async.t_cljs$core$async105199(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33067__auto___105421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105336){
var state_val_105337 = (state_105336[(1)]);
if((state_val_105337 === (7))){
var inst_105332 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105338_105422 = state_105336__$1;
(statearr_105338_105422[(2)] = inst_105332);

(statearr_105338_105422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (20))){
var inst_105235 = (state_105336[(7)]);
var inst_105247 = cljs.core.first.call(null,inst_105235);
var inst_105248 = cljs.core.nth.call(null,inst_105247,(0),null);
var inst_105249 = cljs.core.nth.call(null,inst_105247,(1),null);
var state_105336__$1 = (function (){var statearr_105339 = state_105336;
(statearr_105339[(8)] = inst_105248);

return statearr_105339;
})();
if(cljs.core.truth_(inst_105249)){
var statearr_105340_105423 = state_105336__$1;
(statearr_105340_105423[(1)] = (22));

} else {
var statearr_105341_105424 = state_105336__$1;
(statearr_105341_105424[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (27))){
var inst_105204 = (state_105336[(9)]);
var inst_105284 = (state_105336[(10)]);
var inst_105277 = (state_105336[(11)]);
var inst_105279 = (state_105336[(12)]);
var inst_105284__$1 = cljs.core._nth.call(null,inst_105277,inst_105279);
var inst_105285 = cljs.core.async.put_BANG_.call(null,inst_105284__$1,inst_105204,done);
var state_105336__$1 = (function (){var statearr_105342 = state_105336;
(statearr_105342[(10)] = inst_105284__$1);

return statearr_105342;
})();
if(cljs.core.truth_(inst_105285)){
var statearr_105343_105425 = state_105336__$1;
(statearr_105343_105425[(1)] = (30));

} else {
var statearr_105344_105426 = state_105336__$1;
(statearr_105344_105426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (1))){
var state_105336__$1 = state_105336;
var statearr_105345_105427 = state_105336__$1;
(statearr_105345_105427[(2)] = null);

(statearr_105345_105427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (24))){
var inst_105235 = (state_105336[(7)]);
var inst_105254 = (state_105336[(2)]);
var inst_105255 = cljs.core.next.call(null,inst_105235);
var inst_105213 = inst_105255;
var inst_105214 = null;
var inst_105215 = (0);
var inst_105216 = (0);
var state_105336__$1 = (function (){var statearr_105346 = state_105336;
(statearr_105346[(13)] = inst_105213);

(statearr_105346[(14)] = inst_105214);

(statearr_105346[(15)] = inst_105216);

(statearr_105346[(16)] = inst_105215);

(statearr_105346[(17)] = inst_105254);

return statearr_105346;
})();
var statearr_105347_105428 = state_105336__$1;
(statearr_105347_105428[(2)] = null);

(statearr_105347_105428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (39))){
var state_105336__$1 = state_105336;
var statearr_105351_105429 = state_105336__$1;
(statearr_105351_105429[(2)] = null);

(statearr_105351_105429[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (4))){
var inst_105204 = (state_105336[(9)]);
var inst_105204__$1 = (state_105336[(2)]);
var inst_105205 = (inst_105204__$1 == null);
var state_105336__$1 = (function (){var statearr_105352 = state_105336;
(statearr_105352[(9)] = inst_105204__$1);

return statearr_105352;
})();
if(cljs.core.truth_(inst_105205)){
var statearr_105353_105430 = state_105336__$1;
(statearr_105353_105430[(1)] = (5));

} else {
var statearr_105354_105431 = state_105336__$1;
(statearr_105354_105431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (15))){
var inst_105213 = (state_105336[(13)]);
var inst_105214 = (state_105336[(14)]);
var inst_105216 = (state_105336[(15)]);
var inst_105215 = (state_105336[(16)]);
var inst_105231 = (state_105336[(2)]);
var inst_105232 = (inst_105216 + (1));
var tmp105348 = inst_105213;
var tmp105349 = inst_105214;
var tmp105350 = inst_105215;
var inst_105213__$1 = tmp105348;
var inst_105214__$1 = tmp105349;
var inst_105215__$1 = tmp105350;
var inst_105216__$1 = inst_105232;
var state_105336__$1 = (function (){var statearr_105355 = state_105336;
(statearr_105355[(13)] = inst_105213__$1);

(statearr_105355[(14)] = inst_105214__$1);

(statearr_105355[(15)] = inst_105216__$1);

(statearr_105355[(16)] = inst_105215__$1);

(statearr_105355[(18)] = inst_105231);

return statearr_105355;
})();
var statearr_105356_105432 = state_105336__$1;
(statearr_105356_105432[(2)] = null);

(statearr_105356_105432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (21))){
var inst_105258 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105360_105433 = state_105336__$1;
(statearr_105360_105433[(2)] = inst_105258);

(statearr_105360_105433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (31))){
var inst_105284 = (state_105336[(10)]);
var inst_105288 = done.call(null,null);
var inst_105289 = cljs.core.async.untap_STAR_.call(null,m,inst_105284);
var state_105336__$1 = (function (){var statearr_105361 = state_105336;
(statearr_105361[(19)] = inst_105288);

return statearr_105361;
})();
var statearr_105362_105434 = state_105336__$1;
(statearr_105362_105434[(2)] = inst_105289);

(statearr_105362_105434[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (32))){
var inst_105276 = (state_105336[(20)]);
var inst_105277 = (state_105336[(11)]);
var inst_105278 = (state_105336[(21)]);
var inst_105279 = (state_105336[(12)]);
var inst_105291 = (state_105336[(2)]);
var inst_105292 = (inst_105279 + (1));
var tmp105357 = inst_105276;
var tmp105358 = inst_105277;
var tmp105359 = inst_105278;
var inst_105276__$1 = tmp105357;
var inst_105277__$1 = tmp105358;
var inst_105278__$1 = tmp105359;
var inst_105279__$1 = inst_105292;
var state_105336__$1 = (function (){var statearr_105363 = state_105336;
(statearr_105363[(20)] = inst_105276__$1);

(statearr_105363[(11)] = inst_105277__$1);

(statearr_105363[(22)] = inst_105291);

(statearr_105363[(21)] = inst_105278__$1);

(statearr_105363[(12)] = inst_105279__$1);

return statearr_105363;
})();
var statearr_105364_105435 = state_105336__$1;
(statearr_105364_105435[(2)] = null);

(statearr_105364_105435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (40))){
var inst_105304 = (state_105336[(23)]);
var inst_105308 = done.call(null,null);
var inst_105309 = cljs.core.async.untap_STAR_.call(null,m,inst_105304);
var state_105336__$1 = (function (){var statearr_105365 = state_105336;
(statearr_105365[(24)] = inst_105308);

return statearr_105365;
})();
var statearr_105366_105436 = state_105336__$1;
(statearr_105366_105436[(2)] = inst_105309);

(statearr_105366_105436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (33))){
var inst_105295 = (state_105336[(25)]);
var inst_105297 = cljs.core.chunked_seq_QMARK_.call(null,inst_105295);
var state_105336__$1 = state_105336;
if(inst_105297){
var statearr_105367_105437 = state_105336__$1;
(statearr_105367_105437[(1)] = (36));

} else {
var statearr_105368_105438 = state_105336__$1;
(statearr_105368_105438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (13))){
var inst_105225 = (state_105336[(26)]);
var inst_105228 = cljs.core.async.close_BANG_.call(null,inst_105225);
var state_105336__$1 = state_105336;
var statearr_105369_105439 = state_105336__$1;
(statearr_105369_105439[(2)] = inst_105228);

(statearr_105369_105439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (22))){
var inst_105248 = (state_105336[(8)]);
var inst_105251 = cljs.core.async.close_BANG_.call(null,inst_105248);
var state_105336__$1 = state_105336;
var statearr_105370_105440 = state_105336__$1;
(statearr_105370_105440[(2)] = inst_105251);

(statearr_105370_105440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (36))){
var inst_105295 = (state_105336[(25)]);
var inst_105299 = cljs.core.chunk_first.call(null,inst_105295);
var inst_105300 = cljs.core.chunk_rest.call(null,inst_105295);
var inst_105301 = cljs.core.count.call(null,inst_105299);
var inst_105276 = inst_105300;
var inst_105277 = inst_105299;
var inst_105278 = inst_105301;
var inst_105279 = (0);
var state_105336__$1 = (function (){var statearr_105371 = state_105336;
(statearr_105371[(20)] = inst_105276);

(statearr_105371[(11)] = inst_105277);

(statearr_105371[(21)] = inst_105278);

(statearr_105371[(12)] = inst_105279);

return statearr_105371;
})();
var statearr_105372_105441 = state_105336__$1;
(statearr_105372_105441[(2)] = null);

(statearr_105372_105441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (41))){
var inst_105295 = (state_105336[(25)]);
var inst_105311 = (state_105336[(2)]);
var inst_105312 = cljs.core.next.call(null,inst_105295);
var inst_105276 = inst_105312;
var inst_105277 = null;
var inst_105278 = (0);
var inst_105279 = (0);
var state_105336__$1 = (function (){var statearr_105373 = state_105336;
(statearr_105373[(20)] = inst_105276);

(statearr_105373[(27)] = inst_105311);

(statearr_105373[(11)] = inst_105277);

(statearr_105373[(21)] = inst_105278);

(statearr_105373[(12)] = inst_105279);

return statearr_105373;
})();
var statearr_105374_105442 = state_105336__$1;
(statearr_105374_105442[(2)] = null);

(statearr_105374_105442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (43))){
var state_105336__$1 = state_105336;
var statearr_105375_105443 = state_105336__$1;
(statearr_105375_105443[(2)] = null);

(statearr_105375_105443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (29))){
var inst_105320 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105376_105444 = state_105336__$1;
(statearr_105376_105444[(2)] = inst_105320);

(statearr_105376_105444[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (44))){
var inst_105329 = (state_105336[(2)]);
var state_105336__$1 = (function (){var statearr_105377 = state_105336;
(statearr_105377[(28)] = inst_105329);

return statearr_105377;
})();
var statearr_105378_105445 = state_105336__$1;
(statearr_105378_105445[(2)] = null);

(statearr_105378_105445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (6))){
var inst_105268 = (state_105336[(29)]);
var inst_105267 = cljs.core.deref.call(null,cs);
var inst_105268__$1 = cljs.core.keys.call(null,inst_105267);
var inst_105269 = cljs.core.count.call(null,inst_105268__$1);
var inst_105270 = cljs.core.reset_BANG_.call(null,dctr,inst_105269);
var inst_105275 = cljs.core.seq.call(null,inst_105268__$1);
var inst_105276 = inst_105275;
var inst_105277 = null;
var inst_105278 = (0);
var inst_105279 = (0);
var state_105336__$1 = (function (){var statearr_105379 = state_105336;
(statearr_105379[(20)] = inst_105276);

(statearr_105379[(30)] = inst_105270);

(statearr_105379[(11)] = inst_105277);

(statearr_105379[(21)] = inst_105278);

(statearr_105379[(29)] = inst_105268__$1);

(statearr_105379[(12)] = inst_105279);

return statearr_105379;
})();
var statearr_105380_105446 = state_105336__$1;
(statearr_105380_105446[(2)] = null);

(statearr_105380_105446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (28))){
var inst_105295 = (state_105336[(25)]);
var inst_105276 = (state_105336[(20)]);
var inst_105295__$1 = cljs.core.seq.call(null,inst_105276);
var state_105336__$1 = (function (){var statearr_105381 = state_105336;
(statearr_105381[(25)] = inst_105295__$1);

return statearr_105381;
})();
if(inst_105295__$1){
var statearr_105382_105447 = state_105336__$1;
(statearr_105382_105447[(1)] = (33));

} else {
var statearr_105383_105448 = state_105336__$1;
(statearr_105383_105448[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (25))){
var inst_105278 = (state_105336[(21)]);
var inst_105279 = (state_105336[(12)]);
var inst_105281 = (inst_105279 < inst_105278);
var inst_105282 = inst_105281;
var state_105336__$1 = state_105336;
if(cljs.core.truth_(inst_105282)){
var statearr_105384_105449 = state_105336__$1;
(statearr_105384_105449[(1)] = (27));

} else {
var statearr_105385_105450 = state_105336__$1;
(statearr_105385_105450[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (34))){
var state_105336__$1 = state_105336;
var statearr_105386_105451 = state_105336__$1;
(statearr_105386_105451[(2)] = null);

(statearr_105386_105451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (17))){
var state_105336__$1 = state_105336;
var statearr_105387_105452 = state_105336__$1;
(statearr_105387_105452[(2)] = null);

(statearr_105387_105452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (3))){
var inst_105334 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105336__$1,inst_105334);
} else {
if((state_val_105337 === (12))){
var inst_105263 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105388_105453 = state_105336__$1;
(statearr_105388_105453[(2)] = inst_105263);

(statearr_105388_105453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (2))){
var state_105336__$1 = state_105336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105336__$1,(4),ch);
} else {
if((state_val_105337 === (23))){
var state_105336__$1 = state_105336;
var statearr_105389_105454 = state_105336__$1;
(statearr_105389_105454[(2)] = null);

(statearr_105389_105454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (35))){
var inst_105318 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105390_105455 = state_105336__$1;
(statearr_105390_105455[(2)] = inst_105318);

(statearr_105390_105455[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (19))){
var inst_105235 = (state_105336[(7)]);
var inst_105239 = cljs.core.chunk_first.call(null,inst_105235);
var inst_105240 = cljs.core.chunk_rest.call(null,inst_105235);
var inst_105241 = cljs.core.count.call(null,inst_105239);
var inst_105213 = inst_105240;
var inst_105214 = inst_105239;
var inst_105215 = inst_105241;
var inst_105216 = (0);
var state_105336__$1 = (function (){var statearr_105391 = state_105336;
(statearr_105391[(13)] = inst_105213);

(statearr_105391[(14)] = inst_105214);

(statearr_105391[(15)] = inst_105216);

(statearr_105391[(16)] = inst_105215);

return statearr_105391;
})();
var statearr_105392_105456 = state_105336__$1;
(statearr_105392_105456[(2)] = null);

(statearr_105392_105456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (11))){
var inst_105213 = (state_105336[(13)]);
var inst_105235 = (state_105336[(7)]);
var inst_105235__$1 = cljs.core.seq.call(null,inst_105213);
var state_105336__$1 = (function (){var statearr_105393 = state_105336;
(statearr_105393[(7)] = inst_105235__$1);

return statearr_105393;
})();
if(inst_105235__$1){
var statearr_105394_105457 = state_105336__$1;
(statearr_105394_105457[(1)] = (16));

} else {
var statearr_105395_105458 = state_105336__$1;
(statearr_105395_105458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (9))){
var inst_105265 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105396_105459 = state_105336__$1;
(statearr_105396_105459[(2)] = inst_105265);

(statearr_105396_105459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (5))){
var inst_105211 = cljs.core.deref.call(null,cs);
var inst_105212 = cljs.core.seq.call(null,inst_105211);
var inst_105213 = inst_105212;
var inst_105214 = null;
var inst_105215 = (0);
var inst_105216 = (0);
var state_105336__$1 = (function (){var statearr_105397 = state_105336;
(statearr_105397[(13)] = inst_105213);

(statearr_105397[(14)] = inst_105214);

(statearr_105397[(15)] = inst_105216);

(statearr_105397[(16)] = inst_105215);

return statearr_105397;
})();
var statearr_105398_105460 = state_105336__$1;
(statearr_105398_105460[(2)] = null);

(statearr_105398_105460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (14))){
var state_105336__$1 = state_105336;
var statearr_105399_105461 = state_105336__$1;
(statearr_105399_105461[(2)] = null);

(statearr_105399_105461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (45))){
var inst_105326 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105400_105462 = state_105336__$1;
(statearr_105400_105462[(2)] = inst_105326);

(statearr_105400_105462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (26))){
var inst_105268 = (state_105336[(29)]);
var inst_105322 = (state_105336[(2)]);
var inst_105323 = cljs.core.seq.call(null,inst_105268);
var state_105336__$1 = (function (){var statearr_105401 = state_105336;
(statearr_105401[(31)] = inst_105322);

return statearr_105401;
})();
if(inst_105323){
var statearr_105402_105463 = state_105336__$1;
(statearr_105402_105463[(1)] = (42));

} else {
var statearr_105403_105464 = state_105336__$1;
(statearr_105403_105464[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (16))){
var inst_105235 = (state_105336[(7)]);
var inst_105237 = cljs.core.chunked_seq_QMARK_.call(null,inst_105235);
var state_105336__$1 = state_105336;
if(inst_105237){
var statearr_105404_105465 = state_105336__$1;
(statearr_105404_105465[(1)] = (19));

} else {
var statearr_105405_105466 = state_105336__$1;
(statearr_105405_105466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (38))){
var inst_105315 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105406_105467 = state_105336__$1;
(statearr_105406_105467[(2)] = inst_105315);

(statearr_105406_105467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (30))){
var state_105336__$1 = state_105336;
var statearr_105407_105468 = state_105336__$1;
(statearr_105407_105468[(2)] = null);

(statearr_105407_105468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (10))){
var inst_105214 = (state_105336[(14)]);
var inst_105216 = (state_105336[(15)]);
var inst_105224 = cljs.core._nth.call(null,inst_105214,inst_105216);
var inst_105225 = cljs.core.nth.call(null,inst_105224,(0),null);
var inst_105226 = cljs.core.nth.call(null,inst_105224,(1),null);
var state_105336__$1 = (function (){var statearr_105408 = state_105336;
(statearr_105408[(26)] = inst_105225);

return statearr_105408;
})();
if(cljs.core.truth_(inst_105226)){
var statearr_105409_105469 = state_105336__$1;
(statearr_105409_105469[(1)] = (13));

} else {
var statearr_105410_105470 = state_105336__$1;
(statearr_105410_105470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (18))){
var inst_105261 = (state_105336[(2)]);
var state_105336__$1 = state_105336;
var statearr_105411_105471 = state_105336__$1;
(statearr_105411_105471[(2)] = inst_105261);

(statearr_105411_105471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (42))){
var state_105336__$1 = state_105336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105336__$1,(45),dchan);
} else {
if((state_val_105337 === (37))){
var inst_105204 = (state_105336[(9)]);
var inst_105304 = (state_105336[(23)]);
var inst_105295 = (state_105336[(25)]);
var inst_105304__$1 = cljs.core.first.call(null,inst_105295);
var inst_105305 = cljs.core.async.put_BANG_.call(null,inst_105304__$1,inst_105204,done);
var state_105336__$1 = (function (){var statearr_105412 = state_105336;
(statearr_105412[(23)] = inst_105304__$1);

return statearr_105412;
})();
if(cljs.core.truth_(inst_105305)){
var statearr_105413_105472 = state_105336__$1;
(statearr_105413_105472[(1)] = (39));

} else {
var statearr_105414_105473 = state_105336__$1;
(statearr_105414_105473[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105337 === (8))){
var inst_105216 = (state_105336[(15)]);
var inst_105215 = (state_105336[(16)]);
var inst_105218 = (inst_105216 < inst_105215);
var inst_105219 = inst_105218;
var state_105336__$1 = state_105336;
if(cljs.core.truth_(inst_105219)){
var statearr_105415_105474 = state_105336__$1;
(statearr_105415_105474[(1)] = (10));

} else {
var statearr_105416_105475 = state_105336__$1;
(statearr_105416_105475[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32971__auto__ = null;
var cljs$core$async$mult_$_state_machine__32971__auto____0 = (function (){
var statearr_105417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105417[(0)] = cljs$core$async$mult_$_state_machine__32971__auto__);

(statearr_105417[(1)] = (1));

return statearr_105417;
});
var cljs$core$async$mult_$_state_machine__32971__auto____1 = (function (state_105336){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105418){if((e105418 instanceof Object)){
var ex__32974__auto__ = e105418;
var statearr_105419_105476 = state_105336;
(statearr_105419_105476[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105477 = state_105336;
state_105336 = G__105477;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32971__auto__ = function(state_105336){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32971__auto____1.call(this,state_105336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32971__auto____0;
cljs$core$async$mult_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32971__auto____1;
return cljs$core$async$mult_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105420 = f__33068__auto__.call(null);
(statearr_105420[(6)] = c__33067__auto___105421);

return statearr_105420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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
var G__105479 = arguments.length;
switch (G__105479) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_105481 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_105481.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_105482 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_105482.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_105483 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_105483.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_105484 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_105484.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_105485 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_105485.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___105495 = arguments.length;
var i__5770__auto___105496 = (0);
while(true){
if((i__5770__auto___105496 < len__5769__auto___105495)){
args__5775__auto__.push((arguments[i__5770__auto___105496]));

var G__105497 = (i__5770__auto___105496 + (1));
i__5770__auto___105496 = G__105497;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__105490){
var map__105491 = p__105490;
var map__105491__$1 = cljs.core.__destructure_map.call(null,map__105491);
var opts = map__105491__$1;
var statearr_105492_105498 = state;
(statearr_105492_105498[(1)] = cont_block);


var temp__5818__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_105493_105499 = state;
(statearr_105493_105499[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5818__auto__)){
var cb = temp__5818__auto__;
var statearr_105494_105500 = state;
(statearr_105494_105500[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq105486){
var G__105487 = cljs.core.first.call(null,seq105486);
var seq105486__$1 = cljs.core.next.call(null,seq105486);
var G__105488 = cljs.core.first.call(null,seq105486__$1);
var seq105486__$2 = cljs.core.next.call(null,seq105486__$1);
var G__105489 = cljs.core.first.call(null,seq105486__$2);
var seq105486__$3 = cljs.core.next.call(null,seq105486__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105487,G__105488,G__105489,seq105486__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105501 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta105502){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta105502 = meta105502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105503,meta105502__$1){
var self__ = this;
var _105503__$1 = this;
return (new cljs.core.async.t_cljs$core$async105501(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta105502__$1));
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105503){
var self__ = this;
var _105503__$1 = this;
return self__.meta105502;
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async105501.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async105501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta105502","meta105502",-1413103061,null)], null);
}));

(cljs.core.async.t_cljs$core$async105501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105501");

(cljs.core.async.t_cljs$core$async105501.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async105501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105501.
 */
cljs.core.async.__GT_t_cljs$core$async105501 = (function cljs$core$async$mix_$___GT_t_cljs$core$async105501(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta105502){
return (new cljs.core.async.t_cljs$core$async105501(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta105502));
});

}

return (new cljs.core.async.t_cljs$core$async105501(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33067__auto___105615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105571){
var state_val_105572 = (state_105571[(1)]);
if((state_val_105572 === (7))){
var inst_105531 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
if(cljs.core.truth_(inst_105531)){
var statearr_105573_105616 = state_105571__$1;
(statearr_105573_105616[(1)] = (8));

} else {
var statearr_105574_105617 = state_105571__$1;
(statearr_105574_105617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (20))){
var inst_105524 = (state_105571[(7)]);
var state_105571__$1 = state_105571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105571__$1,(23),out,inst_105524);
} else {
if((state_val_105572 === (1))){
var inst_105507 = calc_state.call(null);
var inst_105508 = cljs.core.__destructure_map.call(null,inst_105507);
var inst_105509 = cljs.core.get.call(null,inst_105508,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_105510 = cljs.core.get.call(null,inst_105508,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_105511 = cljs.core.get.call(null,inst_105508,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_105512 = inst_105507;
var state_105571__$1 = (function (){var statearr_105575 = state_105571;
(statearr_105575[(8)] = inst_105511);

(statearr_105575[(9)] = inst_105512);

(statearr_105575[(10)] = inst_105510);

(statearr_105575[(11)] = inst_105509);

return statearr_105575;
})();
var statearr_105576_105618 = state_105571__$1;
(statearr_105576_105618[(2)] = null);

(statearr_105576_105618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (24))){
var inst_105515 = (state_105571[(12)]);
var inst_105512 = inst_105515;
var state_105571__$1 = (function (){var statearr_105577 = state_105571;
(statearr_105577[(9)] = inst_105512);

return statearr_105577;
})();
var statearr_105578_105619 = state_105571__$1;
(statearr_105578_105619[(2)] = null);

(statearr_105578_105619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (4))){
var inst_105524 = (state_105571[(7)]);
var inst_105526 = (state_105571[(13)]);
var inst_105523 = (state_105571[(2)]);
var inst_105524__$1 = cljs.core.nth.call(null,inst_105523,(0),null);
var inst_105525 = cljs.core.nth.call(null,inst_105523,(1),null);
var inst_105526__$1 = (inst_105524__$1 == null);
var state_105571__$1 = (function (){var statearr_105579 = state_105571;
(statearr_105579[(7)] = inst_105524__$1);

(statearr_105579[(13)] = inst_105526__$1);

(statearr_105579[(14)] = inst_105525);

return statearr_105579;
})();
if(cljs.core.truth_(inst_105526__$1)){
var statearr_105580_105620 = state_105571__$1;
(statearr_105580_105620[(1)] = (5));

} else {
var statearr_105581_105621 = state_105571__$1;
(statearr_105581_105621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (15))){
var inst_105545 = (state_105571[(15)]);
var inst_105516 = (state_105571[(16)]);
var inst_105545__$1 = cljs.core.empty_QMARK_.call(null,inst_105516);
var state_105571__$1 = (function (){var statearr_105582 = state_105571;
(statearr_105582[(15)] = inst_105545__$1);

return statearr_105582;
})();
if(inst_105545__$1){
var statearr_105583_105622 = state_105571__$1;
(statearr_105583_105622[(1)] = (17));

} else {
var statearr_105584_105623 = state_105571__$1;
(statearr_105584_105623[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (21))){
var inst_105515 = (state_105571[(12)]);
var inst_105512 = inst_105515;
var state_105571__$1 = (function (){var statearr_105585 = state_105571;
(statearr_105585[(9)] = inst_105512);

return statearr_105585;
})();
var statearr_105586_105624 = state_105571__$1;
(statearr_105586_105624[(2)] = null);

(statearr_105586_105624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (13))){
var inst_105538 = (state_105571[(2)]);
var inst_105539 = calc_state.call(null);
var inst_105512 = inst_105539;
var state_105571__$1 = (function (){var statearr_105587 = state_105571;
(statearr_105587[(9)] = inst_105512);

(statearr_105587[(17)] = inst_105538);

return statearr_105587;
})();
var statearr_105588_105625 = state_105571__$1;
(statearr_105588_105625[(2)] = null);

(statearr_105588_105625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (22))){
var inst_105565 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
var statearr_105589_105626 = state_105571__$1;
(statearr_105589_105626[(2)] = inst_105565);

(statearr_105589_105626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (6))){
var inst_105525 = (state_105571[(14)]);
var inst_105529 = cljs.core._EQ_.call(null,inst_105525,change);
var state_105571__$1 = state_105571;
var statearr_105590_105627 = state_105571__$1;
(statearr_105590_105627[(2)] = inst_105529);

(statearr_105590_105627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (25))){
var state_105571__$1 = state_105571;
var statearr_105591_105628 = state_105571__$1;
(statearr_105591_105628[(2)] = null);

(statearr_105591_105628[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (17))){
var inst_105517 = (state_105571[(18)]);
var inst_105525 = (state_105571[(14)]);
var inst_105547 = inst_105517.call(null,inst_105525);
var inst_105548 = cljs.core.not.call(null,inst_105547);
var state_105571__$1 = state_105571;
var statearr_105592_105629 = state_105571__$1;
(statearr_105592_105629[(2)] = inst_105548);

(statearr_105592_105629[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (3))){
var inst_105569 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105571__$1,inst_105569);
} else {
if((state_val_105572 === (12))){
var state_105571__$1 = state_105571;
var statearr_105593_105630 = state_105571__$1;
(statearr_105593_105630[(2)] = null);

(statearr_105593_105630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (2))){
var inst_105515 = (state_105571[(12)]);
var inst_105512 = (state_105571[(9)]);
var inst_105515__$1 = cljs.core.__destructure_map.call(null,inst_105512);
var inst_105516 = cljs.core.get.call(null,inst_105515__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_105517 = cljs.core.get.call(null,inst_105515__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_105518 = cljs.core.get.call(null,inst_105515__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_105571__$1 = (function (){var statearr_105594 = state_105571;
(statearr_105594[(18)] = inst_105517);

(statearr_105594[(12)] = inst_105515__$1);

(statearr_105594[(16)] = inst_105516);

return statearr_105594;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_105571__$1,(4),inst_105518);
} else {
if((state_val_105572 === (23))){
var inst_105556 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
if(cljs.core.truth_(inst_105556)){
var statearr_105595_105631 = state_105571__$1;
(statearr_105595_105631[(1)] = (24));

} else {
var statearr_105596_105632 = state_105571__$1;
(statearr_105596_105632[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (19))){
var inst_105551 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
var statearr_105597_105633 = state_105571__$1;
(statearr_105597_105633[(2)] = inst_105551);

(statearr_105597_105633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (11))){
var inst_105525 = (state_105571[(14)]);
var inst_105535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_105525);
var state_105571__$1 = state_105571;
var statearr_105598_105634 = state_105571__$1;
(statearr_105598_105634[(2)] = inst_105535);

(statearr_105598_105634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (9))){
var inst_105516 = (state_105571[(16)]);
var inst_105525 = (state_105571[(14)]);
var inst_105542 = (state_105571[(19)]);
var inst_105542__$1 = inst_105516.call(null,inst_105525);
var state_105571__$1 = (function (){var statearr_105599 = state_105571;
(statearr_105599[(19)] = inst_105542__$1);

return statearr_105599;
})();
if(cljs.core.truth_(inst_105542__$1)){
var statearr_105600_105635 = state_105571__$1;
(statearr_105600_105635[(1)] = (14));

} else {
var statearr_105601_105636 = state_105571__$1;
(statearr_105601_105636[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (5))){
var inst_105526 = (state_105571[(13)]);
var state_105571__$1 = state_105571;
var statearr_105602_105637 = state_105571__$1;
(statearr_105602_105637[(2)] = inst_105526);

(statearr_105602_105637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (14))){
var inst_105542 = (state_105571[(19)]);
var state_105571__$1 = state_105571;
var statearr_105603_105638 = state_105571__$1;
(statearr_105603_105638[(2)] = inst_105542);

(statearr_105603_105638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (26))){
var inst_105561 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
var statearr_105604_105639 = state_105571__$1;
(statearr_105604_105639[(2)] = inst_105561);

(statearr_105604_105639[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (16))){
var inst_105553 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
if(cljs.core.truth_(inst_105553)){
var statearr_105605_105640 = state_105571__$1;
(statearr_105605_105640[(1)] = (20));

} else {
var statearr_105606_105641 = state_105571__$1;
(statearr_105606_105641[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (10))){
var inst_105567 = (state_105571[(2)]);
var state_105571__$1 = state_105571;
var statearr_105607_105642 = state_105571__$1;
(statearr_105607_105642[(2)] = inst_105567);

(statearr_105607_105642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (18))){
var inst_105545 = (state_105571[(15)]);
var state_105571__$1 = state_105571;
var statearr_105608_105643 = state_105571__$1;
(statearr_105608_105643[(2)] = inst_105545);

(statearr_105608_105643[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105572 === (8))){
var inst_105524 = (state_105571[(7)]);
var inst_105533 = (inst_105524 == null);
var state_105571__$1 = state_105571;
if(cljs.core.truth_(inst_105533)){
var statearr_105609_105644 = state_105571__$1;
(statearr_105609_105644[(1)] = (11));

} else {
var statearr_105610_105645 = state_105571__$1;
(statearr_105610_105645[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32971__auto__ = null;
var cljs$core$async$mix_$_state_machine__32971__auto____0 = (function (){
var statearr_105611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105611[(0)] = cljs$core$async$mix_$_state_machine__32971__auto__);

(statearr_105611[(1)] = (1));

return statearr_105611;
});
var cljs$core$async$mix_$_state_machine__32971__auto____1 = (function (state_105571){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105612){if((e105612 instanceof Object)){
var ex__32974__auto__ = e105612;
var statearr_105613_105646 = state_105571;
(statearr_105613_105646[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105647 = state_105571;
state_105571 = G__105647;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32971__auto__ = function(state_105571){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32971__auto____1.call(this,state_105571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32971__auto____0;
cljs$core$async$mix_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32971__auto____1;
return cljs$core$async$mix_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105614 = f__33068__auto__.call(null);
(statearr_105614[(6)] = c__33067__auto___105615);

return statearr_105614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_105650 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_105650.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_105651 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_105651.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_105652 = (function() {
var G__105653 = null;
var G__105653__1 = (function (p){
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
var G__105653__2 = (function (p,v){
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
G__105653 = function(p,v){
switch(arguments.length){
case 1:
return G__105653__1.call(this,p);
case 2:
return G__105653__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__105653.cljs$core$IFn$_invoke$arity$1 = G__105653__1;
G__105653.cljs$core$IFn$_invoke$arity$2 = G__105653__2;
return G__105653;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__105649 = arguments.length;
switch (G__105649) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_105652.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_105652.call(null,p,v);
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
var G__105657 = arguments.length;
switch (G__105657) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__105655_SHARP_){
if(cljs.core.truth_(p1__105655_SHARP_.call(null,topic))){
return p1__105655_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__105655_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105658 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta105659){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta105659 = meta105659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105660,meta105659__$1){
var self__ = this;
var _105660__$1 = this;
return (new cljs.core.async.t_cljs$core$async105658(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta105659__$1));
}));

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105660){
var self__ = this;
var _105660__$1 = this;
return self__.meta105659;
}));

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async105658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async105658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta105659","meta105659",1405803800,null)], null);
}));

(cljs.core.async.t_cljs$core$async105658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105658");

(cljs.core.async.t_cljs$core$async105658.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async105658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105658.
 */
cljs.core.async.__GT_t_cljs$core$async105658 = (function cljs$core$async$__GT_t_cljs$core$async105658(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta105659){
return (new cljs.core.async.t_cljs$core$async105658(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta105659));
});

}

return (new cljs.core.async.t_cljs$core$async105658(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33067__auto___105778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105732){
var state_val_105733 = (state_105732[(1)]);
if((state_val_105733 === (7))){
var inst_105728 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
var statearr_105734_105779 = state_105732__$1;
(statearr_105734_105779[(2)] = inst_105728);

(statearr_105734_105779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (20))){
var state_105732__$1 = state_105732;
var statearr_105735_105780 = state_105732__$1;
(statearr_105735_105780[(2)] = null);

(statearr_105735_105780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (1))){
var state_105732__$1 = state_105732;
var statearr_105736_105781 = state_105732__$1;
(statearr_105736_105781[(2)] = null);

(statearr_105736_105781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (24))){
var inst_105711 = (state_105732[(7)]);
var inst_105720 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_105711);
var state_105732__$1 = state_105732;
var statearr_105737_105782 = state_105732__$1;
(statearr_105737_105782[(2)] = inst_105720);

(statearr_105737_105782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (4))){
var inst_105663 = (state_105732[(8)]);
var inst_105663__$1 = (state_105732[(2)]);
var inst_105664 = (inst_105663__$1 == null);
var state_105732__$1 = (function (){var statearr_105738 = state_105732;
(statearr_105738[(8)] = inst_105663__$1);

return statearr_105738;
})();
if(cljs.core.truth_(inst_105664)){
var statearr_105739_105783 = state_105732__$1;
(statearr_105739_105783[(1)] = (5));

} else {
var statearr_105740_105784 = state_105732__$1;
(statearr_105740_105784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (15))){
var inst_105705 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
var statearr_105741_105785 = state_105732__$1;
(statearr_105741_105785[(2)] = inst_105705);

(statearr_105741_105785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (21))){
var inst_105725 = (state_105732[(2)]);
var state_105732__$1 = (function (){var statearr_105742 = state_105732;
(statearr_105742[(9)] = inst_105725);

return statearr_105742;
})();
var statearr_105743_105786 = state_105732__$1;
(statearr_105743_105786[(2)] = null);

(statearr_105743_105786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (13))){
var inst_105687 = (state_105732[(10)]);
var inst_105689 = cljs.core.chunked_seq_QMARK_.call(null,inst_105687);
var state_105732__$1 = state_105732;
if(inst_105689){
var statearr_105744_105787 = state_105732__$1;
(statearr_105744_105787[(1)] = (16));

} else {
var statearr_105745_105788 = state_105732__$1;
(statearr_105745_105788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (22))){
var inst_105717 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
if(cljs.core.truth_(inst_105717)){
var statearr_105746_105789 = state_105732__$1;
(statearr_105746_105789[(1)] = (23));

} else {
var statearr_105747_105790 = state_105732__$1;
(statearr_105747_105790[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (6))){
var inst_105713 = (state_105732[(11)]);
var inst_105711 = (state_105732[(7)]);
var inst_105663 = (state_105732[(8)]);
var inst_105711__$1 = topic_fn.call(null,inst_105663);
var inst_105712 = cljs.core.deref.call(null,mults);
var inst_105713__$1 = cljs.core.get.call(null,inst_105712,inst_105711__$1);
var state_105732__$1 = (function (){var statearr_105748 = state_105732;
(statearr_105748[(11)] = inst_105713__$1);

(statearr_105748[(7)] = inst_105711__$1);

return statearr_105748;
})();
if(cljs.core.truth_(inst_105713__$1)){
var statearr_105749_105791 = state_105732__$1;
(statearr_105749_105791[(1)] = (19));

} else {
var statearr_105750_105792 = state_105732__$1;
(statearr_105750_105792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (25))){
var inst_105722 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
var statearr_105751_105793 = state_105732__$1;
(statearr_105751_105793[(2)] = inst_105722);

(statearr_105751_105793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (17))){
var inst_105687 = (state_105732[(10)]);
var inst_105696 = cljs.core.first.call(null,inst_105687);
var inst_105697 = cljs.core.async.muxch_STAR_.call(null,inst_105696);
var inst_105698 = cljs.core.async.close_BANG_.call(null,inst_105697);
var inst_105699 = cljs.core.next.call(null,inst_105687);
var inst_105673 = inst_105699;
var inst_105674 = null;
var inst_105675 = (0);
var inst_105676 = (0);
var state_105732__$1 = (function (){var statearr_105752 = state_105732;
(statearr_105752[(12)] = inst_105674);

(statearr_105752[(13)] = inst_105698);

(statearr_105752[(14)] = inst_105675);

(statearr_105752[(15)] = inst_105676);

(statearr_105752[(16)] = inst_105673);

return statearr_105752;
})();
var statearr_105753_105794 = state_105732__$1;
(statearr_105753_105794[(2)] = null);

(statearr_105753_105794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (3))){
var inst_105730 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105732__$1,inst_105730);
} else {
if((state_val_105733 === (12))){
var inst_105707 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
var statearr_105754_105795 = state_105732__$1;
(statearr_105754_105795[(2)] = inst_105707);

(statearr_105754_105795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (2))){
var state_105732__$1 = state_105732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105732__$1,(4),ch);
} else {
if((state_val_105733 === (23))){
var state_105732__$1 = state_105732;
var statearr_105755_105796 = state_105732__$1;
(statearr_105755_105796[(2)] = null);

(statearr_105755_105796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (19))){
var inst_105713 = (state_105732[(11)]);
var inst_105663 = (state_105732[(8)]);
var inst_105715 = cljs.core.async.muxch_STAR_.call(null,inst_105713);
var state_105732__$1 = state_105732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105732__$1,(22),inst_105715,inst_105663);
} else {
if((state_val_105733 === (11))){
var inst_105687 = (state_105732[(10)]);
var inst_105673 = (state_105732[(16)]);
var inst_105687__$1 = cljs.core.seq.call(null,inst_105673);
var state_105732__$1 = (function (){var statearr_105756 = state_105732;
(statearr_105756[(10)] = inst_105687__$1);

return statearr_105756;
})();
if(inst_105687__$1){
var statearr_105757_105797 = state_105732__$1;
(statearr_105757_105797[(1)] = (13));

} else {
var statearr_105758_105798 = state_105732__$1;
(statearr_105758_105798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (9))){
var inst_105709 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
var statearr_105759_105799 = state_105732__$1;
(statearr_105759_105799[(2)] = inst_105709);

(statearr_105759_105799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (5))){
var inst_105670 = cljs.core.deref.call(null,mults);
var inst_105671 = cljs.core.vals.call(null,inst_105670);
var inst_105672 = cljs.core.seq.call(null,inst_105671);
var inst_105673 = inst_105672;
var inst_105674 = null;
var inst_105675 = (0);
var inst_105676 = (0);
var state_105732__$1 = (function (){var statearr_105760 = state_105732;
(statearr_105760[(12)] = inst_105674);

(statearr_105760[(14)] = inst_105675);

(statearr_105760[(15)] = inst_105676);

(statearr_105760[(16)] = inst_105673);

return statearr_105760;
})();
var statearr_105761_105800 = state_105732__$1;
(statearr_105761_105800[(2)] = null);

(statearr_105761_105800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (14))){
var state_105732__$1 = state_105732;
var statearr_105765_105801 = state_105732__$1;
(statearr_105765_105801[(2)] = null);

(statearr_105765_105801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (16))){
var inst_105687 = (state_105732[(10)]);
var inst_105691 = cljs.core.chunk_first.call(null,inst_105687);
var inst_105692 = cljs.core.chunk_rest.call(null,inst_105687);
var inst_105693 = cljs.core.count.call(null,inst_105691);
var inst_105673 = inst_105692;
var inst_105674 = inst_105691;
var inst_105675 = inst_105693;
var inst_105676 = (0);
var state_105732__$1 = (function (){var statearr_105766 = state_105732;
(statearr_105766[(12)] = inst_105674);

(statearr_105766[(14)] = inst_105675);

(statearr_105766[(15)] = inst_105676);

(statearr_105766[(16)] = inst_105673);

return statearr_105766;
})();
var statearr_105767_105802 = state_105732__$1;
(statearr_105767_105802[(2)] = null);

(statearr_105767_105802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (10))){
var inst_105674 = (state_105732[(12)]);
var inst_105675 = (state_105732[(14)]);
var inst_105676 = (state_105732[(15)]);
var inst_105673 = (state_105732[(16)]);
var inst_105681 = cljs.core._nth.call(null,inst_105674,inst_105676);
var inst_105682 = cljs.core.async.muxch_STAR_.call(null,inst_105681);
var inst_105683 = cljs.core.async.close_BANG_.call(null,inst_105682);
var inst_105684 = (inst_105676 + (1));
var tmp105762 = inst_105674;
var tmp105763 = inst_105675;
var tmp105764 = inst_105673;
var inst_105673__$1 = tmp105764;
var inst_105674__$1 = tmp105762;
var inst_105675__$1 = tmp105763;
var inst_105676__$1 = inst_105684;
var state_105732__$1 = (function (){var statearr_105768 = state_105732;
(statearr_105768[(12)] = inst_105674__$1);

(statearr_105768[(17)] = inst_105683);

(statearr_105768[(14)] = inst_105675__$1);

(statearr_105768[(15)] = inst_105676__$1);

(statearr_105768[(16)] = inst_105673__$1);

return statearr_105768;
})();
var statearr_105769_105803 = state_105732__$1;
(statearr_105769_105803[(2)] = null);

(statearr_105769_105803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (18))){
var inst_105702 = (state_105732[(2)]);
var state_105732__$1 = state_105732;
var statearr_105770_105804 = state_105732__$1;
(statearr_105770_105804[(2)] = inst_105702);

(statearr_105770_105804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105733 === (8))){
var inst_105675 = (state_105732[(14)]);
var inst_105676 = (state_105732[(15)]);
var inst_105678 = (inst_105676 < inst_105675);
var inst_105679 = inst_105678;
var state_105732__$1 = state_105732;
if(cljs.core.truth_(inst_105679)){
var statearr_105771_105805 = state_105732__$1;
(statearr_105771_105805[(1)] = (10));

} else {
var statearr_105772_105806 = state_105732__$1;
(statearr_105772_105806[(1)] = (11));

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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_105773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105773[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_105773[(1)] = (1));

return statearr_105773;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_105732){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105774){if((e105774 instanceof Object)){
var ex__32974__auto__ = e105774;
var statearr_105775_105807 = state_105732;
(statearr_105775_105807[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105808 = state_105732;
state_105732 = G__105808;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_105732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_105732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105776 = f__33068__auto__.call(null);
(statearr_105776[(6)] = c__33067__auto___105778);

return statearr_105776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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
var G__105810 = arguments.length;
switch (G__105810) {
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
var G__105813 = arguments.length;
switch (G__105813) {
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
var G__105816 = arguments.length;
switch (G__105816) {
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
var c__33067__auto___105883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105855){
var state_val_105856 = (state_105855[(1)]);
if((state_val_105856 === (7))){
var state_105855__$1 = state_105855;
var statearr_105857_105884 = state_105855__$1;
(statearr_105857_105884[(2)] = null);

(statearr_105857_105884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (1))){
var state_105855__$1 = state_105855;
var statearr_105858_105885 = state_105855__$1;
(statearr_105858_105885[(2)] = null);

(statearr_105858_105885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (4))){
var inst_105819 = (state_105855[(7)]);
var inst_105821 = (inst_105819 < cnt);
var state_105855__$1 = state_105855;
if(cljs.core.truth_(inst_105821)){
var statearr_105859_105886 = state_105855__$1;
(statearr_105859_105886[(1)] = (6));

} else {
var statearr_105860_105887 = state_105855__$1;
(statearr_105860_105887[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (15))){
var inst_105851 = (state_105855[(2)]);
var state_105855__$1 = state_105855;
var statearr_105861_105888 = state_105855__$1;
(statearr_105861_105888[(2)] = inst_105851);

(statearr_105861_105888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (13))){
var inst_105844 = cljs.core.async.close_BANG_.call(null,out);
var state_105855__$1 = state_105855;
var statearr_105862_105889 = state_105855__$1;
(statearr_105862_105889[(2)] = inst_105844);

(statearr_105862_105889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (6))){
var state_105855__$1 = state_105855;
var statearr_105863_105890 = state_105855__$1;
(statearr_105863_105890[(2)] = null);

(statearr_105863_105890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (3))){
var inst_105853 = (state_105855[(2)]);
var state_105855__$1 = state_105855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105855__$1,inst_105853);
} else {
if((state_val_105856 === (12))){
var inst_105841 = (state_105855[(8)]);
var inst_105841__$1 = (state_105855[(2)]);
var inst_105842 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_105841__$1);
var state_105855__$1 = (function (){var statearr_105864 = state_105855;
(statearr_105864[(8)] = inst_105841__$1);

return statearr_105864;
})();
if(cljs.core.truth_(inst_105842)){
var statearr_105865_105891 = state_105855__$1;
(statearr_105865_105891[(1)] = (13));

} else {
var statearr_105866_105892 = state_105855__$1;
(statearr_105866_105892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (2))){
var inst_105818 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_105819 = (0);
var state_105855__$1 = (function (){var statearr_105867 = state_105855;
(statearr_105867[(9)] = inst_105818);

(statearr_105867[(7)] = inst_105819);

return statearr_105867;
})();
var statearr_105868_105893 = state_105855__$1;
(statearr_105868_105893[(2)] = null);

(statearr_105868_105893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (11))){
var inst_105819 = (state_105855[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_105855,(10),Object,null,(9));
var inst_105828 = chs__$1.call(null,inst_105819);
var inst_105829 = done.call(null,inst_105819);
var inst_105830 = cljs.core.async.take_BANG_.call(null,inst_105828,inst_105829);
var state_105855__$1 = state_105855;
var statearr_105869_105894 = state_105855__$1;
(statearr_105869_105894[(2)] = inst_105830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105855__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (9))){
var inst_105819 = (state_105855[(7)]);
var inst_105832 = (state_105855[(2)]);
var inst_105833 = (inst_105819 + (1));
var inst_105819__$1 = inst_105833;
var state_105855__$1 = (function (){var statearr_105870 = state_105855;
(statearr_105870[(10)] = inst_105832);

(statearr_105870[(7)] = inst_105819__$1);

return statearr_105870;
})();
var statearr_105871_105895 = state_105855__$1;
(statearr_105871_105895[(2)] = null);

(statearr_105871_105895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (5))){
var inst_105839 = (state_105855[(2)]);
var state_105855__$1 = (function (){var statearr_105872 = state_105855;
(statearr_105872[(11)] = inst_105839);

return statearr_105872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105855__$1,(12),dchan);
} else {
if((state_val_105856 === (14))){
var inst_105841 = (state_105855[(8)]);
var inst_105846 = cljs.core.apply.call(null,f,inst_105841);
var state_105855__$1 = state_105855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105855__$1,(16),out,inst_105846);
} else {
if((state_val_105856 === (16))){
var inst_105848 = (state_105855[(2)]);
var state_105855__$1 = (function (){var statearr_105873 = state_105855;
(statearr_105873[(12)] = inst_105848);

return statearr_105873;
})();
var statearr_105874_105896 = state_105855__$1;
(statearr_105874_105896[(2)] = null);

(statearr_105874_105896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (10))){
var inst_105823 = (state_105855[(2)]);
var inst_105824 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_105855__$1 = (function (){var statearr_105875 = state_105855;
(statearr_105875[(13)] = inst_105823);

return statearr_105875;
})();
var statearr_105876_105897 = state_105855__$1;
(statearr_105876_105897[(2)] = inst_105824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105855__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105856 === (8))){
var inst_105837 = (state_105855[(2)]);
var state_105855__$1 = state_105855;
var statearr_105877_105898 = state_105855__$1;
(statearr_105877_105898[(2)] = inst_105837);

(statearr_105877_105898[(1)] = (5));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_105878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105878[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_105878[(1)] = (1));

return statearr_105878;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_105855){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105879){if((e105879 instanceof Object)){
var ex__32974__auto__ = e105879;
var statearr_105880_105899 = state_105855;
(statearr_105880_105899[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105900 = state_105855;
state_105855 = G__105900;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_105855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_105855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105881 = f__33068__auto__.call(null);
(statearr_105881[(6)] = c__33067__auto___105883);

return statearr_105881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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
var G__105903 = arguments.length;
switch (G__105903) {
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
var c__33067__auto___105957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105935){
var state_val_105936 = (state_105935[(1)]);
if((state_val_105936 === (7))){
var inst_105915 = (state_105935[(7)]);
var inst_105914 = (state_105935[(8)]);
var inst_105914__$1 = (state_105935[(2)]);
var inst_105915__$1 = cljs.core.nth.call(null,inst_105914__$1,(0),null);
var inst_105916 = cljs.core.nth.call(null,inst_105914__$1,(1),null);
var inst_105917 = (inst_105915__$1 == null);
var state_105935__$1 = (function (){var statearr_105937 = state_105935;
(statearr_105937[(7)] = inst_105915__$1);

(statearr_105937[(8)] = inst_105914__$1);

(statearr_105937[(9)] = inst_105916);

return statearr_105937;
})();
if(cljs.core.truth_(inst_105917)){
var statearr_105938_105958 = state_105935__$1;
(statearr_105938_105958[(1)] = (8));

} else {
var statearr_105939_105959 = state_105935__$1;
(statearr_105939_105959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (1))){
var inst_105904 = cljs.core.vec.call(null,chs);
var inst_105905 = inst_105904;
var state_105935__$1 = (function (){var statearr_105940 = state_105935;
(statearr_105940[(10)] = inst_105905);

return statearr_105940;
})();
var statearr_105941_105960 = state_105935__$1;
(statearr_105941_105960[(2)] = null);

(statearr_105941_105960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (4))){
var inst_105905 = (state_105935[(10)]);
var state_105935__$1 = state_105935;
return cljs.core.async.ioc_alts_BANG_.call(null,state_105935__$1,(7),inst_105905);
} else {
if((state_val_105936 === (6))){
var inst_105931 = (state_105935[(2)]);
var state_105935__$1 = state_105935;
var statearr_105942_105961 = state_105935__$1;
(statearr_105942_105961[(2)] = inst_105931);

(statearr_105942_105961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (3))){
var inst_105933 = (state_105935[(2)]);
var state_105935__$1 = state_105935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105935__$1,inst_105933);
} else {
if((state_val_105936 === (2))){
var inst_105905 = (state_105935[(10)]);
var inst_105907 = cljs.core.count.call(null,inst_105905);
var inst_105908 = (inst_105907 > (0));
var state_105935__$1 = state_105935;
if(cljs.core.truth_(inst_105908)){
var statearr_105944_105962 = state_105935__$1;
(statearr_105944_105962[(1)] = (4));

} else {
var statearr_105945_105963 = state_105935__$1;
(statearr_105945_105963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (11))){
var inst_105905 = (state_105935[(10)]);
var inst_105924 = (state_105935[(2)]);
var tmp105943 = inst_105905;
var inst_105905__$1 = tmp105943;
var state_105935__$1 = (function (){var statearr_105946 = state_105935;
(statearr_105946[(11)] = inst_105924);

(statearr_105946[(10)] = inst_105905__$1);

return statearr_105946;
})();
var statearr_105947_105964 = state_105935__$1;
(statearr_105947_105964[(2)] = null);

(statearr_105947_105964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (9))){
var inst_105915 = (state_105935[(7)]);
var state_105935__$1 = state_105935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105935__$1,(11),out,inst_105915);
} else {
if((state_val_105936 === (5))){
var inst_105929 = cljs.core.async.close_BANG_.call(null,out);
var state_105935__$1 = state_105935;
var statearr_105948_105965 = state_105935__$1;
(statearr_105948_105965[(2)] = inst_105929);

(statearr_105948_105965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (10))){
var inst_105927 = (state_105935[(2)]);
var state_105935__$1 = state_105935;
var statearr_105949_105966 = state_105935__$1;
(statearr_105949_105966[(2)] = inst_105927);

(statearr_105949_105966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105936 === (8))){
var inst_105915 = (state_105935[(7)]);
var inst_105914 = (state_105935[(8)]);
var inst_105916 = (state_105935[(9)]);
var inst_105905 = (state_105935[(10)]);
var inst_105919 = (function (){var cs = inst_105905;
var vec__105910 = inst_105914;
var v = inst_105915;
var c = inst_105916;
return (function (p1__105901_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__105901_SHARP_);
});
})();
var inst_105920 = cljs.core.filterv.call(null,inst_105919,inst_105905);
var inst_105905__$1 = inst_105920;
var state_105935__$1 = (function (){var statearr_105950 = state_105935;
(statearr_105950[(10)] = inst_105905__$1);

return statearr_105950;
})();
var statearr_105951_105967 = state_105935__$1;
(statearr_105951_105967[(2)] = null);

(statearr_105951_105967[(1)] = (2));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_105952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105952[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_105952[(1)] = (1));

return statearr_105952;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_105935){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e105953){if((e105953 instanceof Object)){
var ex__32974__auto__ = e105953;
var statearr_105954_105968 = state_105935;
(statearr_105954_105968[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105969 = state_105935;
state_105935 = G__105969;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_105935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_105935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_105955 = f__33068__auto__.call(null);
(statearr_105955[(6)] = c__33067__auto___105957);

return statearr_105955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
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
var G__105971 = arguments.length;
switch (G__105971) {
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
var c__33067__auto___106016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_105995){
var state_val_105996 = (state_105995[(1)]);
if((state_val_105996 === (7))){
var inst_105977 = (state_105995[(7)]);
var inst_105977__$1 = (state_105995[(2)]);
var inst_105978 = (inst_105977__$1 == null);
var inst_105979 = cljs.core.not.call(null,inst_105978);
var state_105995__$1 = (function (){var statearr_105997 = state_105995;
(statearr_105997[(7)] = inst_105977__$1);

return statearr_105997;
})();
if(inst_105979){
var statearr_105998_106017 = state_105995__$1;
(statearr_105998_106017[(1)] = (8));

} else {
var statearr_105999_106018 = state_105995__$1;
(statearr_105999_106018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (1))){
var inst_105972 = (0);
var state_105995__$1 = (function (){var statearr_106000 = state_105995;
(statearr_106000[(8)] = inst_105972);

return statearr_106000;
})();
var statearr_106001_106019 = state_105995__$1;
(statearr_106001_106019[(2)] = null);

(statearr_106001_106019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (4))){
var state_105995__$1 = state_105995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105995__$1,(7),ch);
} else {
if((state_val_105996 === (6))){
var inst_105990 = (state_105995[(2)]);
var state_105995__$1 = state_105995;
var statearr_106002_106020 = state_105995__$1;
(statearr_106002_106020[(2)] = inst_105990);

(statearr_106002_106020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (3))){
var inst_105992 = (state_105995[(2)]);
var inst_105993 = cljs.core.async.close_BANG_.call(null,out);
var state_105995__$1 = (function (){var statearr_106003 = state_105995;
(statearr_106003[(9)] = inst_105992);

return statearr_106003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105995__$1,inst_105993);
} else {
if((state_val_105996 === (2))){
var inst_105972 = (state_105995[(8)]);
var inst_105974 = (inst_105972 < n);
var state_105995__$1 = state_105995;
if(cljs.core.truth_(inst_105974)){
var statearr_106004_106021 = state_105995__$1;
(statearr_106004_106021[(1)] = (4));

} else {
var statearr_106005_106022 = state_105995__$1;
(statearr_106005_106022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (11))){
var inst_105972 = (state_105995[(8)]);
var inst_105982 = (state_105995[(2)]);
var inst_105983 = (inst_105972 + (1));
var inst_105972__$1 = inst_105983;
var state_105995__$1 = (function (){var statearr_106006 = state_105995;
(statearr_106006[(8)] = inst_105972__$1);

(statearr_106006[(10)] = inst_105982);

return statearr_106006;
})();
var statearr_106007_106023 = state_105995__$1;
(statearr_106007_106023[(2)] = null);

(statearr_106007_106023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (9))){
var state_105995__$1 = state_105995;
var statearr_106008_106024 = state_105995__$1;
(statearr_106008_106024[(2)] = null);

(statearr_106008_106024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (5))){
var state_105995__$1 = state_105995;
var statearr_106009_106025 = state_105995__$1;
(statearr_106009_106025[(2)] = null);

(statearr_106009_106025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (10))){
var inst_105987 = (state_105995[(2)]);
var state_105995__$1 = state_105995;
var statearr_106010_106026 = state_105995__$1;
(statearr_106010_106026[(2)] = inst_105987);

(statearr_106010_106026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105996 === (8))){
var inst_105977 = (state_105995[(7)]);
var state_105995__$1 = state_105995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105995__$1,(11),out,inst_105977);
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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_106011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_106011[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_106011[(1)] = (1));

return statearr_106011;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_105995){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_105995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106012){if((e106012 instanceof Object)){
var ex__32974__auto__ = e106012;
var statearr_106013_106027 = state_105995;
(statearr_106013_106027[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106028 = state_105995;
state_105995 = G__106028;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_105995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_105995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106014 = f__33068__auto__.call(null);
(statearr_106014[(6)] = c__33067__auto___106016);

return statearr_106014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async106030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async106030 = (function (f,ch,meta106031){
this.f = f;
this.ch = ch;
this.meta106031 = meta106031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_106032,meta106031__$1){
var self__ = this;
var _106032__$1 = this;
return (new cljs.core.async.t_cljs$core$async106030(self__.f,self__.ch,meta106031__$1));
}));

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_106032){
var self__ = this;
var _106032__$1 = this;
return self__.meta106031;
}));

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async106033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async106033 = (function (f,ch,meta106031,_,fn1,meta106034){
this.f = f;
this.ch = ch;
this.meta106031 = meta106031;
this._ = _;
this.fn1 = fn1;
this.meta106034 = meta106034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async106033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_106035,meta106034__$1){
var self__ = this;
var _106035__$1 = this;
return (new cljs.core.async.t_cljs$core$async106033(self__.f,self__.ch,self__.meta106031,self__._,self__.fn1,meta106034__$1));
}));

(cljs.core.async.t_cljs$core$async106033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_106035){
var self__ = this;
var _106035__$1 = this;
return self__.meta106034;
}));

(cljs.core.async.t_cljs$core$async106033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async106033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async106033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__106029_SHARP_){
return f1.call(null,(((p1__106029_SHARP_ == null))?null:self__.f.call(null,p1__106029_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async106033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta106031","meta106031",815336049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async106030","cljs.core.async/t_cljs$core$async106030",-1089830502,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta106034","meta106034",-611670286,null)], null);
}));

(cljs.core.async.t_cljs$core$async106033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async106033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async106033");

(cljs.core.async.t_cljs$core$async106033.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async106033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async106033.
 */
cljs.core.async.__GT_t_cljs$core$async106033 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async106033(f__$1,ch__$1,meta106031__$1,___$2,fn1__$1,meta106034){
return (new cljs.core.async.t_cljs$core$async106033(f__$1,ch__$1,meta106031__$1,___$2,fn1__$1,meta106034));
});

}

return (new cljs.core.async.t_cljs$core$async106033(self__.f,self__.ch,self__.meta106031,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async106030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta106031","meta106031",815336049,null)], null);
}));

(cljs.core.async.t_cljs$core$async106030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async106030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async106030");

(cljs.core.async.t_cljs$core$async106030.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async106030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async106030.
 */
cljs.core.async.__GT_t_cljs$core$async106030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async106030(f__$1,ch__$1,meta106031){
return (new cljs.core.async.t_cljs$core$async106030(f__$1,ch__$1,meta106031));
});

}

return (new cljs.core.async.t_cljs$core$async106030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async106036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async106036 = (function (f,ch,meta106037){
this.f = f;
this.ch = ch;
this.meta106037 = meta106037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_106038,meta106037__$1){
var self__ = this;
var _106038__$1 = this;
return (new cljs.core.async.t_cljs$core$async106036(self__.f,self__.ch,meta106037__$1));
}));

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_106038){
var self__ = this;
var _106038__$1 = this;
return self__.meta106037;
}));

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async106036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta106037","meta106037",1281305232,null)], null);
}));

(cljs.core.async.t_cljs$core$async106036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async106036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async106036");

(cljs.core.async.t_cljs$core$async106036.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async106036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async106036.
 */
cljs.core.async.__GT_t_cljs$core$async106036 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async106036(f__$1,ch__$1,meta106037){
return (new cljs.core.async.t_cljs$core$async106036(f__$1,ch__$1,meta106037));
});

}

return (new cljs.core.async.t_cljs$core$async106036(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async106039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async106039 = (function (p,ch,meta106040){
this.p = p;
this.ch = ch;
this.meta106040 = meta106040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_106041,meta106040__$1){
var self__ = this;
var _106041__$1 = this;
return (new cljs.core.async.t_cljs$core$async106039(self__.p,self__.ch,meta106040__$1));
}));

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_106041){
var self__ = this;
var _106041__$1 = this;
return self__.meta106040;
}));

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async106039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async106039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta106040","meta106040",1358590245,null)], null);
}));

(cljs.core.async.t_cljs$core$async106039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async106039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async106039");

(cljs.core.async.t_cljs$core$async106039.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async106039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async106039.
 */
cljs.core.async.__GT_t_cljs$core$async106039 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async106039(p__$1,ch__$1,meta106040){
return (new cljs.core.async.t_cljs$core$async106039(p__$1,ch__$1,meta106040));
});

}

return (new cljs.core.async.t_cljs$core$async106039(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__106043 = arguments.length;
switch (G__106043) {
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
var c__33067__auto___106083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106064){
var state_val_106065 = (state_106064[(1)]);
if((state_val_106065 === (7))){
var inst_106060 = (state_106064[(2)]);
var state_106064__$1 = state_106064;
var statearr_106066_106084 = state_106064__$1;
(statearr_106066_106084[(2)] = inst_106060);

(statearr_106066_106084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (1))){
var state_106064__$1 = state_106064;
var statearr_106067_106085 = state_106064__$1;
(statearr_106067_106085[(2)] = null);

(statearr_106067_106085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (4))){
var inst_106046 = (state_106064[(7)]);
var inst_106046__$1 = (state_106064[(2)]);
var inst_106047 = (inst_106046__$1 == null);
var state_106064__$1 = (function (){var statearr_106068 = state_106064;
(statearr_106068[(7)] = inst_106046__$1);

return statearr_106068;
})();
if(cljs.core.truth_(inst_106047)){
var statearr_106069_106086 = state_106064__$1;
(statearr_106069_106086[(1)] = (5));

} else {
var statearr_106070_106087 = state_106064__$1;
(statearr_106070_106087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (6))){
var inst_106046 = (state_106064[(7)]);
var inst_106051 = p.call(null,inst_106046);
var state_106064__$1 = state_106064;
if(cljs.core.truth_(inst_106051)){
var statearr_106071_106088 = state_106064__$1;
(statearr_106071_106088[(1)] = (8));

} else {
var statearr_106072_106089 = state_106064__$1;
(statearr_106072_106089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (3))){
var inst_106062 = (state_106064[(2)]);
var state_106064__$1 = state_106064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106064__$1,inst_106062);
} else {
if((state_val_106065 === (2))){
var state_106064__$1 = state_106064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106064__$1,(4),ch);
} else {
if((state_val_106065 === (11))){
var inst_106054 = (state_106064[(2)]);
var state_106064__$1 = state_106064;
var statearr_106073_106090 = state_106064__$1;
(statearr_106073_106090[(2)] = inst_106054);

(statearr_106073_106090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (9))){
var state_106064__$1 = state_106064;
var statearr_106074_106091 = state_106064__$1;
(statearr_106074_106091[(2)] = null);

(statearr_106074_106091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (5))){
var inst_106049 = cljs.core.async.close_BANG_.call(null,out);
var state_106064__$1 = state_106064;
var statearr_106075_106092 = state_106064__$1;
(statearr_106075_106092[(2)] = inst_106049);

(statearr_106075_106092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (10))){
var inst_106057 = (state_106064[(2)]);
var state_106064__$1 = (function (){var statearr_106076 = state_106064;
(statearr_106076[(8)] = inst_106057);

return statearr_106076;
})();
var statearr_106077_106093 = state_106064__$1;
(statearr_106077_106093[(2)] = null);

(statearr_106077_106093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106065 === (8))){
var inst_106046 = (state_106064[(7)]);
var state_106064__$1 = state_106064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106064__$1,(11),out,inst_106046);
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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_106078 = [null,null,null,null,null,null,null,null,null];
(statearr_106078[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_106078[(1)] = (1));

return statearr_106078;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_106064){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106079){if((e106079 instanceof Object)){
var ex__32974__auto__ = e106079;
var statearr_106080_106094 = state_106064;
(statearr_106080_106094[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106095 = state_106064;
state_106064 = G__106095;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_106064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_106064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106081 = f__33068__auto__.call(null);
(statearr_106081[(6)] = c__33067__auto___106083);

return statearr_106081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__106097 = arguments.length;
switch (G__106097) {
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
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106160){
var state_val_106161 = (state_106160[(1)]);
if((state_val_106161 === (7))){
var inst_106156 = (state_106160[(2)]);
var state_106160__$1 = state_106160;
var statearr_106162_106200 = state_106160__$1;
(statearr_106162_106200[(2)] = inst_106156);

(statearr_106162_106200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (20))){
var inst_106126 = (state_106160[(7)]);
var inst_106137 = (state_106160[(2)]);
var inst_106138 = cljs.core.next.call(null,inst_106126);
var inst_106112 = inst_106138;
var inst_106113 = null;
var inst_106114 = (0);
var inst_106115 = (0);
var state_106160__$1 = (function (){var statearr_106163 = state_106160;
(statearr_106163[(8)] = inst_106113);

(statearr_106163[(9)] = inst_106112);

(statearr_106163[(10)] = inst_106115);

(statearr_106163[(11)] = inst_106114);

(statearr_106163[(12)] = inst_106137);

return statearr_106163;
})();
var statearr_106164_106201 = state_106160__$1;
(statearr_106164_106201[(2)] = null);

(statearr_106164_106201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (1))){
var state_106160__$1 = state_106160;
var statearr_106165_106202 = state_106160__$1;
(statearr_106165_106202[(2)] = null);

(statearr_106165_106202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (4))){
var inst_106101 = (state_106160[(13)]);
var inst_106101__$1 = (state_106160[(2)]);
var inst_106102 = (inst_106101__$1 == null);
var state_106160__$1 = (function (){var statearr_106166 = state_106160;
(statearr_106166[(13)] = inst_106101__$1);

return statearr_106166;
})();
if(cljs.core.truth_(inst_106102)){
var statearr_106167_106203 = state_106160__$1;
(statearr_106167_106203[(1)] = (5));

} else {
var statearr_106168_106204 = state_106160__$1;
(statearr_106168_106204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (15))){
var state_106160__$1 = state_106160;
var statearr_106172_106205 = state_106160__$1;
(statearr_106172_106205[(2)] = null);

(statearr_106172_106205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (21))){
var state_106160__$1 = state_106160;
var statearr_106173_106206 = state_106160__$1;
(statearr_106173_106206[(2)] = null);

(statearr_106173_106206[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (13))){
var inst_106113 = (state_106160[(8)]);
var inst_106112 = (state_106160[(9)]);
var inst_106115 = (state_106160[(10)]);
var inst_106114 = (state_106160[(11)]);
var inst_106122 = (state_106160[(2)]);
var inst_106123 = (inst_106115 + (1));
var tmp106169 = inst_106113;
var tmp106170 = inst_106112;
var tmp106171 = inst_106114;
var inst_106112__$1 = tmp106170;
var inst_106113__$1 = tmp106169;
var inst_106114__$1 = tmp106171;
var inst_106115__$1 = inst_106123;
var state_106160__$1 = (function (){var statearr_106174 = state_106160;
(statearr_106174[(8)] = inst_106113__$1);

(statearr_106174[(9)] = inst_106112__$1);

(statearr_106174[(10)] = inst_106115__$1);

(statearr_106174[(14)] = inst_106122);

(statearr_106174[(11)] = inst_106114__$1);

return statearr_106174;
})();
var statearr_106175_106207 = state_106160__$1;
(statearr_106175_106207[(2)] = null);

(statearr_106175_106207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (22))){
var state_106160__$1 = state_106160;
var statearr_106176_106208 = state_106160__$1;
(statearr_106176_106208[(2)] = null);

(statearr_106176_106208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (6))){
var inst_106101 = (state_106160[(13)]);
var inst_106110 = f.call(null,inst_106101);
var inst_106111 = cljs.core.seq.call(null,inst_106110);
var inst_106112 = inst_106111;
var inst_106113 = null;
var inst_106114 = (0);
var inst_106115 = (0);
var state_106160__$1 = (function (){var statearr_106177 = state_106160;
(statearr_106177[(8)] = inst_106113);

(statearr_106177[(9)] = inst_106112);

(statearr_106177[(10)] = inst_106115);

(statearr_106177[(11)] = inst_106114);

return statearr_106177;
})();
var statearr_106178_106209 = state_106160__$1;
(statearr_106178_106209[(2)] = null);

(statearr_106178_106209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (17))){
var inst_106126 = (state_106160[(7)]);
var inst_106130 = cljs.core.chunk_first.call(null,inst_106126);
var inst_106131 = cljs.core.chunk_rest.call(null,inst_106126);
var inst_106132 = cljs.core.count.call(null,inst_106130);
var inst_106112 = inst_106131;
var inst_106113 = inst_106130;
var inst_106114 = inst_106132;
var inst_106115 = (0);
var state_106160__$1 = (function (){var statearr_106179 = state_106160;
(statearr_106179[(8)] = inst_106113);

(statearr_106179[(9)] = inst_106112);

(statearr_106179[(10)] = inst_106115);

(statearr_106179[(11)] = inst_106114);

return statearr_106179;
})();
var statearr_106180_106210 = state_106160__$1;
(statearr_106180_106210[(2)] = null);

(statearr_106180_106210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (3))){
var inst_106158 = (state_106160[(2)]);
var state_106160__$1 = state_106160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106160__$1,inst_106158);
} else {
if((state_val_106161 === (12))){
var inst_106146 = (state_106160[(2)]);
var state_106160__$1 = state_106160;
var statearr_106181_106211 = state_106160__$1;
(statearr_106181_106211[(2)] = inst_106146);

(statearr_106181_106211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (2))){
var state_106160__$1 = state_106160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106160__$1,(4),in$);
} else {
if((state_val_106161 === (23))){
var inst_106154 = (state_106160[(2)]);
var state_106160__$1 = state_106160;
var statearr_106182_106212 = state_106160__$1;
(statearr_106182_106212[(2)] = inst_106154);

(statearr_106182_106212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (19))){
var inst_106141 = (state_106160[(2)]);
var state_106160__$1 = state_106160;
var statearr_106183_106213 = state_106160__$1;
(statearr_106183_106213[(2)] = inst_106141);

(statearr_106183_106213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (11))){
var inst_106112 = (state_106160[(9)]);
var inst_106126 = (state_106160[(7)]);
var inst_106126__$1 = cljs.core.seq.call(null,inst_106112);
var state_106160__$1 = (function (){var statearr_106184 = state_106160;
(statearr_106184[(7)] = inst_106126__$1);

return statearr_106184;
})();
if(inst_106126__$1){
var statearr_106185_106214 = state_106160__$1;
(statearr_106185_106214[(1)] = (14));

} else {
var statearr_106186_106215 = state_106160__$1;
(statearr_106186_106215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (9))){
var inst_106148 = (state_106160[(2)]);
var inst_106149 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_106160__$1 = (function (){var statearr_106187 = state_106160;
(statearr_106187[(15)] = inst_106148);

return statearr_106187;
})();
if(cljs.core.truth_(inst_106149)){
var statearr_106188_106216 = state_106160__$1;
(statearr_106188_106216[(1)] = (21));

} else {
var statearr_106189_106217 = state_106160__$1;
(statearr_106189_106217[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (5))){
var inst_106104 = cljs.core.async.close_BANG_.call(null,out);
var state_106160__$1 = state_106160;
var statearr_106190_106218 = state_106160__$1;
(statearr_106190_106218[(2)] = inst_106104);

(statearr_106190_106218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (14))){
var inst_106126 = (state_106160[(7)]);
var inst_106128 = cljs.core.chunked_seq_QMARK_.call(null,inst_106126);
var state_106160__$1 = state_106160;
if(inst_106128){
var statearr_106191_106219 = state_106160__$1;
(statearr_106191_106219[(1)] = (17));

} else {
var statearr_106192_106220 = state_106160__$1;
(statearr_106192_106220[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (16))){
var inst_106144 = (state_106160[(2)]);
var state_106160__$1 = state_106160;
var statearr_106193_106221 = state_106160__$1;
(statearr_106193_106221[(2)] = inst_106144);

(statearr_106193_106221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106161 === (10))){
var inst_106113 = (state_106160[(8)]);
var inst_106115 = (state_106160[(10)]);
var inst_106120 = cljs.core._nth.call(null,inst_106113,inst_106115);
var state_106160__$1 = state_106160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106160__$1,(13),out,inst_106120);
} else {
if((state_val_106161 === (18))){
var inst_106126 = (state_106160[(7)]);
var inst_106135 = cljs.core.first.call(null,inst_106126);
var state_106160__$1 = state_106160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106160__$1,(20),out,inst_106135);
} else {
if((state_val_106161 === (8))){
var inst_106115 = (state_106160[(10)]);
var inst_106114 = (state_106160[(11)]);
var inst_106117 = (inst_106115 < inst_106114);
var inst_106118 = inst_106117;
var state_106160__$1 = state_106160;
if(cljs.core.truth_(inst_106118)){
var statearr_106194_106222 = state_106160__$1;
(statearr_106194_106222[(1)] = (10));

} else {
var statearr_106195_106223 = state_106160__$1;
(statearr_106195_106223[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32971__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32971__auto____0 = (function (){
var statearr_106196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106196[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32971__auto__);

(statearr_106196[(1)] = (1));

return statearr_106196;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32971__auto____1 = (function (state_106160){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106197){if((e106197 instanceof Object)){
var ex__32974__auto__ = e106197;
var statearr_106198_106224 = state_106160;
(statearr_106198_106224[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106225 = state_106160;
state_106160 = G__106225;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32971__auto__ = function(state_106160){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32971__auto____1.call(this,state_106160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32971__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32971__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106199 = f__33068__auto__.call(null);
(statearr_106199[(6)] = c__33067__auto__);

return statearr_106199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__106227 = arguments.length;
switch (G__106227) {
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
var G__106230 = arguments.length;
switch (G__106230) {
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
var G__106233 = arguments.length;
switch (G__106233) {
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
var c__33067__auto___106280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106257){
var state_val_106258 = (state_106257[(1)]);
if((state_val_106258 === (7))){
var inst_106252 = (state_106257[(2)]);
var state_106257__$1 = state_106257;
var statearr_106259_106281 = state_106257__$1;
(statearr_106259_106281[(2)] = inst_106252);

(statearr_106259_106281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (1))){
var inst_106234 = null;
var state_106257__$1 = (function (){var statearr_106260 = state_106257;
(statearr_106260[(7)] = inst_106234);

return statearr_106260;
})();
var statearr_106261_106282 = state_106257__$1;
(statearr_106261_106282[(2)] = null);

(statearr_106261_106282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (4))){
var inst_106237 = (state_106257[(8)]);
var inst_106237__$1 = (state_106257[(2)]);
var inst_106238 = (inst_106237__$1 == null);
var inst_106239 = cljs.core.not.call(null,inst_106238);
var state_106257__$1 = (function (){var statearr_106262 = state_106257;
(statearr_106262[(8)] = inst_106237__$1);

return statearr_106262;
})();
if(inst_106239){
var statearr_106263_106283 = state_106257__$1;
(statearr_106263_106283[(1)] = (5));

} else {
var statearr_106264_106284 = state_106257__$1;
(statearr_106264_106284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (6))){
var state_106257__$1 = state_106257;
var statearr_106265_106285 = state_106257__$1;
(statearr_106265_106285[(2)] = null);

(statearr_106265_106285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (3))){
var inst_106254 = (state_106257[(2)]);
var inst_106255 = cljs.core.async.close_BANG_.call(null,out);
var state_106257__$1 = (function (){var statearr_106266 = state_106257;
(statearr_106266[(9)] = inst_106254);

return statearr_106266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106257__$1,inst_106255);
} else {
if((state_val_106258 === (2))){
var state_106257__$1 = state_106257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106257__$1,(4),ch);
} else {
if((state_val_106258 === (11))){
var inst_106237 = (state_106257[(8)]);
var inst_106246 = (state_106257[(2)]);
var inst_106234 = inst_106237;
var state_106257__$1 = (function (){var statearr_106267 = state_106257;
(statearr_106267[(7)] = inst_106234);

(statearr_106267[(10)] = inst_106246);

return statearr_106267;
})();
var statearr_106268_106286 = state_106257__$1;
(statearr_106268_106286[(2)] = null);

(statearr_106268_106286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (9))){
var inst_106237 = (state_106257[(8)]);
var state_106257__$1 = state_106257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106257__$1,(11),out,inst_106237);
} else {
if((state_val_106258 === (5))){
var inst_106237 = (state_106257[(8)]);
var inst_106234 = (state_106257[(7)]);
var inst_106241 = cljs.core._EQ_.call(null,inst_106237,inst_106234);
var state_106257__$1 = state_106257;
if(inst_106241){
var statearr_106270_106287 = state_106257__$1;
(statearr_106270_106287[(1)] = (8));

} else {
var statearr_106271_106288 = state_106257__$1;
(statearr_106271_106288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (10))){
var inst_106249 = (state_106257[(2)]);
var state_106257__$1 = state_106257;
var statearr_106272_106289 = state_106257__$1;
(statearr_106272_106289[(2)] = inst_106249);

(statearr_106272_106289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106258 === (8))){
var inst_106234 = (state_106257[(7)]);
var tmp106269 = inst_106234;
var inst_106234__$1 = tmp106269;
var state_106257__$1 = (function (){var statearr_106273 = state_106257;
(statearr_106273[(7)] = inst_106234__$1);

return statearr_106273;
})();
var statearr_106274_106290 = state_106257__$1;
(statearr_106274_106290[(2)] = null);

(statearr_106274_106290[(1)] = (2));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_106275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_106275[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_106275[(1)] = (1));

return statearr_106275;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_106257){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106276){if((e106276 instanceof Object)){
var ex__32974__auto__ = e106276;
var statearr_106277_106291 = state_106257;
(statearr_106277_106291[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106292 = state_106257;
state_106257 = G__106292;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_106257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_106257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106278 = f__33068__auto__.call(null);
(statearr_106278[(6)] = c__33067__auto___106280);

return statearr_106278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__106294 = arguments.length;
switch (G__106294) {
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
var c__33067__auto___106360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106332){
var state_val_106333 = (state_106332[(1)]);
if((state_val_106333 === (7))){
var inst_106328 = (state_106332[(2)]);
var state_106332__$1 = state_106332;
var statearr_106334_106361 = state_106332__$1;
(statearr_106334_106361[(2)] = inst_106328);

(statearr_106334_106361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (1))){
var inst_106295 = (new Array(n));
var inst_106296 = inst_106295;
var inst_106297 = (0);
var state_106332__$1 = (function (){var statearr_106335 = state_106332;
(statearr_106335[(7)] = inst_106297);

(statearr_106335[(8)] = inst_106296);

return statearr_106335;
})();
var statearr_106336_106362 = state_106332__$1;
(statearr_106336_106362[(2)] = null);

(statearr_106336_106362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (4))){
var inst_106300 = (state_106332[(9)]);
var inst_106300__$1 = (state_106332[(2)]);
var inst_106301 = (inst_106300__$1 == null);
var inst_106302 = cljs.core.not.call(null,inst_106301);
var state_106332__$1 = (function (){var statearr_106337 = state_106332;
(statearr_106337[(9)] = inst_106300__$1);

return statearr_106337;
})();
if(inst_106302){
var statearr_106338_106363 = state_106332__$1;
(statearr_106338_106363[(1)] = (5));

} else {
var statearr_106339_106364 = state_106332__$1;
(statearr_106339_106364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (15))){
var inst_106322 = (state_106332[(2)]);
var state_106332__$1 = state_106332;
var statearr_106340_106365 = state_106332__$1;
(statearr_106340_106365[(2)] = inst_106322);

(statearr_106340_106365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (13))){
var state_106332__$1 = state_106332;
var statearr_106341_106366 = state_106332__$1;
(statearr_106341_106366[(2)] = null);

(statearr_106341_106366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (6))){
var inst_106297 = (state_106332[(7)]);
var inst_106318 = (inst_106297 > (0));
var state_106332__$1 = state_106332;
if(cljs.core.truth_(inst_106318)){
var statearr_106342_106367 = state_106332__$1;
(statearr_106342_106367[(1)] = (12));

} else {
var statearr_106343_106368 = state_106332__$1;
(statearr_106343_106368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (3))){
var inst_106330 = (state_106332[(2)]);
var state_106332__$1 = state_106332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106332__$1,inst_106330);
} else {
if((state_val_106333 === (12))){
var inst_106296 = (state_106332[(8)]);
var inst_106320 = cljs.core.vec.call(null,inst_106296);
var state_106332__$1 = state_106332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106332__$1,(15),out,inst_106320);
} else {
if((state_val_106333 === (2))){
var state_106332__$1 = state_106332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106332__$1,(4),ch);
} else {
if((state_val_106333 === (11))){
var inst_106312 = (state_106332[(2)]);
var inst_106313 = (new Array(n));
var inst_106296 = inst_106313;
var inst_106297 = (0);
var state_106332__$1 = (function (){var statearr_106344 = state_106332;
(statearr_106344[(10)] = inst_106312);

(statearr_106344[(7)] = inst_106297);

(statearr_106344[(8)] = inst_106296);

return statearr_106344;
})();
var statearr_106345_106369 = state_106332__$1;
(statearr_106345_106369[(2)] = null);

(statearr_106345_106369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (9))){
var inst_106296 = (state_106332[(8)]);
var inst_106310 = cljs.core.vec.call(null,inst_106296);
var state_106332__$1 = state_106332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106332__$1,(11),out,inst_106310);
} else {
if((state_val_106333 === (5))){
var inst_106300 = (state_106332[(9)]);
var inst_106305 = (state_106332[(11)]);
var inst_106297 = (state_106332[(7)]);
var inst_106296 = (state_106332[(8)]);
var inst_106304 = (inst_106296[inst_106297] = inst_106300);
var inst_106305__$1 = (inst_106297 + (1));
var inst_106306 = (inst_106305__$1 < n);
var state_106332__$1 = (function (){var statearr_106346 = state_106332;
(statearr_106346[(11)] = inst_106305__$1);

(statearr_106346[(12)] = inst_106304);

return statearr_106346;
})();
if(cljs.core.truth_(inst_106306)){
var statearr_106347_106370 = state_106332__$1;
(statearr_106347_106370[(1)] = (8));

} else {
var statearr_106348_106371 = state_106332__$1;
(statearr_106348_106371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (14))){
var inst_106325 = (state_106332[(2)]);
var inst_106326 = cljs.core.async.close_BANG_.call(null,out);
var state_106332__$1 = (function (){var statearr_106350 = state_106332;
(statearr_106350[(13)] = inst_106325);

return statearr_106350;
})();
var statearr_106351_106372 = state_106332__$1;
(statearr_106351_106372[(2)] = inst_106326);

(statearr_106351_106372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (10))){
var inst_106316 = (state_106332[(2)]);
var state_106332__$1 = state_106332;
var statearr_106352_106373 = state_106332__$1;
(statearr_106352_106373[(2)] = inst_106316);

(statearr_106352_106373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106333 === (8))){
var inst_106305 = (state_106332[(11)]);
var inst_106296 = (state_106332[(8)]);
var tmp106349 = inst_106296;
var inst_106296__$1 = tmp106349;
var inst_106297 = inst_106305;
var state_106332__$1 = (function (){var statearr_106353 = state_106332;
(statearr_106353[(7)] = inst_106297);

(statearr_106353[(8)] = inst_106296__$1);

return statearr_106353;
})();
var statearr_106354_106374 = state_106332__$1;
(statearr_106354_106374[(2)] = null);

(statearr_106354_106374[(1)] = (2));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_106355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106355[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_106355[(1)] = (1));

return statearr_106355;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_106332){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106356){if((e106356 instanceof Object)){
var ex__32974__auto__ = e106356;
var statearr_106357_106375 = state_106332;
(statearr_106357_106375[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106376 = state_106332;
state_106332 = G__106376;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_106332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_106332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106358 = f__33068__auto__.call(null);
(statearr_106358[(6)] = c__33067__auto___106360);

return statearr_106358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__106378 = arguments.length;
switch (G__106378) {
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
var c__33067__auto___106455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106423){
var state_val_106424 = (state_106423[(1)]);
if((state_val_106424 === (7))){
var inst_106419 = (state_106423[(2)]);
var state_106423__$1 = state_106423;
var statearr_106425_106456 = state_106423__$1;
(statearr_106425_106456[(2)] = inst_106419);

(statearr_106425_106456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (1))){
var inst_106379 = [];
var inst_106380 = inst_106379;
var inst_106381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_106423__$1 = (function (){var statearr_106426 = state_106423;
(statearr_106426[(7)] = inst_106380);

(statearr_106426[(8)] = inst_106381);

return statearr_106426;
})();
var statearr_106427_106457 = state_106423__$1;
(statearr_106427_106457[(2)] = null);

(statearr_106427_106457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (4))){
var inst_106384 = (state_106423[(9)]);
var inst_106384__$1 = (state_106423[(2)]);
var inst_106385 = (inst_106384__$1 == null);
var inst_106386 = cljs.core.not.call(null,inst_106385);
var state_106423__$1 = (function (){var statearr_106428 = state_106423;
(statearr_106428[(9)] = inst_106384__$1);

return statearr_106428;
})();
if(inst_106386){
var statearr_106429_106458 = state_106423__$1;
(statearr_106429_106458[(1)] = (5));

} else {
var statearr_106430_106459 = state_106423__$1;
(statearr_106430_106459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (15))){
var inst_106380 = (state_106423[(7)]);
var inst_106411 = cljs.core.vec.call(null,inst_106380);
var state_106423__$1 = state_106423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106423__$1,(18),out,inst_106411);
} else {
if((state_val_106424 === (13))){
var inst_106406 = (state_106423[(2)]);
var state_106423__$1 = state_106423;
var statearr_106431_106460 = state_106423__$1;
(statearr_106431_106460[(2)] = inst_106406);

(statearr_106431_106460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (6))){
var inst_106380 = (state_106423[(7)]);
var inst_106408 = inst_106380.length;
var inst_106409 = (inst_106408 > (0));
var state_106423__$1 = state_106423;
if(cljs.core.truth_(inst_106409)){
var statearr_106432_106461 = state_106423__$1;
(statearr_106432_106461[(1)] = (15));

} else {
var statearr_106433_106462 = state_106423__$1;
(statearr_106433_106462[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (17))){
var inst_106416 = (state_106423[(2)]);
var inst_106417 = cljs.core.async.close_BANG_.call(null,out);
var state_106423__$1 = (function (){var statearr_106434 = state_106423;
(statearr_106434[(10)] = inst_106416);

return statearr_106434;
})();
var statearr_106435_106463 = state_106423__$1;
(statearr_106435_106463[(2)] = inst_106417);

(statearr_106435_106463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (3))){
var inst_106421 = (state_106423[(2)]);
var state_106423__$1 = state_106423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106423__$1,inst_106421);
} else {
if((state_val_106424 === (12))){
var inst_106380 = (state_106423[(7)]);
var inst_106399 = cljs.core.vec.call(null,inst_106380);
var state_106423__$1 = state_106423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106423__$1,(14),out,inst_106399);
} else {
if((state_val_106424 === (2))){
var state_106423__$1 = state_106423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106423__$1,(4),ch);
} else {
if((state_val_106424 === (11))){
var inst_106384 = (state_106423[(9)]);
var inst_106380 = (state_106423[(7)]);
var inst_106388 = (state_106423[(11)]);
var inst_106396 = inst_106380.push(inst_106384);
var tmp106436 = inst_106380;
var inst_106380__$1 = tmp106436;
var inst_106381 = inst_106388;
var state_106423__$1 = (function (){var statearr_106437 = state_106423;
(statearr_106437[(12)] = inst_106396);

(statearr_106437[(7)] = inst_106380__$1);

(statearr_106437[(8)] = inst_106381);

return statearr_106437;
})();
var statearr_106438_106464 = state_106423__$1;
(statearr_106438_106464[(2)] = null);

(statearr_106438_106464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (9))){
var inst_106381 = (state_106423[(8)]);
var inst_106392 = cljs.core.keyword_identical_QMARK_.call(null,inst_106381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_106423__$1 = state_106423;
var statearr_106439_106465 = state_106423__$1;
(statearr_106439_106465[(2)] = inst_106392);

(statearr_106439_106465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (5))){
var inst_106384 = (state_106423[(9)]);
var inst_106388 = (state_106423[(11)]);
var inst_106389 = (state_106423[(13)]);
var inst_106381 = (state_106423[(8)]);
var inst_106388__$1 = f.call(null,inst_106384);
var inst_106389__$1 = cljs.core._EQ_.call(null,inst_106388__$1,inst_106381);
var state_106423__$1 = (function (){var statearr_106440 = state_106423;
(statearr_106440[(11)] = inst_106388__$1);

(statearr_106440[(13)] = inst_106389__$1);

return statearr_106440;
})();
if(inst_106389__$1){
var statearr_106441_106466 = state_106423__$1;
(statearr_106441_106466[(1)] = (8));

} else {
var statearr_106442_106467 = state_106423__$1;
(statearr_106442_106467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (14))){
var inst_106384 = (state_106423[(9)]);
var inst_106388 = (state_106423[(11)]);
var inst_106401 = (state_106423[(2)]);
var inst_106402 = [];
var inst_106403 = inst_106402.push(inst_106384);
var inst_106380 = inst_106402;
var inst_106381 = inst_106388;
var state_106423__$1 = (function (){var statearr_106443 = state_106423;
(statearr_106443[(7)] = inst_106380);

(statearr_106443[(14)] = inst_106401);

(statearr_106443[(15)] = inst_106403);

(statearr_106443[(8)] = inst_106381);

return statearr_106443;
})();
var statearr_106444_106468 = state_106423__$1;
(statearr_106444_106468[(2)] = null);

(statearr_106444_106468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (16))){
var state_106423__$1 = state_106423;
var statearr_106445_106469 = state_106423__$1;
(statearr_106445_106469[(2)] = null);

(statearr_106445_106469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (10))){
var inst_106394 = (state_106423[(2)]);
var state_106423__$1 = state_106423;
if(cljs.core.truth_(inst_106394)){
var statearr_106446_106470 = state_106423__$1;
(statearr_106446_106470[(1)] = (11));

} else {
var statearr_106447_106471 = state_106423__$1;
(statearr_106447_106471[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (18))){
var inst_106413 = (state_106423[(2)]);
var state_106423__$1 = state_106423;
var statearr_106448_106472 = state_106423__$1;
(statearr_106448_106472[(2)] = inst_106413);

(statearr_106448_106472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106424 === (8))){
var inst_106389 = (state_106423[(13)]);
var state_106423__$1 = state_106423;
var statearr_106449_106473 = state_106423__$1;
(statearr_106449_106473[(2)] = inst_106389);

(statearr_106449_106473[(1)] = (10));


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
var cljs$core$async$state_machine__32971__auto__ = null;
var cljs$core$async$state_machine__32971__auto____0 = (function (){
var statearr_106450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106450[(0)] = cljs$core$async$state_machine__32971__auto__);

(statearr_106450[(1)] = (1));

return statearr_106450;
});
var cljs$core$async$state_machine__32971__auto____1 = (function (state_106423){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106451){if((e106451 instanceof Object)){
var ex__32974__auto__ = e106451;
var statearr_106452_106474 = state_106423;
(statearr_106452_106474[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106475 = state_106423;
state_106423 = G__106475;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
cljs$core$async$state_machine__32971__auto__ = function(state_106423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32971__auto____1.call(this,state_106423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32971__auto____0;
cljs$core$async$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32971__auto____1;
return cljs$core$async$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106453 = f__33068__auto__.call(null);
(statearr_106453[(6)] = c__33067__auto___106455);

return statearr_106453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1767875395437
