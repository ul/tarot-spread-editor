// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('carbon.vdom');
goog.require('cljs.core');
goog.require('cljsjs.inferno');
goog.require('cljsjs.inferno.hyperscript');
goog.require('cljsjs.inferno.create_class');
goog.require('goog.object');
goog.require('carbon.rx');
goog.require('clojure.string');
carbon.vdom.kebab_start = (new RegExp("-(\\w)","g"));
carbon.vdom.upper_case_second = (function carbon$vdom$upper_case_second(x){
return clojure.string.upper_case.call(null,(x[(1)]));
});
carbon.vdom.camel = (function carbon$vdom$camel(s){
return s.replace(carbon.vdom.kebab_start,carbon.vdom.upper_case_second);
});
carbon.vdom.camel_event_handlers = (function carbon$vdom$camel_event_handlers(s){
var s__$1 = cljs.core.name.call(null,s);
if(cljs.core.truth_(s__$1.startsWith("on-"))){
return carbon.vdom.camel.call(null,s__$1);
} else {
return s__$1;
}
});
carbon.vdom._STAR_path_STAR_ = cljs.core.PersistentVector.EMPTY;
carbon.vdom.id_gen = cljs.core.volatile_BANG_.call(null,(0));
carbon.vdom.next_id = (function carbon$vdom$next_id(){
return cljs.core._vreset_BANG_.call(null,carbon.vdom.id_gen,(cljs.core._deref.call(null,carbon.vdom.id_gen) + (1)));
});
carbon.vdom.functional_meta = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-component-will-mount","on-component-will-mount",-57649628),new cljs.core.Keyword(null,"on-component-did-mount","on-component-did-mount",-1365280255),new cljs.core.Keyword(null,"on-component-should-update","on-component-should-update",1201803243),new cljs.core.Keyword(null,"on-component-will-update","on-component-will-update",465880275),new cljs.core.Keyword(null,"on-component-did-update","on-component-did-update",-712448925),new cljs.core.Keyword(null,"on-component-will-unmount","on-component-will-unmount",-651823866),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967)], null);
carbon.vdom.component_lifecycle = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),new cljs.core.Keyword(null,"component-should-update","component-should-update",-58653659),new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),new cljs.core.Keyword(null,"component-did-unmount","component-did-unmount",-665071477)], null);
carbon.vdom.component_meta = cljs.core.conj.call(null,carbon.vdom.component_lifecycle,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967));
carbon.vdom.map_keys = (function carbon$vdom$map_keys(f,m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
});
carbon.vdom.filter_vals = (function carbon$vdom$filter_vals(p,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(p.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
});
carbon.vdom.flatten_children = (function carbon$vdom$flatten_children(children){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.remove.call(null,cljs.core.seq_QMARK_,cljs.core.tree_seq.call(null,cljs.core.seq_QMARK_,cljs.core.seq,children)));
});
carbon.vdom.valid_tag_QMARK_ = (function carbon$vdom$valid_tag_QMARK_(tag){
return (((tag instanceof cljs.core.Keyword)) || (typeof tag === 'string'));
});
carbon.vdom.dealias = (function carbon$vdom$dealias(p__51847){
var map__51848 = p__51847;
var map__51848__$1 = ((((!((map__51848 == null)))?(((((map__51848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51848):map__51848);
var m = map__51848__$1;
var class$ = cljs.core.get.call(null,map__51848__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"className","className",-1983287057),class$);
} else {
return m;
}
});
carbon.vdom.node = (function carbon$vdom$node(tag,attrs,children){
return Inferno.h(cljs.core.name.call(null,tag),cljs.core.clj__GT_js.call(null,carbon.vdom.map_keys.call(null,carbon.vdom.camel_event_handlers,carbon.vdom.dealias.call(null,carbon.vdom.filter_vals.call(null,cljs.core.some_QMARK_,attrs)))),cljs.core.apply.call(null,cljs.core.array,children));
});
carbon.vdom.parse_arg = (function carbon$vdom$parse_arg(p__51850){
var vec__51851 = p__51850;
var seq__51852 = cljs.core.seq.call(null,vec__51851);
var first__51853 = cljs.core.first.call(null,seq__51852);
var seq__51852__$1 = cljs.core.next.call(null,seq__51852);
var tag = first__51853;
var vec__51854 = seq__51852__$1;
var seq__51855 = cljs.core.seq.call(null,vec__51854);
var first__51856 = cljs.core.first.call(null,seq__51855);
var seq__51855__$1 = cljs.core.next.call(null,seq__51855);
var attrs = first__51856;
var children = seq__51855__$1;
var args = vec__51854;
var full_QMARK_ = cljs.core.map_QMARK_.call(null,attrs);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,((full_QMARK_)?attrs:cljs.core.PersistentArrayMap.EMPTY),((full_QMARK_)?children:args)], null);
});


carbon.vdom.process = (function carbon$vdom$process(arg){
if(cljs.core.vector_QMARK_.call(null,arg)){
var tag = cljs.core.get.call(null,arg,(0));
if(cljs.core.truth_(carbon.vdom.valid_tag_QMARK_.call(null,tag))){
var vec__51857 = carbon.vdom.parse_arg.call(null,arg);
var tag__$1 = cljs.core.nth.call(null,vec__51857,(0),null);
var attrs = cljs.core.nth.call(null,vec__51857,(1),null);
var children = cljs.core.nth.call(null,vec__51857,(2),null);
return carbon.vdom.node.call(null,tag__$1,attrs,cljs.core.map.call(null,carbon.vdom.process,carbon.vdom.flatten_children.call(null,children)));
} else {
return carbon.vdom.component.call(null,tag,cljs.core.subvec.call(null,arg,(1)),cljs.core.meta.call(null,arg));
}
} else {
if(cljs.core.seq_QMARK_.call(null,arg)){
return carbon.vdom.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,carbon.vdom.process,carbon.vdom.flatten_children.call(null,arg)));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');

}
}
});
carbon.vdom.get_prop = (function carbon$vdom$get_prop(this$,k){
return goog.object.getValueByKeys(this$,"props",cljs.core.name.call(null,k));
});
carbon.vdom.get_state = (function carbon$vdom$get_state(this$,k){
return goog.object.getValueByKeys(this$,"state",cljs.core.name.call(null,k));
});
carbon.vdom.call_some = (function carbon$vdom$call_some(var_args){
var G__51861 = arguments.length;
switch (G__51861) {
case 2:
return carbon.vdom.call_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carbon.vdom.call_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

carbon.vdom.call_some.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
var temp__5559__auto__ = cljs.core.get.call(null,carbon.vdom.get_prop.call(null,this$,"meta"),k);
if(cljs.core.truth_(temp__5559__auto__)){
var f = temp__5559__auto__;
return f.call(null,this$);
} else {
return null;
}
});

carbon.vdom.call_some.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,args){
var temp__5559__auto__ = cljs.core.get.call(null,carbon.vdom.get_prop.call(null,this$,"meta"),k);
if(cljs.core.truth_(temp__5559__auto__)){
var f = temp__5559__auto__;
return cljs.core.apply.call(null,f,this$,args);
} else {
return null;
}
});

