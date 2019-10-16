/////////////////////////////////////////
/*** HIDE THE "OPEN/CLOSE FILTERS" ARROW ***/
/////////////////////////////////////////

dashboard.on('initialized', function(d, args) {
    setTimeout(function() {
       /* if (prism.user.roleName == "consumer") { */
            $('div.trillapser-container.left').remove()
   /*     } */
    }, 100);
});
