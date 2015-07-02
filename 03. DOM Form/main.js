/**
 * Created by sagar on 30/3/14.
 */
define(
    ["dojo/ready","dojo/dom-form","dojo/domReady!"],
    function(ready,domForm){
        ready(function(){
            console.log(domForm.toQuery("status"));
            console.log(domForm.toJson("status"));
            console.log(domForm.toObject("status"));
        });
    }
);