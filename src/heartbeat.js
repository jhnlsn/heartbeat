/*
 * heartbeat
 * https://github.com/jnelson/heartbeat
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT, GPL licenses.
 */

var HeartBeat = {};

(function($, window) {

    HeartBeat = function(options) {
        var self = this;
        this.options = $.extend(true,{},this._options,options);

        if(this.options.type === 'ga') {
            window._gaq = window._gaq || [];
        }
        this.init();
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
        init : function() {
            if(this._isFunction(this.types[this.options.type]) && typeof this.options.event === 'undefined') {
                this.options.event = this.types[this.options.type];
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