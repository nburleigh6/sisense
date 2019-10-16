//////////////////////////////////////////////////////////////////////////
/*** ORDER SEGMENTS BY PRE-DESIGNATED ORDER (BAR CHARTS, LINE CHARTS) ***/
//////////////////////////////////////////////////////////////////////////
 
widget.on('processresult',function(se,ev){
	
	var categories = ['Apples', 'Oranges', 'Kiwis', 'Watermelon'];
	var findIndex = function(txt) {
		return categories.indexOf(txt);
	};
 
	ev.result.series.sort(function(a,b){
		if (findIndex(a.name) < findIndex(b.name)) {
			return -1
		} else if (findIndex(a.name) > findIndex(b.name)) {
			return 1
		}
		return 0;
});
	});
