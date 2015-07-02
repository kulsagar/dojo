/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready', 'dojo/_base/declare'], function(ready, declare){
    ready(function(){
        console.log('ready !!');
        var Item = declare(null,{
            constructor : function(args){
                declare.safeMixin(this,args);
            },
            toString : function(){
                return "I am an ";
            }
        });

        var item = new Item({
            toString : function(){
                return this.inherited(arguments)+"Item";
            }
        });

        console.log(item.toString());
    });
});