// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cuerdas.regexp');
goog.require('goog.string');
goog.require('cljs.reader');
cuerdas.core.keyword_STAR_ = cljs.core.keyword;
var ret__5824__auto___34855 = (function (){
/**
 * A macro variant of the clojure.core/str function that performs
 *   considerbaly faster string concatenation operation on CLJS (on
 *   JVM/CLJ it only applies basic simplification and then relies on the
 *   `clojure.core/str`).
 */
cuerdas.core.concat = (function cuerdas$core$concat(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34856 = arguments.length;
var i__5770__auto___34857 = (0);
while(true){
if((i__5770__auto___34857 < len__5769__auto___34856)){
args__5775__auto__.push((arguments[i__5770__auto___34857]));

var G__34858 = (i__5770__auto___34857 + (1));
i__5770__auto___34857 = G__34858;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return cuerdas.core.concat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(cuerdas.core.concat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,params){
var cljs_QMARK_ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env);
var xform = cljs.core.comp.call(null,cljs.core.partition_by.call(null,cljs.core.string_QMARK_),cljs.core.filter.call(null,cljs.core.some_QMARK_),cljs.core.mapcat.call(null,(function (part){
if(typeof cljs.core.first.call(null,part) === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,part)], null);
} else {
var G__34854 = part;
if(cljs.core.truth_(cljs_QMARK_)){
return cljs.core.map.call(null,(function (o){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ?? \"\")",(new cljs.core.List(null,o,null,(1),null)),(2),null)),(3),null));
}),G__34854);
} else {
return G__34854;
}
}
})));
var params__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xform,params);
if(cljs.core.truth_(cljs_QMARK_)){
var stmpl = cljs.core.apply.call(null,cljs.core.str,"\"\"",cuerdas.core.repeat.call(null,"+~{}",cljs.core.count.call(null,params__$1)));
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),cljs.core.cons.call(null,stmpl,params__$1));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),params__$1);
}
}));

(cuerdas.core.concat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cuerdas.core.concat.cljs$lang$applyTo = (function (seq34851){
var G__34852 = cljs.core.first.call(null,seq34851);
var seq34851__$1 = cljs.core.next.call(null,seq34851);
var G__34853 = cljs.core.first.call(null,seq34851__$1);
var seq34851__$2 = cljs.core.next.call(null,seq34851__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34852,G__34853,seq34851__$2);
}));

return null;
})()
;
(cuerdas.core.concat.cljs$lang$macro = true);

/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
return ((typeof s === 'string') && ((cljs.core.count.call(null,s) === (0))));
});
/**
 * Convenient helper for check emptines or if value is nil.
 */
cuerdas.core.empty_or_nil_QMARK_ = (function cuerdas$core$empty_or_nil_QMARK_(s){
return (((s == null)) || (cuerdas.core.empty_QMARK_.call(null,s)));
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.includes_QMARK_ = (function cuerdas$core$includes_QMARK_(s,subs){
return ((typeof s === 'string') && (((typeof subs === 'string') && (goog.string.contains(s,subs)))));
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var G__34860 = arguments.length;
switch (G__34860) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if(typeof s === 'string'){
return s.slice(begin);
} else {
return null;
}
}));

(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if(typeof s === 'string'){
return s.slice(begin,end);
} else {
return null;
}
}));

(cuerdas.core.slice.cljs$lang$maxFixedArity = 3);

