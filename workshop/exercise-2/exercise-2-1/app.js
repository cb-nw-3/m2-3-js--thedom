// Preset values
const FROGS = 3;
const HEAD = document.querySelector('head');
const ICON = document.createElement('link');
const CSS = document.createElement('link');
const FILE = document.createElement('script');
const FRAME = document.createElement('div');
const MAIN = document.querySelector('main');
// nice to have
HEAD.querySelector('title').innerHTML = 'AR-Exercise 2';

ICON.rel = 'icon';
ICON.href = '../assets/frogx50.png';
ICON.type = 'image/x-icon';
CSS.rel = 'stylesheet';
CSS.href = '../assets/styles.css';
FILE.src = '../assets/frogStable.js';

HEAD.appendChild(ICON);
HEAD.appendChild(CSS);
HEAD.appendChild(FILE);

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
// 2. Create li
// 3. Create span and add it to the li

for (let i = 1; i <= FROGS; i++) {
  const TRACK = document.createElement('li');
  MAIN.querySelector('ol').appendChild(TRACK);
  TRACK.innerHTML = `<span>${i}</span>`;
}

// 4. Assign an id to each lane
const LANES = document.querySelectorAll('li');
for (let j = 0; j < LANES.length; j++) {
  LANES[j].id = 'Lane-' + (j + 1);
  const FROG = document.createElement('img');
  FROG.src = '../assets/frog.png';
  FROG.classList.add('frog');
  LANES[j].appendChild(FROG);
}

function pickARamdonFrog() {
  let index = [];
  let ramdonIndex = 0;
  while (index.length < FROGS) {
    ramdonIndex = Math.floor(Math.random() * 4);
    if (index.length === 0) {
      index.push(ramdonIndex);
    } else {
      let notInIndex = true;
      for (let i = 0; i < index.length; i++) {
        if (index[i] === ramdonIndex) {
          notInIndex = false;
        } else {
          index.push(ramdonIndex);
        }
      }
    }
  }
  let frogsArray = [];
  console.table(window.frogStable);
  // index.forEach((element) => frogsArray.push(frogStable[elemet]));
  // return frogsArray;
}

console.table(frogStable);
let racers = pickARamdonFrog();
