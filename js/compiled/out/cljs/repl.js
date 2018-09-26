// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50892){
var map__50893 = p__50892;
var map__50893__$1 = ((((!((map__50893 == null)))?(((((map__50893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50893):map__50893);
var m = map__50893__$1;
var n = cljs.core.get.call(null,map__50893__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5559__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5559__auto__)){
var ns = temp__5559__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50895_50917 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50896_50918 = null;
var count__50897_50919 = (0);
var i__50898_50920 = (0);
while(true){
if((i__50898_50920 < count__50897_50919)){
var f_50921 = cljs.core._nth.call(null,chunk__50896_50918,i__50898_50920);
cljs.core.println.call(null,"  ",f_50921);


var G__50922 = seq__50895_50917;
var G__50923 = chunk__50896_50918;
var G__50924 = count__50897_50919;
var G__50925 = (i__50898_50920 + (1));
seq__50895_50917 = G__50922;
chunk__50896_50918 = G__50923;
count__50897_50919 = G__50924;
i__50898_50920 = G__50925;
continue;
} else {
var temp__5559__auto___50926 = cljs.core.seq.call(null,seq__50895_50917);
if(temp__5559__auto___50926){
var seq__50895_50927__$1 = temp__5559__auto___50926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50895_50927__$1)){
var c__4351__auto___50928 = cljs.core.chunk_first.call(null,seq__50895_50927__$1);
var G__50929 = cljs.core.chunk_rest.call(null,seq__50895_50927__$1);
var G__50930 = c__4351__auto___50928;
var G__50931 = cljs.core.count.call(null,c__4351__auto___50928);
var G__50932 = (0);
seq__50895_50917 = G__50929;
chunk__50896_50918 = G__50930;
count__50897_50919 = G__50931;
i__50898_50920 = G__50932;
continue;
} else {
var f_50933 = cljs.core.first.call(null,seq__50895_50927__$1);
cljs.core.println.call(null,"  ",f_50933);


var G__50934 = cljs.core.next.call(null,seq__50895_50927__$1);
var G__50935 = null;
var G__50936 = (0);
var G__50937 = (0);
seq__50895_50917 = G__50934;
chunk__50896_50918 = G__50935;
count__50897_50919 = G__50936;
i__50898_50920 = G__50937;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50938 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50938);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50938)))?cljs.core.second.call(null,arglists_50938):arglists_50938));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50899_50939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50900_50940 = null;
var count__50901_50941 = (0);
var i__50902_50942 = (0);
while(true){
if((i__50902_50942 < count__50901_50941)){
var vec__50903_50943 = cljs.core._nth.call(null,chunk__50900_50940,i__50902_50942);
var name_50944 = cljs.core.nth.call(null,vec__50903_50943,(0),null);
var map__50906_50945 = cljs.core.nth.call(null,vec__50903_50943,(1),null);
var map__50906_50946__$1 = ((((!((map__50906_50945 == null)))?(((((map__50906_50945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50906_50945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50906_50945):map__50906_50945);
var doc_50947 = cljs.core.get.call(null,map__50906_50946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50948 = cljs.core.get.call(null,map__50906_50946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50944);

cljs.core.println.call(null," ",arglists_50948);

if(cljs.core.truth_(doc_50947)){
cljs.core.println.call(null," ",doc_50947);
} else {
}


var G__50949 = seq__50899_50939;
var G__50950 = chunk__50900_50940;
var G__50951 = count__50901_50941;
var G__50952 = (i__50902_50942 + (1));
seq__50899_50939 = G__50949;
chunk__50900_50940 = G__50950;
count__50901_50941 = G__50951;
i__50902_50942 = G__50952;
continue;
} else {
var temp__5559__auto___50953 = cljs.core.seq.call(null,seq__50899_50939);
if(temp__5559__auto___50953){
var seq__50899_50954__$1 = temp__5559__auto___50953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50899_50954__$1)){
var c__4351__auto___50955 = cljs.core.chunk_first.call(null,seq__50899_50954__$1);
var G__50956 = cljs.core.chunk_rest.call(null,seq__50899_50954__$1);
var G__50957 = c__4351__auto___50955;
var G__50958 = cljs.core.count.call(null,c__4351__auto___50955);
var G__50959 = (0);
seq__50899_50939 = G__50956;
chunk__50900_50940 = G__50957;
count__50901_50941 = G__50958;
i__50902_50942 = G__50959;
continue;
} else {
var vec__50908_50960 = cljs.core.first.call(null,seq__50899_50954__$1);
var name_50961 = cljs.core.nth.call(null,vec__50908_50960,(0),null);
var map__50911_50962 = cljs.core.nth.call(null,vec__50908_50960,(1),null);
var map__50911_50963__$1 = ((((!((map__50911_50962 == null)))?(((((map__50911_50962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50911_50962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50911_50962):map__50911_50962);
var doc_50964 = cljs.core.get.call(null,map__50911_50963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50965 = cljs.core.get.call(null,map__50911_50963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50961);

cljs.core.println.call(null," ",arglists_50965);

if(cljs.core.truth_(doc_50964)){
cljs.core.println.call(null," ",doc_50964);
} else {
}


var G__50966 = cljs.core.next.call(null,seq__50899_50954__$1);
var G__50967 = null;
var G__50968 = (0);
var G__50969 = (0);
seq__50899_50939 = G__50966;
chunk__50900_50940 = G__50967;
count__50901_50941 = G__50968;
i__50902_50942 = G__50969;
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
var temp__5559__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5559__auto__)){
var fnspec = temp__5559__auto__;
cljs.core.print.call(null,"Spec");

var seq__50913 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50914 = null;
var count__50915 = (0);
var i__50916 = (0);
while(true){
if((i__50916 < count__50915)){
var role = cljs.core._nth.call(null,chunk__50914,i__50916);
var temp__5559__auto___50970__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5559__auto___50970__$1)){
var spec_50971 = temp__5559__auto___50970__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50971));
} else {
}


var G__50972 = seq__50913;
var G__50973 = chunk__50914;
var G__50974 = count__50915;
var G__50975 = (i__50916 + (1));
seq__50913 = G__50972;
chunk__50914 = G__50973;
count__50915 = G__50974;
i__50916 = G__50975;
continue;
} else {
var temp__5559__auto____$1 = cljs.core.seq.call(null,seq__50913);
if(temp__5559__auto____$1){
var seq__50913__$1 = temp__5559__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50913__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__50913__$1);
var G__50976 = cljs.core.chunk_rest.call(null,seq__50913__$1);
var G__50977 = c__4351__auto__;
var G__50978 = cljs.core.count.call(null,c__4351__auto__);
var G__50979 = (0);
seq__50913 = G__50976;
chunk__50914 = G__50977;
count__50915 = G__50978;
i__50916 = G__50979;
continue;
} else {
var role = cljs.core.first.call(null,seq__50913__$1);
var temp__5559__auto___50980__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5559__auto___50980__$2)){
var spec_50981 = temp__5559__auto___50980__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50981));
} else {
}


var G__50982 = cljs.core.next.call(null,seq__50913__$1);
var G__50983 = null;
var G__50984 = (0);
var G__50985 = (0);
seq__50913 = G__50982;
chunk__50914 = G__50983;
count__50915 = G__50984;
i__50916 = G__50985;
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

//# sourceMappingURL=repl.js.map?rel=1537946273055
