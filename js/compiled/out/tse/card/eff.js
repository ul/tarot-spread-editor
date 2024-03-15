// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.card.eff');
goog.require('cljs.core');
tse.card.eff.set_random_reversible = (function tse$card$eff$set_random_reversible(p__34754){
var map__34755 = p__34754;
var map__34755__$1 = cljs.core.__destructure_map.call(null,map__34755);
var vec__34756 = cljs.core.get.call(null,map__34755__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var value = cljs.core.nth.call(null,vec__34756,(0),null);
var db = cljs.core.get.call(null,map__34755__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random","random",-557811113),new cljs.core.Keyword(null,"reversible?","reversible?",-1326423710)], null),value);
});
tse.card.eff.add_card = (function tse$card$eff$add_card(p__34760){
var map__34761 = p__34760;
var map__34761__$1 = cljs.core.__destructure_map.call(null,map__34761);
var vec__34762 = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var map__34765 = cljs.core.nth.call(null,vec__34762,(0),null);
var map__34765__$1 = cljs.core.__destructure_map.call(null,map__34765);
var card = map__34765__$1;
var deck = cljs.core.get.call(null,map__34765__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var item = cljs.core.nth.call(null,vec__34762,(1),null);
var db = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var map__34766 = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","entity","deck/entity",-456409451),deck], null)));
var map__34766__$1 = cljs.core.__destructure_map.call(null,map__34766);
var dimensions = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var z_index = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","next-z-index","item/next-z-index",1477712425)], null)));
var last_card = cljs.core.last.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","layer-all","item/layer-all",1203405864),new cljs.core.Keyword(null,"cards","cards",169174038)], null))));
var scale = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","scale","canvas/scale",-1527878769)], null)));
var origin = (cljs.core.truth_(last_card)?(function (){var map__34767 = last_card;
var map__34767__$1 = cljs.core.__destructure_map.call(null,map__34767);
var vec__34768 = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var x = cljs.core.nth.call(null,vec__34768,(0),null);
var y = cljs.core.nth.call(null,vec__34768,(1),null);
var vec__34771 = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var w = cljs.core.nth.call(null,vec__34771,(0),null);
var h = cljs.core.nth.call(null,vec__34771,(1),null);
var doc_width = document.documentElement.scrollWidth;
if((doc_width < (scale * ((x + w) + cljs.core.first.call(null,dimensions))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(y + h)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"items","items",1031954938),(function (items){
return cljs.core.conj.call(null,cljs.core.mapv.call(null,(function (p1__34759_SHARP_){
return cljs.core.assoc.call(null,p1__34759_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}),items),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"card","card",-1430355152),card,new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions,new cljs.core.Keyword(null,"z-index","z-index",1892827090),z_index,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true], null),item));
}));
});
tse.card.eff.random_card = (function tse$card$eff$random_card(p__34774){
var map__34775 = p__34774;
var map__34775__$1 = cljs.core.__destructure_map.call(null,map__34775);
var db = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"db","db",993250759));
var sub = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var deck = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671)], null)));
var usable = cljs.core.set.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","usable-by-deck","card/usable-by-deck",-1194180652),deck], null))));
var used = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","used-by-deck","card/used-by-deck",-53961823),deck], null)));
var used_by_freq = cljs.core.frequencies.call(null,used);
var max_freq = cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,used_by_freq));
var used_in_the_last_deck = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.remove.call(null,(function (p__34779){
var vec__34780 = p__34779;
var _ = cljs.core.nth.call(null,vec__34780,(0),null);
var freq = cljs.core.nth.call(null,vec__34780,(1),null);
return (freq < max_freq);
}),used_by_freq)));
var available = clojure.set.difference.call(null,usable,used_in_the_last_deck);
var vec__34776 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,((cljs.core.empty_QMARK_.call(null,available))?usable:available)));
var suit = cljs.core.nth.call(null,vec__34776,(0),null);
var index = cljs.core.nth.call(null,vec__34776,(1),null);
var reversible_QMARK_ = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","random-reversible?","card/random-reversible?",2068479445)], null)));
return emit.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","add","card/add",223641035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),deck,new cljs.core.Keyword(null,"suit","suit",-869827520),suit,new cljs.core.Keyword(null,"index","index",-1531685915),index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),(cljs.core.truth_(reversible_QMARK_)?cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Math.PI], null)):(0))], null)], null));
});
tse.card.eff.spec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("card","set-random-reversible","card/set-random-reversible",1002600429),tse.card.eff.set_random_reversible,new cljs.core.Keyword("card","add","card/add",223641035),tse.card.eff.add_card,new cljs.core.Keyword("card","random","card/random",-554683065),tse.card.eff.random_card], null);

//# sourceMappingURL=eff.js.map?rel=1710474316892
