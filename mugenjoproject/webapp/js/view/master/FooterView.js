define(function(require) {
    require('raijin');
    var template = require('text!../templates/master/FooterView.html');
    function instance(args) {

        var self,
            View = Backbone.View.extend({
            template : _.template(template),
            initialize : function(args) {
            	self = _.extend(this,args);
            	
            	raijin.addView(self);
            	
            	self.render();

            },
            
            onContextEvent: function(event, data){
            	
            },
            
            render : function() {
                self.$el.html(self.template());
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