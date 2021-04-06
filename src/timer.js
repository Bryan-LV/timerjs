import timeConversion from './timeConversion'

class Timer {
  constructor(time) {
    // interval variable that keeps users time input
    this._time = null;
    this.currentTime = time;

    // states of timer
    this.hasStarted = false;
    this.isFinished = false;
    this.isPaused = true;
  }

  get time() {
    return this.currentTime;
  }

  set time(time) {
    // check if time input is valid
    let conversion = timeConversion(time);
    if (!conversion) throw new Error('Please enter a valid number');
    this._time = conversion;
  }


  tick() {
    this.currentTime -= 1;
    // every second we want it to count down
    this.intervalID = setInterval(() => {
      this.currentTime -= 1;
    }, 1000);

  }

  start() {
    // should start the timer immediately from current time 
    this.hasStarted = true;

    this.tick();

  }

  pause() {
    // should pause the timer but not clear the time
    if (this.hasStarted) this.hasStarted = false;
    this.isPaused = true;
  }

  restart() {
    // should start the timer from input given
  }
}

export default Timer;