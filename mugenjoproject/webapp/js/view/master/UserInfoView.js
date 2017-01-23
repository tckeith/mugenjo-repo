define(function(require) {
    require('raijin');
    
    var template = require('text!../templates/master/UserInfoView.html');
    
    function instance(args) {

        var self,
            View = Backbone.View.extend({
            template : _.template(template),
            initialize : function(args) {
            	self = _.extend(this,args);
            	
            	self.controller = raijin.getViewModel(self.controller);
            	
            	raijin.addView(self);
            	
            	self.controller.init();

            },
            
            events : {
            	
            },
            
            onContextEvent: function(event, data){
            	self.data = data;
            	self.render();
            },
            
            render : function() {
                self.$el.html(self.template(self.data));
               
                return self;
            },
            
            destory: function(){
            	self.remove();
            }

        });

        return new View(args);

    }

    return {
        instance : instance
    };

}); 