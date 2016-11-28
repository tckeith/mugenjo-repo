jin.utils = {
		
		CommunicationManager: function(data, callback)
	    {
			$('.overlay').show();
	    	serviceObject = data;
	        var _cache = false;
	        var tab = Backbone.history.fragment;
	        var methodType = serviceObject.type;
	        var dataType = "json";
	        var contentType = "application/x-www-form-urlencoded";
	        contentType="application/json";
	        var callType = "auto";
	        var eventType = "serverRequest";
	        var requestParameter = serviceObject.requestParameter;
	        var url = serviceObject.url;
	        
	        if (url === null || url.length === 0) {
	            console.log("No url found in the serviceObject for the data "+data, 'ERROR');
	            return;
	        }
	        
	        try {
	        	jQuery.ajax({
	                    beforeSend: function(req) {
	                        req.setRequestHeader("Accept", contentType);
	                    },
	                    type: methodType,
	                    url: url,
	                    context: serviceObject,
	                    crossDomain: true,
	                    data: requestParameter,
	                    cache: _cache,
	                    contentType: contentType,
	                    success: function(response)
	                    {
	                    	var responseData = {
	                            data: response,
	                            status: null
	                        };
	        	        	if(callback){
	        	        	   callback(responseData);
	        	        	}
	        	        	if(response.statusCode)
	        	        	{
	        	        		var code = response.statusCode;
	        	        		var msg = response.message;
	        	        		if(code == 1002)
	        	        		{
	        	        			//utils.PopUpMessage(msg, 'red');
	        	        		}
	        	        	}
	                    },
	                    complete: function(xhr, status)
	                    {
	                    	$('.overlay').hide();
	                    	console.logs("onRetrieveDataFromServer : AJAX Request - Method : " + methodType + "::URL : " + url + ": Request Completed", 'INFO');
	                     },
	                    failure: function(response)
	                    {
	                    	var responseData = {
	                                data: null,
	                                status: response
		                        };
			            	if(callback){
			            	   callback(responseData);
			            	}
			            	console.log("onRetrieveDataFromServer : AJAX Request - Method : " + methodType + "::URL : " + url + ": Request failed", 'ERROR');
		                },
	                    error: function(xhr, status, e)
	                    {
	                    	if(status == "timeout"){
	                            var responseData = {
	                                    data: null,
	                                    status: status
	                            };
	                            if(callback){
	                        	callback(responseData);
	                            }
	                            console.logs("onRetrieveDataFromServer : AJAX Request - Method : " + methodType + "::URL : " + url + ": Request Time out",'ERROR');
	                        }
	                    }
	                });
	            }
	            catch (e) {
		        	var responseData = {
		                            data: null,
		                            status: e
		        	};
		        	if(callback){
		        	    callback(responseData);
		        	}
		        	console.logs("onRetrieveDataFromServer : AJAX Request - Method : " + methodType + "::URL : " + url + ": Request failed-" + e, 'ERROR');
	            }
	    },
	    
	    custom: function()
	    {
	    	
	    },
	    
	    documentReady: function(raijin, toastr)
	    {
	    	//apply custom jquery functions
	    	jin.utils.custom();
	    	
	    	//setup toastr option
	    	toastr.options = {
					  "closeButton": true,
					  "debug": false,
					  "newestOnTop": true,
					  "progressBar": true,
					  "positionClass": "toast-top-center",
					  "preventDuplicates": false,
					  "onclick": null,
					  "showDuration": "100",
					  "hideDuration": "1000",
					  "timeOut": "3000",
					  "extendedTimeOut": "1000",
					  "showEasing": "swing",
					  "hideEasing": "linear",
					  "showMethod": "fadeIn",
					  "hideMethod": "fadeOut"
			};
	    	
	    	var height = $('body').height() - $('#app-header').height() - $('footer').height() - 30
   		 
   		 	$('.content-container div').height(height);
	    	
	    	 $(window).on('resize', _.debounce(function() {
	    		 var height = $('body').height() - $('#app-header').height() - $('footer').height() - 30
	    		 
	    		 $('.content-container div').height(height);
	    	 },250));
	    	
	    }
	    
		
};