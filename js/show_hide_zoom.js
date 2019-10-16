/////////////////////////////////////////////////////////////////////
/*** FORCE-SHOW OR HIDE THE ZOOM BAR & SET MIN/MAX X-AXIS VALUES ***/
/////////////////////////////////////////////////////////////////////

widget.on("beforeviewloaded", function(param, scope) {
//	scope.options.xAxis.max = scope.options.xAxis.categories.length-1; /*Set to display the latest value*/ /* THESE DON'T WORK */
//	scope.options.xAxis.min = 0; /*Set to display the first value*/
	scope.options.navigator.enabled = false to true/*Disable manual zoom if this option isn't needed. Specify true is this functional is required;*/
});
