// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.core');
goog.require('cljs.core');
goog.require('carbon.vdom');
goog.require('carbon.rx');
goog.require('tse.app');
goog.require('tse.sub');
goog.require('tse.effect');
goog.require('tse.db');
goog.require('tse.i18n');
goog.require('tse.card.sub');
goog.require('tse.card.eff');
goog.require('tse.deck.sub');
goog.require('tse.deck.eff');
goog.require('tse.suitcase.sub');
goog.require('tse.suitcase.eff');
goog.require('tse.suit.sub');
goog.require('tse.suit.eff');
goog.require('tse.item.sub');
goog.require('tse.item.eff');
goog.require('tse.canvas.sub');
goog.require('tse.canvas.eff');
goog.require('tse.config.sub');
goog.require('tse.config.eff');
goog.require('tse.transformer.sub');
goog.require('tse.transformer.eff');
goog.require('tse.share.sub');
goog.require('tse.share.eff');
goog.require('tse.label.sub');
goog.require('tse.label.eff');
goog.require('tse.label_editor.sub');
goog.require('tse.label_editor.eff');
goog.require('tse.background_dialog.sub');
goog.require('tse.background_dialog.eff');
goog.require('tse.background.sub');
goog.require('tse.background.eff');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof tse !== 'undefined') && (typeof tse.core !== 'undefined') && (typeof tse.core.ctx !== 'undefined')){
} else {
tse.core.ctx = (function (){var s = tse.sub.make.call(null,tse.db.app_db);
var e = tse.effect.make.call(null,tse.db.app_db,cljs.core.get.call(null,s,new cljs.core.Keyword(null,"sub","sub",-2093760025)));
return cljs.core.merge.call(null,s,e);
})();
}
tse.core.register_subscriptions = (function tse$core$register_subscriptions(var_args){
var args__4534__auto__ = [];
var len__4531__auto___54118 = arguments.length;
var i__4532__auto___54119 = (0);
while(true){
if((i__4532__auto___54119 < len__4531__auto___54118)){
args__4534__auto__.push((arguments[i__4532__auto___54119]));

var G__54120 = (i__4532__auto___54119 + (1));
i__4532__auto___54119 = G__54120;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return tse.core.register_subscriptions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

tse.core.register_subscriptions.cljs$core$IFn$_invoke$arity$variadic = (function (p__54091,specs){
var map__54092 = p__54091;
var map__54092__$1 = ((((!((map__54092 == null)))?(((((map__54092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54092):map__54092);
var register_subscription = cljs.core.get.call(null,map__54092__$1,new cljs.core.Keyword(null,"register-subscription","register-subscription",1330709788));
var register_cursor = cljs.core.get.call(null,map__54092__$1,new cljs.core.Keyword(null,"register-cursor","register-cursor",-1680477237));
var seq__54094 = cljs.core.seq.call(null,specs);
var chunk__54099 = null;
var count__54100 = (0);
var i__54101 = (0);
while(true){
if((i__54101 < count__54100)){
var spec = cljs.core._nth.call(null,chunk__54099,i__54101);
var seq__54102_54121 = cljs.core.seq.call(null,spec);
var chunk__54103_54122 = null;
var count__54104_54123 = (0);
var i__54105_54124 = (0);
while(true){
if((i__54105_54124 < count__54104_54123)){
var vec__54106_54125 = cljs.core._nth.call(null,chunk__54103_54122,i__54105_54124);
var key_54126 = cljs.core.nth.call(null,vec__54106_54125,(0),null);
var f_54127 = cljs.core.nth.call(null,vec__54106_54125,(1),null);
((cljs.core.vector_QMARK_.call(null,f_54127))?register_cursor:register_subscription).call(null,key_54126,f_54127);


var G__54128 = seq__54102_54121;
var G__54129 = chunk__54103_54122;
var G__54130 = count__54104_54123;
var G__54131 = (i__54105_54124 + (1));
seq__54102_54121 = G__54128;
chunk__54103_54122 = G__54129;
count__54104_54123 = G__54130;
i__54105_54124 = G__54131;
continue;
} else {
var temp__5559__auto___54132 = cljs.core.seq.call(null,seq__54102_54121);
if(temp__5559__auto___54132){
var seq__54102_54133__$1 = temp__5559__auto___54132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54102_54133__$1)){
var c__4351__auto___54134 = cljs.core.chunk_first.call(null,seq__54102_54133__$1);
var G__54135 = cljs.core.chunk_rest.call(null,seq__54102_54133__$1);
var G__54136 = c__4351__auto___54134;
var G__54137 = cljs.core.count.call(null,c__4351__auto___54134);
var G__54138 = (0);
seq__54102_54121 = G__54135;
chunk__54103_54122 = G__54136;
count__54104_54123 = G__54137;
i__54105_54124 = G__54138;
continue;
} else {
var vec__54109_54139 = cljs.core.first.call(null,seq__54102_54133__$1);
var key_54140 = cljs.core.nth.call(null,vec__54109_54139,(0),null);
var f_54141 = cljs.core.nth.call(null,vec__54109_54139,(1),null);
((cljs.core.vector_QMARK_.call(null,f_54141))?register_cursor:register_subscription).call(null,key_54140,f_54141);


var G__54142 = cljs.core.next.call(null,seq__54102_54133__$1);
var G__54143 = null;
var G__54144 = (0);
var G__54145 = (0);
seq__54102_54121 = G__54142;
chunk__54103_54122 = G__54143;
count__54104_54123 = G__54144;
i__54105_54124 = G__54145;
continue;
}
} else {
}
}
break;
}

var G__54146 = seq__54094;
var G__54147 = chunk__54099;
var G__54148 = count__54100;
var G__54149 = (i__54101 + (1));
seq__54094 = G__54146;
chunk__54099 = G__54147;
count__54100 = G__54148;
i__54101 = G__54149;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__54094);
if(temp__5559__auto__){
var seq__54094__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54094__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__54094__$1);
var G__54150 = cljs.core.chunk_rest.call(null,seq__54094__$1);
var G__54151 = c__4351__auto__;
var G__54152 = cljs.core.count.call(null,c__4351__auto__);
var G__54153 = (0);
seq__54094 = G__54150;
chunk__54099 = G__54151;
count__54100 = G__54152;
i__54101 = G__54153;
continue;
} else {
var spec = cljs.core.first.call(null,seq__54094__$1);
var seq__54095_54154 = cljs.core.seq.call(null,spec);
var chunk__54096_54155 = null;
var count__54097_54156 = (0);
var i__54098_54157 = (0);
while(true){
if((i__54098_54157 < count__54097_54156)){
var vec__54112_54158 = cljs.core._nth.call(null,chunk__54096_54155,i__54098_54157);
var key_54159 = cljs.core.nth.call(null,vec__54112_54158,(0),null);
var f_54160 = cljs.core.nth.call(null,vec__54112_54158,(1),null);
((cljs.core.vector_QMARK_.call(null,f_54160))?register_cursor:register_subscription).call(null,key_54159,f_54160);


var G__54161 = seq__54095_54154;
var G__54162 = chunk__54096_54155;
var G__54163 = count__54097_54156;
var G__54164 = (i__54098_54157 + (1));
seq__54095_54154 = G__54161;
chunk__54096_54155 = G__54162;
count__54097_54156 = G__54163;
i__54098_54157 = G__54164;
continue;
} else {
var temp__5559__auto___54165__$1 = cljs.core.seq.call(null,seq__54095_54154);
if(temp__5559__auto___54165__$1){
var seq__54095_54166__$1 = temp__5559__auto___54165__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54095_54166__$1)){
var c__4351__auto___54167 = cljs.core.chunk_first.call(null,seq__54095_54166__$1);
var G__54168 = cljs.core.chunk_rest.call(null,seq__54095_54166__$1);
var G__54169 = c__4351__auto___54167;
var G__54170 = cljs.core.count.call(null,c__4351__auto___54167);
var G__54171 = (0);
seq__54095_54154 = G__54168;
chunk__54096_54155 = G__54169;
count__54097_54156 = G__54170;
i__54098_54157 = G__54171;
continue;
} else {
var vec__54115_54172 = cljs.core.first.call(null,seq__54095_54166__$1);
var key_54173 = cljs.core.nth.call(null,vec__54115_54172,(0),null);
var f_54174 = cljs.core.nth.call(null,vec__54115_54172,(1),null);
((cljs.core.vector_QMARK_.call(null,f_54174))?register_cursor:register_subscription).call(null,key_54173,f_54174);


var G__54175 = cljs.core.next.call(null,seq__54095_54166__$1);
var G__54176 = null;
var G__54177 = (0);
var G__54178 = (0);
seq__54095_54154 = G__54175;
chunk__54096_54155 = G__54176;
count__54097_54156 = G__54177;
i__54098_54157 = G__54178;
continue;
}
} else {
}
}
break;
}

var G__54179 = cljs.core.next.call(null,seq__54094__$1);
var G__54180 = null;
var G__54181 = (0);
var G__54182 = (0);
seq__54094 = G__54179;
chunk__54099 = G__54180;
count__54100 = G__54181;
i__54101 = G__54182;
continue;
}
} else {
return null;
}
}
break;
}
});

tse.core.register_subscriptions.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tse.core.register_subscriptions.cljs$lang$applyTo = (function (seq54089){
var G__54090 = cljs.core.first.call(null,seq54089);
var seq54089__$1 = cljs.core.next.call(null,seq54089);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54090,seq54089__$1);
});

tse.core.register_effects = (function tse$core$register_effects(var_args){
var args__4534__auto__ = [];
var len__4531__auto___54212 = arguments.length;
var i__4532__auto___54213 = (0);
while(true){
if((i__4532__auto___54213 < len__4531__auto___54212)){
args__4534__auto__.push((arguments[i__4532__auto___54213]));

var G__54214 = (i__4532__auto___54213 + (1));
i__4532__auto___54213 = G__54214;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return tse.core.register_effects.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

tse.core.register_effects.cljs$core$IFn$_invoke$arity$variadic = (function (p__54185,specs){
var map__54186 = p__54185;
var map__54186__$1 = ((((!((map__54186 == null)))?(((((map__54186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54186):map__54186);
var register_effect = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"register-effect","register-effect",163395106));
var seq__54188 = cljs.core.seq.call(null,specs);
var chunk__54193 = null;
var count__54194 = (0);
var i__54195 = (0);
while(true){
if((i__54195 < count__54194)){
var spec = cljs.core._nth.call(null,chunk__54193,i__54195);
var seq__54196_54215 = cljs.core.seq.call(null,spec);
var chunk__54197_54216 = null;
var count__54198_54217 = (0);
var i__54199_54218 = (0);
while(true){
if((i__54199_54218 < count__54198_54217)){
var vec__54200_54219 = cljs.core._nth.call(null,chunk__54197_54216,i__54199_54218);
var key_54220 = cljs.core.nth.call(null,vec__54200_54219,(0),null);
var v_54221 = cljs.core.nth.call(null,vec__54200_54219,(1),null);
register_effect.call(null,key_54220,v_54221);


var G__54222 = seq__54196_54215;
var G__54223 = chunk__54197_54216;
var G__54224 = count__54198_54217;
var G__54225 = (i__54199_54218 + (1));
seq__54196_54215 = G__54222;
chunk__54197_54216 = G__54223;
count__54198_54217 = G__54224;
i__54199_54218 = G__54225;
continue;
} else {
var temp__5559__auto___54226 = cljs.core.seq.call(null,seq__54196_54215);
if(temp__5559__auto___54226){
var seq__54196_54227__$1 = temp__5559__auto___54226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54196_54227__$1)){
var c__4351__auto___54228 = cljs.core.chunk_first.call(null,seq__54196_54227__$1);
var G__54229 = cljs.core.chunk_rest.call(null,seq__54196_54227__$1);
var G__54230 = c__4351__auto___54228;
var G__54231 = cljs.core.count.call(null,c__4351__auto___54228);
var G__54232 = (0);
seq__54196_54215 = G__54229;
chunk__54197_54216 = G__54230;
count__54198_54217 = G__54231;
i__54199_54218 = G__54232;
continue;
} else {
var vec__54203_54233 = cljs.core.first.call(null,seq__54196_54227__$1);
var key_54234 = cljs.core.nth.call(null,vec__54203_54233,(0),null);
var v_54235 = cljs.core.nth.call(null,vec__54203_54233,(1),null);
register_effect.call(null,key_54234,v_54235);


var G__54236 = cljs.core.next.call(null,seq__54196_54227__$1);
var G__54237 = null;
var G__54238 = (0);
var G__54239 = (0);
seq__54196_54215 = G__54236;
chunk__54197_54216 = G__54237;
count__54198_54217 = G__54238;
i__54199_54218 = G__54239;
continue;
}
} else {
}
}
break;
}

var G__54240 = seq__54188;
var G__54241 = chunk__54193;
var G__54242 = count__54194;
var G__54243 = (i__54195 + (1));
seq__54188 = G__54240;
chunk__54193 = G__54241;
count__54194 = G__54242;
i__54195 = G__54243;
continue;
} else {
var temp__5559__auto__ = cljs.core.seq.call(null,seq__54188);
if(temp__5559__auto__){
var seq__54188__$1 = temp__5559__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54188__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__54188__$1);
var G__54244 = cljs.core.chunk_rest.call(null,seq__54188__$1);
var G__54245 = c__4351__auto__;
var G__54246 = cljs.core.count.call(null,c__4351__auto__);
var G__54247 = (0);
seq__54188 = G__54244;
chunk__54193 = G__54245;
count__54194 = G__54246;
i__54195 = G__54247;
continue;
} else {
var spec = cljs.core.first.call(null,seq__54188__$1);
var seq__54189_54248 = cljs.core.seq.call(null,spec);
var chunk__54190_54249 = null;
var count__54191_54250 = (0);
var i__54192_54251 = (0);
while(true){
if((i__54192_54251 < count__54191_54250)){
var vec__54206_54252 = cljs.core._nth.call(null,chunk__54190_54249,i__54192_54251);
var key_54253 = cljs.core.nth.call(null,vec__54206_54252,(0),null);
var v_54254 = cljs.core.nth.call(null,vec__54206_54252,(1),null);
register_effect.call(null,key_54253,v_54254);


var G__54255 = seq__54189_54248;
var G__54256 = chunk__54190_54249;
var G__54257 = count__54191_54250;
var G__54258 = (i__54192_54251 + (1));
seq__54189_54248 = G__54255;
chunk__54190_54249 = G__54256;
count__54191_54250 = G__54257;
i__54192_54251 = G__54258;
continue;
} else {
var temp__5559__auto___54259__$1 = cljs.core.seq.call(null,seq__54189_54248);
if(temp__5559__auto___54259__$1){
var seq__54189_54260__$1 = temp__5559__auto___54259__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54189_54260__$1)){
var c__4351__auto___54261 = cljs.core.chunk_first.call(null,seq__54189_54260__$1);
var G__54262 = cljs.core.chunk_rest.call(null,seq__54189_54260__$1);
var G__54263 = c__4351__auto___54261;
var G__54264 = cljs.core.count.call(null,c__4351__auto___54261);
var G__54265 = (0);
seq__54189_54248 = G__54262;
chunk__54190_54249 = G__54263;
count__54191_54250 = G__54264;
i__54192_54251 = G__54265;
continue;
} else {
var vec__54209_54266 = cljs.core.first.call(null,seq__54189_54260__$1);
var key_54267 = cljs.core.nth.call(null,vec__54209_54266,(0),null);
var v_54268 = cljs.core.nth.call(null,vec__54209_54266,(1),null);
register_effect.call(null,key_54267,v_54268);


var G__54269 = cljs.core.next.call(null,seq__54189_54260__$1);
var G__54270 = null;
var G__54271 = (0);
var G__54272 = (0);
seq__54189_54248 = G__54269;
chunk__54190_54249 = G__54270;
count__54191_54250 = G__54271;
i__54192_54251 = G__54272;
continue;
}
} else {
}
}
break;
}

var G__54273 = cljs.core.next.call(null,seq__54188__$1);
var G__54274 = null;
var G__54275 = (0);
var G__54276 = (0);
seq__54188 = G__54273;
chunk__54193 = G__54274;
count__54194 = G__54275;
i__54195 = G__54276;
continue;
}
} else {
return null;
}
}
break;
}
});

tse.core.register_effects.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tse.core.register_effects.cljs$lang$applyTo = (function (seq54183){
var G__54184 = cljs.core.first.call(null,seq54183);
var seq54183__$1 = cljs.core.next.call(null,seq54183);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54184,seq54183__$1);
});

tse.core.register_subscriptions.call(null,tse.core.ctx,tse.i18n.sub,tse.card.sub.spec,tse.deck.sub.spec,tse.suitcase.sub.spec,tse.suit.sub.spec,tse.item.sub.spec,tse.canvas.sub.spec,tse.config.sub.spec,tse.transformer.sub.spec,tse.share.sub.spec,tse.label.sub.spec,tse.label_editor.sub.spec,tse.background_dialog.sub.spec,tse.background.sub.spec);
tse.core.register_effects.call(null,tse.core.ctx,tse.i18n.eff,tse.card.eff.spec,tse.deck.eff.spec,tse.suitcase.eff.spec,tse.suit.eff.spec,tse.item.eff.spec,tse.canvas.eff.spec,tse.config.eff.spec,tse.transformer.eff.spec,tse.share.eff.spec,tse.label.eff.spec,tse.label_editor.eff.spec,tse.background_dialog.eff.spec,tse.background.eff.spec);
cljs.core.get.call(null,tse.core.ctx,new cljs.core.Keyword(null,"emit","emit",-1327179018)).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","load","deck/load",-1315559865)], null));
cljs.core.get.call(null,tse.core.ctx,new cljs.core.Keyword(null,"emit","emit",-1327179018)).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","load","suitcase/load",545612115)], null));
carbon.vdom.mount.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.app.view,tse.core.ctx], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1537946283776
