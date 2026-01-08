// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
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
var args__5775__auto__ = [];
var len__5769__auto___103123 = arguments.length;
var i__5770__auto___103124 = (0);
while(true){
if((i__5770__auto___103124 < len__5769__auto___103123)){
args__5775__auto__.push((arguments[i__5770__auto___103124]));

var G__103125 = (i__5770__auto___103124 + (1));
i__5770__auto___103124 = G__103125;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tse.core.register_subscriptions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tse.core.register_subscriptions.cljs$core$IFn$_invoke$arity$variadic = (function (p__103061,specs){
var map__103062 = p__103061;
var map__103062__$1 = cljs.core.__destructure_map.call(null,map__103062);
var register_subscription = cljs.core.get.call(null,map__103062__$1,new cljs.core.Keyword(null,"register-subscription","register-subscription",1330709788));
var register_cursor = cljs.core.get.call(null,map__103062__$1,new cljs.core.Keyword(null,"register-cursor","register-cursor",-1680477237));
var seq__103063 = cljs.core.seq.call(null,specs);
var chunk__103068 = null;
var count__103069 = (0);
var i__103070 = (0);
while(true){
if((i__103070 < count__103069)){
var spec = cljs.core._nth.call(null,chunk__103068,i__103070);
var seq__103071_103126 = cljs.core.seq.call(null,spec);
var chunk__103072_103127 = null;
var count__103073_103128 = (0);
var i__103074_103129 = (0);
while(true){
if((i__103074_103129 < count__103073_103128)){
var vec__103105_103130 = cljs.core._nth.call(null,chunk__103072_103127,i__103074_103129);
var key_103131 = cljs.core.nth.call(null,vec__103105_103130,(0),null);
var f_103132 = cljs.core.nth.call(null,vec__103105_103130,(1),null);
((cljs.core.vector_QMARK_.call(null,f_103132))?register_cursor:register_subscription).call(null,key_103131,f_103132);


var G__103133 = seq__103071_103126;
var G__103134 = chunk__103072_103127;
var G__103135 = count__103073_103128;
var G__103136 = (i__103074_103129 + (1));
seq__103071_103126 = G__103133;
chunk__103072_103127 = G__103134;
count__103073_103128 = G__103135;
i__103074_103129 = G__103136;
continue;
} else {
var temp__5818__auto___103137 = cljs.core.seq.call(null,seq__103071_103126);
if(temp__5818__auto___103137){
var seq__103071_103138__$1 = temp__5818__auto___103137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103071_103138__$1)){
var c__5568__auto___103139 = cljs.core.chunk_first.call(null,seq__103071_103138__$1);
var G__103140 = cljs.core.chunk_rest.call(null,seq__103071_103138__$1);
var G__103141 = c__5568__auto___103139;
var G__103142 = cljs.core.count.call(null,c__5568__auto___103139);
var G__103143 = (0);
seq__103071_103126 = G__103140;
chunk__103072_103127 = G__103141;
count__103073_103128 = G__103142;
i__103074_103129 = G__103143;
continue;
} else {
var vec__103108_103144 = cljs.core.first.call(null,seq__103071_103138__$1);
var key_103145 = cljs.core.nth.call(null,vec__103108_103144,(0),null);
var f_103146 = cljs.core.nth.call(null,vec__103108_103144,(1),null);
((cljs.core.vector_QMARK_.call(null,f_103146))?register_cursor:register_subscription).call(null,key_103145,f_103146);


var G__103147 = cljs.core.next.call(null,seq__103071_103138__$1);
var G__103148 = null;
var G__103149 = (0);
var G__103150 = (0);
seq__103071_103126 = G__103147;
chunk__103072_103127 = G__103148;
count__103073_103128 = G__103149;
i__103074_103129 = G__103150;
continue;
}
} else {
}
}
break;
}

var G__103151 = seq__103063;
var G__103152 = chunk__103068;
var G__103153 = count__103069;
var G__103154 = (i__103070 + (1));
seq__103063 = G__103151;
chunk__103068 = G__103152;
count__103069 = G__103153;
i__103070 = G__103154;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__103063);
if(temp__5818__auto__){
var seq__103063__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103063__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__103063__$1);
var G__103155 = cljs.core.chunk_rest.call(null,seq__103063__$1);
var G__103156 = c__5568__auto__;
var G__103157 = cljs.core.count.call(null,c__5568__auto__);
var G__103158 = (0);
seq__103063 = G__103155;
chunk__103068 = G__103156;
count__103069 = G__103157;
i__103070 = G__103158;
continue;
} else {
var spec = cljs.core.first.call(null,seq__103063__$1);
var seq__103064_103159 = cljs.core.seq.call(null,spec);
var chunk__103065_103160 = null;
var count__103066_103161 = (0);
var i__103067_103162 = (0);
while(true){
if((i__103067_103162 < count__103066_103161)){
var vec__103117_103163 = cljs.core._nth.call(null,chunk__103065_103160,i__103067_103162);
var key_103164 = cljs.core.nth.call(null,vec__103117_103163,(0),null);
var f_103165 = cljs.core.nth.call(null,vec__103117_103163,(1),null);
((cljs.core.vector_QMARK_.call(null,f_103165))?register_cursor:register_subscription).call(null,key_103164,f_103165);


var G__103166 = seq__103064_103159;
var G__103167 = chunk__103065_103160;
var G__103168 = count__103066_103161;
var G__103169 = (i__103067_103162 + (1));
seq__103064_103159 = G__103166;
chunk__103065_103160 = G__103167;
count__103066_103161 = G__103168;
i__103067_103162 = G__103169;
continue;
} else {
var temp__5818__auto___103170__$1 = cljs.core.seq.call(null,seq__103064_103159);
if(temp__5818__auto___103170__$1){
var seq__103064_103171__$1 = temp__5818__auto___103170__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103064_103171__$1)){
var c__5568__auto___103172 = cljs.core.chunk_first.call(null,seq__103064_103171__$1);
var G__103173 = cljs.core.chunk_rest.call(null,seq__103064_103171__$1);
var G__103174 = c__5568__auto___103172;
var G__103175 = cljs.core.count.call(null,c__5568__auto___103172);
var G__103176 = (0);
seq__103064_103159 = G__103173;
chunk__103065_103160 = G__103174;
count__103066_103161 = G__103175;
i__103067_103162 = G__103176;
continue;
} else {
var vec__103120_103177 = cljs.core.first.call(null,seq__103064_103171__$1);
var key_103178 = cljs.core.nth.call(null,vec__103120_103177,(0),null);
var f_103179 = cljs.core.nth.call(null,vec__103120_103177,(1),null);
((cljs.core.vector_QMARK_.call(null,f_103179))?register_cursor:register_subscription).call(null,key_103178,f_103179);


var G__103180 = cljs.core.next.call(null,seq__103064_103171__$1);
var G__103181 = null;
var G__103182 = (0);
var G__103183 = (0);
seq__103064_103159 = G__103180;
chunk__103065_103160 = G__103181;
count__103066_103161 = G__103182;
i__103067_103162 = G__103183;
continue;
}
} else {
}
}
break;
}

var G__103184 = cljs.core.next.call(null,seq__103063__$1);
var G__103185 = null;
var G__103186 = (0);
var G__103187 = (0);
seq__103063 = G__103184;
chunk__103068 = G__103185;
count__103069 = G__103186;
i__103070 = G__103187;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tse.core.register_subscriptions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tse.core.register_subscriptions.cljs$lang$applyTo = (function (seq103059){
var G__103060 = cljs.core.first.call(null,seq103059);
var seq103059__$1 = cljs.core.next.call(null,seq103059);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103060,seq103059__$1);
}));

