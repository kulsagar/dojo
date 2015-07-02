/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready','dojo/_base/declare','dojo/Stateful'], function(ready, declare, Stateful){
    ready(function(){
        console.log('ready !!')

        var MyClass = declare(Stateful,{
            _colorSetter: function(color){
                console.log('Calling _colorSetter: ', color,this.color);
                this.color=color;
            }
        });

        var myObj = new MyClass({color:'green'});

        myObj.watch("color", function(name, oldVal, newVal){
            console.log("myObj."+name+" changed from "+oldVal+" to "+newVal);
        });

        myObj.set("color", "red");
    });
});