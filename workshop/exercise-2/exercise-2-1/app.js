// Preset values
const FROGS = 3;

//                ----- 2.1 Set up the track -----
for (let i = 1; i <= 3; i++){
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
// 2. Create li    
// 3. Create span and add it to the li
// 4. Assign an id to each lane
let lane = document.createElement("li");
let laneNum = document.createElement("span");
laneNum.innerText = i;
lane.appendChild(laneNum);
lane.id = `lane-${i}`;
document.getElementById("track").appendChild(lane);
}

//                ----- 2.2 Call in the frogs!-----
let racers = [];
let ranking = [];
//Let's add a property called randomNum to each frog object
frogStable.forEach(function(obj){
    obj.randomNum = Math.random();
})

//Sort a new array called randomStable by the values of randomNum
let randomStable = frogStable.sort(function(a, b) {
    return Number(a.randomNum) - Number(b.randomNum);
});

//Push frogs to the array racers until we hace enough
for(let i = 1; i <= FROGS; i++){
    racers.push(randomStable[i-1]);
}
console.log(racers);

//           ----- 2.3 Call in the frogs!-----
for (let i = 1; i <= FROGS; i++){
    let frog = document.createElement("span");
    frog.className = "frog";
    frog.id = racers[i-1].name;
    frog.innerText = racers[i-1].number;
    frog.finished = false;
    frog.style.backgroundColor = racers[i-1].color;
    racers[i-1].progress = 0;
    racers[i-1].lane = i;
    document.getElementById(`lane-${i}`).appendChild(frog);
}

//           ----- 2.4 Make 'em hop!-----
function racingFrog(frog){
    //random hop length
    let distance = (Math.floor(Math.random()*100) *100)/(document.getElementById("track").offsetWidth);
    let progress = frog.progress;
    //The hopping mecanism
    let hop = setInterval(function(){
        progress = progress + distance;

        document.querySelector(`#${frog.name}`).style.left = `${progress}%`;

        if(progress >= 100) {
            clearInterval(hop);
            ranking.push(frog.name);
            console.log(`${ranking[ranking.length - 1]} is position number ${ranking.length}`)
            console.log(`${frog.name} finished!`);
            progress = 100;
        }
    }, 500);
}

racers.forEach(function(frog) {
    racingFrog(frog);
});

//2.5

