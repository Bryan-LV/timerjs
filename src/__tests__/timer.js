import Timer from '../timer'

const timer = new Timer(60);

// check timer is starting
test('timer is starting', () => {
  timer.start();
  expect(timer.hasStarted).toBe(true);
})



describe('tests pausing functionality', () => {
  // check timer is pausing
  test('timer has paused', () => {
    timer.pause();
    expect(timer.isPaused).toBe(true);
    expect(timer.hasStarted).toBe(false);
  })
  // check timer holds paused time
  test('check timer holds paused time', () => {
    const timer = new Timer(20);
    timer.start();
    setTimeout(() => {
      timer.pause();
      expect(timer.curTime).toBe()
    }, 2000);
  })
});
// check timer is restarting
// check timer restarts with correct time
// check timer input is property converted to time * 3 
