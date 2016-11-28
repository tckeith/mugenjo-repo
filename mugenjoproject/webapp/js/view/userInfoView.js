define(function(require) {
    require('raijin');
    var template = require('text!../templates/test.html');
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
            	self.render();
            },
            
            render : function() {
                self.$el.html(self.template());
                self.left.html(self.template())
                self.right.html(self.template())
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