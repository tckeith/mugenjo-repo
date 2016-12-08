define(function(require) {
    require('raijin');
    
    var template = require('text!../templates/master/UserInfoView.html');
    
    function instance(args) {

        var self,
            View = Backbone.View.extend({
            template : _.template(template),
            initialize : function(args) {
            	self = _.extend(this,args);
            	
            	raijin.addView(self);
            	
            	self.controller.fetch();

            },
            
            onContextEvent: function(event, data){
            	self.data = data;
            	self.render();
            },
            
            render : function() {
                self.$el.html(self.template(self.data));
               
                return self;
            },
            
            events : {
            }

        });

        return new View(args);

    }

    return {
        instance : instance
    };

}); 