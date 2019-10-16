///////////////////////////////////////////////////////
/*** ORDER WHOLE COLUMNS/BARS BY PRE-DEFINED ORDER ***/
///////////////////////////////////////////////////////

widget.on('queryend', function (se, ev){
	
	var categories = ['','','','']
	
	ev.result.values.sort(function(a,b){
		
		var aIndex = categories.indexOf(a[0].data);
		var bIndex = categories.indexOf(b[0].data);
		
		if (aIndex < bIndex){return -1;}
		if (aIndex > bIndex){return 1;}
		return 0;		
	});	
});
