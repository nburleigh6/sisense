////////////////////////////////////////////
/*** REMOVE ALL MARKERS FROM LINE CHART ***/
////////////////////////////////////////////

widget.on('beforeviewloaded', function(se, ev) {
	var series = ev.options.series
	for (i=0; i<series.length; i++){
		var subSeries = series[i].data;
		for (j=0; j<subSeries.length; j++) {
			var dataPoint = subSeries[j].marker.enabled = false;			
		}		
	}
});
