const time = document.querySelector("h1");
time.classList.add("time");

document.querySelector("a").style.backgroundColor = "#bf0000";

time.innerText = "00:00:00";

let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

setInterval(function () {
  timerSeconds = parseInt(timerSeconds, 10);
  timerMinutes = parseInt(timerMinutes, 10);
  timerHours = parseInt(timerHours, 10);
  timerSeconds += 1;
  secondsCounter += 1;

  if (secondsCounter > 59) {
    timerMinutes += 1;
    minutesCounter += 1;
    timerSeconds = 0;
    secondsCounter = 0;
  }

  if (minutesCounter > 59) {
    timerHours += 1;
    hoursCounter += 1;
    minutesCounter = 0;
  }

  if (hoursCounter > 23) {
    timerHours = 0;
  }

  //TIMER VISUALS IF STATEMENT

  if (timerHours < 10) {
    timerHours = `0${timerHours}`;
    timerHours = timerHours.slice(-2);
  }
  if (timerMinutes < 10) {
    timerMinutes = `0${timerMinutes}`;
    timerMinutes = timerMinutes.slice(-2);
  }
  if (timerSeconds < 10) {
    timerSeconds = `0${timerSeconds}`;
    timerSeconds = timerSeconds.slice(-2);
  }

  time.innerText = `${timerHours}:${timerMinutes}:${timerSeconds}`;
}, 1000);
