// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e108365){if((e108365 instanceof Error)){
var e = e108365;
return "Error: Unable to stringify";
} else {
throw e108365;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__108368 = arguments.length;
switch (G__108368) {
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

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__108366_SHARP_){
if(typeof p1__108366_SHARP_ === 'string'){
return p1__108366_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__108366_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___108371 = arguments.length;
var i__5770__auto___108372 = (0);
while(true){
if((i__5770__auto___108372 < len__5769__auto___108371)){
args__5775__auto__.push((arguments[i__5770__auto___108372]));

var G__108373 = (i__5770__auto___108372 + (1));
i__5770__auto___108372 = G__108373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq108370){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq108370));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___108375 = arguments.length;
var i__5770__auto___108376 = (0);
while(true){
if((i__5770__auto___108376 < len__5769__auto___108375)){
args__5775__auto__.push((arguments[i__5770__auto___108376]));

var G__108377 = (i__5770__auto___108376 + (1));
i__5770__auto___108376 = G__108377;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq108374){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq108374));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__108378){
var map__108379 = p__108378;
var map__108379__$1 = cljs.core.__destructure_map.call(null,map__108379);
var message = cljs.core.get.call(null,map__108379__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__108379__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__5045__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__5043__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__5043__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__5043__auto__;
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
var c__33067__auto___108457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_108429){
var state_val_108430 = (state_108429[(1)]);
if((state_val_108430 === (7))){
var inst_108425 = (state_108429[(2)]);
var state_108429__$1 = state_108429;
var statearr_108431_108458 = state_108429__$1;
(statearr_108431_108458[(2)] = inst_108425);

(statearr_108431_108458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (1))){
var state_108429__$1 = state_108429;
var statearr_108432_108459 = state_108429__$1;
(statearr_108432_108459[(2)] = null);

(statearr_108432_108459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (4))){
var inst_108382 = (state_108429[(7)]);
var inst_108382__$1 = (state_108429[(2)]);
var state_108429__$1 = (function (){var statearr_108433 = state_108429;
(statearr_108433[(7)] = inst_108382__$1);

return statearr_108433;
})();
if(cljs.core.truth_(inst_108382__$1)){
var statearr_108434_108460 = state_108429__$1;
(statearr_108434_108460[(1)] = (5));

} else {
var statearr_108435_108461 = state_108429__$1;
(statearr_108435_108461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (15))){
var inst_108389 = (state_108429[(8)]);
var inst_108404 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_108389);
var inst_108405 = cljs.core.first.call(null,inst_108404);
var inst_108406 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_108405);
var inst_108407 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_108406)].join('');
var inst_108408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_108407);
var state_108429__$1 = state_108429;
var statearr_108436_108462 = state_108429__$1;
(statearr_108436_108462[(2)] = inst_108408);

(statearr_108436_108462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (13))){
var inst_108413 = (state_108429[(2)]);
var state_108429__$1 = state_108429;
var statearr_108437_108463 = state_108429__$1;
(statearr_108437_108463[(2)] = inst_108413);

(statearr_108437_108463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (6))){
var state_108429__$1 = state_108429;
var statearr_108438_108464 = state_108429__$1;
(statearr_108438_108464[(2)] = null);

(statearr_108438_108464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (17))){
var inst_108411 = (state_108429[(2)]);
var state_108429__$1 = state_108429;
var statearr_108439_108465 = state_108429__$1;
(statearr_108439_108465[(2)] = inst_108411);

(statearr_108439_108465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (3))){
var inst_108427 = (state_108429[(2)]);
var state_108429__$1 = state_108429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108429__$1,inst_108427);
} else {
if((state_val_108430 === (12))){
var inst_108388 = (state_108429[(9)]);
var inst_108402 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_108388,opts);
var state_108429__$1 = state_108429;
if(inst_108402){
var statearr_108440_108466 = state_108429__$1;
(statearr_108440_108466[(1)] = (15));

} else {
var statearr_108441_108467 = state_108429__$1;
(statearr_108441_108467[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (2))){
var state_108429__$1 = state_108429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108429__$1,(4),ch);
} else {
if((state_val_108430 === (11))){
var inst_108389 = (state_108429[(8)]);
var inst_108394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108395 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_108389);
var inst_108396 = cljs.core.async.timeout.call(null,(1000));
var inst_108397 = [inst_108395,inst_108396];
var inst_108398 = (new cljs.core.PersistentVector(null,2,(5),inst_108394,inst_108397,null));
var state_108429__$1 = state_108429;
return cljs.core.async.ioc_alts_BANG_.call(null,state_108429__$1,(14),inst_108398);
} else {
if((state_val_108430 === (9))){
var inst_108389 = (state_108429[(8)]);
var inst_108415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_108416 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_108389);
var inst_108417 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_108416);
var inst_108418 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_108417)].join('');
var inst_108419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_108418);
var state_108429__$1 = (function (){var statearr_108442 = state_108429;
(statearr_108442[(10)] = inst_108415);

return statearr_108442;
})();
var statearr_108443_108468 = state_108429__$1;
(statearr_108443_108468[(2)] = inst_108419);

