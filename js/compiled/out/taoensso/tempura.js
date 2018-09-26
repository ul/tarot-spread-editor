// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('taoensso.tempura');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.tempura.impl');
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(86),(1)], null));
taoensso.tempura._STAR_tr_opts_STAR_ = null;
taoensso.tempura._STAR_tr_scope_STAR_ = null;
var ret__4565__auto___54004 = (function (){
taoensso.tempura.with_tr_opts = (function taoensso$tempura$with_tr_opts(var_args){
var args__4534__auto__ = [];
var len__4531__auto___54005 = arguments.length;
var i__4532__auto___54006 = (0);
while(true){
if((i__4532__auto___54006 < len__4531__auto___54005)){
args__4534__auto__.push((arguments[i__4532__auto___54006]));

var G__54007 = (i__4532__auto___54006 + (1));
i__4532__auto___54006 = G__54007;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return taoensso.tempura.with_tr_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

taoensso.tempura.with_tr_opts.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,opts,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tempura","*tr-opts*","taoensso.tempura/*tr-opts*",-453366021,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)))))),null,(1),null)),body)));
});

taoensso.tempura.with_tr_opts.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
taoensso.tempura.with_tr_opts.cljs$lang$applyTo = (function (seq54000){
var G__54001 = cljs.core.first.call(null,seq54000);
var seq54000__$1 = cljs.core.next.call(null,seq54000);
var G__54002 = cljs.core.first.call(null,seq54000__$1);
var seq54000__$2 = cljs.core.next.call(null,seq54000__$1);
var G__54003 = cljs.core.first.call(null,seq54000__$2);
var seq54000__$3 = cljs.core.next.call(null,seq54000__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54001,G__54002,G__54003,seq54000__$3);
});

return null;
})()
;
taoensso.tempura.with_tr_opts.cljs$lang$macro = true;

var ret__4565__auto___54012 = (function (){
/**
 * `(with-tr-scope :foo.bar (tr _ _ [:baz]))` is equivalent to
 * `(tr _ _ [:foo.bar/baz])`
 */
taoensso.tempura.with_tr_scope = (function taoensso$tempura$with_tr_scope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___54013 = arguments.length;
var i__4532__auto___54014 = (0);
while(true){
if((i__4532__auto___54014 < len__4531__auto___54013)){
args__4534__auto__.push((arguments[i__4532__auto___54014]));

var G__54015 = (i__4532__auto___54014 + (1));
i__4532__auto___54014 = G__54015;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return taoensso.tempura.with_tr_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

taoensso.tempura.with_tr_scope.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,scope,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tempura","*tr-scope*","taoensso.tempura/*tr-scope*",-1008134361,null),null,(1),null)),(new cljs.core.List(null,scope,null,(1),null)))))),null,(1),null)),body)));
});

taoensso.tempura.with_tr_scope.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
taoensso.tempura.with_tr_scope.cljs$lang$applyTo = (function (seq54008){
var G__54009 = cljs.core.first.call(null,seq54008);
var seq54008__$1 = cljs.core.next.call(null,seq54008);
var G__54010 = cljs.core.first.call(null,seq54008__$1);
var seq54008__$2 = cljs.core.next.call(null,seq54008__$1);
var G__54011 = cljs.core.first.call(null,seq54008__$2);
var seq54008__$3 = cljs.core.next.call(null,seq54008__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54009,G__54010,G__54011,seq54008__$3);
});

return null;
})()
;
taoensso.tempura.with_tr_scope.cljs$lang$macro = true;

/**
 * Good general-purpose resource compiler.
 *   Supports output of text, and Hiccup forms with simple Markdown styles.
 */
taoensso.tempura.get_default_resource_compiler = taoensso.encore.memoize_.call(null,(function (p__54016){
var map__54017 = p__54016;
var map__54017__$1 = ((((!((map__54017 == null)))?(((((map__54017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54017):map__54017);
var escape_html_QMARK_ = cljs.core.get.call(null,map__54017__$1,new cljs.core.Keyword(null,"escape-html?","escape-html?",-397605100));
var esc1 = (cljs.core.truth_(escape_html_QMARK_)?taoensso.tempura.impl.escape_html:cljs.core.identity);
var esc2 = (cljs.core.truth_(escape_html_QMARK_)?taoensso.tempura.impl.vec_escape_html_in_strs:cljs.core.identity);
return taoensso.encore.memoize_.call(null,((function (esc1,esc2,map__54017,map__54017__$1,escape_html_QMARK_){
return (function (res){
if(cljs.core.fn_QMARK_.call(null,res)){
return res;
} else {
if(typeof res === 'string'){
return taoensso.tempura.impl.str__GT_vargs_fn.call(null,esc1.call(null,res));
} else {
if(cljs.core.vector_QMARK_.call(null,res)){
return taoensso.tempura.impl.vec__GT_vargs_fn.call(null,esc2.call(null,taoensso.tempura.impl.vec_explode_args_in_strs.call(null,taoensso.tempura.impl.vec_explode_styles_in_strs.call(null,taoensso.tempura.impl.vec__GT_vtag.call(null,res)))));
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
});})(esc1,esc2,map__54017,map__54017__$1,escape_html_QMARK_))
);
}));
taoensso.tempura.default_tr_opts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"dict","dict",-1629964473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"missing","missing",362507769),"[Missing tr resource]"], null)], null),new cljs.core.Keyword(null,"scope-fn","scope-fn",-1139485860),(function (){
return taoensso.tempura._STAR_tr_scope_STAR_;
}),new cljs.core.Keyword(null,"cache-dict?","cache-dict?",2012653536),true,new cljs.core.Keyword(null,"cache-locales?","cache-locales?",-2101196885),true,new cljs.core.Keyword(null,"cache-resources?","cache-resources?",-247492358),false,new cljs.core.Keyword(null,"resource-compiler","resource-compiler",579506905),taoensso.tempura.get_default_resource_compiler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"escape-html?","escape-html?",-397605100),false], null)),new cljs.core.Keyword(null,"missing-resource-fn","missing-resource-fn",523544311),null], null);
taoensso.tempura.example_dictionary = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en-GB","en-GB",-786195262),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing","missing",362507769),":en-GB missing text",new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"greet","greet",-535473050),"Good day %1!"], null)], null),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"missing","missing",362507769),":en missing text",new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"greet","greet",-535473050),"Hello %1",new cljs.core.Keyword(null,"farewell","farewell",-2116288955),"Goodbye %1",new cljs.core.Keyword(null,"foo","foo",1268894036),"foo",new cljs.core.Keyword(null,"bar","bar",-1386246584),"bar",new cljs.core.Keyword(null,"bar-copy","bar-copy",-676753162),new cljs.core.Keyword("en.example","bar","en.example/bar",526133603),new cljs.core.Keyword(null,"baz","baz",-1134894686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is a **Hiccup** form"], null),new cljs.core.Keyword(null,"qux","qux",-326845933),(function (p__54019){
var vec__54020 = p__54019;
var arg1 = cljs.core.nth.call(null,vec__54020,(0),null);
var arg2 = cljs.core.nth.call(null,vec__54020,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg2)].join('');
})], null),new cljs.core.Keyword(null,"example-copy","example-copy",1574229778),new cljs.core.Keyword("en","example","en/example",-1755784625),new cljs.core.Keyword(null,"import-example","import-example",1886140967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__load-resource","__load-resource",-1900012152),"resources/i18n.clj"], null)], null)], null);
taoensso.tempura.merge_into_default_opts = taoensso.encore.memoize_.call(null,(function (opts,dynamic_opts){
return cljs.core.merge.call(null,taoensso.tempura.default_tr_opts,opts,dynamic_opts);
}));
taoensso.tempura.scoped = taoensso.encore.memoize_.call(null,(function (locale,_QMARK_scope,resid){
return taoensso.encore.merge_keywords.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale,_QMARK_scope,resid], null));
}));
/**
 * loc1 res1 var1 var2 ... base
 *      res2 var1 var2 ... base
 *      ...
 * loc2 res1 var1 var2 ... base
 *      res2 var1 var2 ... base
 *      ...
 */
