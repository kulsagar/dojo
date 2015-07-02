/**
 * Created by sagakulk on 4/1/2014.
 */

define(["dojo/_base/declare"], function(declare){

    return declare(null,{
        name: "Item",
        quantity : 1,
        constructor : function(name){
            if(name){
                this.name=name;
            }
        },
        addQuantity : function(num){
            this.quantity += (num || 1);
        },
        toString: function(){
            return this.name+ " X "+this.quantity;
        }
    });
});