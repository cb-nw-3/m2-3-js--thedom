// Preset values
const FROGS = 3;

const track = document.getElementById("track");

// Exercise 2.1
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
  let lane = document.createElement("li");
  track.appendChild(lane);

  let number = document.createElement("span");
  number.innerText = laneCount;
  lane.appendChild(number);

  lane.id = `frog-${laneCount}`;
}

// Exercise 2.2
// 3. Define array
let racers = [];

// 4. Write for loop
for (let x = 0; x < FROGS; x++) {
  const newFrog = frogStable[x];
  racers.push(newFrog);
}

// 5. console.log(racers)
console.log(racers);

// Exercise 2.3
racers.forEach(function (racer, id) {
  // add the frogs to a lane
  // for now, frogs are simply shapes in the lane.
  const newFrog = document.createElement("span");
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add("frog");
  newFrog.style.background = racer.color;
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);

  // set their progress to 0
  // let's use the racers array for this.
  racers[id].progress = 0;
  racers[id].lane = `frog-${id + 1}`;

  // for now, we'll also print that progress to the page
  const frogProgress = document.createElement("span");
  frogProgress.id = racers[id].name;
  document.getElementById(`frog-${id + 1}`).appendChild(frogProgress);
});

// (for Exercise 2.5)
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
    // Check if progress is more than 100%. If so, set it to 100
    if (progress > 100) {
      progress = 100;
      console.log(racer.name, " has finished!");
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
