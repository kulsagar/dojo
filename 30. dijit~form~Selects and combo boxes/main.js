/**
 * Created by sagar on 4/4/14.
 */

define(['dojo/ready','dijit/registry'], function(ready, registry){

    var app={};
    ready(function(){
        console.log('ready !!')
        dojo.connect(registry.byId('btnSubmit'),'onClick',app.onButtonClick);
    });

    app.onButtonClick = function(){
        console.log('You have clicked this button');
        require(['dojo/dom-form'], function(domForm){
            console.log(domForm.toJson('selectsComboBoxesForm'));
        });
    }
});