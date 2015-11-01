requirejs = 
{
        baseUrl: 'js/',
        //urlArgs: 'v=js_version/',
        paths:
        {
        	utils:'utils',
        	
        	/*dependecies*/
        	bootstrap: 'libs/bootstrap',
        	domReady: 'libs/domReady',
        	jquery:'libs/jquery',
        	moment: 'libs/moment',
        	text: 'libs/text',
        	backbone: 'libs/backbone',
        	underscore: 'libs/underscore',
        		
        	//models
        	userInfoModel: 'model/userInfoModel',
        		
        	//viewmodels
        	userInfoViewModel: 'viewmodel/userInfoViewModel',	
        		
        	//view
        	userInfoView: 'viewmodel/userInfoView',
        },
        shim : {
        	bootstrap: {deps: ['jquery']},
		}

};

