// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__108042){
var map__108043 = p__108042;
var map__108043__$1 = cljs.core.__destructure_map.call(null,map__108043);
var m = map__108043__$1;
var n = cljs.core.get.call(null,map__108043__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__108043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5818__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5818__auto__)){
var ns = temp__5818__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__108044_108072 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__108045_108073 = null;
var count__108046_108074 = (0);
var i__108047_108075 = (0);
while(true){
if((i__108047_108075 < count__108046_108074)){
var f_108076 = cljs.core._nth.call(null,chunk__108045_108073,i__108047_108075);
cljs.core.println.call(null,"  ",f_108076);


var G__108077 = seq__108044_108072;
var G__108078 = chunk__108045_108073;
var G__108079 = count__108046_108074;
var G__108080 = (i__108047_108075 + (1));
seq__108044_108072 = G__108077;
chunk__108045_108073 = G__108078;
count__108046_108074 = G__108079;
i__108047_108075 = G__108080;
continue;
} else {
var temp__5818__auto___108081 = cljs.core.seq.call(null,seq__108044_108072);
if(temp__5818__auto___108081){
var seq__108044_108082__$1 = temp__5818__auto___108081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108044_108082__$1)){
var c__5568__auto___108083 = cljs.core.chunk_first.call(null,seq__108044_108082__$1);
var G__108084 = cljs.core.chunk_rest.call(null,seq__108044_108082__$1);
var G__108085 = c__5568__auto___108083;
var G__108086 = cljs.core.count.call(null,c__5568__auto___108083);
var G__108087 = (0);
seq__108044_108072 = G__108084;
chunk__108045_108073 = G__108085;
count__108046_108074 = G__108086;
i__108047_108075 = G__108087;
continue;
} else {
var f_108088 = cljs.core.first.call(null,seq__108044_108082__$1);
cljs.core.println.call(null,"  ",f_108088);


var G__108089 = cljs.core.next.call(null,seq__108044_108082__$1);
var G__108090 = null;
var G__108091 = (0);
var G__108092 = (0);
seq__108044_108072 = G__108089;
chunk__108045_108073 = G__108090;
count__108046_108074 = G__108091;
i__108047_108075 = G__108092;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_108093 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_108093);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_108093)))?cljs.core.second.call(null,arglists_108093):arglists_108093));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__108048_108094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__108049_108095 = null;
var count__108050_108096 = (0);
var i__108051_108097 = (0);
while(true){
if((i__108051_108097 < count__108050_108096)){
var vec__108060_108098 = cljs.core._nth.call(null,chunk__108049_108095,i__108051_108097);
var name_108099 = cljs.core.nth.call(null,vec__108060_108098,(0),null);
var map__108063_108100 = cljs.core.nth.call(null,vec__108060_108098,(1),null);
var map__108063_108101__$1 = cljs.core.__destructure_map.call(null,map__108063_108100);
var doc_108102 = cljs.core.get.call(null,map__108063_108101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_108103 = cljs.core.get.call(null,map__108063_108101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_108099);

cljs.core.println.call(null," ",arglists_108103);

if(cljs.core.truth_(doc_108102)){
cljs.core.println.call(null," ",doc_108102);
} else {
}


var G__108104 = seq__108048_108094;
var G__108105 = chunk__108049_108095;
var G__108106 = count__108050_108096;
var G__108107 = (i__108051_108097 + (1));
seq__108048_108094 = G__108104;
chunk__108049_108095 = G__108105;
count__108050_108096 = G__108106;
i__108051_108097 = G__108107;
continue;
} else {
var temp__5818__auto___108108 = cljs.core.seq.call(null,seq__108048_108094);
if(temp__5818__auto___108108){
var seq__108048_108109__$1 = temp__5818__auto___108108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108048_108109__$1)){
var c__5568__auto___108110 = cljs.core.chunk_first.call(null,seq__108048_108109__$1);
var G__108111 = cljs.core.chunk_rest.call(null,seq__108048_108109__$1);
var G__108112 = c__5568__auto___108110;
var G__108113 = cljs.core.count.call(null,c__5568__auto___108110);
var G__108114 = (0);
seq__108048_108094 = G__108111;
chunk__108049_108095 = G__108112;
count__108050_108096 = G__108113;
i__108051_108097 = G__108114;
continue;
} else {
var vec__108064_108115 = cljs.core.first.call(null,seq__108048_108109__$1);
var name_108116 = cljs.core.nth.call(null,vec__108064_108115,(0),null);
var map__108067_108117 = cljs.core.nth.call(null,vec__108064_108115,(1),null);
var map__108067_108118__$1 = cljs.core.__destructure_map.call(null,map__108067_108117);
var doc_108119 = cljs.core.get.call(null,map__108067_108118__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_108120 = cljs.core.get.call(null,map__108067_108118__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_108116);

cljs.core.println.call(null," ",arglists_108120);

if(cljs.core.truth_(doc_108119)){
cljs.core.println.call(null," ",doc_108119);
} else {
}


var G__108121 = cljs.core.next.call(null,seq__108048_108109__$1);
var G__108122 = null;
var G__108123 = (0);
var G__108124 = (0);
seq__108048_108094 = G__108121;
chunk__108049_108095 = G__108122;
count__108050_108096 = G__108123;
i__108051_108097 = G__108124;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5818__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5818__auto__)){
var fnspec = temp__5818__auto__;
cljs.core.print.call(null,"Spec");

var seq__108068 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__108069 = null;
var count__108070 = (0);
var i__108071 = (0);
while(true){
if((i__108071 < count__108070)){
var role = cljs.core._nth.call(null,chunk__108069,i__108071);
var temp__5818__auto___108125__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5818__auto___108125__$1)){
var spec_108126 = temp__5818__auto___108125__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_108126));
} else {
}


var G__108127 = seq__108068;
var G__108128 = chunk__108069;
var G__108129 = count__108070;
var G__108130 = (i__108071 + (1));
seq__108068 = G__108127;
chunk__108069 = G__108128;
count__108070 = G__108129;
i__108071 = G__108130;
continue;
} else {
var temp__5818__auto____$1 = cljs.core.seq.call(null,seq__108068);
if(temp__5818__auto____$1){
var seq__108068__$1 = temp__5818__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108068__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__108068__$1);
var G__108131 = cljs.core.chunk_rest.call(null,seq__108068__$1);
var G__108132 = c__5568__auto__;
var G__108133 = cljs.core.count.call(null,c__5568__auto__);
var G__108134 = (0);
seq__108068 = G__108131;
chunk__108069 = G__108132;
count__108070 = G__108133;
i__108071 = G__108134;
continue;
} else {
var role = cljs.core.first.call(null,seq__108068__$1);
var temp__5818__auto___108135__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5818__auto___108135__$2)){
var spec_108136 = temp__5818__auto___108135__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_108136));
} else {
}


