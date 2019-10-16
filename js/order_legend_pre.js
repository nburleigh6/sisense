////////////////////////////////////////////////////////////////////////////////////
/* ORDER BAR/COLULMN CHART LEGEND BY PRE-DEFINED ORDER WITHOUT AFFECTING SEGMENTS */
////////////////////////////////////////////////////////////////////////////////////

widget.on('processresult',function(se,ev){
	var series = ev.result.series;
	var numberOfSeries = series.length; 	
	var categories = [ 'Non-Residential', 'Residential','Front-of-the-Meter']; // Put ordered legend items here
	for(var i=0;i < numberOfSeries;i++){ 
		series[i].legendIndex = categories.indexOf(series[i].name); 
	} 
});
