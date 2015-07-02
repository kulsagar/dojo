/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function(){
       console.log('ready !!');
       require(["dojox/charting/Chart",
           "dojox/charting/plot2d/Bars", "dojox/charting/plot2d/Pie",
           "dojox/charting/themes/PrimaryColors", "dijit/form/Button",
           "dojox/charting/axis2d/Default", "dojo/domReady!"
       ], function(Chart, Bars, Pie, Theme, Button){
           // Create the chart with the initial plot type
           var sampleChart = new Chart("sampleChart");
           sampleChart.setTheme(Theme);
           sampleChart.addPlot("default", {type: Bars, gap: 5, hAxis: "x"});
           sampleChart.addAxis("x", {min: 0});
           sampleChart.addSeries("Sample Numbers", [11, 42, 17]);
           sampleChart.render();

           var button = new Button({}, "switchButton");
           button.on("click", function(){
               // Specify new plot type for the existing plot
               sampleChart.addPlot("default", {type: Pie});
               // Render it
               sampleChart.render();
           });
           button.startup();
       });
   });
});