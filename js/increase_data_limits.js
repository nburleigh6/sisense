//////////////////////////////
/*** INCREASE DATA LIMITS ***/
//////////////////////////////

widget.on('beforequery', function(w,args){
    w.style.dataLimits.categoriesCapacityX = 5000;// Or any other number
    w.style.dataLimits.categoriesCapacityY = 5000; // Or any other number
    w.style.dataLimits.seriesCapacity = 5000; // Or any other number
    w.style.dataLimits.categoriesCapacity  = 5000;
});
