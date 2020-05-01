// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
const track = document.getElementById("track");
// 2. Create li
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
  let lane = document.createElement("li");
  track.appendChild(lane);
  // 3. Create span and add it to the li
  let number = document.createElement("span");
  number.innerText = laneCount;
  lane.appendChild(number);
  // 4. Assign an id to each lane
  lane.id = "frog-" + number;
}
//Exercise 2.2
let racers = [];

for (let i = 0; i < FROGS; i++) {
  const newFrog = frogStable[i];
  racers.push(newFrog);
}
console.log(racers);

//Exercise 2.3
racers.forEach(function (racer, id) {
  const newFrog = document.createElement("span");
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add("frog");
  newFrog.style.background = racer.color;
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);

  racers[id].progress = 0;
  racers[id].lane = `frog-${id + 1}`;

  const frogProgress = document.createElement("span");
  frogProgress.id = racers[id].name;
  document.getElementById(`frog-${id + 1}`).appendChild(frogProgress);
});

//Exercise 2.4
