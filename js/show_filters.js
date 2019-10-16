/////////////////////////////////////
/*** FORCE-SHOW THE FILTERS PANE ***/
/////////////////////////////////////

dashboard.on('initialized', function(d, args) {
    setTimeout(function() {
        if (/*prism.user.roleName == "consumer" && */$('div#prism-rightview')[0].clientWidth < 10) {
            $('div.trillapser-container', $('div#prism-rightview')).click()
        }
    }, 5);
	
})