/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
return ((typeof s === 'string') && (((((typeof prefix === 'string') || (cljs.core.char_QMARK_.call(null,prefix)))) && ((((cljs.core.count.call(null,prefix) === (0))) || (cljs.core._EQ_.call(null,s.lastIndexOf(prefix,(0)),(0))))))));
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
var and__5043__auto__ = typeof s === 'string';
if(and__5043__auto__){
var and__5043__auto____$1 = ((typeof suffix === 'string') || (cljs.core.char_QMARK_.call(null,suffix)));
if(and__5043__auto____$1){
var or__5045__auto__ = (cljs.core.count.call(null,suffix) === (0));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var l = (cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix));
return (((l >= (0))) && (cljs.core._EQ_.call(null,s.indexOf(suffix,l),l)));
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Converts string to all lower-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-lower`
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if(typeof s === 'string'){
return s.toLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-upper`
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if(typeof s === 'string'){
return s.toUpperCase();
} else {
return null;
}
});
/**
 * Checks if a string is empty or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
return ((typeof s === 'string') && ((((cljs.core.count.call(null,s) === (0))) || (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,"(?u)^[\\s\\p{Z}]+$"),s))))));
});
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = (function cuerdas$core$alpha_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[a-zA-Z]+$/,s))));
});
/**
 * Checks if a string contains only digit characters.
 */
cuerdas.core.digits_QMARK_ = (function cuerdas$core$digits_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[0-9]+$/,s))));
});
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alnum_QMARK_ = (function cuerdas$core$alnum_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[a-zA-Z0-9]+$/,s))));
});
/**
 * Checks if a string contains only the word characters.
 *   This function will use all the unicode range.
 */
cuerdas.core.word_QMARK_ = (function cuerdas$core$word_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,"(?u)^[\\p{N}\\p{L}_-]+$"),s))));
});
/**
 * Checks if string contains only letters.
 *   This function will use all the unicode range.
 */
cuerdas.core.letters_QMARK_ = (function cuerdas$core$letters_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,"(?u)^\\p{L}+$"),s))));
});
/**
 * Check if a string contains only numeric values.
 */
cuerdas.core.numeric_QMARK_ = (function cuerdas$core$numeric_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/,s))));
});
cuerdas.core.index_of = (function cuerdas$core$index_of(var_args){
var G__34863 = arguments.length;
switch (G__34863) {
case 2:
return cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,val){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.index_of.call(null,s,val);
} else {
return null;
}
}));

(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,val,from){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.index_of.call(null,s,val,from);
} else {
return null;
}
}));

(cuerdas.core.index_of.cljs$lang$maxFixedArity = 3);

cuerdas.core.last_index_of = (function cuerdas$core$last_index_of(var_args){
var G__34866 = arguments.length;
switch (G__34866) {
case 2:
return cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,val){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.last_index_of.call(null,s,val);
} else {
return null;
}
}));

(cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,val,from){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.last_index_of.call(null,s,val,from);
} else {
return null;
}
}));

(cuerdas.core.last_index_of.cljs$lang$maxFixedArity = 3);

/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var G__34869 = arguments.length;
switch (G__34869) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.call(null,s,"\n\t\f\r ");
}));

(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = ["[",cuerdas.regexp.escape.call(null,chs),"]"].join('');
var rxstr__$1 = ["^",rxstr,"+|",rxstr,"+$"].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
} else {
return null;
}
}));

(cuerdas.core.trim.cljs$lang$maxFixedArity = 2);

/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var G__34872 = arguments.length;
switch (G__34872) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.call(null,s,"\n\t\f\r ");
}));

(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = ["[",cuerdas.regexp.escape.call(null,chs),"]"].join('');
var rxstr__$1 = [rxstr,"+$"].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
} else {
return null;
}
}));

(cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2);

/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var G__34875 = arguments.length;
switch (G__34875) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.call(null,s,"\n\t\f\r ");
}));

(cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = ["[",cuerdas.regexp.escape.call(null,chs),"]"].join('');
var rxstr__$1 = ["^",rxstr,"+"].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
} else {
return null;
}
}));

(cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2);

/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),cljs.core.re_pattern.call(null,"(?u)[\\s\\p{Z}]+")," ");
});
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cuerdas.core.starts_with_QMARK_.call(null,s,prefix)){
return cuerdas.core.slice.call(null,s,cljs.core.count.call(null,prefix),cljs.core.count.call(null,s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,suffix){
if(cuerdas.core.ends_with_QMARK_.call(null,s,suffix)){
return cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix)));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var G__34878 = arguments.length;
switch (G__34878) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.call(null,s,(1));
}));

(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if(typeof s === 'string'){
return goog.string.repeat(s,n);
} else {
return null;
}
}));

