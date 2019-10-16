/////////////////////////////////////////////////////
/*** WORD WRAP & TILT X-AXIS LABELS IN BAR/COLUMN CHART ***/
/////////////////////////////////////////////////////

/*** Function to word-wrap after a specified number of chars ***/
/*** (Credit: https://gist.github.com/bgrayburn/44fa018b94222590f618) ***/

var wordwrap = function(long_string, max_char){

	var sum_length_of_words = function(word_array){
		var out = 0;
		if (word_array.length!=0){
			for (var i=0; i<word_array.length; i++){
				var word = word_array[i];
				out = out + word.length;
			}
		};
		return out;
	}
	var split_out = [[]];
	var split_string = long_string.split(' ');
	for (var i=0; i<split_string.length; i++){
		var word = split_string[i];
		if ((sum_length_of_words(split_out[split_out.length-1]) + word.length) > max_char){
			split_out = split_out.concat([[]]);
		}
		
		split_out[split_out.length-1] = split_out[split_out.length-1].concat(word);
	}
	for (var i=0; i<split_out.length; i++){
		split_out[i] = split_out[i].join(" ");
	}
	return split_out.join('<br>');
};


widget.on('beforeviewloaded', function(scope, params){
  //console.log(arguments);
//  chart = params.element.firstChild;
//  params.options.plotOptions.series.connectNulls ='true';
	
	var maxCharacters = 10;
	params.options.xAxis.labels.formatter = function() {
		return wordwrap(this.value, maxCharacters);
	}
	
	params.options.xAxis.labels.rotation = 75; 
	params.options.xAxis.labels.y = 20;
	params.options.xAxis.labels.x = -5;
	
	
//	params.options.xAxis.tickInterval = 6;
//	params.options.xAxis.tickLength = 6;
});
