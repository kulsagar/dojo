/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function(){
       console.log('ready !!');
       require([
               "dojox/charting/Chart",
               "dojox/charting/axis2d/Default",
               "dojox/charting/plot2d/Lines",
               "dojox/charting/plot2d/Grid"],
           function(Chart, Axis, Lines, Grid){
               var chart = new Chart("chartNode")
                   .addAxis("x", { fixLower: "minor", fixUpper: "minor",
                       natural: true  })
                   .addAxis("y", { vertical: true, fixLower: "major",
                       fixUpper: "major", includeZero: true })
                   .addPlot("default", { type: Lines })
                   .addPlot("grid", { type: Grid, renderOnAxis: false,
                       majorVLine: { color: "blue", width: 2 },
                       majorHLine: { color: "#999", width: 2 } })
                   .addSeries("Series A", [ 2, 1, 0.5, -1, -2 ] )
                   .render();
           });
   });
});