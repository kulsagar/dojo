/**
 * Created by sagakulk on 4/2/2014.
 */

define(['dojo/ready','dojo/store/Memory', 'dojo/when'], function(ready,Memory,when){

    ready(function(){
        console.log('ready !! ');

        var data = [
            {id: 'cherry', color:'red'},
            {id: 'lemon', color:'yellow'},
            {id: 'lime', color:'green'},
            {id: 'strawberry', color:'red'},
            {id: 'pickle', color:'green'},
            {id: 'apple', color:'red'}
        ];

        foodStore = new Memory({
            data : data
        });

        when(foodStore.get('cherry')).then(function(cherry){
            cherry.color="blue";

            when(foodStore.put(cherry)).then(function(cherry){
                console.log("Updated item: ",data[0].id+" "+data[0].color);
            });
        });
        console.log("Length before remove :: ",data.length);
        foodStore.remove("pickle");
        console.log("Length after remove :: ",data.length);
    });
});