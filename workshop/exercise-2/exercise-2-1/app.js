//adding js
// const body = document.getElementsByTagName('body');

// const script = document.createElement('script');
// script.setAttribute("src", "../assets/frogStable.js");

// document.body.appendChild(script);


//adding css
const head = document.getElementsByTagName('head');

const links = document.createElement('link'); 
links.rel = 'stylesheet';  
links.type = 'text/css'; 
links.href = '../assets/styles.css';

document.head.appendChild(links);

// Preset values
const FROGS = 3;

const track = document.querySelector("#track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane
for (let lane = 1; lane <= FROGS; lane++) {
    let list = document.createElement('li');
    track.appendChild(list);  
    let rows = document.createElement('span');

    rows.innerText = lane;
    list.appendChild(rows);

    list.id = 'frog-' + (lane);
}

// 2.2 - Call frogs
let racers = [];

let pickFrog = [];
while (pickFrog.length < frogStable.length) {

    let randomNumber = Math.floor(Math.random() * frogStable.length);
    if (pickFrog.includes(frogStable[randomNumber]) === false)
    {
        pickFrog.push(frogStable[randomNumber]);
    }    
}


for (i = 0; i < FROGS; i++) {
    let frog = pickFrog[i];

    frog.progress = 0;
    racers.push(frog);
}


console.log(racers);

//2.3 - Lines
racers.forEach(function(icon, id) {
    let addingFrog = document.createElement('span');

    // addingFrog.innerText = `${icon.name}`;
    addingFrog.classList.add("frog");
    addingFrog.style.background = icon.color;  
    
    document.querySelector(`#frog-${id + 1}`).appendChild(addingFrog);
    
    for (let x = 1; x <= 1; x++) {
        let crazyFrog = document.createElement('img');
        crazyFrog.style.width = '40px';
        crazyFrog.style.transform = 'rotate(90deg)';
        crazyFrog.setAttribute("src", "../assets/frogx50.png");
        addingFrog.appendChild(crazyFrog);
    }

    racers[id].progress = 0;
    racers[id].list = `frog-${id + 1}`;

    let frogRunning = document.createElement('span');
    frogRunning.id = racers[id].number;
    document.querySelector(`#frog-${id + 1}`).appendChild(frogRunning);
});


let ranking = [];

// Exercise 2.4
function racingFrog(icon) {
    let run = icon.progress;
    let distance = track.offsetWidth;

    let length = (Math.floor(Math.random() * 100) / distance) * 100;

    let bounce = setInterval(function () {

    run += length;

    if (run > 100) {
        run = 100;
        clearInterval(bounce);
        ranking.push(icon);

        console.log(icon.name, 'has reached the end!');
    }

    document.querySelector(`#${icon.list} .frog`).style.left = `${run}%`;
  }, Math.random() * 1000);
}

racers.forEach(function (icon) {
    racingFrog(icon);
});

let endRace = setInterval(function () {
    if (ranking.length === racers.length) {
        console.log(ranking);
        clearInterval(endRace);
    }
}, 1000);