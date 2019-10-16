/////////////////////////////////////////////////////////////////////////////
/* ORDER BAR/COLUMN CHART LEGEND ALPHABETICALLY WITHOUT AFFECTING SEGMENTS */
/////////////////////////////////////////////////////////////////////////////

widget.on('processresult',function(se,ev){
	var series = ev.result.series; 
	var numberOfSeries = ev.result.series.length; 
	var newArray = [];
	for (var i=0;i < numberOfSeries;i++){
		newArray.push(series[i].name);
	}	
	newArray.sort();
	for(var i=0;i < numberOfSeries;i++){ 
		series[i].legendIndex = newArray.indexOf(series[i].name); 
	} 
});
