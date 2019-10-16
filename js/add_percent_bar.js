///////////////////////////////////////////////////////////////
/*** ADD PERCENT SIGNS ON Y-AXIS TO 100% BAR/COLUMN CHARTS ***/
///////////////////////////////////////////////////////////////

widget.on('processresult', function(se, ev){
	ev.result.yAxis["0"].labels.formatter = function() {
		var e=$$get(this, "axis.options.mask");
		return e(this.value).concat('%');
	}		
});