taoensso.tempura.search_resids_STAR_ = (function taoensso$tempura$search_resids_STAR_(dict,locale_splits,_QMARK_scope,resids){
return cljs.core.reduce.call(null,(function (acc,locale_split){
return cljs.core.reduce.call(null,(function (acc__$1,resid){
return cljs.core.reduce.call(null,(function (acc__$2,lvar){
var temp__5559__auto__ = cljs.core.get.call(null,dict,taoensso.tempura.scoped.call(null,lvar,_QMARK_scope,resid));
if(cljs.core.truth_(temp__5559__auto__)){
var res = temp__5559__auto__;
return cljs.core.reduced.call(null,cljs.core.reduced.call(null,cljs.core.reduced.call(null,res)));
} else {
return null;
}
}),acc__$1,locale_split);
}),acc,resids);
}),null,locale_splits);
});
taoensso.tempura.search_resids_STAR__cached = taoensso.encore.memoize_.call(null,taoensso.tempura.search_resids_STAR_);
taoensso.tempura.search_resids = (function taoensso$tempura$search_resids(cache_QMARK_,dict,locale_splits,_QMARK_scope,resids){
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.tempura.search_resids_STAR__cached.call(null,dict,locale_splits,_QMARK_scope,resids);
} else {
return taoensso.tempura.search_resids_STAR_.call(null,dict,locale_splits,_QMARK_scope,resids);
}
});
var ret__4565__auto___54023 = /**
 * Experimental, subject to change.
 *   Reads and inlines an edn resource on classpath, at compile-time.
 *   Supported by: both clj and cljs.
 * 
 *   See also `load-resource-at-runtime`.
 */
