// select the spans to update stopwatch
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
// initialize the counters
let counter = 0;
let minuteCounter = 0;
let hourCounter = 0;

setInterval(function() {
  // increment the seconds counter every second
  counter++;
  // change second innerText each second using modulo so it never goes above 59
  second.innerText = counter % 60;
  // add a zero before every single digit
  if (second.innerText.length === 1) {
  second.innerText = '0' + counter % 60;
  }
  // increment minute counter every 60 seconds
  if (counter % 60 === 0) {
    // increment minute counter
    minuteCounter++;
    // update innerText
    minute.innerText = minuteCounter;
    // add zero before single digit
    if (minute.innerText.length === 1) {
      minute.innerText = '0' + minuteCounter;
    }
  }
  // increment hour every 60 minute
  if (minutecounter % 60 === 0) {
    // increment hour counter
    hourCounter++;
    // update innerText
    hour.innerText = hourCounter;
    // add zero before single digit
    if (hour.innerText.length === 1) {
      hour.innerText = '0' + hourCounter;
    }
  }
}, 1000);