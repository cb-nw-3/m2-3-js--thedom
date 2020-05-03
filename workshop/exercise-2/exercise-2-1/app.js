const frogs = 3;
let racers = [];
let ranking = [];

for (let numberOfLanes = 1; numberOfLanes <= frogs; numberOfLanes++) {
    let lane = document.createElement('li');
    document.querySelector('ol').appendChild(lane);
    let number = document.createElement('span');
    number.innerText = numberOfLanes;
    lane.appendChild(number);
    lane.id = `lane-${numberOfLanes}`;
}

for (let i = 0; i < frogs; i++) {
    const newFrog = frogStable[i];
    racers.push(newFrog); }

console.log(racers);

/* could not figure the next part on my own, edited the code below slightly to make the solution work*/

racers.forEach(function (racer, id) {
    const newFrog = document.createElement('span');
    newFrog.innerText = `${racer.number}`;
    newFrog.classList.add('frog');
    newFrog.style.background = racer.color;
    document.getElementById(`lane-${id + 1}`).appendChild(newFrog);
    racers[id].progress = 0;
    racers[id].lane = `lane-${id + 1}`;
    const frogProgress = document.createElement('span');
    frogProgress.id = racers[id].name;
    document.getElementById(`lane-${id + 1}`).appendChild(frogProgress);
  });
  
function racingFrog(racer) {
    let progress = racer.progress;
    const trackWidth = track.offsetWidth;
    const hopLength = (Math.floor(Math.random() * 100) / trackWidth) * 100;
    const bounce = setInterval(function () {
      progress += hopLength;
      if (progress > 100) {
        progress = 100;
        console.log(racer.name, 'has finished!');
        clearInterval(bounce);
        ranking.push(racer);
      }
  
        document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`;
        }, Math.random() * 1000);
  }
  
  racers.forEach(function (racer) {
    racingFrog(racer);
  });

  const endRace = setInterval(function () {
    if (ranking.length === racers.length) {
      console.log(ranking);
      clearInterval(endRace);
    }
  }, 500);
  