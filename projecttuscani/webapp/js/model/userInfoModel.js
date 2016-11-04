define(['jquery', 'raijin'], function($, raijin)
{

	function instance (args)
	{
		var self = _.extend(this, args, {
			
			init : function()
			{
				self.publish({TestData : 'This is a test'});
			},
			
		});
		
	}
	
	return {
		instance: instance
	}

});