(cuerdas.core.repeat.cljs$lang$maxFixedArity = 2);

cuerdas.core.replace_all = (function cuerdas$core$replace_all(s,re,replacement){
var flags = re.flags;
var flags__$1 = ((cuerdas.core.includes_QMARK_.call(null,flags,"g"))?flags:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(flags),"g"].join(''));
var rx = (new RegExp(re.source,flags__$1));
return s.replace(rx,replacement);
});
cuerdas.core.replace_STAR_ = (function cuerdas$core$replace_STAR_(s,match,replacement){
if(typeof match === 'string'){
return clojure.string.replace.call(null,s,match,replacement);
} else {
if(cuerdas.regexp.regexp_QMARK_.call(null,match)){
if(typeof replacement === 'string'){
return cuerdas.core.replace_all.call(null,s,match,replacement);
} else {
return cuerdas.core.replace_all.call(null,s,match,new cljs.core.Var(function(){return clojure.string.replace_with;},new cljs.core.Symbol("clojure.string","replace-with","clojure.string/replace-with",-1342175384,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Symbol(null,"replace-with","replace-with",1240386179,null),"resources/public/js/compiled/out/clojure/string.cljs",20,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)),null,(cljs.core.truth_(clojure.string.replace_with)?clojure.string.replace_with.cljs$lang$test:null)])).call(null,replacement));
}
} else {
return null;
}
}
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 * 
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 * 
 *   If you wish your replacement string to be used literary,
 *   use `(cuerdas.regexp/escape replacement)`.
 * 
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if(typeof s === 'string'){
return cuerdas.core.replace_STAR_.call(null,s,match,replacement);
} else {
return null;
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if(typeof s === 'string'){
return clojure.string.replace_first.call(null,s,match,replacement);
} else {
return null;
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var G__34881 = arguments.length;
switch (G__34881) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.call(null,s,num,"...");
}));

(cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count.call(null,s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));
if(((([cljs.core.str.cljs$core$IFn$_invoke$arity$1(template__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('')).length) > cljs.core.count.call(null,s))){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('');
}
}
}));

(cuerdas.core.prune.cljs$lang$maxFixedArity = 3);

/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace.call(null,s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string,
 *   character or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var G__34884 = arguments.length;
switch (G__34884) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.call(null,s,/\s+/,null);
}));

(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
if((s == null)){
return s;
} else {
if(cuerdas.regexp.regexp_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,sep);
} else {
if(typeof sep === 'string'){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep)));
} else {
if(cljs.core.char_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep.toString())));
} else {
throw cljs.core.ex_info.call(null,"Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sep","sep",1970430530),sep], null));

}
}
}
}
}));

(cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cuerdas.regexp.regexp_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,sep,num);
} else {
if(typeof sep === 'string'){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep)),num);
} else {
if(cljs.core.char_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep.toString())),num);
} else {
throw cljs.core.ex_info.call(null,"Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sep","sep",1970430530),sep], null));

}
}
}
}
}));

(cuerdas.core.split.cljs$lang$maxFixedArity = 3);

/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if(typeof s === 'string'){
return clojure.string.reverse.call(null,s);
} else {
return null;
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if(typeof s === 'string'){
return cljs.core.js__GT_clj.call(null,s.split(""));
} else {
return null;
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if(cljs.core.sequential_QMARK_.call(null,s)){
return clojure.string.join.call(null,"\n",s);
} else {
return null;
}
});
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var G__34887 = arguments.length;
switch (G__34887) {
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.call(null,s,cljs.core.re_pattern.call(null,"(?u)[\\p{N}\\p{L}_-]+"));
}));

(cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
if(typeof s === 'string'){
return cljs.core.vec.call(null,cljs.core.re_seq.call(null,re,s));
} else {
return null;
}
}));

(cuerdas.core.words.cljs$lang$maxFixedArity = 2);

