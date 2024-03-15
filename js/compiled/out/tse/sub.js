// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.sub');
goog.require('cljs.core');
goog.require('carbon.rx');
tse.sub.invalidate_STAR_ = (function tse$sub$invalidate_STAR_(cache,v,sub){
if(cljs.core._EQ_.call(null,sub,cljs.core.get.call(null,cljs.core.deref.call(null,cache),v))){
return cljs.core._vreset_BANG_.call(null,cache,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache),v));
} else {
return null;
}
});
tse.sub.invalidate_all_STAR_ = (function tse$sub$invalidate_all_STAR_(cache,key){
return cljs.core.reduce.call(null,(function (cache__$1,p__36595){
var vec__36596 = p__36595;
var k = cljs.core.nth.call(null,vec__36596,(0),null);
var v = vec__36596;
if(cljs.core._EQ_.call(null,k,key)){
return cljs.core.dissoc.call(null,cache__$1,v);
} else {
return cache__$1;
}
}),cache,cljs.core.keys.call(null,cache));
});
tse.sub.invalidate_all = (function tse$sub$invalidate_all(cache,key){
return cljs.core._vreset_BANG_.call(null,cache,tse.sub.invalidate_all_STAR_.call(null,cljs.core._deref.call(null,cache),key));
});
tse.sub.register_STAR_ = (function tse$sub$register_STAR_(key__GT_fn,key,f){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,key__GT_fn),key)){
console.warn("sub overwrite",key);
} else {
}

return cljs.core._vreset_BANG_.call(null,key__GT_fn,cljs.core.assoc.call(null,cljs.core._deref.call(null,key__GT_fn),key,f));
});
tse.sub.subscribe_STAR_ = (function tse$sub$subscribe_STAR_(db,subscribe,key__GT_fn,cache,invalidate,p__36599){
var vec__36600 = p__36599;
var seq__36601 = cljs.core.seq.call(null,vec__36600);
var first__36602 = cljs.core.first.call(null,seq__36601);
var seq__36601__$1 = cljs.core.next.call(null,seq__36601);
var key = first__36602;
var args = seq__36601__$1;
var v = vec__36600;
var temp__5816__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cache),v);
if(cljs.core.truth_(temp__5816__auto__)){
var sub = temp__5816__auto__;
return sub;
} else {
var temp__5816__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5816__auto____$1)){
var f = temp__5816__auto____$1;
var sub = carbon.rx.add_drop.call(null,f.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sub","sub",-2093760025),subscribe,new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"args","args",1315556576),args], null)),v,invalidate);
cljs.core._vreset_BANG_.call(null,cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache),v,sub));

return sub;
} else {
return console.warn("no sub",key);
}
}
});
tse.sub.make = (function tse$sub$make(db){
var key__GT_fn = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cache = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var invalidate = (function tse$sub$make_$_invalidate(v,sub){
return tse.sub.invalidate_STAR_.call(null,cache,v,sub);
});
var register = (function tse$sub$make_$_register(key,f){
tse.sub.invalidate_all.call(null,cache,key);

return tse.sub.register_STAR_.call(null,key__GT_fn,key,f);
});
var register_cursor = (function tse$sub$make_$_register_cursor(key,path){
return register.call(null,key,(function (p__36605){
var map__36606 = p__36605;
var map__36606__$1 = cljs.core.__destructure_map.call(null,map__36606);
var db__$1 = cljs.core.get.call(null,map__36606__$1,new cljs.core.Keyword(null,"db","db",993250759));
return carbon.rx.cursor.call(null,db__$1,path);
}));
});
var subscribe = (function tse$sub$make_$_subscribe(v){
return tse.sub.subscribe_STAR_.call(null,db,tse$sub$make_$_subscribe,key__GT_fn,cache,invalidate,v);
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"register-subscription","register-subscription",1330709788),register,new cljs.core.Keyword(null,"register-cursor","register-cursor",-1680477237),register_cursor,new cljs.core.Keyword(null,"subscribe","subscribe",416253756),subscribe,new cljs.core.Keyword(null,"sub","sub",-2093760025),subscribe], null);
});

//# sourceMappingURL=sub.js.map?rel=1710474317900
