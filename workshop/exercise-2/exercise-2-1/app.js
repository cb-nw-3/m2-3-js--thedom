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

//starting the race on button instead of automatically
const raceBtn = document.querySelector(".raceStart");
const resetBtn = document.querySelector(".raceReset");

raceBtn.addEventListener("click", raceStart);
resetBtn.addEventListener("click", raceReset);

//disable the reset button before the first race
resetBtn.disabled = true;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let i = 0; i < FROGS; i++) {
  const newLane = document.createElement("li");
  const newSpan = document.createElement("span");

  newSpan.innerText = i + 1;
  newLane.appendChild(newSpan);
  newLane.id = `lane-${i}`;
  raceTrack.appendChild(newLane);
}
raceSetup();

//put the reusable setup in a function so i can start a new race without reloading the page
function raceSetup() {
  for (let i = 0; i < FROGS; i++) {
    let randomIndex = Math.floor(Math.random() * Math.floor(frogStable.length));
    racers.push(frogStable.splice(randomIndex, 1)[0]);
  }
  let frogBetLabels = [];

  for (i = 0; i < racers.length; i++) {
    let currentFrog = racers[i];
    let currentLane = document.querySelector(`#lane-${i}`);
    let frogHtmlElement = document.createElement("span");

    // add the lane it's in to find the frog HTML element later
    currentFrog.lane = currentLane;
    // add the progress to track during the race
    currentFrog.progress = 0;

    // build the html visual component so we can see the frog
    frogHtmlElement.classList.add("frog");
    frogHtmlElement.innerText = currentFrog.name;
    frogHtmlElement.setAttribute(
      "style",
      `background-color: ${currentFrog.color}`
    );
    //put the node in the tree
    currentLane.appendChild(frogHtmlElement);

    //replace the label to the betting input with this frog's name
    frogBetLabels = document.querySelectorAll(`.frogMoneyInputs > li > label`);
    frogBetLabels[i].innerText = currentFrog.name;
  }
}

function racingFrog(frog) {
  // random racing properties
  let jumpDistance = Math.floor(10 + Math.random() * Math.floor(12));
  let intervalTime = Math.floor(750 + Math.random() * Math.floor(1000));

  //find this specific frog in order to move it during the race
  let thisFrogHTML = document.querySelector(`#${frog.lane.id} > .frog`);

  let frogIntervalID = setInterval(function () {
    frog.progress += jumpDistance;
    if (frog.progress >= 95) {
      frog.progress = 100;
      thisFrogHTML.style["left"] = `${frog.progress}%`;
      if (ranking.push(frog.name) === 3) {
        raceEnd();
      }
      clearInterval(frogIntervalID);
    } else {
      thisFrogHTML.style["left"] = `${frog.progress}%`;
    }
  }, intervalTime);
}

//raceend Function to do all the thing when the race is over
function raceEnd() {
  console.log(
    `Race over! Congratulations to the winner, ${ranking[0]}. Better luck next time, ${ranking[1]}. Cute effort, ${ranking[2]}!`
  );
  wagerResults(ranking[0]);
  resetBtn.classList.toggle("disabled");
  resetBtn.disabled = false;
}

// it's not fun if it's not all about money
let currentGold = 100;
const goldElement = document.querySelector(".current-gold");
const betInputs = document.querySelectorAll(".betAmount");
goldElement.innerText = currentGold;
let betValue = 0;
let selectedFrog;

function raceStart() {
  //check wagers
  let inputAmount = 0;

  for (let i = 0; i < betInputs.length; i++) {
    elem = betInputs[i];
    if (Number(elem.value) != 0) {
      selectedFrog = racers[i];
      inputAmount += 1;
      betValue = elem.value;
    }
  }
  //only 1 box can have an input otherwise dont start and give alert
  //at least 1 box has have an input otherwise dont start and give alert
  //bet amount has to be lower or equal to currentGold otherwise don't start
  if (inputAmount > 1) {
    alert("Only bet on one frog please!");
    return;
  } else if (inputAmount === 0) {
    alert("Betting is mandatory.");
    return;
  } else if (betValue > currentGold) {
    alert("You're not rich enough for this bet.");
    return;
  }
  //Start and take their money!
  racers.forEach(racingFrog);
  updateGold(-betValue);
  // disable the race button during a race
  raceBtn.classList.toggle("disabled");
  raceBtn.disabled = true;
}

//this is called at the end of a race to show results and give money wins
function wagerResults(winner) {
  console.log(winner);
  console.log(selectedFrog);
  if (winner === selectedFrog.name) {
    revenue = betValue * 3;
    updateGold(revenue);
    alert(
      `You predicted the winner! Take ${revenue} gold you magnificent bastard!`
    );
  } else {
    alert("You guessed wrong! You Get Nothing! Good Day Sir.");
  }
}

// this is called whenever the money changes, so the page is also updated every tiem
function updateGold(goldAmount) {
  currentGold += goldAmount;
  goldElement.innerText = currentGold;
}

//calling raceReset to reset the values of the race, and let people race again without reloading the page
function raceReset() {
  for (i = 0; i < racers.length; i++) {
    let currentLane = document.querySelector(`#lane-${i}`);
    let currentChild = document.querySelector(`#lane-${i} .frog`);
    currentLane.removeChild(currentChild);
  }

  racers = [];
  ranking = [];
  resetStable();
  raceSetup();
  raceBtn.classList.toggle("disabled");
  raceBtn.disabled = false;
  resetBtn.classList.toggle("disabled");
  resetBtn.disabled = true;
}