carbon.vdom.call_some.cljs$lang$maxFixedArity = 3;

carbon.vdom.lifecycle = (function carbon$vdom$lifecycle(k){
return (function() { 
var G__51863__delegate = function (args){
var this$ = this;
return carbon.vdom.call_some.call(null,this$,k,args);
};
var G__51863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51864__i = 0, G__51864__a = new Array(arguments.length -  0);
while (G__51864__i < G__51864__a.length) {G__51864__a[G__51864__i] = arguments[G__51864__i + 0]; ++G__51864__i;}
  args = new cljs.core.IndexedSeq(G__51864__a,0,null);
} 
return G__51863__delegate.call(this,args);};
G__51863.cljs$lang$maxFixedArity = 0;
G__51863.cljs$lang$applyTo = (function (arglist__51865){
var args = cljs.core.seq(arglist__51865);
return G__51863__delegate(args);
});
G__51863.cljs$core$IFn$_invoke$arity$variadic = G__51863__delegate;
return G__51863;
})()
;
});
carbon.vdom.wrapper_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
carbon.vdom.make_wrapper = (function carbon$vdom$make_wrapper(f){
return Inferno.createClass(({"componentDidUnmount": carbon.vdom.lifecycle.call(null,new cljs.core.Keyword(null,"component-did-unmount","component-did-unmount",-665071477)), "componentDidUpdate": carbon.vdom.lifecycle.call(null,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173)), "displayName": (function (){var or__3949__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,f),new cljs.core.Keyword("component","display-name","component/display-name",-1644917572));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = f.name;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return "CarbonWrapper";
}
}
})(), "componentWillUnmount": (function (){
var this$ = this;
cljs.core.remove_watch.call(null,carbon.vdom.get_state.call(null,this$,new cljs.core.Keyword(null,"component","component",1555936782)),new cljs.core.Keyword("carbon.vdom","render","carbon.vdom/render",-19564989));

return carbon.vdom.call_some.call(null,this$,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698));
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
carbon.vdom.call_some.call(null,this$,new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157));

