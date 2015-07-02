/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready','dijit/registry'], function(ready, registry){
    ready(function(){
        console.log('ready !!')

        // get the required widget using it's id.
        var slider = registry.byId('slider');
        // watch for property change
        slider.watch("value", function(name, oldVal, newVal){
            var textBox = registry.byId('textBox');
            textBox.set("value", newVal);
        });
    });
});