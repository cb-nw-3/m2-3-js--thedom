// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

let racers = [];
let ranking = [];

for (let i = 1; i <= FROGS; i++) {
  let lane = document.createElement("li");
  document.getElementById("track").appendChild(lane);
  lane.setAttribute("id", `lane-${i}`);

  let laneNumber = document.createElement("span");
  laneNumber.innerText = i;
  lane.appendChild(laneNumber);
}

for (let i = 1; i <= FROGS; i++) {
  racers.push(frogStable[i]);
}

let newFrog;
let counter = racers.length;

racers.forEach(function (racer) {
  newFrog = document.createElement("img");
  newFrog.innerText = `${racers[counter - 1].number}`;
  newFrog.setAttribute("src", "../assets/frog.png");
  document.querySelector(`#lane-${counter}`).appendChild(newFrog);
  newFrog.classList.add("frog");
  newFrog.id = racer.name;
  racers[counter - 1].progress = 0;
  counter -= 1;
});

function racingFrog(racer) {
  let hop = Math.round(Math.random() * 100);

  let hopInterval = setInterval(function () {
    racer.progress += hop;

    if (racer.progress >= 100) {
      racer.progress = 100;
      clearInterval(hopInterval);
      console.log(`${racer.name} has reached the finish line!`);
      ranking.push(racer);
      if (ranking.length === 3) {
        console.log(
          `The race is over! ${ranking[0].name} came in first, ${ranking[1].name} came in second and ${ranking[2].name} came in last.`
        );
      }
    }
    document.querySelector(`#${racer.name}`).style.left = `${racer.progress}%`;
  }, Math.random() * 1000);
}

for (let i = 0; i < racers.length; i++) {
  racingFrog(racers[i]);
}
