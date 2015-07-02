/**
 * Created by sagar on 31/3/14.
 */

define(['dojo/aspect','dojo/ready'], function(aspect, ready){
    ready(function(){
        var eq={
            double: function(value){return value*2;},
            triple: function(value){return value*3;},
            quadruple: function(value){return value*4;},
            quintuple: function(value){return value*5;}
        }, val;

        aspect.after(eq,"quintuple",function(newValue){
            console.log("quintuple called with :: ",arguments);
            return newValue;
        }, true);

        val=eq.quintuple(2);
        console.log(val);

        aspect.after(eq,"quadruple",function(newValue){
            console.log("quadruple called with :: ",arguments);
            return newValue;
        }, true);

        val=eq.quadruple(2);
        console.log(val);

        aspect.after(eq,"triple",function(newValue){
            console.log("triple called with :: ", arguments);
            return newValue;
        });

        val=eq.triple(2);
        console.log(val);

        aspect.after(eq,"double", function(newValue){
            console.log("double called with :: ", arguments);
        });

        val=eq.double(2);
        console.log(val);

        /*aspect.after(eq,"double", function(newValue){
         console.log("double called with :: ", arguments);
         });

         val=eq.double(2);
         console.log(val);
         */

    });
});