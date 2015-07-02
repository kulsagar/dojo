/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready', 'dijit/registry'], function(ready, registry){
    var app = {};
    ready(function(){
        console.log('ready !!')
        dojo.connect(registry.byId('toggleButton'),'onChange', app.onStateChange);
    });

    app.onStateChange = function(state){
        console.log("State :: "+state);
    }

});