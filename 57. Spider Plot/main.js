/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!');
        require(["dojox/charting/Chart", "dojox/charting/plot2d/Spider",
            "dojox/charting/themes/PlotKit/blue", "dijit/Tooltip",
            "dojox/charting/axis2d/Base"
        ], function(Chart, Spider, blue, Tooltip, Base){
            var chart = new Chart("chartNode");
            chart.setTheme(blue);
            // add the spider plot to the chart
            chart.addPlot("default", {
                type: Spider,
                labelOffset: -10,
                axisColor: "lightgray",
                spiderColor: "silver",
                seriesFillAlpha: 0.2,
                spiderOrigin: 0.16,
                markerSize: 3,
                precision: 0
            });

            // define some data to plot
            var data= [ {"Sales": 73, "Marketing": 226, "Development": 125,
                "Administration": 135, "Support": 105},
                {"Sales": 73, "Marketing": 206, "Development": 155,
                    "Administration": 235, "Support": 87},
                {"Sales": 53, "Marketing": 326, "Development": 225,
                    "Administration": 145, "Support": 55}
            ];

            // add an axis for each dimension of the data
            chart.addAxis("Sales", { type: Base, min: 0, max: 100 });
            chart.addAxis("Marketing", { type: Base, min: 100, max: 400});
            chart.addAxis("Development", { type: Base, min: 0, max: 250 });
            chart.addAxis("Administration", { type: Base, min: 0, max: 250});
            chart.addAxis("Support", { type: Base, min: 0, max:150 });

            // add data series to plot
            chart.addSeries("China", { data: data[0] }, { fill: "blue" });
            chart.addSeries("India", { data: data[1] }, { fill: "purple" });

            chart.render();
        });
    });
});