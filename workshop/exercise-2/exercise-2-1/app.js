// Preset values
const FROGS = 3;

//Exercise 2.1 - Set up the track
var track = document.querySelector("#track");

for (i = 1; i <= FROGS; i++) {
  //generate a "lane" for each frog
  var lane = document.createElement("li");
  track.appendChild(lane);
  //Inside each `li` there should be a `span`
  var number = document.createElement("span");
  //`span` that contains the lane number.
  number.innerText = i;
  lane.appendChild(number);

  //set id for 'li'
  lane.id = `lane-${i}`;
}

//Exercise 2.2 - Call in the frogs!
// use 'let' instead of 'const' as you want to modify the array
let racers = [] 

//add first three frogs from frogStable to empty array racers
for (let x = 0; x < FROGS; x++) {
    const threeFrogs = frogStable[x];
    racers.push(threeFrogs);
  }

//verify that I see 3 frogs in console  
console.log(racers);


//Exercise 2.3 - Line 'em up!
racers.forEach(function (racersPlayer, racersIndex) {
  //creating at least one element inside the lane `li`
  const threeFrogs = document.createElement('span');
  //show the name/number of the frog in the lane; put racer.name is I want to show name
  threeFrogs.innerText = `${racersPlayer.number}`;
  //Add a class of `frog`
  threeFrogs.classList.add('frog');
  //set the background color from frogStable element color
  threeFrogs.style.background = racersPlayer.color;
  //append frogs to each lane that has an id of 'lane-1', 'lane-2', 'lane-3'
  document.getElementById(`lane-${racersIndex + 1}`).appendChild(threeFrogs);

    // Set the frog's progress to 0 inside the racers array
  racers[racersIndex].progress = 0;
  //inside its object
  racers[racersIndex].lane = `lane-${racersIndex + 1}`;
  
  //create 3rd span for progress
  const frogProgress = document.createElement('span');
  frogProgress.racersIndex = racers[racersIndex].name;
  document.getElementById(`lane-${racersIndex + 1}`).appendChild(frogProgress);
})

//added stylesheet in html at this point
const styleSheetLink = document.createElement('link');
styleSheetLink.rel = "stylesheet";
document.head.appendChild(styleSheetLink);

//Exercise 2.4 - Make 'em hop!
let ranking = [];

function racingFrog(racersPlayer) {
  let progress = racersPlayer.progress;
  const trackLength = track.offsetWidth;

  //set a random hop; math.random() is a number between zero and 1
  //need to *100 before / by trackLength
  //the hop will be very slow without *99; just a random number
  const hopLength = ((Math.random() * 100) / trackLength)*99;

  const stop = setInterval(function () {
    // increase the progress by the random hopLength
    //remember that progress was set to 0
    progress += hopLength;
    // Check if progress is more than 100%. If so, set it to 100
    if (progress > 100) {
      progress = 100;
      console.log('Bravo', racersPlayer.name, '! You finished the race !');
      clearInterval(stop);

      // (for Exercise 2.5)
      ranking.push(racersPlayer);
    }

    // Moving the frog on the screen
    //css .style.left so that the frog start on the left?
    //Math.random()*1000 to add a variable delay
    document.querySelector(`#${racersPlayer.lane} .frog`).style.left = `${progress}%`;
  }, Math.random() * 1000);
}

// startRace
racers.forEach(function (racersPlayer) {
  // call this function once for each racer.
  racingFrog(racersPlayer);
});

//Exercise 2.5 - And the Winner is
let rankingInterval = setInterval(function() {
  if (racers.length === ranking.length) {
    console.log('All going to the semifinals against the Turtles!');
    ranking.forEach(function(racersPlayer, racersIndex) {
      const announcement = document.createElement('p');
      announcement.innerText = `Top ${racersIndex + 1}: ${racersPlayer.name}`;
      document.body.appendChild(announcement);
    })
    console.log(ranking);
    clearInterval(rankingInterval);
  }
}, 200);