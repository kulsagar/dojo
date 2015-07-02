/**
 * Created by sagar on 30/3/14.
 */
define(['dojo/dom', 'dojo/ready','dojo/domReady!'],
    function(dom, ready){
        ready(function(){
            var statusNode = dom.byId("status");
            statusNode.innerHTML='Modified using dom.byId()';
        });
    }
);
