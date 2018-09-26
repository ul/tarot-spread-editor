// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('taoensso.tempura.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
taoensso.tempura.impl.str__GT__QMARK_arg_idx = (function taoensso$tempura$impl$str__GT__QMARK_arg_idx(s){
var G__53804 = s;
switch (G__53804) {
case "%0":
throw cljs.core.ex_info.call(null,"`%0` is invalid, starts at `%1`",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),s], null));

break;
case "%1":
return (0);

break;
case "%2":
return (1);

break;
case "%3":
return (2);

break;
case "%4":
return (3);

break;
case "%5":
return (4);

break;
case "%6":
return (5);

break;
case "%7":
return (6);

break;
case "%8":
return (7);

break;
case "%9":
return (8);

break;
default:
return null;

}
});
taoensso.tempura.impl.re_clojure_arg = /%\d/;
/**
 * Checks string for simple Clojure-style (%d) args and returns a vector of
 *   string parts and int arg indexes for later joining.
 */
taoensso.tempura.impl.str__GT_split_args = (function taoensso$tempura$impl$str__GT_split_args(s){
if(typeof s === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",25,"(string? s)",s,null,null);
}

if(cljs.core.not.call(null,(function (){var and__3938__auto__ = taoensso.encore.str_contains_QMARK_.call(null,s,"%");
if(and__3938__auto__){
return cljs.core.re_find.call(null,taoensso.tempura.impl.re_clojure_arg,s);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
var uuid_esc = taoensso.encore.uuid_str.call(null);
var s__$1 = taoensso.encore.str_replace.call(null,s,"`%",uuid_esc);
var _QMARK_arg_seq = cljs.core.re_seq.call(null,taoensso.tempura.impl.re_clojure_arg,s__$1);
if(cljs.core.empty_QMARK_.call(null,_QMARK_arg_seq)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.str_replace.call(null,s__$1,uuid_esc,"%")], null);
} else {
var arg_idxs = cljs.core.mapv.call(null,taoensso.tempura.impl.str__GT__QMARK_arg_idx,_QMARK_arg_seq);
var splits = clojure.string.split.call(null,s__$1,taoensso.tempura.impl.re_clojure_arg);
var splits__$1 = cljs.core.mapv.call(null,((function (arg_idxs,splits,uuid_esc,s__$1,_QMARK_arg_seq){
return (function (s__$2){
return taoensso.encore.str_replace.call(null,s__$2,uuid_esc,"%");
});})(arg_idxs,splits,uuid_esc,s__$1,_QMARK_arg_seq))
,splits);
var _ = (function (){var z = (function (){try{return ((function (arg_idxs,splits,splits__$1,uuid_esc,s__$1,_QMARK_arg_seq){
return (function (arg_idxs_count,splits_count){
return cljs.core._EQ_.call(null,arg_idxs_count,(splits_count - (1)));
});
;})(arg_idxs,splits,splits__$1,uuid_esc,s__$1,_QMARK_arg_seq))
}catch (e53806){if((e53806 instanceof Error)){
var e = e53806;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e53806;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_.call(null,z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e53807){if((e53807 instanceof Error)){
var e = e53807;
return e;
} else {
throw e53807;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",37,"(taoensso.truss.impl/some? (fn [arg-idxs-count splits-count] (= arg-idxs-count (- splits-count 1))))",z,e,null);
}
})();
return taoensso.encore.vinterleave_all.call(null,splits__$1,arg_idxs);
}
}
});
/**
 * Returns a (fn [args-vector]) which replaces simple Clojure-style (%n) args
 *   in string with `(str (?argval-fn <corresponding-vector-arg>))`.
 *   Optimized for fn runtime, not fn creation.
 */
taoensso.tempura.impl.str__GT_vargs_fn = (function taoensso$tempura$impl$str__GT_vargs_fn(var_args){
var G__53809 = arguments.length;
switch (G__53809) {
case 1:
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.tempura.impl.str__GT_vargs_fn.call(null,s,null);
});

taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2 = (function (s,argval_fn){
if(typeof s === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",53,"(string? s)",s,null,null);
}

var parts = taoensso.tempura.impl.str__GT_split_args.call(null,s);
var argval_fn__$1 = (function (){var or__3949__auto__ = argval_fn;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore.undefined__GT_nil;
}
})();
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,parts),(1))){
var vec__53810 = parts;
var p1 = cljs.core.nth.call(null,vec__53810,(0),null);
if(typeof p1 === 'string'){
return ((function (vec__53810,p1,parts,argval_fn__$1){
return (function (vargs){
return p1;
});
;})(vec__53810,p1,parts,argval_fn__$1))
} else {
if(cljs.core.integer_QMARK_.call(null,p1)){
return ((function (vec__53810,p1,parts,argval_fn__$1){
return (function (vargs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(argval_fn__$1.call(null,cljs.core.get.call(null,vargs,p1)))].join('');
});
;})(vec__53810,p1,parts,argval_fn__$1))
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
return ((function (parts,argval_fn__$1){
return (function (vargs){
var sb = taoensso.encore.str_builder.call(null);
cljs.core.run_BANG_.call(null,((function (sb,parts,argval_fn__$1){
return (function (p){
if(typeof p === 'string'){
return taoensso.encore.sb_append.call(null,sb,p);
} else {
return taoensso.encore.sb_append.call(null,sb,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(argval_fn__$1.call(null,cljs.core.get.call(null,vargs,p)))].join(''));
}
});})(sb,parts,argval_fn__$1))
,parts);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
});
;})(parts,argval_fn__$1))
}
});

taoensso.tempura.impl.str__GT_vargs_fn.cljs$lang$maxFixedArity = 2;

taoensso.tempura.impl.mapv_nested = (function taoensso$tempura$impl$mapv_nested(f,v){
return cljs.core.mapv.call(null,(function taoensso$tempura$impl$mapv_nested_$_f1(in$){
if(cljs.core.vector_QMARK_.call(null,in$)){
return cljs.core.mapv.call(null,taoensso$tempura$impl$mapv_nested_$_f1,in$);
} else {
return f.call(null,in$);
}
}),v);
});
taoensso.tempura.impl.reducev_nested = (function taoensso$tempura$impl$reducev_nested(rf,v){
return cljs.core.reduce.call(null,(function taoensso$tempura$impl$reducev_nested_$_rf1(acc,in$){
if(cljs.core.vector_QMARK_.call(null,in$)){
return cljs.core.conj.call(null,acc,cljs.core.reduce.call(null,taoensso$tempura$impl$reducev_nested_$_rf1,cljs.core.PersistentVector.EMPTY,in$));
} else {
return rf.call(null,acc,in$);
}
}),cljs.core.PersistentVector.EMPTY,v);
});
taoensso.tempura.impl.node_paths = (function taoensso$tempura$impl$node_paths(var_args){
var G__53816 = arguments.length;
switch (G__53816) {
case 1:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tempura.impl.node_paths.call(null,cljs.core.associative_QMARK_,m,null);
});

taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.tempura.impl.node_paths.call(null,node_pred,m,null);
});

taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__3949__auto__ = basis;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.reduce_kv.call(null,((function (basis__$1){
return (function (acc,k,v){
if(cljs.core.not.call(null,node_pred.call(null,v))){
return cljs.core.conj.call(null,acc,cljs.core.conj.call(null,basis__$1,k,v));
} else {
var paths_from_basis = taoensso.tempura.impl.node_paths.call(null,node_pred,v,cljs.core.conj.call(null,basis__$1,k));
return cljs.core.into.call(null,acc,paths_from_basis);
}
});})(basis__$1))
,cljs.core.PersistentVector.EMPTY,m);
});

taoensso.tempura.impl.node_paths.cljs$lang$maxFixedArity = 3;

/**
 * Returns a (fn [args-vector]) which replaces simple Clojure-style (%n) arg
 *   elements with `(?argval-fn <corresponding-vector-arg>)`.
 *   Optimized for fn runtime, not fn creation.
 */
taoensso.tempura.impl.vec__GT_vargs_fn = (function taoensso$tempura$impl$vec__GT_vargs_fn(var_args){
var G__53819 = arguments.length;
switch (G__53819) {
case 1:
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1 = (function (v){
return taoensso.tempura.impl.vec__GT_vargs_fn.call(null,v,null);
});

taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2 = (function (v,argval_fn){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",146,"(vector? v)",v,null,null);
}

var node_paths = taoensso.tempura.impl.node_paths.call(null,v);
var idxs__GT_arg_idxs = cljs.core.reduce.call(null,((function (node_paths){
return (function (acc,in$){
var el = cljs.core.peek.call(null,in$);
if(!((el instanceof cljs.core.Symbol))){
return acc;
} else {
var temp__5557__auto__ = taoensso.tempura.impl.str__GT__QMARK_arg_idx.call(null,cljs.core.name.call(null,el));
if(cljs.core.truth_(temp__5557__auto__)){
var idx = temp__5557__auto__;
return cljs.core.assoc_in.call(null,acc,cljs.core.pop.call(null,in$),idx);
} else {
return acc;
}
}
});})(node_paths))
,cljs.core.PersistentArrayMap.EMPTY,node_paths);
if(cljs.core.empty_QMARK_.call(null,idxs__GT_arg_idxs)){
return ((function (node_paths,idxs__GT_arg_idxs){
return (function (vargs){
return v;
});
;})(node_paths,idxs__GT_arg_idxs))
} else {
var argval_fn__$1 = (function (){var or__3949__auto__ = argval_fn;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.identity;
}
})();
return ((function (argval_fn__$1,node_paths,idxs__GT_arg_idxs){
return (function (vargs){
return cljs.core.reduce_kv.call(null,((function (argval_fn__$1,node_paths,idxs__GT_arg_idxs){
return (function taoensso$tempura$impl$rf1(acc,k,v__$1){
if(cljs.core.map_QMARK_.call(null,v__$1)){
return cljs.core.assoc.call(null,acc,k,cljs.core.reduce_kv.call(null,taoensso$tempura$impl$rf1,cljs.core.get.call(null,acc,k),v__$1));
} else {
return cljs.core.assoc.call(null,acc,k,argval_fn__$1.call(null,cljs.core.get.call(null,vargs,v__$1)));
}
});})(argval_fn__$1,node_paths,idxs__GT_arg_idxs))
,v,idxs__GT_arg_idxs);
});
;})(argval_fn__$1,node_paths,idxs__GT_arg_idxs))
}
});

taoensso.tempura.impl.vec__GT_vargs_fn.cljs$lang$maxFixedArity = 2;

taoensso.tempura.impl.vec_explode_args_in_strs = (function taoensso$tempura$impl$vec_explode_args_in_strs(v){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",188,"(vector? v)",v,null,null);
}

return taoensso.tempura.impl.reducev_nested.call(null,(function (acc,in$){
if(!(typeof in$ === 'string')){
return cljs.core.conj.call(null,acc,in$);
} else {
var parts = taoensso.tempura.impl.str__GT_split_args.call(null,in$);
var parts__$1 = cljs.core.mapv.call(null,((function (parts){
return (function (p){
if(typeof p === 'string'){
return p;
} else {
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p + (1)))].join(''));
}
});})(parts))
,parts);
return cljs.core.into.call(null,acc,parts__$1);
}
}),v);
});
taoensso.tempura.impl.str__GT_split_styles = (function taoensso$tempura$impl$str__GT_split_styles(s){
if(typeof s === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",206,"(string? s)",s,null,null);
}

var matches_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var replace_matches = ((function (matches_){
return (function (s__$1,regex,tag){
return taoensso.encore.str_replace.call(null,s__$1,regex,((function (matches_){
return (function (p__53823){
var vec__53824 = p__53823;
var _ = cljs.core.nth.call(null,vec__53824,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53824,(1),null);
var content = cljs.core.nth.call(null,vec__53824,(2),null);
var uuid = taoensso.encore.uuid_str.call(null);
cljs.core._vreset_BANG_.call(null,matches_,cljs.core.assoc.call(null,cljs.core._deref.call(null,matches_),uuid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,content], null)));

return uuid;
});})(matches_))
);
});})(matches_))
;
var uuid_esc_STAR_ = taoensso.encore.uuid_str.call(null);
var uuid_esc_ = taoensso.encore.uuid_str.call(null);
var uuid_esc_tilde = taoensso.encore.uuid_str.call(null);
var s__$1 = taoensso.encore.str_replace.call(null,s,"`*",uuid_esc_STAR_);
var s__$2 = taoensso.encore.str_replace.call(null,s__$1,"`_",uuid_esc_);
var s__$3 = taoensso.encore.str_replace.call(null,s__$2,"`~",uuid_esc_tilde);
var s__$4 = replace_matches.call(null,s__$3,/(\*\*)([^\*\r\n]+)\1/,new cljs.core.Keyword(null,"strong","strong",269529000));
var s__$5 = replace_matches.call(null,s__$4,/(__)([^_\r\n]+)\1/,new cljs.core.Keyword(null,"b","b",1482224470));
var s__$6 = replace_matches.call(null,s__$5,/(\*)([^\*\r\n]+)\1/,new cljs.core.Keyword(null,"em","em",707813035));
var s__$7 = replace_matches.call(null,s__$6,/(_)([^_\r\n]+)\1/,new cljs.core.Keyword(null,"i","i",-1386841315));
var s__$8 = replace_matches.call(null,s__$7,/(~~)([^~\r\n]+)\1/,new cljs.core.Keyword(null,"s","s",1705939918));
var s__$9 = taoensso.encore.str_replace.call(null,s__$8,uuid_esc_STAR_,"*");
var s__$10 = taoensso.encore.str_replace.call(null,s__$9,uuid_esc_,"_");
var s__$11 = taoensso.encore.str_replace.call(null,s__$10,uuid_esc_tilde,"~");
var matches = cljs.core.deref.call(null,matches_);
if(cljs.core.empty_QMARK_.call(null,matches)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$11], null);
} else {
var ordered_match_ks = cljs.core.sort_by.call(null,((function (matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches){
return (function (p1__53821_SHARP_){
return taoensso.encore.str__QMARK_index.call(null,s__$11,p1__53821_SHARP_);
});})(matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches))
,cljs.core.keys.call(null,matches));
var ordered_match_vs = cljs.core.mapv.call(null,((function (ordered_match_ks,matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches){
return (function (p1__53822_SHARP_){
return cljs.core.get.call(null,matches,p1__53822_SHARP_);
});})(ordered_match_ks,matches_,replace_matches,uuid_esc_STAR_,uuid_esc_,uuid_esc_tilde,s__$1,s__$2,s__$3,s__$4,s__$5,s__$6,s__$7,s__$8,s__$9,s__$10,s__$11,matches))
,ordered_match_ks);
var splits = clojure.string.split.call(null,s__$11,cljs.core.re_pattern.call(null,clojure.string.join.call(null,"|",ordered_match_ks)));
return taoensso.encore.vinterleave_all.call(null,splits,ordered_match_vs);
}
});
/**
 * ["foo"] -> [:span "foo"] as a convenience.
 */
