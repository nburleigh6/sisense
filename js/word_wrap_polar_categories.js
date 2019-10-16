////////////////////////////////////////////////////////
/*** WORD-WRAP POLAR CHART CATEGORIES ***/
////////////////////////////////////////////////////////

widget.on('beforeviewloaded', function(widget, args){
	
	var newmaxCharactersPerLabel = 40; //Set length of the line length
	args.options.xAxis.labels.maxCharactersPerLabel = newmaxCharactersPerLabel;
	args.options.xAxis.labels.useHTML = true;
	args.options.xAxis.labels.formatter = function(){
		return this.value.toString().split(' ').join('<br>');
	}
});