taoensso.tempura.load_resource_at_compile_time = (function taoensso$tempura$load_resource_at_compile_time(_AMPERSAND_form,_AMPERSAND_env,rname){
return taoensso.tempura.impl.load_resource.call(null,rname);
});
taoensso.tempura.load_resource_at_compile_time.cljs$lang$macro = true;

var merge_into_default_opts_54030 = taoensso.tempura.merge_into_default_opts;
var scoped_54031 = taoensso.tempura.scoped;
var search_resids_STAR__54032 = taoensso.tempura.search_resids_STAR_;
var search_resids_STAR__cached_54033 = taoensso.tempura.search_resids_STAR__cached;
var search_resids_54034 = taoensso.tempura.search_resids;
/**
 * Next gen Taoensso (tr)anslation API:
 * 
 *  (tr
 *    ;; Opts map to control behaviour:
 *    {:default-locale :en
 *     :dict ; Resource dictionary
 *     {:en {:missing "Missing translation"
 *           :example {:greet "Hello %1"
 *                     :farewell "Goodbye %1, it was nice to meet you!"}}}}
 * 
 *    ;; Descending-preference locales to try:
 *    [:fr-FR :en-GB-variation1]
 * 
 *    ;; Descending-preference dictionary resorces to try. May contain a
 *    ;; final non-keyword fallback:
 *    [:example/how-are-you? "How are you, %1?"]
 * 
 *    ;; Optional arbitrary args for insertion into compiled resource:
 *    ["Steve"])
 * 
 *  => "How are you, Steve?"
 * 
 * 
 *  Common opts (see `tempura/default-tr-opts` for default vals):
 * 
 *    :default-locale      ; Optional fallback locale to try when given
 *                         ; locales don't have the requested resource/s.
 * 
 *    :dict                ; Dictionary map of resources,
 *                         ; {<locale> {<k1> ... {<kn> <resource>}}}.
 *                         ; See also `tempura/example-dictionary`.
 * 
 *    :resource-compiler   ; (fn [resource]) -> [(fn [vargs]) -> <compiled-resource>].
 *                         ; Useful if you want to customize any part of how
 *                         ; dictionary resources are compiled.
 * 
 *    :missing-resource-fn ; (fn [{:keys [opts locales resource-ids resource-args]}]).
 *                         ; Called when requested resource/s cannot be
 *                         ; found. Useful for logging, etc. May return a
 *                         ; non-nil fallback resource value.
 * 
 *    :cache-dict?         ; Only reason you'd want this off is if
 *                         ; you're using :__load-resource imports and
 *                         ; and want dictionary to pick up changes.
 * 
 *    :cache-locales?      ; Client will usu. be dealing with a small
 *                         ; number of locales, the server often a
 *                         ; large number in the general case. `tr`
 *                         ; partials may want to enable cached locale
 *                         ; expansion (e.g. in the context of a
 *                         ; particular user's Ring request, etc.).
 * 
 *    :cache-resources?    ; For the very highest possible performance
 *                         ; when using a limited domain of locales +
 *                         ; resource ids.
 */
