//////////////////////////////////////////////////////////////////
/*** NORMAL TABLES: FIND LONE $ SIGNS AND REPLACE WITH BLANKS ***/
//////////////////////////////////////////////////////////////////

        // BROKEN: UPON PAGE TURN, REVERTS //

widget.on('domready', function(se, ev){

	var table = document.getElementById('grid'); 
	var rows = table.rows; 
	var rowcount = rows.length; 
	var r; 
	var cells; 
	var cellcount; 
	var c; 
	var cell; 
	var removeLinkDecoration = false; 
	var columnName = "Disclosed Value"; /*column you want to replace*/
	var column = $(rows[0]).find('th:contains(' + columnName + ')').index();

	for(r=1; r<rowcount; r++) {

		cells = rows[r].cells; 
		cellcount= cells.length; 
		cell = cells[column].innerHTML; 
		var find = "$";
		var replacewith = ""
		if(cell == find){ 
			$(cells[column]).html(replacewith); 
		} 
	}; 
});
