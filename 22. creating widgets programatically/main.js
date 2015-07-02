/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready'],function(ready){
    ready(function(){
        console.log('ready !!!');

        require(["dijit/ProgressBar", "dojo/domReady!"],
            function (ProgressBar) {
                var progressBar = new ProgressBar({
                    maximum: 200,
                    value: 20
                }, "progressBar");

                // Call startup() to properly render
                progressBar.startup();
            }
        );
    });
});