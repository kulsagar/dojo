/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        console.log('ready !!')

        require([
            "dojo/_base/declare",
            "dojo/store/Memory",
            "dgrid/OnDemandGrid",
            "dgrid/tree",
            "dojo/domReady!"
        ], function (declare, Memory, OnDemandGrid, tree) {
            // Create the store
            var store = new Memory({
                // The data is a list of countries grouped by continent. A country is
                // bound to a continent by its "parent" attribute. Continents, as roots
                // of the hierarchy, have no parent.
                data: [
                    // North America
                    { id: "NAC", name: "North America", type: "continent", population: "356 millino" },
                    { id: "CA", name: "Canada", type: "country",  population: "35 million", parent: "NAC" },
                    { id: "US", name: "United States of America", type: "country", population: "317 million",
                        parent: "NAC" },
                    { id: "MX", name: "Mexico", type: "country",  population: "118 million", parent: "NAC" },
                    { id: "CU", name: "Cuba", type: "country",  population: "11 million", parent: "NAC" },
                    { id: "GT", name: "Guatemala", type: "country",  population: "15 million", parent: "NAC" },
                    // South America
                    { id: "SAC", name: "South America", type: "continent", population: "407 million" },
                    { id: "AR", name: "Argentina", type: "country", population: "40 million", parent: "SAC" },
                    { id: "BR", name: "Brazil", type: "country", population: "201 million", parent: "SAC" },
                    { id: "CH", name: "Chile", type: "country", population: "17 million", parent: "SAC" },
                    { id: "CO", name: "Colombia", type: "country", population: "47 million", parent: "SAC" },
                    { id: "EC", name: "Ecuador", type: "country", population: "16 million", parent: "SAC" },
                    // Asia
                    { id: "ASIA", name: "Asia", type: "continent", population: "4.3 billion" },
                    { id: "CN", name: "China", type: "country", population: "1.4 billion", parent: "ASIA" },
                    { id: "IN", name: "India", type: "country", population: "1.2 billion", parent: "ASIA" },
                    { id: "RU", name: "Russia", type: "country", population: "144 million", parent: "ASIA" },
                    { id: "MN", name: "Mongolia", type: "country", population: "3 million", parent: "ASIA" },
                    { id: "JP", name: "Japan", type: "country", population: "127 million", parent: "ASIA" },
                    // Europe
                    { id: "EUR", name: "Europe", type: "continent", population: "739 million" },
                    { id: "GE", name: "Germany", type: "country", population: "81 million", parent: "EUR" },
                    { id: "UK", name: "United Kingdom", type: "country", population: "64 million", parent: "EUR" },
                    { id: "FR", name: "France", type: "country", population: "66 million", parent: "EUR" },
                    { id: "IT", name: "Italy", type: "country", population: "60 million", parent: "EUR" },
                    { id: "ES", name: "Spain", type: "country", population: "47 million", parent: "EUR" }
                    // ...
                ],

                getChildren: function (object, options) {
                    return this.query({ parent: object.id }, options);
                },

                mayHaveChildren: function (object) {
                    return object.type === "continent";
                }
            });

            // Compose a simple OnDemandGrid
            var TreeGrid = declare([ OnDemandGrid ]);

            // Create the grid
            var grid = new TreeGrid({
                store: store,
                // only retrieve top-level data items at first
                query: { type: "continent" },
                columns: [
                    tree({ label: "Name", field: "name" }),
                    { label: "Type", field: "type", sortable: false },
                    { label: "Population", field: "population" }
                ]
            }, "example");
        });
    });
});