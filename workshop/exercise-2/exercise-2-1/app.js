// Exercise 2.1
const FROGS = 3;

const track = document.querySelector("#track");
document.body.appendChild(track);
for (let count = 1; count <= FROGS; count++) {
  let lane = document.createElement("li");
  track.appendChild(lane);
  let laneNumber = document.createElement("span");
  laneNumber.innerText = count;
  lane.appendChild(laneNumber);

  lane.id = "lane-" + count;
}

// Exercise 2.2
let racers = [];

for (let i = 1; i <= FROGS; i++) {
  racers.push(frogStable[i]);
}

console.log(racers);

// Exercise 2.3
for (let i = 0; i < FROGS; i++) {
  let frogRacer = document.createElement("span");
  frogRacer.innerText = racers[i]["number"];
  frogRacer.classList.add("frog");
  frogRacer.style.color = racers[i]["color"];
  document.querySelector(`#lane-${i + 1}`).appendChild(frogRacer);

  racers[i].progress = 0;
  racers[i].lane = "lane-" + (i + 1);
}

//Exercise 2.5
let ranking = [];

// Exercise 2.4
function racingFrog(frogObj) {
  let trackLength = track.offsetWidth;
  let hop = Math.round(((Math.random() * 100) / trackLength) * 100);

  let progress = frogObj["progress"];

  let hopFrog = setInterval(function () {
    progress = progress + hop;
    if (progress >= 100) {
      progress = 100;
      console.log(frogObj["name"], " has finished");
      clearInterval(hopFrog);
      ranking.push(frogObj);
    }
    document.querySelector(
      `#${frogObj.lane} .frog`
    ).style.left = `${progress}%`;
  }, Math.random() * 1000);
}

racers.forEach(function (racer) {
  racingFrog(racer);
});

// Exercise 2.5
let raceFinish = setInterval(function (racer) {
  if (ranking.length === racers.length) {
    console.log(ranking[0].name, ranking[1].name, ranking[2].name);
    clearInterval(raceFinish);
  }
}, 5);
