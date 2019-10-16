///////////////////////////////////////////////////////////
/*** DISABLE BAR CHART TOOLTIP PERCENTAGE ON BREAK-BYS ***/
///////////////////////////////////////////////////////////

widget.on("beforedatapointtooltip", function(w, args){
	args.template = args.template.replace("/ {{item.percentage}}", "");
});
