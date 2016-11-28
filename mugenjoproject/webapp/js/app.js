//define(function (require) {
define(['jquery', 'backbone', 'underscore', 'raijin', 'utils', 'toastr', 'testView', 'FooterView', 'UserInfoView', 'UserInfoModel', 'UserInfoViewModel'],
		function($, Backbone, _, raijin, utils, toastr, testView, FooterView, UserInfoView, UserInfoModel, UserInfoViewModel) {
	
	
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
        
        /*Routes*/
        app_router.on('route:showHome',_.debounce(function(){
        	
        	var testV = testView.instance({
        		name: "TestView", 
        		//controller: userVM, 
        		//subscriptions: ['UserInfoViewModel'], 
        		el : "#center-panel",
        		left : $("#left-panel"),
        		right : $("#right-panel")
        	});
        	
        }, 1000, true));
		
        
        $(document).ready(function(){
        	
        	if (!Backbone.History.started){   Backbone.history.start();	}
        	
        	//
        	UserInfoView.instance({name: "UserInfoView", controller: userVM, subscriptions: ['UserInfoViewModel'], el: ".user-info"});
        	
        	//Set Footer
        	FooterView.instance({name:"FooterViews", el:"#footers"});
        	
        	//if (window.location.hash === ''){   window.location = '#home';	}else{	Backbone.history.loadUrl(Backbone.history.fragment);   }
        	
        	jin.utils.documentReady(raijin, toastr);
        	
			/*cache clear*/
			$.ajaxSetup({ cache: false });
        	
        });
	});
	
});