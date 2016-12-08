define(['jquery', 'backbone', 'raijin'], function($, backbone, raijin)
{
	
	var UserModel = Backbone.Model.extend({
		urlRoot :  "/mugenjo/service/user/requestUserInfo/"
	})

	function instance (args)
	{
		var self = _.extend(this, args, {
			
			init : function()
			{
				$.when(self.userInstance().fetch()).then(function(data, status, xhr){
					
					self.publish({UserModel : data});
				})
				
				
			},
			
			
			/*Model instances*/
			userInstance : function(){
				return new UserModel();
			}
			
		});
		
	}
	
	return {
		instance: instance
	}

});