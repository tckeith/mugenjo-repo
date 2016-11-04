//define(function (require) {
define(['jquery', 'backbone', 'underscore', 'raijin', 'utils', 'userInfoView', 'userInfoModel', 'userInfoViewModel'],
		function($, Backbone, _, raijin, utils, UserInfoView, UserInfoModel, UserInfoViewModel) {
	
	
	$(function(){
		
		//Declare ViewModels and Models
		
		var userInfoM = new UserInfoModel.instance({name: "UserInfoModel"});
    	raijin.addModel(userInfoM);
    	
    	
    	var userVM = new UserInfoViewModel.instance({name: "UserInfoViewModel", domain : 'UserInfoModel', subscriptions: ['UserInfoModel']});
    	raijin.addViewModel(userVM);
		
		
		var AppRouter = Backbone.Router.extend({
			routes : {
				'': 'showHome',
				'home': 'showHome'
			}
		});
		
		/*Instantiate the router */
        var app_router = new AppRouter();
        
        app_router.on('route:showHome',function(){
        	
        	var userInfoV = new UserInfoView.instance({name: "UserInfoView", controller: userVM, subscriptions: ['UserInfoViewModel'], el : "#Containter"});
        	
        	raijin.addView(userInfoV);
        	
        });
		
        
        $(document).ready(function(){
        	
        	if (!Backbone.History.started){   Backbone.history.start();	}
        	
        	//if (window.location.hash === ''){   window.location = '#home';	}else{	Backbone.history.loadUrl(Backbone.history.fragment);   }
			
			/*cache clear*/
			$.ajaxSetup({ cache: false });
        	
        	console.log('document Ready');
        });
	});
	
});