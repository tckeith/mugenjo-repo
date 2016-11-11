window.jin = {
	utils : {}
};

requirejs = 
{
        baseUrl: 'js/',
        urlArgs: 'v=1.1',
        paths:
        {
        	utils:'utils',
        	raijin:'libs/raijin',
        	
        	/*dependencies*/
        	bootstrap: 'libs/bootstrap',
        	domReady: 'libs/domReady',
        	jquery:'libs/jquery',
        	moment: 'libs/moment',
        	text: 'libs/text',
        	backbone: 'libs/backbone',
        	underscore: 'libs/underscore',
        	blockui: 'libs/blockui',
        	toastr: 'libs/toastr',
        		
        	//models
        	userInfoModel: 'model/userInfoModel',
        		
        	//viewmodels
        	userInfoViewModel: 'viewmodel/userInfoViewModel',	
        		
        	//view
        	userInfoView: 'view/userInfoView',
        	FooterView: 'view/FooterView'
        },
        shim : {
        	bootstrap: {deps: ['jquery']},
		}

};

