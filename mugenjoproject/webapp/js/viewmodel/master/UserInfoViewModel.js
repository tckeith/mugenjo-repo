define(['jquery', 'backbone', 'raijin'], function($, backbone, raijin)
{
	
	var UserModel = Backbone.Model.extend({
		name: "User",
		notify : false,
		//urlRoot :  "/mugenjo/service/user/requestUserInfo/",
		url : function(){
			return "/mugenjo/service/user/"+this.args.method;
		},
		validation : {
			password: {
				fn : 'validatePassword'
			},
			username: {
				fn : 'validateUsername'
			}
		},
		validatePassword : function(value, attr, data){
			
			/*
			 * length = 8-16 characters
			 * At least one upper case character
			 * At least one lower case character
			 * At least 1 numeric character
			 */
			
			var regExPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
			
			return regExPattern.test(value);
		},
		
		validateUsername : function(){
			
		},
		initialize : function(args){
			this.args = _.extend(args);
		}
		
	});

	function instance (args)
	{
		
		var self,
			Controller = function(args){
			
			self = _.extend(this, args);
			
			this.fetchUserInstance = function(){return new UserModel({method: 'requestUserInfo'}).fetch()
			}
			
			this.UserInstance = function(args){return new UserModel(args) }
			
			this.init = function()
			{
				$.when(self.fetchUserInstance()).then(function(data, status, xhr){
					self.publish({UserModel : data});
				})
			}
			
			this.setModel = function()
			{
				var uPromise, UserModel = self.UserInstance({method: 'login'});
				
				if(!UserModel.get("UID")){
					uPromise = $.Deferred();
					uPromise.resolve(UserModel);
				}
				
				uPromise.done(function(model, data, options){
					self.publish({UserObject : model});
				});
					
			}
			
		};
		
		return new Controller(args);
		
	}
	
	return {
		instance: instance
	}

});