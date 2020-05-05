// Preset values
const FROGS = 3;
const track = document.getElementById("track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let numLane = ; numLane <= FROGS; numLane++) {
  // 2. Create li
let lane = document.createElement("li");
track.appendChild(lane);
// 3. Create span and add it to the li
let span1 = document.createElement('span');
span1.innerText = 'numLane';
lane.appendChild(span1);
// 4. Assign an id to each lane
lane.id = `frog-${numLane}`;
}
