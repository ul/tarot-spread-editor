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
}catch (e43732){if((e43732 instanceof Error)){
var e = e43732;
return "Error: Unable to stringify";
} else {
throw e43732;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43735 = arguments.length;
switch (G__43735) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43733_SHARP_){
if(typeof p1__43733_SHARP_ === 'string'){
return p1__43733_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43733_SHARP_);
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
var len__5769__auto___43738 = arguments.length;
var i__5770__auto___43739 = (0);
while(true){
if((i__5770__auto___43739 < len__5769__auto___43738)){
args__5775__auto__.push((arguments[i__5770__auto___43739]));

var G__43740 = (i__5770__auto___43739 + (1));
i__5770__auto___43739 = G__43740;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43737));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43742 = arguments.length;
var i__5770__auto___43743 = (0);
while(true){
if((i__5770__auto___43743 < len__5769__auto___43742)){
args__5775__auto__.push((arguments[i__5770__auto___43743]));

var G__43744 = (i__5770__auto___43743 + (1));
i__5770__auto___43743 = G__43744;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43741));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43745){
var map__43746 = p__43745;
var map__43746__$1 = cljs.core.__destructure_map.call(null,map__43746);
var message = cljs.core.get.call(null,map__43746__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43746__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__39910__auto___43824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_43796){
var state_val_43797 = (state_43796[(1)]);
if((state_val_43797 === (7))){
var inst_43792 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
var statearr_43798_43825 = state_43796__$1;
(statearr_43798_43825[(2)] = inst_43792);

(statearr_43798_43825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (1))){
var state_43796__$1 = state_43796;
var statearr_43799_43826 = state_43796__$1;
(statearr_43799_43826[(2)] = null);

(statearr_43799_43826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (4))){
var inst_43749 = (state_43796[(7)]);
var inst_43749__$1 = (state_43796[(2)]);
var state_43796__$1 = (function (){var statearr_43800 = state_43796;
(statearr_43800[(7)] = inst_43749__$1);

return statearr_43800;
})();
if(cljs.core.truth_(inst_43749__$1)){
var statearr_43801_43827 = state_43796__$1;
(statearr_43801_43827[(1)] = (5));

} else {
var statearr_43802_43828 = state_43796__$1;
(statearr_43802_43828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (15))){
var inst_43756 = (state_43796[(8)]);
var inst_43771 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43756);
var inst_43772 = cljs.core.first.call(null,inst_43771);
var inst_43773 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43772);
var inst_43774 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43773)].join('');
var inst_43775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43774);
var state_43796__$1 = state_43796;
var statearr_43803_43829 = state_43796__$1;
(statearr_43803_43829[(2)] = inst_43775);

(statearr_43803_43829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (13))){
var inst_43780 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
var statearr_43804_43830 = state_43796__$1;
(statearr_43804_43830[(2)] = inst_43780);

(statearr_43804_43830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (6))){
var state_43796__$1 = state_43796;
var statearr_43805_43831 = state_43796__$1;
(statearr_43805_43831[(2)] = null);

(statearr_43805_43831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (17))){
var inst_43778 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
var statearr_43806_43832 = state_43796__$1;
(statearr_43806_43832[(2)] = inst_43778);

(statearr_43806_43832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (3))){
var inst_43794 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43796__$1,inst_43794);
} else {
if((state_val_43797 === (12))){
var inst_43755 = (state_43796[(9)]);
var inst_43769 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43755,opts);
var state_43796__$1 = state_43796;
if(inst_43769){
var statearr_43807_43833 = state_43796__$1;
(statearr_43807_43833[(1)] = (15));

} else {
var statearr_43808_43834 = state_43796__$1;
(statearr_43808_43834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (2))){
var state_43796__$1 = state_43796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43796__$1,(4),ch);
} else {
if((state_val_43797 === (11))){
var inst_43756 = (state_43796[(8)]);
var inst_43761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43762 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43756);
var inst_43763 = cljs.core.async.timeout.call(null,(1000));
var inst_43764 = [inst_43762,inst_43763];
var inst_43765 = (new cljs.core.PersistentVector(null,2,(5),inst_43761,inst_43764,null));
var state_43796__$1 = state_43796;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43796__$1,(14),inst_43765);
} else {
if((state_val_43797 === (9))){
var inst_43756 = (state_43796[(8)]);
var inst_43782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43783 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43756);
var inst_43784 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43783);
var inst_43785 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43784)].join('');
var inst_43786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43785);
var state_43796__$1 = (function (){var statearr_43809 = state_43796;
(statearr_43809[(10)] = inst_43782);

return statearr_43809;
})();
var statearr_43810_43835 = state_43796__$1;
(statearr_43810_43835[(2)] = inst_43786);

