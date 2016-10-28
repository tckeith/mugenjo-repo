//define(function (require) {
define(['jquery', 'backbone', 'underscore', 'raijin', 'utils', 'userInfoModel'],
		function($, Backbone, _, raijin, utils, UserInfoModel) {
	
	
	$(function(){
		
		
		var AppRouter = Backbone.Router.extend({
			routes : {
				'': 'showHome',
				'home': 'showHome'
			}
		});
		
		/*Instantiate the router */
        var app_router = new AppRouter();
        
        app_router.on('route:showHome',function(){
        	
        	//userM.getUserModel();
        	
        	var userInfoM = new UserInfoModel.instance({name: "UserInfoModel"});
        	raijin.addModel(userInfoM);
        	
        	userInfoM.init();
        	
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