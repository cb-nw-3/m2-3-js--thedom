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

// let newScript = document.createElement('script');
// newScript.src = '../assets/frogStable.js';
// let body = document.querySelector('body');
// body.insertBefore(newScript, body.childNodes[2]);

// add stylesheet
let stylesheet = document.createElement('link');
let head = document.querySelector('head');
stylesheet.rel = 'stylesheet';
stylesheet.href = '../assets/styles.css';
head.appendChild(stylesheet);

// initialize racers array
let racers = [];

// loop to push three different frogs in racers array
while (racers.length !== 3) {
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
for (i = 0; i < 3; i++) {
  // create the frogs with div element
  let divFrog = document.createElement('div');
  // initialize frog attributes
  divFrog.innerText = `${racers[i].number}`
  divFrog.className = 'frog';
  // append the frog to the lane
  liWithFrog[i].appendChild(divFrog);
  // change the frog backgroundColor to the value in racers array
  divFrog.style.backgroundColor = racers[i].color;
  // initialize the progress to 0
  racers[i].progress = 0;
}

console.log(liWithFrog);

function racingFrog(frogObjFromRacersArr, i) {
  // generate a random delay between 200 and 1000 ms
  let randomDelay = Number((Math.random() * 800).toFixed()) + 200;
  // generate a random distance between 2 and 10 %
  let randomDist = Number((Math.random() * 8).toFixed(2)) + 2;
  // select the frog
  let divFrog = document.querySelector(`#lane-${i + 1} .frog`);
  // initialize progress
  let progress = frogObjFromRacersArr.progress;
  // log delays and distances for each frogs
  console.log('randomDelay', randomDelay, 'randomDist', randomDist)
  // start the intervals for each frog with a delay
  let interval = setInterval(function() {
    // increment the distance to progress
    progress += randomDist;
    // change the left property in css to make the frog move
    divFrog.style.left = Number(divFrog.style.left.replace('%', '')) + randomDist + '%';
    // check if frog reached the end
    if (progress >= 100) {
      // close the interval
      clearInterval(interval);
      // change progress to be 100 flush
      racers.progress = 100;
      // change css property to make it exact
      divFrog.style.left = '100%';
    }
  }, randomDelay);
}
// loop through racers array to activate the race
for (let i = 0; i < racers.length; i++) {
  racingFrog(racers[i], i);
}