/////////////////////////////////////////////////////////////////
/*** DYNAMICALLY ADD UNITS TO Y-AXIS (GW, MW or kW, IN THIS EXAMPLE) ***/
/////////////////////////////////////////////////////////////////


widget.on('processresult', function(se, ev){
	ev.result.yAxis["0"].labels.formatter = function() {
		var e=$$get(this, "axis.options.mask");
		var origOutput = e(this.value);
		var outputInt = parseInt(origOutput.replace(/,/g, ""));
		if (outputInt == 0) {
			return outputInt.toString();
		}
        else if (outputInt >= 1000000) {
            return (outputInt/1000000).toString().concat(' GW');
        }
		else if (outputInt >= 1000) {
			return (outputInt/1000).toString().concat(' MW');
		}
		else {
			return outputInt.toString().concat(' kW');
		}
	}
});
