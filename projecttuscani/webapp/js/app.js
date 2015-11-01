define(function (require) {
	
	require('jquery');
	require('backbone');
	require('underscore');
	require('bootstrap');
	require('domReady');
	require('text');
	require('moment');
	require('utils');
	
	//models
	var userInfoModel = require('userInfoModel'); 
	
	
	//viewmodels
	var userInfoViewModel = require('userInfoViewModel');
	
	//view
	var userInfoView = require('userInfoView');
	
	
	$(function(){
		//Domain Model
		var userM = new UserInfoModel({name:'userInfoModel'});
		
		//ViewModel
		var userVM = new UserInfoViewModel({
			
		})
		
		
		
		var AppRouter = Backbone.Router.extend({
			
		});
		
		/*Instantiate the router */
        var app_router = new AppRouter();
		
        
        $(document).ready(function(){
        	console.log('document Ready');
        });
	});
	
});