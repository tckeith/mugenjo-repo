define(['jquery', 'raitei'], function($, raitei)
{

	function UserInfoView(args)
    {
		var _this = this;
		this.name = args['name'];
		this.hash = args['hash'];
		this.userData = {};
		
		this.init = function(){
			raitei.getModel('userInfoModel').getUserModel(_this.render);
		}
		
		this.render = function(data){
			
			var _user = _this.userData = data.user;
			
			if (sessionStorage) {
				sessionStorage.setItem("username",_user.username);
				sessionStorage.setItem("role", JSON.stringify(_user.role));
				sessionStorage.setItem("uid", _user.uid);
			}
			
			var superAdmin = _user.role.id == 0 ? true: false;
			
			$('#tabLayout').html('');
			
			if(superAdmin){
				var _html = "<li id='library'><a href='#library'>Library</a></li>"
						+"<li id='upload'><a href='#upload'>Upload</a></li>"
						+"<li id='manage'><a href='#manage'>Manage</a></li>";
				$('#tabLayout').append(_html);
			}
		};
		
		
		
		
    }/*End UserInfoView*/
	
	return {
		'UserInfoView' : UserInfoView
	}

});