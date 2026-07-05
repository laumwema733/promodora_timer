let time = 1500;
let intervalId;

const timeLabel = document.querySelector(".time");

function createTimer() {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  timeLabel.textContent = `${min}:${sec}`;
}

function start() {
  intervalId ??= setInterval(() => {
    createTimer();
    if (time > 0) {
      time--;
    } else {
      reset();
      stop();
    }
  }, 1000);
}
function stop() {
  clearInterval(intervalId);
  intervalId = null;
}
function reset() {
  time = 1500;
  createTimer();
}

document.querySelector(".btn-start").addEventListener("click", start);
document.querySelector(".btn-pause").addEventListener("click", stop);
document.querySelector(".btn-reset").addEventListener("click", reset);
