// Preset values
const FROGS = 3;

for (i = 1; i <= FROGS; i ++) {
  //create the li element
  let li = document.createElement('li');
  // create the span element
  let span = document.createElement('span');
  // add the span element to the li
  li.appendChild(span);
  // add an id to the li
  li.id = `lane-${i}`;
  // add text to the li
  span.innerText = `${i}`;
  // append the li's to the ol
  document.querySelector('ol').appendChild(li);
}

// add stylesheet
let stylesheet = document.createElement('link');
let head = document.querySelector('head');
stylesheet.rel = 'stylesheet';
stylesheet.href = '../assets/styles.css';
head.appendChild(stylesheet);

// initialize racers array
let racers = [];

// loop to push three different frogs in racers array
while (racers.length !== FROGS) {
  // generate random number between 0 and 4
  let randomFrog = Math.floor(Math.random() * frogStable.length);
  // statement to verify that frogs dont repeat
  if (racers.indexOf(frogStable[randomFrog]) === -1) {
    racers.push(frogStable[randomFrog]);
  }
}

console.log(racers);

// selects all lanes
let liWithFrog = document.querySelectorAll('li');
// loop through lanes 
for (i = 0; i < FROGS; i++) {
  // create the frogs with div element
  let divFrog = document.createElement('div');
  // get each lanes
  let li = document.querySelector(`#lane-${i + 1}`);
  // initialize frog attributes
  divFrog.innerText = `${racers[i].number}`
  divFrog.className = 'frog';
  // append the frog to the lane
  liWithFrog[i].appendChild(divFrog);
  // change the lane backgroundColor to the value in racers array
  li.style.backgroundColor = racers[i].color;
  // initialize the progress to 0
  racers[i].progress = 0;
}

// insert three spans to update progress in the title
for (let i = 0; i < FROGS; i++) {
  // create span to hold each lane
  let spanProgress = document.createElement('span');
  // create span to hold progress
  let spanTitle = document.createElement('span');
  // get h1 element to insert all spans
  let h1 = document.querySelector('h1');
  // set progress ID
  spanProgress.id = `frog-${i + 1}`;
  // set progress innerText
  spanProgress.innerText = `0%`;
  // set lane id
  spanTitle.id = `lane-${i + 1}`;
  // set lane innerText
  spanTitle.innerText = ` Lane ${i + 1} : `;
  // append span title to h1
  h1.appendChild(spanTitle);
  // append span progress to span title
  spanTitle.appendChild(spanProgress);
}

function racingFrog(frogObjFromRacersArr, i) {
  // generate a random delay between 200 and 1000 ms
  let randomDelay = Number((Math.random() * 600).toFixed()) + 400;
  // generate a random distance between 2 and 10 %
  let randomDist = Number((Math.random() * 6).toFixed(2)) + 4;
  // select the frog
  let divFrog = document.querySelector(`#lane-${i + 1} .frog`);
  // initialize progress
  let progress = frogObjFromRacersArr.progress;
  // select span in title to update progress
  let spanProgress = document.querySelector(`#frog-${i + 1}`);
  // log delays and distances for each frogs
  console.log('randomDelay', randomDelay, 'randomDist', randomDist)
  // start the intervals for each frog with a delay
  let interval = setInterval(function() {
    // increment the distance to progress
    progress += randomDist;
    // change the left property in css to make the frog move
    divFrog.style.left = Number(divFrog.style.left.replace('%', '')) + randomDist + '%';
    // update progress in title
    spanProgress.innerText = divFrog.style.left;
    // check if frog reached the end
    if (progress >= 100) {
      // close the interval
      clearInterval(interval);
      // change progress to be 100 flush
      frogObjFromRacersArr.progress = 100;
      // change css property to make it exact
      divFrog.style.left = '100%';
      // update title progress to be exact
      spanProgress.innerText = divFrog.style.left;
      // push each frog in the winners array
      winnersArray.push(frogObjFromRacersArr);
      // get podium element
      let gold = document.querySelector('.gold');
      let silver = document.querySelector('.silver');
      let bronze = document.querySelector('.bronze');
      // log frgo names and numbers on podium
      if (winnersArray.length === 1) {
      gold.innerText = `${winnersArray[0].name} #${winnersArray[0].number}`;
      } else if (winnersArray.length === 2) {
      silver.innerText = `${winnersArray[1].name} #${winnersArray[1].number}`;
      } else if (winnersArray.length === 3) {
      bronze.innerText = `${winnersArray[2].name} #${winnersArray[2].number}`;
      console.log(winnersArray);
      }
    }
  }, randomDelay);
}
// initialize the winners array
let winnersArray = [];
// loop through racers array to activate the race
for (let i = 0; i < FROGS; i++) {
  racingFrog(racers[i], i);
}
// select button for new race
let buttonNewRace = document.querySelector('.newRace');
// function for a new race
buttonNewRace.onclick = function() {
  for (let i = 0; i < FROGS; i++) {
    // select the frog
    let divFrog = document.querySelector(`#lane-${i + 1} .frog`);
    // select span in title to update progress
    let spanProgress = document.querySelector(`#frog-${i + 1}`);
    // change the left property in css to make the frog move
    divFrog.style.left = '0%';
    // update progress in title
    spanProgress.innerText = divFrog.style.left;
    // get podium element
    let gold = document.querySelector('.gold');
    let silver = document.querySelector('.silver');
    let bronze = document.querySelector('.bronze');
    // remove previous winners
    gold.innerText = ``;
    silver.innerText = ``;
    bronze.innerText = ``;
    // empty winnersArray
    winnersArray = [];
    // reset racers progress
    racers[i].progress = 0;
    // recall the function to make frogs race
    racingFrog(racers[i], i);
  }
}