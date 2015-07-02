/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function (){
       require([
           "dojo/store/Memory",
           "dojo/store/Observable",
           "dojo/aspect",
           "dijit/form/DateTextBox",
           "dgrid/OnDemandGrid",
           "dgrid/editor",
           "dojo/domReady!"
       ], function (Memory, Observable, aspect, DateTextBox, OnDemandGrid, editor) {
           // Create the store.
           var store = new Observable(new Memory({
               data: [
                   { id: 1, first: "Albert", last: "Einstein",
                       birthDate: new Date("March 14, 1879") },
                   { id: 2, first: "Renu", last: "Kulkarni",
                       birthDate: new Date("January 05, 2005") },
                   { id: 3, first: "Nikola", last: "Tesla",
                       birthDate: new Date("July 10, 1856") },
                   { id: 4, first: "Blaise", last: "Pascal",
                       birthDate: new Date("June 19, 1623") },
                   { id: 5, first: "Leonardo", last: "da Vinci",
                       birthDate: new Date("April 15, 1452") },
                   { id: 6, first: "Michael", last: "Faraday",
                       birthDate: new Date("September 22, 1791") },
                   { id: 7, first: "Niels", last: "Bohr",
                       birthDate: new Date("October 7, 1885") },
                   { id: 8, first: "Daniel", last: "Bernoulli",
                       birthDate: new Date("February 8, 1700") },
                   { id: 9, first: "Georg", last: "Ohm",
                       birthDate: new Date("March 16, 1789") },
                   { id: 10, first: "Isaac", last: "Newton",
                       birthDate: new Date("December 25, 1642") }
                   // ... <populate data array with all rows>
               ]
           }));

           // Create the grid.
           var grid = new OnDemandGrid({
               columns: {
                   first: editor({
                       label: "First",
                       editor: "text", // native text input
                       editOn: "click" // show textbox when the cell is clicked
                   }),
                   birthDate: editor({
                       label: "Birth date",
                       editor: DateTextBox, // Dijit widget constructor
                       // no editOn specified; always show the editor
                       autoSave: true // put as soon as a change occurs
                   })
               },
               store: store
           }, "example");

           // Listen for the dgrid-datachange event to report changes to fields.
           grid.on("dgrid-datachange", function (event) {
               var item = event.cell.row.data;
               console.log(item.first + " " + item.last +
                   "'s " + event.cell.column.id + " is now " + event.value);
           }, true);
       });
   });
});