const track = document.getElementById('track');

const FROGS = 3;

for(i=1; i <= FROGS; i++){
    let li = document.createElement("li");
    track.appendChild(li);
    // This Assigns a number to a lane
    let span = document.createElement("span");
    li.appendChild(span)
    span.innerText = `${i}`
    li.id = `Lane-${i}`
}

let racers = []
// This shuffles an array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        // This assign to j a random value between 0 and our array length
        var j = Math.floor(Math.random() * (i + 1));
        //At each loop, i goes down the array from end to beginning and switches 
        // the value at i position with a random value at j position
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(frogStable)

// This assigns racer objects to the racers array
for(i=0; i < FROGS; i++){
    let newRacer = frogStable[i];
    racers.push(newRacer)
}
console.log(racers)

racers.forEach(function assignLane(racer, laneId){
    // This assigns a frog to a lane
    // Lane id is the index of the racer in the array 
    // but since it counts racers we can use it to assign
    // the racers to a lane
    let frogInsert = document.createElement("span");
    document.getElementById(`Lane-${laneId + 1}`).appendChild(frogInsert);
    racer.assignedLane = `Lane-${laneId + 1}`
    // This gives the frog a number
    frogInsert.innerText = ` ${racer.number}`;
    // This styles the frogs
    frogInsert.classList.add('frog');
    frogInsert.style.background = racer.color;
    // This assigns the frogs progress
    racers[laneId].progress = 0;
    
    // This prints the frogs progress to a span
    // let progressPrint = document.createElement("span")
    // progressPrint.innerText = `The frog progress is ${racer.progress}`
    // document.getElementById(`Lane-${laneId + 1}`).appendChild(progressPrint);
})

let ranking = []

function racingFrog (frogObject){
    let progress = frogObject.progress;
    let trackLength = document.getElementById("track").offsetWidth
    
    

    let hopDistance = Math.round(Math.random()*trackLength)
    

    let hopInterval = setInterval(function (){
        progress = progress + hopDistance
        
        if(progress > trackLength - 50){
            progress = trackLength - 25
            console.log(`Congrats ${frogObject.name} you've finished the race`);
            ranking.push(frogObject)
            clearInterval(hopInterval)
            
        }
        document.querySelector(`#${frogObject.assignedLane} .frog`).style.left = `${progress}px`
    }, (Math.random() * 5000))
    
}


let rankingPrint = setInterval(function (){
    if(ranking.length === 3){
        let announcerRanking = document.createElement("p")
        document.getElementById("announcer").appendChild(announcerRanking)
        announcerRanking.innerText = `Here is the final ranking: in first place ${ranking[0].name} in second ${ranking[1].name} and last but not least ${ranking[2].name} !`
        console.log(`Here is the final ranking: in first place ${ranking[0].name} in second ${ranking[1].name} and last but not least ${ranking[2].name}`)
        clearInterval(rankingPrint)
    }
}, 100)


let intervalCounter = 0

let startCountdown = setInterval(function () {
    intervalCounter += 1
    if(intervalCounter === 1){
        let ready = document.createElement("p")
        document.getElementById("announcer").appendChild(ready)
        
        ready.innerText = "Ready...."
        }
    if(intervalCounter === 2){
        let set = document.createElement("p")
        document.getElementById("announcer").appendChild(set)
        set.innerText = "Set...."
        }
    if(intervalCounter === 3){
        let go = document.createElement("p")
        document.getElementById("announcer").appendChild(go)
        go.innerText = "GO !!!!!!!!!!!!!"
        racingFrog(racers[0])
        racingFrog(racers[1])
        racingFrog(racers[2])
        clearInterval(startCountdown)
    }
    
}, 1000)