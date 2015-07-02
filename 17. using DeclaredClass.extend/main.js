/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready','dojo/_base/declare'], function(ready, declare){
    ready(function(){
        console.log('ready');

        var Parent = declare(null, {
            toString : function(){
                return "I am a ";
            }
        });

        var Child = declare(Parent,{
           toString : function(){
               return "I am not a ";
           }
        });

        Child.extend({
            toString : function(){
                return this.inherited(arguments)+ "Item";
            }
        });

        var child = new Child();
        console.log(child.toString());
    });
});