cuerdas.core.interpolate_format = (function cuerdas$core$interpolate_format(s,params){
var on_match = (function cuerdas$core$interpolate_format_$_on_match(match){
var val = cljs.reader.read_string.call(null,((cljs.core._EQ_.call(null,cljs.core.subs.call(null,match,(0),(1)),"$"))?cljs.core.subs.call(null,match,(1)):cuerdas.core.slice.call(null,match,(2),(-2))));
var val__$1 = (((val instanceof cljs.core.Symbol))?cuerdas.core.keyword_STAR_.call(null,val):val);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,params,val__$1,""));
});
var $ = /(?:%\([\d\w\:\_\-]+\)s|\$[\w\d\:\_\-]+)/;
return cuerdas.core.replace.call(null,s,$,on_match);
});
cuerdas.core.indexed_format = (function cuerdas$core$indexed_format(s,params){
var params__$1 = cljs.core.clj__GT_js.call(null,(function (){var or__5045__auto__ = params;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var rx = (new RegExp("%s","g"));
return cuerdas.core.replace.call(null,s,rx,(function (_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count.call(null,params__$1) === (0)))?"%s":params__$1.shift()));
}));
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34891 = arguments.length;
var i__5770__auto___34892 = (0);
while(true){
if((i__5770__auto___34892 < len__5769__auto___34891)){
args__5775__auto__.push((arguments[i__5770__auto___34892]));

var G__34893 = (i__5770__auto___34892 + (1));
i__5770__auto___34892 = G__34893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,more){
if(typeof s === 'string'){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,more),(1))) && (cljs.core.associative_QMARK_.call(null,cljs.core.first.call(null,more))))){
return cuerdas.core.interpolate_format.call(null,s,cljs.core.first.call(null,more));
} else {
return cuerdas.core.indexed_format.call(null,s,more);
}
} else {
return null;
}
}));

(cuerdas.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cuerdas.core.format.cljs$lang$applyTo = (function (seq34889){
var G__34890 = cljs.core.first.call(null,seq34889);
var seq34889__$1 = cljs.core.next.call(null,seq34889);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34890,seq34889__$1);
}));

/**
 * A shorter alias to `format` function.
 */
cuerdas.core.fmt = cuerdas.core.format;
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var G__34895 = arguments.length;
switch (G__34895) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
}));

(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
}));

(cuerdas.core.join.cljs$lang$maxFixedArity = 2);

