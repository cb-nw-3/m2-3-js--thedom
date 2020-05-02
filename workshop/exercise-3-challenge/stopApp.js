const STOPWATCHDIV = document.querySelector('#stopwatch');
const MARKDIV = document.querySelector('#mark');
const MARKDIV2 = document.querySelector('#mark2');

function SecondsToTime(sec) {
  let minutes = '00';
  let seconds = '00';
  let milisec = '00';
  milisec = sec.toString();
  milisec = milisec[milisec.length - 3] + '0';
  seconds = Math.round(sec / 1000);
  if (seconds >= 60) {
    seconds = Math.round(((seconds / 60) % 1) * 60);
  }
  seconds = seconds.toString();
  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }

  minutes = Math.floor(sec / 1000 / 60 + 1 / 120);
  minutes = minutes.toString();
  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  return `${minutes}: ${seconds}: ${milisec} `;
}
let arrivalMark = parseInt(localStorage.getItem('time'));
let stopWatch = arrivalMark;
MARKDIV.innerHTML = SecondsToTime(stopWatch);

// console.log('1', stopWatch);

setInterval(function () {
  localStorage.setItem('time', stopWatch);
  STOPWATCHDIV.innerHTML = SecondsToTime(stopWatch);
  MARKDIV2.innerHTML = SecondsToTime(stopWatch - arrivalMark);
  stopWatch += 100;
  // console.log('2.', stopWatch);
}, 100);
