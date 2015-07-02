/**
 * Created by sagar on 6/4/14.
 */
define([
    "put-selector/put"
], function (put) {
    // Define a column plugin which generates a progress indicator.
    return function (column) {
        column.renderCell = function (object, value, cell) {
            // Create DOM simulating a progress bar with percentage
            // based on the passed value for this cell.
            // For simplicity, we'll assume value is out of 100, but
            // could easily rely on a property of the column definition
            // to tell us.
            var barNode = put("div.progressBar"),
                fillNode = put(barNode, "div.progressBarFill");

            fillNode.style.width = value + "%";

            return barNode;
        };

        return column; // Pass the column object through.
    };
});