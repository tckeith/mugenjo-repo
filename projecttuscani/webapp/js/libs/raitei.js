define('raitei',['require','underscore','jquery'], function( require ) {
	 var _ = require('underscore'),
     $ = require('jquery');
	 
	 var Raitei;
	 
	    Raitei = function(config) {
	    	
	    	var models = {};
	    	var views = [];
	    	var exportName, previousObject;
	    	
	    	this.id = (Math.random());
	    	var _this = this;
	    	
	    	this.addModel = function( model ){
				var mod, 
				idx, maxIdx;
				
				var results = [];

		    	if( arguments.length === 1 && _.isArray(model) ) {
		    		return _this.addModel.apply(this, model);
		    	} 
		    	
	    		for( idx = 0, maxIdx = arguments.length; idx < maxIdx; idx++ ) {
	    			mod = arguments[idx];
	    			if(mod.name){
	    				models[mod.name] = mod;
	    			}
	    			
	    			results.push(mod);
	    		}
	    		
		    	return arguments.length === 1 ? results[0] : results;;
			};
			
			this.addView =function( view ){
				var idx, maxIdx, vw,
	    		results = [];

		    	if( arguments.length === 1 && _.isArray( view ) ) {
		    		return _this.addView.apply( this, view );
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
			
			this.getModel = function( name ){
				return models[name];
			};
			
			this.getView = function( name ){
				return views[name];
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
	    
	    _.extend(Raitei, {
	    	create: function( config ) {
	    		return new Raitei( _.extend( {}, config) );
	    	}
	    });
	    
	    return Raitei.create( { exportName:'raitei' } );
});