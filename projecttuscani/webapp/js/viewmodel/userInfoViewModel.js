define(['jquery'], function($)
{

	function UserInfoViewModel(args)
    {
		 this.name = args['name']; 
         this.domains = args['domains'];
         this.subscriptions = args['subscriptions'];
         
         this.init = function(){
        	 
        	 $.each(this.domains, function(index, value){
        		
        		 
        		 
        	 });
         };
    }
	
	return {
		'UserInfoViewModel' : UserInfoViewModel
	}

});