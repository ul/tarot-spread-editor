// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.board');
goog.require('cljs.core');
goog.require('carbon.rx');
goog.require('taoensso.encore');
goog.require('tse.deck_search');
tse.board.suit_selector = (function tse$board$suit_selector(p__101062){
var map__101063 = p__101062;
var map__101063__$1 = cljs.core.__destructure_map.call(null,map__101063);
var sub = cljs.core.get.call(null,map__101063__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__101063__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-menu","div.pure-menu",-368246773),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pure-menu-list","ul.pure-menu-list",1943879978),(function (){var lang = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lang","code","lang/code",-1648658552)], null)));
var active = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active-id","suit/active-id",-62520787)], null)));
var iter__5523__auto__ = (function tse$board$suit_selector_$_iter__101064(s__101065){
return (new cljs.core.LazySeq(null,(function (){
var s__101065__$1 = s__101065;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__101065__$1);
if(temp__5818__auto__){
var s__101065__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__101065__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__101065__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__101067 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__101066 = (0);
while(true){
if((i__101066 < size__5522__auto__)){
var vec__101068 = cljs.core._nth.call(null,c__5521__auto__,i__101066);
var k = cljs.core.nth.call(null,vec__101068,(0),null);
var v = cljs.core.nth.call(null,vec__101068,(1),null);
cljs.core.chunk_append.call(null,b__101067,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,k,active))?"pure-menu-active":null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__101066,vec__101068,k,v,c__5521__auto__,size__5522__auto__,b__101067,s__101065__$2,temp__5818__auto__,lang,active,map__101063,map__101063__$1,sub,emit){
return (function (e){
e.preventDefault();

return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","activate","suit/activate",505058577),k], null));
});})(i__101066,vec__101068,k,v,c__5521__auto__,size__5522__auto__,b__101067,s__101065__$2,temp__5818__auto__,lang,active,map__101063,map__101063__$1,sub,emit))
], null),(function (){var or__5045__auto__ = cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),lang], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"en","en",88457073)], null));
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__101074 = (i__101066 + (1));
i__101066 = G__101074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__101067),tse$board$suit_selector_$_iter__101064.call(null,cljs.core.chunk_rest.call(null,s__101065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__101067),null);
}
} else {
var vec__101071 = cljs.core.first.call(null,s__101065__$2);
var k = cljs.core.nth.call(null,vec__101071,(0),null);
var v = cljs.core.nth.call(null,vec__101071,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,k,active))?"pure-menu-active":null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__101071,k,v,s__101065__$2,temp__5818__auto__,lang,active,map__101063,map__101063__$1,sub,emit){
return (function (e){
e.preventDefault();

return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","activate","suit/activate",505058577),k], null));
});})(vec__101071,k,v,s__101065__$2,temp__5818__auto__,lang,active,map__101063,map__101063__$1,sub,emit))
], null),(function (){var or__5045__auto__ = cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),lang], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"en","en",88457073)], null));
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),tse$board$suit_selector_$_iter__101064.call(null,cljs.core.rest.call(null,s__101065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","active","suitcase/active",-505131497)], null))),new cljs.core.Keyword(null,"suits","suits",-426777515))));
})()], null)], null);
});
tse.board.card_selector = (function tse$board$card_selector(p__101075){
var map__101076 = p__101075;
var map__101076__$1 = cljs.core.__destructure_map.call(null,map__101076);
var sub = cljs.core.get.call(null,map__101076__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__101076__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var deck = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","active-id","deck/active-id",-62319671)], null)));
var suit = cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active-id","suit/active-id",-62520787)], null)));
var used = cljs.core.set.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","used-by-deck","card/used-by-deck",-53961823),deck], null))));
var iter__5523__auto__ = (function tse$board$card_selector_$_iter__101077(s__101078){
return (new cljs.core.LazySeq(null,(function (){
var s__101078__$1 = s__101078;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__101078__$1);
if(temp__5818__auto__){
var s__101078__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__101078__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__101078__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__101080 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__101079 = (0);
while(true){
if((i__101079 < size__5522__auto__)){
var map__101081 = cljs.core._nth.call(null,c__5521__auto__,i__101079);
var map__101081__$1 = cljs.core.__destructure_map.call(null,map__101081);
var src = cljs.core.get.call(null,map__101081__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var index = cljs.core.get.call(null,map__101081__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
cljs.core.chunk_append.call(null,b__101080,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mini","a.mini",1078433473),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,used,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,index], null)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__101079,map__101081,map__101081__$1,src,index,c__5521__auto__,size__5522__auto__,b__101080,s__101078__$2,temp__5818__auto__,deck,suit,used,map__101076,map__101076__$1,sub,emit){
return (function (e){
e.preventDefault();

return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","add","card/add",223641035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),deck,new cljs.core.Keyword(null,"suit","suit",-869827520),suit,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], null));
});})(i__101079,map__101081,map__101081__$1,src,index,c__5521__auto__,size__5522__auto__,b__101080,s__101078__$2,temp__5818__auto__,deck,suit,used,map__101076,map__101076__$1,sub,emit))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(120)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),src], null)));

var G__101083 = (i__101079 + (1));
i__101079 = G__101083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__101080),tse$board$card_selector_$_iter__101077.call(null,cljs.core.chunk_rest.call(null,s__101078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__101080),null);
}
} else {
var map__101082 = cljs.core.first.call(null,s__101078__$2);
var map__101082__$1 = cljs.core.__destructure_map.call(null,map__101082);
var src = cljs.core.get.call(null,map__101082__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var index = cljs.core.get.call(null,map__101082__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mini","a.mini",1078433473),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,used,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,index], null)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__101082,map__101082__$1,src,index,s__101078__$2,temp__5818__auto__,deck,suit,used,map__101076,map__101076__$1,sub,emit){
return (function (e){
e.preventDefault();

return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","add","card/add",223641035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),deck,new cljs.core.Keyword(null,"suit","suit",-869827520),suit,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], null));
});})(map__101082,map__101082__$1,src,index,s__101078__$2,temp__5818__auto__,deck,suit,used,map__101076,map__101076__$1,sub,emit))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(120)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),src], null)),tse$board$card_selector_$_iter__101077.call(null,cljs.core.rest.call(null,s__101078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suit","active-cards","suit/active-cards",-1107529247)], null))));
})()], null);
});
tse.board.view = (function tse$board$view(p__101085){
var map__101086 = p__101085;
var map__101086__$1 = cljs.core.__destructure_map.call(null,map__101086);
var ctx = map__101086__$1;
var sub = cljs.core.get.call(null,map__101086__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var emit = cljs.core.get.call(null,map__101086__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.deck_search.view,ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.board.suit_selector,ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.board.card_selector,ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pure-button","button.pure-button",698850720),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("board","random-hint","board/random-hint",1461350211),"Draw random card"], null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","random","card/random",-554683065)], null));
})], null),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("board","random","board/random",-330716819),"random"], null)))], null),"\u00A0",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-checkbox","label.pure-checkbox",-433737792),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("board","reversible?-hint","board/reversible?-hint",-1405685567),"reversible?"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","random-reversible?","card/random-reversible?",2068479445)], null))))?"checked":null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__101084_SHARP_){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","set-random-reversible","card/set-random-reversible",1002600429),p1__101084_SHARP_.target.checked], null));
})], null)], null),"\u00A0",cljs.core.deref.call(null,sub.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword("board","reversible?","board/reversible?",-1232506808),"reversible?"], null)))], null)], null)], null)], null)], null);
});

//# sourceMappingURL=board.js.map?rel=1767875393143
