// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e51180){if((e51180 instanceof Error)){
var e = e51180;
return "Error: Unable to stringify";
} else {
throw e51180;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51183 = arguments.length;
switch (G__51183) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51181_SHARP_){
if(typeof p1__51181_SHARP_ === 'string'){
return p1__51181_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51181_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___51186 = arguments.length;
var i__4532__auto___51187 = (0);
while(true){
if((i__4532__auto___51187 < len__4531__auto___51186)){
args__4534__auto__.push((arguments[i__4532__auto___51187]));

var G__51188 = (i__4532__auto___51187 + (1));
i__4532__auto___51187 = G__51188;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51185){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51185));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___51190 = arguments.length;
var i__4532__auto___51191 = (0);
while(true){
if((i__4532__auto___51191 < len__4531__auto___51190)){
args__4534__auto__.push((arguments[i__4532__auto___51191]));

var G__51192 = (i__4532__auto___51191 + (1));
i__4532__auto___51191 = G__51192;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51189){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51189));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51193){
var map__51194 = p__51193;
var map__51194__$1 = ((((!((map__51194 == null)))?(((((map__51194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51194):map__51194);
var message = cljs.core.get.call(null,map__51194__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51194__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32422__auto___51273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___51273,ch){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___51273,ch){
return (function (state_51245){
var state_val_51246 = (state_51245[(1)]);
if((state_val_51246 === (7))){
var inst_51241 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
var statearr_51247_51274 = state_51245__$1;
(statearr_51247_51274[(2)] = inst_51241);

(statearr_51247_51274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (1))){
var state_51245__$1 = state_51245;
var statearr_51248_51275 = state_51245__$1;
(statearr_51248_51275[(2)] = null);

(statearr_51248_51275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (4))){
var inst_51198 = (state_51245[(7)]);
var inst_51198__$1 = (state_51245[(2)]);
var state_51245__$1 = (function (){var statearr_51249 = state_51245;
(statearr_51249[(7)] = inst_51198__$1);

return statearr_51249;
})();
if(cljs.core.truth_(inst_51198__$1)){
var statearr_51250_51276 = state_51245__$1;
(statearr_51250_51276[(1)] = (5));

} else {
var statearr_51251_51277 = state_51245__$1;
(statearr_51251_51277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (15))){
var inst_51205 = (state_51245[(8)]);
var inst_51220 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51205);
var inst_51221 = cljs.core.first.call(null,inst_51220);
var inst_51222 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51221);
var inst_51223 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51222)].join('');
var inst_51224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51223);
var state_51245__$1 = state_51245;
var statearr_51252_51278 = state_51245__$1;
(statearr_51252_51278[(2)] = inst_51224);

(statearr_51252_51278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (13))){
var inst_51229 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
var statearr_51253_51279 = state_51245__$1;
(statearr_51253_51279[(2)] = inst_51229);

(statearr_51253_51279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (6))){
var state_51245__$1 = state_51245;
var statearr_51254_51280 = state_51245__$1;
(statearr_51254_51280[(2)] = null);

(statearr_51254_51280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (17))){
var inst_51227 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
var statearr_51255_51281 = state_51245__$1;
(statearr_51255_51281[(2)] = inst_51227);

(statearr_51255_51281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (3))){
var inst_51243 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51245__$1,inst_51243);
} else {
if((state_val_51246 === (12))){
var inst_51204 = (state_51245[(9)]);
var inst_51218 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51204,opts);
var state_51245__$1 = state_51245;
if(cljs.core.truth_(inst_51218)){
var statearr_51256_51282 = state_51245__$1;
(statearr_51256_51282[(1)] = (15));

} else {
var statearr_51257_51283 = state_51245__$1;
(statearr_51257_51283[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (2))){
var state_51245__$1 = state_51245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51245__$1,(4),ch);
} else {
if((state_val_51246 === (11))){
var inst_51205 = (state_51245[(8)]);
var inst_51210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51211 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51205);
var inst_51212 = cljs.core.async.timeout.call(null,(1000));
var inst_51213 = [inst_51211,inst_51212];
var inst_51214 = (new cljs.core.PersistentVector(null,2,(5),inst_51210,inst_51213,null));
var state_51245__$1 = state_51245;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51245__$1,(14),inst_51214);
} else {
if((state_val_51246 === (9))){
var inst_51205 = (state_51245[(8)]);
var inst_51231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51232 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51205);
var inst_51233 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51232);
var inst_51234 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51233)].join('');
var inst_51235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51234);
var state_51245__$1 = (function (){var statearr_51258 = state_51245;
(statearr_51258[(10)] = inst_51231);

return statearr_51258;
})();
var statearr_51259_51284 = state_51245__$1;
(statearr_51259_51284[(2)] = inst_51235);

(statearr_51259_51284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (5))){
var inst_51198 = (state_51245[(7)]);
var inst_51200 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51201 = (new cljs.core.PersistentArrayMap(null,2,inst_51200,null));
var inst_51202 = (new cljs.core.PersistentHashSet(null,inst_51201,null));
var inst_51203 = figwheel.client.focus_msgs.call(null,inst_51202,inst_51198);
var inst_51204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51203);
var inst_51205 = cljs.core.first.call(null,inst_51203);
var inst_51206 = figwheel.client.autoload_QMARK_.call(null);
var state_51245__$1 = (function (){var statearr_51260 = state_51245;
(statearr_51260[(9)] = inst_51204);

(statearr_51260[(8)] = inst_51205);

return statearr_51260;
})();
if(cljs.core.truth_(inst_51206)){
var statearr_51261_51285 = state_51245__$1;
(statearr_51261_51285[(1)] = (8));

} else {
var statearr_51262_51286 = state_51245__$1;
(statearr_51262_51286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (14))){
var inst_51216 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
var statearr_51263_51287 = state_51245__$1;
(statearr_51263_51287[(2)] = inst_51216);

(statearr_51263_51287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (16))){
var state_51245__$1 = state_51245;
var statearr_51264_51288 = state_51245__$1;
(statearr_51264_51288[(2)] = null);

(statearr_51264_51288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (10))){
var inst_51237 = (state_51245[(2)]);
var state_51245__$1 = (function (){var statearr_51265 = state_51245;
(statearr_51265[(11)] = inst_51237);

return statearr_51265;
})();
var statearr_51266_51289 = state_51245__$1;
(statearr_51266_51289[(2)] = null);

(statearr_51266_51289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (8))){
var inst_51204 = (state_51245[(9)]);
var inst_51208 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51204,opts);
var state_51245__$1 = state_51245;
if(cljs.core.truth_(inst_51208)){
var statearr_51267_51290 = state_51245__$1;
(statearr_51267_51290[(1)] = (11));

} else {
var statearr_51268_51291 = state_51245__$1;
(statearr_51268_51291[(1)] = (12));

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
});})(c__32422__auto___51273,ch))
;
return ((function (switch__32331__auto__,c__32422__auto___51273,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32332__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32332__auto____0 = (function (){
var statearr_51269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51269[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32332__auto__);

(statearr_51269[(1)] = (1));

return statearr_51269;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32332__auto____1 = (function (state_51245){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_51245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e51270){if((e51270 instanceof Object)){
var ex__32335__auto__ = e51270;
var statearr_51271_51292 = state_51245;
(statearr_51271_51292[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51293 = state_51245;
state_51245 = G__51293;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32332__auto__ = function(state_51245){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32332__auto____1.call(this,state_51245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32332__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32332__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___51273,ch))
})();
var state__32424__auto__ = (function (){var statearr_51272 = f__32423__auto__.call(null);
(statearr_51272[(6)] = c__32422__auto___51273);

return statearr_51272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___51273,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51294_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51294_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51298 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51298){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51296 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51297 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51296,_STAR_print_fn_STAR_51297,sb,base_path_51298){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_51296,_STAR_print_fn_STAR_51297,sb,base_path_51298))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51297;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51296;
}}catch (e51295){if((e51295 instanceof Error)){
var e = e51295;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51298], null));
} else {
var e = e51295;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_51298))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51299){
var map__51300 = p__51299;
var map__51300__$1 = ((((!((map__51300 == null)))?(((((map__51300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51300):map__51300);
var opts = map__51300__$1;
var build_id = cljs.core.get.call(null,map__51300__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51300,map__51300__$1,opts,build_id){
return (function (p__51302){
var vec__51303 = p__51302;
var seq__51304 = cljs.core.seq.call(null,vec__51303);
var first__51305 = cljs.core.first.call(null,seq__51304);
var seq__51304__$1 = cljs.core.next.call(null,seq__51304);
var map__51306 = first__51305;
var map__51306__$1 = ((((!((map__51306 == null)))?(((((map__51306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51306):map__51306);
var msg = map__51306__$1;
var msg_name = cljs.core.get.call(null,map__51306__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51304__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51303,seq__51304,first__51305,seq__51304__$1,map__51306,map__51306__$1,msg,msg_name,_,map__51300,map__51300__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51303,seq__51304,first__51305,seq__51304__$1,map__51306,map__51306__$1,msg,msg_name,_,map__51300,map__51300__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51300,map__51300__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51308){
var vec__51309 = p__51308;
var seq__51310 = cljs.core.seq.call(null,vec__51309);
var first__51311 = cljs.core.first.call(null,seq__51310);
var seq__51310__$1 = cljs.core.next.call(null,seq__51310);
var map__51312 = first__51311;
var map__51312__$1 = ((((!((map__51312 == null)))?(((((map__51312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51312):map__51312);
var msg = map__51312__$1;
var msg_name = cljs.core.get.call(null,map__51312__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51310__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51314){
var map__51315 = p__51314;
var map__51315__$1 = ((((!((map__51315 == null)))?(((((map__51315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51315):map__51315);
var on_compile_warning = cljs.core.get.call(null,map__51315__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51315__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51315,map__51315__$1,on_compile_warning,on_compile_fail){
return (function (p__51317){
var vec__51318 = p__51317;
var seq__51319 = cljs.core.seq.call(null,vec__51318);
var first__51320 = cljs.core.first.call(null,seq__51319);
var seq__51319__$1 = cljs.core.next.call(null,seq__51319);
var map__51321 = first__51320;
var map__51321__$1 = ((((!((map__51321 == null)))?(((((map__51321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51321):map__51321);
var msg = map__51321__$1;
var msg_name = cljs.core.get.call(null,map__51321__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51319__$1;
var pred__51323 = cljs.core._EQ_;
var expr__51324 = msg_name;
if(cljs.core.truth_(pred__51323.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51324))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51323.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51324))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51315,map__51315__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__,msg_hist,msg_names,msg){
return (function (state_51413){
var state_val_51414 = (state_51413[(1)]);
if((state_val_51414 === (7))){
var inst_51333 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51333)){
var statearr_51415_51462 = state_51413__$1;
(statearr_51415_51462[(1)] = (8));

} else {
var statearr_51416_51463 = state_51413__$1;
(statearr_51416_51463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (20))){
var inst_51407 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51417_51464 = state_51413__$1;
(statearr_51417_51464[(2)] = inst_51407);

(statearr_51417_51464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (27))){
var inst_51403 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51418_51465 = state_51413__$1;
(statearr_51418_51465[(2)] = inst_51403);

(statearr_51418_51465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (1))){
var inst_51326 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51326)){
var statearr_51419_51466 = state_51413__$1;
(statearr_51419_51466[(1)] = (2));

} else {
var statearr_51420_51467 = state_51413__$1;
(statearr_51420_51467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (24))){
var inst_51405 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51421_51468 = state_51413__$1;
(statearr_51421_51468[(2)] = inst_51405);

(statearr_51421_51468[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (4))){
var inst_51411 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51413__$1,inst_51411);
} else {
if((state_val_51414 === (15))){
var inst_51409 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51422_51469 = state_51413__$1;
(statearr_51422_51469[(2)] = inst_51409);

(statearr_51422_51469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (21))){
var inst_51362 = (state_51413[(2)]);
var inst_51363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51364 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51363);
var state_51413__$1 = (function (){var statearr_51423 = state_51413;
(statearr_51423[(7)] = inst_51362);

return statearr_51423;
})();
var statearr_51424_51470 = state_51413__$1;
(statearr_51424_51470[(2)] = inst_51364);

(statearr_51424_51470[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (31))){
var inst_51392 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51392)){
var statearr_51425_51471 = state_51413__$1;
(statearr_51425_51471[(1)] = (34));

} else {
var statearr_51426_51472 = state_51413__$1;
(statearr_51426_51472[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (32))){
var inst_51401 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51427_51473 = state_51413__$1;
(statearr_51427_51473[(2)] = inst_51401);

(statearr_51427_51473[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (33))){
var inst_51388 = (state_51413[(2)]);
var inst_51389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51390 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51389);
var state_51413__$1 = (function (){var statearr_51428 = state_51413;
(statearr_51428[(8)] = inst_51388);

return statearr_51428;
})();
var statearr_51429_51474 = state_51413__$1;
(statearr_51429_51474[(2)] = inst_51390);

(statearr_51429_51474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (13))){
var inst_51347 = figwheel.client.heads_up.clear.call(null);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(16),inst_51347);
} else {
if((state_val_51414 === (22))){
var inst_51368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51369 = figwheel.client.heads_up.append_warning_message.call(null,inst_51368);
var state_51413__$1 = state_51413;
var statearr_51430_51475 = state_51413__$1;
(statearr_51430_51475[(2)] = inst_51369);

(statearr_51430_51475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (36))){
var inst_51399 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51431_51476 = state_51413__$1;
(statearr_51431_51476[(2)] = inst_51399);

(statearr_51431_51476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (29))){
var inst_51379 = (state_51413[(2)]);
var inst_51380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51381 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51380);
var state_51413__$1 = (function (){var statearr_51432 = state_51413;
(statearr_51432[(9)] = inst_51379);

return statearr_51432;
})();
var statearr_51433_51477 = state_51413__$1;
(statearr_51433_51477[(2)] = inst_51381);

(statearr_51433_51477[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (6))){
var inst_51328 = (state_51413[(10)]);
var state_51413__$1 = state_51413;
var statearr_51434_51478 = state_51413__$1;
(statearr_51434_51478[(2)] = inst_51328);

(statearr_51434_51478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (28))){
var inst_51375 = (state_51413[(2)]);
var inst_51376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51377 = figwheel.client.heads_up.display_warning.call(null,inst_51376);
var state_51413__$1 = (function (){var statearr_51435 = state_51413;
(statearr_51435[(11)] = inst_51375);

return statearr_51435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(29),inst_51377);
} else {
if((state_val_51414 === (25))){
var inst_51373 = figwheel.client.heads_up.clear.call(null);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(28),inst_51373);
} else {
if((state_val_51414 === (34))){
var inst_51394 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(37),inst_51394);
} else {
if((state_val_51414 === (17))){
var inst_51353 = (state_51413[(2)]);
var inst_51354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51355 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51354);
var state_51413__$1 = (function (){var statearr_51436 = state_51413;
(statearr_51436[(12)] = inst_51353);

return statearr_51436;
})();
var statearr_51437_51479 = state_51413__$1;
(statearr_51437_51479[(2)] = inst_51355);

(statearr_51437_51479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (3))){
var inst_51345 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51345)){
var statearr_51438_51480 = state_51413__$1;
(statearr_51438_51480[(1)] = (13));

} else {
var statearr_51439_51481 = state_51413__$1;
(statearr_51439_51481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (12))){
var inst_51341 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51440_51482 = state_51413__$1;
(statearr_51440_51482[(2)] = inst_51341);

(statearr_51440_51482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (2))){
var inst_51328 = (state_51413[(10)]);
var inst_51328__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51413__$1 = (function (){var statearr_51441 = state_51413;
(statearr_51441[(10)] = inst_51328__$1);

return statearr_51441;
})();
if(cljs.core.truth_(inst_51328__$1)){
var statearr_51442_51483 = state_51413__$1;
(statearr_51442_51483[(1)] = (5));

} else {
var statearr_51443_51484 = state_51413__$1;
(statearr_51443_51484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (23))){
var inst_51371 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51371)){
var statearr_51444_51485 = state_51413__$1;
(statearr_51444_51485[(1)] = (25));

} else {
var statearr_51445_51486 = state_51413__$1;
(statearr_51445_51486[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (35))){
var state_51413__$1 = state_51413;
var statearr_51446_51487 = state_51413__$1;
(statearr_51446_51487[(2)] = null);

(statearr_51446_51487[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (19))){
var inst_51366 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51366)){
var statearr_51447_51488 = state_51413__$1;
(statearr_51447_51488[(1)] = (22));

} else {
var statearr_51448_51489 = state_51413__$1;
(statearr_51448_51489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (11))){
var inst_51337 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51449_51490 = state_51413__$1;
(statearr_51449_51490[(2)] = inst_51337);

(statearr_51449_51490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (9))){
var inst_51339 = figwheel.client.heads_up.clear.call(null);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(12),inst_51339);
} else {
if((state_val_51414 === (5))){
var inst_51330 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51413__$1 = state_51413;
var statearr_51450_51491 = state_51413__$1;
(statearr_51450_51491[(2)] = inst_51330);

(statearr_51450_51491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (14))){
var inst_51357 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51357)){
var statearr_51451_51492 = state_51413__$1;
(statearr_51451_51492[(1)] = (18));

} else {
var statearr_51452_51493 = state_51413__$1;
(statearr_51452_51493[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (26))){
var inst_51383 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51383)){
var statearr_51453_51494 = state_51413__$1;
(statearr_51453_51494[(1)] = (30));

} else {
var statearr_51454_51495 = state_51413__$1;
(statearr_51454_51495[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (16))){
var inst_51349 = (state_51413[(2)]);
var inst_51350 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51351 = figwheel.client.heads_up.display_exception.call(null,inst_51350);
var state_51413__$1 = (function (){var statearr_51455 = state_51413;
(statearr_51455[(13)] = inst_51349);

return statearr_51455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(17),inst_51351);
} else {
if((state_val_51414 === (30))){
var inst_51385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51386 = figwheel.client.heads_up.display_warning.call(null,inst_51385);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(33),inst_51386);
} else {
if((state_val_51414 === (10))){
var inst_51343 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51456_51496 = state_51413__$1;
(statearr_51456_51496[(2)] = inst_51343);

(statearr_51456_51496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (18))){
var inst_51359 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51360 = figwheel.client.heads_up.display_exception.call(null,inst_51359);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(21),inst_51360);
} else {
if((state_val_51414 === (37))){
var inst_51396 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51457_51497 = state_51413__$1;
(statearr_51457_51497[(2)] = inst_51396);

(statearr_51457_51497[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (8))){
var inst_51335 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(11),inst_51335);
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
});})(c__32422__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32331__auto__,c__32422__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto____0 = (function (){
var statearr_51458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51458[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto__);

(statearr_51458[(1)] = (1));

return statearr_51458;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto____1 = (function (state_51413){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_51413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e51459){if((e51459 instanceof Object)){
var ex__32335__auto__ = e51459;
var statearr_51460_51498 = state_51413;
(statearr_51460_51498[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51499 = state_51413;
state_51413 = G__51499;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto__ = function(state_51413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto____1.call(this,state_51413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__,msg_hist,msg_names,msg))
})();
var state__32424__auto__ = (function (){var statearr_51461 = f__32423__auto__.call(null);
(statearr_51461[(6)] = c__32422__auto__);

return statearr_51461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__,msg_hist,msg_names,msg))
);

return c__32422__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32422__auto___51528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___51528,ch){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___51528,ch){
return (function (state_51514){
var state_val_51515 = (state_51514[(1)]);
if((state_val_51515 === (1))){
var state_51514__$1 = state_51514;
var statearr_51516_51529 = state_51514__$1;
(statearr_51516_51529[(2)] = null);

(statearr_51516_51529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (2))){
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51514__$1,(4),ch);
} else {
if((state_val_51515 === (3))){
var inst_51512 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51514__$1,inst_51512);
} else {
if((state_val_51515 === (4))){
var inst_51502 = (state_51514[(7)]);
var inst_51502__$1 = (state_51514[(2)]);
var state_51514__$1 = (function (){var statearr_51517 = state_51514;
(statearr_51517[(7)] = inst_51502__$1);

return statearr_51517;
})();
if(cljs.core.truth_(inst_51502__$1)){
var statearr_51518_51530 = state_51514__$1;
(statearr_51518_51530[(1)] = (5));

} else {
var statearr_51519_51531 = state_51514__$1;
(statearr_51519_51531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (5))){
var inst_51502 = (state_51514[(7)]);
var inst_51504 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51502);
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51514__$1,(8),inst_51504);
} else {
if((state_val_51515 === (6))){
var state_51514__$1 = state_51514;
var statearr_51520_51532 = state_51514__$1;
(statearr_51520_51532[(2)] = null);

(statearr_51520_51532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (7))){
var inst_51510 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51521_51533 = state_51514__$1;
(statearr_51521_51533[(2)] = inst_51510);

(statearr_51521_51533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (8))){
var inst_51506 = (state_51514[(2)]);
var state_51514__$1 = (function (){var statearr_51522 = state_51514;
(statearr_51522[(8)] = inst_51506);

return statearr_51522;
})();
var statearr_51523_51534 = state_51514__$1;
(statearr_51523_51534[(2)] = null);

(statearr_51523_51534[(1)] = (2));


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
});})(c__32422__auto___51528,ch))
;
return ((function (switch__32331__auto__,c__32422__auto___51528,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32332__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32332__auto____0 = (function (){
var statearr_51524 = [null,null,null,null,null,null,null,null,null];
(statearr_51524[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32332__auto__);

(statearr_51524[(1)] = (1));

return statearr_51524;
});
var figwheel$client$heads_up_plugin_$_state_machine__32332__auto____1 = (function (state_51514){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_51514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e51525){if((e51525 instanceof Object)){
var ex__32335__auto__ = e51525;
var statearr_51526_51535 = state_51514;
(statearr_51526_51535[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51536 = state_51514;
state_51514 = G__51536;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32332__auto__ = function(state_51514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32332__auto____1.call(this,state_51514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32332__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32332__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___51528,ch))
})();
var state__32424__auto__ = (function (){var statearr_51527 = f__32423__auto__.call(null);
(statearr_51527[(6)] = c__32422__auto___51528);

return statearr_51527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___51528,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__){
return (function (state_51542){
var state_val_51543 = (state_51542[(1)]);
if((state_val_51543 === (1))){
var inst_51537 = cljs.core.async.timeout.call(null,(3000));
var state_51542__$1 = state_51542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51542__$1,(2),inst_51537);
} else {
if((state_val_51543 === (2))){
var inst_51539 = (state_51542[(2)]);
var inst_51540 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51542__$1 = (function (){var statearr_51544 = state_51542;
(statearr_51544[(7)] = inst_51539);

return statearr_51544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51542__$1,inst_51540);
} else {
return null;
}
}
});})(c__32422__auto__))
;
return ((function (switch__32331__auto__,c__32422__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32332__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32332__auto____0 = (function (){
var statearr_51545 = [null,null,null,null,null,null,null,null];
(statearr_51545[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32332__auto__);

(statearr_51545[(1)] = (1));

return statearr_51545;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32332__auto____1 = (function (state_51542){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_51542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e51546){if((e51546 instanceof Object)){
var ex__32335__auto__ = e51546;
var statearr_51547_51549 = state_51542;
(statearr_51547_51549[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51550 = state_51542;
state_51542 = G__51550;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32332__auto__ = function(state_51542){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32332__auto____1.call(this,state_51542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32332__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32332__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__))
})();
var state__32424__auto__ = (function (){var statearr_51548 = f__32423__auto__.call(null);
(statearr_51548[(6)] = c__32422__auto__);

return statearr_51548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__))
);

return c__32422__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5559__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5559__auto__)){
var figwheel_version = temp__5559__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__,figwheel_version,temp__5559__auto__){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__,figwheel_version,temp__5559__auto__){
return (function (state_51557){
var state_val_51558 = (state_51557[(1)]);
if((state_val_51558 === (1))){
var inst_51551 = cljs.core.async.timeout.call(null,(2000));
var state_51557__$1 = state_51557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51557__$1,(2),inst_51551);
} else {
if((state_val_51558 === (2))){
var inst_51553 = (state_51557[(2)]);
var inst_51554 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51555 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51554);
var state_51557__$1 = (function (){var statearr_51559 = state_51557;
(statearr_51559[(7)] = inst_51553);

return statearr_51559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51557__$1,inst_51555);
} else {
return null;
}
}
});})(c__32422__auto__,figwheel_version,temp__5559__auto__))
;
return ((function (switch__32331__auto__,c__32422__auto__,figwheel_version,temp__5559__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto____0 = (function (){
var statearr_51560 = [null,null,null,null,null,null,null,null];
(statearr_51560[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto__);

(statearr_51560[(1)] = (1));

return statearr_51560;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto____1 = (function (state_51557){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_51557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e51561){if((e51561 instanceof Object)){
var ex__32335__auto__ = e51561;
var statearr_51562_51564 = state_51557;
(statearr_51562_51564[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51565 = state_51557;
state_51557 = G__51565;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto__ = function(state_51557){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto____1.call(this,state_51557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__,figwheel_version,temp__5559__auto__))
})();
var state__32424__auto__ = (function (){var statearr_51563 = f__32423__auto__.call(null);
(statearr_51563[(6)] = c__32422__auto__);

return statearr_51563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__,figwheel_version,temp__5559__auto__))
);

return c__32422__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51566){
var map__51567 = p__51566;
var map__51567__$1 = ((((!((map__51567 == null)))?(((((map__51567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51567):map__51567);
var file = cljs.core.get.call(null,map__51567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51567__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51567__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51569 = "";
var G__51569__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51569),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51569);
var G__51569__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51569__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51569__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51569__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51569__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51570){
var map__51571 = p__51570;
var map__51571__$1 = ((((!((map__51571 == null)))?(((((map__51571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51571):map__51571);
var ed = map__51571__$1;
var formatted_exception = cljs.core.get.call(null,map__51571__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51571__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51571__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51573_51577 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51574_51578 = null;
var count__51575_51579 = (0);
var i__51576_51580 = (0);
while(true){
if((i__51576_51580 < count__51575_51579)){
var msg_51581 = cljs.core._nth.call(null,chunk__51574_51578,i__51576_51580);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51581);


var G__51582 = seq__51573_51577;
var G__51583 = chunk__51574_51578;
var G__51584 = count__51575_51579;
var G__51585 = (i__51576_51580 + (1));
seq__51573_51577 = G__51582;
chunk__51574_51578 = G__51583;
count__51575_51579 = G__51584;
i__51576_51580 = G__51585;
continue;
} else {
var temp__5559__auto___51586 = cljs.core.seq.call(null,seq__51573_51577);
if(temp__5559__auto___51586){
var seq__51573_51587__$1 = temp__5559__auto___51586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51573_51587__$1)){
var c__4351__auto___51588 = cljs.core.chunk_first.call(null,seq__51573_51587__$1);
var G__51589 = cljs.core.chunk_rest.call(null,seq__51573_51587__$1);
var G__51590 = c__4351__auto___51588;
var G__51591 = cljs.core.count.call(null,c__4351__auto___51588);
var G__51592 = (0);
seq__51573_51577 = G__51589;
chunk__51574_51578 = G__51590;
count__51575_51579 = G__51591;
i__51576_51580 = G__51592;
continue;
} else {
var msg_51593 = cljs.core.first.call(null,seq__51573_51587__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51593);


var G__51594 = cljs.core.next.call(null,seq__51573_51587__$1);
var G__51595 = null;
var G__51596 = (0);
var G__51597 = (0);
seq__51573_51577 = G__51594;
chunk__51574_51578 = G__51595;
count__51575_51579 = G__51596;
i__51576_51580 = G__51597;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51598){
var map__51599 = p__51598;
var map__51599__$1 = ((((!((map__51599 == null)))?(((((map__51599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51599):map__51599);
var w = map__51599__$1;
var message = cljs.core.get.call(null,map__51599__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51601 = cljs.core.seq.call(null,plugins);
var chunk__51602 = null;
var count__51603 = (0);
var i__51604 = (0);
while(true){
if((i__51604 < count__51603)){
var vec__51605 = cljs.core._nth.call(null,chunk__51602,i__51604);
var k = cljs.core.nth.call(null,vec__51605,(0),null);
var plugin = cljs.core.nth.call(null,vec__51605,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51611 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51601,chunk__51602,count__51603,i__51604,pl_51611,vec__51605,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51611.call(null,msg_hist);
});})(seq__51601,chunk__51602,count__51603,i__51604,pl_51611,vec__51605,k,plugin))
);
} else {
}


var G__51612 = seq__51601;
var G__51613 = chunk__51602;
var G__51614 = count__51603;
var G__51615 = (i__51604 + (1));
seq__51601 = G__51612;
chunk__51602 = G__51613;
count__51603 = G__51614;
i__51604 = G__51615;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__51601);
if(temp__5559__auto__){
var seq__51601__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51601__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__51601__$1);
var G__51616 = cljs.core.chunk_rest.call(null,seq__51601__$1);
var G__51617 = c__4351__auto__;
var G__51618 = cljs.core.count.call(null,c__4351__auto__);
var G__51619 = (0);
seq__51601 = G__51616;
chunk__51602 = G__51617;
count__51603 = G__51618;
i__51604 = G__51619;
continue;
} else {
var vec__51608 = cljs.core.first.call(null,seq__51601__$1);
var k = cljs.core.nth.call(null,vec__51608,(0),null);
var plugin = cljs.core.nth.call(null,vec__51608,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51620 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51601,chunk__51602,count__51603,i__51604,pl_51620,vec__51608,k,plugin,seq__51601__$1,temp__5559__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51620.call(null,msg_hist);
});})(seq__51601,chunk__51602,count__51603,i__51604,pl_51620,vec__51608,k,plugin,seq__51601__$1,temp__5559__auto__))
);
} else {
}


var G__51621 = cljs.core.next.call(null,seq__51601__$1);
var G__51622 = null;
var G__51623 = (0);
var G__51624 = (0);
seq__51601 = G__51621;
chunk__51602 = G__51622;
count__51603 = G__51623;
i__51604 = G__51624;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51626 = arguments.length;
switch (G__51626) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51627_51632 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51628_51633 = null;
var count__51629_51634 = (0);
var i__51630_51635 = (0);
while(true){
if((i__51630_51635 < count__51629_51634)){
var msg_51636 = cljs.core._nth.call(null,chunk__51628_51633,i__51630_51635);
figwheel.client.socket.handle_incoming_message.call(null,msg_51636);


var G__51637 = seq__51627_51632;
var G__51638 = chunk__51628_51633;
var G__51639 = count__51629_51634;
var G__51640 = (i__51630_51635 + (1));
seq__51627_51632 = G__51637;
chunk__51628_51633 = G__51638;
count__51629_51634 = G__51639;
i__51630_51635 = G__51640;
continue;
} else {
var temp__5559__auto___51641 = cljs.core.seq.call(null,seq__51627_51632);
if(temp__5559__auto___51641){
var seq__51627_51642__$1 = temp__5559__auto___51641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51627_51642__$1)){
var c__4351__auto___51643 = cljs.core.chunk_first.call(null,seq__51627_51642__$1);
var G__51644 = cljs.core.chunk_rest.call(null,seq__51627_51642__$1);
var G__51645 = c__4351__auto___51643;
var G__51646 = cljs.core.count.call(null,c__4351__auto___51643);
var G__51647 = (0);
seq__51627_51632 = G__51644;
chunk__51628_51633 = G__51645;
count__51629_51634 = G__51646;
i__51630_51635 = G__51647;
continue;
} else {
var msg_51648 = cljs.core.first.call(null,seq__51627_51642__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51648);


var G__51649 = cljs.core.next.call(null,seq__51627_51642__$1);
var G__51650 = null;
var G__51651 = (0);
var G__51652 = (0);
seq__51627_51632 = G__51649;
chunk__51628_51633 = G__51650;
count__51629_51634 = G__51651;
i__51630_51635 = G__51652;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___51657 = arguments.length;
var i__4532__auto___51658 = (0);
while(true){
if((i__4532__auto___51658 < len__4531__auto___51657)){
args__4534__auto__.push((arguments[i__4532__auto___51658]));

var G__51659 = (i__4532__auto___51658 + (1));
i__4532__auto___51658 = G__51659;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51654){
var map__51655 = p__51654;
var map__51655__$1 = ((((!((map__51655 == null)))?(((((map__51655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51655):map__51655);
var opts = map__51655__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51653){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51653));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51660){if((e51660 instanceof Error)){
var e = e51660;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51660;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51661){
var map__51662 = p__51661;
var map__51662__$1 = ((((!((map__51662 == null)))?(((((map__51662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51662):map__51662);
var msg_name = cljs.core.get.call(null,map__51662__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1537946274673
