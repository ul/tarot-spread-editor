// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(91),(1)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__52557 = arguments.length;
switch (G__52557) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__52558 = ((((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__52558,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__52558,(1),null);
var vec__52561 = ((((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__52561,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__52561,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__52566 = arguments.length;
switch (G__52566) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__52569 = arguments.length;
switch (G__52569) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_52570 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_52571 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_52571;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_52570;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__24315__auto__ = (function (){var or__3949__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__24315__auto__)){
var data_map = b2__24315__auto__;
return cljs.core.conj.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__3938__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__3938__auto____$1)){
return true;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__3938__auto__ = (x instanceof cljs.core.Symbol);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__3938__auto____$1)){
return true;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__3938__auto__ = (x instanceof cljs.core.Keyword);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__3938__auto____$1)){
return true;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,""))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return ((typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10))))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return ((typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && (!((x < (0)))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0)))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0))));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0))));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0)))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0))));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0))));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0)))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__3938__auto__ = typeof x === 'number';
if(and__3938__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__3938__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__24315__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var ns = b2__24315__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__24315__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var n = b2__24315__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__24315__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var n = b2__24315__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__24315__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var n = b2__24315__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__24315__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var n = b2__24315__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__24315__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var n = b2__24315__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__24315__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__24315__auto__)){
var f = b2__24315__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")))){
return false;
} else {
if(((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__24315__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__24315__auto__)){
var email = b2__24315__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e52577){if((e52577 instanceof Error)){
var _ = e52577;
return false;
} else {
throw e52577;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__52579 = arguments.length;
switch (G__52579) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x)),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__3949__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__52582 = arguments.length;
switch (G__52582) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__52586){
var vec__52587 = p__52586;
var k = cljs.core.nth.call(null,vec__52587,(0),null);
var v = cljs.core.nth.call(null,vec__52587,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
var inc_52590 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_52590){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,inc_52590){
return (function (acc,in$){
return rf.call(null,acc,cljs.core._vreset_BANG_.call(null,i,inc_52590.call(null,cljs.core._deref.call(null,i))),in$);
});})(i,inc_52590))
,init,coll);
});})(inc_52590))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__52592_SHARP_,p2__52591_SHARP_){
return proc.call(null,p2__52591_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__52595_SHARP_,p2__52593_SHARP_,p3__52594_SHARP_){
return proc.call(null,p2__52593_SHARP_,p3__52594_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__52598_SHARP_,p2__52596_SHARP_,p3__52597_SHARP_){
return proc.call(null,p2__52596_SHARP_,p3__52597_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__52601_SHARP_,p2__52599_SHARP_,p3__52600_SHARP_){
return proc.call(null,p2__52599_SHARP_,p3__52600_SHARP_);
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var b2__24315__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__24315__auto__)){
var p = b2__24315__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var b2__24315__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__24315__auto__)){
var p = b2__24315__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
var inc_52603 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_52603){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (idx_,inc_52603){
return (function (){
return cljs.core._vreset_BANG_.call(null,idx_,inc_52603.call(null,cljs.core._deref.call(null,idx_)));
});
;})(idx_,inc_52603))
});})(inc_52603))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__52605 = arguments.length;
switch (G__52605) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__52608 = arguments.length;
switch (G__52608) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__52609 = type;
var G__52609__$1 = (((G__52609 instanceof cljs.core.Keyword))?G__52609.fqn:null);
switch (G__52609__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__52613 = arguments.length;
switch (G__52613) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__52614){
var map__52615 = p__52614;
var map__52615__$1 = ((((!((map__52615 == null)))?(((((map__52615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52615):map__52615);
var min = cljs.core.get.call(null,map__52615__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__52615__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__52615__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = (((typeof window !== 'undefined'))?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__52623 = arguments.length;
switch (G__52623) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52625 = arguments.length;
var i__4532__auto___52626 = (0);
while(true){
if((i__4532__auto___52626 < len__4531__auto___52625)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52626]));

var G__52627 = (i__4532__auto___52626 + (1));
i__4532__auto___52626 = G__52627;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y)));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__3938__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__3938__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__3938__auto____$1,and__3938__auto__){
return (function (p1__52618_SHARP_){
return cljs.core._EQ_.call(null,p1__52618_SHARP_,x);
});})(and__3938__auto____$1,and__3938__auto__))
,more);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

/** @this {Function} */
taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq52620){
var G__52621 = cljs.core.first.call(null,seq52620);
var seq52620__$1 = cljs.core.next.call(null,seq52620);
var G__52622 = cljs.core.first.call(null,seq52620__$1);
var seq52620__$2 = cljs.core.next.call(null,seq52620__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52621,G__52622,seq52620__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__52633 = arguments.length;
switch (G__52633) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52635 = arguments.length;
var i__4532__auto___52636 = (0);
while(true){
if((i__4532__auto___52636 < len__4531__auto___52635)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52636]));

var G__52637 = (i__4532__auto___52636 + (1));
i__4532__auto___52636 = G__52637;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

/** @this {Function} */
taoensso.encore.nnil.cljs$lang$applyTo = (function (seq52629){
var G__52630 = cljs.core.first.call(null,seq52629);
var seq52629__$1 = cljs.core.next.call(null,seq52629);
var G__52631 = cljs.core.first.call(null,seq52629__$1);
var seq52629__$2 = cljs.core.next.call(null,seq52629__$1);
var G__52632 = cljs.core.first.call(null,seq52629__$2);
var seq52629__$3 = cljs.core.next.call(null,seq52629__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52630,G__52631,G__52632,seq52629__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__52638 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__52638,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__52638,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__24315__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__24315__auto__)){
var s = b2__24315__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__24315__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__24315__auto__)){
var s = b2__24315__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__52642 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__52642,(0),null);
var yc = cljs.core.nth.call(null,vec__52642,(1),null);
var zc = cljs.core.nth.call(null,vec__52642,(2),null);
var vec__52645 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__52645,(0),null);
var ym = cljs.core.nth.call(null,vec__52645,(1),null);
var zm = cljs.core.nth.call(null,vec__52645,(2),null);
var vec__52648 = cljs.core.mapv.call(null,((function (vec__52642,xc,yc,zc,vec__52645,xm,ym,zm){
return (function (p1__52641_SHARP_){
var or__3949__auto__ = p1__52641_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
});})(vec__52642,xc,yc,zc,vec__52645,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__52648,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__52648,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__52648,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.call(null,xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__52652 = arguments.length;
switch (G__52652) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52655 = arguments.length;
var i__4532__auto___52656 = (0);
while(true){
if((i__4532__auto___52656 < len__4531__auto___52655)){
args__4534__auto__.push((arguments[i__4532__auto___52656]));

var G__52657 = (i__4532__auto___52656 + (1));
i__4532__auto___52656 = G__52657;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq52654){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52654));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__52659 = arguments.length;
switch (G__52659) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_52665 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_52665){
return (function taoensso$encore$oget_in(var_args){
var G__52664 = arguments.length;
switch (G__52664) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_52665))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_52665){
return (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
});})(sentinel_52665))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_52665){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.first.call(null,ks__$1),sentinel_52665);
if((o__$2 === sentinel_52665)){
return not_found;
} else {
var G__52667 = o__$2;
var G__52668 = cljs.core.next.call(null,ks__$1);
o__$1 = G__52667;
ks__$1 = G__52668;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_52665))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__52673 = arguments.length;
switch (G__52673) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52680 = arguments.length;
var i__4532__auto___52681 = (0);
while(true){
if((i__4532__auto___52681 < len__4531__auto___52680)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52681]));

var G__52682 = (i__4532__auto___52681 + (1));
i__4532__auto___52681 = G__52682;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
});

/** @this {Function} */
taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq52670){
var G__52671 = cljs.core.first.call(null,seq52670);
var seq52670__$1 = cljs.core.next.call(null,seq52670);
var G__52672 = cljs.core.first.call(null,seq52670__$1);
var seq52670__$2 = cljs.core.next.call(null,seq52670__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52671,G__52672,seq52670__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__52678 = arguments.length;
switch (G__52678) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52684 = arguments.length;
var i__4532__auto___52685 = (0);
while(true){
if((i__4532__auto___52685 < len__4531__auto___52684)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52685]));

var G__52686 = (i__4532__auto___52685 + (1));
i__4532__auto___52685 = G__52686;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
});

