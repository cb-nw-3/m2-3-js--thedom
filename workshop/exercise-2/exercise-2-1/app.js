// Preset values
const FROGS = 3;

const track = document.querySelector('#track');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let i = 1; i <= FROGS; i++) {

  // Create li
  let lane = document.createElement('li');
  track.appendChild(lane);
  
  // Create span and add it to the li
  let number = document.createElement('span');
  track.appendChild(number); 

  // Assign an id to each lane
  lane.id = `lane-${i}`
}

// Exercise: 2.2.2
let racers = [];

// Exercise: 2.2.3
for (let i = 0; i < FROGS; i++) {
  const newFrog = frogStable[i];
  racers.push(newFrog);
}

// Exercise: 2.2.4
console.log(racers);

// Exercise 2.3
racers.forEach(function (racer, id) {

  // add the frogs to a lane
  const newFrog = document.createElement('span');
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add('frog');
  newFrog.style.background = racer.color;
  document.getElementById(`lane-${id + 1}`).appendChild(newFrog);

  // set progress to 0
  racers[id].progress = 0;
  racers[id].lane = `lane-${id + 1}`;

  // print the progress to the page
  const frogProgress = document.createElement('span');
  frogProgress.id = racers[id].name;
  document.getElementById(`lane-${id + 1}`).appendChild(frogProgress);
});

// ref Exercise 2.5
let ranking = [];

// Exercise 2.4
function racingFrog(racer) {
  let progress = racer.progress;
  const trackWidth = track.offsetWidth;

  // set a random hop length
  const hopLength = (Math.floor(Math.random() * 100) / trackWidth) * 100;

  const bounce = setInterval(function () {

    // increase the progress by the random hopLength
    progress += hopLength;

    // check if progress is more than 100%. If so, set it to 100
    if (progress > 100) {
      progress = 100;
      console.log(racer.name, ' has finished!');
      clearInterval(bounce);

      // (for Exercise 2.5)
      ranking.push(racer);
    }

    // Moving the frog on the screen
    document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`;
  }, Math.random() * 1000);
}

// startRace
racers.forEach(function (racer) {
  
  // call this function once for each racer.
  racingFrog(racer);
});

// Exercise 2.5
const endRace = setInterval(function () {
  if (ranking.length === racers.length) {
    console.log(ranking);
    clearInterval(endRace);
  }
}, 500);