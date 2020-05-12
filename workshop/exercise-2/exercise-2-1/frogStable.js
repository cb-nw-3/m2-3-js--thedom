const frogStable = [
  {
    name: 'Hopper',
    color: 'blue',
    number: '32',
  },
  {
    name: 'Legs',
    color: 'red',
    number: '79',
  },
  {
    name: 'Bouncer',
    color: 'brown',
    number: '6',
  },
  {
    name: 'Springs',
    color: 'purple',
    number: '48',
  },
  {
    name: 'Fred',
    color: 'black',
    number: '8',
  },
];


//2.2
const racers = [];
while(racers.length < FROGS){
  let j = frogStable.length;
  let i = parseInt(Math.random()*j);
  racers.push(frogStable[i]);
  frogStable.splice(i,1);
}

//2.3
racers.forEach((frogObj,index) => { 
//assign variable to each lane number 
  let lane = document.querySelector(`#lane-${index+1}`);
  let frogContainer = document.createElement('div');
  let frogNumber = document.createTextNode(`${frogObj.number}`);

  frogContainer.appendChild(frogNumber);
  frogContainer.setAttribute('style',`color:${frogObj.color}`);
  frogContainer.classList.add('frog');
  lane.appendChild(frogContainer);
//add progress key to each racer and set to 0
  frogObj.progress = 0;
  frogObj.lane = `lane-${index+1}`;
})

//2.4

//racingFrog function with one parameter Frog

const ranking = [];

racingFrog = (frog) => {
  let laneLength = document.getElementById("lane-1").offsetWidth;
  let frogDiv = document.querySelector(`#${frog.lane} > div`);

  let intID = setInterval(() => {
    let hop = (Math.random()*laneLength)/laneLength * 100;

    frog.progress += hop;
    frogDiv.style.left = `${frog.progress}%`;
  
    if(frog.progress > 100){
      console.log(`${frog.number} has finished the race`)
      ranking.push(frog.number);
      frogDiv.style.left = `100%`;
      clearInterval(intID);
    }

    if(ranking.length === FROGS){
      let results = document.querySelector('p');
      let str = '';
      for(let i = 1; i <= FROGS; i++){
        str += `${i} place: Number ${ranking[i-1]} \n`;
      }
      results.innerText = str;
    }
  }, 1000);
}

for(let i=0; i <racers.length; i++){
  racingFrog(racers[i]);
}



