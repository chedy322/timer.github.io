var start = document.querySelector('.start');
var reset = document.querySelector('.reset');
var second = 0;
var min = 0;
var hour = 0;
var timerInterval = null;
var timerStatus = "stopped";

function updateTimerDisplay() {
    var leadingHours = hour < 10 ? '0' + hour : hour;
    var leadingMinutes = min < 10 ? '0' + min : min;
    var leadingSeconds = second < 10 ? '0' + second : second;
    document.querySelector('.timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

function startTimer() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(function () {
            second++;
            if (second === 60) {
                second = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hour++;
                }
            }
            updateTimerDisplay();
        }, 1000);
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        timerStatus = "stopped";
    }
}

function resetTimer() {
    window.clearInterval(timerInterval);
    second = 0;
    min = 0;
    hour = 0;
    updateTimerDisplay();
}

start.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);