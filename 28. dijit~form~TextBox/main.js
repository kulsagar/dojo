define(
		[
		 	 'dojo/ready', 'dijit/registry'
		 ],
		 function(ready, registry){
			
			var app = {};

			ready(
					function (){
							dojo.connect(registry.byId('btnSubmit'), 'onClick', app.onButtonClick);
							console.log('loaded !!');
					}
			);

			app.onButtonClick = function(){
                console.log("You have just clicked this button.");
                require(['dojo/dom-form'], function(domForm){
                    console.log(domForm.toJson('textBoxForm'));
                });

			};
			return app;
		}
);