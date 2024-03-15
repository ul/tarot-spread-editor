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
var G__41870 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__41870 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__41870,"requires");
}
}):(function (path){
var G__41871 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__41871 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__41871);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41872_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41872_SHARP_)));
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
var G__41873 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__41873__$1 = (((G__41873 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__41873,"provides"));
if((G__41873__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__41873__$1);
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
var seq__41874 = cljs.core.seq.call(null,provides);
var chunk__41875 = null;
var count__41876 = (0);
var i__41877 = (0);
while(true){
if((i__41877 < count__41876)){
var prov = cljs.core._nth.call(null,chunk__41875,i__41877);
var seq__41886_41898 = cljs.core.seq.call(null,requires);
var chunk__41887_41899 = null;
var count__41888_41900 = (0);
var i__41889_41901 = (0);
while(true){
if((i__41889_41901 < count__41888_41900)){
var req_41902 = cljs.core._nth.call(null,chunk__41887_41899,i__41889_41901);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41902,prov);


var G__41903 = seq__41886_41898;
var G__41904 = chunk__41887_41899;
var G__41905 = count__41888_41900;
var G__41906 = (i__41889_41901 + (1));
seq__41886_41898 = G__41903;
chunk__41887_41899 = G__41904;
count__41888_41900 = G__41905;
i__41889_41901 = G__41906;
continue;
} else {
var temp__5818__auto___41907 = cljs.core.seq.call(null,seq__41886_41898);
if(temp__5818__auto___41907){
var seq__41886_41908__$1 = temp__5818__auto___41907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41886_41908__$1)){
var c__5568__auto___41909 = cljs.core.chunk_first.call(null,seq__41886_41908__$1);
var G__41910 = cljs.core.chunk_rest.call(null,seq__41886_41908__$1);
var G__41911 = c__5568__auto___41909;
var G__41912 = cljs.core.count.call(null,c__5568__auto___41909);
var G__41913 = (0);
seq__41886_41898 = G__41910;
chunk__41887_41899 = G__41911;
count__41888_41900 = G__41912;
i__41889_41901 = G__41913;
continue;
} else {
var req_41914 = cljs.core.first.call(null,seq__41886_41908__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41914,prov);


var G__41915 = cljs.core.next.call(null,seq__41886_41908__$1);
var G__41916 = null;
var G__41917 = (0);
var G__41918 = (0);
seq__41886_41898 = G__41915;
chunk__41887_41899 = G__41916;
count__41888_41900 = G__41917;
i__41889_41901 = G__41918;
continue;
}
} else {
}
}
break;
}


var G__41919 = seq__41874;
var G__41920 = chunk__41875;
var G__41921 = count__41876;
var G__41922 = (i__41877 + (1));
seq__41874 = G__41919;
chunk__41875 = G__41920;
count__41876 = G__41921;
i__41877 = G__41922;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__41874);
if(temp__5818__auto__){
var seq__41874__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41874__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__41874__$1);
var G__41923 = cljs.core.chunk_rest.call(null,seq__41874__$1);
var G__41924 = c__5568__auto__;
var G__41925 = cljs.core.count.call(null,c__5568__auto__);
var G__41926 = (0);
seq__41874 = G__41923;
chunk__41875 = G__41924;
count__41876 = G__41925;
i__41877 = G__41926;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41874__$1);
var seq__41890_41927 = cljs.core.seq.call(null,requires);
var chunk__41891_41928 = null;
var count__41892_41929 = (0);
var i__41893_41930 = (0);
while(true){
if((i__41893_41930 < count__41892_41929)){
var req_41931 = cljs.core._nth.call(null,chunk__41891_41928,i__41893_41930);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41931,prov);


var G__41932 = seq__41890_41927;
var G__41933 = chunk__41891_41928;
var G__41934 = count__41892_41929;
var G__41935 = (i__41893_41930 + (1));
seq__41890_41927 = G__41932;
chunk__41891_41928 = G__41933;
count__41892_41929 = G__41934;
i__41893_41930 = G__41935;
continue;
} else {
var temp__5818__auto___41936__$1 = cljs.core.seq.call(null,seq__41890_41927);
if(temp__5818__auto___41936__$1){
var seq__41890_41937__$1 = temp__5818__auto___41936__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41890_41937__$1)){
var c__5568__auto___41938 = cljs.core.chunk_first.call(null,seq__41890_41937__$1);
var G__41939 = cljs.core.chunk_rest.call(null,seq__41890_41937__$1);
var G__41940 = c__5568__auto___41938;
var G__41941 = cljs.core.count.call(null,c__5568__auto___41938);
var G__41942 = (0);
seq__41890_41927 = G__41939;
chunk__41891_41928 = G__41940;
count__41892_41929 = G__41941;
i__41893_41930 = G__41942;
continue;
} else {
var req_41943 = cljs.core.first.call(null,seq__41890_41937__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41943,prov);


var G__41944 = cljs.core.next.call(null,seq__41890_41937__$1);
var G__41945 = null;
var G__41946 = (0);
var G__41947 = (0);
seq__41890_41927 = G__41944;
chunk__41891_41928 = G__41945;
count__41892_41929 = G__41946;
i__41893_41930 = G__41947;
continue;
}
} else {
}
}
break;
}


var G__41948 = cljs.core.next.call(null,seq__41874__$1);
var G__41949 = null;
var G__41950 = (0);
var G__41951 = (0);
seq__41874 = G__41948;
chunk__41875 = G__41949;
count__41876 = G__41950;
i__41877 = G__41951;
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
var seq__41894 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__41895 = null;
var count__41896 = (0);
var i__41897 = (0);
while(true){
if((i__41897 < count__41896)){
var prov = cljs.core._nth.call(null,chunk__41895,i__41897);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__41894,chunk__41895,count__41896,i__41897,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__41894,chunk__41895,count__41896,i__41897,prov,requires))
);


var G__41952 = seq__41894;
var G__41953 = chunk__41895;
var G__41954 = count__41896;
var G__41955 = (i__41897 + (1));
seq__41894 = G__41952;
chunk__41895 = G__41953;
count__41896 = G__41954;
i__41897 = G__41955;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__41894);
if(temp__5818__auto__){
var seq__41894__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41894__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__41894__$1);
var G__41956 = cljs.core.chunk_rest.call(null,seq__41894__$1);
var G__41957 = c__5568__auto__;
var G__41958 = cljs.core.count.call(null,c__5568__auto__);
var G__41959 = (0);
seq__41894 = G__41956;
chunk__41895 = G__41957;
count__41896 = G__41958;
i__41897 = G__41959;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41894__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__41894,chunk__41895,count__41896,i__41897,prov,seq__41894__$1,temp__5818__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__41894,chunk__41895,count__41896,i__41897,prov,seq__41894__$1,temp__5818__auto__,requires))
);


