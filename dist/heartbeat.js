/*! Heartbeat - v0.1.0 - 2012-05-24
* https://github.com/jnelson/heartbeat
* Copyright (c) 2012 johnymonster; Licensed MIT, GPL */

var HeartBeat = {};

(function($, window) {

    HeartBeat = function(options) {
        var self = this;
        this.options = $.extend(true,{},this._options,options);
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
            ga : {
                event : function() {
                    _gaq = _gaq || [];
                    return _gaq.push;
                }
            }
        },
        init : function() {
            if(typeof this.types[this.options.type] !== 'undefined') {
                this.options.event = this.types[this.options.type].event();
            }
        },
        start : function() {
            var self = this;
            if(this.event() !== false) {
                this.int = window.setInterval(function(){
                    self.event.apply(self,null);
                },this.options.interval);
            }
        },
        stop : function() {
            if(this.int) {
                window.clearInterval(this.int);
                delete this.int;
            }
        },
        event : function() {
            if(this._isFunction(this.options.event)) {
                this.options.event.apply(this,[this.options.eventArgs]);
            } else {
                this.stop();
                return false;
            }
        },
        _isFunction : function(obj) {
            var func = {};
            return (func.toString.call(obj) === '[object Function]');
        }
    };
}(jQuery, window));