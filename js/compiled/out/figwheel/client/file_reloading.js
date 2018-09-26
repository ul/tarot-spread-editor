// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49428_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49428_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49429 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49430 = null;
var count__49431 = (0);
var i__49432 = (0);
while(true){
if((i__49432 < count__49431)){
var n = cljs.core._nth.call(null,chunk__49430,i__49432);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__49433 = seq__49429;
var G__49434 = chunk__49430;
var G__49435 = count__49431;
var G__49436 = (i__49432 + (1));
seq__49429 = G__49433;
chunk__49430 = G__49434;
count__49431 = G__49435;
i__49432 = G__49436;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__49429);
if(temp__5559__auto__){
var seq__49429__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49429__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__49429__$1);
var G__49437 = cljs.core.chunk_rest.call(null,seq__49429__$1);
var G__49438 = c__4351__auto__;
var G__49439 = cljs.core.count.call(null,c__4351__auto__);
var G__49440 = (0);
seq__49429 = G__49437;
chunk__49430 = G__49438;
count__49431 = G__49439;
i__49432 = G__49440;
continue;
} else {
var n = cljs.core.first.call(null,seq__49429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__49441 = cljs.core.next.call(null,seq__49429__$1);
var G__49442 = null;
var G__49443 = (0);
var G__49444 = (0);
seq__49429 = G__49441;
chunk__49430 = G__49442;
count__49431 = G__49443;
i__49432 = G__49444;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__49445){
var vec__49446 = p__49445;
var _ = cljs.core.nth.call(null,vec__49446,(0),null);
var v = cljs.core.nth.call(null,vec__49446,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__49449){
var vec__49450 = p__49449;
var k = cljs.core.nth.call(null,vec__49450,(0),null);
var v = cljs.core.nth.call(null,vec__49450,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49462_49470 = cljs.core.seq.call(null,deps);
var chunk__49463_49471 = null;
var count__49464_49472 = (0);
var i__49465_49473 = (0);
while(true){
if((i__49465_49473 < count__49464_49472)){
var dep_49474 = cljs.core._nth.call(null,chunk__49463_49471,i__49465_49473);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_49474;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49474));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49474,(depth + (1)),state);
} else {
}


var G__49475 = seq__49462_49470;
var G__49476 = chunk__49463_49471;
var G__49477 = count__49464_49472;
var G__49478 = (i__49465_49473 + (1));
seq__49462_49470 = G__49475;
chunk__49463_49471 = G__49476;
count__49464_49472 = G__49477;
i__49465_49473 = G__49478;
continue;
} else {
var temp__5559__auto___49479 = cljs.core.seq.call(null,seq__49462_49470);
if(temp__5559__auto___49479){
var seq__49462_49480__$1 = temp__5559__auto___49479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49462_49480__$1)){
var c__4351__auto___49481 = cljs.core.chunk_first.call(null,seq__49462_49480__$1);
var G__49482 = cljs.core.chunk_rest.call(null,seq__49462_49480__$1);
var G__49483 = c__4351__auto___49481;
var G__49484 = cljs.core.count.call(null,c__4351__auto___49481);
var G__49485 = (0);
seq__49462_49470 = G__49482;
chunk__49463_49471 = G__49483;
count__49464_49472 = G__49484;
i__49465_49473 = G__49485;
continue;
} else {
var dep_49486 = cljs.core.first.call(null,seq__49462_49480__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_49486;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49486));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49486,(depth + (1)),state);
} else {
}


var G__49487 = cljs.core.next.call(null,seq__49462_49480__$1);
var G__49488 = null;
var G__49489 = (0);
var G__49490 = (0);
seq__49462_49470 = G__49487;
chunk__49463_49471 = G__49488;
count__49464_49472 = G__49489;
i__49465_49473 = G__49490;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49466){
var vec__49467 = p__49466;
var seq__49468 = cljs.core.seq.call(null,vec__49467);
var first__49469 = cljs.core.first.call(null,seq__49468);
var seq__49468__$1 = cljs.core.next.call(null,seq__49468);
var x = first__49469;
var xs = seq__49468__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49467,seq__49468,first__49469,seq__49468__$1,x,xs,get_deps__$1){
return (function (p1__49453_SHARP_){
return clojure.set.difference.call(null,p1__49453_SHARP_,x);
});})(vec__49467,seq__49468,first__49469,seq__49468__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49491 = cljs.core.seq.call(null,provides);
var chunk__49492 = null;
var count__49493 = (0);
var i__49494 = (0);
while(true){
if((i__49494 < count__49493)){
var prov = cljs.core._nth.call(null,chunk__49492,i__49494);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49495_49503 = cljs.core.seq.call(null,requires);
var chunk__49496_49504 = null;
var count__49497_49505 = (0);
var i__49498_49506 = (0);
while(true){
if((i__49498_49506 < count__49497_49505)){
var req_49507 = cljs.core._nth.call(null,chunk__49496_49504,i__49498_49506);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49507,prov);


var G__49508 = seq__49495_49503;
var G__49509 = chunk__49496_49504;
var G__49510 = count__49497_49505;
var G__49511 = (i__49498_49506 + (1));
seq__49495_49503 = G__49508;
chunk__49496_49504 = G__49509;
count__49497_49505 = G__49510;
i__49498_49506 = G__49511;
continue;
} else {
var temp__5559__auto___49512 = cljs.core.seq.call(null,seq__49495_49503);
if(temp__5559__auto___49512){
var seq__49495_49513__$1 = temp__5559__auto___49512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49495_49513__$1)){
var c__4351__auto___49514 = cljs.core.chunk_first.call(null,seq__49495_49513__$1);
var G__49515 = cljs.core.chunk_rest.call(null,seq__49495_49513__$1);
var G__49516 = c__4351__auto___49514;
var G__49517 = cljs.core.count.call(null,c__4351__auto___49514);
var G__49518 = (0);
seq__49495_49503 = G__49515;
chunk__49496_49504 = G__49516;
count__49497_49505 = G__49517;
i__49498_49506 = G__49518;
continue;
} else {
var req_49519 = cljs.core.first.call(null,seq__49495_49513__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49519,prov);


var G__49520 = cljs.core.next.call(null,seq__49495_49513__$1);
var G__49521 = null;
var G__49522 = (0);
var G__49523 = (0);
seq__49495_49503 = G__49520;
chunk__49496_49504 = G__49521;
count__49497_49505 = G__49522;
i__49498_49506 = G__49523;
continue;
}
} else {
}
}
break;
}


