import timeConversion from './timeConversion'

class Timer {
  constructor() {
    // users input
    this.time = null;
    // internal time used to count down
    this._time = null;

    // states of timer
    this.hasStarted = false;
    this.isFinished = false;
    this.isPaused = true;
  }

  get curTime() {
    return this._time;
  }

  set curTime(time) {
    if (typeof time !== 'number' || !Number.isFinite(time) || time - 0 === 0) {
      return false;
    }
    this._time = this.time = time;
  }

  tick() {
    this._time -= 1;
    // every second we want it to count down
    this.intervalID = setInterval(() => {

      if (this._time === 0) {
        clearInterval(this.intervalID)
      }

      this._time -= 1;

    }, 1000);
  }

  start() {
    this.hasStarted = true;
    this.tick();
  }

  pause() {
    // should pause the timer but not clear the time
    this.hasStarted = false;
    this.isPaused = true;

    clearInterval(this.intervalID)
  }

  restart() {
    // should start the timer from input given
    this._time = this.time;
  }
}

export default Timer;