/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        require(["dojox/charting/Chart", "dojox/charting/plot2d/Columns",
            "dojox/charting/themes/WatersEdge",
            "./SitePen.js",
            "dojox/charting/axis2d/Default", "dojo/domReady!"
        ], function (Chart, Columns, WatersEdge, SitePen) {
            var chartData =
                [9423, 10808, 9711, 15991, 17312, 15280, 17800, 16229];

            // Function to create the chart
            function makeChart(chartId, theme) {
                var chart = new Chart(chartId);
                chart.setTheme(theme)
                    .addAxis("x", {
                        fixUpper: "major", includeZero: false, max: 10
                    })
                    .addAxis("y", {
                        vertical: true, fixLower: "major", fixUpper: "major"
                    })
                    .addPlot("default", {type: Columns, gap: 5})
                    .addSeries("Visits For February", chartData)
                    .render();
            }

            // Create the first chart with the WatersEdge theme
            makeChart("chart", WatersEdge);

            // Create the second chart with the SitePen theme,
            // which extends WatersEdge
            makeChart("chartSitePen", SitePen);
        });
    });
});