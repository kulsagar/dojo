/**
 * Created by sagar on 5/4/14.
 */

define(['dojo/ready','dojo/_base/declare','dijit/_WidgetBase'], function(ready, declare, _WidgetBase){

    ready(function(){
        console.log('ready !!');

        var MyWidget = declare(_WidgetBase, {
            _setTempAttr: function(temp){
                //internally store value as celsius
                temp = (temp-32)/1.8;

                this._set('temp', temp);
            }
        });

        var widget = new MyWidget();
        widget.set('temp', 78); // set temp in fahrenheit
        console.log('the temperature is '+widget.get('temp')+
            ' degrees celsius');
    });
});