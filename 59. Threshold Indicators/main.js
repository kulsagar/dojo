/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function(){
       console.log('ready !!');
       require(["dojox/charting/Chart",
           "dojox/charting/axis2d/Default",
           "dojox/charting/plot2d/Default", "dojox/charting/plot2d/Indicator",
           "dojox/charting/action2d/PlotAction"
       ], function(Chart, Axis, Plot, Indicator, PlotAction){
           var chart = new Chart("chartNode",
               { margins: {l: 20, t: 30, b: 10, r: 50} });
           chart.addAxis("x", {
               type : Axis,
               font: "normal normal normal 14pt Tahoma",
               fixLower : "minor",
               natural : true,
               stroke : "gray",
               majorTick : {
                   color : "red",
                   length : 4
               },
               minorTick : {
                   color : "blue",
                   length : 2
               }
           });
           chart.addAxis("y", {
               vertical : true,
               font: "normal normal normal 14pt Tahoma",
               min : 0,
               max : 100,
               majorTickStep : 10,
               minorTickStep : 5,
               stroke : "gray",
               majorTick : {
                   stroke : "black",
                   length : 4
               },
               minorTick : {
                   stroke : "gray",
                   length : 2
               }
           });
           chart.addPlot("default", {
               type : Plot
           });
           chart.addPlot("thresholdh", {
               type: Indicator,
               vertical: false,
               lineStroke: { color: "red", style: "ShortDash"},
               stroke: null,
               outline: null,
               fill: null,
               offset: { y: -7, x: -10 },
               values: 15
           });
           chart.addPlot("thresholdv", {
               type: Indicator,
               lineStroke: { color: "blue", style: "ShortDash"},
               stroke: null,
               outline: null,
               fill: null,
               offset: { y: -7, x: 0 },
               values: 5
           });
           chart.addPlot("thresholdhb", {
               type: Indicator,
               vertical: false,
               lineStroke: { color: "red", style: "ShortDash"},
               stroke: null,
               outline: null,
               fill: null,
               offset: { y: -7, x: 10 },
               start: true,
               values: [35]
           });
           chart.addPlot("thresholdvb", {
               type: Indicator,
               lineStroke: { color: "blue", style: "ShortDash"},
               stroke: null,
               outline: null,
               fill: null,
               start: true,
               offset: { y: -7, x: -40 },
               labels: "markers",
               values: [20]
           });
           chart.addPlot("thresholdual", {
               type: Indicator,
               vertical: false,
               lineStroke: { color: "blue", width: 2},
               color: "red",
               stroke: null,
               outline: null,
               fill: null,
               offset: { y: -7, x: -10 },
               lineFill: [0, 10, 50, 0.4],
               values: [50, 90]
           });
           chart.addSeries("markers 1", [ 8, 17, 30 ], { plot: "thresholdvb" });
           chart.addSeries("markers 2", [ 8, 17, 30 ], { plot: "thresholdhb" });
           chart.addSeries("Series A", [ 8, 7, 3, 2, 5, 7, 9, 10, 2, 10, 14, 16,
               29, 13, 16, 15, 20, 19, 15, 12, 24, 20, 20, 26, 28, 26, 28, 14,
               24, 29, 31, 35, 37, 31, 35, 37, 37, 36, 31, 30, 50, 49, 42, 46,
               44, 40, 47, 43, 48, 47, 51, 52, 52, 51, 54, 57, 58, 50, 54, 51,
               74, 68, 67, 62, 62, 65, 61, 66, 65, 62, 74, 78, 78, 77, 74, 62,
               72, 74, 70, 78, 84, 83, 85, 86, 86, 89, 89, 85, 86, 86, 98, 73,
               93, 91, 92, 92, 99, 93, 94, 92 ]);

           var action = new PlotAction(chart, "thresholdh");
           action.process = function(o){
               if(o.type === "onclick"){
                   console.log("down on thresholdh");
               }
           };
           action.connect();
           chart.render();
       });
   });
});