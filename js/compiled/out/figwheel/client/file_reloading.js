// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
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
var or__5045__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__106503 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__106503 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__106503,"requires");
}
}):(function (path){
var G__106504 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__106504 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__106504);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__106505_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__106505_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__106506 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__106506__$1 = (((G__106506 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__106506,"provides"));
if((G__106506__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__106506__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__106507 = cljs.core.seq.call(null,provides);
var chunk__106508 = null;
var count__106509 = (0);
var i__106510 = (0);
while(true){
if((i__106510 < count__106509)){
var prov = cljs.core._nth.call(null,chunk__106508,i__106510);
var seq__106519_106531 = cljs.core.seq.call(null,requires);
var chunk__106520_106532 = null;
var count__106521_106533 = (0);
var i__106522_106534 = (0);
while(true){
if((i__106522_106534 < count__106521_106533)){
var req_106535 = cljs.core._nth.call(null,chunk__106520_106532,i__106522_106534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106535,prov);


var G__106536 = seq__106519_106531;
var G__106537 = chunk__106520_106532;
var G__106538 = count__106521_106533;
var G__106539 = (i__106522_106534 + (1));
seq__106519_106531 = G__106536;
chunk__106520_106532 = G__106537;
count__106521_106533 = G__106538;
i__106522_106534 = G__106539;
continue;
} else {
var temp__5818__auto___106540 = cljs.core.seq.call(null,seq__106519_106531);
if(temp__5818__auto___106540){
var seq__106519_106541__$1 = temp__5818__auto___106540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106519_106541__$1)){
var c__5568__auto___106542 = cljs.core.chunk_first.call(null,seq__106519_106541__$1);
var G__106543 = cljs.core.chunk_rest.call(null,seq__106519_106541__$1);
var G__106544 = c__5568__auto___106542;
var G__106545 = cljs.core.count.call(null,c__5568__auto___106542);
var G__106546 = (0);
seq__106519_106531 = G__106543;
chunk__106520_106532 = G__106544;
count__106521_106533 = G__106545;
i__106522_106534 = G__106546;
continue;
} else {
var req_106547 = cljs.core.first.call(null,seq__106519_106541__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106547,prov);


var G__106548 = cljs.core.next.call(null,seq__106519_106541__$1);
var G__106549 = null;
var G__106550 = (0);
var G__106551 = (0);
seq__106519_106531 = G__106548;
chunk__106520_106532 = G__106549;
count__106521_106533 = G__106550;
i__106522_106534 = G__106551;
continue;
}
} else {
}
}
break;
}


var G__106552 = seq__106507;
var G__106553 = chunk__106508;
var G__106554 = count__106509;
var G__106555 = (i__106510 + (1));
seq__106507 = G__106552;
chunk__106508 = G__106553;
count__106509 = G__106554;
i__106510 = G__106555;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__106507);
if(temp__5818__auto__){
var seq__106507__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106507__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__106507__$1);
var G__106556 = cljs.core.chunk_rest.call(null,seq__106507__$1);
var G__106557 = c__5568__auto__;
var G__106558 = cljs.core.count.call(null,c__5568__auto__);
var G__106559 = (0);
seq__106507 = G__106556;
chunk__106508 = G__106557;
count__106509 = G__106558;
i__106510 = G__106559;
continue;
} else {
var prov = cljs.core.first.call(null,seq__106507__$1);
var seq__106523_106560 = cljs.core.seq.call(null,requires);
var chunk__106524_106561 = null;
var count__106525_106562 = (0);
var i__106526_106563 = (0);
while(true){
if((i__106526_106563 < count__106525_106562)){
var req_106564 = cljs.core._nth.call(null,chunk__106524_106561,i__106526_106563);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106564,prov);


var G__106565 = seq__106523_106560;
var G__106566 = chunk__106524_106561;
var G__106567 = count__106525_106562;
var G__106568 = (i__106526_106563 + (1));
seq__106523_106560 = G__106565;
chunk__106524_106561 = G__106566;
count__106525_106562 = G__106567;
i__106526_106563 = G__106568;
continue;
} else {
var temp__5818__auto___106569__$1 = cljs.core.seq.call(null,seq__106523_106560);
if(temp__5818__auto___106569__$1){
var seq__106523_106570__$1 = temp__5818__auto___106569__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106523_106570__$1)){
var c__5568__auto___106571 = cljs.core.chunk_first.call(null,seq__106523_106570__$1);
var G__106572 = cljs.core.chunk_rest.call(null,seq__106523_106570__$1);
var G__106573 = c__5568__auto___106571;
var G__106574 = cljs.core.count.call(null,c__5568__auto___106571);
var G__106575 = (0);
seq__106523_106560 = G__106572;
chunk__106524_106561 = G__106573;
count__106525_106562 = G__106574;
i__106526_106563 = G__106575;
continue;
} else {
var req_106576 = cljs.core.first.call(null,seq__106523_106570__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106576,prov);


var G__106577 = cljs.core.next.call(null,seq__106523_106570__$1);
var G__106578 = null;
var G__106579 = (0);
var G__106580 = (0);
seq__106523_106560 = G__106577;
chunk__106524_106561 = G__106578;
count__106525_106562 = G__106579;
i__106526_106563 = G__106580;
continue;
}
} else {
}
}
break;
}


var G__106581 = cljs.core.next.call(null,seq__106507__$1);
var G__106582 = null;
var G__106583 = (0);
var G__106584 = (0);
seq__106507 = G__106581;
chunk__106508 = G__106582;
count__106509 = G__106583;
i__106510 = G__106584;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__106527 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__106528 = null;
var count__106529 = (0);
var i__106530 = (0);
while(true){
if((i__106530 < count__106529)){
var prov = cljs.core._nth.call(null,chunk__106528,i__106530);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__106527,chunk__106528,count__106529,i__106530,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__106527,chunk__106528,count__106529,i__106530,prov,requires))
);


var G__106585 = seq__106527;
var G__106586 = chunk__106528;
var G__106587 = count__106529;
var G__106588 = (i__106530 + (1));
seq__106527 = G__106585;
chunk__106528 = G__106586;
count__106529 = G__106587;
i__106530 = G__106588;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__106527);
if(temp__5818__auto__){
var seq__106527__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106527__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__106527__$1);
var G__106589 = cljs.core.chunk_rest.call(null,seq__106527__$1);
var G__106590 = c__5568__auto__;
var G__106591 = cljs.core.count.call(null,c__5568__auto__);
var G__106592 = (0);
seq__106527 = G__106589;
chunk__106528 = G__106590;
count__106529 = G__106591;
i__106530 = G__106592;
continue;
} else {
var prov = cljs.core.first.call(null,seq__106527__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__106527,chunk__106528,count__106529,i__106530,prov,seq__106527__$1,temp__5818__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__106527,chunk__106528,count__106529,i__106530,prov,seq__106527__$1,temp__5818__auto__,requires))
);


