/*! Heartbeat - v0.1.0 - 2012-05-24
* https://github.com/jnelson/heartbeat
* Copyright (c) 2012 johnymonster; Licensed MIT, GPL */

var HeartBeat = {};

(function($, window) {
    /**
     * Holds reference to interval
     */
    var int = false,
        beats = 0,
        func = {},
        self = {};

    HeartBeat = function(options) {
        self = this;
        this.options = $.extend(true,{},this._options,options);

        if(this.options.type === 'ga') {
            window._gaq = window._gaq || [];
        }

        this._init();

        if(this.options.autostart === true) {
            this.start();
        }
    };

    HeartBeat.prototype = {
        _options : {
            autostart : false,
            interval : 10000,
            type : 'ga'
        },
        types : {
            ga : function(arr) {
                window._gaq.push(arr);
            }
        },
        _init : function() {
            if(this._isFunction(this.types[this.options.type]) && typeof this.options.event === 'undefined') {
                this.options.event = this.types[this.options.type];
            }
        },
        _event : function() {
            if(this._isFunction(this.options.event)) {
                this.options.event.apply(this,[this.options.eventArgs]);
                beats++;
            } else {
                this.stop();
                return false;
            }
        },
        _isFunction : function(obj) {
            return (func.toString.call(obj) === '[object Function]');
        },
        start : function() {
            // Fire the event now the setup the interval for later
            if(this._event() !== false) {
                // Setup the interval only if the callback function is valid
                int = window.setInterval(function(){
                    self._event.apply(self,null);
                },this.options.interval);
            }
        },
        stop : function() {
            if(int) {
                window.clearInterval(int);
                int = false;
            }
        },
        running : function() {
            return int !== false;
        },
        beats : function() {
            return beats;
        }
    };
}(jQuery, window));