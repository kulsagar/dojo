/**
 * Created by sagar on 31/3/14.
 */

define(['dojo/aspect', 'dojo/ready'], function(aspect,ready){
    ready(function(){
        var myObj={
            foo: "foo",
            bar: "bar",
            method: function(){
                console.log(this.foo);
            }
        };

        aspect.around(myObj,"method", function(originMethod){
            return function(options){
                if(options && options.doSomethingElse){
                    console.log(this.bar);
                }
                else{
                    originMethod.apply(this,arguments);
                }
            }
        });
        myObj.method();
        myObj.method({doSomethingElse:true});
    });
});