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
var len__5769__auto___36732 = arguments.length;
var i__5770__auto___36733 = (0);
while(true){
if((i__5770__auto___36733 < len__5769__auto___36732)){
args__5775__auto__.push((arguments[i__5770__auto___36733]));

var G__36734 = (i__5770__auto___36733 + (1));
i__5770__auto___36733 = G__36734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tse.core.register_subscriptions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tse.core.register_subscriptions.cljs$core$IFn$_invoke$arity$variadic = (function (p__36670,specs){
var map__36671 = p__36670;
var map__36671__$1 = cljs.core.__destructure_map.call(null,map__36671);
var register_subscription = cljs.core.get.call(null,map__36671__$1,new cljs.core.Keyword(null,"register-subscription","register-subscription",1330709788));
var register_cursor = cljs.core.get.call(null,map__36671__$1,new cljs.core.Keyword(null,"register-cursor","register-cursor",-1680477237));
var seq__36672 = cljs.core.seq.call(null,specs);
var chunk__36677 = null;
var count__36678 = (0);
var i__36679 = (0);
while(true){
if((i__36679 < count__36678)){
var spec = cljs.core._nth.call(null,chunk__36677,i__36679);
var seq__36680_36735 = cljs.core.seq.call(null,spec);
var chunk__36681_36736 = null;
var count__36682_36737 = (0);
var i__36683_36738 = (0);
while(true){
if((i__36683_36738 < count__36682_36737)){
var vec__36714_36739 = cljs.core._nth.call(null,chunk__36681_36736,i__36683_36738);
var key_36740 = cljs.core.nth.call(null,vec__36714_36739,(0),null);
var f_36741 = cljs.core.nth.call(null,vec__36714_36739,(1),null);
((cljs.core.vector_QMARK_.call(null,f_36741))?register_cursor:register_subscription).call(null,key_36740,f_36741);


var G__36742 = seq__36680_36735;
var G__36743 = chunk__36681_36736;
var G__36744 = count__36682_36737;
var G__36745 = (i__36683_36738 + (1));
seq__36680_36735 = G__36742;
chunk__36681_36736 = G__36743;
count__36682_36737 = G__36744;
i__36683_36738 = G__36745;
continue;
} else {
var temp__5818__auto___36746 = cljs.core.seq.call(null,seq__36680_36735);
if(temp__5818__auto___36746){
var seq__36680_36747__$1 = temp__5818__auto___36746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36680_36747__$1)){
var c__5568__auto___36748 = cljs.core.chunk_first.call(null,seq__36680_36747__$1);
var G__36749 = cljs.core.chunk_rest.call(null,seq__36680_36747__$1);
var G__36750 = c__5568__auto___36748;
var G__36751 = cljs.core.count.call(null,c__5568__auto___36748);
var G__36752 = (0);
seq__36680_36735 = G__36749;
chunk__36681_36736 = G__36750;
count__36682_36737 = G__36751;
i__36683_36738 = G__36752;
continue;
} else {
var vec__36717_36753 = cljs.core.first.call(null,seq__36680_36747__$1);
var key_36754 = cljs.core.nth.call(null,vec__36717_36753,(0),null);
var f_36755 = cljs.core.nth.call(null,vec__36717_36753,(1),null);
((cljs.core.vector_QMARK_.call(null,f_36755))?register_cursor:register_subscription).call(null,key_36754,f_36755);


var G__36756 = cljs.core.next.call(null,seq__36680_36747__$1);
var G__36757 = null;
var G__36758 = (0);
var G__36759 = (0);
seq__36680_36735 = G__36756;
chunk__36681_36736 = G__36757;
count__36682_36737 = G__36758;
i__36683_36738 = G__36759;
continue;
}
} else {
}
}
break;
}

var G__36760 = seq__36672;
var G__36761 = chunk__36677;
var G__36762 = count__36678;
var G__36763 = (i__36679 + (1));
seq__36672 = G__36760;
chunk__36677 = G__36761;
count__36678 = G__36762;
i__36679 = G__36763;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__36672);
if(temp__5818__auto__){
var seq__36672__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36672__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__36672__$1);
var G__36764 = cljs.core.chunk_rest.call(null,seq__36672__$1);
var G__36765 = c__5568__auto__;
var G__36766 = cljs.core.count.call(null,c__5568__auto__);
var G__36767 = (0);
seq__36672 = G__36764;
chunk__36677 = G__36765;
count__36678 = G__36766;
i__36679 = G__36767;
continue;
} else {
var spec = cljs.core.first.call(null,seq__36672__$1);
var seq__36673_36768 = cljs.core.seq.call(null,spec);
var chunk__36674_36769 = null;
var count__36675_36770 = (0);
var i__36676_36771 = (0);
while(true){
if((i__36676_36771 < count__36675_36770)){
var vec__36726_36772 = cljs.core._nth.call(null,chunk__36674_36769,i__36676_36771);
var key_36773 = cljs.core.nth.call(null,vec__36726_36772,(0),null);
var f_36774 = cljs.core.nth.call(null,vec__36726_36772,(1),null);
((cljs.core.vector_QMARK_.call(null,f_36774))?register_cursor:register_subscription).call(null,key_36773,f_36774);


var G__36775 = seq__36673_36768;
var G__36776 = chunk__36674_36769;
var G__36777 = count__36675_36770;
var G__36778 = (i__36676_36771 + (1));
seq__36673_36768 = G__36775;
chunk__36674_36769 = G__36776;
count__36675_36770 = G__36777;
i__36676_36771 = G__36778;
continue;
} else {
var temp__5818__auto___36779__$1 = cljs.core.seq.call(null,seq__36673_36768);
if(temp__5818__auto___36779__$1){
var seq__36673_36780__$1 = temp__5818__auto___36779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36673_36780__$1)){
var c__5568__auto___36781 = cljs.core.chunk_first.call(null,seq__36673_36780__$1);
var G__36782 = cljs.core.chunk_rest.call(null,seq__36673_36780__$1);
var G__36783 = c__5568__auto___36781;
var G__36784 = cljs.core.count.call(null,c__5568__auto___36781);
var G__36785 = (0);
seq__36673_36768 = G__36782;
chunk__36674_36769 = G__36783;
count__36675_36770 = G__36784;
i__36676_36771 = G__36785;
continue;
} else {
var vec__36729_36786 = cljs.core.first.call(null,seq__36673_36780__$1);
var key_36787 = cljs.core.nth.call(null,vec__36729_36786,(0),null);
var f_36788 = cljs.core.nth.call(null,vec__36729_36786,(1),null);
((cljs.core.vector_QMARK_.call(null,f_36788))?register_cursor:register_subscription).call(null,key_36787,f_36788);


var G__36789 = cljs.core.next.call(null,seq__36673_36780__$1);
var G__36790 = null;
var G__36791 = (0);
var G__36792 = (0);
seq__36673_36768 = G__36789;
chunk__36674_36769 = G__36790;
count__36675_36770 = G__36791;
i__36676_36771 = G__36792;
continue;
}
} else {
}
}
break;
}

var G__36793 = cljs.core.next.call(null,seq__36672__$1);
var G__36794 = null;
var G__36795 = (0);
var G__36796 = (0);
seq__36672 = G__36793;
chunk__36677 = G__36794;
count__36678 = G__36795;
i__36679 = G__36796;
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
(tse.core.register_subscriptions.cljs$lang$applyTo = (function (seq36668){
var G__36669 = cljs.core.first.call(null,seq36668);
var seq36668__$1 = cljs.core.next.call(null,seq36668);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36669,seq36668__$1);
}));

