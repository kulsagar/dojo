/**
 * Created by sagar on 6/4/14.
 */

define(['dojo/ready'], function(ready){
    ready(function(){
        require([
            "dgrid/Grid",
            "dgrid/extensions/Pagination",
            "dojo/store/Memory",
            "dojo/_base/declare",
            "dojo/query",
            "dojo/domReady!"
        ], function (Grid, Pagination, Memory, declare) {
            // Define the grid data
            var store = new Memory({
                data: [
                    { first: "Albert", last: "Einstein" },
                    { first: "Max", last: "Planck" },
                    { first: "Nikola", last: "Tesla" },
                    { first: "Blaise", last: "Pascal" },
                    { first: "Leonardo", last: "da Vinci" },
                    { first: "Michael", last: "Faraday" },
                    { first: "Niels", last: "Bohr" },
                    { first: "Daniel", last: "Bernoulli" },
                    { first: "Georg", last: "Ohm" },
                    { first: "Isaac", last: "Newton" },
                    { first: "Stephen", last: "Hawking" },
                    { first: "Thomas", last: "Edison" },
                    { first: "Nikola", last: "Tesla" },
                    { first: "Charles", last: "Darwin" },
                    { first: "Galileo", last: "Galilei" },
                    { first: "Louis", last: "Pasteur" },
                    { first: "Max", last: "Planck" },
                    { first: "Sigmund", last: "Freud" },
                    { first: "Alan", last: "Turing" },
                    { first: "Alfred", last: "Nobel" },
                    { first: "Carl", last: "Sagan" },
                    { first: "Carolus", last: "Linnaeus" },
                    { first: "Edwin", last: "Hubble" },
                    { first: "Enrico", last: "Fermi" },
                    { first: "Ernest", last: "Rutherford" },
                    { first: "Francis", last: "Bacon" },
                    { first: "Howard", last: "Carter" }
                    // ...
                ]
            });

            // Define the column structure for the grid
            var columns = {
                first: "First Name", // shortcut for { label: "..." }
                last: {
                    label: "Last Name",
                    formatter: function (value) {
                        return "<strong>" + value + "</strong>";
                    }
                }
            };

            // Compose a paging Grid class
            var PagingGrid = declare([ Grid, Pagination ]);

            // Create the grid instance
            var grid = new PagingGrid({
                columns: columns,
                store: store,
                rowsPerPage: 10, // initial number of rows per page
                pageSizeOptions: [10, 20] // show a page size selector
            }, "example");
        });
    });
});