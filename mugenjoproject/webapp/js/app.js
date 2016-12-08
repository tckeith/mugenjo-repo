//define(function (require) {
define(['jquery', 'backbone', 'underscore', 'raijin', 'utils', 'toastr', 'testView', 'FooterView', 'UserInfoView', 'UserInfoModel', 'UserInfoViewModel', 'UserLoginView'],
		function($, Backbone, _, raijin, utils, toastr, testView, FooterView, UserInfoView, UserInfoModel, UserInfoViewModel, UserLoginView) {
	
	
	$(function(){
		
		//Declare ViewModels and Models
		
		var userInfoM = new UserInfoModel.instance({name: "UserInfoModel"});
    	raijin.addModel(userInfoM);
    	
    	var userVM = new UserInfoViewModel.instance({name: "UserInfoViewModel", domain : 'UserInfoModel', subscriptions: ['UserInfoModel']});
    	raijin.addViewModel(userVM);
		
    	
		var AppRouter = Backbone.Router.extend({
			routes : {
				'': 'showHome',
				'home': 'showHome',
				'signon': 'login'
			}
		});
		
		/*Instantiate the router */
        var app_router = new AppRouter();
        
        /*Routes*/
        app_router.on('route:showHome',_.debounce(function(){
        	
        	var testV = testView.instance({
        		name: "TestView", 
        		el : "#center-panel",
        		left : $("#left-panel"),
        		right : $("#right-panel")
        	});
        	
        }, 1000, true));
        
        app_router.on('route:login', _.debounce(function(){
        	
        	UserLoginView.instance({
        		name: "UserLoginView",
        		controller: userVM,
        		subscriptions: ["UserInfoViewModel"],
        		el: "#center-panel"
        	});
        	
        }, 1000, true));
		
        
        $(document).ready(function(){
        	
        	if (!Backbone.History.started){   Backbone.history.start();	}
        	
        	//User information panel
        	UserInfoView.instance({name: "UserInfoView", controller: userVM, subscriptions: ['UserInfoViewModel'], el: ".user-info"});
        	
        	//Set Footer
        	FooterView.instance({name:"FooterView", el:"#footers"});
        	
        	//if (window.location.hash === ''){   window.location = '#home';	}else{	Backbone.history.loadUrl(Backbone.history.fragment);   }
        	
        	jin.utils.documentReady(raijin, toastr);
        	
			/*cache clear*/
			$.ajaxSetup({ cache: false });
        	
        });
	});
	
});