tse.core.register_effects = (function tse$core$register_effects(var_args){
var args__5775__auto__ = [];
var len__5769__auto___103252 = arguments.length;
var i__5770__auto___103253 = (0);
while(true){
if((i__5770__auto___103253 < len__5769__auto___103252)){
args__5775__auto__.push((arguments[i__5770__auto___103253]));

var G__103254 = (i__5770__auto___103253 + (1));
i__5770__auto___103253 = G__103254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tse.core.register_effects.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tse.core.register_effects.cljs$core$IFn$_invoke$arity$variadic = (function (p__103190,specs){
var map__103191 = p__103190;
var map__103191__$1 = cljs.core.__destructure_map.call(null,map__103191);
var register_effect = cljs.core.get.call(null,map__103191__$1,new cljs.core.Keyword(null,"register-effect","register-effect",163395106));
var seq__103192 = cljs.core.seq.call(null,specs);
var chunk__103197 = null;
var count__103198 = (0);
var i__103199 = (0);
while(true){
if((i__103199 < count__103198)){
var spec = cljs.core._nth.call(null,chunk__103197,i__103199);
var seq__103200_103255 = cljs.core.seq.call(null,spec);
var chunk__103201_103256 = null;
var count__103202_103257 = (0);
var i__103203_103258 = (0);
while(true){
if((i__103203_103258 < count__103202_103257)){
var vec__103234_103259 = cljs.core._nth.call(null,chunk__103201_103256,i__103203_103258);
var key_103260 = cljs.core.nth.call(null,vec__103234_103259,(0),null);
var v_103261 = cljs.core.nth.call(null,vec__103234_103259,(1),null);
register_effect.call(null,key_103260,v_103261);


var G__103262 = seq__103200_103255;
var G__103263 = chunk__103201_103256;
var G__103264 = count__103202_103257;
var G__103265 = (i__103203_103258 + (1));
seq__103200_103255 = G__103262;
chunk__103201_103256 = G__103263;
count__103202_103257 = G__103264;
i__103203_103258 = G__103265;
continue;
} else {
var temp__5818__auto___103266 = cljs.core.seq.call(null,seq__103200_103255);
if(temp__5818__auto___103266){
var seq__103200_103267__$1 = temp__5818__auto___103266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103200_103267__$1)){
var c__5568__auto___103268 = cljs.core.chunk_first.call(null,seq__103200_103267__$1);
var G__103269 = cljs.core.chunk_rest.call(null,seq__103200_103267__$1);
var G__103270 = c__5568__auto___103268;
var G__103271 = cljs.core.count.call(null,c__5568__auto___103268);
var G__103272 = (0);
seq__103200_103255 = G__103269;
chunk__103201_103256 = G__103270;
count__103202_103257 = G__103271;
i__103203_103258 = G__103272;
continue;
} else {
var vec__103237_103273 = cljs.core.first.call(null,seq__103200_103267__$1);
var key_103274 = cljs.core.nth.call(null,vec__103237_103273,(0),null);
var v_103275 = cljs.core.nth.call(null,vec__103237_103273,(1),null);
register_effect.call(null,key_103274,v_103275);


var G__103276 = cljs.core.next.call(null,seq__103200_103267__$1);
var G__103277 = null;
var G__103278 = (0);
var G__103279 = (0);
seq__103200_103255 = G__103276;
chunk__103201_103256 = G__103277;
count__103202_103257 = G__103278;
i__103203_103258 = G__103279;
continue;
}
} else {
}
}
break;
}

var G__103280 = seq__103192;
var G__103281 = chunk__103197;
var G__103282 = count__103198;
var G__103283 = (i__103199 + (1));
seq__103192 = G__103280;
chunk__103197 = G__103281;
count__103198 = G__103282;
i__103199 = G__103283;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__103192);
if(temp__5818__auto__){
var seq__103192__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103192__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__103192__$1);
var G__103284 = cljs.core.chunk_rest.call(null,seq__103192__$1);
var G__103285 = c__5568__auto__;
var G__103286 = cljs.core.count.call(null,c__5568__auto__);
var G__103287 = (0);
seq__103192 = G__103284;
chunk__103197 = G__103285;
count__103198 = G__103286;
i__103199 = G__103287;
continue;
} else {
var spec = cljs.core.first.call(null,seq__103192__$1);
var seq__103193_103288 = cljs.core.seq.call(null,spec);
var chunk__103194_103289 = null;
var count__103195_103290 = (0);
var i__103196_103291 = (0);
while(true){
if((i__103196_103291 < count__103195_103290)){
var vec__103246_103292 = cljs.core._nth.call(null,chunk__103194_103289,i__103196_103291);
var key_103293 = cljs.core.nth.call(null,vec__103246_103292,(0),null);
var v_103294 = cljs.core.nth.call(null,vec__103246_103292,(1),null);
register_effect.call(null,key_103293,v_103294);


var G__103295 = seq__103193_103288;
var G__103296 = chunk__103194_103289;
var G__103297 = count__103195_103290;
var G__103298 = (i__103196_103291 + (1));
seq__103193_103288 = G__103295;
chunk__103194_103289 = G__103296;
count__103195_103290 = G__103297;
i__103196_103291 = G__103298;
continue;
} else {
var temp__5818__auto___103299__$1 = cljs.core.seq.call(null,seq__103193_103288);
if(temp__5818__auto___103299__$1){
var seq__103193_103300__$1 = temp__5818__auto___103299__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103193_103300__$1)){
var c__5568__auto___103301 = cljs.core.chunk_first.call(null,seq__103193_103300__$1);
var G__103302 = cljs.core.chunk_rest.call(null,seq__103193_103300__$1);
var G__103303 = c__5568__auto___103301;
var G__103304 = cljs.core.count.call(null,c__5568__auto___103301);
var G__103305 = (0);
seq__103193_103288 = G__103302;
chunk__103194_103289 = G__103303;
count__103195_103290 = G__103304;
i__103196_103291 = G__103305;
continue;
} else {
var vec__103249_103306 = cljs.core.first.call(null,seq__103193_103300__$1);
var key_103307 = cljs.core.nth.call(null,vec__103249_103306,(0),null);
var v_103308 = cljs.core.nth.call(null,vec__103249_103306,(1),null);
register_effect.call(null,key_103307,v_103308);


var G__103309 = cljs.core.next.call(null,seq__103193_103300__$1);
var G__103310 = null;
var G__103311 = (0);
var G__103312 = (0);
seq__103193_103288 = G__103309;
chunk__103194_103289 = G__103310;
count__103195_103290 = G__103311;
i__103196_103291 = G__103312;
continue;
}
} else {
}
}
break;
}

var G__103313 = cljs.core.next.call(null,seq__103192__$1);
var G__103314 = null;
var G__103315 = (0);
var G__103316 = (0);
seq__103192 = G__103313;
chunk__103197 = G__103314;
count__103198 = G__103315;
i__103199 = G__103316;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tse.core.register_effects.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tse.core.register_effects.cljs$lang$applyTo = (function (seq103188){
var G__103189 = cljs.core.first.call(null,seq103188);
var seq103188__$1 = cljs.core.next.call(null,seq103188);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103189,seq103188__$1);
}));

tse.core.register_subscriptions.call(null,tse.core.ctx,tse.i18n.sub,tse.card.sub.spec,tse.deck.sub.spec,tse.suitcase.sub.spec,tse.suit.sub.spec,tse.item.sub.spec,tse.canvas.sub.spec,tse.config.sub.spec,tse.transformer.sub.spec,tse.share.sub.spec,tse.label.sub.spec,tse.label_editor.sub.spec,tse.background_dialog.sub.spec,tse.background.sub.spec);
tse.core.register_effects.call(null,tse.core.ctx,tse.i18n.eff,tse.card.eff.spec,tse.deck.eff.spec,tse.suitcase.eff.spec,tse.suit.eff.spec,tse.item.eff.spec,tse.canvas.eff.spec,tse.config.eff.spec,tse.transformer.eff.spec,tse.share.eff.spec,tse.label.eff.spec,tse.label_editor.eff.spec,tse.background_dialog.eff.spec,tse.background.eff.spec);
cljs.core.get.call(null,tse.core.ctx,new cljs.core.Keyword(null,"emit","emit",-1327179018)).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("deck","load","deck/load",-1315559865)], null));
cljs.core.get.call(null,tse.core.ctx,new cljs.core.Keyword(null,"emit","emit",-1327179018)).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("suitcase","load","suitcase/load",545612115)], null));
cljs.core.get.call(null,tse.core.ctx,new cljs.core.Keyword(null,"emit","emit",-1327179018)).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("share","load-from-fragment","share/load-from-fragment",-373711793)], null));
window.addEventListener("popstate",(function (_){
return cljs.core.get.call(null,tse.core.ctx,new cljs.core.Keyword(null,"emit","emit",-1327179018)).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("share","load-from-fragment","share/load-from-fragment",-373711793)], null));
}));
carbon.vdom.mount.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tse.app.view,tse.core.ctx], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1767875394285
