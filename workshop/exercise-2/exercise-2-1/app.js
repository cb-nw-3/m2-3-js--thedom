//Exercise 2.1 - Setting the track
const FROGS = 3;
const track = document.getElementById("track");
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
  // 2. Create li
  let lane = document.createElement("li");
  track.appendChild(lane);
  // 3. Create span and add it to the li
  let number = document.createElement("span");
  number.innerText = laneCount;
  lane.appendChild(number);
  // 4. Assign an id to each lane
  lane.id = `frog-${laneCount}`;
}

//------------------------------------------

//Exercise 2.2 Calling the frogs

//1.Define an empty array
let racers = [];
//2.Write for loop to push frogs from stable to array until 3 racers
for (let i = 0; i < FROGS; i++) {
  const newFrog = frogStable[i];
  racers.push(newFrog);
}
//3.Output racers in array
console.log(racers);

//-----------------------------------------

//Exercise 2.3 Lining the frogs up

//1.Assign _each_ frog in their lane
racers.forEach(function (racer, id) {
  const newFrog = document.createElement("span");
  //2.Add class to each frog to style later
  newFrog.innerText = `${racer.number}`;
  newFrog.classList.add("frog");
  //3.Temporarily set background color of frog from assigned object
  newFrog.style.background = racer.color;
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);
  //4.Set frog's progress to 0 inside its object inside racer array
  racers[id].progress = 0;
  racers[id].lane = `frog-${id + 1}`;
  //5.Add each frog's progress to the screen
  const frogProgress = document.createElement("span");
  frogProgress.id = racers[id].name;
  document.getElementById(`frog-${id + 1}`).appendChild(frogProgress);
});
//6.Add style sheet in HTML file as a link

//create ranking array for Exercise 2.5
let ranking = [];

//----------------------------------------

//Exercise 2.4 Get them ready to hop and start the race

//1.Create function racingFrog with parameter racer
function racingFrog(racer) {
  //2.Calculate random hop distance
  let progress = racer.progress;
  const trackWidth = track.offsetWidth;

  const hopLength = (Math.floor(Math.random() * 100) / trackWidth) * 100;
  //3.Keep the frogs hopping until they reach 100%
  const bounce = setInterval(function () {
    progress += hopLength;

    if (progress > 100) {
      progress = 100;
      //4.Write message in console once frog has finished
      console.log(racer.name, " has finished!");
      clearInterval(bounce);

      ranking.push(racer);
    }

    document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`; //6.If frogs don't move, check for CSS propery to make them move
  }, Math.random() * 1000); //5.Add variable delay to simulate waiting
}

//7.Call racingFrog for each frog in the race
racers.forEach(function (racer) {
  racingFrog(racer);
});

//------------------------------------------

//Exercise 2.5 - Show the rankings

const endRace = setInterval(function () {
  //2.Push frog into array when it reaches the end
  if (ranking.length === racers.length) {
    //3.Write message in console when frogs have finished
    console.log(ranking);
    clearInterval(endRace);
  }
}, 500);
