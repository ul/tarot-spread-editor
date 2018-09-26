// Compiled by ClojureScript 1.10.339 {:language-out :ecmascript5}
goog.provide('tse.background_dialog.eff');
goog.require('cljs.core');
tse.background_dialog.eff.open = (function tse$background_dialog$eff$open(p__52348){
var map__52349 = p__52348;
var map__52349__$1 = ((((!((map__52349 == null)))?(((((map__52349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52349):map__52349);
var db = cljs.core.get.call(null,map__52349__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true);
});
tse.background_dialog.eff.select_tab = (function tse$background_dialog$eff$select_tab(p__52351){
var map__52352 = p__52351;
var map__52352__$1 = ((((!((map__52352 == null)))?(((((map__52352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52352):map__52352);
var vec__52353 = cljs.core.get.call(null,map__52352__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tab = cljs.core.nth.call(null,vec__52353,(0),null);
var db = cljs.core.get.call(null,map__52352__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"tab","tab",-559583621),tab);
});
tse.background_dialog.eff.save = (function tse$background_dialog$eff$save(p__52357){
var map__52358 = p__52357;
var map__52358__$1 = ((((!((map__52358 == null)))?(((((map__52358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52358):map__52358);
var db = cljs.core.get.call(null,map__52358__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__52360_52362 = cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370));
var map__52360_52363__$1 = ((((!((map__52360_52362 == null)))?(((((map__52360_52362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52360_52362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52360_52362):map__52360_52362);
var src_52364 = cljs.core.get.call(null,map__52360_52363__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var color_52365 = cljs.core.get.call(null,map__52360_52363__$1,new cljs.core.Keyword(null,"color","color",1011675173));
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),src_52364,new cljs.core.Keyword(null,"color","color",1011675173),color_52365);

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,new cljs.core.Keyword(null,"src","src",-1651076051),null);
});
tse.background_dialog.eff.cancel = (function tse$background_dialog$eff$cancel(p__52366){
var map__52367 = p__52366;
var map__52367__$1 = ((((!((map__52367 == null)))?(((((map__52367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52367):map__52367);
var db = cljs.core.get.call(null,map__52367__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
});
tse.background_dialog.eff.choose_file = (function tse$background_dialog$eff$choose_file(p__52369){
var map__52370 = p__52369;
var map__52370__$1 = ((((!((map__52370 == null)))?(((((map__52370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52370):map__52370);
var vec__52371 = cljs.core.get.call(null,map__52370__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var files = cljs.core.nth.call(null,vec__52371,(0),null);
var emit = cljs.core.get.call(null,map__52370__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
if((files.length > (0))){
var file = (files[(0)]);
var reader = (new FileReader());
reader.onload = ((function (file,reader,map__52370,map__52370__$1,vec__52371,files,emit){
return (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","file-loaded","background-dialog/file-loaded",-2097084091),e.target.result], null));
});})(file,reader,map__52370,map__52370__$1,vec__52371,files,emit))
;

return reader.readAsDataURL(file);
} else {
return null;
}
});
tse.background_dialog.eff.set_url = (function tse$background_dialog$eff$set_url(p__52375){
var map__52376 = p__52375;
var map__52376__$1 = ((((!((map__52376 == null)))?(((((map__52376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52376):map__52376);
var vec__52377 = cljs.core.get.call(null,map__52376__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var url = cljs.core.nth.call(null,vec__52377,(0),null);
var db = cljs.core.get.call(null,map__52376__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),url);
});
tse.background_dialog.eff.set_color = (function tse$background_dialog$eff$set_color(p__52381){
var map__52382 = p__52381;
var map__52382__$1 = ((((!((map__52382 == null)))?(((((map__52382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52382):map__52382);
var vec__52383 = cljs.core.get.call(null,map__52382__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.nth.call(null,vec__52383,(0),null);
var db = cljs.core.get.call(null,map__52382__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),color);
});
tse.background_dialog.eff.spec = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("background-dialog","open","background-dialog/open",-1233377127),tse.background_dialog.eff.open,new cljs.core.Keyword("background-dialog","select-tab","background-dialog/select-tab",-1176551647),tse.background_dialog.eff.select_tab,new cljs.core.Keyword("background-dialog","save","background-dialog/save",241134822),tse.background_dialog.eff.save,new cljs.core.Keyword("background-dialog","cancel","background-dialog/cancel",718725777),tse.background_dialog.eff.cancel,new cljs.core.Keyword("background-dialog","choose-file","background-dialog/choose-file",-1369277453),tse.background_dialog.eff.choose_file,new cljs.core.Keyword("background-dialog","file-loaded","background-dialog/file-loaded",-2097084091),tse.background_dialog.eff.set_url,new cljs.core.Keyword("background-dialog","set-url","background-dialog/set-url",-1436887419),tse.background_dialog.eff.set_url,new cljs.core.Keyword("background-dialog","set-color","background-dialog/set-color",-1905910674),tse.background_dialog.eff.set_color], null);

//# sourceMappingURL=eff.js.map?rel=1537946277328