var G__106593 = cljs.core.next.call(null,seq__106527__$1);
var G__106594 = null;
var G__106595 = (0);
var G__106596 = (0);
seq__106527 = G__106593;
chunk__106528 = G__106594;
count__106529 = G__106595;
i__106530 = G__106596;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__106597){
var vec__106598 = p__106597;
var _ = cljs.core.nth.call(null,vec__106598,(0),null);
var v = cljs.core.nth.call(null,vec__106598,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__106601){
var vec__106602 = p__106601;
var k = cljs.core.nth.call(null,vec__106602,(0),null);
var v = cljs.core.nth.call(null,vec__106602,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__106614_106622 = cljs.core.seq.call(null,deps);
var chunk__106615_106623 = null;
var count__106616_106624 = (0);
var i__106617_106625 = (0);
while(true){
if((i__106617_106625 < count__106616_106624)){
var dep_106626 = cljs.core._nth.call(null,chunk__106615_106623,i__106617_106625);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_106626;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_106626));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_106626,(depth + (1)),state);
} else {
}


var G__106627 = seq__106614_106622;
var G__106628 = chunk__106615_106623;
var G__106629 = count__106616_106624;
var G__106630 = (i__106617_106625 + (1));
seq__106614_106622 = G__106627;
chunk__106615_106623 = G__106628;
count__106616_106624 = G__106629;
i__106617_106625 = G__106630;
continue;
} else {
var temp__5818__auto___106631 = cljs.core.seq.call(null,seq__106614_106622);
if(temp__5818__auto___106631){
var seq__106614_106632__$1 = temp__5818__auto___106631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106614_106632__$1)){
var c__5568__auto___106633 = cljs.core.chunk_first.call(null,seq__106614_106632__$1);
var G__106634 = cljs.core.chunk_rest.call(null,seq__106614_106632__$1);
var G__106635 = c__5568__auto___106633;
var G__106636 = cljs.core.count.call(null,c__5568__auto___106633);
var G__106637 = (0);
seq__106614_106622 = G__106634;
chunk__106615_106623 = G__106635;
count__106616_106624 = G__106636;
i__106617_106625 = G__106637;
continue;
} else {
var dep_106638 = cljs.core.first.call(null,seq__106614_106632__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_106638;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_106638));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_106638,(depth + (1)),state);
} else {
}


var G__106639 = cljs.core.next.call(null,seq__106614_106632__$1);
var G__106640 = null;
var G__106641 = (0);
var G__106642 = (0);
seq__106614_106622 = G__106639;
chunk__106615_106623 = G__106640;
count__106616_106624 = G__106641;
i__106617_106625 = G__106642;
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
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__106618){
var vec__106619 = p__106618;
var seq__106620 = cljs.core.seq.call(null,vec__106619);
var first__106621 = cljs.core.first.call(null,seq__106620);
var seq__106620__$1 = cljs.core.next.call(null,seq__106620);
var x = first__106621;
var xs = seq__106620__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__106605_SHARP_){
return clojure.set.difference.call(null,p1__106605_SHARP_,x);
}),xs)));
}
});
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
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__106643_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__106643_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__106644 = cljs.core.seq.call(null,provides);
var chunk__106645 = null;
var count__106646 = (0);
var i__106647 = (0);
while(true){
if((i__106647 < count__106646)){
var prov = cljs.core._nth.call(null,chunk__106645,i__106647);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__106656_106664 = cljs.core.seq.call(null,requires);
var chunk__106657_106665 = null;
var count__106658_106666 = (0);
var i__106659_106667 = (0);
while(true){
if((i__106659_106667 < count__106658_106666)){
var req_106668 = cljs.core._nth.call(null,chunk__106657_106665,i__106659_106667);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106668,prov);


var G__106669 = seq__106656_106664;
var G__106670 = chunk__106657_106665;
var G__106671 = count__106658_106666;
var G__106672 = (i__106659_106667 + (1));
seq__106656_106664 = G__106669;
chunk__106657_106665 = G__106670;
count__106658_106666 = G__106671;
i__106659_106667 = G__106672;
continue;
} else {
var temp__5818__auto___106673 = cljs.core.seq.call(null,seq__106656_106664);
if(temp__5818__auto___106673){
var seq__106656_106674__$1 = temp__5818__auto___106673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106656_106674__$1)){
var c__5568__auto___106675 = cljs.core.chunk_first.call(null,seq__106656_106674__$1);
var G__106676 = cljs.core.chunk_rest.call(null,seq__106656_106674__$1);
var G__106677 = c__5568__auto___106675;
var G__106678 = cljs.core.count.call(null,c__5568__auto___106675);
var G__106679 = (0);
seq__106656_106664 = G__106676;
chunk__106657_106665 = G__106677;
count__106658_106666 = G__106678;
i__106659_106667 = G__106679;
continue;
} else {
var req_106680 = cljs.core.first.call(null,seq__106656_106674__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106680,prov);


var G__106681 = cljs.core.next.call(null,seq__106656_106674__$1);
var G__106682 = null;
var G__106683 = (0);
var G__106684 = (0);
seq__106656_106664 = G__106681;
chunk__106657_106665 = G__106682;
count__106658_106666 = G__106683;
i__106659_106667 = G__106684;
continue;
}
} else {
}
}
break;
}


