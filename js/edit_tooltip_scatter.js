////////////////////////////////////////////////
/*** CHANGE TOOLTIP, SCATTER (BUBBLE) CHART ***/
////////////////////////////////////////////////

widget.on('beforedatapointtooltip', function(e,args){ 
		
	var newTemplate = $(args.template);
	
	// Define units:
	//var currencySign = '$';
	var MWdc = 'MWdc';

	// Alter text:
	//var addDollarSign =  currencySign + "{{model.metric2Value}} / MWh";  // Adds the units to the 2nd metric
	var addMWdc = '{{model.sizeValue}} ' + MWdc;
	var removePointValue = "";  // to remove the 3rd metric (in this case, it's repeated and not rounded)
	var removePointHeader= "";  // to remove the 3rd metric's header
	
	$(newTemplate).find('.scatter-tooltip-pointValue').text(removePointValue);
	$(newTemplate).find('.scatter-tooltip-pointHeader').text(removePointHeader);
//	$(newTemplate).find('.scatter-tooltip-yValue').text(addDollarSign);
	$(newTemplate).find('.scatter-tooltip-sizeValue').text(addMWdc);

	args.template = $(newTemplate).html();
});
