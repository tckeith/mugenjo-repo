define(['jquery', 'raijin'], function($, raijin)
{

	function instance (args)
	{
		var self = _.extend(this, args, {
			
			fetch : function()
			{
				
				raijin.getModel(self.domain).init();
				
			},
			
			onContextEvent: function(event, data)
			{
				event.data.publish(data);
			}
		});
		
	}
	
	return {
		instance: instance
	}

});