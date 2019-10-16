/////////////////////////////////////////////////////////////
/*** SHOW STACK TOTALS FOR BREAK-BYS, WITH DYNAMIC UNITS ***/
/////////////////////////////////////////////////////////////

widget.on('processresult',function(s,e){

	e.result.yAxis[0].stackLabels = {
		enabled: true,
		color: 'black',
		mask: e.result.series[0].mask,
		formatWithCommas: function(outputInt) {	
		    //return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			if (outputInt == 0) {
			return outputInt.toString();
			}
			else if (outputInt >= 1000000) {
				return (Math.round((outputInt/1000000)*100)/100).toString().concat(' GW'); // largest unit here
			}
			else if (outputInt >= 1000) {
				return (Math.round((outputInt/1000)*100)/100).toString().concat(' MW'); // medium unit
			}
			else {
				return (Math.round(outputInt*100)/100).toString().concat(' kW'); // small unit
			}
		},
		formatter: function (){
			//	Use the mask if defined
			var func1=this.options.mask;
			//	Round to 0 decimal places and add commas by default
			var func2=this.options.formatWithCommas;
			//	Apply the formatting
			return func2(this.total)
		}
	};
});
