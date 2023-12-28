const timer = document.querySelector('.js-countdown');

let countdownFrom = 10;

function decreaseCountdown() {
  if(countdownFrom === 0) {
    countdownFrom = 10;
    timer.textContent = countdownFrom;
    } else {
      countdownFrom--;
      timer.textContent = countdownFrom;
    }
  }

    const intervalID = setInterval(decreaseCountdown, 1000) 