var G__41960 = cljs.core.next.call(null,seq__41894__$1);
var G__41961 = null;
var G__41962 = (0);
var G__41963 = (0);
seq__41894 = G__41960;
chunk__41895 = G__41961;
count__41896 = G__41962;
i__41897 = G__41963;
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
return cljs.core.some.call(null,(function (p__41964){
var vec__41965 = p__41964;
var _ = cljs.core.nth.call(null,vec__41965,(0),null);
var v = cljs.core.nth.call(null,vec__41965,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__41968){
var vec__41969 = p__41968;
var k = cljs.core.nth.call(null,vec__41969,(0),null);
var v = cljs.core.nth.call(null,vec__41969,(1),null);
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

var seq__41981_41989 = cljs.core.seq.call(null,deps);
var chunk__41982_41990 = null;
var count__41983_41991 = (0);
var i__41984_41992 = (0);
while(true){
if((i__41984_41992 < count__41983_41991)){
var dep_41993 = cljs.core._nth.call(null,chunk__41982_41990,i__41984_41992);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_41993;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41993));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41993,(depth + (1)),state);
} else {
}


var G__41994 = seq__41981_41989;
var G__41995 = chunk__41982_41990;
var G__41996 = count__41983_41991;
var G__41997 = (i__41984_41992 + (1));
seq__41981_41989 = G__41994;
chunk__41982_41990 = G__41995;
count__41983_41991 = G__41996;
i__41984_41992 = G__41997;
continue;
} else {
var temp__5818__auto___41998 = cljs.core.seq.call(null,seq__41981_41989);
if(temp__5818__auto___41998){
var seq__41981_41999__$1 = temp__5818__auto___41998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41981_41999__$1)){
var c__5568__auto___42000 = cljs.core.chunk_first.call(null,seq__41981_41999__$1);
var G__42001 = cljs.core.chunk_rest.call(null,seq__41981_41999__$1);
var G__42002 = c__5568__auto___42000;
var G__42003 = cljs.core.count.call(null,c__5568__auto___42000);
var G__42004 = (0);
seq__41981_41989 = G__42001;
chunk__41982_41990 = G__42002;
count__41983_41991 = G__42003;
i__41984_41992 = G__42004;
continue;
} else {
var dep_42005 = cljs.core.first.call(null,seq__41981_41999__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_42005;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42005));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42005,(depth + (1)),state);
} else {
}


var G__42006 = cljs.core.next.call(null,seq__41981_41999__$1);
var G__42007 = null;
var G__42008 = (0);
var G__42009 = (0);
seq__41981_41989 = G__42006;
chunk__41982_41990 = G__42007;
count__41983_41991 = G__42008;
i__41984_41992 = G__42009;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41985){
var vec__41986 = p__41985;
var seq__41987 = cljs.core.seq.call(null,vec__41986);
var first__41988 = cljs.core.first.call(null,seq__41987);
var seq__41987__$1 = cljs.core.next.call(null,seq__41987);
var x = first__41988;
var xs = seq__41987__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__41972_SHARP_){
return clojure.set.difference.call(null,p1__41972_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__42010_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__42010_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42011 = cljs.core.seq.call(null,provides);
var chunk__42012 = null;
var count__42013 = (0);
var i__42014 = (0);
while(true){
if((i__42014 < count__42013)){
var prov = cljs.core._nth.call(null,chunk__42012,i__42014);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42023_42031 = cljs.core.seq.call(null,requires);
var chunk__42024_42032 = null;
var count__42025_42033 = (0);
var i__42026_42034 = (0);
while(true){
if((i__42026_42034 < count__42025_42033)){
var req_42035 = cljs.core._nth.call(null,chunk__42024_42032,i__42026_42034);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42035,prov);


var G__42036 = seq__42023_42031;
var G__42037 = chunk__42024_42032;
var G__42038 = count__42025_42033;
var G__42039 = (i__42026_42034 + (1));
seq__42023_42031 = G__42036;
chunk__42024_42032 = G__42037;
count__42025_42033 = G__42038;
i__42026_42034 = G__42039;
continue;
} else {
var temp__5818__auto___42040 = cljs.core.seq.call(null,seq__42023_42031);
if(temp__5818__auto___42040){
var seq__42023_42041__$1 = temp__5818__auto___42040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42023_42041__$1)){
var c__5568__auto___42042 = cljs.core.chunk_first.call(null,seq__42023_42041__$1);
var G__42043 = cljs.core.chunk_rest.call(null,seq__42023_42041__$1);
var G__42044 = c__5568__auto___42042;
var G__42045 = cljs.core.count.call(null,c__5568__auto___42042);
var G__42046 = (0);
seq__42023_42031 = G__42043;
chunk__42024_42032 = G__42044;
count__42025_42033 = G__42045;
i__42026_42034 = G__42046;
continue;
} else {
var req_42047 = cljs.core.first.call(null,seq__42023_42041__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42047,prov);


var G__42048 = cljs.core.next.call(null,seq__42023_42041__$1);
var G__42049 = null;
var G__42050 = (0);
var G__42051 = (0);
seq__42023_42031 = G__42048;
chunk__42024_42032 = G__42049;
count__42025_42033 = G__42050;
i__42026_42034 = G__42051;
continue;
}
} else {
}
}
break;
}


var G__42052 = seq__42011;
var G__42053 = chunk__42012;
var G__42054 = count__42013;
var G__42055 = (i__42014 + (1));
seq__42011 = G__42052;
chunk__42012 = G__42053;
count__42013 = G__42054;
i__42014 = G__42055;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__42011);
if(temp__5818__auto__){
var seq__42011__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42011__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__42011__$1);
var G__42056 = cljs.core.chunk_rest.call(null,seq__42011__$1);
var G__42057 = c__5568__auto__;
var G__42058 = cljs.core.count.call(null,c__5568__auto__);
var G__42059 = (0);
seq__42011 = G__42056;
chunk__42012 = G__42057;
count__42013 = G__42058;
i__42014 = G__42059;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42011__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42027_42060 = cljs.core.seq.call(null,requires);
var chunk__42028_42061 = null;
var count__42029_42062 = (0);
var i__42030_42063 = (0);
while(true){
if((i__42030_42063 < count__42029_42062)){
var req_42064 = cljs.core._nth.call(null,chunk__42028_42061,i__42030_42063);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42064,prov);


var G__42065 = seq__42027_42060;
var G__42066 = chunk__42028_42061;
var G__42067 = count__42029_42062;
var G__42068 = (i__42030_42063 + (1));
seq__42027_42060 = G__42065;
chunk__42028_42061 = G__42066;
count__42029_42062 = G__42067;
i__42030_42063 = G__42068;
continue;
} else {
var temp__5818__auto___42069__$1 = cljs.core.seq.call(null,seq__42027_42060);
if(temp__5818__auto___42069__$1){
var seq__42027_42070__$1 = temp__5818__auto___42069__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42027_42070__$1)){
var c__5568__auto___42071 = cljs.core.chunk_first.call(null,seq__42027_42070__$1);
var G__42072 = cljs.core.chunk_rest.call(null,seq__42027_42070__$1);
var G__42073 = c__5568__auto___42071;
var G__42074 = cljs.core.count.call(null,c__5568__auto___42071);
var G__42075 = (0);
seq__42027_42060 = G__42072;
chunk__42028_42061 = G__42073;
count__42029_42062 = G__42074;
i__42030_42063 = G__42075;
continue;
} else {
var req_42076 = cljs.core.first.call(null,seq__42027_42070__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42076,prov);


var G__42077 = cljs.core.next.call(null,seq__42027_42070__$1);
var G__42078 = null;
var G__42079 = (0);
var G__42080 = (0);
seq__42027_42060 = G__42077;
chunk__42028_42061 = G__42078;
count__42029_42062 = G__42079;
i__42030_42063 = G__42080;
continue;
}
} else {
}
}
break;
}


