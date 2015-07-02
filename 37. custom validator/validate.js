/**
 * Created by sagar on 5/4/14.
 */

define("./validate.custom",['dojo/_base/lang'], function(lang){
    var validate = lang.getObject('dojox.validate', true);
    validate.isOver555 = function(value, flags){
        console.log('validate');
        return (parseInt(value)>555);
    };
    return validate;
});
