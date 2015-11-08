define(function (require) {
	
	require('jquery');
	require('backbone');
	require('underscore');
	require('bootstrap');
	require('domReady');
	require('text');
	require('moment');
	require('utils');
	
	require('raitei');
	
	//models
	var userInfoModel = require('userInfoModel'); 
	
	
	//viewmodels
	//var userInfoViewModel = require('userInfoViewModel');
	
	//view
	var userInfoView = require('userInfoView');
	
	
	$(function(){
		
		//var raijin = new raiJin.Raijin({name:'Raijin'});
		
		//Domain Model
		var userM = new userInfoModel.UserInfoModel({name:'userInfoModel'});
		
		
		var AppRouter = Backbone.Router.extend({
			routes : {
				'': 'showHome',
				'home': 'showHome'
			}
		});
		
		/*Instantiate the router */
        var app_router = new AppRouter();
        
        app_router.on('route:showHome',function(){
        	
        	var userInfoV = new userInfoView.UserInfoView({name:'userInfoView'});
        	//raijin.addView(userInfoV);
        	//raijin.getView('userInfoView').init();
        	raitei.addView(userInfoV);
        	raitei.getView('userInfoView').init();
        	//userInfoV.init();
        });
		
        
        $(document).ready(function(){
        	
        	//raijin.addModel(userM);
        	
        	console.log(raitei);
        	raitei.addModel(userM);
        	
        	
        	if (window.location.hash === ''){   window.location = '#home';	}else{	Backbone.history.loadUrl(Backbone.history.fragment);   }
			   
			if (!Backbone.History.started){   Backbone.history.start();	}
			
			/*cache clear*/
			$.ajaxSetup({ cache: false });
        	
        	console.log('document Ready');
        });
	});
	
});