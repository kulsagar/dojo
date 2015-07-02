/**
 * Created by sagar on 31/3/14.
 */

define(['dojo/request','dojo/ready', 'dojo/dom', 'dojo/domReady!'],
    function(request,ready,dom){
        ready(function(){
             function updateName(data){
                 console.log('updateName called');
                 var name = dom.byId('name');
                 name.innerHTML=data.name;
             }
            function updateDate(data){
                console.log('updateDate called');
                var date = dom.byId('date');
                date.innerHTML=data.date;
            }

            function updateTime(data){
                console.log('updateTime called');
                var date = dom.byId('time');
                date.innerHTML=data.time;
            }

            function updatePrice(data){
                console.log('updatePrice called');
                var date = dom.byId('price');
                date.innerHTML=data.price;
            }

            var promise = request('data.json', {handleAs:'json'});
            promise.then(updateName);
            promise.then(updateDate);
            /*
                With above call order cannot be guaranteed (whether updateName
                will be called first or upDateDate is called first).
             */

            /*
                If order is important use a single call back function. (see below)
             */

            promise.then(function(data){
                updateTime(data);
                updatePrice(data);
            });
        });
    });