// Preset values
const FROGS = 3;
const track = document.getElementById('track');


for (let x = 1; x <= FROGS; x++) {
    let lane = document.createElement('li');
    track.appendChild(lane);
  
    let number = document.createElement('span');
    number.innerText = x;
    lane.appendChild(number);
  
    lane.id = `frog-${x}`;
  }
let racers = [];
for (let i = 0; i < FROGS; i++) {
    const newFrog = frogStable[i];
    racers.push(newFrog);
  }
  console.log(racers);

racers.forEach(function (Myrace, id) {
    const newFrog = document.createElement('span');
    newFrog.innerText = `${Myrace.number}`;
    newFrog.classList.add('frog');
    newFrog.style.background = Myrace.color;
    document.getElementById(`frog-${id + 1}`).appendChild(newFrog);
  
    racers[id].progress = 0;
    racers[id].lane = `frog-${id + 1}`;

    const MyFrog = document.createElement('span');
    MyFrog.id = racers[id].name;
    document.getElementById(`frog-${id + 1}`).appendChild(MyFrog);
  });

let ranking = [];
function racingFrog(racer) {
  let progress = racer.progress;
  const trackWidth = track.offsetWidth;

  const hopLength = (Math.floor(Math.random() * 100) / trackWidth) * 100;

  const bounce = setInterval(function () {
    console.log("getting called inside interval")
    progress += hopLength;
    if (progress > 100) {
      progress = 100;
      console.log(racer.name, ' win !');
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
}, 1000);