/** @this {Function} */
taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq52675){
var G__52676 = cljs.core.first.call(null,seq52675);
var seq52675__$1 = cljs.core.next.call(null,seq52675);
var G__52677 = cljs.core.first.call(null,seq52675__$1);
var seq52675__$2 = cljs.core.next.call(null,seq52675__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52676,G__52677,seq52675__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__52692 = arguments.length;
switch (G__52692) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52706 = arguments.length;
var i__4532__auto___52707 = (0);
while(true){
if((i__4532__auto___52707 < len__4531__auto___52706)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52707]));

var G__52708 = (i__4532__auto___52707 + (1));
i__4532__auto___52707 = G__52708;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

/** @this {Function} */
taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq52688){
var G__52689 = cljs.core.first.call(null,seq52688);
var seq52688__$1 = cljs.core.next.call(null,seq52688);
var G__52690 = cljs.core.first.call(null,seq52688__$1);
var seq52688__$2 = cljs.core.next.call(null,seq52688__$1);
var G__52691 = cljs.core.first.call(null,seq52688__$2);
var seq52688__$3 = cljs.core.next.call(null,seq52688__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52689,G__52690,G__52691,seq52688__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__52698 = arguments.length;
switch (G__52698) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52710 = arguments.length;
var i__4532__auto___52711 = (0);
while(true){
if((i__4532__auto___52711 < len__4531__auto___52710)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52711]));

var G__52712 = (i__4532__auto___52711 + (1));
i__4532__auto___52711 = G__52712;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

/** @this {Function} */
taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq52694){
var G__52695 = cljs.core.first.call(null,seq52694);
var seq52694__$1 = cljs.core.next.call(null,seq52694);
var G__52696 = cljs.core.first.call(null,seq52694__$1);
var seq52694__$2 = cljs.core.next.call(null,seq52694__$1);
var G__52697 = cljs.core.first.call(null,seq52694__$2);
var seq52694__$3 = cljs.core.next.call(null,seq52694__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52695,G__52696,G__52697,seq52694__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__52704 = arguments.length;
switch (G__52704) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52714 = arguments.length;
var i__4532__auto___52715 = (0);
while(true){
if((i__4532__auto___52715 < len__4531__auto___52714)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52715]));

var G__52716 = (i__4532__auto___52715 + (1));
i__4532__auto___52715 = G__52716;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.call(null,m,k,v),kvs);
});

