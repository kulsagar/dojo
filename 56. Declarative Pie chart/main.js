/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!');
        require(["dojo/parser",
            "dojox/charting/Chart", "dojox/charting/widget/Chart",
            "dojox/charting/plot2d/Pie", "dojox/charting/plot2d/Default",
            "dojox/charting/themes/PrimaryColors",
            "dojox/charting/action2d/Tooltip",
            "dojox/charting/action2d/MoveSlice",
            "dojo/domReady!"
        ], function(parser) {
            parser.parse();
        });
    });
});