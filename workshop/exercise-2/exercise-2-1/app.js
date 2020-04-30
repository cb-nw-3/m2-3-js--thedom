// Preset values
const FROGS = 3;

// ##########################################################################
// ########################### Exercises 2.1 ################################
// ##########################################################################

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for(let i = 1; i <= FROGS; i++) {

  // 2. Create li
  let lane = document.createElement('li');
  document.querySelector('ol').appendChild(lane);

  // 3. Create span and add it to the li
  let trackNumber = document.createElement('span');
  document.querySelectorAll('li').forEach(listItem => {
    listItem.appendChild(trackNumber);
    trackNumber.innerText = i;

    // 4. Assign an id to each lane
    lane.setAttribute('id',`lane-${i}`);
  })

}

// ##########################################################################
// ########################### Exercises 2.2 ################################
// ##########################################################################

let racers = [];

for(let i = 0; i < FROGS; i++) {
  // console.log(frogStable[i]);
  racers[i] = frogStable[i];
  racers[i].progress = 0;
  racers[i].id = i+1;
}
console.log(racers);

// ##########################################################################
// ########################### Exercises 2.3 ################################
// ##########################################################################

//Select all of the <li> elements
// let lanes = document.getElementById(`lane-${x}`), x;

// //Create a <div> element in each track, to represent the frogs
// let froggy = document.createElement('span');
// froggy.setAttribute('class','frog');
//to make sure that it was applied to all tracks



//OK so, need to rework this, create specific IDs to each Li track like
// frog-1, frog-2 and frog-3 so that you can use .appendChild()

//loop should be done on racers array not lanes.
//ids should be 1, 2 and 3, so array indexes should be 0+1, 1+1, 2+1;

// for(x = 0; x < lanes.length; x++) {

//   // console.log(`Hello ${x}`);
//   // console.log('Element: ', lanes[x]);

//   //Append child only appends to the last child (last li, parent is ol)
//   //need to add a .cloneNode(true) method to each element that is being added
//   lanes[x].appendChild(froggy.cloneNode(true));
//   console.log(`Frog number ${x} has the color ${racers[x].color}`)
//   //add the colors from the selected frogs and set their progress to 0
//   froggy.style.cssText = `background-color: ${racers[x].color}`;

//   racers[x].progress = 0;

// }

// racers.forEach(function (racer, id) {
//   // add the frogs to a lane
//   // for now, frogs are simply shapes in the lane.
//   const newFrog = document.createElement('span');
//   newFrog.innerText = `${racer.number}`;
//   newFrog.setAttribute('class','frog');
//   newFrog.style.cssText = `background-color: ${racer.color}`;
//   document.getElementById(`lane-${}`)
// });


racers.forEach( racer => {
  let newFroggy = document.createElement('div');
  newFroggy.innerText = `${racer.number}`;
  newFroggy.setAttribute('class','frog');
  newFroggy.style.cssText = `background-color: ${racer.color}`;
  console.log(newFroggy);
  document.getElementById(`lane-${racer.id}`).appendChild(newFroggy);
})