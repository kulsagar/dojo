/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function(){
       console.log('ready !!');
       require(['dojox/charting/Chart',
           'dojox/charting/plot2d/Columns',
       'dojox/charting/themes/Tom',
           'dojox/charting/action2d/Tooltip',
           'dojox/charting/axis2d/Default',
           'dojo/domReady!'
       ],function(Chart,Columns,TomTheme,Tooltip){
           var barChart = new Chart('barChart');
           barChart.setTheme(TomTheme);
           barChart.addAxis("x",{
               fixUpper : 'major', includeZero: false,max : 10});
           barChart.addAxis("y",
               {vertical:  true, fixLower: 'major', fixUpper: 'major'});
           barChart.addPlot("default", {type:Columns,gap: 5});

           barChart.addSeries('Visits for February',
           [9423, 10808, 9711, 15991, 17312, 15280, 17800, 16229]);

           var toolTip = new Tooltip(barChart);

           barChart.render();
           });
       });
});