var G__42081 = cljs.core.next.call(null,seq__42011__$1);
var G__42082 = null;
var G__42083 = (0);
var G__42084 = (0);
seq__42011 = G__42081;
chunk__42012 = G__42082;
count__42013 = G__42083;
i__42014 = G__42084;
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
var seq__42085_42089 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42086_42090 = null;
var count__42087_42091 = (0);
var i__42088_42092 = (0);
while(true){
if((i__42088_42092 < count__42087_42091)){
var ns_42093 = cljs.core._nth.call(null,chunk__42086_42090,i__42088_42092);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42093);


var G__42094 = seq__42085_42089;
var G__42095 = chunk__42086_42090;
var G__42096 = count__42087_42091;
var G__42097 = (i__42088_42092 + (1));
seq__42085_42089 = G__42094;
chunk__42086_42090 = G__42095;
count__42087_42091 = G__42096;
i__42088_42092 = G__42097;
continue;
} else {
var temp__5818__auto___42098 = cljs.core.seq.call(null,seq__42085_42089);
if(temp__5818__auto___42098){
var seq__42085_42099__$1 = temp__5818__auto___42098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42085_42099__$1)){
var c__5568__auto___42100 = cljs.core.chunk_first.call(null,seq__42085_42099__$1);
var G__42101 = cljs.core.chunk_rest.call(null,seq__42085_42099__$1);
var G__42102 = c__5568__auto___42100;
var G__42103 = cljs.core.count.call(null,c__5568__auto___42100);
var G__42104 = (0);
seq__42085_42089 = G__42101;
chunk__42086_42090 = G__42102;
count__42087_42091 = G__42103;
i__42088_42092 = G__42104;
continue;
} else {
var ns_42105 = cljs.core.first.call(null,seq__42085_42099__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42105);


var G__42106 = cljs.core.next.call(null,seq__42085_42099__$1);
var G__42107 = null;
var G__42108 = (0);
var G__42109 = (0);
seq__42085_42089 = G__42106;
chunk__42086_42090 = G__42107;
count__42087_42091 = G__42108;
i__42088_42092 = G__42109;
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
var G__42110__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42111__i = 0, G__42111__a = new Array(arguments.length -  0);
while (G__42111__i < G__42111__a.length) {G__42111__a[G__42111__i] = arguments[G__42111__i + 0]; ++G__42111__i;}
  args = new cljs.core.IndexedSeq(G__42111__a,0,null);
} 
return G__42110__delegate.call(this,args);};
G__42110.cljs$lang$maxFixedArity = 0;
G__42110.cljs$lang$applyTo = (function (arglist__42112){
var args = cljs.core.seq(arglist__42112);
return G__42110__delegate(args);
});
G__42110.cljs$core$IFn$_invoke$arity$variadic = G__42110__delegate;
return G__42110;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__42113_SHARP_,p2__42114_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42113_SHARP_)),p2__42114_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__42115_SHARP_,p2__42116_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42115_SHARP_),p2__42116_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42117 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42117.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__42117.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__42117;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42118){if((e42118 instanceof Error)){
var e = e42118;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42118;

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
}catch (e42119){if((e42119 instanceof Error)){
var e = e42119;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42119;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42120 = cljs.core._EQ_;
var expr__42121 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42120.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42121))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42120.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42121))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42120.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42121))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42123,callback){
var map__42124 = p__42123;
var map__42124__$1 = cljs.core.__destructure_map.call(null,map__42124);
var file_msg = map__42124__$1;
var request_url = cljs.core.get.call(null,map__42124__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_42161){
var state_val_42162 = (state_42161[(1)]);
if((state_val_42162 === (7))){
var inst_42157 = (state_42161[(2)]);
var state_42161__$1 = state_42161;
var statearr_42163_42189 = state_42161__$1;
(statearr_42163_42189[(2)] = inst_42157);

(statearr_42163_42189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (1))){
var state_42161__$1 = state_42161;
var statearr_42164_42190 = state_42161__$1;
(statearr_42164_42190[(2)] = null);

(statearr_42164_42190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (4))){
var inst_42127 = (state_42161[(7)]);
var inst_42127__$1 = (state_42161[(2)]);
var state_42161__$1 = (function (){var statearr_42165 = state_42161;
(statearr_42165[(7)] = inst_42127__$1);

return statearr_42165;
})();
if(cljs.core.truth_(inst_42127__$1)){
var statearr_42166_42191 = state_42161__$1;
(statearr_42166_42191[(1)] = (5));

} else {
var statearr_42167_42192 = state_42161__$1;
(statearr_42167_42192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (15))){
var inst_42140 = (state_42161[(8)]);
var inst_42142 = (state_42161[(9)]);
var inst_42144 = inst_42142.call(null,inst_42140);
var state_42161__$1 = state_42161;
var statearr_42168_42193 = state_42161__$1;
(statearr_42168_42193[(2)] = inst_42144);

(statearr_42168_42193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (13))){
var inst_42151 = (state_42161[(2)]);
var state_42161__$1 = state_42161;
var statearr_42169_42194 = state_42161__$1;
(statearr_42169_42194[(2)] = inst_42151);

(statearr_42169_42194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (6))){
var state_42161__$1 = state_42161;
var statearr_42170_42195 = state_42161__$1;
(statearr_42170_42195[(2)] = null);

(statearr_42170_42195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (17))){
var inst_42148 = (state_42161[(2)]);
var state_42161__$1 = state_42161;
var statearr_42171_42196 = state_42161__$1;
(statearr_42171_42196[(2)] = inst_42148);

(statearr_42171_42196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (3))){
var inst_42159 = (state_42161[(2)]);
var state_42161__$1 = state_42161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42161__$1,inst_42159);
} else {
if((state_val_42162 === (12))){
var state_42161__$1 = state_42161;
var statearr_42172_42197 = state_42161__$1;
(statearr_42172_42197[(2)] = null);

(statearr_42172_42197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (2))){
var state_42161__$1 = state_42161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42161__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42162 === (11))){
var inst_42132 = (state_42161[(10)]);
var inst_42138 = figwheel.client.file_reloading.blocking_load.call(null,inst_42132);
var state_42161__$1 = state_42161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42161__$1,(14),inst_42138);
} else {
if((state_val_42162 === (9))){
var inst_42132 = (state_42161[(10)]);
var state_42161__$1 = state_42161;
if(cljs.core.truth_(inst_42132)){
var statearr_42173_42198 = state_42161__$1;
(statearr_42173_42198[(1)] = (11));

} else {
var statearr_42174_42199 = state_42161__$1;
(statearr_42174_42199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (5))){
var inst_42127 = (state_42161[(7)]);
var inst_42133 = (state_42161[(11)]);
var inst_42132 = cljs.core.nth.call(null,inst_42127,(0),null);
var inst_42133__$1 = cljs.core.nth.call(null,inst_42127,(1),null);
var state_42161__$1 = (function (){var statearr_42175 = state_42161;
(statearr_42175[(10)] = inst_42132);

(statearr_42175[(11)] = inst_42133__$1);

return statearr_42175;
})();
if(cljs.core.truth_(inst_42133__$1)){
var statearr_42176_42200 = state_42161__$1;
(statearr_42176_42200[(1)] = (8));

} else {
var statearr_42177_42201 = state_42161__$1;
(statearr_42177_42201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (14))){
var inst_42132 = (state_42161[(10)]);
var inst_42142 = (state_42161[(9)]);
var inst_42140 = (state_42161[(2)]);
var inst_42141 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42142__$1 = cljs.core.get.call(null,inst_42141,inst_42132);
var state_42161__$1 = (function (){var statearr_42178 = state_42161;
(statearr_42178[(8)] = inst_42140);

(statearr_42178[(9)] = inst_42142__$1);

return statearr_42178;
})();
if(cljs.core.truth_(inst_42142__$1)){
var statearr_42179_42202 = state_42161__$1;
(statearr_42179_42202[(1)] = (15));

} else {
var statearr_42180_42203 = state_42161__$1;
(statearr_42180_42203[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (16))){
var inst_42140 = (state_42161[(8)]);
var inst_42146 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42140);
var state_42161__$1 = state_42161;
var statearr_42181_42204 = state_42161__$1;
(statearr_42181_42204[(2)] = inst_42146);

(statearr_42181_42204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (10))){
var inst_42153 = (state_42161[(2)]);
var state_42161__$1 = (function (){var statearr_42182 = state_42161;
(statearr_42182[(12)] = inst_42153);

return statearr_42182;
})();
var statearr_42183_42205 = state_42161__$1;
(statearr_42183_42205[(2)] = null);

(statearr_42183_42205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42162 === (8))){
var inst_42133 = (state_42161[(11)]);
var inst_42135 = eval(inst_42133);
var state_42161__$1 = state_42161;
var statearr_42184_42206 = state_42161__$1;
(statearr_42184_42206[(2)] = inst_42135);

(statearr_42184_42206[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__39814__auto__ = null;
var figwheel$client$file_reloading$state_machine__39814__auto____0 = (function (){
var statearr_42185 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42185[(0)] = figwheel$client$file_reloading$state_machine__39814__auto__);

(statearr_42185[(1)] = (1));

return statearr_42185;
});
var figwheel$client$file_reloading$state_machine__39814__auto____1 = (function (state_42161){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_42161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e42186){if((e42186 instanceof Object)){
var ex__39817__auto__ = e42186;
var statearr_42187_42207 = state_42161;
(statearr_42187_42207[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42208 = state_42161;
state_42161 = G__42208;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39814__auto__ = function(state_42161){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39814__auto____1.call(this,state_42161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39814__auto____0;
figwheel$client$file_reloading$state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39814__auto____1;
return figwheel$client$file_reloading$state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_42188 = f__39911__auto__.call(null);
(statearr_42188[(6)] = c__39910__auto__);

return statearr_42188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42210 = arguments.length;
switch (G__42210) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42212,callback){
var map__42213 = p__42212;
var map__42213__$1 = cljs.core.__destructure_map.call(null,map__42213);
var file_msg = map__42213__$1;
var namespace = cljs.core.get.call(null,map__42213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42214){
var map__42215 = p__42214;
var map__42215__$1 = cljs.core.__destructure_map.call(null,map__42215);
var file_msg = map__42215__$1;
var namespace = cljs.core.get.call(null,map__42215__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42216){
var map__42217 = p__42216;
var map__42217__$1 = cljs.core.__destructure_map.call(null,map__42217);
var file_msg = map__42217__$1;
var namespace = cljs.core.get.call(null,map__42217__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42218,callback){
var map__42219 = p__42218;
var map__42219__$1 = cljs.core.__destructure_map.call(null,map__42219);
var file_msg = map__42219__$1;
var request_url = cljs.core.get.call(null,map__42219__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__39910__auto___42268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_42253){
var state_val_42254 = (state_42253[(1)]);
if((state_val_42254 === (1))){
var inst_42227 = cljs.core.seq.call(null,files);
var inst_42228 = cljs.core.first.call(null,inst_42227);
var inst_42229 = cljs.core.next.call(null,inst_42227);
var inst_42230 = files;
var state_42253__$1 = (function (){var statearr_42255 = state_42253;
(statearr_42255[(7)] = inst_42228);

(statearr_42255[(8)] = inst_42229);

(statearr_42255[(9)] = inst_42230);

return statearr_42255;
})();
var statearr_42256_42269 = state_42253__$1;
(statearr_42256_42269[(2)] = null);

(statearr_42256_42269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (2))){
var inst_42236 = (state_42253[(10)]);
var inst_42230 = (state_42253[(9)]);
var inst_42235 = cljs.core.seq.call(null,inst_42230);
var inst_42236__$1 = cljs.core.first.call(null,inst_42235);
var inst_42237 = cljs.core.next.call(null,inst_42235);
var inst_42238 = (inst_42236__$1 == null);
var inst_42239 = cljs.core.not.call(null,inst_42238);
var state_42253__$1 = (function (){var statearr_42257 = state_42253;
(statearr_42257[(10)] = inst_42236__$1);

(statearr_42257[(11)] = inst_42237);

return statearr_42257;
})();
if(inst_42239){
var statearr_42258_42270 = state_42253__$1;
(statearr_42258_42270[(1)] = (4));

} else {
var statearr_42259_42271 = state_42253__$1;
(statearr_42259_42271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (3))){
var inst_42251 = (state_42253[(2)]);
var state_42253__$1 = state_42253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42253__$1,inst_42251);
} else {
if((state_val_42254 === (4))){
var inst_42236 = (state_42253[(10)]);
var inst_42241 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42236);
var state_42253__$1 = state_42253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42253__$1,(7),inst_42241);
} else {
if((state_val_42254 === (5))){
var inst_42247 = cljs.core.async.close_BANG_.call(null,out);
var state_42253__$1 = state_42253;
var statearr_42260_42272 = state_42253__$1;
(statearr_42260_42272[(2)] = inst_42247);

(statearr_42260_42272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (6))){
var inst_42249 = (state_42253[(2)]);
var state_42253__$1 = state_42253;
var statearr_42261_42273 = state_42253__$1;
(statearr_42261_42273[(2)] = inst_42249);

(statearr_42261_42273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (7))){
var inst_42237 = (state_42253[(11)]);
var inst_42243 = (state_42253[(2)]);
var inst_42244 = cljs.core.async.put_BANG_.call(null,out,inst_42243);
var inst_42230 = inst_42237;
var state_42253__$1 = (function (){var statearr_42262 = state_42253;
(statearr_42262[(12)] = inst_42244);

(statearr_42262[(9)] = inst_42230);

return statearr_42262;
})();
var statearr_42263_42274 = state_42253__$1;
(statearr_42263_42274[(2)] = null);

(statearr_42263_42274[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto____0 = (function (){
var statearr_42264 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42264[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto__);

(statearr_42264[(1)] = (1));

return statearr_42264;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto____1 = (function (state_42253){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_42253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e42265){if((e42265 instanceof Object)){
var ex__39817__auto__ = e42265;
var statearr_42266_42275 = state_42253;
(statearr_42266_42275[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42276 = state_42253;
state_42253 = G__42276;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto__ = function(state_42253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto____1.call(this,state_42253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_42267 = f__39911__auto__.call(null);
(statearr_42267[(6)] = c__39910__auto___42268);

return statearr_42267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42277,opts){
var map__42278 = p__42277;
var map__42278__$1 = cljs.core.__destructure_map.call(null,map__42278);
var eval_body = cljs.core.get.call(null,map__42278__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e42279){var e = e42279;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5816__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__42280_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42280_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__42281){
var vec__42282 = p__42281;
var k = cljs.core.nth.call(null,vec__42282,(0),null);
var v = cljs.core.nth.call(null,vec__42282,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42285){
var vec__42286 = p__42285;
var k = cljs.core.nth.call(null,vec__42286,(0),null);
var v = cljs.core.nth.call(null,vec__42286,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42292,p__42293){
var map__42294 = p__42292;
var map__42294__$1 = cljs.core.__destructure_map.call(null,map__42294);
var opts = map__42294__$1;
var before_jsload = cljs.core.get.call(null,map__42294__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42294__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42294__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42295 = p__42293;
var map__42295__$1 = cljs.core.__destructure_map.call(null,map__42295);
var msg = map__42295__$1;
var files = cljs.core.get.call(null,map__42295__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42295__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42295__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__39911__auto__ = (function (){var switch__39813__auto__ = (function (state_42427){
var state_val_42428 = (state_42427[(1)]);
if((state_val_42428 === (7))){
var inst_42308 = (state_42427[(7)]);
var inst_42307 = (state_42427[(8)]);
var inst_42309 = (state_42427[(9)]);
var inst_42310 = (state_42427[(10)]);
var inst_42315 = cljs.core._nth.call(null,inst_42308,inst_42310);
var inst_42316 = figwheel.client.file_reloading.eval_body.call(null,inst_42315,opts);
var inst_42317 = (inst_42310 + (1));
var tmp42429 = inst_42308;
var tmp42430 = inst_42307;
var tmp42431 = inst_42309;
var inst_42307__$1 = tmp42430;
var inst_42308__$1 = tmp42429;
var inst_42309__$1 = tmp42431;
var inst_42310__$1 = inst_42317;
var state_42427__$1 = (function (){var statearr_42432 = state_42427;
(statearr_42432[(7)] = inst_42308__$1);

(statearr_42432[(8)] = inst_42307__$1);

(statearr_42432[(9)] = inst_42309__$1);

(statearr_42432[(10)] = inst_42310__$1);

(statearr_42432[(11)] = inst_42316);

return statearr_42432;
})();
var statearr_42433_42500 = state_42427__$1;
(statearr_42433_42500[(2)] = null);

(statearr_42433_42500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (20))){
var inst_42350 = (state_42427[(12)]);
var inst_42358 = figwheel.client.file_reloading.sort_files.call(null,inst_42350);
var state_42427__$1 = state_42427;
var statearr_42434_42501 = state_42427__$1;
(statearr_42434_42501[(2)] = inst_42358);

(statearr_42434_42501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (27))){
var state_42427__$1 = state_42427;
var statearr_42435_42502 = state_42427__$1;
(statearr_42435_42502[(2)] = null);

(statearr_42435_42502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (1))){
var inst_42299 = (state_42427[(13)]);
var inst_42296 = before_jsload.call(null,files);
var inst_42297 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42298 = (function (){return (function (p1__42289_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42289_SHARP_);
});
})();
var inst_42299__$1 = cljs.core.filter.call(null,inst_42298,files);
var inst_42300 = cljs.core.not_empty.call(null,inst_42299__$1);
var state_42427__$1 = (function (){var statearr_42436 = state_42427;
(statearr_42436[(14)] = inst_42296);

(statearr_42436[(13)] = inst_42299__$1);

(statearr_42436[(15)] = inst_42297);

return statearr_42436;
})();
if(cljs.core.truth_(inst_42300)){
var statearr_42437_42503 = state_42427__$1;
(statearr_42437_42503[(1)] = (2));

} else {
var statearr_42438_42504 = state_42427__$1;
(statearr_42438_42504[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (24))){
var state_42427__$1 = state_42427;
var statearr_42439_42505 = state_42427__$1;
(statearr_42439_42505[(2)] = null);

(statearr_42439_42505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (4))){
var inst_42344 = (state_42427[(2)]);
var inst_42345 = cljs.core.List.EMPTY;
var inst_42346 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42345);
var inst_42347 = (function (){return (function (p1__42290_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42290_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42290_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42290_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_42348 = cljs.core.filter.call(null,inst_42347,files);
var inst_42349 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42350 = cljs.core.concat.call(null,inst_42348,inst_42349);
var state_42427__$1 = (function (){var statearr_42440 = state_42427;
(statearr_42440[(12)] = inst_42350);

(statearr_42440[(16)] = inst_42346);

(statearr_42440[(17)] = inst_42344);

return statearr_42440;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42441_42506 = state_42427__$1;
(statearr_42441_42506[(1)] = (16));

} else {
var statearr_42442_42507 = state_42427__$1;
(statearr_42442_42507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (15))){
var inst_42334 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
var statearr_42443_42508 = state_42427__$1;
(statearr_42443_42508[(2)] = inst_42334);

(statearr_42443_42508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (21))){
var inst_42360 = (state_42427[(18)]);
var inst_42360__$1 = (state_42427[(2)]);
var inst_42361 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42360__$1);
var state_42427__$1 = (function (){var statearr_42444 = state_42427;
(statearr_42444[(18)] = inst_42360__$1);

return statearr_42444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42427__$1,(22),inst_42361);
} else {
if((state_val_42428 === (31))){
var inst_42425 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42427__$1,inst_42425);
} else {
if((state_val_42428 === (32))){
var inst_42402 = (state_42427[(19)]);
var inst_42406 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42407 = cljs.core.map.call(null,inst_42406,inst_42402);
var inst_42408 = cljs.core.pr_str.call(null,inst_42407);
var inst_42409 = ["figwheel-no-load meta-data: ",inst_42408].join('');
var inst_42410 = figwheel.client.utils.log.call(null,inst_42409);
var state_42427__$1 = state_42427;
var statearr_42445_42509 = state_42427__$1;
(statearr_42445_42509[(2)] = inst_42410);

(statearr_42445_42509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (33))){
var state_42427__$1 = state_42427;
var statearr_42446_42510 = state_42427__$1;
(statearr_42446_42510[(2)] = null);

(statearr_42446_42510[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (13))){
var inst_42320 = (state_42427[(20)]);
var inst_42324 = cljs.core.chunk_first.call(null,inst_42320);
var inst_42325 = cljs.core.chunk_rest.call(null,inst_42320);
var inst_42326 = cljs.core.count.call(null,inst_42324);
var inst_42307 = inst_42325;
var inst_42308 = inst_42324;
var inst_42309 = inst_42326;
var inst_42310 = (0);
var state_42427__$1 = (function (){var statearr_42447 = state_42427;
(statearr_42447[(7)] = inst_42308);

(statearr_42447[(8)] = inst_42307);

(statearr_42447[(9)] = inst_42309);

(statearr_42447[(10)] = inst_42310);

return statearr_42447;
})();
var statearr_42448_42511 = state_42427__$1;
(statearr_42448_42511[(2)] = null);

(statearr_42448_42511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (22))){
var inst_42364 = (state_42427[(21)]);
var inst_42363 = (state_42427[(22)]);
var inst_42360 = (state_42427[(18)]);
var inst_42368 = (state_42427[(23)]);
var inst_42363__$1 = (state_42427[(2)]);
var inst_42364__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42363__$1);
var inst_42365 = (function (){var all_files = inst_42360;
var res_SINGLEQUOTE_ = inst_42363__$1;
var res = inst_42364__$1;
return (function (p1__42291_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42291_SHARP_));
});
})();
var inst_42366 = cljs.core.filter.call(null,inst_42365,inst_42363__$1);
var inst_42367 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42368__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42367);
var inst_42369 = cljs.core.not_empty.call(null,inst_42368__$1);
var state_42427__$1 = (function (){var statearr_42449 = state_42427;
(statearr_42449[(21)] = inst_42364__$1);

(statearr_42449[(22)] = inst_42363__$1);

(statearr_42449[(24)] = inst_42366);

(statearr_42449[(23)] = inst_42368__$1);

return statearr_42449;
})();
if(cljs.core.truth_(inst_42369)){
var statearr_42450_42512 = state_42427__$1;
(statearr_42450_42512[(1)] = (23));

} else {
var statearr_42451_42513 = state_42427__$1;
(statearr_42451_42513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (36))){
var state_42427__$1 = state_42427;
var statearr_42452_42514 = state_42427__$1;
(statearr_42452_42514[(2)] = null);

(statearr_42452_42514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (29))){
var inst_42364 = (state_42427[(21)]);
var inst_42363 = (state_42427[(22)]);
var inst_42366 = (state_42427[(24)]);
var inst_42360 = (state_42427[(18)]);
var inst_42402 = (state_42427[(19)]);
var inst_42368 = (state_42427[(23)]);
var inst_42396 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42399 = (function (){var all_files = inst_42360;
var res_SINGLEQUOTE_ = inst_42363;
var res = inst_42364;
var files_not_loaded = inst_42366;
var dependencies_that_loaded = inst_42368;
return (function (p__42398){
var map__42453 = p__42398;
var map__42453__$1 = cljs.core.__destructure_map.call(null,map__42453);
var namespace = cljs.core.get.call(null,map__42453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_42400 = cljs.core.group_by.call(null,inst_42399,inst_42366);
var inst_42401 = cljs.core.__destructure_map.call(null,inst_42400);
var inst_42402__$1 = cljs.core.get.call(null,inst_42401,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42403 = cljs.core.get.call(null,inst_42401,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42404 = cljs.core.not_empty.call(null,inst_42402__$1);
var state_42427__$1 = (function (){var statearr_42454 = state_42427;
(statearr_42454[(25)] = inst_42403);

(statearr_42454[(19)] = inst_42402__$1);

(statearr_42454[(26)] = inst_42396);

return statearr_42454;
})();
if(cljs.core.truth_(inst_42404)){
var statearr_42455_42515 = state_42427__$1;
(statearr_42455_42515[(1)] = (32));

} else {
var statearr_42456_42516 = state_42427__$1;
(statearr_42456_42516[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (6))){
var inst_42341 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
var statearr_42457_42517 = state_42427__$1;
(statearr_42457_42517[(2)] = inst_42341);

(statearr_42457_42517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (28))){
var inst_42366 = (state_42427[(24)]);
var inst_42393 = (state_42427[(2)]);
var inst_42394 = cljs.core.not_empty.call(null,inst_42366);
var state_42427__$1 = (function (){var statearr_42458 = state_42427;
(statearr_42458[(27)] = inst_42393);

return statearr_42458;
})();
if(cljs.core.truth_(inst_42394)){
var statearr_42459_42518 = state_42427__$1;
(statearr_42459_42518[(1)] = (29));

} else {
var statearr_42460_42519 = state_42427__$1;
(statearr_42460_42519[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (25))){
var inst_42364 = (state_42427[(21)]);
var inst_42380 = (state_42427[(2)]);
var inst_42381 = cljs.core.not_empty.call(null,inst_42364);
var state_42427__$1 = (function (){var statearr_42461 = state_42427;
(statearr_42461[(28)] = inst_42380);

return statearr_42461;
})();
if(cljs.core.truth_(inst_42381)){
var statearr_42462_42520 = state_42427__$1;
(statearr_42462_42520[(1)] = (26));

} else {
var statearr_42463_42521 = state_42427__$1;
(statearr_42463_42521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (34))){
var inst_42403 = (state_42427[(25)]);
var inst_42413 = (state_42427[(2)]);
var inst_42414 = cljs.core.not_empty.call(null,inst_42403);
var state_42427__$1 = (function (){var statearr_42464 = state_42427;
(statearr_42464[(29)] = inst_42413);

return statearr_42464;
})();
if(cljs.core.truth_(inst_42414)){
var statearr_42465_42522 = state_42427__$1;
(statearr_42465_42522[(1)] = (35));

} else {
var statearr_42466_42523 = state_42427__$1;
(statearr_42466_42523[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (17))){
var state_42427__$1 = state_42427;
var statearr_42467_42524 = state_42427__$1;
(statearr_42467_42524[(2)] = recompile_dependents);

(statearr_42467_42524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (3))){
var state_42427__$1 = state_42427;
var statearr_42468_42525 = state_42427__$1;
(statearr_42468_42525[(2)] = null);

(statearr_42468_42525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (12))){
var inst_42337 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
var statearr_42469_42526 = state_42427__$1;
(statearr_42469_42526[(2)] = inst_42337);

(statearr_42469_42526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (2))){
var inst_42299 = (state_42427[(13)]);
var inst_42306 = cljs.core.seq.call(null,inst_42299);
var inst_42307 = inst_42306;
var inst_42308 = null;
var inst_42309 = (0);
var inst_42310 = (0);
var state_42427__$1 = (function (){var statearr_42470 = state_42427;
(statearr_42470[(7)] = inst_42308);

(statearr_42470[(8)] = inst_42307);

(statearr_42470[(9)] = inst_42309);

(statearr_42470[(10)] = inst_42310);

return statearr_42470;
})();
var statearr_42471_42527 = state_42427__$1;
(statearr_42471_42527[(2)] = null);

(statearr_42471_42527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (23))){
var inst_42364 = (state_42427[(21)]);
var inst_42363 = (state_42427[(22)]);
var inst_42366 = (state_42427[(24)]);
var inst_42360 = (state_42427[(18)]);
var inst_42368 = (state_42427[(23)]);
var inst_42371 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42373 = (function (){var all_files = inst_42360;
var res_SINGLEQUOTE_ = inst_42363;
var res = inst_42364;
var files_not_loaded = inst_42366;
var dependencies_that_loaded = inst_42368;
return (function (p__42372){
var map__42472 = p__42372;
var map__42472__$1 = cljs.core.__destructure_map.call(null,map__42472);
var request_url = cljs.core.get.call(null,map__42472__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_42374 = cljs.core.reverse.call(null,inst_42368);
var inst_42375 = cljs.core.map.call(null,inst_42373,inst_42374);
var inst_42376 = cljs.core.pr_str.call(null,inst_42375);
var inst_42377 = figwheel.client.utils.log.call(null,inst_42376);
var state_42427__$1 = (function (){var statearr_42473 = state_42427;
(statearr_42473[(30)] = inst_42371);

return statearr_42473;
})();
var statearr_42474_42528 = state_42427__$1;
(statearr_42474_42528[(2)] = inst_42377);

(statearr_42474_42528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (35))){
var inst_42403 = (state_42427[(25)]);
var inst_42416 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42403);
var inst_42417 = cljs.core.pr_str.call(null,inst_42416);
var inst_42418 = ["not required: ",inst_42417].join('');
var inst_42419 = figwheel.client.utils.log.call(null,inst_42418);
var state_42427__$1 = state_42427;
var statearr_42475_42529 = state_42427__$1;
(statearr_42475_42529[(2)] = inst_42419);

(statearr_42475_42529[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (19))){
var inst_42350 = (state_42427[(12)]);
var inst_42356 = figwheel.client.file_reloading.expand_files.call(null,inst_42350);
var state_42427__$1 = state_42427;
var statearr_42476_42530 = state_42427__$1;
(statearr_42476_42530[(2)] = inst_42356);

(statearr_42476_42530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (11))){
var state_42427__$1 = state_42427;
var statearr_42477_42531 = state_42427__$1;
(statearr_42477_42531[(2)] = null);

(statearr_42477_42531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (9))){
var inst_42339 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
var statearr_42478_42532 = state_42427__$1;
(statearr_42478_42532[(2)] = inst_42339);

(statearr_42478_42532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (5))){
var inst_42309 = (state_42427[(9)]);
var inst_42310 = (state_42427[(10)]);
var inst_42312 = (inst_42310 < inst_42309);
var inst_42313 = inst_42312;
var state_42427__$1 = state_42427;
if(cljs.core.truth_(inst_42313)){
var statearr_42479_42533 = state_42427__$1;
(statearr_42479_42533[(1)] = (7));

} else {
var statearr_42480_42534 = state_42427__$1;
(statearr_42480_42534[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (14))){
var inst_42320 = (state_42427[(20)]);
var inst_42329 = cljs.core.first.call(null,inst_42320);
var inst_42330 = figwheel.client.file_reloading.eval_body.call(null,inst_42329,opts);
var inst_42331 = cljs.core.next.call(null,inst_42320);
var inst_42307 = inst_42331;
var inst_42308 = null;
var inst_42309 = (0);
var inst_42310 = (0);
var state_42427__$1 = (function (){var statearr_42481 = state_42427;
(statearr_42481[(7)] = inst_42308);

(statearr_42481[(8)] = inst_42307);

(statearr_42481[(9)] = inst_42309);

(statearr_42481[(31)] = inst_42330);

(statearr_42481[(10)] = inst_42310);

return statearr_42481;
})();
var statearr_42482_42535 = state_42427__$1;
(statearr_42482_42535[(2)] = null);

(statearr_42482_42535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (26))){
var inst_42364 = (state_42427[(21)]);
var inst_42363 = (state_42427[(22)]);
var inst_42366 = (state_42427[(24)]);
var inst_42360 = (state_42427[(18)]);
var inst_42368 = (state_42427[(23)]);
var inst_42383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42385 = (function (){var all_files = inst_42360;
var res_SINGLEQUOTE_ = inst_42363;
var res = inst_42364;
var files_not_loaded = inst_42366;
var dependencies_that_loaded = inst_42368;
return (function (p__42384){
var map__42483 = p__42384;
var map__42483__$1 = cljs.core.__destructure_map.call(null,map__42483);
var namespace = cljs.core.get.call(null,map__42483__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_42386 = cljs.core.map.call(null,inst_42385,inst_42364);
var inst_42387 = cljs.core.pr_str.call(null,inst_42386);
var inst_42388 = figwheel.client.utils.log.call(null,inst_42387);
var inst_42389 = (function (){var all_files = inst_42360;
var res_SINGLEQUOTE_ = inst_42363;
var res = inst_42364;
var files_not_loaded = inst_42366;
var dependencies_that_loaded = inst_42368;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_42390 = setTimeout(inst_42389,(10));
var state_42427__$1 = (function (){var statearr_42484 = state_42427;
(statearr_42484[(32)] = inst_42383);

(statearr_42484[(33)] = inst_42388);

return statearr_42484;
})();
var statearr_42485_42536 = state_42427__$1;
(statearr_42485_42536[(2)] = inst_42390);

(statearr_42485_42536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (16))){
var state_42427__$1 = state_42427;
var statearr_42486_42537 = state_42427__$1;
(statearr_42486_42537[(2)] = reload_dependents);

(statearr_42486_42537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (30))){
var state_42427__$1 = state_42427;
var statearr_42487_42538 = state_42427__$1;
(statearr_42487_42538[(2)] = null);

(statearr_42487_42538[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (10))){
var inst_42320 = (state_42427[(20)]);
var inst_42322 = cljs.core.chunked_seq_QMARK_.call(null,inst_42320);
var state_42427__$1 = state_42427;
if(inst_42322){
var statearr_42488_42539 = state_42427__$1;
(statearr_42488_42539[(1)] = (13));

} else {
var statearr_42489_42540 = state_42427__$1;
(statearr_42489_42540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (18))){
var inst_42354 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
if(cljs.core.truth_(inst_42354)){
var statearr_42490_42541 = state_42427__$1;
(statearr_42490_42541[(1)] = (19));

} else {
var statearr_42491_42542 = state_42427__$1;
(statearr_42491_42542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (37))){
var inst_42422 = (state_42427[(2)]);
var state_42427__$1 = state_42427;
var statearr_42492_42543 = state_42427__$1;
(statearr_42492_42543[(2)] = inst_42422);

(statearr_42492_42543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42428 === (8))){
var inst_42320 = (state_42427[(20)]);
var inst_42307 = (state_42427[(8)]);
var inst_42320__$1 = cljs.core.seq.call(null,inst_42307);
var state_42427__$1 = (function (){var statearr_42493 = state_42427;
(statearr_42493[(20)] = inst_42320__$1);

return statearr_42493;
})();
if(inst_42320__$1){
var statearr_42494_42544 = state_42427__$1;
(statearr_42494_42544[(1)] = (10));

} else {
var statearr_42495_42545 = state_42427__$1;
(statearr_42495_42545[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto____0 = (function (){
var statearr_42496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42496[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto__);

(statearr_42496[(1)] = (1));

return statearr_42496;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto____1 = (function (state_42427){
while(true){
var ret_value__39815__auto__ = (function (){try{while(true){
var result__39816__auto__ = switch__39813__auto__.call(null,state_42427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39816__auto__;
}
break;
}
}catch (e42497){if((e42497 instanceof Object)){
var ex__39817__auto__ = e42497;
var statearr_42498_42546 = state_42427;
(statearr_42498_42546[(5)] = ex__39817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42547 = state_42427;
state_42427 = G__42547;
continue;
} else {
return ret_value__39815__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto__ = function(state_42427){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto____1.call(this,state_42427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39814__auto__;
})()
})();
var state__39912__auto__ = (function (){var statearr_42499 = f__39911__auto__.call(null);
(statearr_42499[(6)] = c__39910__auto__);

return statearr_42499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39912__auto__);
}));

return c__39910__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42550,link){
var map__42551 = p__42550;
var map__42551__$1 = cljs.core.__destructure_map.call(null,map__42551);
var file = cljs.core.get.call(null,map__42551__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5818__auto__ = link.href;
if(cljs.core.truth_(temp__5818__auto__)){
var link_href = temp__5818__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__42548_SHARP_,p2__42549_SHARP_){
if(cljs.core._EQ_.call(null,p1__42548_SHARP_,p2__42549_SHARP_)){
return p1__42548_SHARP_;
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
var temp__5818__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42553){
var map__42554 = p__42553;
var map__42554__$1 = cljs.core.__destructure_map.call(null,map__42554);
var match_length = cljs.core.get.call(null,map__42554__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42554__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42552_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42552_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42555_SHARP_,p2__42556_SHARP_){
return cljs.core.assoc.call(null,p1__42555_SHARP_,cljs.core.get.call(null,p2__42556_SHARP_,key),p2__42556_SHARP_);
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
var loaded_f_datas_42557 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42557);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42557);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42558,p__42559){
var map__42560 = p__42558;
var map__42560__$1 = cljs.core.__destructure_map.call(null,map__42560);
var on_cssload = cljs.core.get.call(null,map__42560__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42561 = p__42559;
var map__42561__$1 = cljs.core.__destructure_map.call(null,map__42561);
var files_msg = map__42561__$1;
var files = cljs.core.get.call(null,map__42561__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1710474319543
