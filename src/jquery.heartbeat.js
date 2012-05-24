/*
 * jquery.heartbeat
 * https://github.com/jnelson/heartbeat
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