taoensso.tempura.tr = ((function (merge_into_default_opts_54030,scoped_54031,search_resids_STAR__54032,search_resids_STAR__cached_54033,search_resids_54034){
return (function taoensso$tempura$tr(var_args){
var G__54025 = arguments.length;
switch (G__54025) {
case 3:
return taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(merge_into_default_opts_54030,scoped_54031,search_resids_STAR__54032,search_resids_STAR__cached_54033,search_resids_54034))
;

taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$3 = ((function (merge_into_default_opts_54030,scoped_54031,search_resids_STAR__54032,search_resids_STAR__cached_54033,search_resids_54034){
return (function (opts,locales,resource_ids){
return taoensso.tempura.tr.call(null,opts,locales,resource_ids,null);
});})(merge_into_default_opts_54030,scoped_54031,search_resids_STAR__54032,search_resids_STAR__cached_54033,search_resids_54034))
;

taoensso.tempura.tr.cljs$core$IFn$_invoke$arity$4 = ((function (merge_into_default_opts_54030,scoped_54031,search_resids_STAR__54032,search_resids_STAR__cached_54033,search_resids_54034){
return (function (opts,locales,resource_ids,resource_args){
var e_54036 = (function (){try{if(cljs.core.vector_QMARK_.call(null,resource_ids)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e54026){if((e54026 instanceof Error)){
var e = e54026;
return e;
} else {
throw e54026;

}
}})();
if((e_54036 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura",262,"(vector? resource-ids)",resource_ids,e_54036,null);
}

if(cljs.core.seq.call(null,resource_ids)){
var opts__$1 = merge_into_default_opts_54030.call(null,opts,taoensso.tempura._STAR_tr_opts_STAR_);
var map__54027 = opts__$1;
var map__54027__$1 = ((((!((map__54027 == null)))?(((((map__54027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54027):map__54027);
var default_locale = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761));
var dict = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"dict","dict",-1629964473));
var scope_fn = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"scope-fn","scope-fn",-1139485860));
var cache_dict_QMARK_ = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"cache-dict?","cache-dict?",2012653536));
var cache_locales_QMARK_ = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"cache-locales?","cache-locales?",-2101196885));
var cache_resources_QMARK_ = cljs.core.get.call(null,map__54027__$1,new cljs.core.Keyword(null,"cache-resources?","cache-resources?",-247492358));
var locales__$1 = (((locales == null))?cljs.core.PersistentVector.EMPTY:(function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,locales)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e54029){if((e54029 instanceof Error)){
var e = e54029;
return e;
} else {
throw e54029;

}
}})();
if((e == null)){
return locales;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tempura",273,"(vector? locales)",locales,e,null);
}
})());
var dict__$1 = taoensso.tempura.impl.compile_dictionary.call(null,cache_dict_QMARK_,dict);
var locale_splits = taoensso.tempura.impl.expand_locales.call(null,cache_locales_QMARK_,taoensso.encore.conj_some.call(null,locales__$1,default_locale));
var _QMARK_fb_resource = (function (){var last_res = cljs.core.peek.call(null,resource_ids);
if((last_res instanceof cljs.core.Keyword)){
return null;
} else {
return last_res;
}
})();
var resource_ids__$1 = (cljs.core.truth_(_QMARK_fb_resource)?cljs.core.pop.call(null,resource_ids):resource_ids);
var resid_scope = (function (){var temp__5563__auto__ = scope_fn;
if((temp__5563__auto__ == null)){
return null;
} else {
var f = temp__5563__auto__;
return f.call(null);
}
})();
var _QMARK_matching_resource = (function (){var or__3949__auto__ = ((cljs.core.seq.call(null,resource_ids__$1))?search_resids_54034.call(null,cache_resources_QMARK_,dict__$1,locale_splits,resid_scope,resource_ids__$1):null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = _QMARK_fb_resource;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (function (){var temp__5559__auto__ = cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"missing-resource-fn","missing-resource-fn",523544311));
if(cljs.core.truth_(temp__5559__auto__)){
var mrf = temp__5559__auto__;
return mrf.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1,new cljs.core.Keyword(null,"locales","locales",1785635955),locales__$1,new cljs.core.Keyword(null,"resource-ids","resource-ids",709857638),resource_ids__$1,new cljs.core.Keyword(null,"resource-args","resource-args",-1316782806),resource_args], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return search_resids_54034.call(null,cache_resources_QMARK_,dict__$1,locale_splits,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing","missing",362507769)], null));
}
}
}
})();
var temp__5559__auto__ = _QMARK_matching_resource;
if(cljs.core.truth_(temp__5559__auto__)){
var r = temp__5559__auto__;
var resource_compiler = cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"resource-compiler","resource-compiler",579506905));
var vargs = (function (){var temp__5561__auto__ = resource_args;
if((temp__5561__auto__ == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
var args = temp__5561__auto__;
return taoensso.tempura.impl.vargs.call(null,args);
}
})();
return resource_compiler.call(null,r).call(null,vargs);
} else {
return null;
}
} else {
return null;
}
});})(merge_into_default_opts_54030,scoped_54031,search_resids_STAR__54032,search_resids_STAR__cached_54033,search_resids_54034))
;

taoensso.tempura.tr.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=tempura.js.map?rel=1537946283521
