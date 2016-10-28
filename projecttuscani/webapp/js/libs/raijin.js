/**
 * Raijin Framework.
 *
 * @project Raijin
 *
 * @namespace raijin
 *
 * @version 1.0.0.0
 */
define('raijin',['require','underscore','jquery'], function( require ) {
	 var _ = require('underscore'),
     $ = require('jquery');
	 
	 var Raijin, eventHub;
	 
	 	/*Base Model*/
	    Raijin = function(config) {
	    	
	    	var models = [], views = [], viewmodels = [];
	    	var exportName, previousObject;
	    	eventHub = new EventHub();
	    	
	    	this.id = (Math.random());
	    	
	    	this.addModel = function( model ){
				var mod, 
				idx, maxIdx;
				
				var results = [];
				
				model['publish'] = function(){
					
					var args = arguments;
					
					return 'This is a test';
				};

		    	if( arguments.length === 1 && _.isArray(model) ) {
		    		return this.addModel.apply(this, model);
		    	} 
		    	
	    		for( idx = 0, maxIdx = arguments.length; idx < maxIdx; idx++ ) {
	    			mod = arguments[idx];
	    			if(mod.name){
	    				models[mod.name] = mod;
	    			}
	    			
	    			results.push(mod);
	    		}
	    		
		    	return mod;
			};
			
			this.addView =function( view ){
				var idx, maxIdx, vw,
	    		results = [];

		    	if( arguments.length === 1 && _.isArray( view ) ) {
		    		return this.addView.apply( this, view );
		    	}

		    	for( idx = 0, maxIdx = arguments.length; idx < maxIdx; idx++ ) {
		    		vw = arguments[idx];
		    		if( vw.name) {
		    			views[vw.name] = vw;
		    		}

		    		results.push(vw);
		    	};

				//this.subscribeEvents.apply( this, slice.call(arguments) ); // subscribe events
		    	return arguments.length === 1 ? results[0] : results;
			};
			
			this.addViewModel = function( viewmodel ){
				var idx, maxIdx, vm,
	    		results = [];

		    	if( arguments.length === 1 && _.isArray( viewmodel ) ) {
		    		return this.addViewModel.apply( this, viewmodel );
		    	}

		    	for( idx = 0, maxIdx = arguments.length; idx < maxIdx; idx++ ) {
		    		vm = arguments[idx];
		    		if( vm.name) {
		    			viewmodels[vm.name] = vm;
		    		}

		    		results.push(vw);
		    	};

				//this.subscribeEvents.apply( this, slice.call(arguments) ); // subscribe events
		    	return arguments.length === 1 ? results[0] : results;
			};
			
			this.getModel = function( name ){
				return models[name];
			};
			
			this.getView = function( name ){
				return views[name];
			};
			
			this.getViewModel = function ( name ){
				return viewmodels[name];
			};
			
			this.publish = function(){
				return eventHub.subscribeEvents.apply(eventHub, arguments);
			};
			
			if( config ) {
	            for( key in config ) {
	                value = config[key];
	                switch( key ) {
	                case 'exportName':
	                	exportName = value;
	                	previousObject = window[exportName];
	                	window[exportName] = this;
	                	break;

	                default:
	                    this[key] = value;
	                	break;
	                };
	            };
	        }
	    
	    };
	    
	    //Event Subscriptions
	    EventHub  = function()
	    {
	    	
	    	this.subscribeEvents = function()
	    	{
	    		_.each(arguments, function(args, idx){
	    			var subs = args.subscriptions;
	    			if(subs){
	    				postEvent(this, subs, args);
	    			}
	    				
	    		});
	    		
	    	};
	    	
	    	this.postEvent = function(event, subscriptions, subscriber)
	    	{
	    		_.each(subscriptions, function(subscrp, idx){
	    			
	    			if(typeof subscrp === 'string'){
	    				for( event in subscrp ){
	    					if(_.has(subscrp, event)){
	    						
	    						if(typeof subscrp.onContextEvent === 'function')
	    							subscrp.call
	    					}
	    				}
	    			}
	    			
	    		});
	    	};
	    	
	    };
	    
	    _.extend(Raijin, {
	    	create: function( config ) {
	    		return new Raijin( _.extend( {}, config) );
	    	}
	    });
	    
	    return Raijin.create( { exportName:'raijin' } );
});