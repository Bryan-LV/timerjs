import Timer from './timer';

(function createTimer() {
  let timeInput = document.querySelector('#timeInput');
  let startBtn = document.querySelector('#start');
  let pauseBtn = document.querySelector('#pause');

  let timer = new Timer(+timeInput);
  console.log(timer)
})()