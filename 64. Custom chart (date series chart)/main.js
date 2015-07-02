/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        require([
            'dojo/date',
            'dojo/date/locale',
            'dojox/charting/Chart',
            'dojox/charting/themes/Claro',
            'dojo/store/Memory',
            'dojox/charting/StoreSeries',
            'dojo/text!./dateSeriesChart.json',
            'dojo/json',
            'dojox/charting/plot2d/Lines',
            'dojox/charting/axis2d/Default',
            'dojo/domReady!'
        ], function (date, locale, Chart, Claro, Memory,
                     StoreSeries, dataJson, JSON) {
            var data = JSON.parse(dataJson).data;

            // reusable function to create a label
            var makeLabel = function(index) {
                var d = new Date(data[index - 1].date);
                var strDate = locale.format(d, {
                    datePattern: 'MM-dd-yy',
                    selector: 'date'
                });
                return strDate;
            };

            // create our store, chart, and set a theme
            var store = new Memory({idProperty: 'id', data: data});
            var chart2 = new Chart('simplechart2');
            chart2.setTheme(Claro);

            // add a line plot and axes
            chart2.addPlot('default', {type: 'Lines'});
            chart2.addAxis('x', {
                labelFunc: makeLabel,
                minorLabels: true,
                dropLabels: false,
                minorTicks: false,
                font: '10px arial'
            });
            chart2.addAxis('y', {
                vertical: true,
                leftBottom: true,
                includeZero: true
            });

            // add our series using our store and render
            chart2.addSeries('rubicScoreCount',
                new StoreSeries(store, {})
            );
            chart2.render();
        });
    });
});