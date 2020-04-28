// Preset values
const FROGS = 3;
const raceTrack = document.querySelector(".track");
const headHTML = document.querySelector("head");

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "/workshop/exercise-2/assets/styles.css";
headHTML.appendChild(cssLink);

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let i = 0; i < FROGS; i++) {
  const newLane = document.createElement("li");
  const newSpan = document.createElement("span");

  newSpan.innerText = i + 1;
  newLane.appendChild(newSpan);
  newLane.id = `lane-${i}`;
  raceTrack.appendChild(newLane);
}

let racers = [];

for (let i = 0; i < FROGS; i++) {
  let randomIndex = Math.floor(Math.random() * Math.floor(frogStable.length));
  racers.push(frogStable.splice(randomIndex, 1));
}

for (i = 0; i < racers.length; i++) {
  let currentFrog = racers[i][0];
  let currentLane = document.querySelector(`#lane-${i}`);

  let frogNameTag = document.createElement("span");
  frogNameTag.innerText = currentFrog.name;
  currentLane.appendChild(frogNameTag);
  frogNameTag.setAttribute("style", `background-color: ${currentFrog.color}`);

  frogNameTag.classList.add("frog");
  currentFrog.progress = 0;
}

function racingFrog(frog) {
  let jumpDistance = Math.floor(4 + Math.random() * Math.floor(12));
  let intervalTime = Math.floor(750 + Math.random() * Math.floor(1300));
  let position = 0;

  let frogIntervalID = setInterval(function () {
    position += jumpDistance;
    if (position >= 90) {
      clearTimeout(frogIntervalID);
      frog.style["left"] = "90vw";
      if (ranking.push(frog.innerText) === 3) {
        console.log(
          `Race over! Congratulations to the winner, ${ranking[0]}. Better luck next time, Runner up, ${ranking[1]}. Nice try, ${ranking[2]}!`
        );
      }
    } else {
      frog.style["left"] = position + "vw";
    }

    // if (Math.random() > 0.5) {
    //   intervalTime = Math.round(intervalTime - intervalTime * 0.25);
    // } else {
    //   intervalTime = Math.round(intervalTime + intervalTime * 0.25);
    // }
    // console.log(intervalTime);
  }, intervalTime);
}

const frog0 = document.querySelector("#lane-0 > .frog");
const frog1 = document.querySelector("#lane-1 > .frog");
const frog2 = document.querySelector("#lane-2 > .frog");

racingFrog(frog0);
racingFrog(frog1);
racingFrog(frog2);

let ranking = [];