taoensso.tempura.impl.vec__GT_vtag = (function taoensso$tempura$impl$vec__GT_vtag(v){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",255,"(vector? v)",v,null,null);
}

var vec__53827 = v;
var v1 = cljs.core.nth.call(null,vec__53827,(0),null);
if(!((v1 instanceof cljs.core.Keyword))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),v);
} else {
return v;
}
});
taoensso.tempura.impl.vec_explode_styles_in_strs = (function taoensso$tempura$impl$vec_explode_styles_in_strs(var_args){
var G__53831 = arguments.length;
switch (G__53831) {
case 1:
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1 = (function (v){
return taoensso.tempura.impl.vec_explode_styles_in_strs.call(null,v,taoensso.tempura.impl.str__GT_split_styles);
});

taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2 = (function (v,str_splitter){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",269,"(vector? v)",v,null,null);
}

return taoensso.tempura.impl.reducev_nested.call(null,(function (acc,in$){
if(!(typeof in$ === 'string')){
return cljs.core.conj.call(null,acc,in$);
} else {
return cljs.core.into.call(null,acc,str_splitter.call(null,in$));
}
}),v);
});

taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$lang$maxFixedArity = 2;

taoensso.tempura.impl.escape_html = (function taoensso$tempura$impl$escape_html(s){
return taoensso.encore.str_replace.call(null,taoensso.encore.str_replace.call(null,taoensso.encore.str_replace.call(null,taoensso.encore.str_replace.call(null,s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
taoensso.tempura.impl.vec_escape_html_in_strs = (function taoensso$tempura$impl$vec_escape_html_in_strs(v){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",294,"(vector? v)",v,null,null);
}

return taoensso.tempura.impl.mapv_nested.call(null,(function (x){
if(typeof x === 'string'){
return taoensso.tempura.impl.escape_html.call(null,x);
} else {
return x;
}
}),v);
});
taoensso.tempura.impl.expand_locales = (function (){var expand_locale = taoensso.encore.memoize_.call(null,(function (locale){
var parts = clojure.string.split.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,locale)),/[_-]/);
return cljs.core.mapv.call(null,((function (parts){
return (function (p1__53833_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__53833_SHARP_));
});})(parts))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,parts)));
}));
var expand_locales_STAR_ = ((function (expand_locale){
return (function (locales){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,locales),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expand_locale.call(null,cljs.core.get.call(null,locales,(0)))], null);
} else {
var vec__53834 = cljs.core.reduce.call(null,((function (expand_locale){
return (function (p__53837,in$){
var vec__53838 = p__53837;
var acc = cljs.core.nth.call(null,vec__53838,(0),null);
var seen = cljs.core.nth.call(null,vec__53838,(1),null);
var lvars = expand_locale.call(null,in$);
var lbase = cljs.core.peek.call(null,lvars);
if(cljs.core.truth_(seen.call(null,lbase))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,acc,lvars),cljs.core.conj.call(null,seen,lbase)], null);
}
});})(expand_locale))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),locales);
var acc = cljs.core.nth.call(null,vec__53834,(0),null);
var _ = cljs.core.nth.call(null,vec__53834,(1),null);
return acc;
}
});})(expand_locale))
;
var expand_locales_STAR__cached = taoensso.encore.memoize_.call(null,expand_locales_STAR_);
return ((function (expand_locale,expand_locales_STAR_,expand_locales_STAR__cached){
return (function (cache_QMARK_,locales){
if(cljs.core.truth_(cache_QMARK_)){
return expand_locales_STAR__cached.call(null,locales);
} else {
return expand_locales_STAR_.call(null,locales);
}
});
;})(expand_locale,expand_locales_STAR_,expand_locales_STAR__cached))
})();
taoensso.tempura.impl.load_resource = (function taoensso$tempura$impl$load_resource(rname){
throw cljs.core.ex_info.call(null,"Runtime resource loading not possible for cljs dictionaries. See `tempura/load-resource-at-compile-time` as an alternative.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rname","rname",1570047601),rname], null));
});
taoensso.tempura.impl.compile_dictionary = (function (){var preprocess = (function (dict){
return cljs.core.reduce_kv.call(null,(function taoensso$tempura$impl$rf1(acc,k,v){
if((v instanceof cljs.core.Keyword)){
var path = taoensso.encore.explode_keyword.call(null,v);
return cljs.core.assoc.call(null,acc,k,cljs.core.get_in.call(null,dict,cljs.core.mapv.call(null,cljs.core.keyword,path)));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var temp__5557__auto__ = new cljs.core.Keyword(null,"__load-resource","__load-resource",-1900012152).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5557__auto__)){
var io_res = temp__5557__auto__;
return cljs.core.assoc.call(null,acc,k,taoensso.tempura.impl.load_resource.call(null,io_res));
} else {
return cljs.core.assoc.call(null,acc,k,cljs.core.reduce_kv.call(null,taoensso$tempura$impl$rf1,cljs.core.PersistentArrayMap.EMPTY,v));
}
} else {
return cljs.core.assoc.call(null,acc,k,v);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,dict);
});
var as_paths = taoensso.encore.memoize_.call(null,((function (preprocess){
return (function (dict){
return cljs.core.reduce.call(null,((function (preprocess){
return (function (acc,in$){
var vec__53841 = in$;
var locale = cljs.core.nth.call(null,vec__53841,(0),null);
var normed_locale = clojure.string.lower_case.call(null,cljs.core.name.call(null,locale));
var in$__$1 = cljs.core.assoc.call(null,in$,(0),normed_locale);
return cljs.core.assoc.call(null,acc,taoensso.encore.merge_keywords.call(null,cljs.core.pop.call(null,in$__$1)),cljs.core.peek.call(null,in$__$1));
});})(preprocess))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.tempura.impl.node_paths.call(null,cljs.core.map_QMARK_,dict));
});})(preprocess))
);
var compile_dictionary_STAR_ = taoensso.encore.memoize_STAR_.call(null,(1000),((function (preprocess,as_paths){
return (function (dict){
return as_paths.call(null,preprocess.call(null,preprocess.call(null,dict)));
});})(preprocess,as_paths))
);
var compile_dictionary_STAR__cached = taoensso.encore.memoize_.call(null,compile_dictionary_STAR_);
return ((function (preprocess,as_paths,compile_dictionary_STAR_,compile_dictionary_STAR__cached){
return (function (cache_QMARK_,dict){
if(cljs.core.truth_(cache_QMARK_)){
return compile_dictionary_STAR__cached.call(null,dict);
} else {
return compile_dictionary_STAR_.call(null,dict);
}
});
;})(preprocess,as_paths,compile_dictionary_STAR_,compile_dictionary_STAR__cached))
})();
taoensso.tempura.impl.vargs = (function taoensso$tempura$impl$vargs(x){
if(cljs.core.map_QMARK_.call(null,x)){
var max_idx = cljs.core.reduce.call(null,(function (p1__53844_SHARP_,p2__53845_SHARP_){
var n1__24776__auto__ = p1__53844_SHARP_;
var n2__24777__auto__ = p2__53845_SHARP_;
if((n1__24776__auto__ < n2__24777__auto__)){
return n2__24777__auto__;
} else {
return n1__24776__auto__;
}
}),(0),cljs.core.keys.call(null,x));
if((cljs.core.get.call(null,x,(0)) == null)){
} else {
throw (new Error(["Assert failed: ","All arg map keys must be +ive non-zero ints","\n","(nil? (get x 0))"].join('')));
}

return cljs.core.mapv.call(null,((function (max_idx){
return (function (idx){
return cljs.core.get.call(null,x,idx);
});})(max_idx))
,cljs.core.range.call(null,(1),(max_idx + (1))));
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura.impl",436,"(vector? x)",x,null,null);
}
}
});

//# sourceMappingURL=impl.js.map?rel=1537946282875
