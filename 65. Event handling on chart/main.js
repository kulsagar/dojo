/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        require(["dojo/request", "dojo/store/Memory", "dojox/charting/Chart",
            "dojox/charting/StoreSeries", "dojox/charting/plot2d/Pie",
            "dojox/charting/action2d/Tooltip", "dojox/charting/themes/Chris",
            "dojo/dom", "dojo/string", "dojo/domReady!"
        ], function(request, Memory, Chart, StoreSeries, Pie, Tooltip, Claro,
                    dom, string){
            function createStore(data){
                // Return a new memory store which contains the requested data
                return new Memory({data: data, idProperty: "shop"});
            }

            function createChart(monthlyCount){
                // Create the chart object, passing it the ID of the DOM node
                var chart = new Chart("chart");
                chart.setTheme(Claro);

                // Set chart options
                chart.addPlot("default", {
                    type: Pie, radius: 135, fontColor: "#fff"
                });

                // Add the monthlyCount to the chart as a StoreSeries
                var store = new StoreSeries(monthlyCount, {query: {}}, "sales");
                chart.addSeries("Monthly Sales", store);

                // Add a tooltip and render
                var tip = new Tooltip(chart,"default");
                chart.render();

                // Add event handling to the plot
                chart.connectToPlot("default", function(evt) {
                    // Get the corresponding data from the store,
                    // based on the column
                    var data = monthlyCount.get(
                        monthlyCount.getIdentity(monthlyCount.data[evt.index])
                    );
                    if (evt.type === "onmouseover") {
                        dom.byId("details").innerHTML =
                            string.substitute(
                                    "<strong>${shop}</strong><br />"+
                                    "<em>${manager}</em><br />"+
                                    "Employees: ${employees}<br />"+
                                    "Sales: ${sales}", data);
                    }
                });
            }

            // Request the data from the server, then create a store with it,
            // then create a chart based on that store
            request("./sales.json", {handleAs: "json"})
                .then(createStore)
                .then(createChart);
        });
    });
});