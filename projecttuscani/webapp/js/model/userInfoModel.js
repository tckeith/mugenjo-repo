define(['jquery'], function($)
{

	function UserInfoModel(args)
    {
		this.name = args['name'];
		
		
		
		this.getUserModel = function(callback){
			/*var _serviceObj = {
				type:'GET',
				url:''
			};
			
			utils.CommunicationManager(_serviceObj, function(_data)
           	{
           		if(callback){ callback(_data); }
           	});*/
			
			$.getJSON("test.data/raijin.json", function(json) {
			   
				if(callback){ callback(json)}
			});
			
		};
		
    }
	
	return {
		'UserInfoModel' : UserInfoModel
	}

});