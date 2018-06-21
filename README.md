# Three-time module by Discover three.js

Replacement for THREE.CLock with some extra features and cleaner syntax. The main extra feature is that you can set the Timescale, allowing for slow motion effects in your animations.

Note that there is nothing actually related to three.js in the code, so you can use this in any application that needs a simple timer function.

## Installation

  `npm install three-time`

## Usage

```js
import Time from 'three-time';

const time = new Time();

// start timer, or continue if paused
// unlike THREE.Clock, there is no autostart so you always need to call this
time.start();

// pause timer
time.pause();

// stop and reset timer, doesn't reset timescale
time.stop();

// set timescale, values above 1 speed up time, values below 1 slow down time
time.timeScale = 1;

// total running time of const totalScaledTimeSinceStart = time.totalTime();, taking into account timescale changes
const totalScaledTimeSinceStart = time.totalTime();

// total real world time since timer was started
const totalRealTimeSinceStart = time.totalTime();

// current value of Performance.now with fallback to Date.now
const now = time.now;


// A typical three.js animation loop:
function animate() {

requestAnimationFrame( animate );

  // time since last time delta was called, taking into account time scale
  const delta = time.delta;

  // OR

  // real world time since last time delta was called, ignoring time scale
  const unscaledDelta = time.unscaledDelta;

  // NB delta and scaledDelta are not independent, don't call both in the same frame

  animation.update( delta );

}
```

All code is MIT licensed and free to use, modify, or distribute in any way that you wish. Have fun!