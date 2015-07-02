/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready'],
    function(ready){

    ready(function(){
        console.log("ready !!");

        require([ "dojo/parser", "dijit/ProgressBar", "dojo/domReady!" ],
            function(parser){
                // Then run the parser
                parser.parse();
            });
    });
});