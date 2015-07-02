/**
 * Created by sagakulk on 4/1/2014.
 */

define(['dojo/ready', './Item'], function(ready, Item){
    ready(function(){
        console.log('ready !!!');

        var gadget = new Item('Gadget');
        console.log(gadget.toString());
        Item.prototype.quantity=0;
        console.log(gadget.toString());
        gadget.quantity=5;
        console.log(gadget.toString());

        gadget.addQuantity();
        console.log(gadget.toString());

        console.log(Item.prototype.quantity);
        var gadget1 = new Item("Gadget1 ");
        console.log(gadget1.toString());
    });
});