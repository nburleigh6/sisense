//////////////////////////////////////////////////////////
/*** NORMAL TABLES: FIND N\As AND REPLACE WITH BLANKS ***/
//////////////////////////////////////////////////////////

        // BROKEN: UPON PAGE TURN, REVERTS //

widget.on('domready', function(se, ev){
	
	_.each($(element).find("td:not(:has(*)):contains('N\\A')"),function(e,i){		
		$(e).text("");		
	})
});
