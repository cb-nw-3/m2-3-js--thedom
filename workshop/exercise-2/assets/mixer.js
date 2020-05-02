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
  FROGSONSCREEN[i].style.transition = 'left 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)';
  FROGSONSCREEN[i].style.transform = 'rotate(90deg)';

  RACERS[i].progress = 0;
}

function racingFrog(frog) {
  let ramdonSpeed = Math.floor(Math.random() * 3) + 1;
  frog.progress += ramdonSpeed;
  if (frog.progress >= 100) {
    frog.progress = 100;
  }
}

function myLap() {
  for (let i = 0; i < RACERS.length; i++) {
    racingFrog(RACERS[i]);
    // console.log(RACERS[i].progress);
    if (RACERS[i].progress === 100) {
      clearInterval(myRace);
    }
    FROGSONSCREEN[i].style.left = `${RACERS[i].progress}%`;
    if (RACERS[i].progress === 100) {
      FROGSONSCREEN[i].style.transform = 'scale(1.5)';
      break;
    }
  }
}

console.log(RACERS);


const TAGS = MAIN.querySelectorAll('p');
for (let j = 0; j < LANES.length; j++) {
  TAGS[j].innerHTML = `Racer name: ${RACERS[j].name}  -  Racer Number:${RACERS[j].number}`
}

// console.log(FROGSONSCREEN);

var myRace = setInterval(myLap, 250);


