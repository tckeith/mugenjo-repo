define(['jquery', 'raijin'], function($, raijin)
{

	function UserInfoView(args)
    {
		var _this = this;
		this.name = args['name'];
		
		this.init = function(){
			_this.load();
		}
		
		this.load = function(){
			
			/*UserInfoModel.init(function(data){
				console.log(data)
				alert('Complete');
			});*/
			
			raijin.getModel('userInfoModel').init();
		}
		
    }
	
	return {
		'UserInfoView' : UserInfoView
	}

});