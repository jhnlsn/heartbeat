# Heartbeat

A generic heartbeat plugin for firing events on a set interval.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/johnymonster/heartbeat/master/dist/heartbeat.min.js
[max]: https://raw.github.com/johnymonster/heartbeat/master/dist/heartbeat.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/heartbeat.min.js"></script>
<script>
var hb = new HeartBeat({
    interval : 1000, // milliseconds between heartbeat events
    autostart : false, // autostart true | false (default)
    event : function(arr) {
        window._gaq.push(arr); // custom beat function
    }
});
</script>
```

## Documentation
_(Coming soon)_

## Examples

### Delayed start

var hb = new HeartBeat({
    autostart: false
});

...

hb.start();

...

hb.stop();

###


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 johnymonster  
Licensed under the MIT, GPL licenses.