var next_args = goog.object.get(next_props,"args");
var args = carbon.vdom.get_state.call(null,this$,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.reset_BANG_.call(null,args,next_args);
}), "componentShouldUpdate": cljs.core.constantly.call(null,false), "render": (function (){
var this$ = this;
var _STAR_rx_STAR_51866 = carbon.rx._STAR_rx_STAR_;
carbon.rx._STAR_rx_STAR_ = null;

try{var _STAR_path_STAR_51867 = carbon.vdom._STAR_path_STAR_;
carbon.vdom._STAR_path_STAR_ = carbon.vdom.get_state.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));

try{return carbon.vdom.process.call(null,cljs.core.deref.call(null,carbon.vdom.get_state.call(null,this$,new cljs.core.Keyword(null,"component","component",1555936782))));
}finally {carbon.vdom._STAR_path_STAR_ = _STAR_path_STAR_51867;
}}finally {carbon.rx._STAR_rx_STAR_ = _STAR_rx_STAR_51866;
}}), "componentWillUpdate": carbon.vdom.lifecycle.call(null,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566)), "componentDidMount": carbon.vdom.lifecycle.call(null,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518)), "componentWillMount": (function (){
var this$ = this;
carbon.vdom.call_some.call(null,this$,new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855));

var args = carbon.vdom.get_prop.call(null,this$,new cljs.core.Keyword(null,"args","args",1315556576));
var path = cljs.core.conj.call(null,carbon.vdom.get_prop.call(null,this$,new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866)),carbon.vdom.next_id.call(null));
var view = carbon.rx.cell_STAR_.call(null,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell f)\n"], null)], null));
var args__$1 = carbon.rx.cell_STAR_.call(null,args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/cell args)\n"], null)], null));
var component = carbon.rx.rx_STAR_.call(null,((function (args,path,view,args__$1,this$){
return (function (){
return cljs.core.apply.call(null,cljs.core.deref.call(null,view),cljs.core.deref.call(null,args__$1));
});})(args,path,view,args__$1,this$))
,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),"(carbon.macros/rx (apply @view @args))\n"], null));
var form = cljs.core.deref.call(null,component);
if(cljs.core.fn_QMARK_.call(null,form)){
cljs.core.reset_BANG_.call(null,view,form);
} else {
}

goog.object.get(this$,"setState").call(null,({"component": component, "path": path, "view": view, "args": args__$1}));