/**
 * Surround a string with another string or character.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if(typeof s === 'string'){
return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
} else {
return null;
}
});
/**
 * Unsurround a string surrounded by another string or character.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var surrounding__$1 = surrounding.toString();
var length = cljs.core.count.call(null,surrounding__$1);
var fstr = cuerdas.core.slice.call(null,s,(0),length);
var slength = cljs.core.count.call(null,s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.call(null,s,rightend,slength);
if(((cljs.core._EQ_.call(null,fstr,surrounding__$1)) && (cljs.core._EQ_.call(null,lstr,surrounding__$1)))){
return cuerdas.core.slice.call(null,s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var G__34898 = arguments.length;
switch (G__34898) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround.call(null,s,"\"");
}));

(cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround.call(null,s,qchar);
}));

(cuerdas.core.quote.cljs$lang$maxFixedArity = 2);

/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var G__34901 = arguments.length;
switch (G__34901) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround.call(null,s,"\"");
}));

(cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround.call(null,s,qchar);
}));

(cuerdas.core.unquote.cljs$lang$maxFixedArity = 2);

cuerdas.core.stylize_split = (function cuerdas$core$stylize_split(s){
var re1 = cljs.core.re_pattern.call(null,"(?u)(\\p{Lu}+[\\p{Ll}\\u0027\\p{Ps}\\p{Pe}]*)");
var re2 = cljs.core.re_pattern.call(null,"(?u)[^\\p{L}\\p{N}\\u0027\\p{Ps}\\p{Pe}]+");
var G__34903 = s;
var G__34903__$1 = (((G__34903 == null))?null:cljs.core.name.call(null,G__34903));
var G__34903__$2 = (((G__34903__$1 == null))?null:cuerdas.core.replace.call(null,G__34903__$1,re1,"-$1"));
var G__34903__$3 = (((G__34903__$2 == null))?null:cuerdas.core.split.call(null,G__34903__$2,re2));
if((G__34903__$3 == null)){
return null;
} else {
return cljs.core.seq.call(null,G__34903__$3);
}
});
cuerdas.core.stylize_join = (function cuerdas$core$stylize_join(var_args){
var G__34905 = arguments.length;
switch (G__34905) {
case 3:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3 = (function (coll,every_fn,join_with){
if(cljs.core.seq.call(null,coll)){
return cuerdas.core.join.call(null,join_with,cljs.core.map.call(null,every_fn,coll));
} else {
return null;
}
}));

(cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4 = (function (p__34906,first_fn,rest_fn,join_with){
var vec__34907 = p__34906;
var seq__34908 = cljs.core.seq.call(null,vec__34907);
var first__34909 = cljs.core.first.call(null,seq__34908);
var seq__34908__$1 = cljs.core.next.call(null,seq__34908);
var fst = first__34909;
var rst = seq__34908__$1;
if(typeof fst === 'string'){
return cuerdas.core.join.call(null,join_with,cljs.core.cons.call(null,first_fn.call(null,fst),cljs.core.map.call(null,rest_fn,rst)));
} else {
return null;
}
}));

(cuerdas.core.stylize_join.cljs$lang$maxFixedArity = 4);

cuerdas.core.stylize = (function cuerdas$core$stylize(var_args){
var G__34913 = arguments.length;
switch (G__34913) {
case 3:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3 = (function (s,every_fn,join_with){
return cuerdas.core.stylize.call(null,s,every_fn,every_fn,join_with);
}));

(cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4 = (function (s,first_fn,rest_fn,join_with){
var remove_empty = (function (p1__34911_SHARP_){
return cljs.core.seq.call(null,cljs.core.remove.call(null,cuerdas.core.empty_QMARK_,p1__34911_SHARP_));
});
var G__34914 = cuerdas.core.stylize_split.call(null,s);
var G__34914__$1 = (((G__34914 == null))?null:remove_empty.call(null,G__34914));
if((G__34914__$1 == null)){
return null;
} else {
return cuerdas.core.stylize_join.call(null,G__34914__$1,first_fn,rest_fn,join_with);
}
}));

(cuerdas.core.stylize.cljs$lang$maxFixedArity = 4);

/**
 * Uppercases the first character of a string
 */
cuerdas.core.capital = (function cuerdas$core$capital(s){
if(cuerdas.core.empty_or_nil_QMARK_.call(null,s)){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.subs.call(null,s,(1),cljs.core.count.call(null,s))].join('');
}
});
/**
 * Output will be: lowerUpperUpperNoSpaces
 *   accepts strings and keywords
 */
cuerdas.core.camel = (function cuerdas$core$camel(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower,cuerdas.core.capital,"");
});
/**
 * Output will be: lower_cased_and_underscore_separated
 *   accepts strings and keywords
 */
cuerdas.core.snake = (function cuerdas$core$snake(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower,"_");
});
/**
 * Output will be: Space separated with the first letter capitalized.
 *   accepts strings and keywords
 */
cuerdas.core.phrase = (function cuerdas$core$phrase(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.capital,cuerdas.core.lower," ");
});
/**
 * Output will be: lower cased and space separated
 *   accepts strings and keywords
 */
cuerdas.core.human = (function cuerdas$core$human(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower," ");
});
/**
 * Output will be: Each Word Capitalized And Separated With Spaces
 *   accepts strings and keywords
 */
cuerdas.core.title = (function cuerdas$core$title(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.capital," ");
});
/**
 * Output will be: CapitalizedAndTouchingTheNext
 *   accepts strings and keywords
 */
cuerdas.core.pascal = (function cuerdas$core$pascal(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.capital,"");
});
/**
 * Output will be: lower-cased-and-separated-with-dashes
 *   accepts strings and keywords
 */
