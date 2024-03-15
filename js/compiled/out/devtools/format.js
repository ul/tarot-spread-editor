// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_36996 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._header["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_36996.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_36997 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_36997.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_36998 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._body["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_36998.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o36999 = temp__5816__auto__;
var temp__5816__auto____$1 = (o36999["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37000 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37000["templating"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37001 = temp__5816__auto____$2;
return (o37001["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o37002 = temp__5816__auto__;
var temp__5816__auto____$1 = (o37002["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37003 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37003["templating"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37004 = temp__5816__auto____$2;
return (o37004["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o37005 = temp__5816__auto__;
var temp__5816__auto____$1 = (o37005["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37006 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37006["templating"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37007 = temp__5816__auto____$2;
return (o37007["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o37008 = temp__5816__auto__;
var temp__5816__auto____$1 = (o37008["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37009 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37009["templating"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37010 = temp__5816__auto____$2;
return (o37010["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o37011 = temp__5816__auto__;
var temp__5816__auto____$1 = (o37011["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37012 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37012["templating"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37013 = temp__5816__auto____$2;
return (o37013["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o37014 = temp__5816__auto__;
var temp__5816__auto____$1 = (o37014["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37015 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37015["markup"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37016 = temp__5816__auto____$2;
return (o37016["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5816__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5816__auto__)){
var o37017 = temp__5816__auto__;
var temp__5816__auto____$1 = (o37017["formatters"]);
if(cljs.core.truth_(temp__5816__auto____$1)){
var o37018 = temp__5816__auto____$1;
var temp__5816__auto____$2 = (o37018["markup"]);
if(cljs.core.truth_(temp__5816__auto____$2)){
var o37019 = temp__5816__auto____$2;
return (o37019["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37021 = arguments.length;
var i__5770__auto___37022 = (0);
while(true){
if((i__5770__auto___37022 < len__5769__auto___37021)){
args__5775__auto__.push((arguments[i__5770__auto___37022]));

var G__37023 = (i__5770__auto___37022 + (1));
i__5770__auto___37022 = G__37023;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq37020){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37020));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37025 = arguments.length;
var i__5770__auto___37026 = (0);
while(true){
if((i__5770__auto___37026 < len__5769__auto___37025)){
args__5775__auto__.push((arguments[i__5770__auto___37026]));

var G__37027 = (i__5770__auto___37026 + (1));
i__5770__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq37024){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37024));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37029 = arguments.length;
var i__5770__auto___37030 = (0);
while(true){
if((i__5770__auto___37030 < len__5769__auto___37029)){
args__5775__auto__.push((arguments[i__5770__auto___37030]));

var G__37031 = (i__5770__auto___37030 + (1));
i__5770__auto___37030 = G__37031;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq37028){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37028));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37033 = arguments.length;
var i__5770__auto___37034 = (0);
while(true){
if((i__5770__auto___37034 < len__5769__auto___37033)){
args__5775__auto__.push((arguments[i__5770__auto___37034]));

var G__37035 = (i__5770__auto___37034 + (1));
i__5770__auto___37034 = G__37035;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37032){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37032));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37037 = arguments.length;
var i__5770__auto___37038 = (0);
while(true){
if((i__5770__auto___37038 < len__5769__auto___37037)){
args__5775__auto__.push((arguments[i__5770__auto___37038]));

var G__37039 = (i__5770__auto___37038 + (1));
i__5770__auto___37038 = G__37039;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq37036){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37036));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37041 = arguments.length;
var i__5770__auto___37042 = (0);
while(true){
if((i__5770__auto___37042 < len__5769__auto___37041)){
args__5775__auto__.push((arguments[i__5770__auto___37042]));

var G__37043 = (i__5770__auto___37042 + (1));
i__5770__auto___37042 = G__37043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq37040){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37040));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37045 = arguments.length;
var i__5770__auto___37046 = (0);
while(true){
if((i__5770__auto___37046 < len__5769__auto___37045)){
args__5775__auto__.push((arguments[i__5770__auto___37046]));

var G__37047 = (i__5770__auto___37046 + (1));
i__5770__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq37044){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37044));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37055 = arguments.length;
var i__5770__auto___37056 = (0);
while(true){
if((i__5770__auto___37056 < len__5769__auto___37055)){
args__5775__auto__.push((arguments[i__5770__auto___37056]));

var G__37057 = (i__5770__auto___37056 + (1));
i__5770__auto___37056 = G__37057;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37051){
var vec__37052 = p__37051;
var state_override = cljs.core.nth.call(null,vec__37052,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__37048_SHARP_){
return cljs.core.merge.call(null,p1__37048_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq37049){
var G__37050 = cljs.core.first.call(null,seq37049);
var seq37049__$1 = cljs.core.next.call(null,seq37049);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37050,seq37049__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37059 = arguments.length;
var i__5770__auto___37060 = (0);
while(true){
if((i__5770__auto___37060 < len__5769__auto___37059)){
args__5775__auto__.push((arguments[i__5770__auto___37060]));

var G__37061 = (i__5770__auto___37060 + (1));
i__5770__auto___37060 = G__37061;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq37058){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37058));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37064 = arguments.length;
var i__5770__auto___37065 = (0);
while(true){
if((i__5770__auto___37065 < len__5769__auto___37064)){
args__5775__auto__.push((arguments[i__5770__auto___37065]));

var G__37066 = (i__5770__auto___37065 + (1));
i__5770__auto___37065 = G__37066;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37062){
var G__37063 = cljs.core.first.call(null,seq37062);
var seq37062__$1 = cljs.core.next.call(null,seq37062);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37063,seq37062__$1);
}));


//# sourceMappingURL=format.js.map?rel=1710474318054