/** @this {Function} */
taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq52700){
var G__52701 = cljs.core.first.call(null,seq52700);
var seq52700__$1 = cljs.core.next.call(null,seq52700);
var G__52702 = cljs.core.first.call(null,seq52700__$1);
var seq52700__$2 = cljs.core.next.call(null,seq52700__$1);
var G__52703 = cljs.core.first.call(null,seq52700__$2);
var seq52700__$3 = cljs.core.next.call(null,seq52700__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52701,G__52702,G__52703,seq52700__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__52718 = arguments.length;
switch (G__52718) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__52721 = arguments.length;
switch (G__52721) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__52723 = v;
var v1 = cljs.core.nth.call(null,vec__52723,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__52726 = xs__$1;
var seq__52727 = cljs.core.seq.call(null,vec__52726);
var first__52728 = cljs.core.first.call(null,seq__52727);
var seq__52727__$1 = cljs.core.next.call(null,seq__52727);
var x1 = first__52728;
var xn = seq__52727__$1;
if(xn){
var G__52729 = cljs.core.conj.call(null,butlast,x1);
var G__52730 = xn;
butlast = G__52729;
xs__$1 = G__52730;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52733 = arguments.length;
var i__4532__auto___52734 = (0);
while(true){
if((i__4532__auto___52734 < len__4531__auto___52733)){
args__4534__auto__.push((arguments[i__4532__auto___52734]));

var G__52735 = (i__4532__auto___52734 + (1));
i__4532__auto___52734 = G__52735;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs.call(null,lx));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.mapply.cljs$lang$applyTo = (function (seq52731){
var G__52732 = cljs.core.first.call(null,seq52731);
var seq52731__$1 = cljs.core.next.call(null,seq52731);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52732,seq52731__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__52740 = arguments.length;
switch (G__52740) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52742 = arguments.length;
var i__4532__auto___52743 = (0);
while(true){
if((i__4532__auto___52743 < len__4531__auto___52742)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52743]));

var G__52744 = (i__4532__auto___52743 + (1));
i__4532__auto___52743 = G__52744;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
});

/** @this {Function} */
taoensso.encore.into_all.cljs$lang$applyTo = (function (seq52737){
var G__52738 = cljs.core.first.call(null,seq52737);
var seq52737__$1 = cljs.core.next.call(null,seq52737);
var G__52739 = cljs.core.first.call(null,seq52737__$1);
var seq52737__$2 = cljs.core.next.call(null,seq52737__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52738,G__52739,seq52737__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll)))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__52746 = arguments.length;
switch (G__52746) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__52749 = arguments.length;
switch (G__52749) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__52751 = null;
var G__52751__0 = (function (){
return rf.call(null);
});
var G__52751__1 = (function (acc){
return rf.call(null,acc);
});
var G__52751__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__52751 = function(acc,input){
switch(arguments.length){
case 0:
return G__52751__0.call(this);
case 1:
return G__52751__1.call(this,acc);
case 2:
return G__52751__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52751.cljs$core$IFn$_invoke$arity$0 = G__52751__0;
G__52751.cljs$core$IFn$_invoke$arity$1 = G__52751__1;
G__52751.cljs$core$IFn$_invoke$arity$2 = G__52751__2;
return G__52751;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,x){
return cljs.core.assoc_BANG_.call(null,acc,f.call(null,x),x);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__52752_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__52752_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__52754 = arguments.length;
switch (G__52754) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__24315__auto__ = cljs.core.seq.call(null,ks);
if(b2__24315__auto__){
var ks_seq = b2__24315__auto__;
var k = cljs.core.nth.call(null,ks,(0));
var b2__24315__auto____$1 = cljs.core.next.call(null,ks_seq);
if(b2__24315__auto____$1){
var ks__$1 = b2__24315__auto____$1;
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in.call(null,cljs.core.get.call(null,m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
var v = f.call(null,cljs.core.get.call(null,m,k,not_found));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}
}
} else {
return f.call(null,m);
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__52757 = arguments.length;
switch (G__52757) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq.call(null,ks)){
return taoensso.encore.fsplit_last.call(null,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__52764 = arguments.length;
switch (G__52764) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52766 = arguments.length;
var i__4532__auto___52767 = (0);
while(true){
if((i__4532__auto___52767 < len__4531__auto___52766)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52767]));

var G__52768 = (i__4532__auto___52767 + (1));
i__4532__auto___52767 = G__52768;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

/** @this {Function} */
taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq52760){
var G__52761 = cljs.core.first.call(null,seq52760);
var seq52760__$1 = cljs.core.next.call(null,seq52760);
var G__52762 = cljs.core.first.call(null,seq52760__$1);
var seq52760__$2 = cljs.core.next.call(null,seq52760__$1);
var G__52763 = cljs.core.first.call(null,seq52760__$2);
var seq52760__$3 = cljs.core.next.call(null,seq52760__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52761,G__52762,G__52763,seq52760__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__52773 = arguments.length;
switch (G__52773) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52775 = arguments.length;
var i__4532__auto___52776 = (0);
while(true){
if((i__4532__auto___52776 < len__4531__auto___52775)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52776]));

var G__52777 = (i__4532__auto___52776 + (1));
i__4532__auto___52776 = G__52777;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if(((s1) && (s2))){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

/** @this {Function} */
taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq52770){
var G__52771 = cljs.core.first.call(null,seq52770);
var seq52770__$1 = cljs.core.next.call(null,seq52770);
var G__52772 = cljs.core.first.call(null,seq52770__$1);
var seq52770__$2 = cljs.core.next.call(null,seq52770__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52771,G__52772,seq52770__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if(((s1) && (s2))){
var G__52778 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__52779 = cljs.core.next.call(null,s1);
var G__52780 = cljs.core.next.call(null,s2);
v = G__52778;
s1 = G__52779;
s2 = G__52780;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
var not_found_52783 = {};
taoensso.encore._merge_with = ((function (not_found_52783){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,((function (not_found_52783){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv.call(null,((function (not_found_52783){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.call(null,acc__$1,k,not_found_52783);
if((lv === not_found_52783)){
return cljs.core.assoc.call(null,acc__$1,k,rv);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.map_QMARK_.call(null,rv)) && (cljs.core.map_QMARK_.call(null,lv)));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
}
});})(not_found_52783))
,(function (){var or__3949__auto__ = acc;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_52783))
,null,maps);
});})(not_found_52783))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52790 = arguments.length;
var i__4532__auto___52791 = (0);
while(true){
if((i__4532__auto___52791 < len__4531__auto___52790)){
args__4534__auto__.push((arguments[i__4532__auto___52791]));

var G__52792 = (i__4532__auto___52791 + (1));
i__4532__auto___52791 = G__52792;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.merge.cljs$lang$applyTo = (function (seq52784){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52784));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52793 = arguments.length;
var i__4532__auto___52794 = (0);
while(true){
if((i__4532__auto___52794 < len__4531__auto___52793)){
args__4534__auto__.push((arguments[i__4532__auto___52794]));

var G__52795 = (i__4532__auto___52794 + (1));
i__4532__auto___52794 = G__52795;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq52785){
var G__52786 = cljs.core.first.call(null,seq52785);
var seq52785__$1 = cljs.core.next.call(null,seq52785);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52786,seq52785__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52796 = arguments.length;
var i__4532__auto___52797 = (0);
while(true){
if((i__4532__auto___52797 < len__4531__auto___52796)){
args__4534__auto__.push((arguments[i__4532__auto___52797]));

var G__52798 = (i__4532__auto___52797 + (1));
i__4532__auto___52797 = G__52798;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq52787){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52787));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52799 = arguments.length;
var i__4532__auto___52800 = (0);
while(true){
if((i__4532__auto___52800 < len__4531__auto___52799)){
args__4534__auto__.push((arguments[i__4532__auto___52800]));

var G__52801 = (i__4532__auto___52800 + (1));
i__4532__auto___52800 = G__52801;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq52788){
var G__52789 = cljs.core.first.call(null,seq52788);
var seq52788__$1 = cljs.core.next.call(null,seq52788);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52789,seq52788__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/Swapped");
});

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
return return$.call(null,v0,v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__24315__auto__ = cljs.core.seq.call(null,ks);
if(b2__24315__auto__){
var ks_seq = b2__24315__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.fsplit_last.call(null,((function (m0,ks_seq,b2__24315__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,ks_seq,b2__24315__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.fsplit_last.call(null,((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__24315__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__24315__auto__))
,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__24315__auto__ = cljs.core.seq.call(null,ks);
if(b2__24315__auto__){
var ks_seq = b2__24315__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),v1);
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_52804 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_52804){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__52803 = arguments.length;
switch (G__52803) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_52804))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_52804){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_52804,atom_,k,null,f);
});})(return_52804))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_52804){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_52804,atom_,k,not_found,f);
});})(return_52804))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_52808 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_52808){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__52807 = arguments.length;
switch (G__52807) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_52808))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_52808){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_52808,atom_,k,null,val);
});})(return_52808))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_52808){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_52808,atom_,k,not_found,val);
});})(return_52808))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_52812 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_52812){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__52811 = arguments.length;
switch (G__52811) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_52812))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_52812){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_52812,atom_,k,null,f);
});})(return_52812))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_52812){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_52812,atom_,k,not_found,f);
});})(return_52812))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__52815 = arguments.length;
switch (G__52815) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__52816 = taoensso.encore.swap_val_BANG__STAR_.call(null,atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.call(null,vec__52816,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_52822 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_52822){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,not_found_52822,new_val);
if(cljs.core._EQ_.call(null,v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_52822))
;
var return_52825 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_52825){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__52824 = arguments.length;
switch (G__52824) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_52825))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_52825){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_52825,atom_,f);
});})(return_52825))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_52825){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_52825,atom_,ks,null,f);
});})(return_52825))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_52825){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_52825,atom_,ks,not_found,f);
});})(return_52825))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_52829 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_52829){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__52828 = arguments.length;
switch (G__52828) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_52829))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_52829){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_52829,atom_,val);
});})(return_52829))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_52829){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_52829,atom_,ks,null,val);
});})(return_52829))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_52829){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_52829,atom_,ks,not_found,val);
});})(return_52829))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_52833 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_52833){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__52832 = arguments.length;
switch (G__52832) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_52833))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_52833){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_52833,atom_,f);
});})(return_52833))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_52833){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_52833,atom_,ks,null,f);
});})(return_52833))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_52833){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_52833,atom_,ks,not_found,f);
});})(return_52833))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__24315__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__24315__auto__)){
var perf = b2__24315__auto__;
var b2__24315__auto____$1 = (function (){var or__3949__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__24315__auto____$1)){
var f = b2__24315__auto____$1;
return ((function (f,b2__24315__auto____$1,perf,b2__24315__auto__){
return (function (){
return ((1000000) * cljs.core.long$.call(null,f.call(perf)));
});
;})(f,b2__24315__auto____$1,perf,b2__24315__auto__))
} else {
return ((function (b2__24315__auto____$1,perf,b2__24315__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__24315__auto____$1,perf,b2__24315__auto__))
}
} else {
return ((function (b2__24315__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__24315__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__52837__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__52837 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__52838__i = 0, G__52838__a = new Array(arguments.length -  0);
while (G__52838__i < G__52838__a.length) {G__52838__a[G__52838__i] = arguments[G__52838__i + 0]; ++G__52838__i;}
  xs = new cljs.core.IndexedSeq(G__52838__a,0,null);
} 
return G__52837__delegate.call(this,xs);};
G__52837.cljs$lang$maxFixedArity = 0;
G__52837.cljs$lang$applyTo = (function (arglist__52839){
var xs = cljs.core.seq(arglist__52839);
return G__52837__delegate(xs);
});
G__52837.cljs$core$IFn$_invoke$arity$variadic = G__52837__delegate;
return G__52837;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__52840__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__3949__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__3949__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__3949__auto__,cache_))
,null))]);
}
});})(or__3949__auto__,cache_))
),args);
}
})());
};
var G__52840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52841__i = 0, G__52841__a = new Array(arguments.length -  0);
while (G__52841__i < G__52841__a.length) {G__52841__a[G__52841__i] = arguments[G__52841__i + 0]; ++G__52841__i;}
  args = new cljs.core.IndexedSeq(G__52841__a,0,null);
} 
return G__52840__delegate.call(this,args);};
G__52840.cljs$lang$maxFixedArity = 0;
G__52840.cljs$lang$applyTo = (function (arglist__52842){
var args = cljs.core.seq(arglist__52842);
return G__52840__delegate(args);
});
G__52840.cljs$core$IFn$_invoke$arity$variadic = G__52840__delegate;
return G__52840;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/SimpleCacheEntry");
});

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/TickedCacheEntry");
});

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__52844 = arguments.length;
switch (G__52844) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_52848 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52845){if((e52845 instanceof Error)){
var e = e52845;
return e;
} else {
throw e52845;

}
}})();
if((e_52848 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1737,"(pos-int? ttl-ms)",ttl_ms,e_52848,null);
}

var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__52849__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_52850 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_52850);

