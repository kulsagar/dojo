/**
 * Created by sagakulk on 4/1/2014.
 */

define(['dojo/ready', './PricedItem'], function(ready, PricedItem){
    ready(function(){
        console.log('ready !!!');
        var pricedGadget = new PricedItem("Gadget", 20);
        pricedGadget.addQuantity(4);
        console.log(pricedGadget.toString());
    });
});