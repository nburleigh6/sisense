/////////////////////////////////////////////////////
/*** ALLOW FULL SCREEN ON IFRAME EMBEDDED VIDEOS ***/
/////////////////////////////////////////////////////

widget.on('render', function(se, ev) {
	$('iframe').attr('allowfullscreen', 'true').attr('webkitallowfullscreen', 'true').attr('mozallowfullscreen', 'true');
});
