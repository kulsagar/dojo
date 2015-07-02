/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        require([
            "dojox/charting/Chart", "dojox/charting/plot2d/Default",
            "dojox/charting/themes/Claro", "dojox/charting/axis2d/Default",
            "dojo/domReady!"
        ], function(Chart, Default, Claro){
            var monthlyCount = [ 83, 118, 98, 78, 104, 111, 91, 80, 102,
                74, 93, 88 ];
            var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct", "Nov", "Dec" ];

            var chart = new Chart("chart");
            chart.setTheme(Claro);
            chart.addAxis("x", {
                max: monthlyCount.length, // Maximum number of units
                fixUpper: "major",        // Force upper tick alignment
                majorTickStep: 1,         // Unit step of one (month)
                minorTicks: false,        // Don't display minor ticks
                majorLabels: true,        // Label major ticks
                labelFunc: function(text, value, precision) {
                    // Using value - 1 to index into the monthNames,
                    // return the corresponding month. The index may
                    // be out of range, so we handle that as well.
                    return monthNames[value - 1] || " ";
                }});
            chart.addAxis("y", {
                vertical: true,    // This is our vertical axis
                fixLower: "major", // Force upper tick alignment
                fixUpper: "major"  // Force lower tick alignment
            });
            chart.addPlot("default", {
                type: Default, // Using the Default plot
                gap: 5,        // Space between points
                areas: true,   // Render areas for this plot
                animate: true  // Animate the plot
            });
            chart.addSeries("Monthly Count", monthlyCount);
            chart.render();
        });
    });
});