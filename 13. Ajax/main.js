define(
		[
		 	'require', 'dojo/ready', 'dijit/registry', 'dojox/validate/web',
		 	'./AjaxValidationTextBox'
		 ],
		 function(require, ready, registry, validate){
			
			var app = {};
			
			ready(
					function (){
							
							console.log('loaded !!');
					}
			);

		return app;
		}
);