///////////////////////////////////////////////
/*** SHOW STACK TOTALS FOR BREAK-BY CHARTS ***/
///////////////////////////////////////////////

widget.on('processresult',function(s,e){

	e.result.yAxis[0].stackLabels = {
		enabled: true,
		color: 'black',
		mask: e.result.series[0].mask,
		formatWithCommas: function(x) {	
		    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		formatter: function (){
			//	Use the mask if defined
			var func1=this.options.mask;
			//	Round to 0 decimal places and add commas by default
			var func2=this.options.formatWithCommas;
			//	Apply the formatting
			return defined(func1)?func1(this.total):func2(this.total)
		}
	};
});
