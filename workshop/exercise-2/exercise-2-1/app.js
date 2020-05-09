// Preset values
const FROGS = 3;

let RACERS = [];
// We will push random frogs from the stable into this array.

for (i = 0; i < FROGS; i++) {
  // Write a for loop that will generate a "lane" for each frog.
  let frog = frogStable[i];
  frog.progress = 0;
  // Set the frog's progress to 0 inside its object, inside of the racers array.
  RACERS.push(frog);
  // Write a for loop that keeps pushing frogs from frogStable into racers until we have the required number of frogs (as defined by FROGS).
}
console.log(RACERS);

function addStyleTag() {
  let styleTag = document.createElement("link");
  styleTag.rel = "stylesheet";
  styleTag.href = "../assets/styles.css";
  return styleTag;
}

//  add the stylesheet that is in the assets folder. Return at bottom
let ol = document.querySelector("#track");
// our doc is attached to ol in html

function laneGenerator(laneNumber) {
  let frog = RACERS[laneNumber - 1];
  // add the lane number to frog object (helps find lane later on)
  frog.laneNumber = laneNumber;
  // Use the racers array to assign each frog to a lane.
  let lane = document.createElement("li");
  // Each lane should be an li.
  lane.setAttribute("id", `lane-${laneNumber}`);
  // So let's give each lane its own id as well.
  let span = document.createElement("span");
  span.innerText = laneNumber;
  lane.appendChild(span);
  // nside each li there should be a span that contains the lane number.
  let frogElement = document.createElement("div");
  // add an id to the frogs
  frogElement.id = `${frog.name}`;

  frogElement.innerText = `${frog.name} - ${frog.number}`;
  // We should also show the name/number of the frog in the lane. (This will involve creating at least one element inside the lane li)
  frogElement.classList.add("frog");
  // Add a class of frog to each of the frogs so that we can style them later.
  frogElement.style.backgroundColor = frog.color;
  // Let's also temporarily set the background color of the frog element to the color assigned to it in its object.
  lane.appendChild(frogElement);
  let frogScore = document.createElement("div");
  frogScore.id = `score-${frog.name}`;
  frogScore.innerText = `${frog.name} progress ${frog.progress} %`;
  document.body.appendChild(frogScore);
  return lane;
}

// appending all children nodes or lanes to main parent lane that is attached to ol
function theLane() {
  let allTheLanes = document.querySelector("ol");
  for (let i = 0; i < FROGS; i++) {
    allTheLanes.appendChild(laneGenerator(i + 1));
  }
}

function racingFrog(frog) {
  // get the lane number from my frog
  const { laneNumber } = frog;
  let hopLength = Math.ceil(Math.random() * 100);
  let hopInterval = setInterval(function () {
    frog.progress = hopLength + frog.progress;
    // get the progress html element
    let frogScoreHtmlElement = document.getElementById(`score-${frog.name}`);
    // add the progress to the inner text of the frog score element
    frogScoreHtmlElement.innerText = `${frog.name} progress ${frog.progress} %`;

    console.log(frog.progress);
    // get the html element from the lane
    let laneHtmlElement = document.getElementById(`lane-${laneNumber}`);
    // get the width of the track from the html element
    let laneWidth = laneHtmlElement.offsetWidth;
    // calculate avec produit croise to get actual pixel value
    let frogComputedCssProgress = (frog.progress / 100) * laneWidth;
    // get our frog element
    let frogHtmlelement = document.getElementById(frog.name);
    // make our frog progress with the left css tag
    frogHtmlelement.style.left = `${frogComputedCssProgress}px`;

    if (frog.progress > 100) {
      frog.progress = 100;
      clearInterval(hopInterval);
    }
    console.log(`frog ${frog.name}`, `progress: ${frog.progress}`);
    console.log(frog.progress);
  }, 1000);
}

// appending style tag and ol
(function () {
  document.head.appendChild(addStyleTag());
  theLane();
  RACERS.forEach(function (racer) {
    racingFrog(racer);
  });
})();