var G__49524 = seq__49491;
var G__49525 = chunk__49492;
var G__49526 = count__49493;
var G__49527 = (i__49494 + (1));
seq__49491 = G__49524;
chunk__49492 = G__49525;
count__49493 = G__49526;
i__49494 = G__49527;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__49491);
if(temp__5559__auto__){
var seq__49491__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49491__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__49491__$1);
var G__49528 = cljs.core.chunk_rest.call(null,seq__49491__$1);
var G__49529 = c__4351__auto__;
var G__49530 = cljs.core.count.call(null,c__4351__auto__);
var G__49531 = (0);
seq__49491 = G__49528;
chunk__49492 = G__49529;
count__49493 = G__49530;
i__49494 = G__49531;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49491__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49499_49532 = cljs.core.seq.call(null,requires);
var chunk__49500_49533 = null;
var count__49501_49534 = (0);
var i__49502_49535 = (0);
while(true){
if((i__49502_49535 < count__49501_49534)){
var req_49536 = cljs.core._nth.call(null,chunk__49500_49533,i__49502_49535);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49536,prov);


var G__49537 = seq__49499_49532;
var G__49538 = chunk__49500_49533;
var G__49539 = count__49501_49534;
var G__49540 = (i__49502_49535 + (1));
seq__49499_49532 = G__49537;
chunk__49500_49533 = G__49538;
count__49501_49534 = G__49539;
i__49502_49535 = G__49540;
continue;
} else {
var temp__5559__auto___49541__$1 = cljs.core.seq.call(null,seq__49499_49532);
if(temp__5559__auto___49541__$1){
var seq__49499_49542__$1 = temp__5559__auto___49541__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49499_49542__$1)){
var c__4351__auto___49543 = cljs.core.chunk_first.call(null,seq__49499_49542__$1);
var G__49544 = cljs.core.chunk_rest.call(null,seq__49499_49542__$1);
var G__49545 = c__4351__auto___49543;
var G__49546 = cljs.core.count.call(null,c__4351__auto___49543);
var G__49547 = (0);
seq__49499_49532 = G__49544;
chunk__49500_49533 = G__49545;
count__49501_49534 = G__49546;
i__49502_49535 = G__49547;
continue;
} else {
var req_49548 = cljs.core.first.call(null,seq__49499_49542__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49548,prov);


var G__49549 = cljs.core.next.call(null,seq__49499_49542__$1);
var G__49550 = null;
var G__49551 = (0);
var G__49552 = (0);
seq__49499_49532 = G__49549;
chunk__49500_49533 = G__49550;
count__49501_49534 = G__49551;
i__49502_49535 = G__49552;
continue;
}
} else {
}
}
break;
}


