///////////////////////////////////////
/*** ORDER SEGMENTS ALPHABETICALLY ***/
///////////////////////////////////////

widget.on('processresult',function(se,ev){

ev.result.series.sort(function(a,b){return a.name.localeCompare(b.name); });

});
