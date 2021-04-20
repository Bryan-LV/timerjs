import Timer from './timer'
import addClass from './helpers/addClass'

class CreateTimer {
  constructor(timer) {
    this.timer = timer;
  }

  createSkeleton() {
    const div = document.createElement('div');
    div.addClass('timer-container');

    const title = document.createElement('h2');
    title.addClass('title');

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('name', 'time input');
    input.id = 'timeInput';


    const btnContainer = document.createElement('div');
    btnContainer.addClass('btn.container');


    const startBtn = document.createElement('button');
    startBtn.id = 'start'
    startBtn.addClass('btn');

    const pauseBtn = document.createElement('button');
    startBtn.id = 'pause';
    pauseBtn.addClass('btn');

    // div > title
    div.prepend(title);
    // div > title ~ input
    div.appendChild(input);
    // div > title ~ input ~ btnContainer
    div.appendChild(btnContainer);

    btnContainer.appendChild(startBtn)
    btnContainer.appendChild(pauseBtn)

  }
}

function createTimer() {
  return new Timer();
}

(function () {
  let startBtn = document.querySelector('#start');
  let pauseBtn = document.querySelector('#pause');
  let userInput = document.querySelector('#timeInput');
  let timerContainer = document.querySelector('.timer-container');
  let timer;

  timerContainer.addEventListener('click', (e) => {
    if (e.target.id === 'start') {
      timer = createTimer();
      timer.curTime = +userInput.value;
      timer.start();
    }
    if (e.target.id === 'pause') {
      timer.pause();
    }
  })

}())