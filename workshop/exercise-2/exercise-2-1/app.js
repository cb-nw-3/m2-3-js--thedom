// Preset values
const FROGS = 3;
const track = document.querySelector('ol');
const mainDiv = document.querySelector('body');
let results = document.createElement('p');

for (let i = 1; i <= FROGS; i++){
    let newLane = document.createElement('li');
    let spanEl = document.createElement('span');

    
    spanEl.innerText = `${i}`
    newLane.id = `lane-${i}`;

    newLane.appendChild(spanEl);
    track.appendChild(newLane);
}

mainDiv.appendChild(results);
