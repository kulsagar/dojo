/**
 * Created by sagakulk on 4/1/2014.
 */

define(['dojo/_base/declare', './Item'], function(declare, Item){
    return declare(Item,{
        price :0,
        constructor:function(name,price){

            if(price){
                this.price=price;
            }
        },
        toString:function(){
            return this.name+" @ "+this.price+" X "+this.quantity+" = "+this.price*this.quantity;
        }
    });
});