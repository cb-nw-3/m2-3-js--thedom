// Preset values
const FROGS = 3;

let RACERS = [];

for (i = 0; i < FROGS; i++) {
  let frog = frogStable[i];
  RACERS.push(frog);
}
console.log(RACERS);

function addStyleTag() {
  let styleTag = document.createElement("link");
  styleTag.rel = "stylesheet";
  styleTag.href = "../assets/styles.css";
  return styleTag;
}

let ol = document.querySelector("#track");

// 4. Assign an id to each lane

function laneGenerator(laneNumber) {
  let lane = document.createElement("li");
  lane.setAttribute("id", `lane-${laneNumber}`);
  let span = document.createElement("span");
  span.innerText = laneNumber;
  lane.appendChild(span);
  return lane;
}

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// appending all children nodes or lanes to main parent lane
function theLane() {
  let allTheLanes = document.querySelector("ol");
  for (let i = 0; i < FROGS; i++) {
    allTheLanes.appendChild(laneGenerator(i + 1));
  }
}

// appending style tag and ol
document.head.appendChild(addStyleTag());
theLane();

// function theRating() {
//     let therate = document.createElement("p");
//     therate.innerText = "IMDB Rating: 9.5";
//     return therate;
//   }
