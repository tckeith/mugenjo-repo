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
				
				model['type'] = "m";
				model['publish'] = eventHub.postEvent;

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
	    		
	    		eventHub.subscribeEvents.apply(eventHub, arguments);
	    		
	    		mod['status'] = 'initialized';
	    	    		
		    	return mod;
			};
			
			this.addViewModel = function( viewmodel ){
				var idx, maxIdx, vm,
	    		results = [];
				
				viewmodel['type'] = "vm";
				viewmodel['publish'] = eventHub.postEvent;

		    	if( arguments.length === 1 && _.isArray( viewmodel ) ) {
		    		return this.addViewModel.apply( this, viewmodel );
		    	}

		    	for( idx = 0, maxIdx = arguments.length; idx < maxIdx; idx++ ) {
		    		vm = arguments[idx];
		    		if( vm.name) {
		    			viewmodels[vm.name] = vm;
		    		}

		    		results.push(vm);
		    	};
		    	
		    	eventHub.subscribeEvents.apply(eventHub, arguments);
		    	
		    	vm['status'] = 'initialized';

		    	return arguments.length === 1 ? results[0] : results;
			};
			
			this.addView =function( view ){
				var idx, maxIdx, vw,
	    		results = [];
				
				//view['publish'] = eventHub.postEvent;
				view['type'] = "v";

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
		    	
		    	vw['status'] = 'initialized';

				eventHub.subscribeEvents.apply(eventHub, arguments);
				
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
			
			this.getAllObjects = function(){
				return _.union(models, views, viewmodels);
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
	    
	    /*
	     * Handle events
	     */
	    EventHub  = function()
	    {
	    	/*
	    	 * Listener based on instance name
	    	 */
	    	this.subscribeEvents = function()
	    	{
	    		var instance = arguments[0];
	    		_.each(instance.subscriptions, function(sub){
	    			$(document).on(sub, instance, instance.onContextEvent);	
	    		});
	    		
	    	};
	    	
	    	/*
	    	 * Post events on instance name
	    	 */
	    	this.postEvent = function()
	    	{
				$(document).trigger(this.name, [arguments[0]]);
	    	};
	    	
	    };
	    
	    _.extend(Raijin, {
	    	create: function( config ) {
	    		return new Raijin( _.extend( {}, config) );
	    	}
	    });
	    
	    return Raijin.create( { exportName:'raijin' } );
});