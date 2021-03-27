import Timer from '../timer'

const timer = new Timer(60);

// check timer is starting
test('timer is starting', () => {
  timer.start();
  expect(timer.hasStarted).toBe(true);
})

// check timer is pausing
test('timer has paused', () => {
  timer.pause();
  expect(timer.isPaused).toBe(true);
  expect(timer.hasStarted).toBe(false);
})

// check timer holds paused time
// check timer is restarting
// check timer restarts with correct time
// check timer input is property converted to time * 3 
