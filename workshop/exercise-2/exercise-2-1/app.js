// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for(let i = 1; i <= FROGS; i++){
    // 2. Create li
    let lane = document.createElement('li');
    // 3. Create span and add it to the li
    let laneNumber = document.createElement('span');
    document.getElementById("track").appendChild(lane);
    lane.appendChild(laneNumber);
    // 4. Assign an id to each lane
    lane.setAttribute("id", `lane-${i}`);
    laneNumber.innerText = `${i}`;
}

//2.2
let racers = [];
//Lets add a property called randomNum to each frog object in the stable
frogStable.forEach(function (object){
    object.randomNum = Math.random();
})
//Sort a new array called frogStableRandom by the values of randomNum 
let frogStableRandom = frogStable.sort(function(a, b) {
    return Number(a.randomNum) - Number(b.randomNum);
});

//Push frogs to the array racers
for(let i = 1; i <= FROGS; i++){
    racers.push(frogStableRandom[i]);
}
console.log(racers);

//2.3
for(let i = 1; i <= FROGS; i++){
    let frog = document.createElement('span');
    document.getElementById(`lane-${i}`).appendChild(frog);
    frog.setAttribute("class", "frog");
    frog.setAttribute("id", racers[i-1].name);
    frog.setAttribute("id", frog);
    frog.style.background = racers[i-1].color;
    frog.innerText = `${racers[i-1].number}`;
    racers[i-1].progress = 0;
    racers[i-1].lane =`${i}`;

    let frogProgress = document.createElement('span');
    frogProgress.id = racers[i-1].name;
    document.getElementById(`lane-${i}`).appendChild(frogProgress);

}
console.log(racers);

//2.4
function racingFrog(frog){
    let progress = frog.progress;
    let width = track.offsetWidth;
    let hopDistance = ((Math.random() * 100) / width) * 100;

    let bounce = setInterval(function () {
        progress =progress + hopDistance;
        if (progress >= 100) {
            progress = 100;
            clearInterval(bounce);
            console.log(frog.name, "Finished!");
        }
    
        document.querySelector(frog.name .frog).style.left = `${progress}%`;
    }, Math.random() * 1000);
}

racers.forEach(function (frog) {
    racingFrog(frog);
});