/**
 * Created by sagar on 30/3/14.
 */
        var foo = {
            bar: "test Value"
        };

define(['dojo/ready','require'], function(ready, require){

    var app = {};
    ready(
        function(){
            app.testTrim();
            app.testSubstitute();
            app.testGetObject();
        });
    app.testTrim = function(){
        require(['dojo/_base/lang'], function(lang){
            var text = '   some spaces    ';
            console.log(text);
            console.log("Before length :: "+text.length);
            console.log("After length :: "+lang.trim(text).length);
        });
    }

    app.testSubstitute = function(){
        require(['dojo/string'],function(string){

            var template = "Dojo is ${description}";
            var map = {description:"sexy!"}
            console.log(string.substitute(template,map));
        });
    }

    app.testGetObject = function(){
        require(['dojo/_base/lang'], function(lang){
            /*var foo = {
                bar: "test Value"
            };*/
            console.log('value :: '+lang.getObject("bar", false, foo));
            console.log('value :: '+lang.getObject("foo.bar"));
        });
    }
});