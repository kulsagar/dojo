/**
 * Created by sagar on 2/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!');
        require(['dojox/charting/Chart2D','dojox/charting/themes/PlotKit/blue'],
        function(Chart2d,PlotKitBlueTheme){
            var chart = new Chart2d('example');
            chart.addPlot("default", {type:'StackedAreas', tension :3});
            chart.addAxis("x", {
                fixLower: 'major', fixUpper: 'major'
            });
            chart.addAxis("y",{
                vertical: true, fixLower: 'major',
                fixUpper: 'major', min:0
            });

            chart.addSeries('Series A', [1, 2, 0.5, 1.5, 1, 2.8, 0.4]);
            chart.addSeries('Series B',[2.6, 1.8, 2, 1, 1.4, 0.7, 2]);
            chart.setTheme(PlotKitBlueTheme);
            chart.render();
        });
    });
});