return true;
})()
){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_52850,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_52850,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_52850,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$.call(null,(function (){var or__3949__auto__ = m;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_52850,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__3949__auto__ = (_QMARK_e == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__52849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52851__i = 0, G__52851__a = new Array(arguments.length -  0);
while (G__52851__i < G__52851__a.length) {G__52851__a[G__52851__i] = arguments[G__52851__i + 0]; ++G__52851__i;}
  args = new cljs.core.IndexedSeq(G__52851__a,0,null);
} 
return G__52849__delegate.call(this,args);};
G__52849.cljs$lang$maxFixedArity = 0;
G__52849.cljs$lang$applyTo = (function (arglist__52852){
var args = cljs.core.seq(arglist__52852);
return G__52849__delegate(args);
});
G__52849.cljs$core$IFn$_invoke$arity$variadic = G__52849__delegate;
return G__52849;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__3949__auto__ = (x == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1788,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_52853 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52846){if((e52846 instanceof Error)){
var e = e52846;
return e;
} else {
throw e52846;

}
}})();
if((e_52853 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1789,"(pos-int? cache-size)",cache_size,e_52853,null);
}

var tick_ = cljs.core.atom.call(null,(0));
var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__3949__auto__ = ttl_ms;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__52854__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_52855 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_52855);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__3949__auto__ = m;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_52856 = cljs.core.deref.call(null,cache_);
var n_to_gc_52857 = (cljs.core.count.call(null,snapshot_52856) - cache_size__$1);
if((n_to_gc_52857 > (64))){
var ks_to_gc_52858 = taoensso.encore.top.call(null,n_to_gc_52857,((function (snapshot_52856,n_to_gc_52857,latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.call(null,snapshot_52856,k);
return (e.tick_lru + e.tick_lfu);
});})(snapshot_52856,n_to_gc_52857,latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.keys.call(null,snapshot_52856));
cljs.core.swap_BANG_.call(null,cache_,((function (ks_to_gc_52858,snapshot_52856,n_to_gc_52857,latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_52858,snapshot_52856,n_to_gc_52857,latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_52858,snapshot_52856,n_to_gc_52857,latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__3949__auto__ = m;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_52858));
});})(ks_to_gc_52858,snapshot_52856,n_to_gc_52857,latch_52855,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = cljs.core.swap_BANG_.call(null,tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__3949__auto__ = (_QMARK_e == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__52854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52859__i = 0, G__52859__a = new Array(arguments.length -  0);
while (G__52859__i < G__52859__a.length) {G__52859__a[G__52859__i] = arguments[G__52859__i + 0]; ++G__52859__i;}
  args = new cljs.core.IndexedSeq(G__52859__a,0,null);
} 
return G__52854__delegate.call(this,args);};
G__52854.cljs$lang$maxFixedArity = 0;
G__52854.cljs$lang$applyTo = (function (arglist__52860){
var args = cljs.core.seq(arglist__52860);
return G__52854__delegate(args);
});
G__52854.cljs$core$IFn$_invoke$arity$variadic = G__52854__delegate;
return G__52854;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/LimitSpec");
});

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/LimitEntry");
});

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/LimitHits");
});

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_52871 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52861){if((e52861 instanceof Error)){
var e = e52861;
return e;
} else {
throw e52861;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1889,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52862){if((e52862 instanceof Error)){
var e = e52862;
return e;
} else {
throw e52862;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1889,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_52871){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,((function (limit_spec_52871){
return (function (acc,sid,p__52863){
var vec__52864 = p__52863;
var n = cljs.core.nth.call(null,vec__52864,(0),null);
var ms = cljs.core.nth.call(null,vec__52864,(1),null);
return cljs.core.assoc.call(null,acc,sid,limit_spec_52871.call(null,n,ms));
});})(limit_spec_52871))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,limit_spec_52871){
return (function (acc,p__52867){
var vec__52868 = p__52867;
var n = cljs.core.nth.call(null,vec__52868,(0),null);
var ms = cljs.core.nth.call(null,vec__52868,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__52868,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__3949__auto__ = _QMARK_id;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._vreset_BANG_.call(null,i,((function (or__3949__auto__,vec__52868,n,ms,_QMARK_id,i,limit_spec_52871){
return (function (i__$1){
return (i__$1 + (1));
});})(or__3949__auto__,vec__52868,n,ms,_QMARK_id,i,limit_spec_52871))
.call(null,cljs.core._deref.call(null,i)));
}
})(),limit_spec_52871.call(null,n,ms));
});})(i,limit_spec_52871))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_52871))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = cljs.core.atom.call(null,null);
var reqs_ = cljs.core.atom.call(null,null);
var specs__$1 = taoensso.encore.coerce_limit_specs.call(null,specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if(((cljs.core.not.call(null,peek_QMARK_)) && ((Math.random() <= 6.25E-5)))){
var latch_52872 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_52872);

return true;
})()
){
cljs.core.swap_BANG_.call(null,reqs_,((function (latch_52872,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_52872,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,((function (latch_52872,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__24315__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__24315__auto__)){
var s = b2__24315__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,sid);
}
});})(latch_52872,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
});})(latch_52872,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$.call(null,(function (){var or__3949__auto__ = reqs;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_52872,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref.call(null,reqs_);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__24315__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__24315__auto__)){
var s = b2__24315__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__3949__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__24315__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__24315__auto__)){
var h = b2__24315__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__24315__auto__ = cljs.core.deref.call(null,latch_);
if(cljs.core.truth_(b2__24315__auto__)){
var l = b2__24315__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__24315__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.call(null,acc,sid,(function (){var b2__24315__auto____$1 = cljs.core.get.call(null,entries,sid);
if(cljs.core.truth_(b2__24315__auto____$1)){
var e = b2__24315__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__24315__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_.call(null,reqs_,cljs.core.assoc.call(null,reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1.call(null,null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1.call(null,req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
cljs.core.swap_BANG_.call(null,reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)))){
return f1.call(null,req_id,true);
} else {
throw cljs.core.ex_info.call(null,"Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__52873 = taoensso.encore.limiter_STAR_.call(null,specs);
var _ = cljs.core.nth.call(null,vec__52873,(0),null);
var f = cljs.core.nth.call(null,vec__52873,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__52880 = arguments.length;
switch (G__52880) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___52882 = arguments.length;
var i__4532__auto___52883 = (0);
while(true){
if((i__4532__auto___52883 < len__4531__auto___52882)){
args_arr__4546__auto__.push((arguments[i__4532__auto___52883]));

var G__52884 = (i__4532__auto___52883 + (1));
i__4532__auto___52883 = G__52884;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

/** @this {Function} */
taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq52877){
var G__52878 = cljs.core.first.call(null,seq52877);
var seq52877__$1 = cljs.core.next.call(null,seq52877);
var G__52879 = cljs.core.first.call(null,seq52877__$1);
var seq52877__$2 = cljs.core.next.call(null,seq52877__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52878,G__52879,seq52877__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__52886 = arguments.length;
switch (G__52886) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__3938__auto__ = separator;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__3938__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__52889 = arguments.length;
switch (G__52889) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__52892 = arguments.length;
switch (G__52892) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__52895 = arguments.length;
switch (G__52895) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__52897__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__52897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52898__i = 0, G__52898__a = new Array(arguments.length -  0);
while (G__52898__i < G__52898__a.length) {G__52898__a[G__52898__i] = arguments[G__52898__i + 0]; ++G__52898__i;}
  args = new cljs.core.IndexedSeq(G__52898__a,0,null);
} 
return G__52897__delegate.call(this,args);};
G__52897.cljs$lang$maxFixedArity = 0;
G__52897.cljs$lang$applyTo = (function (arglist__52899){
var args = cljs.core.seq(arglist__52899);
return G__52897__delegate(args);
});
G__52897.cljs$core$IFn$_invoke$arity$variadic = G__52897__delegate;
return G__52897;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__3949__auto__ = fmt;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52902 = arguments.length;
var i__4532__auto___52903 = (0);
while(true){
if((i__4532__auto___52903 < len__4531__auto___52902)){
args__4534__auto__.push((arguments[i__4532__auto___52903]));

var G__52904 = (i__4532__auto___52903 + (1));
i__4532__auto___52903 = G__52904;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.format.cljs$lang$applyTo = (function (seq52900){
var G__52901 = cljs.core.first.call(null,seq52900);
var seq52900__$1 = cljs.core.next.call(null,seq52900);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52901,seq52900__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52906 = arguments.length;
var i__4532__auto___52907 = (0);
while(true){
if((i__4532__auto___52907 < len__4531__auto___52906)){
args__4534__auto__.push((arguments[i__4532__auto___52907]));

var G__52908 = (i__4532__auto___52907 + (1));
i__4532__auto___52907 = G__52908;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.path.cljs$lang$applyTo = (function (seq52905){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52905));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__52910 = arguments.length;
switch (G__52910) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52913 = arguments.length;
var i__4532__auto___52914 = (0);
while(true){
if((i__4532__auto___52914 < len__4531__auto___52913)){
args__4534__auto__.push((arguments[i__4532__auto___52914]));

var G__52915 = (i__4532__auto___52914 + (1));
i__4532__auto___52914 = G__52915;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.call(null),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.into_str.cljs$lang$applyTo = (function (seq52912){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52912));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
var sentinel_52920 = {};
var nil__GT_sentinel_52921 = ((function (sentinel_52920){
return (function (x){
if((x == null)){
return sentinel_52920;
} else {
return x;
}
});})(sentinel_52920))
;
var sentinel__GT_nil_52922 = ((function (sentinel_52920,nil__GT_sentinel_52921){
return (function (x){
if((x === sentinel_52920)){
return null;
} else {
return x;
}
});})(sentinel_52920,nil__GT_sentinel_52921))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922){
return (function taoensso$encore$reduce_top(var_args){
var G__52919 = arguments.length;
switch (G__52919) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__4040__auto__ = coll_size;
var y__4041__auto__ = cljs.core.long$.call(null,n);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.call(null,cljs.core.take.call(null,n__$1),cljs.core.completing.call(null,rf),init,cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_52920,nil__GT_sentinel_52921,sentinel__GT_nil_52922))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__52925 = arguments.length;
switch (G__52925) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_.call(null,to)){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$.call(null,to),coll));
} else {
return taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__52928 = arguments.length;
switch (G__52928) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52946 = arguments.length;
var i__4532__auto___52947 = (0);
while(true){
if((i__4532__auto___52947 < len__4531__auto___52946)){
args__4534__auto__.push((arguments[i__4532__auto___52947]));

var G__52948 = (i__4532__auto___52947 + (1));
i__4532__auto___52947 = G__52948;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__52943){
var map__52944 = p__52943;
var map__52944__$1 = ((((!((map__52944 == null)))?(((((map__52944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52944):map__52944);
var opts = map__52944__$1;
var ms = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.call(null,map__52944__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
taoensso.truss.impl.revery_QMARK_.call(null,((function (map__52944,map__52944__$1,opts,ms,weeks,msecs,months,secs,mins,days,hours,years){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2392,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__52944,map__52944__$1,opts,ms,weeks,msecs,months,secs,mins,days,hours,years))
,cljs.core.keys.call(null,opts));

return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.ms.cljs$lang$applyTo = (function (seq52942){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52942));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__52959__delegate = function (xs){
var b2__24315__auto__ = console.log;
if(cljs.core.truth_(b2__24315__auto__)){
var f = b2__24315__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__52959 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__52960__i = 0, G__52960__a = new Array(arguments.length -  0);
while (G__52960__i < G__52960__a.length) {G__52960__a[G__52960__i] = arguments[G__52960__i + 0]; ++G__52960__i;}
  xs = new cljs.core.IndexedSeq(G__52960__a,0,null);
} 
return G__52959__delegate.call(this,xs);};
G__52959.cljs$lang$maxFixedArity = 0;
G__52959.cljs$lang$applyTo = (function (arglist__52961){
var xs = cljs.core.seq(arglist__52961);
return G__52959__delegate(xs);
});
G__52959.cljs$core$IFn$_invoke$arity$variadic = G__52959__delegate;
return G__52959;
})()
:(function() { 
var G__52962__delegate = function (xs){
return null;
};
var G__52962 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__52963__i = 0, G__52963__a = new Array(arguments.length -  0);
while (G__52963__i < G__52963__a.length) {G__52963__a[G__52963__i] = arguments[G__52963__i + 0]; ++G__52963__i;}
  xs = new cljs.core.IndexedSeq(G__52963__a,0,null);
} 
return G__52962__delegate.call(this,xs);};
G__52962.cljs$lang$maxFixedArity = 0;
G__52962.cljs$lang$applyTo = (function (arglist__52964){
var xs = cljs.core.seq(arglist__52964);
return G__52962__delegate(xs);
});
G__52962.cljs$core$IFn$_invoke$arity$variadic = G__52962__delegate;
return G__52962;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52965 = arguments.length;
var i__4532__auto___52966 = (0);
while(true){
if((i__4532__auto___52966 < len__4531__auto___52965)){
args__4534__auto__.push((arguments[i__4532__auto___52966]));

var G__52967 = (i__4532__auto___52966 + (1));
i__4532__auto___52966 = G__52967;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.logp.cljs$lang$applyTo = (function (seq52953){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52953));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52968 = arguments.length;
var i__4532__auto___52969 = (0);
while(true){
if((i__4532__auto___52969 < len__4531__auto___52968)){
args__4534__auto__.push((arguments[i__4532__auto___52969]));

var G__52970 = (i__4532__auto___52969 + (1));
i__4532__auto___52969 = G__52970;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.sayp.cljs$lang$applyTo = (function (seq52954){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52954));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52971 = arguments.length;
var i__4532__auto___52972 = (0);
while(true){
if((i__4532__auto___52972 < len__4531__auto___52971)){
args__4534__auto__.push((arguments[i__4532__auto___52972]));

var G__52973 = (i__4532__auto___52972 + (1));
i__4532__auto___52972 = G__52973;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.logf.cljs$lang$applyTo = (function (seq52955){
var G__52956 = cljs.core.first.call(null,seq52955);
var seq52955__$1 = cljs.core.next.call(null,seq52955);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52956,seq52955__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___52974 = arguments.length;
var i__4532__auto___52975 = (0);
while(true){
if((i__4532__auto___52975 < len__4531__auto___52974)){
args__4534__auto__.push((arguments[i__4532__auto___52975]));

var G__52976 = (i__4532__auto___52975 + (1));
i__4532__auto___52975 = G__52976;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.sayf.cljs$lang$applyTo = (function (seq52957){
var G__52958 = cljs.core.first.call(null,seq52957);
var seq52957__$1 = cljs.core.next.call(null,seq52957);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52958,seq52957__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__24315__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__24315__auto__)){
var js_win = b2__24315__auto__;
var b2__24315__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__24315__auto____$1)){
var loc = b2__24315__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_.call(null,params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_52989 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e52977){if((e52977 instanceof Error)){
var e = e52977;
return e;
} else {
throw e52977;

}
}})();
if((e_52989 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2695,"(map? params)",params,e_52989,null);
}

if(cljs.core.truth_((function (){var and__3938__auto__ = (typeof FormData !== 'undefined');
if(and__3938__auto__){
return taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params));
} else {
return and__3938__auto__;
}
})())){
var form_data = (new FormData());
var seq__52978_52990 = cljs.core.seq.call(null,params);
var chunk__52979_52991 = null;
var count__52980_52992 = (0);
var i__52981_52993 = (0);
while(true){
if((i__52981_52993 < count__52980_52992)){
var vec__52982_52994 = cljs.core._nth.call(null,chunk__52979_52991,i__52981_52993);
var k_52995 = cljs.core.nth.call(null,vec__52982_52994,(0),null);
var v_52996 = cljs.core.nth.call(null,vec__52982_52994,(1),null);
form_data.append(cljs.core.name.call(null,k_52995),v_52996);


var G__52997 = seq__52978_52990;
var G__52998 = chunk__52979_52991;
var G__52999 = count__52980_52992;
var G__53000 = (i__52981_52993 + (1));
seq__52978_52990 = G__52997;
chunk__52979_52991 = G__52998;
count__52980_52992 = G__52999;
i__52981_52993 = G__53000;
continue;
} else {
var temp__5559__auto___53001 = cljs.core.seq.call(null,seq__52978_52990);
if(temp__5559__auto___53001){
var seq__52978_53002__$1 = temp__5559__auto___53001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52978_53002__$1)){
var c__4351__auto___53003 = cljs.core.chunk_first.call(null,seq__52978_53002__$1);
var G__53004 = cljs.core.chunk_rest.call(null,seq__52978_53002__$1);
var G__53005 = c__4351__auto___53003;
var G__53006 = cljs.core.count.call(null,c__4351__auto___53003);
var G__53007 = (0);
seq__52978_52990 = G__53004;
chunk__52979_52991 = G__53005;
count__52980_52992 = G__53006;
i__52981_52993 = G__53007;
continue;
} else {
var vec__52985_53008 = cljs.core.first.call(null,seq__52978_53002__$1);
var k_53009 = cljs.core.nth.call(null,vec__52985_53008,(0),null);
var v_53010 = cljs.core.nth.call(null,vec__52985_53008,(1),null);
form_data.append(cljs.core.name.call(null,k_53009),v_53010);


var G__53011 = cljs.core.next.call(null,seq__52978_53002__$1);
var G__53012 = null;
var G__53013 = (0);
var G__53014 = (0);
seq__52978_52990 = G__53011;
chunk__52979_52991 = G__53012;
count__52980_52992 = G__53013;
i__52981_52993 = G__53014;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.call(null,params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__3949__auto__ = (x == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.js_form_data_QMARK_).call(null,x);
}
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2707,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__52988 = method;
var G__52988__$1 = (((G__52988 instanceof cljs.core.Keyword))?G__52988.fqn:null);
switch (G__52988__$1) {
case "get":
return url_encode.call(null,uri,params);

break;
case "post":
return adaptive_encode.call(null,uri,params);

break;
case "put":
return adaptive_encode.call(null,uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52988__$1)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__53017,callback_fn){
var map__53018 = p__53017;
var map__53018__$1 = ((((!((map__53018 == null)))?(((((map__53018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53018):map__53018);
var opts = map__53018__$1;
var method = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_(((function (map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__3949__auto__ = (x == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2739,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__24315__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(b2__24315__auto__)){
var xhr = b2__24315__auto__;
try{var timeout_ms__$1 = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__53024 = method;
var G__53024__$1 = (((G__53024 instanceof cljs.core.Keyword))?G__53024.fqn:null);
switch (G__53024__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53024__$1)].join('')));

}
})();
var vec__53021 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params);
var xhr_uri = cljs.core.nth.call(null,vec__53021,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__53021,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,((function (timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__53016_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__53016_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__24315__auto____$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__24315__auto____$1)){
var pf = b2__24315__auto____$1;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf,b2__24315__auto____$1,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__3938__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__3938__auto__;
}
})())?(loaded / total):null);
return pf.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf,b2__24315__auto____$1,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);
} else {
return null;
}
})();
var G__53025_53032 = xhr;
goog.events.listenOnce(G__53025_53032,goog.net.EventType.READY,((function (G__53025_53032,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__53025_53032,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);

goog.events.listenOnce(G__53025_53032,goog.net.EventType.COMPLETE,((function (G__53025_53032,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__53026 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__53025_53032,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__53025_53032,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_.call(null,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__53030 = resp_type__$1;
var G__53030__$1 = (((G__53030 instanceof cljs.core.Keyword))?G__53030.fqn:null);
switch (G__53030__$1) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53030__$1)].join('')));

}
}catch (e53029){if((e53029 instanceof Error)){
var _e = e53029;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e53029;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__53026,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__53026,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__53026,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
});})(G__53025_53032,timeout_ms__$1,xhr_method,vec__53021,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__24315__auto__,map__53018,map__53018__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);


xhr.setTimeoutInterval((function (){var or__3949__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e53020){if((e53020 instanceof Error)){
var e = e53020;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
} else {
throw e53020;

}
}} else {
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53040 = arguments.length;
var i__4532__auto___53041 = (0);
while(true){
if((i__4532__auto___53041 < len__4531__auto___53040)){
args__4534__auto__.push((arguments[i__4532__auto___53041]));

var G__53042 = (i__4532__auto___53041 + (1));
i__4532__auto___53041 = G__53042;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__53036){
var vec__53037 = p__53036;
var encoding = cljs.core.nth.call(null,vec__53037,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq53034){
var G__53035 = cljs.core.first.call(null,seq53034);
var seq53034__$1 = cljs.core.next.call(null,seq53034);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53035,seq53034__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,(function (){var or__3949__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__4324__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__53043(s__53044){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__53044__$1 = s__53044;
while(true){
var temp__5559__auto__ = cljs.core.seq.call(null,s__53044__$1);
if(temp__5559__auto__){
var s__53044__$2 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53044__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__53044__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__53046 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__53045 = (0);
while(true){
if((i__53045 < size__4323__auto__)){
var vec__53047 = cljs.core._nth.call(null,c__4322__auto__,i__53045);
var k = cljs.core.nth.call(null,vec__53047,(0),null);
var v = cljs.core.nth.call(null,vec__53047,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__53046,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3949__auto__ = cljs.core.seq.call(null,v);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__53053 = (i__53045 + (1));
i__53045 = G__53053;
continue;
} else {
var G__53054 = (i__53045 + (1));
i__53045 = G__53054;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53046),taoensso$encore$format_query_string_$_iter__53043.call(null,cljs.core.chunk_rest.call(null,s__53044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53046),null);
}
} else {
var vec__53050 = cljs.core.first.call(null,s__53044__$2);
var k = cljs.core.nth.call(null,vec__53050,(0),null);
var v = cljs.core.nth.call(null,vec__53050,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__3949__auto__ = cljs.core.seq.call(null,v);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__53043.call(null,cljs.core.rest.call(null,s__53044__$2)));
} else {
var G__53055 = cljs.core.rest.call(null,s__53044__$2);
s__53044__$1 = G__53055;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__4324__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__24315__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__24315__auto__)){
var cur = b2__24315__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53065 = arguments.length;
var i__4532__auto___53066 = (0);
while(true){
if((i__4532__auto___53066 < len__4531__auto___53065)){
args__4534__auto__.push((arguments[i__4532__auto___53066]));

var G__53067 = (i__4532__auto___53066 + (1));
i__4532__auto___53066 = G__53067;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__53058){
var vec__53059 = p__53058;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__53059,(0),null);
var encoding = cljs.core.nth.call(null,vec__53059,(1),null);
if(((clojure.string.blank_QMARK_.call(null,s)) || (!(taoensso.encore.str_contains_QMARK_.call(null,s,"="))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,((function (s__$1,vec__53059,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__24315__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__24315__auto__)){
var vec__53062 = b2__24315__auto__;
var k = cljs.core.nth.call(null,vec__53062,(0),null);
var v = cljs.core.nth.call(null,vec__53062,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__53059,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq53056){
var G__53057 = cljs.core.first.call(null,seq53056);
var seq53056__$1 = cljs.core.next.call(null,seq53056);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53057,seq53056__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__53068 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__53068,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__53068,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__24315__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__24315__auto__)){
var qstr = b2__24315__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__53071__delegate = function (args){
throw cljs.core.ex_info.call(null,"Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__53071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53072__i = 0, G__53072__a = new Array(arguments.length -  0);
while (G__53072__i < G__53072__a.length) {G__53072__a[G__53072__i] = arguments[G__53072__i + 0]; ++G__53072__i;}
  args = new cljs.core.IndexedSeq(G__53072__a,0,null);
} 
return G__53071__delegate.call(this,args);};
G__53071.cljs$lang$maxFixedArity = 0;
G__53071.cljs$lang$applyTo = (function (arglist__53073){
var args = cljs.core.seq(arglist__53073);
return G__53071__delegate(args);
});
G__53071.cljs$core$IFn$_invoke$arity$variadic = G__53071__delegate;
return G__53071;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_.call(null,f)){
return f;
} else {
throw cljs.core.ex_info.call(null,"Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return (function (ns_str){
return cljs.core.re_find.call(null,x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_.call(null,x,"*")){
var re = cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find.call(null,re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.call(null,ns_str,x);
});
}
} else {
throw cljs.core.ex_info.call(null,"Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_.call(null,x)){
return taoensso$encore$self.call(null,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x)))){
return taoensso$encore$self.call(null,x,null);
} else {
if(cljs.core._EQ_.call(null,x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1.call(null,x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(match_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq.call(null,whitelist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,whitelist);
var vec__53076 = match_fns;
var seq__53077 = cljs.core.seq.call(null,vec__53076);
var first__53078 = cljs.core.first.call(null,seq__53077);
var seq__53077__$1 = cljs.core.next.call(null,seq__53077);
var m1 = first__53078;
var mn = seq__53077__$1;
if(mn){
return ((function (match_fns,vec__53076,seq__53077,first__53078,seq__53077__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome.call(null,((function (match_fns,vec__53076,seq__53077,first__53078,seq__53077__$1,m1,mn,compile1){
return (function (p1__53074_SHARP_){
return p1__53074_SHARP_.call(null,ns_str);
});})(match_fns,vec__53076,seq__53077,first__53078,seq__53077__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__53076,seq__53077,first__53078,seq__53077__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__53076,seq__53077,first__53078,seq__53077__$1,m1,mn,compile1){
return (function (ns_str){
return m1.call(null,ns_str);
});
;})(match_fns,vec__53076,seq__53077,first__53078,seq__53077__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq.call(null,blacklist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,blacklist);
var vec__53079 = match_fns;
var seq__53080 = cljs.core.seq.call(null,vec__53079);
var first__53081 = cljs.core.first.call(null,seq__53080);
var seq__53080__$1 = cljs.core.next.call(null,seq__53080);
var m1 = first__53081;
var mn = seq__53080__$1;
if(mn){
return ((function (match_fns,vec__53079,seq__53080,first__53081,seq__53080__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,taoensso.encore.rsome.call(null,((function (match_fns,vec__53079,seq__53080,first__53081,seq__53080__$1,m1,mn,white,compile1){
return (function (p1__53075_SHARP_){
return p1__53075_SHARP_.call(null,ns_str);
});})(match_fns,vec__53079,seq__53080,first__53081,seq__53080__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__53079,seq__53080,first__53081,seq__53080__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__53079,seq__53080,first__53081,seq__53080__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,m1.call(null,ns_str));
});
;})(match_fns,vec__53079,seq__53080,first__53081,seq__53080__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__3938__auto__ = white;
if(cljs.core.truth_(and__3938__auto__)){
return black;
} else {
return and__3938__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_(white.call(null,ns_str))){
if(cljs.core.truth_(black.call(null,ns_str))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(white.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(black.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,msecs,f);
} else {
var m__4244__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref.call(null,result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if(((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result.call(null,cljs.core.deref.call(null,self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"taoensso.encore/TimeoutFuture");
});

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__53087 = arguments.length;
switch (G__53087) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.call(null,taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return f.call(null);
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_53089 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout.call(null,impl_53089,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53198 = arguments.length;
var i__4532__auto___53199 = (0);
while(true){
if((i__4532__auto___53199 < len__4531__auto___53198)){
args__4534__auto__.push((arguments[i__4532__auto___53199]));

var G__53200 = (i__4532__auto___53199 + (1));
i__4532__auto___53199 = G__53200;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__53096){
var vec__53097 = p__53096;
var type = cljs.core.nth.call(null,vec__53097,(0),null);
var nplaces = cljs.core.nth.call(null,vec__53097,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.round.cljs$lang$applyTo = (function (seq53094){
var G__53095 = cljs.core.first.call(null,seq53094);
var seq53094__$1 = cljs.core.next.call(null,seq53094);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53095,seq53094__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__53101 = arguments.length;
switch (G__53101) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53202 = arguments.length;
var i__4532__auto___53203 = (0);
while(true){
if((i__4532__auto___53203 < len__4531__auto___53202)){
args__4534__auto__.push((arguments[i__4532__auto___53203]));

var G__53204 = (i__4532__auto___53203 + (1));
i__4532__auto___53203 = G__53204;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.join_once.cljs$lang$applyTo = (function (seq53102){
var G__53103 = cljs.core.first.call(null,seq53102);
var seq53102__$1 = cljs.core.next.call(null,seq53102);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53103,seq53102__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.call(null,(function (p__53104){
var vec__53105 = p__53104;
var _ = cljs.core.nth.call(null,vec__53105,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53105,(1),null);
var id = cljs.core.nth.call(null,vec__53105,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.call(null,specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__53205__delegate = function (args){
var b2__24315__auto__ = cljs.core.apply.call(null,lfn,args);
if(cljs.core.truth_(b2__24315__auto__)){
var vec__53108 = b2__24315__auto__;
var worst_sid = cljs.core.nth.call(null,vec__53108,(0),null);
var backoff_ms = cljs.core.nth.call(null,vec__53108,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__53205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53206__i = 0, G__53206__a = new Array(arguments.length -  0);
while (G__53206__i < G__53206__a.length) {G__53206__a[G__53206__i] = arguments[G__53206__i + 0]; ++G__53206__i;}
  args = new cljs.core.IndexedSeq(G__53206__a,0,null);
} 
return G__53205__delegate.call(this,args);};
G__53205.cljs$lang$maxFixedArity = 0;
G__53205.cljs$lang$applyTo = (function (arglist__53207){
var args = cljs.core.seq(arglist__53207);
return G__53205__delegate(args);
});
G__53205.cljs$core$IFn$_invoke$arity$variadic = G__53205__delegate;
return G__53205;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__53208__delegate = function (args){
var b2__24315__auto__ = rl.call(null);
if(cljs.core.truth_(b2__24315__auto__)){
var backoff = b2__24315__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__53208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53209__i = 0, G__53209__a = new Array(arguments.length -  0);
while (G__53209__i < G__53209__a.length) {G__53209__a[G__53209__i] = arguments[G__53209__i + 0]; ++G__53209__i;}
  args = new cljs.core.IndexedSeq(G__53209__a,0,null);
} 
return G__53208__delegate.call(this,args);};
G__53208.cljs$lang$maxFixedArity = 0;
G__53208.cljs$lang$applyTo = (function (arglist__53210){
var args = cljs.core.seq(arglist__53210);
return G__53208__delegate(args);
});
G__53208.cljs$core$IFn$_invoke$arity$variadic = G__53208__delegate;
return G__53208;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__53211__delegate = function (args){
var b2__24315__auto__ = rl.call(null);
if(cljs.core.truth_(b2__24315__auto__)){
var backoff_ms = b2__24315__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__53211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53212__i = 0, G__53212__a = new Array(arguments.length -  0);
while (G__53212__i < G__53212__a.length) {G__53212__a[G__53212__i] = arguments[G__53212__i + 0]; ++G__53212__i;}
  args = new cljs.core.IndexedSeq(G__53212__a,0,null);
} 
return G__53211__delegate.call(this,args);};
G__53211.cljs$lang$maxFixedArity = 0;
G__53211.cljs$lang$applyTo = (function (arglist__53213){
var args = cljs.core.seq(arglist__53213);
return G__53211__delegate(args);
});
G__53211.cljs$core$IFn$_invoke$arity$variadic = G__53211__delegate;
return G__53211;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53214 = arguments.length;
var i__4532__auto___53215 = (0);
while(true){
if((i__4532__auto___53215 < len__4531__auto___53214)){
args__4534__auto__.push((arguments[i__4532__auto___53215]));

var G__53216 = (i__4532__auto___53215 + (1));
i__4532__auto___53215 = G__53216;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__53113){
var vec__53114 = p__53113;
var nattempt = cljs.core.nth.call(null,vec__53114,(0),null);
var b2__24315__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__24315__auto__)){
var js_win = b2__24315__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3949__auto__ = nattempt;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq53111){
var G__53112 = cljs.core.first.call(null,seq53111);
var seq53111__$1 = cljs.core.next.call(null,seq53111);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53112,seq53111__$1);
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53217 = arguments.length;
var i__4532__auto___53218 = (0);
while(true){
if((i__4532__auto___53218 < len__4531__auto___53217)){
args__4534__auto__.push((arguments[i__4532__auto___53218]));

var G__53219 = (i__4532__auto___53218 + (1));
i__4532__auto___53218 = G__53219;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.tracef.cljs$lang$applyTo = (function (seq53117){
var G__53118 = cljs.core.first.call(null,seq53117);
var seq53117__$1 = cljs.core.next.call(null,seq53117);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53118,seq53117__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53220 = arguments.length;
var i__4532__auto___53221 = (0);
while(true){
if((i__4532__auto___53221 < len__4531__auto___53220)){
args__4534__auto__.push((arguments[i__4532__auto___53221]));

var G__53222 = (i__4532__auto___53221 + (1));
i__4532__auto___53221 = G__53222;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.debugf.cljs$lang$applyTo = (function (seq53119){
var G__53120 = cljs.core.first.call(null,seq53119);
var seq53119__$1 = cljs.core.next.call(null,seq53119);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53120,seq53119__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53223 = arguments.length;
var i__4532__auto___53224 = (0);
while(true){
if((i__4532__auto___53224 < len__4531__auto___53223)){
args__4534__auto__.push((arguments[i__4532__auto___53224]));

var G__53225 = (i__4532__auto___53224 + (1));
i__4532__auto___53224 = G__53225;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.infof.cljs$lang$applyTo = (function (seq53121){
var G__53122 = cljs.core.first.call(null,seq53121);
var seq53121__$1 = cljs.core.next.call(null,seq53121);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53122,seq53121__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53226 = arguments.length;
var i__4532__auto___53227 = (0);
while(true){
if((i__4532__auto___53227 < len__4531__auto___53226)){
args__4534__auto__.push((arguments[i__4532__auto___53227]));

var G__53228 = (i__4532__auto___53227 + (1));
i__4532__auto___53227 = G__53228;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.warnf.cljs$lang$applyTo = (function (seq53123){
var G__53124 = cljs.core.first.call(null,seq53123);
var seq53123__$1 = cljs.core.next.call(null,seq53123);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53124,seq53123__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53229 = arguments.length;
var i__4532__auto___53230 = (0);
while(true){
if((i__4532__auto___53230 < len__4531__auto___53229)){
args__4534__auto__.push((arguments[i__4532__auto___53230]));

var G__53231 = (i__4532__auto___53230 + (1));
i__4532__auto___53230 = G__53231;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.errorf.cljs$lang$applyTo = (function (seq53125){
var G__53126 = cljs.core.first.call(null,seq53125);
var seq53125__$1 = cljs.core.next.call(null,seq53125);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53126,seq53125__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53232 = arguments.length;
var i__4532__auto___53233 = (0);
while(true){
if((i__4532__auto___53233 < len__4531__auto___53232)){
args__4534__auto__.push((arguments[i__4532__auto___53233]));

var G__53234 = (i__4532__auto___53233 + (1));
i__4532__auto___53233 = G__53234;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq53127){
var G__53128 = cljs.core.first.call(null,seq53127);
var seq53127__$1 = cljs.core.next.call(null,seq53127);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53128,seq53127__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53235 = arguments.length;
var i__4532__auto___53236 = (0);
while(true){
if((i__4532__auto___53236 < len__4531__auto___53235)){
args__4534__auto__.push((arguments[i__4532__auto___53236]));

var G__53237 = (i__4532__auto___53236 + (1));
i__4532__auto___53236 = G__53237;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.reportf.cljs$lang$applyTo = (function (seq53129){
var G__53130 = cljs.core.first.call(null,seq53129);
var seq53129__$1 = cljs.core.next.call(null,seq53129);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53130,seq53129__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53238 = arguments.length;
var i__4532__auto___53239 = (0);
while(true){
if((i__4532__auto___53239 < len__4531__auto___53238)){
args__4534__auto__.push((arguments[i__4532__auto___53239]));

var G__53240 = (i__4532__auto___53239 + (1));
i__4532__auto___53239 = G__53240;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__53133){
var vec__53134 = p__53133;
var _QMARK_comparator = cljs.core.nth.call(null,vec__53134,(0),null);
var comparator = (function (){var or__3949__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__53134,_QMARK_comparator){
return (function (p1__53090_SHARP_,p2__53091_SHARP_){
if((comparator.call(null,p1__53090_SHARP_,p2__53091_SHARP_) > (0))){
return p2__53091_SHARP_;
} else {
return p1__53090_SHARP_;
}
});})(comparator,vec__53134,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.greatest.cljs$lang$applyTo = (function (seq53131){
var G__53132 = cljs.core.first.call(null,seq53131);
var seq53131__$1 = cljs.core.next.call(null,seq53131);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53132,seq53131__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53241 = arguments.length;
var i__4532__auto___53242 = (0);
while(true){
if((i__4532__auto___53242 < len__4531__auto___53241)){
args__4534__auto__.push((arguments[i__4532__auto___53242]));

var G__53243 = (i__4532__auto___53242 + (1));
i__4532__auto___53242 = G__53243;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__53139){
var vec__53140 = p__53139;
var _QMARK_comparator = cljs.core.nth.call(null,vec__53140,(0),null);
var comparator = (function (){var or__3949__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__53140,_QMARK_comparator){
return (function (p1__53092_SHARP_,p2__53093_SHARP_){
if((comparator.call(null,p1__53092_SHARP_,p2__53093_SHARP_) < (0))){
return p2__53093_SHARP_;
} else {
return p1__53092_SHARP_;
}
});})(comparator,vec__53140,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.least.cljs$lang$applyTo = (function (seq53137){
var G__53138 = cljs.core.first.call(null,seq53137);
var seq53137__$1 = cljs.core.next.call(null,seq53137);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53138,seq53137__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__3949__auto__ = x;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__53143,seen__$1){
while(true){
var vec__53144 = p__53143;
var v = cljs.core.nth.call(null,vec__53144,(0),null);
var xs__$1 = vec__53144;
var b2__24315__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__24315__auto__){
var s = b2__24315__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__53244 = cljs.core.rest.call(null,s);
var G__53245 = seen__$1;
p__53143 = G__53244;
seen__$1 = G__53245;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__53148 = arguments.length;
switch (G__53148) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__53149,in$){
var vec__53150 = p__53149;
var v = cljs.core.nth.call(null,vec__53150,(0),null);
var seen = cljs.core.nth.call(null,vec__53150,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53247 = arguments.length;
var i__4532__auto___53248 = (0);
while(true){
if((i__4532__auto___53248 < len__4531__auto___53247)){
args__4534__auto__.push((arguments[i__4532__auto___53248]));

var G__53249 = (i__4532__auto___53248 + (1));
i__4532__auto___53248 = G__53249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__53155){
var vec__53156 = p__53155;
var kf = cljs.core.nth.call(null,vec__53156,(0),null);
var vf = cljs.core.nth.call(null,vec__53156,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__53156,kf,vf){
return (function (_,v){
return v;
});})(vec__53156,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__53156,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__53156,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__53156,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__53156,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__53156,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__53156,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.as_map.cljs$lang$applyTo = (function (seq53153){
var G__53154 = cljs.core.first.call(null,seq53153);
var seq53153__$1 = cljs.core.next.call(null,seq53153);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53154,seq53153__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53250 = arguments.length;
var i__4532__auto___53251 = (0);
while(true){
if((i__4532__auto___53251 < len__4531__auto___53250)){
args__4534__auto__.push((arguments[i__4532__auto___53251]));

var G__53252 = (i__4532__auto___53251 + (1));
i__4532__auto___53251 = G__53252;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.memoized.cljs$lang$applyTo = (function (seq53159){
var G__53160 = cljs.core.first.call(null,seq53159);
var seq53159__$1 = cljs.core.next.call(null,seq53159);
var G__53161 = cljs.core.first.call(null,seq53159__$1);
var seq53159__$2 = cljs.core.next.call(null,seq53159__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53160,G__53161,seq53159__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__4040__auto__ = signed_idx;
var y__4041__auto__ = max_idx;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
} else {
var x__4037__auto__ = (0);
var y__4038__auto__ = (signed_idx + max_idx);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53253 = arguments.length;
var i__4532__auto___53254 = (0);
while(true){
if((i__4532__auto___53254 < len__4531__auto___53253)){
args__4534__auto__.push((arguments[i__4532__auto___53254]));

var G__53255 = (i__4532__auto___53254 + (1));
i__4532__auto___53254 = G__53255;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__53165){
var map__53166 = p__53165;
var map__53166__$1 = ((((!((map__53166 == null)))?(((((map__53166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53166):map__53166);
var max_len = cljs.core.get.call(null,map__53166__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__53166__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__24774__auto__ = (start_idx_STAR_ + max_len);
var n2__24775__auto__ = xlen;
if((n1__24774__auto__ > n2__24775__auto__)){
return n2__24775__auto__;
} else {
return n1__24774__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq53162){
var G__53163 = cljs.core.first.call(null,seq53162);
var seq53162__$1 = cljs.core.next.call(null,seq53162);
var G__53164 = cljs.core.first.call(null,seq53162__$1);
var seq53162__$2 = cljs.core.next.call(null,seq53162__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53163,G__53164,seq53162__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53256 = arguments.length;
var i__4532__auto___53257 = (0);
while(true){
if((i__4532__auto___53257 < len__4531__auto___53256)){
args__4534__auto__.push((arguments[i__4532__auto___53257]));

var G__53258 = (i__4532__auto___53257 + (1));
i__4532__auto___53257 = G__53258;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__53171){
var vec__53172 = p__53171;
var _QMARK_max_len = cljs.core.nth.call(null,vec__53172,(0),null);
var vec__53175 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__53175,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__53175,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.substr.cljs$lang$applyTo = (function (seq53168){
var G__53169 = cljs.core.first.call(null,seq53168);
var seq53168__$1 = cljs.core.next.call(null,seq53168);
var G__53170 = cljs.core.first.call(null,seq53168__$1);
var seq53168__$2 = cljs.core.next.call(null,seq53168__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53169,G__53170,seq53168__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53259 = arguments.length;
var i__4532__auto___53260 = (0);
while(true){
if((i__4532__auto___53260 < len__4531__auto___53259)){
args__4534__auto__.push((arguments[i__4532__auto___53260]));

var G__53261 = (i__4532__auto___53260 + (1));
i__4532__auto___53260 = G__53261;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__53181){
var vec__53182 = p__53181;
var _QMARK_max_len = cljs.core.nth.call(null,vec__53182,(0),null);
var vec__53185 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__53185,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__53185,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq53178){
var G__53179 = cljs.core.first.call(null,seq53178);
var seq53178__$1 = cljs.core.next.call(null,seq53178);
var G__53180 = cljs.core.first.call(null,seq53178__$1);
var seq53178__$2 = cljs.core.next.call(null,seq53178__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53179,G__53180,seq53178__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__53190 = coll;
var c1 = cljs.core.nth.call(null,vec__53190,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__53262 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__53263 = cljs.core.next.call(null,ks__$1);
var G__53264 = cljs.core.next.call(null,vs__$1);
m = G__53262;
ks__$1 = G__53263;
vs__$1 = G__53264;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53265 = arguments.length;
var i__4532__auto___53266 = (0);
while(true){
if((i__4532__auto___53266 < len__4531__auto___53265)){
args__4534__auto__.push((arguments[i__4532__auto___53266]));

var G__53267 = (i__4532__auto___53266 + (1));
i__4532__auto___53266 = G__53267;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__53195 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__53195,(0),null);
var ks = cljs.core.nth.call(null,vec__53195,(1),null);
var valf = cljs.core.nth.call(null,vec__53195,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?((function (vec__53195,type,ks,valf){
return (function (_){
return valf;
});})(vec__53195,type,ks,valf))
:valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq53193){
var G__53194 = cljs.core.first.call(null,seq53193);
var seq53193__$1 = cljs.core.next.call(null,seq53193);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53194,seq53193__$1);
});


//# sourceMappingURL=encore.js.map?rel=1537946280737