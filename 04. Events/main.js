/**
 * Created by sagar on 30/3/14.
 */
define(["dojo/on","dojo/query", "dojo/ready"], function(on, query, ready){
    ready(function(){
        on(document,"click",function(e){
            console.log('dojo/on::  Node clicked :: ', e.target);
        });

        on(document,".sidebar:click",function(e){
            console.log('dojo/on:: sidebar clicked', e.target);
        });

        var handle= on(document,"click",function(e){
            console.log('dojo/on :: this only runs one time')
            handle.remove();
        });

        on.once(document,"click", function(e){
            console.log('dojo/on :: this also runs once');
        });
    });
});