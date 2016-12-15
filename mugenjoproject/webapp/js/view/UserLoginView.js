define(function(require) {
    require('raijin');
    
    var template = require('text!../templates/UserLoginView.html');
    
    function instance(args) {

        var self,
            View = Backbone.View.extend({
            template : _.template(template),
            initialize : function(args) {
            	self = _.extend(this,args);
            	
            	raijin.addView(self);
            	
            	jin.utility.emptyPanels()
            	
            	self.render();
            	
            },
            
            onContextEvent: function(event, data){
            	
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
            		debugger;
            }
            
            
        });

        return new View(args);

    }

    return {
        instance : instance
    };

}); 