var G__49553 = cljs.core.next.call(null,seq__49491__$1);
var G__49554 = null;
var G__49555 = (0);
var G__49556 = (0);
seq__49491 = G__49553;
chunk__49492 = G__49554;
count__49493 = G__49555;
i__49494 = G__49556;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49557_49561 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49558_49562 = null;
var count__49559_49563 = (0);
var i__49560_49564 = (0);
while(true){
if((i__49560_49564 < count__49559_49563)){
var ns_49565 = cljs.core._nth.call(null,chunk__49558_49562,i__49560_49564);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49565);


var G__49566 = seq__49557_49561;
var G__49567 = chunk__49558_49562;
var G__49568 = count__49559_49563;
var G__49569 = (i__49560_49564 + (1));
seq__49557_49561 = G__49566;
chunk__49558_49562 = G__49567;
count__49559_49563 = G__49568;
i__49560_49564 = G__49569;
continue;
} else {
var temp__5559__auto___49570 = cljs.core.seq.call(null,seq__49557_49561);
if(temp__5559__auto___49570){
var seq__49557_49571__$1 = temp__5559__auto___49570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49557_49571__$1)){
var c__4351__auto___49572 = cljs.core.chunk_first.call(null,seq__49557_49571__$1);
var G__49573 = cljs.core.chunk_rest.call(null,seq__49557_49571__$1);
var G__49574 = c__4351__auto___49572;
var G__49575 = cljs.core.count.call(null,c__4351__auto___49572);
var G__49576 = (0);
seq__49557_49561 = G__49573;
chunk__49558_49562 = G__49574;
count__49559_49563 = G__49575;
i__49560_49564 = G__49576;
continue;
} else {
var ns_49577 = cljs.core.first.call(null,seq__49557_49571__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49577);


var G__49578 = cljs.core.next.call(null,seq__49557_49571__$1);
var G__49579 = null;
var G__49580 = (0);
var G__49581 = (0);
seq__49557_49561 = G__49578;
chunk__49558_49562 = G__49579;
count__49559_49563 = G__49580;
i__49560_49564 = G__49581;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49582__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49583__i = 0, G__49583__a = new Array(arguments.length -  0);
while (G__49583__i < G__49583__a.length) {G__49583__a[G__49583__i] = arguments[G__49583__i + 0]; ++G__49583__i;}
  args = new cljs.core.IndexedSeq(G__49583__a,0,null);
} 
return G__49582__delegate.call(this,args);};
G__49582.cljs$lang$maxFixedArity = 0;
G__49582.cljs$lang$applyTo = (function (arglist__49584){
var args = cljs.core.seq(arglist__49584);
return G__49582__delegate(args);
});
G__49582.cljs$core$IFn$_invoke$arity$variadic = G__49582__delegate;
return G__49582;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__49585_SHARP_,p2__49586_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49585_SHARP_)].join('')),p2__49586_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__49587_SHARP_,p2__49588_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49587_SHARP_)].join(''),p2__49588_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49589 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49589.addCallback(((function (G__49589){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49589))
);

G__49589.addErrback(((function (G__49589){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49589))
);

return G__49589;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49590){if((e49590 instanceof Error)){
var e = e49590;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49590;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49591){if((e49591 instanceof Error)){
var e = e49591;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49591;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49592 = cljs.core._EQ_;
var expr__49593 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49592.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49593))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__49592.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49593))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__49592.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49593))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__49592,expr__49593){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49592,expr__49593))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49595,callback){
var map__49596 = p__49595;
var map__49596__$1 = ((((!((map__49596 == null)))?(((((map__49596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49596):map__49596);
var file_msg = map__49596__$1;
var request_url = cljs.core.get.call(null,map__49596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__49596,map__49596__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49596,map__49596__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__){
return (function (state_49634){
var state_val_49635 = (state_49634[(1)]);
if((state_val_49635 === (7))){
var inst_49630 = (state_49634[(2)]);
var state_49634__$1 = state_49634;
var statearr_49636_49662 = state_49634__$1;
(statearr_49636_49662[(2)] = inst_49630);

(statearr_49636_49662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (1))){
var state_49634__$1 = state_49634;
var statearr_49637_49663 = state_49634__$1;
(statearr_49637_49663[(2)] = null);

(statearr_49637_49663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (4))){
var inst_49600 = (state_49634[(7)]);
var inst_49600__$1 = (state_49634[(2)]);
var state_49634__$1 = (function (){var statearr_49638 = state_49634;
(statearr_49638[(7)] = inst_49600__$1);

return statearr_49638;
})();
if(cljs.core.truth_(inst_49600__$1)){
var statearr_49639_49664 = state_49634__$1;
(statearr_49639_49664[(1)] = (5));

} else {
var statearr_49640_49665 = state_49634__$1;
(statearr_49640_49665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (15))){
var inst_49613 = (state_49634[(8)]);
var inst_49615 = (state_49634[(9)]);
var inst_49617 = inst_49615.call(null,inst_49613);
var state_49634__$1 = state_49634;
var statearr_49641_49666 = state_49634__$1;
(statearr_49641_49666[(2)] = inst_49617);

(statearr_49641_49666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (13))){
var inst_49624 = (state_49634[(2)]);
var state_49634__$1 = state_49634;
var statearr_49642_49667 = state_49634__$1;
(statearr_49642_49667[(2)] = inst_49624);

(statearr_49642_49667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (6))){
var state_49634__$1 = state_49634;
var statearr_49643_49668 = state_49634__$1;
(statearr_49643_49668[(2)] = null);

(statearr_49643_49668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (17))){
var inst_49621 = (state_49634[(2)]);
var state_49634__$1 = state_49634;
var statearr_49644_49669 = state_49634__$1;
(statearr_49644_49669[(2)] = inst_49621);

(statearr_49644_49669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (3))){
var inst_49632 = (state_49634[(2)]);
var state_49634__$1 = state_49634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49634__$1,inst_49632);
} else {
if((state_val_49635 === (12))){
var state_49634__$1 = state_49634;
var statearr_49645_49670 = state_49634__$1;
(statearr_49645_49670[(2)] = null);

(statearr_49645_49670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (2))){
var state_49634__$1 = state_49634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49634__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49635 === (11))){
var inst_49605 = (state_49634[(10)]);
var inst_49611 = figwheel.client.file_reloading.blocking_load.call(null,inst_49605);
var state_49634__$1 = state_49634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49634__$1,(14),inst_49611);
} else {
if((state_val_49635 === (9))){
var inst_49605 = (state_49634[(10)]);
var state_49634__$1 = state_49634;
if(cljs.core.truth_(inst_49605)){
var statearr_49646_49671 = state_49634__$1;
(statearr_49646_49671[(1)] = (11));

} else {
var statearr_49647_49672 = state_49634__$1;
(statearr_49647_49672[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (5))){
var inst_49606 = (state_49634[(11)]);
var inst_49600 = (state_49634[(7)]);
var inst_49605 = cljs.core.nth.call(null,inst_49600,(0),null);
var inst_49606__$1 = cljs.core.nth.call(null,inst_49600,(1),null);
var state_49634__$1 = (function (){var statearr_49648 = state_49634;
(statearr_49648[(11)] = inst_49606__$1);

(statearr_49648[(10)] = inst_49605);

return statearr_49648;
})();
if(cljs.core.truth_(inst_49606__$1)){
var statearr_49649_49673 = state_49634__$1;
(statearr_49649_49673[(1)] = (8));

} else {
var statearr_49650_49674 = state_49634__$1;
(statearr_49650_49674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (14))){
var inst_49605 = (state_49634[(10)]);
var inst_49615 = (state_49634[(9)]);
var inst_49613 = (state_49634[(2)]);
var inst_49614 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49615__$1 = cljs.core.get.call(null,inst_49614,inst_49605);
var state_49634__$1 = (function (){var statearr_49651 = state_49634;
(statearr_49651[(8)] = inst_49613);

(statearr_49651[(9)] = inst_49615__$1);

return statearr_49651;
})();
if(cljs.core.truth_(inst_49615__$1)){
var statearr_49652_49675 = state_49634__$1;
(statearr_49652_49675[(1)] = (15));

} else {
var statearr_49653_49676 = state_49634__$1;
(statearr_49653_49676[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (16))){
var inst_49613 = (state_49634[(8)]);
var inst_49619 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49613);
var state_49634__$1 = state_49634;
var statearr_49654_49677 = state_49634__$1;
(statearr_49654_49677[(2)] = inst_49619);

(statearr_49654_49677[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (10))){
var inst_49626 = (state_49634[(2)]);
var state_49634__$1 = (function (){var statearr_49655 = state_49634;
(statearr_49655[(12)] = inst_49626);

return statearr_49655;
})();
var statearr_49656_49678 = state_49634__$1;
(statearr_49656_49678[(2)] = null);

(statearr_49656_49678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49635 === (8))){
var inst_49606 = (state_49634[(11)]);
var inst_49608 = eval(inst_49606);
var state_49634__$1 = state_49634;
var statearr_49657_49679 = state_49634__$1;
(statearr_49657_49679[(2)] = inst_49608);

(statearr_49657_49679[(1)] = (10));


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
});})(c__32422__auto__))
;
return ((function (switch__32331__auto__,c__32422__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32332__auto__ = null;
var figwheel$client$file_reloading$state_machine__32332__auto____0 = (function (){
var statearr_49658 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49658[(0)] = figwheel$client$file_reloading$state_machine__32332__auto__);

(statearr_49658[(1)] = (1));

return statearr_49658;
});
var figwheel$client$file_reloading$state_machine__32332__auto____1 = (function (state_49634){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e49659){if((e49659 instanceof Object)){
var ex__32335__auto__ = e49659;
var statearr_49660_49680 = state_49634;
(statearr_49660_49680[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49681 = state_49634;
state_49634 = G__49681;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32332__auto__ = function(state_49634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32332__auto____1.call(this,state_49634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32332__auto____0;
figwheel$client$file_reloading$state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32332__auto____1;
return figwheel$client$file_reloading$state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__))
})();
var state__32424__auto__ = (function (){var statearr_49661 = f__32423__auto__.call(null);
(statearr_49661[(6)] = c__32422__auto__);

return statearr_49661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__))
);

return c__32422__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__49683 = arguments.length;
switch (G__49683) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49685,callback){
var map__49686 = p__49685;
var map__49686__$1 = ((((!((map__49686 == null)))?(((((map__49686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49686):map__49686);
var file_msg = map__49686__$1;
var namespace = cljs.core.get.call(null,map__49686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49686,map__49686__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49686,map__49686__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49688){
var map__49689 = p__49688;
var map__49689__$1 = ((((!((map__49689 == null)))?(((((map__49689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49689):map__49689);
var file_msg = map__49689__$1;
var namespace = cljs.core.get.call(null,map__49689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49691){
var map__49692 = p__49691;
var map__49692__$1 = ((((!((map__49692 == null)))?(((((map__49692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49692):map__49692);
var file_msg = map__49692__$1;
var namespace = cljs.core.get.call(null,map__49692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49694,callback){
var map__49695 = p__49694;
var map__49695__$1 = ((((!((map__49695 == null)))?(((((map__49695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49695):map__49695);
var file_msg = map__49695__$1;
var request_url = cljs.core.get.call(null,map__49695__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32422__auto___49745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto___49745,out){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto___49745,out){
return (function (state_49730){
var state_val_49731 = (state_49730[(1)]);
if((state_val_49731 === (1))){
var inst_49704 = cljs.core.seq.call(null,files);
var inst_49705 = cljs.core.first.call(null,inst_49704);
var inst_49706 = cljs.core.next.call(null,inst_49704);
var inst_49707 = files;
var state_49730__$1 = (function (){var statearr_49732 = state_49730;
(statearr_49732[(7)] = inst_49707);

(statearr_49732[(8)] = inst_49705);

(statearr_49732[(9)] = inst_49706);

return statearr_49732;
})();
var statearr_49733_49746 = state_49730__$1;
(statearr_49733_49746[(2)] = null);

(statearr_49733_49746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49731 === (2))){
var inst_49713 = (state_49730[(10)]);
var inst_49707 = (state_49730[(7)]);
var inst_49712 = cljs.core.seq.call(null,inst_49707);
var inst_49713__$1 = cljs.core.first.call(null,inst_49712);
var inst_49714 = cljs.core.next.call(null,inst_49712);
var inst_49715 = (inst_49713__$1 == null);
var inst_49716 = cljs.core.not.call(null,inst_49715);
var state_49730__$1 = (function (){var statearr_49734 = state_49730;
(statearr_49734[(10)] = inst_49713__$1);

(statearr_49734[(11)] = inst_49714);

return statearr_49734;
})();
if(inst_49716){
var statearr_49735_49747 = state_49730__$1;
(statearr_49735_49747[(1)] = (4));

} else {
var statearr_49736_49748 = state_49730__$1;
(statearr_49736_49748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49731 === (3))){
var inst_49728 = (state_49730[(2)]);
var state_49730__$1 = state_49730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49730__$1,inst_49728);
} else {
if((state_val_49731 === (4))){
var inst_49713 = (state_49730[(10)]);
var inst_49718 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49713);
var state_49730__$1 = state_49730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49730__$1,(7),inst_49718);
} else {
if((state_val_49731 === (5))){
var inst_49724 = cljs.core.async.close_BANG_.call(null,out);
var state_49730__$1 = state_49730;
var statearr_49737_49749 = state_49730__$1;
(statearr_49737_49749[(2)] = inst_49724);

(statearr_49737_49749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49731 === (6))){
var inst_49726 = (state_49730[(2)]);
var state_49730__$1 = state_49730;
var statearr_49738_49750 = state_49730__$1;
(statearr_49738_49750[(2)] = inst_49726);

(statearr_49738_49750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49731 === (7))){
var inst_49714 = (state_49730[(11)]);
var inst_49720 = (state_49730[(2)]);
var inst_49721 = cljs.core.async.put_BANG_.call(null,out,inst_49720);
var inst_49707 = inst_49714;
var state_49730__$1 = (function (){var statearr_49739 = state_49730;
(statearr_49739[(12)] = inst_49721);

(statearr_49739[(7)] = inst_49707);

return statearr_49739;
})();
var statearr_49740_49751 = state_49730__$1;
(statearr_49740_49751[(2)] = null);

(statearr_49740_49751[(1)] = (2));


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
});})(c__32422__auto___49745,out))
;
return ((function (switch__32331__auto__,c__32422__auto___49745,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto____0 = (function (){
var statearr_49741 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49741[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto__);

(statearr_49741[(1)] = (1));

return statearr_49741;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto____1 = (function (state_49730){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e49742){if((e49742 instanceof Object)){
var ex__32335__auto__ = e49742;
var statearr_49743_49752 = state_49730;
(statearr_49743_49752[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49753 = state_49730;
state_49730 = G__49753;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto__ = function(state_49730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto____1.call(this,state_49730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto___49745,out))
})();
var state__32424__auto__ = (function (){var statearr_49744 = f__32423__auto__.call(null);
(statearr_49744[(6)] = c__32422__auto___49745);

return statearr_49744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto___49745,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49754,opts){
var map__49755 = p__49754;
var map__49755__$1 = ((((!((map__49755 == null)))?(((((map__49755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49755):map__49755);
var eval_body = cljs.core.get.call(null,map__49755__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49755__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49757){var e = e49757;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5557__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49758_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49758_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5557__auto__)){
var file_msg = temp__5557__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49759){
var vec__49760 = p__49759;
var k = cljs.core.nth.call(null,vec__49760,(0),null);
var v = cljs.core.nth.call(null,vec__49760,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49763){
var vec__49764 = p__49763;
var k = cljs.core.nth.call(null,vec__49764,(0),null);
var v = cljs.core.nth.call(null,vec__49764,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49770,p__49771){
var map__49772 = p__49770;
var map__49772__$1 = ((((!((map__49772 == null)))?(((((map__49772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49772):map__49772);
var opts = map__49772__$1;
var before_jsload = cljs.core.get.call(null,map__49772__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49772__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49772__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49773 = p__49771;
var map__49773__$1 = ((((!((map__49773 == null)))?(((((map__49773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49773):map__49773);
var msg = map__49773__$1;
var files = cljs.core.get.call(null,map__49773__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49773__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49773__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32423__auto__ = (function (){var switch__32331__auto__ = ((function (c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49927){
var state_val_49928 = (state_49927[(1)]);
if((state_val_49928 === (7))){
var inst_49788 = (state_49927[(7)]);
var inst_49789 = (state_49927[(8)]);
var inst_49787 = (state_49927[(9)]);
var inst_49790 = (state_49927[(10)]);
var inst_49795 = cljs.core._nth.call(null,inst_49788,inst_49790);
var inst_49796 = figwheel.client.file_reloading.eval_body.call(null,inst_49795,opts);
var inst_49797 = (inst_49790 + (1));
var tmp49929 = inst_49788;
var tmp49930 = inst_49789;
var tmp49931 = inst_49787;
var inst_49787__$1 = tmp49931;
var inst_49788__$1 = tmp49929;
var inst_49789__$1 = tmp49930;
var inst_49790__$1 = inst_49797;
var state_49927__$1 = (function (){var statearr_49932 = state_49927;
(statearr_49932[(7)] = inst_49788__$1);

(statearr_49932[(11)] = inst_49796);

(statearr_49932[(8)] = inst_49789__$1);

(statearr_49932[(9)] = inst_49787__$1);

(statearr_49932[(10)] = inst_49790__$1);

return statearr_49932;
})();
var statearr_49933_50016 = state_49927__$1;
(statearr_49933_50016[(2)] = null);

(statearr_49933_50016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (20))){
var inst_49830 = (state_49927[(12)]);
var inst_49838 = figwheel.client.file_reloading.sort_files.call(null,inst_49830);
var state_49927__$1 = state_49927;
var statearr_49934_50017 = state_49927__$1;
(statearr_49934_50017[(2)] = inst_49838);

(statearr_49934_50017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (27))){
var state_49927__$1 = state_49927;
var statearr_49935_50018 = state_49927__$1;
(statearr_49935_50018[(2)] = null);

(statearr_49935_50018[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (1))){
var inst_49779 = (state_49927[(13)]);
var inst_49776 = before_jsload.call(null,files);
var inst_49777 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49778 = (function (){return ((function (inst_49779,inst_49776,inst_49777,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49767_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49767_SHARP_);
});
;})(inst_49779,inst_49776,inst_49777,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49779__$1 = cljs.core.filter.call(null,inst_49778,files);
var inst_49780 = cljs.core.not_empty.call(null,inst_49779__$1);
var state_49927__$1 = (function (){var statearr_49936 = state_49927;
(statearr_49936[(13)] = inst_49779__$1);

(statearr_49936[(14)] = inst_49776);

(statearr_49936[(15)] = inst_49777);

return statearr_49936;
})();
if(cljs.core.truth_(inst_49780)){
var statearr_49937_50019 = state_49927__$1;
(statearr_49937_50019[(1)] = (2));

} else {
var statearr_49938_50020 = state_49927__$1;
(statearr_49938_50020[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (24))){
var state_49927__$1 = state_49927;
var statearr_49939_50021 = state_49927__$1;
(statearr_49939_50021[(2)] = null);

(statearr_49939_50021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (39))){
var inst_49880 = (state_49927[(16)]);
var state_49927__$1 = state_49927;
var statearr_49940_50022 = state_49927__$1;
(statearr_49940_50022[(2)] = inst_49880);

(statearr_49940_50022[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (46))){
var inst_49922 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49941_50023 = state_49927__$1;
(statearr_49941_50023[(2)] = inst_49922);

(statearr_49941_50023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (4))){
var inst_49824 = (state_49927[(2)]);
var inst_49825 = cljs.core.List.EMPTY;
var inst_49826 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49825);
var inst_49827 = (function (){return ((function (inst_49824,inst_49825,inst_49826,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49768_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49768_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49768_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49768_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_49824,inst_49825,inst_49826,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49828 = cljs.core.filter.call(null,inst_49827,files);
var inst_49829 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49830 = cljs.core.concat.call(null,inst_49828,inst_49829);
var state_49927__$1 = (function (){var statearr_49942 = state_49927;
(statearr_49942[(17)] = inst_49824);

(statearr_49942[(18)] = inst_49826);

(statearr_49942[(12)] = inst_49830);

return statearr_49942;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49943_50024 = state_49927__$1;
(statearr_49943_50024[(1)] = (16));

} else {
var statearr_49944_50025 = state_49927__$1;
(statearr_49944_50025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (15))){
var inst_49814 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49945_50026 = state_49927__$1;
(statearr_49945_50026[(2)] = inst_49814);

(statearr_49945_50026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (21))){
var inst_49840 = (state_49927[(19)]);
var inst_49840__$1 = (state_49927[(2)]);
var inst_49841 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49840__$1);
var state_49927__$1 = (function (){var statearr_49946 = state_49927;
(statearr_49946[(19)] = inst_49840__$1);

return statearr_49946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49927__$1,(22),inst_49841);
} else {
if((state_val_49928 === (31))){
var inst_49925 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49927__$1,inst_49925);
} else {
if((state_val_49928 === (32))){
var inst_49880 = (state_49927[(16)]);
var inst_49885 = inst_49880.cljs$lang$protocol_mask$partition0$;
var inst_49886 = (inst_49885 & (64));
var inst_49887 = inst_49880.cljs$core$ISeq$;
var inst_49888 = (cljs.core.PROTOCOL_SENTINEL === inst_49887);
var inst_49889 = ((inst_49886) || (inst_49888));
var state_49927__$1 = state_49927;
if(cljs.core.truth_(inst_49889)){
var statearr_49947_50027 = state_49927__$1;
(statearr_49947_50027[(1)] = (35));

} else {
var statearr_49948_50028 = state_49927__$1;
(statearr_49948_50028[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (40))){
var inst_49902 = (state_49927[(20)]);
var inst_49901 = (state_49927[(2)]);
var inst_49902__$1 = cljs.core.get.call(null,inst_49901,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49903 = cljs.core.get.call(null,inst_49901,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49904 = cljs.core.not_empty.call(null,inst_49902__$1);
var state_49927__$1 = (function (){var statearr_49949 = state_49927;
(statearr_49949[(21)] = inst_49903);

(statearr_49949[(20)] = inst_49902__$1);

return statearr_49949;
})();
if(cljs.core.truth_(inst_49904)){
var statearr_49950_50029 = state_49927__$1;
(statearr_49950_50029[(1)] = (41));

} else {
var statearr_49951_50030 = state_49927__$1;
(statearr_49951_50030[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (33))){
var state_49927__$1 = state_49927;
var statearr_49952_50031 = state_49927__$1;
(statearr_49952_50031[(2)] = false);

(statearr_49952_50031[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (13))){
var inst_49800 = (state_49927[(22)]);
var inst_49804 = cljs.core.chunk_first.call(null,inst_49800);
var inst_49805 = cljs.core.chunk_rest.call(null,inst_49800);
var inst_49806 = cljs.core.count.call(null,inst_49804);
var inst_49787 = inst_49805;
var inst_49788 = inst_49804;
var inst_49789 = inst_49806;
var inst_49790 = (0);
var state_49927__$1 = (function (){var statearr_49953 = state_49927;
(statearr_49953[(7)] = inst_49788);

(statearr_49953[(8)] = inst_49789);

(statearr_49953[(9)] = inst_49787);

(statearr_49953[(10)] = inst_49790);

return statearr_49953;
})();
var statearr_49954_50032 = state_49927__$1;
(statearr_49954_50032[(2)] = null);

(statearr_49954_50032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (22))){
var inst_49843 = (state_49927[(23)]);
var inst_49848 = (state_49927[(24)]);
var inst_49840 = (state_49927[(19)]);
var inst_49844 = (state_49927[(25)]);
var inst_49843__$1 = (state_49927[(2)]);
var inst_49844__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49843__$1);
var inst_49845 = (function (){var all_files = inst_49840;
var res_SINGLEQUOTE_ = inst_49843__$1;
var res = inst_49844__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49843,inst_49848,inst_49840,inst_49844,inst_49843__$1,inst_49844__$1,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49769_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49769_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49843,inst_49848,inst_49840,inst_49844,inst_49843__$1,inst_49844__$1,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49846 = cljs.core.filter.call(null,inst_49845,inst_49843__$1);
var inst_49847 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49848__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49847);
var inst_49849 = cljs.core.not_empty.call(null,inst_49848__$1);
var state_49927__$1 = (function (){var statearr_49955 = state_49927;
(statearr_49955[(23)] = inst_49843__$1);

(statearr_49955[(26)] = inst_49846);

(statearr_49955[(24)] = inst_49848__$1);

(statearr_49955[(25)] = inst_49844__$1);

return statearr_49955;
})();
if(cljs.core.truth_(inst_49849)){
var statearr_49956_50033 = state_49927__$1;
(statearr_49956_50033[(1)] = (23));

} else {
var statearr_49957_50034 = state_49927__$1;
(statearr_49957_50034[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (36))){
var state_49927__$1 = state_49927;
var statearr_49958_50035 = state_49927__$1;
(statearr_49958_50035[(2)] = false);

(statearr_49958_50035[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (41))){
var inst_49902 = (state_49927[(20)]);
var inst_49906 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49907 = cljs.core.map.call(null,inst_49906,inst_49902);
var inst_49908 = cljs.core.pr_str.call(null,inst_49907);
var inst_49909 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49908)].join('');
var inst_49910 = figwheel.client.utils.log.call(null,inst_49909);
var state_49927__$1 = state_49927;
var statearr_49959_50036 = state_49927__$1;
(statearr_49959_50036[(2)] = inst_49910);

(statearr_49959_50036[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (43))){
var inst_49903 = (state_49927[(21)]);
var inst_49913 = (state_49927[(2)]);
var inst_49914 = cljs.core.not_empty.call(null,inst_49903);
var state_49927__$1 = (function (){var statearr_49960 = state_49927;
(statearr_49960[(27)] = inst_49913);

return statearr_49960;
})();
if(cljs.core.truth_(inst_49914)){
var statearr_49961_50037 = state_49927__$1;
(statearr_49961_50037[(1)] = (44));

} else {
var statearr_49962_50038 = state_49927__$1;
(statearr_49962_50038[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (29))){
var inst_49843 = (state_49927[(23)]);
var inst_49880 = (state_49927[(16)]);
var inst_49846 = (state_49927[(26)]);
var inst_49848 = (state_49927[(24)]);
var inst_49840 = (state_49927[(19)]);
var inst_49844 = (state_49927[(25)]);
var inst_49876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49879 = (function (){var all_files = inst_49840;
var res_SINGLEQUOTE_ = inst_49843;
var res = inst_49844;
var files_not_loaded = inst_49846;
var dependencies_that_loaded = inst_49848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49880,inst_49846,inst_49848,inst_49840,inst_49844,inst_49876,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49878){
var map__49963 = p__49878;
var map__49963__$1 = ((((!((map__49963 == null)))?(((((map__49963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49963):map__49963);
var namespace = cljs.core.get.call(null,map__49963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49880,inst_49846,inst_49848,inst_49840,inst_49844,inst_49876,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49880__$1 = cljs.core.group_by.call(null,inst_49879,inst_49846);
var inst_49882 = (inst_49880__$1 == null);
var inst_49883 = cljs.core.not.call(null,inst_49882);
var state_49927__$1 = (function (){var statearr_49965 = state_49927;
(statearr_49965[(16)] = inst_49880__$1);

(statearr_49965[(28)] = inst_49876);

return statearr_49965;
})();
if(inst_49883){
var statearr_49966_50039 = state_49927__$1;
(statearr_49966_50039[(1)] = (32));

} else {
var statearr_49967_50040 = state_49927__$1;
(statearr_49967_50040[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (44))){
var inst_49903 = (state_49927[(21)]);
var inst_49916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49903);
var inst_49917 = cljs.core.pr_str.call(null,inst_49916);
var inst_49918 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49917)].join('');
var inst_49919 = figwheel.client.utils.log.call(null,inst_49918);
var state_49927__$1 = state_49927;
var statearr_49968_50041 = state_49927__$1;
(statearr_49968_50041[(2)] = inst_49919);

(statearr_49968_50041[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (6))){
var inst_49821 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49969_50042 = state_49927__$1;
(statearr_49969_50042[(2)] = inst_49821);

(statearr_49969_50042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (28))){
var inst_49846 = (state_49927[(26)]);
var inst_49873 = (state_49927[(2)]);
var inst_49874 = cljs.core.not_empty.call(null,inst_49846);
var state_49927__$1 = (function (){var statearr_49970 = state_49927;
(statearr_49970[(29)] = inst_49873);

return statearr_49970;
})();
if(cljs.core.truth_(inst_49874)){
var statearr_49971_50043 = state_49927__$1;
(statearr_49971_50043[(1)] = (29));

} else {
var statearr_49972_50044 = state_49927__$1;
(statearr_49972_50044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (25))){
var inst_49844 = (state_49927[(25)]);
var inst_49860 = (state_49927[(2)]);
var inst_49861 = cljs.core.not_empty.call(null,inst_49844);
var state_49927__$1 = (function (){var statearr_49973 = state_49927;
(statearr_49973[(30)] = inst_49860);

return statearr_49973;
})();
if(cljs.core.truth_(inst_49861)){
var statearr_49974_50045 = state_49927__$1;
(statearr_49974_50045[(1)] = (26));

} else {
var statearr_49975_50046 = state_49927__$1;
(statearr_49975_50046[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (34))){
var inst_49896 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
if(cljs.core.truth_(inst_49896)){
var statearr_49976_50047 = state_49927__$1;
(statearr_49976_50047[(1)] = (38));

} else {
var statearr_49977_50048 = state_49927__$1;
(statearr_49977_50048[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (17))){
var state_49927__$1 = state_49927;
var statearr_49978_50049 = state_49927__$1;
(statearr_49978_50049[(2)] = recompile_dependents);

(statearr_49978_50049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (3))){
var state_49927__$1 = state_49927;
var statearr_49979_50050 = state_49927__$1;
(statearr_49979_50050[(2)] = null);

(statearr_49979_50050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (12))){
var inst_49817 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49980_50051 = state_49927__$1;
(statearr_49980_50051[(2)] = inst_49817);

(statearr_49980_50051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (2))){
var inst_49779 = (state_49927[(13)]);
var inst_49786 = cljs.core.seq.call(null,inst_49779);
var inst_49787 = inst_49786;
var inst_49788 = null;
var inst_49789 = (0);
var inst_49790 = (0);
var state_49927__$1 = (function (){var statearr_49981 = state_49927;
(statearr_49981[(7)] = inst_49788);

(statearr_49981[(8)] = inst_49789);

(statearr_49981[(9)] = inst_49787);

(statearr_49981[(10)] = inst_49790);

return statearr_49981;
})();
var statearr_49982_50052 = state_49927__$1;
(statearr_49982_50052[(2)] = null);

(statearr_49982_50052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (23))){
var inst_49843 = (state_49927[(23)]);
var inst_49846 = (state_49927[(26)]);
var inst_49848 = (state_49927[(24)]);
var inst_49840 = (state_49927[(19)]);
var inst_49844 = (state_49927[(25)]);
var inst_49851 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49853 = (function (){var all_files = inst_49840;
var res_SINGLEQUOTE_ = inst_49843;
var res = inst_49844;
var files_not_loaded = inst_49846;
var dependencies_that_loaded = inst_49848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49846,inst_49848,inst_49840,inst_49844,inst_49851,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49852){
var map__49983 = p__49852;
var map__49983__$1 = ((((!((map__49983 == null)))?(((((map__49983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49983):map__49983);
var request_url = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49846,inst_49848,inst_49840,inst_49844,inst_49851,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49854 = cljs.core.reverse.call(null,inst_49848);
var inst_49855 = cljs.core.map.call(null,inst_49853,inst_49854);
var inst_49856 = cljs.core.pr_str.call(null,inst_49855);
var inst_49857 = figwheel.client.utils.log.call(null,inst_49856);
var state_49927__$1 = (function (){var statearr_49985 = state_49927;
(statearr_49985[(31)] = inst_49851);

return statearr_49985;
})();
var statearr_49986_50053 = state_49927__$1;
(statearr_49986_50053[(2)] = inst_49857);

(statearr_49986_50053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (35))){
var state_49927__$1 = state_49927;
var statearr_49987_50054 = state_49927__$1;
(statearr_49987_50054[(2)] = true);

(statearr_49987_50054[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (19))){
var inst_49830 = (state_49927[(12)]);
var inst_49836 = figwheel.client.file_reloading.expand_files.call(null,inst_49830);
var state_49927__$1 = state_49927;
var statearr_49988_50055 = state_49927__$1;
(statearr_49988_50055[(2)] = inst_49836);

(statearr_49988_50055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (11))){
var state_49927__$1 = state_49927;
var statearr_49989_50056 = state_49927__$1;
(statearr_49989_50056[(2)] = null);

(statearr_49989_50056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (9))){
var inst_49819 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49990_50057 = state_49927__$1;
(statearr_49990_50057[(2)] = inst_49819);

(statearr_49990_50057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (5))){
var inst_49789 = (state_49927[(8)]);
var inst_49790 = (state_49927[(10)]);
var inst_49792 = (inst_49790 < inst_49789);
var inst_49793 = inst_49792;
var state_49927__$1 = state_49927;
if(cljs.core.truth_(inst_49793)){
var statearr_49991_50058 = state_49927__$1;
(statearr_49991_50058[(1)] = (7));

} else {
var statearr_49992_50059 = state_49927__$1;
(statearr_49992_50059[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (14))){
var inst_49800 = (state_49927[(22)]);
var inst_49809 = cljs.core.first.call(null,inst_49800);
var inst_49810 = figwheel.client.file_reloading.eval_body.call(null,inst_49809,opts);
var inst_49811 = cljs.core.next.call(null,inst_49800);
var inst_49787 = inst_49811;
var inst_49788 = null;
var inst_49789 = (0);
var inst_49790 = (0);
var state_49927__$1 = (function (){var statearr_49993 = state_49927;
(statearr_49993[(32)] = inst_49810);

(statearr_49993[(7)] = inst_49788);

(statearr_49993[(8)] = inst_49789);

(statearr_49993[(9)] = inst_49787);

(statearr_49993[(10)] = inst_49790);

return statearr_49993;
})();
var statearr_49994_50060 = state_49927__$1;
(statearr_49994_50060[(2)] = null);

(statearr_49994_50060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (45))){
var state_49927__$1 = state_49927;
var statearr_49995_50061 = state_49927__$1;
(statearr_49995_50061[(2)] = null);

(statearr_49995_50061[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (26))){
var inst_49843 = (state_49927[(23)]);
var inst_49846 = (state_49927[(26)]);
var inst_49848 = (state_49927[(24)]);
var inst_49840 = (state_49927[(19)]);
var inst_49844 = (state_49927[(25)]);
var inst_49863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49865 = (function (){var all_files = inst_49840;
var res_SINGLEQUOTE_ = inst_49843;
var res = inst_49844;
var files_not_loaded = inst_49846;
var dependencies_that_loaded = inst_49848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49846,inst_49848,inst_49840,inst_49844,inst_49863,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49864){
var map__49996 = p__49864;
var map__49996__$1 = ((((!((map__49996 == null)))?(((((map__49996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49996):map__49996);
var namespace = cljs.core.get.call(null,map__49996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49846,inst_49848,inst_49840,inst_49844,inst_49863,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49866 = cljs.core.map.call(null,inst_49865,inst_49844);
var inst_49867 = cljs.core.pr_str.call(null,inst_49866);
var inst_49868 = figwheel.client.utils.log.call(null,inst_49867);
var inst_49869 = (function (){var all_files = inst_49840;
var res_SINGLEQUOTE_ = inst_49843;
var res = inst_49844;
var files_not_loaded = inst_49846;
var dependencies_that_loaded = inst_49848;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49846,inst_49848,inst_49840,inst_49844,inst_49863,inst_49865,inst_49866,inst_49867,inst_49868,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49843,inst_49846,inst_49848,inst_49840,inst_49844,inst_49863,inst_49865,inst_49866,inst_49867,inst_49868,state_val_49928,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49870 = setTimeout(inst_49869,(10));
var state_49927__$1 = (function (){var statearr_49998 = state_49927;
(statearr_49998[(33)] = inst_49868);

(statearr_49998[(34)] = inst_49863);

return statearr_49998;
})();
var statearr_49999_50062 = state_49927__$1;
(statearr_49999_50062[(2)] = inst_49870);

(statearr_49999_50062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (16))){
var state_49927__$1 = state_49927;
var statearr_50000_50063 = state_49927__$1;
(statearr_50000_50063[(2)] = reload_dependents);

(statearr_50000_50063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (38))){
var inst_49880 = (state_49927[(16)]);
var inst_49898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49880);
var state_49927__$1 = state_49927;
var statearr_50001_50064 = state_49927__$1;
(statearr_50001_50064[(2)] = inst_49898);

(statearr_50001_50064[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (30))){
var state_49927__$1 = state_49927;
var statearr_50002_50065 = state_49927__$1;
(statearr_50002_50065[(2)] = null);

(statearr_50002_50065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (10))){
var inst_49800 = (state_49927[(22)]);
var inst_49802 = cljs.core.chunked_seq_QMARK_.call(null,inst_49800);
var state_49927__$1 = state_49927;
if(inst_49802){
var statearr_50003_50066 = state_49927__$1;
(statearr_50003_50066[(1)] = (13));

} else {
var statearr_50004_50067 = state_49927__$1;
(statearr_50004_50067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (18))){
var inst_49834 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
if(cljs.core.truth_(inst_49834)){
var statearr_50005_50068 = state_49927__$1;
(statearr_50005_50068[(1)] = (19));

} else {
var statearr_50006_50069 = state_49927__$1;
(statearr_50006_50069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (42))){
var state_49927__$1 = state_49927;
var statearr_50007_50070 = state_49927__$1;
(statearr_50007_50070[(2)] = null);

(statearr_50007_50070[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (37))){
var inst_49893 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_50008_50071 = state_49927__$1;
(statearr_50008_50071[(2)] = inst_49893);

(statearr_50008_50071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (8))){
var inst_49800 = (state_49927[(22)]);
var inst_49787 = (state_49927[(9)]);
var inst_49800__$1 = cljs.core.seq.call(null,inst_49787);
var state_49927__$1 = (function (){var statearr_50009 = state_49927;
(statearr_50009[(22)] = inst_49800__$1);

return statearr_50009;
})();
if(inst_49800__$1){
var statearr_50010_50072 = state_49927__$1;
(statearr_50010_50072[(1)] = (10));

} else {
var statearr_50011_50073 = state_49927__$1;
(statearr_50011_50073[(1)] = (11));

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
});})(c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32331__auto__,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto____0 = (function (){
var statearr_50012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50012[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto__);

(statearr_50012[(1)] = (1));

return statearr_50012;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto____1 = (function (state_49927){
while(true){
var ret_value__32333__auto__ = (function (){try{while(true){
var result__32334__auto__ = switch__32331__auto__.call(null,state_49927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32334__auto__;
}
break;
}
}catch (e50013){if((e50013 instanceof Object)){
var ex__32335__auto__ = e50013;
var statearr_50014_50074 = state_49927;
(statearr_50014_50074[(5)] = ex__32335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50075 = state_49927;
state_49927 = G__50075;
continue;
} else {
return ret_value__32333__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto__ = function(state_49927){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto____1.call(this,state_49927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32332__auto__;
})()
;})(switch__32331__auto__,c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32424__auto__ = (function (){var statearr_50015 = f__32423__auto__.call(null);
(statearr_50015[(6)] = c__32422__auto__);

return statearr_50015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32424__auto__);
});})(c__32422__auto__,map__49772,map__49772__$1,opts,before_jsload,on_jsload,reload_dependents,map__49773,map__49773__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32422__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50078,link){
var map__50079 = p__50078;
var map__50079__$1 = ((((!((map__50079 == null)))?(((((map__50079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50079):map__50079);
var file = cljs.core.get.call(null,map__50079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5559__auto__ = link.href;
if(cljs.core.truth_(temp__5559__auto__)){
var link_href = temp__5559__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5559__auto__,map__50079,map__50079__$1,file){
return (function (p1__50076_SHARP_,p2__50077_SHARP_){
if(cljs.core._EQ_.call(null,p1__50076_SHARP_,p2__50077_SHARP_)){
return p1__50076_SHARP_;
} else {
return false;
}
});})(link_href,temp__5559__auto__,map__50079,map__50079__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5559__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50082){
var map__50083 = p__50082;
var map__50083__$1 = ((((!((map__50083 == null)))?(((((map__50083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50083):map__50083);
var match_length = cljs.core.get.call(null,map__50083__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50083__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50081_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50081_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5559__auto__)){
var res = temp__5559__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50085_SHARP_,p2__50086_SHARP_){
return cljs.core.assoc.call(null,p1__50085_SHARP_,cljs.core.get.call(null,p2__50086_SHARP_,key),p2__50086_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5557__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5557__auto__)){
var link = temp__5557__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5557__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5557__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50087 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50087);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50087);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50088,p__50089){
var map__50090 = p__50088;
var map__50090__$1 = ((((!((map__50090 == null)))?(((((map__50090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50090):map__50090);
var on_cssload = cljs.core.get.call(null,map__50090__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50091 = p__50089;
var map__50091__$1 = ((((!((map__50091 == null)))?(((((map__50091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50091):map__50091);
var files_msg = map__50091__$1;
var files = cljs.core.get.call(null,map__50091__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5559__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5559__auto__)){
var f_datas = temp__5559__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1537946269984
