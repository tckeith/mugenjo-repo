define(['jquery'], function($)
{

	function UserInfoModel(args)
    {
		this.name = args['name'];
		
		
		
		this.init = function(callback){
			/*var _serviceObj = {
				type:'GET',
				url:''
			};
			
			utils.CommunicationManager(_serviceObj, function(_data)
           	{
           		if(callback){ callback(_data); }
           	});*/
			
			$.getJSON("test.data/test.json", function(json) {
			   
				if(callback){ callback(json)}
			});
			
		};
		
    }
	
	return {
		'UserInfoModel' : UserInfoModel
	}

});