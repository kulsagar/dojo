/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready','dgrid/Grid','dojo/on', 'dgrid/Selection','dojo/_base/declare','dojo/domReady!'],
    function(ready, Grid, on, Selection, declare){
    ready(function(){
        console.log('ready');
        var columns={
            first : "First Name",
            last : {
                label : "Last Name",
                formatter : function(value){
                    return '<strong>'+value+'</strong>';
                }
            },
            age : {
                label : "Age",
                get : function(obj){
                    return Math.floor((new Date() - obj.birthDate)/31536000000);
                },
                sortable : false
            }
        }
        var SelectionGrid = declare([Grid, Selection], {
            selectionMode: "single"
        });
        var grid = new SelectionGrid({
            columns : columns
        },"example");

        var arrayOfData = [
            {
                first : 'Renu',
                last : 'Kulkarni',
                birthDate : new Date('January 5, 2005')
            },
            {
                first : 'Shivaji',
                last : 'Bhosale',
                birthDate : new Date('February 19, 1630')
            },
            {
                first : 'Amitabh',
                last : 'Bachchan',
                birthDate : new Date('October 11, 1942')
            }
        ];

        grid.renderArray(arrayOfData);
        grid.on(".dgrid-row:click", function(event){
            var data = grid.cell(event).row.data;
            console.log("Clicked on :: ", data.first+" "+data.last);
        });

        on(document, "dgrid-select", function (event) {
            var data = event.grid.row(event.rows[0]).data;
           console.log("Last person selected: " +
                data.first + " " + data.last);
        });
    });
});