var G__108137 = cljs.core.next.call(null,seq__108068__$1);
var G__108138 = null;
var G__108139 = (0);
var G__108140 = (0);
seq__108068 = G__108137;
chunk__108069 = G__108138;
count__108070 = G__108139;
i__108071 = G__108140;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5818__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5818__auto__)){
var msg = temp__5818__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5818__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5818__auto__)){
var ed = temp__5818__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__108141 = cljs.core.conj.call(null,via,t);
var G__108142 = cljs.core.ex_cause.call(null,t);
via = G__108141;
t = G__108142;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5818__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5818__auto__)){
var root_msg = temp__5818__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5818__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5818__auto__)){
var data = temp__5818__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5818__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5818__auto__)){
var phase = temp__5818__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__108145 = datafied_throwable;
var map__108145__$1 = cljs.core.__destructure_map.call(null,map__108145);
var via = cljs.core.get.call(null,map__108145__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__108145__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__108145__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__108146 = cljs.core.last.call(null,via);
var map__108146__$1 = cljs.core.__destructure_map.call(null,map__108146);
var type = cljs.core.get.call(null,map__108146__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__108146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__108146__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__108147 = data;
var map__108147__$1 = cljs.core.__destructure_map.call(null,map__108147);
var problems = cljs.core.get.call(null,map__108147__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__108147__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__108147__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__108148 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__108148__$1 = cljs.core.__destructure_map.call(null,map__108148);
var top_data = map__108148__$1;
var source = cljs.core.get.call(null,map__108148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__108149 = phase;
var G__108149__$1 = (((G__108149 instanceof cljs.core.Keyword))?G__108149.fqn:null);
switch (G__108149__$1) {
case "read-source":
var map__108150 = data;
var map__108150__$1 = cljs.core.__destructure_map.call(null,map__108150);
var line = cljs.core.get.call(null,map__108150__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__108150__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__108151 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__108151__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__108151,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__108151);
var G__108151__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__108151__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__108151__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__108151__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__108151__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__108152 = top_data;
var G__108152__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__108152,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__108152);
var G__108152__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__108152__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__108152__$1);
var G__108152__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__108152__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__108152__$2);
var G__108152__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__108152__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__108152__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__108152__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__108152__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__108153 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__108153,(0),null);
var method = cljs.core.nth.call(null,vec__108153,(1),null);
var file = cljs.core.nth.call(null,vec__108153,(2),null);
var line = cljs.core.nth.call(null,vec__108153,(3),null);
var G__108156 = top_data;
var G__108156__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__108156,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__108156);
var G__108156__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__108156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__108156__$1);
var G__108156__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__108156__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__108156__$2);
var G__108156__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__108156__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__108156__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__108156__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__108156__$4;
}

break;
case "execution":
var vec__108157 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__108157,(0),null);
var method = cljs.core.nth.call(null,vec__108157,(1),null);
var file = cljs.core.nth.call(null,vec__108157,(2),null);
var line = cljs.core.nth.call(null,vec__108157,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__108144_SHARP_){
var or__5045__auto__ = (p1__108144_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__108144_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__108160 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__108160__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__108160,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__108160);
var G__108160__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__108160__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__108160__$1);
var G__108160__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__108160__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__108160__$2);
var G__108160__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__108160__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__108160__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__108160__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__108160__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108149__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__108164){
var map__108165 = p__108164;
var map__108165__$1 = cljs.core.__destructure_map.call(null,map__108165);
var triage_data = map__108165__$1;
var phase = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__108165__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__108166 = phase;
var G__108166__$1 = (((G__108166 instanceof cljs.core.Keyword))?G__108166.fqn:null);
switch (G__108166__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__108167_108176 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__108168_108177 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__108169_108178 = true;
var _STAR_print_fn_STAR__temp_val__108170_108179 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__108169_108178);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__108170_108179);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__108162_SHARP_){
return cljs.core.dissoc.call(null,p1__108162_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__108168_108177);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__108167_108176);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__108171_108180 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__108172_108181 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__108173_108182 = true;
var _STAR_print_fn_STAR__temp_val__108174_108183 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__108173_108182);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__108174_108183);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__108163_SHARP_){
return cljs.core.dissoc.call(null,p1__108163_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__108172_108181);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__108171_108180);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108166__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1767875396187
