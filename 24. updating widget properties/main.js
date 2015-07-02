/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!!');

        require(['dojo/parser','dijit/registry','dijit/ProgressBar','dojo/domReady!'],
            function(parser,registry){
                parser.parse();

                var progressBar = registry.byId('progressBar');

                var max = progressBar.get("maximum");
                var val = progressBar.get("value");

                var interval = setInterval(function(){
                    val +=10;
                    if(val >=max){
                        val=max;
                        clearInterval(interval);
                    }
                    progressBar.set("value", val);
                }, 500);
            }
        );
    });
});