//////////////////////////////////////////////////
/*** EDIT TOOLTIP IN BAR CHARTS -- ADD A UNIT ***/
//////////////////////////////////////////////////

widget.on('beforedatapointtooltip', function(e,args){
	var unit = 'GW';  // The units that are used in this widget.
	var newTemplate = $(args.template);
	var newText =  "{{item.value}} " + unit;
	$(newTemplate).find('.cartesian-tooltip-value').text(newText);
	args.template = $(newTemplate).html();
});
