define(['jquery', 'raitei'], function($, raitei)
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
			
			raitei.getModel('userInfoModel').init();
		}
		
    }
	
	return {
		'UserInfoView' : UserInfoView
	}

});