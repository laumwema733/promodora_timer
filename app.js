let time = 25 * 60; //seconds
let breakTime = 5 * 60; //seconds
let leftTime = time;
let count = 0;
let isOn = false;
let intervalId;
let isWorkTime = false;

const timeLabel = document.querySelector(".time");

function updateTimerDisplay() {
  const min = String(Math.trunc(leftTime / 60)).padStart(2, 0);
  const sec = String(leftTime % 60).padStart(2, 0);
  timeLabel.textContent = `${min}:${sec}`;
}
function updateCycle() {
  document.querySelector(".cycle").textContent = count++;
}
function toggleTimer() {
  isWorkTime = !isWorkTime;
  leftTime = isWorkTime ? time : breakTime;

  if (isWorkTime) {
    updateCycle();
  }

  document.querySelector(".info").textContent = isWorkTime
    ? "Focus Time"
    : "Break Time";
}

function start() {
  intervalId ??= setInterval(() => {
    if (leftTime > 0) {
      leftTime--;
      updateTimerDisplay();
    } else {
      toggleTimer();
      stop();
      updateTimerDisplay();
      start();
    }
  }, 1000);
}
function stop() {
  clearInterval(intervalId);
  intervalId = null;
}
function reset() {
  stop();
  leftTime = time;
  count = 0;
  updateTimerDisplay();
}

document.querySelectorAll("button").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.id === "start") {
      start();
    }
    if (e.target.id === "pause") {
      stop();
    }
    if (e.target.id === "reset") {
      reset();
    }
  }),
);

updateTimerDisplay();
updateCycle();
