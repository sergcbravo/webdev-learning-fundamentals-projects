let timerInterval = null;
let isRunning = false;
let timeElapsed = 0;

function startTimer() {
  if(!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      timeElapsed += 1000;
      updateDisplay();
    }, 1000);
  }
}

function updateDisplay () {
  const minutes = Math.floor(timeElapsed / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  const display = document.querySelector('.js-watch-display');
  display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
// Selecting the buttons from the DOM
const startStopButton = document.querySelector('.js-start');
const resetButton = document.querySelector('.js-reset');

// Event listener for the Start/Stop button
startStopButton.addEventListener('click', function() {
  if (!isRunning) {
    startTimer();
    this.textContent = 'Stop'; // Change the button text to 'Stop'
  } else {
    stopTimer();
    this.textContent = 'Start'; // Change the button text to 'Start'
  }
});

// Event listener for the Reset button
resetButton.addEventListener('click', function() {
  resetTimer();
});

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  stopTimer(); // stop the timer
  timeElapsed = 0; // Reset the elapsed time
  updateDisplay(); // Update the display to show 00:00
  startStopButton.textContent = 'Start'; // Update the button to 'Start'
}