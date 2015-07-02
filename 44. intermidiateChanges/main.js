/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready', 'dijit/registry', 'dojo/_base/lang', 'dojo/topic'],
    function(ready, registry, lang, topic){
    ready(function(){
        console.log('ready !!');
        var inputBox = registry.byId('inputbox');
        var outputBox = registry.byId('outputbox');
        var myTopic = "/myApp/textEntered";

        inputBox.on("change", lang.hitch(topic, "publish", myTopic));

        topic.subscribe(myTopic, function(text){
            outputBox.set('value',text);
        });
    });
});