/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready','dojo/store/Memory','dojo/store/Observable','dojo/when'],
    function(ready,Memory, Observable, when){
    ready(function(){
        console.log('ready');

        var foodStore = new Memory({
            data : [
                {id: 'cherry', color:'red'},
                {id: 'lemon', color:'yellow'},
                {id: 'lime', color:'green'},
                {id: 'strawberry', color:'red'},
                {id: 'pickle', color:'green'},
                {id: 'apple', color:'red'}
            ]
        });

        foodStore = new Observable(foodStore);
        var query = foodStore.query({color:'red'});
        query.forEach(function(food){
            console.log("Red food :: ",food.id);
        });
        query.observe(function(obj, oldIndex, newIndex){
            console.log(obj, oldIndex, newIndex);
        });

        foodStore.remove("pickle");
        foodStore.remove("cherry");
    });
});