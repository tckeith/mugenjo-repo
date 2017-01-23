define(function(require) {
    require('raijin');
    
    var toastr = require('toastr');
    var template = require('text!../templates/UserLoginView.html');
    
    function instance(args) {

        var self,
            View = Backbone.View.extend({
            template : _.template(template),
            initialize : function(args) {
            	self = _.extend(this,args);
            	
            	self.controller = raijin.getViewModel(self.controller);
            	
            	raijin.addView(self);
            	
            	jin.utility.emptyPanels();
            	
            	self.controller.setModel();
            },
            
            onContextEvent: function(event, data){
            	
            	if('UserObject' in data){
            	
	            	self.model = data.UserObject;
	            	
	            	self.render();
            	}
            },
            
            render : function() {
                self.$el.html(self.template());
               
                return self;
            },
            
            events : {
            	"click .login" : "validateLogIn",
            	"keyup input[name='signon-email']" : "onEnter",
            	"keyup input[name='signon-pass']" : "onEnter"
            },
            
            onEnter : function(e){
            	if(e.keyCode == 13) self.validateLogIn();
            },
            
            validateLogIn : function(){
            	var email = $("input[name='signon-email']").val();
            	var password = CryptoJS.MD5($("input[name='signon-pass']").val()).toString();

            	self.model.set('email', email)
            	self.model.set('password', password);
            	
            	self.model.save()
            	.done(function(x, y, z){
            		debugger;
            	})
            	.fail(function(xhr){
            		if(xhr.status !== 200)
            			toastr["error"](xhr.responseJSON.message);
            	});
            	
            }
            
            
        });

        return new View(args);

    }

    return {
        instance : instance
    };

}); 