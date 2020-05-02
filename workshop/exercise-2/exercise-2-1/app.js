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
racers.forEach(function (racersParameter1, racersIndex) {
  //creating at least one element inside the lane `li`
  const threeFrogs = document.createElement('span');
  //show the name/number of the frog in the lane; put racer.name is I want to show name
  threeFrogs.innerText = `${racersParameter1.number}`;
  //Add a class of `frog`
  threeFrogs.classList.add('frog');
  //set the background color from frogStable element color
  threeFrogs.style.background = racersParameter1.color;
  //append frogs to each lane that has an id of 'lane-1' etc.
  document.getElementById(`lane-${racersIndex + 1}`).appendChild(threeFrogs);

  
  // Set the frog's progress to 0 inside its object, inside of the racers array.
  
})
//added stylesheet in html at this point
const styleSheetLink = document.createElement('link');
styleSheetLink.rel = "stylesheet";

document.head.appendChild(styleSheetLink);
