// Preset values
const FROGS = 3;

// 2.1
for (let i = 1; i <= 3; i++) {
  let lane = document.createElement("li");
  lane.setAttribute("id", "lane-" + i);
  let laneNumber = document.createElement("span");
  laneNumber.innerText = i;
  lane.appendChild(laneNumber);
  let track = document.getElementById("track");
  track.appendChild(lane);
}

// 2.2
let racers = [];
for (let i = 0; i < 3; i++) {
  // Pick Random frog
  let randomNumber = Math.floor(Math.random() * frogStable.length);
  racers.push(frogStable[randomNumber]);
  frogStable.splice(randomNumber, 1);
}

// 2.3
let lis = document.querySelectorAll("li");
for (let i = 0; i < 3; i++) {
  let frog = document.createElement("div");
  frog.innerText = racers[i].name;
  frog.classList.add("frog");
  frog.setAttribute("id", racers[i].name);
  frog.style.backgroundColor = racers[i].color;
  racers[i].progress = 0;
  lis[i].appendChild(frog);
}

// 2.4
let ranking = [];
function racingFrog(frog) {
  // delay time for each frog
  let delayTime = Math.ceil(Math.random() * 3000);
  if (delayTime < 1000) delayTime = 1000;
  // Update frog progress each interval
  let interval = setInterval(() => {
    // Division by 5 so that frog does not hop once from start to finish
    let hop = Math.ceil(((Math.random() / 1) * 100) / 5);
    let tempProgress = frog.progress + hop;
    // check that progress dos not exceed 100
    if (tempProgress < 100) {
      frog.progress += hop;
    } else {
      frog.progress = 100;
    }
    // Stop hopping when progress is equal to 100
    if (frog.progress === 100) {
      clearInterval(interval);
      ranking.push(frog);
    }

    // All lanes has the same width
    let lane = document.querySelector("#lane-1");
    // Calculate each hop distance depending on the frog progress
    let laneWidth = lane.clientWidth;
    let jumpDistance = (frog.progress / 100) * laneWidth;

    let frogEl = document.querySelector("#" + frog.name);
    frogEl.style.transform = "translate(" + jumpDistance + "px)";

    checkProgress(racers);
  }, delayTime);
}

for (let i = 0; i < 3; i++) {
  racingFrog(racers[i]);
}

// 2.5
function checkProgress(racers) {
  if (
    racers[0].progress === 100 &&
    racers[1].progress === 100 &&
    racers[2].progress === 100
  ) {
    let ol = document.createElement("ol");
    for (let i = 0; i < 3; i++) {
      let li = document.createElement("li");
      li.innerText = ranking[i].name;
      ol.appendChild(li);
    }
    document.body.appendChild(ol);
  }
}
