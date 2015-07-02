/**
 * Created by sagar on 6/4/14.
 */
define(["dojo/_base/declare", "put-selector/put"],
    function (declare, put) {
        return declare('ColorizeValue',[], {
            // valueField: String
            //      Name of field to inspect in data items for
            //      positive/negative value to influence row style.
            valueField: "value",

            renderRow: function (object) {
                var row = this.inherited(arguments);

                // Add the appropriate class based on value.
                if (object[this.valueField] > 0) {
                    put(row, ".positive");
                } else if (object[this.valueField] < 0) {
                    put(row, ".negative");
                }

                return row;
            }
        });
    });