const Time = require( '../build/index.js' );

const time = new Time();

test( 'creates new time object with correct initial values', () => {
  expect( typeof time ).toBe( 'object' );
  expect( time.running ).toBe( false );
  expect( time.paused ).toBe( false );
  expect( time.timeScale ).toBe( 1.0 );
} );

test( 'start the clock', () => {
  time.start();
  expect( time.running ).toBe( true );
  expect( time.paused ).toBe( false );
} );

test( 'time scaling', () => {
  time.timeScale = 2;
  //expect( time.delta * time.timeScale ).toBe( time.unscaledDelta );
} );
