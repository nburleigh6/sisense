//////////////////////////////////////////////////////////////////
/*** ORDER SEGMENTS BY VALUE, BASED ON A REFERENCE COLUMN/BAR ***/
//////////////////////////////////////////////////////////////////

widget.on('processresult',function(se,ev) {

  var series = ev.result.series;
  var colIndx = series[0].data.length - 1;  // This sets the reference column. "series[0].data.length - 1" would be the farthest-right column.

  series.sort(sortFunction);

  function sortFunction(a, b) {
    if (a.data[colIndx].y === b.data[colIndx].y) {
      return 0;
    }
    else {
      return (a.data[colIndx].y < b.data[colIndx].y) ? -1 : 1;
    }
  }
});
