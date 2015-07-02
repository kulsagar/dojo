/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        require(["dojo/store/Memory", "dojo/store/Observable",
                "dojox/charting/Chart", "dojox/charting/plot2d/Default",
                "dojox/charting/plot2d/Lines", "dojox/charting/StoreSeries",
                "dojox/charting/themes/Claro", "dojox/charting/action2d/Tooltip",
                "dojox/charting/axis2d/Default", "dojo/domReady!"],
            function (Memory, Observable, Chart, Default, Lines, StoreSeries, Theme,
                      Tooltip){
                // Create an array for the X-axis labels
                var labels = [ "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM",
                    "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM",
                    "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];

                // Create an empty Observable Memory store
                var memoryStore = new Observable(new Memory({
                    idProperty: "time"
                }));

                // Create the line chart
                var chart = new Chart("chart");
                chart.setTheme(Theme);
                chart.addAxis("x", {
                    majorTickStep: 4, fixUpper: "major",
                    minorTicks: false, min: 1, max: 24, includeZero: false,
                    labelFunc: function(text, value) { return labels[value] || " "; }
                });
                chart.addAxis("y", {
                    vertical: true, majorTickStep: 10, fixLower: "major",
                    fixUpper: "major", max: 100, min: 0, includeZero:true
                });
                chart.addPlot("default", {type: Lines, markers: true });

                // Create and add a StoreSeries from the Observable store
                var store = new StoreSeries(memoryStore, {}, "temperature");
                chart.addSeries("x", store, "temperature");

                // Use a Tooltip to display the value plotted
                var tooltip = new Tooltip(chart, "default");

                // Render the chart
                chart.render();

                // Take "measurements" every second to demonstrate
                // the use of the store with the chart
                window.setInterval(function(){
                    memoryStore.put( thermometer(), {overwrite: true} );
                }, 1000);
            });

// Simulate a clock and thermometer
        var thermometer = (function(){
            var time = 17;
            var increment = Math.PI/12;
            return function(){
                time = (time + 1) % 24;
                return {
                    time: time,
                    temperature: Math.round((20 * Math.sin(increment * time) + (Math.random() * 5)) + 45)
                };
            };
        }());
    });
});