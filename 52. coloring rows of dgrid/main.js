/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready','./ColorizeValue'], function(ready, ColorizeValue){
  ready(function(){
      console.log ('ready!!');
      require([
          "dojo/_base/declare",
          "dgrid/Grid",
          "dojo/domReady!"
      ], function (declare, Grid) {
          // Create a constructor which mixes in the extension.
          var ColorizedGrid = declare([Grid, ColorizeValue]);

          // Create an instance and render data into it.
          var myGrid = new ColorizedGrid({
              columns: {
                  symbol: "Symbol",
                  change: "Change"
              },
              // Specify the field that ColorizeValue should focus on.
              valueField: "change"
          }, "example");
          myGrid.renderArray([
              { symbol: "AAPL", change: 12.32 },
              { symbol: "ADBE", change: 0.39 },
              { symbol: "AKAM", change: 0.4 },
              { symbol: "AMZN", change: -1.11 },
              { symbol: "CSCO", change: 0.09 },
              { symbol: "GOOG", change: -0.25 },
              { symbol: "EBAY", change: -0.25 },
              { symbol: "MSFT", change: -0.07 },
              { symbol: "NVDA", change: 0.11 },
              { symbol: "QCOM", change: -0.29 }
          ]);
      });
  });
});