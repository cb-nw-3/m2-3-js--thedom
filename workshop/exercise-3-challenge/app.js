let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

setInterval(function() {
  let date = new Date();
  hour.innerText =  date.getHours();
  minute.innerText =  date.getMinutes();
  second.innerText =  date.getSeconds();
  if (hour.innerText.length === 1) {
    hour.innerText = '0' + date.getHours();
  }
  if (minute.innerText.length === 1) {
    minute.innerText = '0' + date.getMinutes();
  }
  if (second.innerText.length === 1) {
    second.innerText = '0' + date.getSeconds();
  }
}, 1000);