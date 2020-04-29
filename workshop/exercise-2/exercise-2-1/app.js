// Preset values
const FROGS = 3;
const raceTrack = document.querySelector(".track");
const headHTML = document.querySelector("head");

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "/workshop/exercise-2/assets/styles.css";
headHTML.appendChild(cssLink);

// arrays to hold racers and to log winners
let racers = [];
let ranking = [];

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let i = 0; i < FROGS; i++) {
  const newLane = document.createElement("li");
  const newSpan = document.createElement("span");

  newSpan.innerText = i + 1;
  newLane.appendChild(newSpan);
  newLane.id = `lane-${i}`;
  raceTrack.appendChild(newLane);
}

for (let i = 0; i < FROGS; i++) {
  let randomIndex = Math.floor(Math.random() * Math.floor(frogStable.length));
  racers.push(frogStable.splice(randomIndex, 1)[0]);
}

for (i = 0; i < racers.length; i++) {
  let currentFrog = racers[i];
  let currentLane = document.querySelector(`#lane-${i}`);

  let frogNameTag = document.createElement("span");
  frogNameTag.innerText = currentFrog.name;
  currentLane.appendChild(frogNameTag);
  frogNameTag.setAttribute("style", `background-color: ${currentFrog.color}`);

  frogNameTag.classList.add("frog");
  currentFrog.progress = 0;
  // save the lane it's in to find the frog HTML element later
  currentFrog.lane = currentLane;
}

function racingFrog(frog) {
  let jumpDistance = Math.floor(4 + Math.random() * Math.floor(12));
  let intervalTime = Math.floor(750 + Math.random() * Math.floor(1000));

  let thisFrogHTML = document.querySelector(`#${frog.lane.id} > .frog`);

  let frogIntervalID = setInterval(function () {
    frog.progress += jumpDistance;
    if (frog.progress >= 95) {
      frog.progress = 100;
      thisFrogHTML.style["left"] = `${frog.progress}%`;
      if (ranking.push(frog.name) === 3) {
        console.log(
          `Race over! Congratulations to the winner, ${ranking[0]}. Better luck next time, ${ranking[1]}. Cute effort, ${ranking[2]}!`
        );
      }
      clearInterval(frogIntervalID);
    } else {
      thisFrogHTML.style["left"] = `${frog.progress}%`;
    }

    // if (Math.random() > 0.5) {
    //   intervalTime = Math.round(intervalTime - intervalTime * 0.25);
    // } else {
    //   intervalTime = Math.round(intervalTime + intervalTime * 0.25);
    // }
    // console.log(intervalTime);
  }, intervalTime);
}

// const frog0 = document.querySelector("#lane-0 > .frog");
// const frog1 = document.querySelector("#lane-1 > .frog");
// const frog2 = document.querySelector("#lane-2 > .frog");

racingFrog(racers[0]);
racingFrog(racers[1]);
racingFrog(racers[2]);
