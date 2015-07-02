define([
        'dojo/_base/declare',
        'dojo',
        'dijit/registry',
        'dojo/ready',
        'Handlebars'
        ],function(declare,dojo,registry,ready){
			return declare('app.controller.FormController',[],{
				entity:{},
				formId:null,
				postUrl:null,
				
				constructor: function(options){
					console.log('constructor');
					dojo.safeMixin(this,options);
				},
				renderForm: function(contentPane){
					var controller = this;
					console.log('renderForm called !!!!!');
                    console.log(location.href);
					require(['dojo/text!'+'./view/form.html'], function(view){

         				var template=Handlebars.compile(view);
						contentPane.set('content', template({
							formId:controller.formId,
							postUrl:controller.postUrl,
							entity:controller.entity
						}));
						ready(function(){
							dojo.connect(registry.byId('bSubmit'), 'onClick', function(){
								dojo.xhrPost({
									form: dojo.byId(controller.formId),
									handleAs: 'json',
									load:function(response){
										console.log('resp received');
										controller.renderResponse(response, contentPane);
								},
								error:function(){
									console.log('Error !');
								}
								});
							});
						});
					});
				},
				renderResponse:function(response, contentPane){
					/*var html='<pre><code>'+response+'</code></pre>';
					var responseContentPane=registry.byId(this.formId+'Response');
					responseContentPane.set('content',html);*/
					console.log('render response called');

					require(['dojo/text!'+'./view/showUser.html'], function(view){
						var template=Handlebars.compile(view);
						console.log('rendering view !!');
						contentPane.set('content',template({
							entity:response/*{
								firstName:response.firstName
							}*/
						}));
					});
				}
			});
});