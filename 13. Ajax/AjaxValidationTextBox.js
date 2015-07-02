define(['dojo/_base/declare', 'dojo', 'dijit/form/ValidationTextBox'],function(declare,dojo,ValidationTextBox){
	return declare('AjaxValidationTextBox', [ValidationTextBox], {

		ajaxUrl:null,
		ajaxLock:false,
		ajaxResult: false,
		isValid: function(){
            console.log('inside isValid');
			var widget=this;
			if(!this.ajaxLock && this.ajaxUrl){
				this.ajaxLock=true;
                console.log('sending request');
				dojo.xhrGet({
					url:widget.ajaxUrl+'?value='+widget.get('value'),
					handleAs: 'json',
					load: function(result){
						console.log(result.result);
						widget.ajaxResult=result;
						widget.validate();
						widget.ajaxLock = false;
				}
				});
			}
			//console.log(this.ajaxResult);
			return this.ajaxResult.result;
	}
	});
	
});