cuerdas.core.kebab = (function cuerdas$core$kebab(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower,"-");
});
/**
 * Output will be either:
 *   (js-selector "-pascal-case-me") ;; => PascalCaseMe
 *   (js-selector "camel-case-me") ;; => camelCaseMe
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.js_selector = (function cuerdas$core$js_selector(s){
var G__34916 = cuerdas.core.stylize_split.call(null,s);
if((G__34916 == null)){
return null;
} else {
return cuerdas.core.stylize_join.call(null,G__34916,cljs.core.identity,cuerdas.core.capital,"");
}
});
/**
 * Output will be either:
 *   (js-selector "LeadingDash") ;; => -leading-dash
 *   (js-selector "noLeadingDash") ;; => no-leading-dash
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.css_selector = (function cuerdas$core$css_selector(s){
var G__34917 = cuerdas.core.stylize_split.call(null,s);
if((G__34917 == null)){
return null;
} else {
return cuerdas.core.stylize_join.call(null,G__34917,cuerdas.core.lower,"-");
}
});
cuerdas.core._PLUS_slug_tr_map_PLUS_ = cljs.core.zipmap.call(null,"\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E","aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz");
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slug = (function cuerdas$core$slug(s){
var G__34918 = cuerdas.core.lower.call(null,s);
var G__34918__$1 = (((G__34918 == null))?null:clojure.string.escape.call(null,G__34918,cuerdas.core._PLUS_slug_tr_map_PLUS_));
var G__34918__$2 = (((G__34918__$1 == null))?null:cuerdas.core.replace.call(null,G__34918__$1,/[^\w\s]+/,""));
if((G__34918__$2 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__34918__$2,/\s+/,"-");
}
});
/**
 * Unicode friendly version of `slug` function.
 */
cuerdas.core.uslug = (function cuerdas$core$uslug(s){
var G__34919 = cuerdas.core.lower.call(null,s);
var G__34919__$1 = (((G__34919 == null))?null:cuerdas.core.replace.call(null,G__34919,cljs.core.re_pattern.call(null,"(?u)[^\\p{L}\\p{N}]+")," "));
if((G__34919__$1 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__34919__$1,cljs.core.re_pattern.call(null,"(?u)[\\p{Z}\\s]+"),"-");
}
});
/**
 * Safer version of clojure keyword, accepting a
 *   symbol for the namespace and kebab-casing the key
 */
cuerdas.core.keyword = (function cuerdas$core$keyword(var_args){
var G__34921 = arguments.length;
switch (G__34921) {
case 1:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cuerdas.core.keyword_STAR_.call(null,cuerdas.core.kebab.call(null,k));
}));

(cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
return cuerdas.core.keyword_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cuerdas.core.kebab.call(null,k));
}));

(cuerdas.core.keyword.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__34923_SHARP_){
return cljs.core._EQ_.call(null,p1__34923_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower.call(null,s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var G__34925 = arguments.length;
switch (G__34925) {
case 1:
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.pad.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.pad.call(null,s,null);
}));

(cuerdas.core.pad.cljs$core$IFn$_invoke$arity$2 = (function (s,p__34926){
var map__34927 = p__34926;
var map__34927__$1 = cljs.core.__destructure_map.call(null,map__34927);
var length = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var type = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
if(typeof s === 'string'){
var padding__$1 = cuerdas.core.slice.call(null,padding,(0),(1));
var padlen = (length - ((s).length));
var padlen__$1 = (((padlen < (0)))?(0):padlen);
var pred__34928 = cljs.core._EQ_;
var expr__34929 = type;
if(cljs.core.truth_(pred__34928.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__34929))){
return [s,cuerdas.core.repeat.call(null,padding__$1,padlen__$1)].join('');
} else {
if(cljs.core.truth_(pred__34928.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__34929))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen__$1 / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen__$1 / (2))));
return [first,s,second].join('');
} else {
if(cljs.core.truth_(pred__34928.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__34929))){
return [cuerdas.core.repeat.call(null,padding__$1,padlen__$1),s].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34929)].join('')));
}
}
}
} else {
return null;
}
}));

