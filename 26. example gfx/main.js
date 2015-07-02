/**
 * Created by sagar on 2/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!');
        require(['dojox/gfx'], function(gfx){
            var surface = gfx.createSurface("example", 500, 300);
            surface.whenLoaded(function(surface){
                surface.createShape({
                    type:"ellipse",
                    cx:250,
                    cy:150,
                    rx:200,
                    ry:100
                }).setStroke({color:'blue',width:3}).setFill("#BDCFFF");
            });
        });
    });
});