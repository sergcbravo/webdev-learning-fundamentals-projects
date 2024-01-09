const timer = document.querySelector('.js-countdown');

      let countdownFrom = 10;

      function decreaseCountdown() {
    if (countdownFrom === 0) {
        countdownFrom = 10;
        timer.textContent = countdownFrom;
    } else {
        countdownFrom--;
        timer.textContent = countdownFrom;

        if (countdownFrom === 5) {
            clearInterval(intervalID); // Stop at 5

            setTimeout(() => {
                countdownFrom--; // Decrement 5 to 4
                timer.textContent = countdownFrom;
                intervalID = setInterval(decreaseCountdown, 1000); // Restart the countdown
            }, 2000); // 2 second pause
        }
    }
}

let intervalID = setInterval(decreaseCountdown, 1000);
