//////////////////////////////////////////////////////////////////////////////////////
/*** ORDER SEGMENTED (NON-STACKED) COLUMN CHARTS BY LAST SEGMENT (E.G. LAST YEAR) ***/
//////////////////////////////////////////////////////////////////////////////////////

widget.on('processresult',function(s,e){

	//////////////////////////
	//	Sort the categories	//
	//////////////////////////

	//	User defined -- sort order
	var sortOrder = "desc";		//	Can be 'asc' for ascending ordser or 'desc' for descending order 

	// User defined -- show column totals?
	var showTotals = false;   // Set as "true" or "false"
	
	//	Get the categories
	var categories = e.result.xAxis.categories;

	//	Create array to hold the totals
	var totals = [];

	//	Get the data
	var data = e.result.series;
	
	//	Loop through each category
	for (var i=0; i<categories.length; i++){

		//	Init a variable to hold to total for the category
		var total = 0;

		//	Loop through each value within the category, to ASSIGN THE LAST VALUE AS TOTAL
		for (var j=0; j<data.length; j++) {
			total = data[j].data[i].y;
		}

		//	Loop through each value within the category, to save the total
		for (var j=0; j<data.length; j++) {
			data[j].data[i].total = total;
		}

		//	Save the total of the category
		totals[i] = {
			total: total,
			originalIndex: i,
			name: categories[i]
		}
	}

	//	Function to sort the list of categories ascending
	function sortAsc(a,b) {
		if (a.total < b.total)
			return -1;
		if (a.total > b.total)
			return 1;
		return 0;
	}

	//	Function to sort the list of categories descending
	function sortDesc(a,b) {
		if (a.total < b.total)
			return 1;
		if (a.total > b.total)
			return -1;
		return 0;
	}

	
	//	Run the function to sort the categories based on total values
	if (sortOrder == "asc") {
		totals.sort(sortAsc);
	} else {
		totals.sort(sortDesc);
	}

	//	Loop through the new sorted Categories and make sure the x-axis matches
	for (var k=0; k<totals.length; k++){
		//	Overwrite the old category name
		e.result.xAxis.categories[k] = totals[k].name;
	}

	//	Loop through each data series and sort the values
	for (var l=0; l<data.length; l++){
		if (sortOrder == "asc") {
			data[l].data.sort(sortAsc);
		} else {
			data[l].data.sort(sortDesc);
		}
	}
	
	data.sort(function(a,b){return a.name.localeCompare(b.name); });
})
