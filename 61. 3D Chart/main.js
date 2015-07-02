/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function(){
       require(["dojox/charting/Chart3D",
           "dojox/charting/plot3d/Cylinders",
           "dojox/gfx3d/matrix", "dojo/domReady!"
       ], function(Chart3D, Cylinders, matrix3d) {
           var chart = new Chart3D("chartNode",
               {
                   lights: [{direction: {x: 5, y: 5, z: -5}, color: 'white'}],
                   ambient: {color: 'white', intensity: 2},
                   specular: 'white'
               },
               [
                   matrix3d.cameraRotateXg(10),
                   matrix3d.cameraRotateYg(-10),
                   matrix3d.scale(0.8),
                   matrix3d.cameraTranslate(-50, -50, 0)
               ]
           );

           var plot1 = new Cylinders(500, 500, {gap: 10, material: 'blue'});
           plot1.setData([1,2,3,2,1,2,3,4,5]);
           chart.addPlot(plot1);

           var plot2 = new Cylinders(500, 500, {gap: 10, material: 'green'});
           plot2.setData([2,3,4,3,2,3,4,5,5]);
           chart.addPlot(plot2);

           var plot3 = new Cylinders(500, 500, {gap: 10, material: 'purple'});
           plot3.setData([3,4,5,4,3,4,5,5,5]);
           chart.addPlot(plot3);

           chart.generate().render();
       });
   });
});