var G__106685 = seq__106644;
var G__106686 = chunk__106645;
var G__106687 = count__106646;
var G__106688 = (i__106647 + (1));
seq__106644 = G__106685;
chunk__106645 = G__106686;
count__106646 = G__106687;
i__106647 = G__106688;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__106644);
if(temp__5818__auto__){
var seq__106644__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106644__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__106644__$1);
var G__106689 = cljs.core.chunk_rest.call(null,seq__106644__$1);
var G__106690 = c__5568__auto__;
var G__106691 = cljs.core.count.call(null,c__5568__auto__);
var G__106692 = (0);
seq__106644 = G__106689;
chunk__106645 = G__106690;
count__106646 = G__106691;
i__106647 = G__106692;
continue;
} else {
var prov = cljs.core.first.call(null,seq__106644__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__106660_106693 = cljs.core.seq.call(null,requires);
var chunk__106661_106694 = null;
var count__106662_106695 = (0);
var i__106663_106696 = (0);
while(true){
if((i__106663_106696 < count__106662_106695)){
var req_106697 = cljs.core._nth.call(null,chunk__106661_106694,i__106663_106696);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106697,prov);


var G__106698 = seq__106660_106693;
var G__106699 = chunk__106661_106694;
var G__106700 = count__106662_106695;
var G__106701 = (i__106663_106696 + (1));
seq__106660_106693 = G__106698;
chunk__106661_106694 = G__106699;
count__106662_106695 = G__106700;
i__106663_106696 = G__106701;
continue;
} else {
var temp__5818__auto___106702__$1 = cljs.core.seq.call(null,seq__106660_106693);
if(temp__5818__auto___106702__$1){
var seq__106660_106703__$1 = temp__5818__auto___106702__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106660_106703__$1)){
var c__5568__auto___106704 = cljs.core.chunk_first.call(null,seq__106660_106703__$1);
var G__106705 = cljs.core.chunk_rest.call(null,seq__106660_106703__$1);
var G__106706 = c__5568__auto___106704;
var G__106707 = cljs.core.count.call(null,c__5568__auto___106704);
var G__106708 = (0);
seq__106660_106693 = G__106705;
chunk__106661_106694 = G__106706;
count__106662_106695 = G__106707;
i__106663_106696 = G__106708;
continue;
} else {
var req_106709 = cljs.core.first.call(null,seq__106660_106703__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106709,prov);


var G__106710 = cljs.core.next.call(null,seq__106660_106703__$1);
var G__106711 = null;
var G__106712 = (0);
var G__106713 = (0);
seq__106660_106693 = G__106710;
chunk__106661_106694 = G__106711;
count__106662_106695 = G__106712;
i__106663_106696 = G__106713;
continue;
}
} else {
}
}
break;
}


