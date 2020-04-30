const stopwatchDiv = document.querySelector('#stopwatch');



function SecondsToTime(sec) {
  let minutes = "00";
  let seconds = "00";
  let milisec = "00";
  milisec = sec.toString();
  milisec = milisec[milisec.length - 3] + "0";
  seconds = Math.round(sec / 1000);
  if (seconds >= 60) {
    seconds = Math.round((seconds / 60) % 1 * 60);
  }
  seconds = seconds.toString();
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }

  minutes = Math.floor(((sec / 1000) / 60) + 1 / 120)
  minutes = minutes.toString();
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  return `${minutes}: ${seconds}: ${milisec} `
}

stopwatchDiv.innerHTML = SecondsToTime(localStorage.getItem("time"));