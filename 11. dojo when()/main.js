/**
 * Created by sagar on 31/3/14.
 */

define(['dojo/request','dojo/when','dojo/ready'],
    function(request,when,ready){
        ready(function(){
            when(10).then(function(val){
                console.log("The value is :: "+val);
            });

            when(request('data.json',{handleAs:'text'})).then(
                function(data){
                    console.log("Server response :: "+data);
                }
            );

        });
    });