(statearr_108443_108468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (5))){
var inst_108382 = (state_108429[(7)]);
var inst_108384 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_108385 = (new cljs.core.PersistentArrayMap(null,2,inst_108384,null));
var inst_108386 = (new cljs.core.PersistentHashSet(null,inst_108385,null));
var inst_108387 = figwheel.client.focus_msgs.call(null,inst_108386,inst_108382);
var inst_108388 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_108387);
var inst_108389 = cljs.core.first.call(null,inst_108387);
var inst_108390 = figwheel.client.autoload_QMARK_.call(null);
var state_108429__$1 = (function (){var statearr_108444 = state_108429;
(statearr_108444[(8)] = inst_108389);

(statearr_108444[(9)] = inst_108388);

return statearr_108444;
})();
if(cljs.core.truth_(inst_108390)){
var statearr_108445_108469 = state_108429__$1;
(statearr_108445_108469[(1)] = (8));

} else {
var statearr_108446_108470 = state_108429__$1;
(statearr_108446_108470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (14))){
var inst_108400 = (state_108429[(2)]);
var state_108429__$1 = state_108429;
var statearr_108447_108471 = state_108429__$1;
(statearr_108447_108471[(2)] = inst_108400);

(statearr_108447_108471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (16))){
var state_108429__$1 = state_108429;
var statearr_108448_108472 = state_108429__$1;
(statearr_108448_108472[(2)] = null);

(statearr_108448_108472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (10))){
var inst_108421 = (state_108429[(2)]);
var state_108429__$1 = (function (){var statearr_108449 = state_108429;
(statearr_108449[(11)] = inst_108421);

return statearr_108449;
})();
var statearr_108450_108473 = state_108429__$1;
(statearr_108450_108473[(2)] = null);

(statearr_108450_108473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108430 === (8))){
var inst_108388 = (state_108429[(9)]);
var inst_108392 = figwheel.client.reload_file_state_QMARK_.call(null,inst_108388,opts);
var state_108429__$1 = state_108429;
if(cljs.core.truth_(inst_108392)){
var statearr_108451_108474 = state_108429__$1;
(statearr_108451_108474[(1)] = (11));

} else {
var statearr_108452_108475 = state_108429__$1;
(statearr_108452_108475[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32971__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32971__auto____0 = (function (){
var statearr_108453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108453[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32971__auto__);

(statearr_108453[(1)] = (1));

return statearr_108453;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32971__auto____1 = (function (state_108429){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_108429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e108454){if((e108454 instanceof Object)){
var ex__32974__auto__ = e108454;
var statearr_108455_108476 = state_108429;
(statearr_108455_108476[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108477 = state_108429;
state_108429 = G__108477;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32971__auto__ = function(state_108429){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32971__auto____1.call(this,state_108429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32971__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32971__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_108456 = f__33068__auto__.call(null);
(statearr_108456[(6)] = c__33067__auto___108457);

return statearr_108456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__108478_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__108478_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_108484 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__108480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__108481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__108482 = true;
var _STAR_print_fn_STAR__temp_val__108483 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__108482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__108483);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__108481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__108480);
}}catch (e108479){if((e108479 instanceof Error)){
var e = e108479;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_108484], null));
} else {
var e = e108479;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__108485){
var map__108486 = p__108485;
var map__108486__$1 = cljs.core.__destructure_map.call(null,map__108486);
var opts = map__108486__$1;
var build_id = cljs.core.get.call(null,map__108486__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__108487){
var vec__108488 = p__108487;
var seq__108489 = cljs.core.seq.call(null,vec__108488);
var first__108490 = cljs.core.first.call(null,seq__108489);
var seq__108489__$1 = cljs.core.next.call(null,seq__108489);
var map__108491 = first__108490;
var map__108491__$1 = cljs.core.__destructure_map.call(null,map__108491);
var msg = map__108491__$1;
var msg_name = cljs.core.get.call(null,map__108491__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__108489__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__108492){
var vec__108493 = p__108492;
var seq__108494 = cljs.core.seq.call(null,vec__108493);
var first__108495 = cljs.core.first.call(null,seq__108494);
var seq__108494__$1 = cljs.core.next.call(null,seq__108494);
var map__108496 = first__108495;
var map__108496__$1 = cljs.core.__destructure_map.call(null,map__108496);
var msg = map__108496__$1;
var msg_name = cljs.core.get.call(null,map__108496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__108494__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__108497){
var map__108498 = p__108497;
var map__108498__$1 = cljs.core.__destructure_map.call(null,map__108498);
var on_compile_warning = cljs.core.get.call(null,map__108498__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__108498__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__108499){
var vec__108500 = p__108499;
var seq__108501 = cljs.core.seq.call(null,vec__108500);
var first__108502 = cljs.core.first.call(null,seq__108501);
var seq__108501__$1 = cljs.core.next.call(null,seq__108501);
var map__108503 = first__108502;
var map__108503__$1 = cljs.core.__destructure_map.call(null,map__108503);
var msg = map__108503__$1;
var msg_name = cljs.core.get.call(null,map__108503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__108501__$1;
var pred__108504 = cljs.core._EQ_;
var expr__108505 = msg_name;
if(cljs.core.truth_(pred__108504.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__108505))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__108504.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__108505))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
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
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_108594){
var state_val_108595 = (state_108594[(1)]);
if((state_val_108595 === (7))){
var inst_108514 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
if(cljs.core.truth_(inst_108514)){
var statearr_108596_108643 = state_108594__$1;
(statearr_108596_108643[(1)] = (8));

} else {
var statearr_108597_108644 = state_108594__$1;
(statearr_108597_108644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (20))){
var inst_108588 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108598_108645 = state_108594__$1;
(statearr_108598_108645[(2)] = inst_108588);

(statearr_108598_108645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (27))){
var inst_108584 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108599_108646 = state_108594__$1;
(statearr_108599_108646[(2)] = inst_108584);

(statearr_108599_108646[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (1))){
var inst_108507 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_108594__$1 = state_108594;
if(cljs.core.truth_(inst_108507)){
var statearr_108600_108647 = state_108594__$1;
(statearr_108600_108647[(1)] = (2));

} else {
var statearr_108601_108648 = state_108594__$1;
(statearr_108601_108648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (24))){
var inst_108586 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108602_108649 = state_108594__$1;
(statearr_108602_108649[(2)] = inst_108586);

(statearr_108602_108649[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (4))){
var inst_108592 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108594__$1,inst_108592);
} else {
if((state_val_108595 === (15))){
var inst_108590 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108603_108650 = state_108594__$1;
(statearr_108603_108650[(2)] = inst_108590);

(statearr_108603_108650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (21))){
var inst_108543 = (state_108594[(2)]);
var inst_108544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108545 = figwheel.client.auto_jump_to_error.call(null,opts,inst_108544);
var state_108594__$1 = (function (){var statearr_108604 = state_108594;
(statearr_108604[(7)] = inst_108543);

return statearr_108604;
})();
var statearr_108605_108651 = state_108594__$1;
(statearr_108605_108651[(2)] = inst_108545);

(statearr_108605_108651[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (31))){
var inst_108573 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_108594__$1 = state_108594;
if(inst_108573){
var statearr_108606_108652 = state_108594__$1;
(statearr_108606_108652[(1)] = (34));

} else {
var statearr_108607_108653 = state_108594__$1;
(statearr_108607_108653[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (32))){
var inst_108582 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108608_108654 = state_108594__$1;
(statearr_108608_108654[(2)] = inst_108582);

(statearr_108608_108654[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (33))){
var inst_108569 = (state_108594[(2)]);
var inst_108570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108571 = figwheel.client.auto_jump_to_error.call(null,opts,inst_108570);
var state_108594__$1 = (function (){var statearr_108609 = state_108594;
(statearr_108609[(8)] = inst_108569);

return statearr_108609;
})();
var statearr_108610_108655 = state_108594__$1;
(statearr_108610_108655[(2)] = inst_108571);

(statearr_108610_108655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (13))){
var inst_108528 = figwheel.client.heads_up.clear.call(null);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(16),inst_108528);
} else {
if((state_val_108595 === (22))){
var inst_108549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108550 = figwheel.client.heads_up.append_warning_message.call(null,inst_108549);
var state_108594__$1 = state_108594;
var statearr_108611_108656 = state_108594__$1;
(statearr_108611_108656[(2)] = inst_108550);

(statearr_108611_108656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (36))){
var inst_108580 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108612_108657 = state_108594__$1;
(statearr_108612_108657[(2)] = inst_108580);

(statearr_108612_108657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (29))){
var inst_108560 = (state_108594[(2)]);
var inst_108561 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108562 = figwheel.client.auto_jump_to_error.call(null,opts,inst_108561);
var state_108594__$1 = (function (){var statearr_108613 = state_108594;
(statearr_108613[(9)] = inst_108560);

return statearr_108613;
})();
var statearr_108614_108658 = state_108594__$1;
(statearr_108614_108658[(2)] = inst_108562);

(statearr_108614_108658[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (6))){
var inst_108509 = (state_108594[(10)]);
var state_108594__$1 = state_108594;
var statearr_108615_108659 = state_108594__$1;
(statearr_108615_108659[(2)] = inst_108509);

(statearr_108615_108659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (28))){
var inst_108556 = (state_108594[(2)]);
var inst_108557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108558 = figwheel.client.heads_up.display_warning.call(null,inst_108557);
var state_108594__$1 = (function (){var statearr_108616 = state_108594;
(statearr_108616[(11)] = inst_108556);

return statearr_108616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(29),inst_108558);
} else {
if((state_val_108595 === (25))){
var inst_108554 = figwheel.client.heads_up.clear.call(null);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(28),inst_108554);
} else {
if((state_val_108595 === (34))){
var inst_108575 = figwheel.client.heads_up.flash_loaded.call(null);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(37),inst_108575);
} else {
if((state_val_108595 === (17))){
var inst_108534 = (state_108594[(2)]);
var inst_108535 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108536 = figwheel.client.auto_jump_to_error.call(null,opts,inst_108535);
var state_108594__$1 = (function (){var statearr_108617 = state_108594;
(statearr_108617[(12)] = inst_108534);

return statearr_108617;
})();
var statearr_108618_108660 = state_108594__$1;
(statearr_108618_108660[(2)] = inst_108536);

(statearr_108618_108660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (3))){
var inst_108526 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_108594__$1 = state_108594;
if(inst_108526){
var statearr_108619_108661 = state_108594__$1;
(statearr_108619_108661[(1)] = (13));

} else {
var statearr_108620_108662 = state_108594__$1;
(statearr_108620_108662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (12))){
var inst_108522 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108621_108663 = state_108594__$1;
(statearr_108621_108663[(2)] = inst_108522);

(statearr_108621_108663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (2))){
var inst_108509 = (state_108594[(10)]);
var inst_108509__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_108594__$1 = (function (){var statearr_108622 = state_108594;
(statearr_108622[(10)] = inst_108509__$1);

return statearr_108622;
})();
if(cljs.core.truth_(inst_108509__$1)){
var statearr_108623_108664 = state_108594__$1;
(statearr_108623_108664[(1)] = (5));

} else {
var statearr_108624_108665 = state_108594__$1;
(statearr_108624_108665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (23))){
var inst_108552 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_108594__$1 = state_108594;
if(inst_108552){
var statearr_108625_108666 = state_108594__$1;
(statearr_108625_108666[(1)] = (25));

} else {
var statearr_108626_108667 = state_108594__$1;
(statearr_108626_108667[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (35))){
var state_108594__$1 = state_108594;
var statearr_108627_108668 = state_108594__$1;
(statearr_108627_108668[(2)] = null);

(statearr_108627_108668[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (19))){
var inst_108547 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_108594__$1 = state_108594;
if(inst_108547){
var statearr_108628_108669 = state_108594__$1;
(statearr_108628_108669[(1)] = (22));

} else {
var statearr_108629_108670 = state_108594__$1;
(statearr_108629_108670[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (11))){
var inst_108518 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108630_108671 = state_108594__$1;
(statearr_108630_108671[(2)] = inst_108518);

(statearr_108630_108671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (9))){
var inst_108520 = figwheel.client.heads_up.clear.call(null);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(12),inst_108520);
} else {
if((state_val_108595 === (5))){
var inst_108511 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_108594__$1 = state_108594;
var statearr_108631_108672 = state_108594__$1;
(statearr_108631_108672[(2)] = inst_108511);

(statearr_108631_108672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (14))){
var inst_108538 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_108594__$1 = state_108594;
if(inst_108538){
var statearr_108632_108673 = state_108594__$1;
(statearr_108632_108673[(1)] = (18));

} else {
var statearr_108633_108674 = state_108594__$1;
(statearr_108633_108674[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (26))){
var inst_108564 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_108594__$1 = state_108594;
if(inst_108564){
var statearr_108634_108675 = state_108594__$1;
(statearr_108634_108675[(1)] = (30));

} else {
var statearr_108635_108676 = state_108594__$1;
(statearr_108635_108676[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (16))){
var inst_108530 = (state_108594[(2)]);
var inst_108531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108532 = figwheel.client.heads_up.display_exception.call(null,inst_108531);
var state_108594__$1 = (function (){var statearr_108636 = state_108594;
(statearr_108636[(13)] = inst_108530);

return statearr_108636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(17),inst_108532);
} else {
if((state_val_108595 === (30))){
var inst_108566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108567 = figwheel.client.heads_up.display_warning.call(null,inst_108566);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(33),inst_108567);
} else {
if((state_val_108595 === (10))){
var inst_108524 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108637_108677 = state_108594__$1;
(statearr_108637_108677[(2)] = inst_108524);

(statearr_108637_108677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (18))){
var inst_108540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_108541 = figwheel.client.heads_up.display_exception.call(null,inst_108540);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(21),inst_108541);
} else {
if((state_val_108595 === (37))){
var inst_108577 = (state_108594[(2)]);
var state_108594__$1 = state_108594;
var statearr_108638_108678 = state_108594__$1;
(statearr_108638_108678[(2)] = inst_108577);

(statearr_108638_108678[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108595 === (8))){
var inst_108516 = figwheel.client.heads_up.flash_loaded.call(null);
var state_108594__$1 = state_108594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108594__$1,(11),inst_108516);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto____0 = (function (){
var statearr_108639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108639[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto__);

(statearr_108639[(1)] = (1));

return statearr_108639;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto____1 = (function (state_108594){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_108594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e108640){if((e108640 instanceof Object)){
var ex__32974__auto__ = e108640;
var statearr_108641_108679 = state_108594;
(statearr_108641_108679[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108680 = state_108594;
state_108594 = G__108680;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto__ = function(state_108594){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto____1.call(this,state_108594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_108642 = f__33068__auto__.call(null);
(statearr_108642[(6)] = c__33067__auto__);

return statearr_108642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33067__auto___108709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_108695){
var state_val_108696 = (state_108695[(1)]);
if((state_val_108696 === (1))){
var state_108695__$1 = state_108695;
var statearr_108697_108710 = state_108695__$1;
(statearr_108697_108710[(2)] = null);

(statearr_108697_108710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108696 === (2))){
var state_108695__$1 = state_108695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108695__$1,(4),ch);
} else {
if((state_val_108696 === (3))){
var inst_108693 = (state_108695[(2)]);
var state_108695__$1 = state_108695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108695__$1,inst_108693);
} else {
if((state_val_108696 === (4))){
var inst_108683 = (state_108695[(7)]);
var inst_108683__$1 = (state_108695[(2)]);
var state_108695__$1 = (function (){var statearr_108698 = state_108695;
(statearr_108698[(7)] = inst_108683__$1);

return statearr_108698;
})();
if(cljs.core.truth_(inst_108683__$1)){
var statearr_108699_108711 = state_108695__$1;
(statearr_108699_108711[(1)] = (5));

} else {
var statearr_108700_108712 = state_108695__$1;
(statearr_108700_108712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108696 === (5))){
var inst_108683 = (state_108695[(7)]);
var inst_108685 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_108683);
var state_108695__$1 = state_108695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108695__$1,(8),inst_108685);
} else {
if((state_val_108696 === (6))){
var state_108695__$1 = state_108695;
var statearr_108701_108713 = state_108695__$1;
(statearr_108701_108713[(2)] = null);

(statearr_108701_108713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108696 === (7))){
var inst_108691 = (state_108695[(2)]);
var state_108695__$1 = state_108695;
var statearr_108702_108714 = state_108695__$1;
(statearr_108702_108714[(2)] = inst_108691);

(statearr_108702_108714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108696 === (8))){
var inst_108687 = (state_108695[(2)]);
var state_108695__$1 = (function (){var statearr_108703 = state_108695;
(statearr_108703[(8)] = inst_108687);

return statearr_108703;
})();
var statearr_108704_108715 = state_108695__$1;
(statearr_108704_108715[(2)] = null);

(statearr_108704_108715[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32971__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32971__auto____0 = (function (){
var statearr_108705 = [null,null,null,null,null,null,null,null,null];
(statearr_108705[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32971__auto__);

(statearr_108705[(1)] = (1));

return statearr_108705;
});
var figwheel$client$heads_up_plugin_$_state_machine__32971__auto____1 = (function (state_108695){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_108695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e108706){if((e108706 instanceof Object)){
var ex__32974__auto__ = e108706;
var statearr_108707_108716 = state_108695;
(statearr_108707_108716[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108717 = state_108695;
state_108695 = G__108717;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32971__auto__ = function(state_108695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32971__auto____1.call(this,state_108695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32971__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32971__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_108708 = f__33068__auto__.call(null);
(statearr_108708[(6)] = c__33067__auto___108709);

return statearr_108708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_108723){
var state_val_108724 = (state_108723[(1)]);
if((state_val_108724 === (1))){
var inst_108718 = cljs.core.async.timeout.call(null,(3000));
var state_108723__$1 = state_108723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108723__$1,(2),inst_108718);
} else {
if((state_val_108724 === (2))){
var inst_108720 = (state_108723[(2)]);
var inst_108721 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_108723__$1 = (function (){var statearr_108725 = state_108723;
(statearr_108725[(7)] = inst_108720);

return statearr_108725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108723__$1,inst_108721);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32971__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32971__auto____0 = (function (){
var statearr_108726 = [null,null,null,null,null,null,null,null];
(statearr_108726[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32971__auto__);

(statearr_108726[(1)] = (1));

return statearr_108726;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32971__auto____1 = (function (state_108723){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_108723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e108727){if((e108727 instanceof Object)){
var ex__32974__auto__ = e108727;
var statearr_108728_108730 = state_108723;
(statearr_108728_108730[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108731 = state_108723;
state_108723 = G__108731;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32971__auto__ = function(state_108723){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32971__auto____1.call(this,state_108723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32971__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32971__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_108729 = f__33068__auto__.call(null);
(statearr_108729[(6)] = c__33067__auto__);

return statearr_108729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
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
var temp__5818__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5818__auto__)){
var figwheel_version = temp__5818__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_108738){
var state_val_108739 = (state_108738[(1)]);
if((state_val_108739 === (1))){
var inst_108732 = cljs.core.async.timeout.call(null,(2000));
var state_108738__$1 = state_108738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_108738__$1,(2),inst_108732);
} else {
if((state_val_108739 === (2))){
var inst_108734 = (state_108738[(2)]);
var inst_108735 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_108736 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_108735);
var state_108738__$1 = (function (){var statearr_108740 = state_108738;
(statearr_108740[(7)] = inst_108734);

return statearr_108740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_108738__$1,inst_108736);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto____0 = (function (){
var statearr_108741 = [null,null,null,null,null,null,null,null];
(statearr_108741[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto__);

(statearr_108741[(1)] = (1));

return statearr_108741;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto____1 = (function (state_108738){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_108738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e108742){if((e108742 instanceof Object)){
var ex__32974__auto__ = e108742;
var statearr_108743_108745 = state_108738;
(statearr_108743_108745[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_108738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108746 = state_108738;
state_108738 = G__108746;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto__ = function(state_108738){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto____1.call(this,state_108738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_108744 = f__33068__auto__.call(null);
(statearr_108744[(6)] = c__33067__auto__);

return statearr_108744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__108747){
var map__108748 = p__108747;
var map__108748__$1 = cljs.core.__destructure_map.call(null,map__108748);
var file = cljs.core.get.call(null,map__108748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__108748__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__108748__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__108749 = "";
var G__108749__$1 = (cljs.core.truth_(file)?[G__108749,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__108749);
var G__108749__$2 = (cljs.core.truth_(line)?[G__108749__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__108749__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__108749__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__108749__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__108750){
var map__108751 = p__108750;
var map__108751__$1 = cljs.core.__destructure_map.call(null,map__108751);
var ed = map__108751__$1;
var exception_data = cljs.core.get.call(null,map__108751__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__108751__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_108753 = (function (){var G__108752 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108752)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__108752;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_108753);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__108754){
var map__108755 = p__108754;
var map__108755__$1 = cljs.core.__destructure_map.call(null,map__108755);
var w = map__108755__$1;
var message = cljs.core.get.call(null,map__108755__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__5043__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__5043__auto__;
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
var seq__108756 = cljs.core.seq.call(null,plugins);
var chunk__108757 = null;
var count__108758 = (0);
var i__108759 = (0);
while(true){
if((i__108759 < count__108758)){
var vec__108766 = cljs.core._nth.call(null,chunk__108757,i__108759);
var k = cljs.core.nth.call(null,vec__108766,(0),null);
var plugin = cljs.core.nth.call(null,vec__108766,(1),null);
if(cljs.core.truth_(plugin)){
var pl_108772 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__108756,chunk__108757,count__108758,i__108759,pl_108772,vec__108766,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_108772.call(null,msg_hist);
});})(seq__108756,chunk__108757,count__108758,i__108759,pl_108772,vec__108766,k,plugin))
);
} else {
}


var G__108773 = seq__108756;
var G__108774 = chunk__108757;
var G__108775 = count__108758;
var G__108776 = (i__108759 + (1));
seq__108756 = G__108773;
chunk__108757 = G__108774;
count__108758 = G__108775;
i__108759 = G__108776;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__108756);
if(temp__5818__auto__){
var seq__108756__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108756__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__108756__$1);
var G__108777 = cljs.core.chunk_rest.call(null,seq__108756__$1);
var G__108778 = c__5568__auto__;
var G__108779 = cljs.core.count.call(null,c__5568__auto__);
var G__108780 = (0);
seq__108756 = G__108777;
chunk__108757 = G__108778;
count__108758 = G__108779;
i__108759 = G__108780;
continue;
} else {
var vec__108769 = cljs.core.first.call(null,seq__108756__$1);
var k = cljs.core.nth.call(null,vec__108769,(0),null);
var plugin = cljs.core.nth.call(null,vec__108769,(1),null);
if(cljs.core.truth_(plugin)){
var pl_108781 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__108756,chunk__108757,count__108758,i__108759,pl_108781,vec__108769,k,plugin,seq__108756__$1,temp__5818__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_108781.call(null,msg_hist);
});})(seq__108756,chunk__108757,count__108758,i__108759,pl_108781,vec__108769,k,plugin,seq__108756__$1,temp__5818__auto__))
);
} else {
}


var G__108782 = cljs.core.next.call(null,seq__108756__$1);
var G__108783 = null;
var G__108784 = (0);
var G__108785 = (0);
seq__108756 = G__108782;
chunk__108757 = G__108783;
count__108758 = G__108784;
i__108759 = G__108785;
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
var G__108787 = arguments.length;
switch (G__108787) {
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

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__108788_108793 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__108789_108794 = null;
var count__108790_108795 = (0);
var i__108791_108796 = (0);
while(true){
if((i__108791_108796 < count__108790_108795)){
var msg_108797 = cljs.core._nth.call(null,chunk__108789_108794,i__108791_108796);
figwheel.client.socket.handle_incoming_message.call(null,msg_108797);


var G__108798 = seq__108788_108793;
var G__108799 = chunk__108789_108794;
var G__108800 = count__108790_108795;
var G__108801 = (i__108791_108796 + (1));
seq__108788_108793 = G__108798;
chunk__108789_108794 = G__108799;
count__108790_108795 = G__108800;
i__108791_108796 = G__108801;
continue;
} else {
var temp__5818__auto___108802 = cljs.core.seq.call(null,seq__108788_108793);
if(temp__5818__auto___108802){
var seq__108788_108803__$1 = temp__5818__auto___108802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108788_108803__$1)){
var c__5568__auto___108804 = cljs.core.chunk_first.call(null,seq__108788_108803__$1);
var G__108805 = cljs.core.chunk_rest.call(null,seq__108788_108803__$1);
var G__108806 = c__5568__auto___108804;
var G__108807 = cljs.core.count.call(null,c__5568__auto___108804);
var G__108808 = (0);
seq__108788_108793 = G__108805;
chunk__108789_108794 = G__108806;
count__108790_108795 = G__108807;
i__108791_108796 = G__108808;
continue;
} else {
var msg_108809 = cljs.core.first.call(null,seq__108788_108803__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_108809);


var G__108810 = cljs.core.next.call(null,seq__108788_108803__$1);
var G__108811 = null;
var G__108812 = (0);
var G__108813 = (0);
seq__108788_108793 = G__108810;
chunk__108789_108794 = G__108811;
count__108790_108795 = G__108812;
i__108791_108796 = G__108813;
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
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5775__auto__ = [];
var len__5769__auto___108817 = arguments.length;
var i__5770__auto___108818 = (0);
while(true){
if((i__5770__auto___108818 < len__5769__auto___108817)){
args__5775__auto__.push((arguments[i__5770__auto___108818]));

var G__108819 = (i__5770__auto___108818 + (1));
i__5770__auto___108818 = G__108819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__108815){
var map__108816 = p__108815;
var map__108816__$1 = cljs.core.__destructure_map.call(null,map__108816);
var opts = map__108816__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq108814){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq108814));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e108820){if((e108820 instanceof Error)){
var e = e108820;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e108820;

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
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__108821){
var map__108822 = p__108821;
var map__108822__$1 = cljs.core.__destructure_map.call(null,map__108822);
var msg_name = cljs.core.get.call(null,map__108822__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1767875396366