(cuerdas.core.pad.cljs$lang$maxFixedArity = 2);

/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__34932 = s;
var G__34932__$1 = (((G__34932 == null))?null:cuerdas.core.replace.call(null,G__34932,cljs.core.re_pattern.call(null,"(?u)[\\p{Z}\\s]+")," "));
if((G__34932__$1 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__34932__$1,/^\s+|\s+$/,"");
}
});
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

if(cljs.core.truth_(s)){
return cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
} else {
return null;
}
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
if(cljs.core.truth_(s)){
return cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,s,"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\"");
} else {
return null;
}
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.call(null,cuerdas.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.createAsIfByAssoc([kwdize.call(null,tags)]):((cljs.core.sequential_QMARK_.call(null,tags))?cljs.core.set.call(null,cljs.core.map.call(null,kwdize,tags)):null)));
var rx = cljs.core.re_pattern.call(null,"<\\/?([^<>]*)>");
return cuerdas.core.replace.call(null,s,rx,(((tags__$1 == null))?(function (p__34933){
var vec__34934 = p__34933;
var match = cljs.core.nth.call(null,vec__34934,(0),null);
var tag = cljs.core.nth.call(null,vec__34934,(1),null);
var tag__$1 = kwdize.call(null,tag);
return cljs.core.get.call(null,mappings,tag__$1,"");
}):(function (p__34937){
var vec__34938 = p__34937;
var match = cljs.core.nth.call(null,vec__34938,(0),null);
var tag = cljs.core.nth.call(null,vec__34938,(1),null);
var tag__$1 = kwdize.call(null,tag);
if(cljs.core.truth_(tags__$1.call(null,tag__$1))){
return cljs.core.get.call(null,mappings,tag__$1,"");
} else {
return match;
}
})));
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var G__34942 = arguments.length;
switch (G__34942) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl.call(null,s,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_.call(null,tags)){
return cuerdas.core.strip_tags_impl.call(null,s,null,tags);
} else {
return cuerdas.core.strip_tags_impl.call(null,s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl.call(null,s,tags,mapping);
}));

(cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3);

/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if(((cuerdas.core.includes_QMARK_.call(null,s,prefix)) && (cuerdas.core.includes_QMARK_.call(null,s,suffix)))){
var G__34944 = cuerdas.core.split.call(null,s,prefix);
var G__34944__$1 = (((G__34944 == null))?null:cljs.core.second.call(null,G__34944));
var G__34944__$2 = (((G__34944__$1 == null))?null:cuerdas.core.split.call(null,G__34944__$1,suffix));
if((G__34944__$2 == null)){
return null;
} else {
return cljs.core.first.call(null,G__34944__$2);
}
} else {
return null;
}
});
/**
 * Unindent multiline text. Uses either a supplied regex or the shortest
 *   beginning-of-line to non-whitespace distance
 */
cuerdas.core._LT__LT__ = (function cuerdas$core$_LT__LT__(var_args){
var G__34948 = arguments.length;
switch (G__34948) {
case 1:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1 = (function (s){
var all_indents = cljs.core.map.call(null,(function (p1__34945_SHARP_){
return cljs.core.count.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/^( +)/,p1__34945_SHARP_)));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,cuerdas.core.lines.call(null,s))], null),cljs.core.remove.call(null,cuerdas.core.blank_QMARK_,cljs.core.rest.call(null,cuerdas.core.lines.call(null,s)))));
var min_indent = cljs.core.re_pattern.call(null,cuerdas.core.format.call(null,"^ {%s}",cljs.core.apply.call(null,cljs.core.min,all_indents)));
return cuerdas.core._LT__LT__.call(null,min_indent,s);
}));

(cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2 = (function (r,s){
return cuerdas.core.unlines.call(null,cljs.core.map.call(null,(function (p1__34946_SHARP_){
return cuerdas.core.replace.call(null,p1__34946_SHARP_,r,"");
}),cuerdas.core.lines.call(null,s)));
}));

(cuerdas.core._LT__LT__.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map?rel=1710474316999
