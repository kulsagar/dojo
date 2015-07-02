/**
 * Created by sagakulk on 4/1/2014.
 */

define(['dojo/ready', 'dojo/_base/declare'], function(ready, declare){

    ready(function(){
        console.log('ready !!!!');

        var BaseClass = declare(null,{
            method : function(){
                console.log('BaseClass!!!');
                console.log('Anusha is beautiful !!!!!');
            }
        });

        var Mixin1 = declare(null, {
            method: function(){
                console.log("Mixin1 !!");
                this.inherited(arguments);
            }
        });

        var Child = declare([BaseClass,Mixin1], {
            method : function(){
                console.log("Child !!");
                this.inherited(arguments);
            }
        });

        var child = new Child();
        child.method();
    });
});