/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready'], function(ready){

    ready(function(){
        console.log('ready !!!!');

        require(['dojo/parser', 'dijit/registry', 'dijit/ProgressBar',
            'dojo/domReady!'],
            function(parser,registry){
                parser.parse();

                var progressBar = registry.byId("progressBar");
                console.log("Progress :: "+progressBar.get("progress"));
            }
        );
    });
});