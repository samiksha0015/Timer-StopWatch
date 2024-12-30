
let timerInterval;
let timerTime = 0;
const timerDisplay = document.getElementById('timer-display');
const timerInput = document.getElementById('timer-input');

document.getElementById('start-timer').addEventListener('click', () => {
    if (!timerInterval && timerInput.value > 0) {
        timerTime = parseInt(timerInput.value) * 60;
        timerInterval = setInterval(() => {
            if (timerTime > 0) {
                timerTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                alert('Timer is complete!');
            }
        }, 1000);
    }
});

document.getElementById('pause-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerTime = 0;
    timerInput.value = '';
    updateTimerDisplay();
});

function updateTimerDisplay() {
    const minutes = Math.floor(timerTime / 60).toString().padStart(2, '0');
    const seconds = (timerTime % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Stopwatch Logic
let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchDisplay = document.getElementById('stopwatch-display');
const lapsContainer = document.getElementById('laps');

document.getElementById('start-stopwatch').addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
});

document.getElementById('pause-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    lapsContainer.innerHTML = '';
    updateStopwatchDisplay();
});

document.getElementById('start-stopwatch').addEventListener('dblclick', () => {
    const lapTime = stopwatchDisplay.textContent;
    const lapElement = document.createElement('li');
    lapElement.textContent = `Lap: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
});

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