var G__106714 = cljs.core.next.call(null,seq__106644__$1);
var G__106715 = null;
var G__106716 = (0);
var G__106717 = (0);
seq__106644 = G__106714;
chunk__106645 = G__106715;
count__106646 = G__106716;
i__106647 = G__106717;
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
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__106718_106722 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__106719_106723 = null;
var count__106720_106724 = (0);
var i__106721_106725 = (0);
while(true){
if((i__106721_106725 < count__106720_106724)){
var ns_106726 = cljs.core._nth.call(null,chunk__106719_106723,i__106721_106725);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_106726);


var G__106727 = seq__106718_106722;
var G__106728 = chunk__106719_106723;
var G__106729 = count__106720_106724;
var G__106730 = (i__106721_106725 + (1));
seq__106718_106722 = G__106727;
chunk__106719_106723 = G__106728;
count__106720_106724 = G__106729;
i__106721_106725 = G__106730;
continue;
} else {
var temp__5818__auto___106731 = cljs.core.seq.call(null,seq__106718_106722);
if(temp__5818__auto___106731){
var seq__106718_106732__$1 = temp__5818__auto___106731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106718_106732__$1)){
var c__5568__auto___106733 = cljs.core.chunk_first.call(null,seq__106718_106732__$1);
var G__106734 = cljs.core.chunk_rest.call(null,seq__106718_106732__$1);
var G__106735 = c__5568__auto___106733;
var G__106736 = cljs.core.count.call(null,c__5568__auto___106733);
var G__106737 = (0);
seq__106718_106722 = G__106734;
chunk__106719_106723 = G__106735;
count__106720_106724 = G__106736;
i__106721_106725 = G__106737;
continue;
} else {
var ns_106738 = cljs.core.first.call(null,seq__106718_106732__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_106738);


var G__106739 = cljs.core.next.call(null,seq__106718_106732__$1);
var G__106740 = null;
var G__106741 = (0);
var G__106742 = (0);
seq__106718_106722 = G__106739;
chunk__106719_106723 = G__106740;
count__106720_106724 = G__106741;
i__106721_106725 = G__106742;
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
(goog.require_figwheel_backup_ = (function (){var or__5045__auto__ = goog.require__;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__106743__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__106743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__106744__i = 0, G__106744__a = new Array(arguments.length -  0);
while (G__106744__i < G__106744__a.length) {G__106744__a[G__106744__i] = arguments[G__106744__i + 0]; ++G__106744__i;}
  args = new cljs.core.IndexedSeq(G__106744__a,0,null);
} 
return G__106743__delegate.call(this,args);};
G__106743.cljs$lang$maxFixedArity = 0;
G__106743.cljs$lang$applyTo = (function (arglist__106745){
var args = cljs.core.seq(arglist__106745);
return G__106743__delegate(args);
});
G__106743.cljs$core$IFn$_invoke$arity$variadic = G__106743__delegate;
return G__106743;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__106746_SHARP_,p2__106747_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__106746_SHARP_)),p2__106747_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__106748_SHARP_,p2__106749_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__106748_SHARP_),p2__106749_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__106750 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__106750.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__106750.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__106750;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e106751){if((e106751 instanceof Error)){
var e = e106751;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e106751;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e106752){if((e106752 instanceof Error)){
var e = e106752;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e106752;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__106753 = cljs.core._EQ_;
var expr__106754 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__106753.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__106754))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__106753.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__106754))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__106753.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__106754))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__106756,callback){
var map__106757 = p__106756;
var map__106757__$1 = cljs.core.__destructure_map.call(null,map__106757);
var file_msg = map__106757__$1;
var request_url = cljs.core.get.call(null,map__106757__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5045__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
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
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106794){
var state_val_106795 = (state_106794[(1)]);
if((state_val_106795 === (7))){
var inst_106790 = (state_106794[(2)]);
var state_106794__$1 = state_106794;
var statearr_106796_106822 = state_106794__$1;
(statearr_106796_106822[(2)] = inst_106790);

(statearr_106796_106822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (1))){
var state_106794__$1 = state_106794;
var statearr_106797_106823 = state_106794__$1;
(statearr_106797_106823[(2)] = null);

(statearr_106797_106823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (4))){
var inst_106760 = (state_106794[(7)]);
var inst_106760__$1 = (state_106794[(2)]);
var state_106794__$1 = (function (){var statearr_106798 = state_106794;
(statearr_106798[(7)] = inst_106760__$1);

return statearr_106798;
})();
if(cljs.core.truth_(inst_106760__$1)){
var statearr_106799_106824 = state_106794__$1;
(statearr_106799_106824[(1)] = (5));

} else {
var statearr_106800_106825 = state_106794__$1;
(statearr_106800_106825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (15))){
var inst_106775 = (state_106794[(8)]);
var inst_106773 = (state_106794[(9)]);
var inst_106777 = inst_106775.call(null,inst_106773);
var state_106794__$1 = state_106794;
var statearr_106801_106826 = state_106794__$1;
(statearr_106801_106826[(2)] = inst_106777);

(statearr_106801_106826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (13))){
var inst_106784 = (state_106794[(2)]);
var state_106794__$1 = state_106794;
var statearr_106802_106827 = state_106794__$1;
(statearr_106802_106827[(2)] = inst_106784);

(statearr_106802_106827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (6))){
var state_106794__$1 = state_106794;
var statearr_106803_106828 = state_106794__$1;
(statearr_106803_106828[(2)] = null);

(statearr_106803_106828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (17))){
var inst_106781 = (state_106794[(2)]);
var state_106794__$1 = state_106794;
var statearr_106804_106829 = state_106794__$1;
(statearr_106804_106829[(2)] = inst_106781);

(statearr_106804_106829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (3))){
var inst_106792 = (state_106794[(2)]);
var state_106794__$1 = state_106794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106794__$1,inst_106792);
} else {
if((state_val_106795 === (12))){
var state_106794__$1 = state_106794;
var statearr_106805_106830 = state_106794__$1;
(statearr_106805_106830[(2)] = null);

(statearr_106805_106830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (2))){
var state_106794__$1 = state_106794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106794__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_106795 === (11))){
var inst_106765 = (state_106794[(10)]);
var inst_106771 = figwheel.client.file_reloading.blocking_load.call(null,inst_106765);
var state_106794__$1 = state_106794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106794__$1,(14),inst_106771);
} else {
if((state_val_106795 === (9))){
var inst_106765 = (state_106794[(10)]);
var state_106794__$1 = state_106794;
if(cljs.core.truth_(inst_106765)){
var statearr_106806_106831 = state_106794__$1;
(statearr_106806_106831[(1)] = (11));

} else {
var statearr_106807_106832 = state_106794__$1;
(statearr_106807_106832[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (5))){
var inst_106760 = (state_106794[(7)]);
var inst_106766 = (state_106794[(11)]);
var inst_106765 = cljs.core.nth.call(null,inst_106760,(0),null);
var inst_106766__$1 = cljs.core.nth.call(null,inst_106760,(1),null);
var state_106794__$1 = (function (){var statearr_106808 = state_106794;
(statearr_106808[(11)] = inst_106766__$1);

(statearr_106808[(10)] = inst_106765);

return statearr_106808;
})();
if(cljs.core.truth_(inst_106766__$1)){
var statearr_106809_106833 = state_106794__$1;
(statearr_106809_106833[(1)] = (8));

} else {
var statearr_106810_106834 = state_106794__$1;
(statearr_106810_106834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (14))){
var inst_106775 = (state_106794[(8)]);
var inst_106765 = (state_106794[(10)]);
var inst_106773 = (state_106794[(2)]);
var inst_106774 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_106775__$1 = cljs.core.get.call(null,inst_106774,inst_106765);
var state_106794__$1 = (function (){var statearr_106811 = state_106794;
(statearr_106811[(8)] = inst_106775__$1);

(statearr_106811[(9)] = inst_106773);

return statearr_106811;
})();
if(cljs.core.truth_(inst_106775__$1)){
var statearr_106812_106835 = state_106794__$1;
(statearr_106812_106835[(1)] = (15));

} else {
var statearr_106813_106836 = state_106794__$1;
(statearr_106813_106836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (16))){
var inst_106773 = (state_106794[(9)]);
var inst_106779 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_106773);
var state_106794__$1 = state_106794;
var statearr_106814_106837 = state_106794__$1;
(statearr_106814_106837[(2)] = inst_106779);

(statearr_106814_106837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (10))){
var inst_106786 = (state_106794[(2)]);
var state_106794__$1 = (function (){var statearr_106815 = state_106794;
(statearr_106815[(12)] = inst_106786);

return statearr_106815;
})();
var statearr_106816_106838 = state_106794__$1;
(statearr_106816_106838[(2)] = null);

(statearr_106816_106838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106795 === (8))){
var inst_106766 = (state_106794[(11)]);
var inst_106768 = eval(inst_106766);
var state_106794__$1 = state_106794;
var statearr_106817_106839 = state_106794__$1;
(statearr_106817_106839[(2)] = inst_106768);

(statearr_106817_106839[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__32971__auto__ = null;
var figwheel$client$file_reloading$state_machine__32971__auto____0 = (function (){
var statearr_106818 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106818[(0)] = figwheel$client$file_reloading$state_machine__32971__auto__);

(statearr_106818[(1)] = (1));

return statearr_106818;
});
var figwheel$client$file_reloading$state_machine__32971__auto____1 = (function (state_106794){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106819){if((e106819 instanceof Object)){
var ex__32974__auto__ = e106819;
var statearr_106820_106840 = state_106794;
(statearr_106820_106840[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106841 = state_106794;
state_106794 = G__106841;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32971__auto__ = function(state_106794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32971__auto____1.call(this,state_106794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32971__auto____0;
figwheel$client$file_reloading$state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32971__auto____1;
return figwheel$client$file_reloading$state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106821 = f__33068__auto__.call(null);
(statearr_106821[(6)] = c__33067__auto__);

return statearr_106821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__106843 = arguments.length;
switch (G__106843) {
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

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__106845,callback){
var map__106846 = p__106845;
var map__106846__$1 = cljs.core.__destructure_map.call(null,map__106846);
var file_msg = map__106846__$1;
var namespace = cljs.core.get.call(null,map__106846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__106847){
var map__106848 = p__106847;
var map__106848__$1 = cljs.core.__destructure_map.call(null,map__106848);
var file_msg = map__106848__$1;
var namespace = cljs.core.get.call(null,map__106848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__106849){
var map__106850 = p__106849;
var map__106850__$1 = cljs.core.__destructure_map.call(null,map__106850);
var file_msg = map__106850__$1;
var namespace = cljs.core.get.call(null,map__106850__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__5043__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__5043__auto__){
var or__5045__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__5043__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__106851,callback){
var map__106852 = p__106851;
var map__106852__$1 = cljs.core.__destructure_map.call(null,map__106852);
var file_msg = map__106852__$1;
var request_url = cljs.core.get.call(null,map__106852__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__106852__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33067__auto___106901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_106886){
var state_val_106887 = (state_106886[(1)]);
if((state_val_106887 === (1))){
var inst_106860 = cljs.core.seq.call(null,files);
var inst_106861 = cljs.core.first.call(null,inst_106860);
var inst_106862 = cljs.core.next.call(null,inst_106860);
var inst_106863 = files;
var state_106886__$1 = (function (){var statearr_106888 = state_106886;
(statearr_106888[(7)] = inst_106862);

(statearr_106888[(8)] = inst_106861);

(statearr_106888[(9)] = inst_106863);

return statearr_106888;
})();
var statearr_106889_106902 = state_106886__$1;
(statearr_106889_106902[(2)] = null);

(statearr_106889_106902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106887 === (2))){
var inst_106863 = (state_106886[(9)]);
var inst_106869 = (state_106886[(10)]);
var inst_106868 = cljs.core.seq.call(null,inst_106863);
var inst_106869__$1 = cljs.core.first.call(null,inst_106868);
var inst_106870 = cljs.core.next.call(null,inst_106868);
var inst_106871 = (inst_106869__$1 == null);
var inst_106872 = cljs.core.not.call(null,inst_106871);
var state_106886__$1 = (function (){var statearr_106890 = state_106886;
(statearr_106890[(11)] = inst_106870);

(statearr_106890[(10)] = inst_106869__$1);

return statearr_106890;
})();
if(inst_106872){
var statearr_106891_106903 = state_106886__$1;
(statearr_106891_106903[(1)] = (4));

} else {
var statearr_106892_106904 = state_106886__$1;
(statearr_106892_106904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106887 === (3))){
var inst_106884 = (state_106886[(2)]);
var state_106886__$1 = state_106886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106886__$1,inst_106884);
} else {
if((state_val_106887 === (4))){
var inst_106869 = (state_106886[(10)]);
var inst_106874 = figwheel.client.file_reloading.reload_js_file.call(null,inst_106869);
var state_106886__$1 = state_106886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106886__$1,(7),inst_106874);
} else {
if((state_val_106887 === (5))){
var inst_106880 = cljs.core.async.close_BANG_.call(null,out);
var state_106886__$1 = state_106886;
var statearr_106893_106905 = state_106886__$1;
(statearr_106893_106905[(2)] = inst_106880);

(statearr_106893_106905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106887 === (6))){
var inst_106882 = (state_106886[(2)]);
var state_106886__$1 = state_106886;
var statearr_106894_106906 = state_106886__$1;
(statearr_106894_106906[(2)] = inst_106882);

(statearr_106894_106906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106887 === (7))){
var inst_106870 = (state_106886[(11)]);
var inst_106876 = (state_106886[(2)]);
var inst_106877 = cljs.core.async.put_BANG_.call(null,out,inst_106876);
var inst_106863 = inst_106870;
var state_106886__$1 = (function (){var statearr_106895 = state_106886;
(statearr_106895[(9)] = inst_106863);

(statearr_106895[(12)] = inst_106877);

return statearr_106895;
})();
var statearr_106896_106907 = state_106886__$1;
(statearr_106896_106907[(2)] = null);

(statearr_106896_106907[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto____0 = (function (){
var statearr_106897 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106897[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto__);

(statearr_106897[(1)] = (1));

return statearr_106897;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto____1 = (function (state_106886){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_106886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e106898){if((e106898 instanceof Object)){
var ex__32974__auto__ = e106898;
var statearr_106899_106908 = state_106886;
(statearr_106899_106908[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106909 = state_106886;
state_106886 = G__106909;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto__ = function(state_106886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto____1.call(this,state_106886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_106900 = f__33068__auto__.call(null);
(statearr_106900[(6)] = c__33067__auto___106901);

return statearr_106900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__106910,opts){
var map__106911 = p__106910;
var map__106911__$1 = cljs.core.__destructure_map.call(null,map__106911);
var eval_body = cljs.core.get.call(null,map__106911__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__106911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__5043__auto__ = eval_body;
if(cljs.core.truth_(and__5043__auto__)){
return typeof eval_body === 'string';
} else {
return and__5043__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e106912){var e = e106912;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5816__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__106913_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__106913_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5816__auto__)){
var file_msg = temp__5816__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
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
return cljs.core.map.call(null,(function (p__106914){
var vec__106915 = p__106914;
var k = cljs.core.nth.call(null,vec__106915,(0),null);
var v = cljs.core.nth.call(null,vec__106915,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__106918){
var vec__106919 = p__106918;
var k = cljs.core.nth.call(null,vec__106919,(0),null);
var v = cljs.core.nth.call(null,vec__106919,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__106925,p__106926){
var map__106927 = p__106925;
var map__106927__$1 = cljs.core.__destructure_map.call(null,map__106927);
var opts = map__106927__$1;
var before_jsload = cljs.core.get.call(null,map__106927__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__106927__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__106927__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__106928 = p__106926;
var map__106928__$1 = cljs.core.__destructure_map.call(null,map__106928);
var msg = map__106928__$1;
var files = cljs.core.get.call(null,map__106928__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__106928__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__106928__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33067__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33068__auto__ = (function (){var switch__32970__auto__ = (function (state_107060){
var state_val_107061 = (state_107060[(1)]);
if((state_val_107061 === (7))){
var inst_106943 = (state_107060[(7)]);
var inst_106942 = (state_107060[(8)]);
var inst_106941 = (state_107060[(9)]);
var inst_106940 = (state_107060[(10)]);
var inst_106948 = cljs.core._nth.call(null,inst_106941,inst_106943);
var inst_106949 = figwheel.client.file_reloading.eval_body.call(null,inst_106948,opts);
var inst_106950 = (inst_106943 + (1));
var tmp107062 = inst_106942;
var tmp107063 = inst_106941;
var tmp107064 = inst_106940;
var inst_106940__$1 = tmp107064;
var inst_106941__$1 = tmp107063;
var inst_106942__$1 = tmp107062;
var inst_106943__$1 = inst_106950;
var state_107060__$1 = (function (){var statearr_107065 = state_107060;
(statearr_107065[(7)] = inst_106943__$1);

(statearr_107065[(8)] = inst_106942__$1);

(statearr_107065[(11)] = inst_106949);

(statearr_107065[(9)] = inst_106941__$1);

(statearr_107065[(10)] = inst_106940__$1);

return statearr_107065;
})();
var statearr_107066_107133 = state_107060__$1;
(statearr_107066_107133[(2)] = null);

(statearr_107066_107133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (20))){
var inst_106983 = (state_107060[(12)]);
var inst_106991 = figwheel.client.file_reloading.sort_files.call(null,inst_106983);
var state_107060__$1 = state_107060;
var statearr_107067_107134 = state_107060__$1;
(statearr_107067_107134[(2)] = inst_106991);

(statearr_107067_107134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (27))){
var state_107060__$1 = state_107060;
var statearr_107068_107135 = state_107060__$1;
(statearr_107068_107135[(2)] = null);

(statearr_107068_107135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (1))){
var inst_106932 = (state_107060[(13)]);
var inst_106929 = before_jsload.call(null,files);
var inst_106930 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_106931 = (function (){return (function (p1__106922_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__106922_SHARP_);
});
})();
var inst_106932__$1 = cljs.core.filter.call(null,inst_106931,files);
var inst_106933 = cljs.core.not_empty.call(null,inst_106932__$1);
var state_107060__$1 = (function (){var statearr_107069 = state_107060;
(statearr_107069[(14)] = inst_106929);

(statearr_107069[(15)] = inst_106930);

(statearr_107069[(13)] = inst_106932__$1);

return statearr_107069;
})();
if(cljs.core.truth_(inst_106933)){
var statearr_107070_107136 = state_107060__$1;
(statearr_107070_107136[(1)] = (2));

} else {
var statearr_107071_107137 = state_107060__$1;
(statearr_107071_107137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (24))){
var state_107060__$1 = state_107060;
var statearr_107072_107138 = state_107060__$1;
(statearr_107072_107138[(2)] = null);

(statearr_107072_107138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (4))){
var inst_106977 = (state_107060[(2)]);
var inst_106978 = cljs.core.List.EMPTY;
var inst_106979 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_106978);
var inst_106980 = (function (){return (function (p1__106923_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__106923_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__106923_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__106923_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_106981 = cljs.core.filter.call(null,inst_106980,files);
var inst_106982 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_106983 = cljs.core.concat.call(null,inst_106981,inst_106982);
var state_107060__$1 = (function (){var statearr_107073 = state_107060;
(statearr_107073[(16)] = inst_106979);

(statearr_107073[(17)] = inst_106977);

(statearr_107073[(12)] = inst_106983);

return statearr_107073;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_107074_107139 = state_107060__$1;
(statearr_107074_107139[(1)] = (16));

} else {
var statearr_107075_107140 = state_107060__$1;
(statearr_107075_107140[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (15))){
var inst_106967 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
var statearr_107076_107141 = state_107060__$1;
(statearr_107076_107141[(2)] = inst_106967);

(statearr_107076_107141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (21))){
var inst_106993 = (state_107060[(18)]);
var inst_106993__$1 = (state_107060[(2)]);
var inst_106994 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_106993__$1);
var state_107060__$1 = (function (){var statearr_107077 = state_107060;
(statearr_107077[(18)] = inst_106993__$1);

return statearr_107077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107060__$1,(22),inst_106994);
} else {
if((state_val_107061 === (31))){
var inst_107058 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107060__$1,inst_107058);
} else {
if((state_val_107061 === (32))){
var inst_107035 = (state_107060[(19)]);
var inst_107039 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_107040 = cljs.core.map.call(null,inst_107039,inst_107035);
var inst_107041 = cljs.core.pr_str.call(null,inst_107040);
var inst_107042 = ["figwheel-no-load meta-data: ",inst_107041].join('');
var inst_107043 = figwheel.client.utils.log.call(null,inst_107042);
var state_107060__$1 = state_107060;
var statearr_107078_107142 = state_107060__$1;
(statearr_107078_107142[(2)] = inst_107043);

(statearr_107078_107142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (33))){
var state_107060__$1 = state_107060;
var statearr_107079_107143 = state_107060__$1;
(statearr_107079_107143[(2)] = null);

(statearr_107079_107143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (13))){
var inst_106953 = (state_107060[(20)]);
var inst_106957 = cljs.core.chunk_first.call(null,inst_106953);
var inst_106958 = cljs.core.chunk_rest.call(null,inst_106953);
var inst_106959 = cljs.core.count.call(null,inst_106957);
var inst_106940 = inst_106958;
var inst_106941 = inst_106957;
var inst_106942 = inst_106959;
var inst_106943 = (0);
var state_107060__$1 = (function (){var statearr_107080 = state_107060;
(statearr_107080[(7)] = inst_106943);

(statearr_107080[(8)] = inst_106942);

(statearr_107080[(9)] = inst_106941);

(statearr_107080[(10)] = inst_106940);

return statearr_107080;
})();
var statearr_107081_107144 = state_107060__$1;
(statearr_107081_107144[(2)] = null);

(statearr_107081_107144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (22))){
var inst_106996 = (state_107060[(21)]);
var inst_106997 = (state_107060[(22)]);
var inst_107001 = (state_107060[(23)]);
var inst_106993 = (state_107060[(18)]);
var inst_106996__$1 = (state_107060[(2)]);
var inst_106997__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_106996__$1);
var inst_106998 = (function (){var all_files = inst_106993;
var res_SINGLEQUOTE_ = inst_106996__$1;
var res = inst_106997__$1;
return (function (p1__106924_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__106924_SHARP_));
});
})();
var inst_106999 = cljs.core.filter.call(null,inst_106998,inst_106996__$1);
var inst_107000 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_107001__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_107000);
var inst_107002 = cljs.core.not_empty.call(null,inst_107001__$1);
var state_107060__$1 = (function (){var statearr_107082 = state_107060;
(statearr_107082[(21)] = inst_106996__$1);

(statearr_107082[(22)] = inst_106997__$1);

(statearr_107082[(23)] = inst_107001__$1);

(statearr_107082[(24)] = inst_106999);

return statearr_107082;
})();
if(cljs.core.truth_(inst_107002)){
var statearr_107083_107145 = state_107060__$1;
(statearr_107083_107145[(1)] = (23));

} else {
var statearr_107084_107146 = state_107060__$1;
(statearr_107084_107146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (36))){
var state_107060__$1 = state_107060;
var statearr_107085_107147 = state_107060__$1;
(statearr_107085_107147[(2)] = null);

(statearr_107085_107147[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (29))){
var inst_107035 = (state_107060[(19)]);
var inst_106996 = (state_107060[(21)]);
var inst_106997 = (state_107060[(22)]);
var inst_107001 = (state_107060[(23)]);
var inst_106993 = (state_107060[(18)]);
var inst_106999 = (state_107060[(24)]);
var inst_107029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_107032 = (function (){var all_files = inst_106993;
var res_SINGLEQUOTE_ = inst_106996;
var res = inst_106997;
var files_not_loaded = inst_106999;
var dependencies_that_loaded = inst_107001;
return (function (p__107031){
var map__107086 = p__107031;
var map__107086__$1 = cljs.core.__destructure_map.call(null,map__107086);
var namespace = cljs.core.get.call(null,map__107086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
})();
var inst_107033 = cljs.core.group_by.call(null,inst_107032,inst_106999);
var inst_107034 = cljs.core.__destructure_map.call(null,inst_107033);
var inst_107035__$1 = cljs.core.get.call(null,inst_107034,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_107036 = cljs.core.get.call(null,inst_107034,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_107037 = cljs.core.not_empty.call(null,inst_107035__$1);
var state_107060__$1 = (function (){var statearr_107087 = state_107060;
(statearr_107087[(19)] = inst_107035__$1);

(statearr_107087[(25)] = inst_107036);

(statearr_107087[(26)] = inst_107029);

return statearr_107087;
})();
if(cljs.core.truth_(inst_107037)){
var statearr_107088_107148 = state_107060__$1;
(statearr_107088_107148[(1)] = (32));

} else {
var statearr_107089_107149 = state_107060__$1;
(statearr_107089_107149[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (6))){
var inst_106974 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
var statearr_107090_107150 = state_107060__$1;
(statearr_107090_107150[(2)] = inst_106974);

(statearr_107090_107150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (28))){
var inst_106999 = (state_107060[(24)]);
var inst_107026 = (state_107060[(2)]);
var inst_107027 = cljs.core.not_empty.call(null,inst_106999);
var state_107060__$1 = (function (){var statearr_107091 = state_107060;
(statearr_107091[(27)] = inst_107026);

return statearr_107091;
})();
if(cljs.core.truth_(inst_107027)){
var statearr_107092_107151 = state_107060__$1;
(statearr_107092_107151[(1)] = (29));

} else {
var statearr_107093_107152 = state_107060__$1;
(statearr_107093_107152[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (25))){
var inst_106997 = (state_107060[(22)]);
var inst_107013 = (state_107060[(2)]);
var inst_107014 = cljs.core.not_empty.call(null,inst_106997);
var state_107060__$1 = (function (){var statearr_107094 = state_107060;
(statearr_107094[(28)] = inst_107013);

return statearr_107094;
})();
if(cljs.core.truth_(inst_107014)){
var statearr_107095_107153 = state_107060__$1;
(statearr_107095_107153[(1)] = (26));

} else {
var statearr_107096_107154 = state_107060__$1;
(statearr_107096_107154[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (34))){
var inst_107036 = (state_107060[(25)]);
var inst_107046 = (state_107060[(2)]);
var inst_107047 = cljs.core.not_empty.call(null,inst_107036);
var state_107060__$1 = (function (){var statearr_107097 = state_107060;
(statearr_107097[(29)] = inst_107046);

return statearr_107097;
})();
if(cljs.core.truth_(inst_107047)){
var statearr_107098_107155 = state_107060__$1;
(statearr_107098_107155[(1)] = (35));

} else {
var statearr_107099_107156 = state_107060__$1;
(statearr_107099_107156[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (17))){
var state_107060__$1 = state_107060;
var statearr_107100_107157 = state_107060__$1;
(statearr_107100_107157[(2)] = recompile_dependents);

(statearr_107100_107157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (3))){
var state_107060__$1 = state_107060;
var statearr_107101_107158 = state_107060__$1;
(statearr_107101_107158[(2)] = null);

(statearr_107101_107158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (12))){
var inst_106970 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
var statearr_107102_107159 = state_107060__$1;
(statearr_107102_107159[(2)] = inst_106970);

(statearr_107102_107159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (2))){
var inst_106932 = (state_107060[(13)]);
var inst_106939 = cljs.core.seq.call(null,inst_106932);
var inst_106940 = inst_106939;
var inst_106941 = null;
var inst_106942 = (0);
var inst_106943 = (0);
var state_107060__$1 = (function (){var statearr_107103 = state_107060;
(statearr_107103[(7)] = inst_106943);

(statearr_107103[(8)] = inst_106942);

(statearr_107103[(9)] = inst_106941);

(statearr_107103[(10)] = inst_106940);

return statearr_107103;
})();
var statearr_107104_107160 = state_107060__$1;
(statearr_107104_107160[(2)] = null);

(statearr_107104_107160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (23))){
var inst_106996 = (state_107060[(21)]);
var inst_106997 = (state_107060[(22)]);
var inst_107001 = (state_107060[(23)]);
var inst_106993 = (state_107060[(18)]);
var inst_106999 = (state_107060[(24)]);
var inst_107004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_107006 = (function (){var all_files = inst_106993;
var res_SINGLEQUOTE_ = inst_106996;
var res = inst_106997;
var files_not_loaded = inst_106999;
var dependencies_that_loaded = inst_107001;
return (function (p__107005){
var map__107105 = p__107005;
var map__107105__$1 = cljs.core.__destructure_map.call(null,map__107105);
var request_url = cljs.core.get.call(null,map__107105__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_107007 = cljs.core.reverse.call(null,inst_107001);
var inst_107008 = cljs.core.map.call(null,inst_107006,inst_107007);
var inst_107009 = cljs.core.pr_str.call(null,inst_107008);
var inst_107010 = figwheel.client.utils.log.call(null,inst_107009);
var state_107060__$1 = (function (){var statearr_107106 = state_107060;
(statearr_107106[(30)] = inst_107004);

return statearr_107106;
})();
var statearr_107107_107161 = state_107060__$1;
(statearr_107107_107161[(2)] = inst_107010);

(statearr_107107_107161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (35))){
var inst_107036 = (state_107060[(25)]);
var inst_107049 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_107036);
var inst_107050 = cljs.core.pr_str.call(null,inst_107049);
var inst_107051 = ["not required: ",inst_107050].join('');
var inst_107052 = figwheel.client.utils.log.call(null,inst_107051);
var state_107060__$1 = state_107060;
var statearr_107108_107162 = state_107060__$1;
(statearr_107108_107162[(2)] = inst_107052);

(statearr_107108_107162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (19))){
var inst_106983 = (state_107060[(12)]);
var inst_106989 = figwheel.client.file_reloading.expand_files.call(null,inst_106983);
var state_107060__$1 = state_107060;
var statearr_107109_107163 = state_107060__$1;
(statearr_107109_107163[(2)] = inst_106989);

(statearr_107109_107163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (11))){
var state_107060__$1 = state_107060;
var statearr_107110_107164 = state_107060__$1;
(statearr_107110_107164[(2)] = null);

(statearr_107110_107164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (9))){
var inst_106972 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
var statearr_107111_107165 = state_107060__$1;
(statearr_107111_107165[(2)] = inst_106972);

(statearr_107111_107165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (5))){
var inst_106943 = (state_107060[(7)]);
var inst_106942 = (state_107060[(8)]);
var inst_106945 = (inst_106943 < inst_106942);
var inst_106946 = inst_106945;
var state_107060__$1 = state_107060;
if(cljs.core.truth_(inst_106946)){
var statearr_107112_107166 = state_107060__$1;
(statearr_107112_107166[(1)] = (7));

} else {
var statearr_107113_107167 = state_107060__$1;
(statearr_107113_107167[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (14))){
var inst_106953 = (state_107060[(20)]);
var inst_106962 = cljs.core.first.call(null,inst_106953);
var inst_106963 = figwheel.client.file_reloading.eval_body.call(null,inst_106962,opts);
var inst_106964 = cljs.core.next.call(null,inst_106953);
var inst_106940 = inst_106964;
var inst_106941 = null;
var inst_106942 = (0);
var inst_106943 = (0);
var state_107060__$1 = (function (){var statearr_107114 = state_107060;
(statearr_107114[(7)] = inst_106943);

(statearr_107114[(8)] = inst_106942);

(statearr_107114[(31)] = inst_106963);

(statearr_107114[(9)] = inst_106941);

(statearr_107114[(10)] = inst_106940);

return statearr_107114;
})();
var statearr_107115_107168 = state_107060__$1;
(statearr_107115_107168[(2)] = null);

(statearr_107115_107168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (26))){
var inst_106996 = (state_107060[(21)]);
var inst_106997 = (state_107060[(22)]);
var inst_107001 = (state_107060[(23)]);
var inst_106993 = (state_107060[(18)]);
var inst_106999 = (state_107060[(24)]);
var inst_107016 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_107018 = (function (){var all_files = inst_106993;
var res_SINGLEQUOTE_ = inst_106996;
var res = inst_106997;
var files_not_loaded = inst_106999;
var dependencies_that_loaded = inst_107001;
return (function (p__107017){
var map__107116 = p__107017;
var map__107116__$1 = cljs.core.__destructure_map.call(null,map__107116);
var namespace = cljs.core.get.call(null,map__107116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__107116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_107019 = cljs.core.map.call(null,inst_107018,inst_106997);
var inst_107020 = cljs.core.pr_str.call(null,inst_107019);
var inst_107021 = figwheel.client.utils.log.call(null,inst_107020);
var inst_107022 = (function (){var all_files = inst_106993;
var res_SINGLEQUOTE_ = inst_106996;
var res = inst_106997;
var files_not_loaded = inst_106999;
var dependencies_that_loaded = inst_107001;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_107023 = setTimeout(inst_107022,(10));
var state_107060__$1 = (function (){var statearr_107117 = state_107060;
(statearr_107117[(32)] = inst_107016);

(statearr_107117[(33)] = inst_107021);

return statearr_107117;
})();
var statearr_107118_107169 = state_107060__$1;
(statearr_107118_107169[(2)] = inst_107023);

(statearr_107118_107169[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (16))){
var state_107060__$1 = state_107060;
var statearr_107119_107170 = state_107060__$1;
(statearr_107119_107170[(2)] = reload_dependents);

(statearr_107119_107170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (30))){
var state_107060__$1 = state_107060;
var statearr_107120_107171 = state_107060__$1;
(statearr_107120_107171[(2)] = null);

(statearr_107120_107171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (10))){
var inst_106953 = (state_107060[(20)]);
var inst_106955 = cljs.core.chunked_seq_QMARK_.call(null,inst_106953);
var state_107060__$1 = state_107060;
if(inst_106955){
var statearr_107121_107172 = state_107060__$1;
(statearr_107121_107172[(1)] = (13));

} else {
var statearr_107122_107173 = state_107060__$1;
(statearr_107122_107173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (18))){
var inst_106987 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
if(cljs.core.truth_(inst_106987)){
var statearr_107123_107174 = state_107060__$1;
(statearr_107123_107174[(1)] = (19));

} else {
var statearr_107124_107175 = state_107060__$1;
(statearr_107124_107175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (37))){
var inst_107055 = (state_107060[(2)]);
var state_107060__$1 = state_107060;
var statearr_107125_107176 = state_107060__$1;
(statearr_107125_107176[(2)] = inst_107055);

(statearr_107125_107176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107061 === (8))){
var inst_106953 = (state_107060[(20)]);
var inst_106940 = (state_107060[(10)]);
var inst_106953__$1 = cljs.core.seq.call(null,inst_106940);
var state_107060__$1 = (function (){var statearr_107126 = state_107060;
(statearr_107126[(20)] = inst_106953__$1);

return statearr_107126;
})();
if(inst_106953__$1){
var statearr_107127_107177 = state_107060__$1;
(statearr_107127_107177[(1)] = (10));

} else {
var statearr_107128_107178 = state_107060__$1;
(statearr_107128_107178[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto____0 = (function (){
var statearr_107129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107129[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto__);

(statearr_107129[(1)] = (1));

return statearr_107129;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto____1 = (function (state_107060){
while(true){
var ret_value__32972__auto__ = (function (){try{while(true){
var result__32973__auto__ = switch__32970__auto__.call(null,state_107060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32973__auto__;
}
break;
}
}catch (e107130){if((e107130 instanceof Object)){
var ex__32974__auto__ = e107130;
var statearr_107131_107179 = state_107060;
(statearr_107131_107179[(5)] = ex__32974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107180 = state_107060;
state_107060 = G__107180;
continue;
} else {
return ret_value__32972__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto__ = function(state_107060){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto____1.call(this,state_107060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32971__auto__;
})()
})();
var state__33069__auto__ = (function (){var statearr_107132 = f__33068__auto__.call(null);
(statearr_107132[(6)] = c__33067__auto__);

return statearr_107132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33069__auto__);
}));

return c__33067__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__107183,link){
var map__107184 = p__107183;
var map__107184__$1 = cljs.core.__destructure_map.call(null,map__107184);
var file = cljs.core.get.call(null,map__107184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5818__auto__ = link.href;
if(cljs.core.truth_(temp__5818__auto__)){
var link_href = temp__5818__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__107181_SHARP_,p2__107182_SHARP_){
if(cljs.core._EQ_.call(null,p1__107181_SHARP_,p2__107182_SHARP_)){
return p1__107181_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5818__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__107186){
var map__107187 = p__107186;
var map__107187__$1 = cljs.core.__destructure_map.call(null,map__107187);
var match_length = cljs.core.get.call(null,map__107187__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__107187__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__107185_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__107185_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5818__auto__)){
var res = temp__5818__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__107188_SHARP_,p2__107189_SHARP_){
return cljs.core.assoc.call(null,p1__107188_SHARP_,cljs.core.get.call(null,p2__107189_SHARP_,key),p2__107189_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5816__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5816__auto__)){
var link = temp__5816__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_107190 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_107190);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_107190);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__107191,p__107192){
var map__107193 = p__107191;
var map__107193__$1 = cljs.core.__destructure_map.call(null,map__107193);
var on_cssload = cljs.core.get.call(null,map__107193__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__107194 = p__107192;
var map__107194__$1 = cljs.core.__destructure_map.call(null,map__107194);
var files_msg = map__107194__$1;
var files = cljs.core.get.call(null,map__107194__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5818__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5818__auto__)){
var f_datas = temp__5818__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1767875395658
