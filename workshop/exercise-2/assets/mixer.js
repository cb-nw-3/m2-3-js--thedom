import { frogStable } from './frogStable.js';
console.log(frogStable);
// console.log(`hello I'm the mixer`);

function pickARamdonFrog() {
  let index = [];
  let ramdonIndex = 0;
  while (index.length < FROGS) {
    console.log('index length', index.length);
    ramdonIndex = Math.floor(Math.random() * 4);
    console.log('Ramdon Index is:', ramdonIndex);
    if (index.length === 0) {
      index.push(ramdonIndex);
    } else {
      let notInIndex = true;
      for (let i = 0; i < index.length; i++) {
        console.log('Filter', index[i], ramdonIndex);
        if (index[i] === ramdonIndex) {
          notInIndex = false;
        } else {
          index.push(ramdonIndex);
        }
        console.log('Result after if', index);
      }
    }
    console.log('index after pushing:', index.length);
  }

  let frogsArray = [];
  console.log('Index is:', index);
  // index.forEach((element) => frogsArray.push(frogStable[elemet]));
  // return frogsArray;
}

const RACERS = pickARamdonFrog();
// console.log(RACERS);
