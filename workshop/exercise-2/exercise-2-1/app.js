const FROGS = 3;
let track = document.querySelector("#track");
let racers = [];

function racingFrog(racers) {
  let timeInterval = Math.ceil(Math.random() * 2000) + 1000;
  let id = setInterval(frame, timeInterval);
  let move = 0;
  function frame() {
    let jump = Math.ceil(Math.random() * 40);
    let laneNumber = Math.ceil(Math.random() * FROGS);
    let lane = track.querySelector("#lane-" + laneNumber);
    console.log("length, ", lane.querySelectorAll(".track li"));
    let frogSelected = lane.lastChild;
    let frog = frogSelected.querySelector("img");
    move += jump;
    frog.style.marginLeft = move + "px";
  }
}

for (i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  lane.setAttribute("id", "lane-" + (i + 1));
  let laneID = document.createElement("span");
  laneID.innerText = i + 1;
  lane.append(laneID);
  track.append(lane);
}
for (i = 0; i < frogStable.length; i++) {
  racers.push(frogStable[i]);
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
  let frogNumber = document.createElement("span");
  frogNumber.setAttribute("id", racers[i].number);
  frogNumber.setAttribute("style", "color: white; font-size: 20px;");
  frogNumber.innerText = racers[i].number;
  let frogBackground = document.createElement("span");
  frogBackground.classList.add(".frog");
  let frogImage = document.createElement("img");
  frogImage.setAttribute("src", "../assets/frogx50.png");
  frogImage.style.backgroundColor = racers[i].color;
  frogBackground.append(frogImage);
  lane.append(frogName);
  lane.append(frogNumber);
  lane.append(frogBackground);
  let mainPage = document.querySelector("main");
  let frogScore = document.createElement("h2");
  frogScore.innerText = racers[i].name + "'s progress: " + racers[i].progress;
  mainPage.append(frogScore);
}
racingFrog(racers);
