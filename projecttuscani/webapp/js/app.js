define(function (require) {
	
	require('jquery');
	require('backbone');
	require('underscore');
	require('bootstrap');
	require('domReady');
	require('text');
	require('moment');
	require('utils');
	
	
	$(function(){
		//Domain Model
		
		//ViewModel
		
		var AppRouter = Backbone.Router.extend({
			
		});
		
		/*Instantiate the router */
        var app_router = new AppRouter();
		
        
        $(document).ready(function(){
        	console.log('document Ready');
        });
	});
	
});