requirejs = 
{
        baseUrl: 'js/',
        urlArgs: 'v=1.1',
        paths:
        {
        	utils:'utils',
        	raijin:'libs/raijin',
        	//raitei: 'libs/raitei',
        	
        	/*dependencies*/
        	bootstrap: 'libs/bootstrap',
        	domReady: 'libs/domReady',
        	jquery:'libs/jquery',
        	moment: 'libs/moment',
        	text: 'libs/text',
        	backbone: 'libs/backbone',
        	underscore: 'libs/underscore',
        	blockui: 'libs/blockui',
        		
        	//models
        	userInfoModel: 'model/userInfoModel',
        		
        	//viewmodels
        	//userInfoViewModel: 'viewmodel/userInfoViewModel',	
        		
        	//view
        	userInfoView: 'view/userInfoView',
        },
        shim : {
        	bootstrap: {deps: ['jquery']},
		}

};