tse.core.register_effects = (function tse$core$register_effects(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36861 = arguments.length;
var i__5770__auto___36862 = (0);
while(true){
if((i__5770__auto___36862 < len__5769__auto___36861)){
args__5775__auto__.push((arguments[i__5770__auto___36862]));

var G__36863 = (i__5770__auto___36862 + (1));
i__5770__auto___36862 = G__36863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return tse.core.register_effects.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(tse.core.register_effects.cljs$core$IFn$_invoke$arity$variadic = (function (p__36799,specs){
var map__36800 = p__36799;
var map__36800__$1 = cljs.core.__destructure_map.call(null,map__36800);
var register_effect = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"register-effect","register-effect",163395106));
var seq__36801 = cljs.core.seq.call(null,specs);
var chunk__36806 = null;
var count__36807 = (0);
var i__36808 = (0);
while(true){
if((i__36808 < count__36807)){
var spec = cljs.core._nth.call(null,chunk__36806,i__36808);
var seq__36809_36864 = cljs.core.seq.call(null,spec);
var chunk__36810_36865 = null;
var count__36811_36866 = (0);
var i__36812_36867 = (0);
while(true){
if((i__36812_36867 < count__36811_36866)){
var vec__36843_36868 = cljs.core._nth.call(null,chunk__36810_36865,i__36812_36867);
var key_36869 = cljs.core.nth.call(null,vec__36843_36868,(0),null);
var v_36870 = cljs.core.nth.call(null,vec__36843_36868,(1),null);
register_effect.call(null,key_36869,v_36870);


var G__36871 = seq__36809_36864;
var G__36872 = chunk__36810_36865;
var G__36873 = count__36811_36866;
var G__36874 = (i__36812_36867 + (1));
seq__36809_36864 = G__36871;
chunk__36810_36865 = G__36872;
count__36811_36866 = G__36873;
i__36812_36867 = G__36874;
continue;
} else {
var temp__5818__auto___36875 = cljs.core.seq.call(null,seq__36809_36864);
if(temp__5818__auto___36875){
var seq__36809_36876__$1 = temp__5818__auto___36875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36809_36876__$1)){
var c__5568__auto___36877 = cljs.core.chunk_first.call(null,seq__36809_36876__$1);
var G__36878 = cljs.core.chunk_rest.call(null,seq__36809_36876__$1);
var G__36879 = c__5568__auto___36877;
var G__36880 = cljs.core.count.call(null,c__5568__auto___36877);
var G__36881 = (0);
seq__36809_36864 = G__36878;
chunk__36810_36865 = G__36879;
count__36811_36866 = G__36880;
i__36812_36867 = G__36881;
continue;
} else {
var vec__36846_36882 = cljs.core.first.call(null,seq__36809_36876__$1);
var key_36883 = cljs.core.nth.call(null,vec__36846_36882,(0),null);
var v_36884 = cljs.core.nth.call(null,vec__36846_36882,(1),null);
register_effect.call(null,key_36883,v_36884);


var G__36885 = cljs.core.next.call(null,seq__36809_36876__$1);
var G__36886 = null;
var G__36887 = (0);
var G__36888 = (0);
seq__36809_36864 = G__36885;
chunk__36810_36865 = G__36886;
count__36811_36866 = G__36887;
i__36812_36867 = G__36888;
continue;
}
} else {
}
}
break;
}

var G__36889 = seq__36801;
var G__36890 = chunk__36806;
var G__36891 = count__36807;
var G__36892 = (i__36808 + (1));
seq__36801 = G__36889;
chunk__36806 = G__36890;
count__36807 = G__36891;
i__36808 = G__36892;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__36801);
if(temp__5818__auto__){
var seq__36801__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36801__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__36801__$1);
var G__36893 = cljs.core.chunk_rest.call(null,seq__36801__$1);
var G__36894 = c__5568__auto__;
var G__36895 = cljs.core.count.call(null,c__5568__auto__);
var G__36896 = (0);
seq__36801 = G__36893;
chunk__36806 = G__36894;
count__36807 = G__36895;
i__36808 = G__36896;
continue;
} else {
var spec = cljs.core.first.call(null,seq__36801__$1);
var seq__36802_36897 = cljs.core.seq.call(null,spec);
var chunk__36803_36898 = null;
var count__36804_36899 = (0);
var i__36805_36900 = (0);
while(true){
if((i__36805_36900 < count__36804_36899)){
var vec__36855_36901 = cljs.core._nth.call(null,chunk__36803_36898,i__36805_36900);
var key_36902 = cljs.core.nth.call(null,vec__36855_36901,(0),null);
var v_36903 = cljs.core.nth.call(null,vec__36855_36901,(1),null);
register_effect.call(null,key_36902,v_36903);


var G__36904 = seq__36802_36897;
var G__36905 = chunk__36803_36898;
var G__36906 = count__36804_36899;
var G__36907 = (i__36805_36900 + (1));
seq__36802_36897 = G__36904;
chunk__36803_36898 = G__36905;
count__36804_36899 = G__36906;
i__36805_36900 = G__36907;
continue;
} else {
var temp__5818__auto___36908__$1 = cljs.core.seq.call(null,seq__36802_36897);
if(temp__5818__auto___36908__$1){
var seq__36802_36909__$1 = temp__5818__auto___36908__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36802_36909__$1)){
var c__5568__auto___36910 = cljs.core.chunk_first.call(null,seq__36802_36909__$1);
var G__36911 = cljs.core.chunk_rest.call(null,seq__36802_36909__$1);
var G__36912 = c__5568__auto___36910;
var G__36913 = cljs.core.count.call(null,c__5568__auto___36910);
var G__36914 = (0);
seq__36802_36897 = G__36911;
chunk__36803_36898 = G__36912;
count__36804_36899 = G__36913;
i__36805_36900 = G__36914;
continue;
} else {
var vec__36858_36915 = cljs.core.first.call(null,seq__36802_36909__$1);
var key_36916 = cljs.core.nth.call(null,vec__36858_36915,(0),null);
var v_36917 = cljs.core.nth.call(null,vec__36858_36915,(1),null);
register_effect.call(null,key_36916,v_36917);


var G__36918 = cljs.core.next.call(null,seq__36802_36909__$1);
var G__36919 = null;
var G__36920 = (0);
var G__36921 = (0);
seq__36802_36897 = G__36918;
chunk__36803_36898 = G__36919;
count__36804_36899 = G__36920;
i__36805_36900 = G__36921;
continue;
}
} else {
}
}
break;
}

var G__36922 = cljs.core.next.call(null,seq__36801__$1);
var G__36923 = null;
var G__36924 = (0);
var G__36925 = (0);
seq__36801 = G__36922;
chunk__36806 = G__36923;
count__36807 = G__36924;
i__36808 = G__36925;
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
(tse.core.register_effects.cljs$lang$applyTo = (function (seq36797){
var G__36798 = cljs.core.first.call(null,seq36797);
var seq36797__$1 = cljs.core.next.call(null,seq36797);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36798,seq36797__$1);
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

//# sourceMappingURL=core.js.map?rel=1710474317957
