/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

    module('Heartbeat', {
        setup: function() {
            ok(true, 'working out some Qunit stuff');
        }
    });

    test('is chainable', 2, function() {
        // Not a bad test to run on collection methods.
        ok(true, 'First Test');
    });

    module('heartbeat');

    test('is object',1,function() {
        var hb = new HeartBeat({
            event : function(arg){
                console.log(arg);
            },
            eventArgs : 'testing',
            autostart : false
        });
        equal(typeof hb,'object','HeartBeat is an object');
    });

    module('gaq event');

    test('gaq is array',1,function() {
        var hb = new HeartBeat();
        ok(_.isFunction(hb.types.ga), 'ga is a function');
    });

    test('one _gaq element in array',2, function(){
        var hb = new HeartBeat({
            eventArgs : ['_trackEvent']
        });
        hb.start();
        hb.stop();
        ok(typeof hb.int === 'undefined', 'Heart Beat is not running');
        equal(_gaq.length,1,'There is only one item in _gaq');
    });
}(jQuery));
