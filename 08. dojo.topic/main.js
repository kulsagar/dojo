/**
 * Created by sagar on 31/3/14.
 */

define(['dojo/topic','dojo/ready'], function(topic,ready){
    ready(function(){

        var handle= topic.subscribe("/app/post", function(data){
            console.log("Post data :: "+data.post);
        })

        topic.publish("/app/post", {post: 'dojo rocks!!!'});

        handle.remove();

        topic.publish("/app/post", {post: "this is gone"});
    });
});