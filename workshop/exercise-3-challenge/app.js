let totalSeconds = 0;
let totalMinutes;
let totalHours;

function setDate() {
  const secondHand = document.querySelector('.seconds-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const now = new Date();
  const seconds = now.getSeconds();
  totalSeconds === 0 ? (totalSeconds = seconds) : (totalSeconds += 1);
  // console.log(`total ${totalSeconds} sec ${seconds}`);
  const secondsInDegrees = (360 / 60) * totalSeconds + 90;
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  const minutes = now.getMinutes();
  isNaN(totalMinutes)
    ? (totalMinutes = minutes)
    : seconds === 0
    ? (totalMinutes += 1)
    : '';

  const minutesInDegrees = (360 / 60) * (totalMinutes + seconds / 60) + 90;
  // console.log(`minutes ${minutesInDegrees}`);
  minsHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  const hours = now.getHours();
  // console.log(hours);
  const hoursInDegrees = (360 / 12) * (hours + minutes / 60) + 90;
  // console.log(hoursInDegrees);
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

  let literalHours = hours;
  let literalMinutes = minutes;
  let literalSeconds = seconds;
  hours < 10 ? (literalHours = '0' + hours) : '';
  minutes < 10 ? (literalMinutes = '0' + minutes) : '';
  seconds < 10 ? (literalSeconds = '0' + seconds) : '';

  document.getElementById(
    'timeScreen'
  ).innerHTML = `${literalHours}:${literalMinutes}:${literalSeconds}`;
}

setInterval(setDate, 1000);

let stopWatch = 0;
setInterval(function () {
  localStorage.setItem('time', stopWatch);
  stopWatch += 100;
}, 100);

const BUTTON = document.querySelector('button');
console.log(BUTTON);
BUTTON.addEventListener('click', onClick);

function onClick() {
  // console.log("click done")
  openInNewTab('stopwatch.html');
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
