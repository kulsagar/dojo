/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready','./progress'], function(ready, progress){
    ready(function(){
        console.log('ready !!');
        require([
            "dgrid/Grid",  "dojo/domReady!"
        ], function (Grid) {
            // Define the grid data.
            var arrayOfData = [
                { task: "Generate requirements", progress: 100 },
                { task: "Develop plan", progress: 100 },
                { task: "Create mockups", progress: 75 },
                { task: "Enter test cases", progress: 100 },
                { task: "Write code", progress: 25 },
                { task: "Fix bugs", progress: 5 },
                { task: "Deploy", progress: 0 },
                { task: "Write API documentation", progress: 10 },
                { task: "Write user guide", progress: 0 },
                { task: "Update wiki pages", progress: 0 }
                // ...
            ];

            // Create the grid instance.
            var grid = new Grid({
                columns: {
                    task: "Task", // shortcut for { label: "..." }
                    progress: progress({ label: "Progress" })
                }
            }, "example");
            // Render the data.
            grid.renderArray(arrayOfData);
        });
    });
});