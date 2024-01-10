let timerInterval = null;
let isRunning = false;
let timeElapsed = 0;
let recordedTimes = []; // This array will store all recorded times

// Utility function for formatting time
function formatTime(miliseconds) {
  const minutes = Math.floor(miliseconds / 60000);
  const seconds = Math.floor((miliseconds % 60000) / 1000);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

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
  if (isRunning) {
  clearInterval(timerInterval);
  isRunning = false;
  recordTime(); // Record the time when the timer is stopped.
  }
}

function resetTimer() {
  stopTimer(); // stop the timer
  timeElapsed = 0; // Reset the elapsed time
  updateDisplay(); // Update the display to show 00:00
  startStopButton.textContent = 'Start'; // Update the button to 'Start'
}



function recordTime() {
  console.log("recordTime called");
  if (isRunning) {
  stopTimer(); //First stop the timer
// Then, record the current timeElapsed
recordedTimes.push(timeElapsed);
console.log("Times recorded:", recordedTimes);

// Sort the times in ascending order (fastest to slowest)
recordedTimes.sort((a, b) => a - b);

// If there are more than 5 times recorded, keep only the top 5
if (recordedTimes.length > 5) {
  recordedTimes = recordedTimes.slice(0, 5);
}

// Now you can update the display of top times
updateTopDisplay();
  }
}

function updateTopDisplay() {
  console.log("updateTopDisplay called");
  // Select or create the DOM element that will display the top times
  // iterate over recordedTimes and update the element acordingly
  let topTimesList = document.querySelector('.js-top-times ol');

  // Clear the existing list items
  topTimesList.innerHTML = '';
  // Iterate over recordedTimes and create list items for each time.
  for (let i = 0; i < recordedTimes.length; i++) {
    const time = recordedTimes[i];
    const li = document.createElement('li');
    li.textContent = formatTime(time); // Use formatTime function to format the time nicely
    topTimesList.appendChild(li);
  }
    }