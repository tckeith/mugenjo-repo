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
        	UserInfoModel: 'model/UserInfoModel',
        		
        	//viewmodels
        	UserInfoViewModel: 'viewmodel/UserInfoViewModel',	
        		
        	//view
        	testView: 'view/testView',
        	UserInfoView: 'view/UserInfoView',
        	FooterView: 'view/master/FooterView'
        },
        shim : {
        	bootstrap: {deps: ['jquery']},
		}

};


/*Client-side global variables*/
GUESTACCOUNT = {
	"fname": "Guest",
	"lname": "User",
	"uid": "33e9232989576b5cfaa06654217d7a1a"
}

