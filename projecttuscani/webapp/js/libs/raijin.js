/**
 * Raijin Framework.
 *
 * @project Raijin
 *
 * @namespace raijin
 *
 * @version 1.0.0.0
 */
define('raijin',['require', 'underscore', 'jquery'], function(require){
	
	function Raijin(){
		
		var _this = this;
		var _ = require('underscore');
		var $ = require('jquery');
		
		this.models = {};
    	this.views = {};
		
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
    				_this.models[mod.name] = mod;
    			}
    			
    			results.push(mod);
    		}
    		
	    	return arguments.length === 1 ? results[0] : results;;
		};
		
		 /**
         * Added one or more object to raijin as view instance. 
         *
         * @method forec.prototype.addView
         * @param {Object} view... one or more views
         * @return {Array} views
         */
        this.addView = function( view ) {
        	var idx, maxIdx, vw,
    		results = [];

	    	if( arguments.length === 1 && _.isArray( view ) ) {
	    		return _this.addView.apply( this, view );
	    	}

	    	for( idx = 0, maxIdx = arguments.length; idx < maxIdx; idx++ ) {
	    		vw = arguments[idx];
	    		if( vw.name) {
	    			_this.views[vw.name] = vw;
	    		}

	    		results.push(vw);
	    	};

			//this.subscribeEvents.apply( this, slice.call(arguments) ); // subscribe events
	    	return arguments.length === 1 ? results[0] : results;
        };
        /**
         * Get the named view added by addView.
         *
         * @method getView
         * @scope instance
         * @memberof forec
         * @param {String} name of the view.
         * @return {Object} the view object or undefined
         */
        this.getView = function( name ) {
        	return _this.views[name];
        };
        
        this.getModel = function(name) {
        	return _this.models[name];
        };
		
	}
	
	return {
		'Raijin': Raijin
	}
	
});