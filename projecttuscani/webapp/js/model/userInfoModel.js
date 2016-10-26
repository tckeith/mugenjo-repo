define(['jquery', 'raijin'], function($, raijin)
{

	function instance (args)
	{
		var self = _.extend(this, args, {
			init : function(){
				
				var event = _.extend(self, {TestData : 'This is a test'});
				
				
				raijin.publish(event);
			}
		});
		
	}
	
	return {
		instance: instance
	}

});