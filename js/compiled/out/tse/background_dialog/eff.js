// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.background_dialog.eff');
goog.require('cljs.core');
tse.background_dialog.eff.open = (function tse$background_dialog$eff$open(p__99631){
var map__99632 = p__99631;
var map__99632__$1 = cljs.core.__destructure_map.call(null,map__99632);
var db = cljs.core.get.call(null,map__99632__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true);
});
tse.background_dialog.eff.select_tab = (function tse$background_dialog$eff$select_tab(p__99633){
var map__99634 = p__99633;
var map__99634__$1 = cljs.core.__destructure_map.call(null,map__99634);
var vec__99635 = cljs.core.get.call(null,map__99634__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tab = cljs.core.nth.call(null,vec__99635,(0),null);
var db = cljs.core.get.call(null,map__99634__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"tab","tab",-559583621),tab);
});
tse.background_dialog.eff.save = (function tse$background_dialog$eff$save(p__99638){
var map__99639 = p__99638;
var map__99639__$1 = cljs.core.__destructure_map.call(null,map__99639);
var db = cljs.core.get.call(null,map__99639__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__99640_99641 = cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370));
var map__99640_99642__$1 = cljs.core.__destructure_map.call(null,map__99640_99641);
var src_99643 = cljs.core.get.call(null,map__99640_99642__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var color_99644 = cljs.core.get.call(null,map__99640_99642__$1,new cljs.core.Keyword(null,"color","color",1011675173));
cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),src_99643,new cljs.core.Keyword(null,"color","color",1011675173),color_99644);

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,new cljs.core.Keyword(null,"src","src",-1651076051),null);
});
tse.background_dialog.eff.cancel = (function tse$background_dialog$eff$cancel(p__99645){
var map__99646 = p__99645;
var map__99646__$1 = cljs.core.__destructure_map.call(null,map__99646);
var db = cljs.core.get.call(null,map__99646__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
});
tse.background_dialog.eff.choose_file = (function tse$background_dialog$eff$choose_file(p__99647){
var map__99648 = p__99647;
var map__99648__$1 = cljs.core.__destructure_map.call(null,map__99648);
var vec__99649 = cljs.core.get.call(null,map__99648__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var files = cljs.core.nth.call(null,vec__99649,(0),null);
var emit = cljs.core.get.call(null,map__99648__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
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
tse.background_dialog.eff.set_url = (function tse$background_dialog$eff$set_url(p__99652){
var map__99653 = p__99652;
var map__99653__$1 = cljs.core.__destructure_map.call(null,map__99653);
var vec__99654 = cljs.core.get.call(null,map__99653__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var url = cljs.core.nth.call(null,vec__99654,(0),null);
var db = cljs.core.get.call(null,map__99653__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),url);
});
tse.background_dialog.eff.set_color = (function tse$background_dialog$eff$set_color(p__99657){
var map__99658 = p__99657;
var map__99658__$1 = cljs.core.__destructure_map.call(null,map__99658);
var vec__99659 = cljs.core.get.call(null,map__99658__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.nth.call(null,vec__99659,(0),null);
var db = cljs.core.get.call(null,map__99658__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"background-dialog","background-dialog",1739063370),cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),color);
});
tse.background_dialog.eff.spec = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("background-dialog","open","background-dialog/open",-1233377127),tse.background_dialog.eff.open,new cljs.core.Keyword("background-dialog","select-tab","background-dialog/select-tab",-1176551647),tse.background_dialog.eff.select_tab,new cljs.core.Keyword("background-dialog","save","background-dialog/save",241134822),tse.background_dialog.eff.save,new cljs.core.Keyword("background-dialog","cancel","background-dialog/cancel",718725777),tse.background_dialog.eff.cancel,new cljs.core.Keyword("background-dialog","choose-file","background-dialog/choose-file",-1369277453),tse.background_dialog.eff.choose_file,new cljs.core.Keyword("background-dialog","file-loaded","background-dialog/file-loaded",-2097084091),tse.background_dialog.eff.set_url,new cljs.core.Keyword("background-dialog","set-url","background-dialog/set-url",-1436887419),tse.background_dialog.eff.set_url,new cljs.core.Keyword("background-dialog","set-color","background-dialog/set-color",-1905910674),tse.background_dialog.eff.set_color], null);

//# sourceMappingURL=eff.js.map?rel=1767875392169
