const time = document.querySelector("h1");
time.classList.add("time");

const currentTimeIntervalID = setInterval(function () {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
