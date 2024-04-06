let minutes = +prompt("ILTIMOS MINUT KIRITING");
let seconds = 0;
let timer;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function updateTimer() {
  seconds--;
  if (seconds < 0) {
    if (minutes === 0) {
      clearInterval(timer);
      alert("TUGADI!")
      return;
    }
    minutes--;
    seconds = 59;
  }
  document.getElementById("timer").innerText = formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}