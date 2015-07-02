/**
 * Created by sagar on 31/3/14.
 */
define(['dojo/request', 'dojo/ready','dojo/dom','dojo/domReady!'],
    function(request,ready,dom){
        ready(function(){
            var responsePromise= request('data.json');
            responsePromise.then(function(rawData){
                return JSON.parse(rawData);
            }).then(function(parsedData){
                    var p = dom.byId('data');
                    p.innerHTML = parsedData.name;
                    console.log(parsedData);
                }
            )
        });
    }

);