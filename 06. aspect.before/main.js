/**
 * Created by sagar on 31/3/14.
 */

define(['dojo/aspect','dojo/ready'], function(aspect,ready){
    ready(function(){
        var obj= {
            checkValue:function(value, verify){
                if(verify){
                    console.log("verified value :: ", value);
                }
                else{
                    console.log("value not verified :: ", value);
                }
            }
        };

        aspect.before(obj,"checkValue",function(value,verify){
            return [value,true];
        });

        obj.checkValue(800);
    });
});
