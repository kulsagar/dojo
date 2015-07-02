/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready');
        require([

            "dojo/dom",
            "dojo/on",
            "dojo/store/Memory",
            "dgrid/OnDemandGrid",
            "dojo/domReady!"
        ], function (dom, on, Memory, OnDemandGrid) {
            var store = new Memory({ data: [
                { id: 1, name: "Foo" },
                { id: 2, name: "Bar" },
                { id: 3, name: "Baz" },
                { id: 4, name: "Fizz" },
                { id: 5, name: "Buzz" },
                { id: 6, name: "Qux" },
                { id: 7, name: "Corge" },
                { id: 8, name: "Grault" },
                { id: 9, name: "Garply" },
                { id: 10, name: "Waldo" }
            ]});
            var grid = new OnDemandGrid({
                    columns: {
                        id: "ID",
                        name: "Name"
                    },
                    store: store
                }, "grid"),
                filterbox = dom.byId("filterbox"),
                filterform = dom.byId("filterform");

            on(filterform, "submit", function (evt) {
                evt.preventDefault();
                // Set the grid's query based on the value in the textbox.
                grid.set("query", {
                    // Create a case-insensitive RegExp.
                    // (usable by SimpleQueryEngine)
                    name: new RegExp(filterbox.value, "i")
                });
            });
        });
    });
});