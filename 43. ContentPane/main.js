/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready','dijit/registry'], function(ready,registry){

    var app={};
    ready(function(){
        console.log('ready !!');
        dojo.connect(registry.byId('btn'), 'onClick', app.onButtonClick);
    });

    app.onButtonClick = function(){
        console.log('You just clicked this button');
        var contentPane = registry.byId('pane');
        //contentPane.set("content", "<h1>New Content </h1>"+"<p>This is new Content</p>");
        contentPane.set("href", "new.html");
    }

    return app;
});