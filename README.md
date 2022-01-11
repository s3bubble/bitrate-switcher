# videojs-s3bubble-bitrate-switcher

Switching bitrates for S3Bubble player

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-s3bubble-bitrate-switcher
```

## Usage

To include videojs-s3bubble-bitrate-switcher on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-s3bubble-bitrate-switcher.min.js"></script>
<script>
  var player = videojs('my-video');

  player.s3BubbleBitrateSwitcher();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-s3bubble-bitrate-switcher via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-s3bubble-bitrate-switcher');

var player = videojs('my-video');

player.s3BubbleBitrateSwitcher();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-s3bubble-bitrate-switcher'], function(videojs) {
  var player = videojs('my-video');

  player.s3BubbleBitrateSwitcher();
});
```

## License

MIT. Copyright (c) S3bubble &lt;support@s3bubble.com&gt;


[videojs]: http://videojs.com/
