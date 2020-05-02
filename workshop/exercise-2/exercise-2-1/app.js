const FROGS = 3;
let track = document.querySelector("#track");
let racers = [];
let rankings = [];
function finishingRank(frog) {
  if (frog.finalRank === 1) {
    return frog.name + " is the Winner!!!";
  } else if (frog.finalRank === 2) {
    return frog.name + " showing a strong second place finish!!!";
  } else {
    return "Better luck next time " + frog.name;
  }
}

function racingFrog(frog) {
  let frogPosition = document.querySelector(
    "#" + "g" + frog.number + frog.name
  );
  let finishLine = document.querySelector(".track li").offsetWidth;
  let timeInterval = Math.ceil(Math.random() * 2000) + 1000;
  let id = setInterval(frame, timeInterval);
  let move = 0;
  rank = 1;
  function frame() {
    let frogScore = document.querySelector("#" + frog.name + frog.number);
    let jump = Math.ceil(Math.random() * 100) + 25;
    move += jump;
    if (move >= finishLine) {
      move = finishLine;
    }
    frogPosition.style.left = move + "px";
    frog.progress = Math.round((move * 100) / finishLine);

    frogScore.innerText = frog.name + "'s progress: " + frog.progress + "%";
    if (frogPosition.offsetLeft >= finishLine) {
      clearInterval(id);
      frog.finalRank = rank;
      frogScore.innerText = finishingRank(frog);
      if (rank === 1) {
        setInterval(function () {
          frogScore.style.visibility =
            frogScore.style.visibility == "hidden" ? "visible" : "hidden";
        }, 300);
      }
      rank += 1;
    }
  }
}
let k = 0;
let numsChosen = [];
while (k < 3) {
  let numSelected = Math.floor(Math.random() * frogStable.length);
  if (!numsChosen.includes(numSelected)) {
    numsChosen.push(numSelected);
    racers.push(frogStable[numSelected]);
    k++;
  }
}
for (i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  lane.setAttribute("id", "lane-" + (i + 1));
  let laneID = document.createElement("span");
  laneID.innerText = racers[i].number;
  laneID.style.fontSize = "20px";
  lane.append(laneID);
  track.append(lane);
}

for (i = 0; i < FROGS; i++) {
  let lane = track.querySelector("#lane-" + (i + 1));
  let frogName = document.createElement("span");
  frogName.setAttribute("id", racers[i].name);
  frogName.setAttribute(
    "style",
    "margin: 10px 10px 10px 10px; color: white; font-size: 20px;"
  );
  racers[i].progress = 0;
  frogName.innerText = racers[i].name;
  // let frogNumber = document.createElement("span");
  // frogNumber.setAttribute("id", racers[i].number);
  // frogNumber.setAttribute("style", "color: white; font-size: 20px;");
  // frogNumber.innerText = racers[i].number;
  let frogBackground = document.createElement("span");
  frogBackground.setAttribute("id", "g" + racers[i].number + racers[i].name);
  frogBackground.classList.add("frog");
  let frogImage = document.createElement("img");
  frogImage.setAttribute("src", "../assets/frogx50.png");
  frogImage.style.backgroundColor = racers[i].color;
  frogBackground.append(frogImage);
  // lane.append(frogName);
  // lane.append(frogNumber);
  lane.append(frogBackground);
  let mainPage = document.querySelector("main");
  let frogScore = document.createElement("h2");
  frogScore.setAttribute("id", racers[i].name + racers[i].number);
  frogScore.innerText = racers[i].name + "'s progress: " + racers[i].progress;
  mainPage.append(frogScore);
  racingFrog(racers[i]);
}
