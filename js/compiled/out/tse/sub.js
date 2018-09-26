// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
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
return cljs.core.reduce.call(null,(function (cache__$1,p__54058){
var vec__54059 = p__54058;
var k = cljs.core.nth.call(null,vec__54059,(0),null);
var v = vec__54059;
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
tse.sub.subscribe_STAR_ = (function tse$sub$subscribe_STAR_(db,subscribe,key__GT_fn,cache,invalidate,p__54062){
var vec__54063 = p__54062;
var seq__54064 = cljs.core.seq.call(null,vec__54063);
var first__54065 = cljs.core.first.call(null,seq__54064);
var seq__54064__$1 = cljs.core.next.call(null,seq__54064);
var key = first__54065;
var args = seq__54064__$1;
var v = vec__54063;
var temp__5557__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cache),v);
if(cljs.core.truth_(temp__5557__auto__)){
var sub = temp__5557__auto__;
return sub;
} else {
var temp__5557__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,key__GT_fn),key);
if(cljs.core.truth_(temp__5557__auto____$1)){
var f = temp__5557__auto____$1;
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
var invalidate = ((function (key__GT_fn,cache){
return (function tse$sub$make_$_invalidate(v,sub){
return tse.sub.invalidate_STAR_.call(null,cache,v,sub);
});})(key__GT_fn,cache))
;
var register = ((function (key__GT_fn,cache){
return (function tse$sub$make_$_register(key,f){
tse.sub.invalidate_all.call(null,cache,key);

return tse.sub.register_STAR_.call(null,key__GT_fn,key,f);
});})(key__GT_fn,cache))
;
var register_cursor = ((function (key__GT_fn,cache){
return (function tse$sub$make_$_register_cursor(key,path){
return register.call(null,key,((function (key__GT_fn,cache){
return (function (p__54069){
var map__54070 = p__54069;
var map__54070__$1 = ((((!((map__54070 == null)))?(((((map__54070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54070):map__54070);
var db__$1 = cljs.core.get.call(null,map__54070__$1,new cljs.core.Keyword(null,"db","db",993250759));
return carbon.rx.cursor.call(null,db__$1,path);
});})(key__GT_fn,cache))
);
});})(key__GT_fn,cache))
;
var subscribe = ((function (key__GT_fn,cache){
return (function tse$sub$make_$_subscribe(v){
return tse.sub.subscribe_STAR_.call(null,db,tse$sub$make_$_subscribe,key__GT_fn,cache,invalidate,v);
});})(key__GT_fn,cache))
;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"register-subscription","register-subscription",1330709788),register,new cljs.core.Keyword(null,"register-cursor","register-cursor",-1680477237),register_cursor,new cljs.core.Keyword(null,"subscribe","subscribe",416253756),subscribe,new cljs.core.Keyword(null,"sub","sub",-2093760025),subscribe], null);
});

//# sourceMappingURL=sub.js.map?rel=1537946283631
