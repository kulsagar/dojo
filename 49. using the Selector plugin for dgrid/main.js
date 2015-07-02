/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
   ready(function(){
       require([
           "dojo/_base/declare",
           "dojo/store/Memory",
           "dgrid/OnDemandGrid",
           "dgrid/Selection",
           "dgrid/selector",
           "dojo/domReady!"
       ], function (declare, Memory, OnDemandGrid, Selection, selector) {
           // Create the store
           var store = new Memory({
               data: [
                   { id: 1, first: "Albert", last: "Einstein",
                       birthDate: new Date("March 14, 1879") },
                   { id: 2, first: "Max", last: "Planck",
                       birthDate: new Date("April 23, 1858") },
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
           });

           // Compose a selectable OnDemandGrid
           var SelectionGrid = declare([ OnDemandGrid, Selection ]);

           // Create the grid
           var grid = new SelectionGrid({
               selectionMode: "single",
               columns: {
                   id: selector({ label: " ", selectorType: "radio" }),
                   // ...other columns
                   first: "First",
                   age: {
                       label: "Age",
                       get: function (obj) {
                           // Compute age in years from birthDate
                           return Math.floor((new Date() - obj.birthDate) /
                               31536000000);
                       }
                   }
               },
               store: store
           }, "example");
       });
   });
});