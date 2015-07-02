/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready', 'dojo/on', 'dojo/dom'], function(ready, on, dom){
    ready(function(){
        console.log('ready !!');
        var button = dom.byId('button');
        var buttonHandle = on.pausable(button,"click", function(){
            console.log('button was clicked');
        });
        var disablingButton = dom.byId('disablingButton');
        var enablingButton = dom.byId('enablingButton');

        on(disablingButton,'click',function(){
            buttonHandle.pause();
        });

        on(enablingButton, 'click', function(){
            buttonHandle.resume();
        });
    });
});