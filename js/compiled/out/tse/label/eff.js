// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.label.eff');
goog.require('cljs.core');
tse.label.eff.add_label = (function tse$label$eff$add_label(p__51927){
var map__51928 = p__51927;
var map__51928__$1 = ((((!((map__51928 == null)))?(((((map__51928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51928):map__51928);
var vec__51929 = cljs.core.get.call(null,map__51928__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var item = cljs.core.nth.call(null,vec__51929,(0),null);
var db = cljs.core.get.call(null,map__51928__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__51928__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),((function (map__51928,map__51928__$1,vec__51929,item,db,sub){
return (function (items){
return cljs.core.conj.call(null,cljs.core.mapv.call(null,((function (map__51928,map__51928__$1,vec__51929,item,db,sub){
return (function (p1__51926_SHARP_){
return cljs.core.assoc.call(null,p1__51926_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
});})(map__51928,map__51928__$1,vec__51929,item,db,sub))
,items),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"z-index","z-index",1892827090),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null)))], null),item));
});})(map__51928,map__51928__$1,vec__51929,item,db,sub))
);
});
tse.label.eff.update_label = (function tse$label$eff$update_label(p__51933){
var map__51934 = p__51933;
var map__51934__$1 = ((((!((map__51934 == null)))?(((((map__51934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51934):map__51934);
var vec__51935 = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var item = cljs.core.nth.call(null,vec__51935,(0),null);
var id = cljs.core.nth.call(null,vec__51935,(1),null);
var db = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),id], null),cljs.core.merge,item);
});
tse.label.eff.spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("label","add","label/add",-1285180881),tse.label.eff.add_label,new cljs.core.Keyword("label","update","label/update",946911680),tse.label.eff.update_label], null);

//# sourceMappingURL=eff.js.map?rel=1537946276053