(statearr_43810_43835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (5))){
var inst_43749 = (state_43796[(7)]);
var inst_43751 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43752 = (new cljs.core.PersistentArrayMap(null,2,inst_43751,null));
var inst_43753 = (new cljs.core.PersistentHashSet(null,inst_43752,null));
var inst_43754 = figwheel.client.focus_msgs.call(null,inst_43753,inst_43749);
var inst_43755 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43754);
var inst_43756 = cljs.core.first.call(null,inst_43754);
var inst_43757 = figwheel.client.autoload_QMARK_.call(null);
var state_43796__$1 = (function (){var statearr_43811 = state_43796;
(statearr_43811[(8)] = inst_43756);

(statearr_43811[(9)] = inst_43755);

return statearr_43811;
})();
if(cljs.core.truth_(inst_43757)){
var statearr_43812_43836 = state_43796__$1;
(statearr_43812_43836[(1)] = (8));

} else {
var statearr_43813_43837 = state_43796__$1;
(statearr_43813_43837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (14))){
var inst_43767 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
var statearr_43814_43838 = state_43796__$1;
(statearr_43814_43838[(2)] = inst_43767);

(statearr_43814_43838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (16))){
var state_43796__$1 = state_43796;
var statearr_43815_43839 = state_43796__$1;
(statearr_43815_43839[(2)] = null);

(statearr_43815_43839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (10))){
var inst_43788 = (state_43796[(2)]);
var state_43796__$1 = (function (){var statearr_43816 = state_43796;
(statearr_43816[(11)] = inst_43788);

return statearr_43816;
})();
var statearr_43817_43840 = state_43796__$1;
(statearr_43817_43840[(2)] = null);

(statearr_43817_43840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (8))){
var inst_43755 = (state_43796[(9)]);
var inst_43759 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43755,opts);
var state_43796__$1 = state_43796;
if(cljs.core.truth_(inst_43759)){
var statearr_43818_43841 = state_43796__$1;
(statearr_43818_43841[(1)] = (11));

} else {
var statearr_43819_43842 = state_43796__$1;
(statearr_43819_43842[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__39814__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39814__auto____0 = (function (){
var statearr_43820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43820[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39814__auto__);

(statearr_43820[(1)] = (1));

return statearr_43820;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39814__auto____1 = (function (state_43796){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_43796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e43821){if((e43821 instanceof Object)){
var ex__39817__auto__ = e43821;
var statearr_43822_43843 = state_43796;
(statearr_43822_43843[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43844 = state_43796;
state_43796 = G__43844;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39814__auto__ = function(state_43796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39814__auto____1.call(this,state_43796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39814__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39814__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_43823 = f__39911__auto__.call(null);
(statearr_43823[(6)] = c__39910__auto___43824);

return statearr_43823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43845_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43845_SHARP_));
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
var base_path_43851 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43848 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43849 = true;
var _STAR_print_fn_STAR__temp_val__43850 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43849);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43850);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43848);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43847);
}}catch (e43846){if((e43846 instanceof Error)){
var e = e43846;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43851], null));
} else {
var e = e43846;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43852){
var map__43853 = p__43852;
var map__43853__$1 = cljs.core.__destructure_map.call(null,map__43853);
var opts = map__43853__$1;
var build_id = cljs.core.get.call(null,map__43853__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__43854){
var vec__43855 = p__43854;
var seq__43856 = cljs.core.seq.call(null,vec__43855);
var first__43857 = cljs.core.first.call(null,seq__43856);
var seq__43856__$1 = cljs.core.next.call(null,seq__43856);
var map__43858 = first__43857;
var map__43858__$1 = cljs.core.__destructure_map.call(null,map__43858);
var msg = map__43858__$1;
var msg_name = cljs.core.get.call(null,map__43858__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43856__$1;
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
return (function (p__43859){
var vec__43860 = p__43859;
var seq__43861 = cljs.core.seq.call(null,vec__43860);
var first__43862 = cljs.core.first.call(null,seq__43861);
var seq__43861__$1 = cljs.core.next.call(null,seq__43861);
var map__43863 = first__43862;
var map__43863__$1 = cljs.core.__destructure_map.call(null,map__43863);
var msg = map__43863__$1;
var msg_name = cljs.core.get.call(null,map__43863__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43861__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43864){
var map__43865 = p__43864;
var map__43865__$1 = cljs.core.__destructure_map.call(null,map__43865);
var on_compile_warning = cljs.core.get.call(null,map__43865__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43865__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__43866){
var vec__43867 = p__43866;
var seq__43868 = cljs.core.seq.call(null,vec__43867);
var first__43869 = cljs.core.first.call(null,seq__43868);
var seq__43868__$1 = cljs.core.next.call(null,seq__43868);
var map__43870 = first__43869;
var map__43870__$1 = cljs.core.__destructure_map.call(null,map__43870);
var msg = map__43870__$1;
var msg_name = cljs.core.get.call(null,map__43870__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43868__$1;
var pred__43871 = cljs.core._EQ_;
var expr__43872 = msg_name;
if(cljs.core.truth_(pred__43871.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43872))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43871.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43872))){
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
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_43961){
var state_val_43962 = (state_43961[(1)]);
if((state_val_43962 === (7))){
var inst_43881 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
if(cljs.core.truth_(inst_43881)){
var statearr_43963_44010 = state_43961__$1;
(statearr_43963_44010[(1)] = (8));

} else {
var statearr_43964_44011 = state_43961__$1;
(statearr_43964_44011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (20))){
var inst_43955 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43965_44012 = state_43961__$1;
(statearr_43965_44012[(2)] = inst_43955);

(statearr_43965_44012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (27))){
var inst_43951 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43966_44013 = state_43961__$1;
(statearr_43966_44013[(2)] = inst_43951);

(statearr_43966_44013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (1))){
var inst_43874 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43961__$1 = state_43961;
if(cljs.core.truth_(inst_43874)){
var statearr_43967_44014 = state_43961__$1;
(statearr_43967_44014[(1)] = (2));

} else {
var statearr_43968_44015 = state_43961__$1;
(statearr_43968_44015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (24))){
var inst_43953 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43969_44016 = state_43961__$1;
(statearr_43969_44016[(2)] = inst_43953);

(statearr_43969_44016[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (4))){
var inst_43959 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43961__$1,inst_43959);
} else {
if((state_val_43962 === (15))){
var inst_43957 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43970_44017 = state_43961__$1;
(statearr_43970_44017[(2)] = inst_43957);

(statearr_43970_44017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (21))){
var inst_43910 = (state_43961[(2)]);
var inst_43911 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43912 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43911);
var state_43961__$1 = (function (){var statearr_43971 = state_43961;
(statearr_43971[(7)] = inst_43910);

return statearr_43971;
})();
var statearr_43972_44018 = state_43961__$1;
(statearr_43972_44018[(2)] = inst_43912);

(statearr_43972_44018[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (31))){
var inst_43940 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43961__$1 = state_43961;
if(inst_43940){
var statearr_43973_44019 = state_43961__$1;
(statearr_43973_44019[(1)] = (34));

} else {
var statearr_43974_44020 = state_43961__$1;
(statearr_43974_44020[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (32))){
var inst_43949 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43975_44021 = state_43961__$1;
(statearr_43975_44021[(2)] = inst_43949);

(statearr_43975_44021[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (33))){
var inst_43936 = (state_43961[(2)]);
var inst_43937 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43938 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43937);
var state_43961__$1 = (function (){var statearr_43976 = state_43961;
(statearr_43976[(8)] = inst_43936);

return statearr_43976;
})();
var statearr_43977_44022 = state_43961__$1;
(statearr_43977_44022[(2)] = inst_43938);

(statearr_43977_44022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (13))){
var inst_43895 = figwheel.client.heads_up.clear.call(null);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(16),inst_43895);
} else {
if((state_val_43962 === (22))){
var inst_43916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43917 = figwheel.client.heads_up.append_warning_message.call(null,inst_43916);
var state_43961__$1 = state_43961;
var statearr_43978_44023 = state_43961__$1;
(statearr_43978_44023[(2)] = inst_43917);

(statearr_43978_44023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (36))){
var inst_43947 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43979_44024 = state_43961__$1;
(statearr_43979_44024[(2)] = inst_43947);

(statearr_43979_44024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (29))){
var inst_43927 = (state_43961[(2)]);
var inst_43928 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43929 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43928);
var state_43961__$1 = (function (){var statearr_43980 = state_43961;
(statearr_43980[(9)] = inst_43927);

return statearr_43980;
})();
var statearr_43981_44025 = state_43961__$1;
(statearr_43981_44025[(2)] = inst_43929);

(statearr_43981_44025[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (6))){
var inst_43876 = (state_43961[(10)]);
var state_43961__$1 = state_43961;
var statearr_43982_44026 = state_43961__$1;
(statearr_43982_44026[(2)] = inst_43876);

(statearr_43982_44026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (28))){
var inst_43923 = (state_43961[(2)]);
var inst_43924 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43925 = figwheel.client.heads_up.display_warning.call(null,inst_43924);
var state_43961__$1 = (function (){var statearr_43983 = state_43961;
(statearr_43983[(11)] = inst_43923);

return statearr_43983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(29),inst_43925);
} else {
if((state_val_43962 === (25))){
var inst_43921 = figwheel.client.heads_up.clear.call(null);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(28),inst_43921);
} else {
if((state_val_43962 === (34))){
var inst_43942 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(37),inst_43942);
} else {
if((state_val_43962 === (17))){
var inst_43901 = (state_43961[(2)]);
var inst_43902 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43903 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43902);
var state_43961__$1 = (function (){var statearr_43984 = state_43961;
(statearr_43984[(12)] = inst_43901);

return statearr_43984;
})();
var statearr_43985_44027 = state_43961__$1;
(statearr_43985_44027[(2)] = inst_43903);

(statearr_43985_44027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (3))){
var inst_43893 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43961__$1 = state_43961;
if(inst_43893){
var statearr_43986_44028 = state_43961__$1;
(statearr_43986_44028[(1)] = (13));

} else {
var statearr_43987_44029 = state_43961__$1;
(statearr_43987_44029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (12))){
var inst_43889 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43988_44030 = state_43961__$1;
(statearr_43988_44030[(2)] = inst_43889);

(statearr_43988_44030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (2))){
var inst_43876 = (state_43961[(10)]);
var inst_43876__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43961__$1 = (function (){var statearr_43989 = state_43961;
(statearr_43989[(10)] = inst_43876__$1);

return statearr_43989;
})();
if(cljs.core.truth_(inst_43876__$1)){
var statearr_43990_44031 = state_43961__$1;
(statearr_43990_44031[(1)] = (5));

} else {
var statearr_43991_44032 = state_43961__$1;
(statearr_43991_44032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (23))){
var inst_43919 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43961__$1 = state_43961;
if(inst_43919){
var statearr_43992_44033 = state_43961__$1;
(statearr_43992_44033[(1)] = (25));

} else {
var statearr_43993_44034 = state_43961__$1;
(statearr_43993_44034[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (35))){
var state_43961__$1 = state_43961;
var statearr_43994_44035 = state_43961__$1;
(statearr_43994_44035[(2)] = null);

(statearr_43994_44035[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (19))){
var inst_43914 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43961__$1 = state_43961;
if(inst_43914){
var statearr_43995_44036 = state_43961__$1;
(statearr_43995_44036[(1)] = (22));

} else {
var statearr_43996_44037 = state_43961__$1;
(statearr_43996_44037[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (11))){
var inst_43885 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43997_44038 = state_43961__$1;
(statearr_43997_44038[(2)] = inst_43885);

(statearr_43997_44038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (9))){
var inst_43887 = figwheel.client.heads_up.clear.call(null);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(12),inst_43887);
} else {
if((state_val_43962 === (5))){
var inst_43878 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43961__$1 = state_43961;
var statearr_43998_44039 = state_43961__$1;
(statearr_43998_44039[(2)] = inst_43878);

(statearr_43998_44039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (14))){
var inst_43905 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43961__$1 = state_43961;
if(inst_43905){
var statearr_43999_44040 = state_43961__$1;
(statearr_43999_44040[(1)] = (18));

} else {
var statearr_44000_44041 = state_43961__$1;
(statearr_44000_44041[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (26))){
var inst_43931 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43961__$1 = state_43961;
if(inst_43931){
var statearr_44001_44042 = state_43961__$1;
(statearr_44001_44042[(1)] = (30));

} else {
var statearr_44002_44043 = state_43961__$1;
(statearr_44002_44043[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (16))){
var inst_43897 = (state_43961[(2)]);
var inst_43898 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43899 = figwheel.client.heads_up.display_exception.call(null,inst_43898);
var state_43961__$1 = (function (){var statearr_44003 = state_43961;
(statearr_44003[(13)] = inst_43897);

return statearr_44003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(17),inst_43899);
} else {
if((state_val_43962 === (30))){
var inst_43933 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43934 = figwheel.client.heads_up.display_warning.call(null,inst_43933);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(33),inst_43934);
} else {
if((state_val_43962 === (10))){
var inst_43891 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_44004_44044 = state_43961__$1;
(statearr_44004_44044[(2)] = inst_43891);

(statearr_44004_44044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (18))){
var inst_43907 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43908 = figwheel.client.heads_up.display_exception.call(null,inst_43907);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(21),inst_43908);
} else {
if((state_val_43962 === (37))){
var inst_43944 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_44005_44045 = state_43961__$1;
(statearr_44005_44045[(2)] = inst_43944);

(statearr_44005_44045[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (8))){
var inst_43883 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(11),inst_43883);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto____0 = (function (){
var statearr_44006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44006[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto__);

(statearr_44006[(1)] = (1));

return statearr_44006;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto____1 = (function (state_43961){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_43961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e44007){if((e44007 instanceof Object)){
var ex__39817__auto__ = e44007;
var statearr_44008_44046 = state_43961;
(statearr_44008_44046[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44047 = state_43961;
state_43961 = G__44047;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto__ = function(state_43961){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto____1.call(this,state_43961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_44009 = f__39911__auto__.call(null);
(statearr_44009[(6)] = c__39910__auto__);

return statearr_44009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39910__auto___44076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_44062){
var state_val_44063 = (state_44062[(1)]);
if((state_val_44063 === (1))){
var state_44062__$1 = state_44062;
var statearr_44064_44077 = state_44062__$1;
(statearr_44064_44077[(2)] = null);

(statearr_44064_44077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (2))){
var state_44062__$1 = state_44062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44062__$1,(4),ch);
} else {
if((state_val_44063 === (3))){
var inst_44060 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44062__$1,inst_44060);
} else {
if((state_val_44063 === (4))){
var inst_44050 = (state_44062[(7)]);
var inst_44050__$1 = (state_44062[(2)]);
var state_44062__$1 = (function (){var statearr_44065 = state_44062;
(statearr_44065[(7)] = inst_44050__$1);

return statearr_44065;
})();
if(cljs.core.truth_(inst_44050__$1)){
var statearr_44066_44078 = state_44062__$1;
(statearr_44066_44078[(1)] = (5));

} else {
var statearr_44067_44079 = state_44062__$1;
(statearr_44067_44079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (5))){
var inst_44050 = (state_44062[(7)]);
var inst_44052 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44050);
var state_44062__$1 = state_44062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44062__$1,(8),inst_44052);
} else {
if((state_val_44063 === (6))){
var state_44062__$1 = state_44062;
var statearr_44068_44080 = state_44062__$1;
(statearr_44068_44080[(2)] = null);

(statearr_44068_44080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (7))){
var inst_44058 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44069_44081 = state_44062__$1;
(statearr_44069_44081[(2)] = inst_44058);

(statearr_44069_44081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (8))){
var inst_44054 = (state_44062[(2)]);
var state_44062__$1 = (function (){var statearr_44070 = state_44062;
(statearr_44070[(8)] = inst_44054);

return statearr_44070;
})();
var statearr_44071_44082 = state_44062__$1;
(statearr_44071_44082[(2)] = null);

(statearr_44071_44082[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__39814__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39814__auto____0 = (function (){
var statearr_44072 = [null,null,null,null,null,null,null,null,null];
(statearr_44072[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39814__auto__);

(statearr_44072[(1)] = (1));

return statearr_44072;
});
var figwheel$client$heads_up_plugin_$_state_machine__39814__auto____1 = (function (state_44062){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_44062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e44073){if((e44073 instanceof Object)){
var ex__39817__auto__ = e44073;
var statearr_44074_44083 = state_44062;
(statearr_44074_44083[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44084 = state_44062;
state_44062 = G__44084;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39814__auto__ = function(state_44062){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39814__auto____1.call(this,state_44062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39814__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39814__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_44075 = f__39911__auto__.call(null);
(statearr_44075[(6)] = c__39910__auto___44076);

return statearr_44075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
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
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_44090){
var state_val_44091 = (state_44090[(1)]);
if((state_val_44091 === (1))){
var inst_44085 = cljs.core.async.timeout.call(null,(3000));
var state_44090__$1 = state_44090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44090__$1,(2),inst_44085);
} else {
if((state_val_44091 === (2))){
var inst_44087 = (state_44090[(2)]);
var inst_44088 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44090__$1 = (function (){var statearr_44092 = state_44090;
(statearr_44092[(7)] = inst_44087);

return statearr_44092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44090__$1,inst_44088);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39814__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39814__auto____0 = (function (){
var statearr_44093 = [null,null,null,null,null,null,null,null];
(statearr_44093[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39814__auto__);

(statearr_44093[(1)] = (1));

return statearr_44093;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39814__auto____1 = (function (state_44090){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_44090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e44094){if((e44094 instanceof Object)){
var ex__39817__auto__ = e44094;
var statearr_44095_44097 = state_44090;
(statearr_44095_44097[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44098 = state_44090;
state_44090 = G__44098;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39814__auto__ = function(state_44090){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39814__auto____1.call(this,state_44090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39814__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39814__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_44096 = f__39911__auto__.call(null);
(statearr_44096[(6)] = c__39910__auto__);

return statearr_44096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
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
var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_44105){
var state_val_44106 = (state_44105[(1)]);
if((state_val_44106 === (1))){
var inst_44099 = cljs.core.async.timeout.call(null,(2000));
var state_44105__$1 = state_44105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44105__$1,(2),inst_44099);
} else {
if((state_val_44106 === (2))){
var inst_44101 = (state_44105[(2)]);
var inst_44102 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44103 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44102);
var state_44105__$1 = (function (){var statearr_44107 = state_44105;
(statearr_44107[(7)] = inst_44101);

return statearr_44107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44105__$1,inst_44103);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto____0 = (function (){
var statearr_44108 = [null,null,null,null,null,null,null,null];
(statearr_44108[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto__);

(statearr_44108[(1)] = (1));

return statearr_44108;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto____1 = (function (state_44105){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_44105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e44109){if((e44109 instanceof Object)){
var ex__39817__auto__ = e44109;
var statearr_44110_44112 = state_44105;
(statearr_44110_44112[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44113 = state_44105;
state_44105 = G__44113;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto__ = function(state_44105){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto____1.call(this,state_44105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_44111 = f__39911__auto__.call(null);
(statearr_44111[(6)] = c__39910__auto__);

return statearr_44111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44114){
var map__44115 = p__44114;
var map__44115__$1 = cljs.core.__destructure_map.call(null,map__44115);
var file = cljs.core.get.call(null,map__44115__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44115__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44115__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44116 = "";
var G__44116__$1 = (cljs.core.truth_(file)?[G__44116,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44116);
var G__44116__$2 = (cljs.core.truth_(line)?[G__44116__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44116__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__44116__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44116__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44117){
var map__44118 = p__44117;
var map__44118__$1 = cljs.core.__destructure_map.call(null,map__44118);
var ed = map__44118__$1;
var exception_data = cljs.core.get.call(null,map__44118__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44118__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_44120 = (function (){var G__44119 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44119)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__44119;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_44120);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44121){
var map__44122 = p__44121;
var map__44122__$1 = cljs.core.__destructure_map.call(null,map__44122);
var w = map__44122__$1;
var message = cljs.core.get.call(null,map__44122__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__44123 = cljs.core.seq.call(null,plugins);
var chunk__44124 = null;
var count__44125 = (0);
var i__44126 = (0);
while(true){
if((i__44126 < count__44125)){
var vec__44133 = cljs.core._nth.call(null,chunk__44124,i__44126);
var k = cljs.core.nth.call(null,vec__44133,(0),null);
var plugin = cljs.core.nth.call(null,vec__44133,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44139 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44123,chunk__44124,count__44125,i__44126,pl_44139,vec__44133,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44139.call(null,msg_hist);
});})(seq__44123,chunk__44124,count__44125,i__44126,pl_44139,vec__44133,k,plugin))
);
} else {
}


var G__44140 = seq__44123;
var G__44141 = chunk__44124;
var G__44142 = count__44125;
var G__44143 = (i__44126 + (1));
seq__44123 = G__44140;
chunk__44124 = G__44141;
count__44125 = G__44142;
i__44126 = G__44143;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__44123);
if(temp__5818__auto__){
var seq__44123__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44123__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__44123__$1);
var G__44144 = cljs.core.chunk_rest.call(null,seq__44123__$1);
var G__44145 = c__5568__auto__;
var G__44146 = cljs.core.count.call(null,c__5568__auto__);
var G__44147 = (0);
seq__44123 = G__44144;
chunk__44124 = G__44145;
count__44125 = G__44146;
i__44126 = G__44147;
continue;
} else {
var vec__44136 = cljs.core.first.call(null,seq__44123__$1);
var k = cljs.core.nth.call(null,vec__44136,(0),null);
var plugin = cljs.core.nth.call(null,vec__44136,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44148 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44123,chunk__44124,count__44125,i__44126,pl_44148,vec__44136,k,plugin,seq__44123__$1,temp__5818__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44148.call(null,msg_hist);
});})(seq__44123,chunk__44124,count__44125,i__44126,pl_44148,vec__44136,k,plugin,seq__44123__$1,temp__5818__auto__))
);
} else {
}


var G__44149 = cljs.core.next.call(null,seq__44123__$1);
var G__44150 = null;
var G__44151 = (0);
var G__44152 = (0);
seq__44123 = G__44149;
chunk__44124 = G__44150;
count__44125 = G__44151;
i__44126 = G__44152;
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
var G__44154 = arguments.length;
switch (G__44154) {
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

var seq__44155_44160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44156_44161 = null;
var count__44157_44162 = (0);
var i__44158_44163 = (0);
while(true){
if((i__44158_44163 < count__44157_44162)){
var msg_44164 = cljs.core._nth.call(null,chunk__44156_44161,i__44158_44163);
figwheel.client.socket.handle_incoming_message.call(null,msg_44164);


var G__44165 = seq__44155_44160;
var G__44166 = chunk__44156_44161;
var G__44167 = count__44157_44162;
var G__44168 = (i__44158_44163 + (1));
seq__44155_44160 = G__44165;
chunk__44156_44161 = G__44166;
count__44157_44162 = G__44167;
i__44158_44163 = G__44168;
continue;
} else {
var temp__5818__auto___44169 = cljs.core.seq.call(null,seq__44155_44160);
if(temp__5818__auto___44169){
var seq__44155_44170__$1 = temp__5818__auto___44169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44155_44170__$1)){
var c__5568__auto___44171 = cljs.core.chunk_first.call(null,seq__44155_44170__$1);
var G__44172 = cljs.core.chunk_rest.call(null,seq__44155_44170__$1);
var G__44173 = c__5568__auto___44171;
var G__44174 = cljs.core.count.call(null,c__5568__auto___44171);
var G__44175 = (0);
seq__44155_44160 = G__44172;
chunk__44156_44161 = G__44173;
count__44157_44162 = G__44174;
i__44158_44163 = G__44175;
continue;
} else {
var msg_44176 = cljs.core.first.call(null,seq__44155_44170__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44176);


var G__44177 = cljs.core.next.call(null,seq__44155_44170__$1);
var G__44178 = null;
var G__44179 = (0);
var G__44180 = (0);
seq__44155_44160 = G__44177;
chunk__44156_44161 = G__44178;
count__44157_44162 = G__44179;
i__44158_44163 = G__44180;
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
var len__5769__auto___44184 = arguments.length;
var i__5770__auto___44185 = (0);
while(true){
if((i__5770__auto___44185 < len__5769__auto___44184)){
args__5775__auto__.push((arguments[i__5770__auto___44185]));

var G__44186 = (i__5770__auto___44185 + (1));
i__5770__auto___44185 = G__44186;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44182){
var map__44183 = p__44182;
var map__44183__$1 = cljs.core.__destructure_map.call(null,map__44183);
var opts = map__44183__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44181));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44187){if((e44187 instanceof Error)){
var e = e44187;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44187;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__44188){
var map__44189 = p__44188;
var map__44189__$1 = cljs.core.__destructure_map.call(null,map__44189);
var msg_name = cljs.core.get.call(null,map__44189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1710474320259
