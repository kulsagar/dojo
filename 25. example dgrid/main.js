/**
 * Created by sagar on 2/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!');

        require(['dojo/store/Memory','dgrid/OnDemandGrid'],
        function(Memory,Grid){
            var personStore = new Memory({
                data : [
                    {id :1,  lastName: 'Kulkarni', firstName:'Renu'},
                    {id :2,  lastName: 'Chouhan', firstName:'Vijay'},
                    {id :3,  lastName: 'Kaka', firstName:'Ramu'},
                    {id :4,  lastName: 'Suarez', firstName:'Luis'},
                ]
            });

            var grid = new Grid({
                store: personStore,
                columns:{
                    lastName: "Last Name",
                    firstName: "First Name"
                }
            },'example');
        });
    });
});