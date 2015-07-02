define(
		[
		 	'require', 'dojo/ready', 'dijit/registry', 'dojox/validate/web'
		 ],
		 function(require, ready, registry){
			
			var app = {};
			
			ready(
					function (){
							
							console.log('loaded !!');
							require(['./controller/FormController'], function(FormController){
								var controller= new FormController({
									formId:'myForm',
									postUrl:'data2.json',
									entity:{
									firstName: 'Renu',
									lastName: 'Kulkarni',
									email: 'renu@daughter.com'
								}
								});
								controller.renderForm(registry.byId('contentPane'));
							});
					});
		return app;
		});