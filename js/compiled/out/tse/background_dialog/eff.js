// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.background_dialog.eff');
goog.require('cljs.core');
tse.background_dialog.eff.open = (function tse$background_dialog$eff$open(p__33271){
var map__33272 = p__33271;
var map__33272__$1 = cljs.core.__destructure_map.call(null,map__33272);
var db = cljs.core.get.call(null,map__33272__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true);
});
tse.background_dialog.eff.select_tab = (function tse$background_dialog$eff$select_tab(p__33273){
var map__33274 = p__33273;
var map__33274__$1 = cljs.core.__destructure_map.call(null,map__33274);
var vec__33275 = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tab = cljs.core.nth.call(null,vec__33275,(0),null);
var db = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"tab","tab",-559583621),tab);
});
tse.background_dialog.eff.save = (function tse$background_dialog$eff$save(p__33278){
var map__33279 = p__33278;
var map__33279__$1 = cljs.core.__destructure_map.call(null,map__33279);
var db = cljs.core.get.call(null,map__33279__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__33280_33281 = cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370));
var map__33280_33282__$1 = cljs.core.__destructure_map.call(null,map__33280_33281);
var src_33283 = cljs.core.get.call(null,map__33280_33282__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var color_33284 = cljs.core.get.call(null,map__33280_33282__$1,new cljs.core.Keyword(null,"color","color",1011675173));
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),src_33283,new cljs.core.Keyword(null,"color","color",1011675173),color_33284);

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,new cljs.core.Keyword(null,"src","src",-1651076051),null);
});
tse.background_dialog.eff.cancel = (function tse$background_dialog$eff$cancel(p__33285){
var map__33286 = p__33285;
var map__33286__$1 = cljs.core.__destructure_map.call(null,map__33286);
var db = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
});
tse.background_dialog.eff.choose_file = (function tse$background_dialog$eff$choose_file(p__33287){
var map__33288 = p__33287;
var map__33288__$1 = cljs.core.__destructure_map.call(null,map__33288);
var vec__33289 = cljs.core.get.call(null,map__33288__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var files = cljs.core.nth.call(null,vec__33289,(0),null);
var emit = cljs.core.get.call(null,map__33288__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
if((files.length > (0))){
var file = (files[(0)]);
var reader = (new FileReader());
(reader.onload = (function (e){
return emit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("background-dialog","file-loaded","background-dialog/file-loaded",-2097084091),e.target.result], null));
}));

return reader.readAsDataURL(file);
} else {
return null;
}
});
tse.background_dialog.eff.set_url = (function tse$background_dialog$eff$set_url(p__33292){
var map__33293 = p__33292;
var map__33293__$1 = cljs.core.__destructure_map.call(null,map__33293);
var vec__33294 = cljs.core.get.call(null,map__33293__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var url = cljs.core.nth.call(null,vec__33294,(0),null);
var db = cljs.core.get.call(null,map__33293__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),url);
});
tse.background_dialog.eff.set_color = (function tse$background_dialog$eff$set_color(p__33297){
var map__33298 = p__33297;
var map__33298__$1 = cljs.core.__destructure_map.call(null,map__33298);
var vec__33299 = cljs.core.get.call(null,map__33298__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.nth.call(null,vec__33299,(0),null);
var db = cljs.core.get.call(null,map__33298__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),color);
});
tse.background_dialog.eff.spec = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("background-dialog","open","background-dialog/open",-1233377127),tse.background_dialog.eff.open,new cljs.core.Keyword("background-dialog","select-tab","background-dialog/select-tab",-1176551647),tse.background_dialog.eff.select_tab,new cljs.core.Keyword("background-dialog","save","background-dialog/save",241134822),tse.background_dialog.eff.save,new cljs.core.Keyword("background-dialog","cancel","background-dialog/cancel",718725777),tse.background_dialog.eff.cancel,new cljs.core.Keyword("background-dialog","choose-file","background-dialog/choose-file",-1369277453),tse.background_dialog.eff.choose_file,new cljs.core.Keyword("background-dialog","file-loaded","background-dialog/file-loaded",-2097084091),tse.background_dialog.eff.set_url,new cljs.core.Keyword("background-dialog","set-url","background-dialog/set-url",-1436887419),tse.background_dialog.eff.set_url,new cljs.core.Keyword("background-dialog","set-color","background-dialog/set-color",-1905910674),tse.background_dialog.eff.set_color], null);

//# sourceMappingURL=eff.js.map?rel=1710474315921