return cljs.core.add_watch.call(null,component,new cljs.core.Keyword("carbon.vdom","render","carbon.vdom/render",-19564989),((function (args,path,view,args__$1,component,form,this$){
return (function (){
return carbon.vdom.request_render.call(null,path,this$);
});})(args,path,view,args__$1,component,form,this$))
);
})}));
});
carbon.vdom.get_wrapper = (function carbon$vdom$get_wrapper(f){
var temp__5557__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,carbon.vdom.wrapper_cache),f);
if(cljs.core.truth_(temp__5557__auto__)){
var c = temp__5557__auto__;
return c;
} else {
var c = carbon.vdom.make_wrapper.call(null,f);
cljs.core.swap_BANG_.call(null,carbon.vdom.wrapper_cache,cljs.core.assoc,f,c);

return c;
}
});
carbon.vdom.component = (function carbon$vdom$component(f,args,meta){
return Inferno.h(carbon.vdom.get_wrapper.call(null,f),({"args": args, "key": cljs.core.get.call(null,meta,new cljs.core.Keyword(null,"key","key",-1516042587)), "ref": cljs.core.get.call(null,meta,new cljs.core.Keyword(null,"ref","ref",1289896967)), "meta": meta, "parent-path": carbon.vdom._STAR_path_STAR_}));
});
carbon.vdom.mount = (function carbon$vdom$mount(view,elem){
return Inferno.render(carbon.vdom.process.call(null,view),elem);
});
carbon.vdom.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return window.oRequestAnimationFrame;
}
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__51868_SHARP_){
return setTimeout(p1__51868_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
carbon.vdom.empty_queue = cljs.core.sorted_map.call(null);
carbon.vdom.render_queue = cljs.core.volatile_BANG_.call(null,carbon.vdom.empty_queue);
carbon.vdom.render = (function carbon$vdom$render(){
var queue = cljs.core.deref.call(null,carbon.vdom.render_queue);
cljs.core.vreset_BANG_.call(null,carbon.vdom.render_queue,carbon.vdom.empty_queue);

var seq__51869 = cljs.core.seq.call(null,cljs.core.vals.call(null,queue));
var chunk__51870 = null;
var count__51871 = (0);
var i__51872 = (0);
while(true){
if((i__51872 < count__51871)){
var c = cljs.core._nth.call(null,chunk__51870,i__51872);
goog.object.get(c,"forceUpdate").call(null);


var G__51873 = seq__51869;
var G__51874 = chunk__51870;
var G__51875 = count__51871;
var G__51876 = (i__51872 + (1));
seq__51869 = G__51873;
chunk__51870 = G__51874;
count__51871 = G__51875;
i__51872 = G__51876;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__51869);
if(temp__5559__auto__){
var seq__51869__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51869__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__51869__$1);
var G__51877 = cljs.core.chunk_rest.call(null,seq__51869__$1);
var G__51878 = c__4351__auto__;
var G__51879 = cljs.core.count.call(null,c__4351__auto__);
var G__51880 = (0);
seq__51869 = G__51877;
chunk__51870 = G__51878;
count__51871 = G__51879;
i__51872 = G__51880;
continue;
} else {
var c = cljs.core.first.call(null,seq__51869__$1);
goog.object.get(c,"forceUpdate").call(null);


var G__51881 = cljs.core.next.call(null,seq__51869__$1);
var G__51882 = null;
var G__51883 = (0);
var G__51884 = (0);
seq__51869 = G__51881;
chunk__51870 = G__51882;
count__51871 = G__51883;
i__51872 = G__51884;
continue;
}
} else {
return null;
}
}
break;
}
});
carbon.vdom.request_render = (function carbon$vdom$request_render(path,c){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,carbon.vdom.render_queue))){
carbon.vdom.schedule.call(null,carbon.vdom.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,carbon.vdom.render_queue,cljs.core.assoc.call(null,cljs.core._deref.call(null,carbon.vdom.render_queue),path,c));
});
carbon.vdom.clear_render = (function carbon$vdom$clear_render(path){
return cljs.core._vreset_BANG_.call(null,carbon.vdom.render_queue,cljs.core.dissoc.call(null,cljs.core._deref.call(null,carbon.vdom.render_queue),path));
});

//# sourceMappingURL=vdom.js.map?rel=1537946275852
