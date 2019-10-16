/////////////////////////////////
/* CUMULATIVE BAR/LINE CHART ***/
/////////////////////////////////

widget.on('processresult', function(w, ev) {
  for (i=0; i<ev.result.series.length; i++) {
    var runSum=0;
    for (j=0; j<ev.result.series[i].data.length; j++) {
      runSum+=ev.result.series[i].data[j].y;
      ev.result.series[i].data[j].y=runSum;
      ev.result.series[i].data[j].selected=false;
    }
  }
});
