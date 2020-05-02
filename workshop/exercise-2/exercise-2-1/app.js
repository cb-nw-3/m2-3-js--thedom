
const FROGS = 3;
const racers = [];

for (i = 0; i < FROGS; i++) {
    const lanesSpan = document.createElement('span');
    lanesSpan.innerText = `${i + 1}`;

    const lane = document.createElement('li');
    lane.setAttribute('id', `lane-${i + 1}`); // lane ID

    track.appendChild(lane).appendChild(lanesSpan);
}

for (i = 0; i < FROGS; i++) {
    const newFrog = frogStable[i];
    racers.push(newFrog);
}

let ranking = [];

for (i = 0; i < FROGS; i++) {
    const newFrog = document.createElement('span');
    newFrog.innerText = racers[i]['number'];
    newFrog.classList.add('frog');
    newFrog.style.background = racers[i]['color'];
    document.getElementById(`lane-${i + 1}`).appendChild(newFrog);

    racers[i].elem = newFrog;

    racers[i].progress = 0;
}


var frogClass = document.querySelectorAll('.frog');
for (i = 0; i < FROGS; i++) {
    frogClass[i].id = 'frog-' + i;
}


function racingFrog(frogObj) {
    let myVar = setInterval(
        function race() {
            frogObj['progress'] += (Math.random() * 10);
            if (frogObj['progress'] >= 100) {
                frogObj['progress'] = 100;
                clearInterval(myVar);
                console.log(frogObj['name'] + ' has finished the race.')
                
            }
            frogObj.elem.style.left = `${frogObj['progress']}%`;
        }, 
        Math.random() * 1000
    ); 
    }

racers.forEach(function(racer) {
    racingFrog(racer, racers)
});
