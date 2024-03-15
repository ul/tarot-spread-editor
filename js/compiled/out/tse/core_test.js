// Compiled by ClojureScript 1.11.60 {:language-out :ecmascript-next, :optimizations :none}
goog.provide('tse.core_test');
goog.require('cljs.core');
goog.require('tse.core');
goog.require('cljs.test');
tse.core_test.sanity_check = (function tse$core_test$sanity_check(){
return cljs.test.test_var.call(null,tse.core_test.sanity_check.cljs$lang$var);
});
tse.core_test.sanity_check.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"nothing");

try{try{var values__30667__auto__ = (new cljs.core.List(null,(1),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__30668__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__30667__auto__);
if(cljs.core.truth_(result__30668__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/ul/tarot-spread-editor/test/tse/core_test.cljs",16,new cljs.core.Keyword(null,"pass","pass",1574159993),9,7,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),7,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__30667__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/ul/tarot-spread-editor/test/tse/core_test.cljs",16,new cljs.core.Keyword(null,"fail","fail",1706214930),9,7,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),7,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__30667__auto__),null,(1),null)),(2),null)),null]));
}

return result__30668__auto__;
}catch (e36928){var t__30718__auto__ = e36928;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/ul/tarot-spread-editor/test/tse/core_test.cljs",16,new cljs.core.Keyword(null,"error","error",-978969032),9,7,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),7,t__30718__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(tse.core_test.sanity_check.cljs$lang$var = new cljs.core.Var(function(){return tse.core_test.sanity_check;},new cljs.core.Symbol("tse.core-test","sanity-check","tse.core-test/sanity-check",-548822135,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"tse.core-test","tse.core-test",1703284826,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"sanity-check","sanity-check",613084113,null),"test/tse/core_test.cljs",22,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(tse.core_test.sanity_check)?tse.core_test.sanity_check.cljs$lang$test:null)])));
cljs.core.enable_console_print_BANG_.call(null);
cljs.test.run_block.call(null,(function (){var env36929 = cljs.test.empty_env.call(null);
var summary36930 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env36929);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"tse.core-test","tse.core-test",1703284826,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__30787__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__30787__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return tse.core_test.sanity_check;},new cljs.core.Symbol("tse.core-test","sanity-check","tse.core-test/sanity-check",-548822135,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tse.core-test","tse.core-test",1703284826,null),new cljs.core.Symbol(null,"sanity-check","sanity-check",613084113,null),"test/tse/core_test.cljs",22,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(tse.core_test.sanity_check)?tse.core_test.sanity_check.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__30787__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"tse.core-test","tse.core-test",1703284826,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary36930,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary36930),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env36929);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary36930));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary36930),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

//# sourceMappingURL=core_test.js.map?rel=1710474317968
