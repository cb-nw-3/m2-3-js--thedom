import { frogStable } from './frogStable.js';
// console.log(`hello I'm the mixer`);

function pickARamdonFrog() {
  let index = [];
  let ramdonIndex = 0;
  while (index.length < FROGS) {
    ramdonIndex = Math.floor(Math.random() * 4);
    if (!index.includes(ramdonIndex)) {
      index.push(ramdonIndex);
    }
  }
  let racers = index.map((element) => frogStable[element]);
  return racers;
}

let RACERS = pickARamdonFrog();

const FROGSONSCREEN = document.querySelectorAll('img');
for (let i = 0; i < FROGSONSCREEN.length; i++) {
  FROGSONSCREEN[i].style.background = RACERS[i].color;
  RACERS[i].progress = 0;
}
console.log(RACERS);

function racingFrog(frog) {
  let ramdonSpeed = Math.floor(Math.random() * 7) + 1;
  frog.progress += ramdonSpeed;
  if (frog.progress >= 100) {
    frog.progress = 100;
  }
}

var myRace = setInterval(myLap, 500);

function myLap() {
  for (let i = 0; i < RACERS.length; i++) {
    racingFrog(RACERS[i]);
    // console.log(RACERS[i].progress);
    if (RACERS[i].progress === 100) {
      clearInterval(myRace);
      // console.log("I'm here!!");
    }
    FROGSONSCREEN[i].style.left = `${RACERS[i].progress}%`;
  }
  // alert('Hello');
}
