// Preset values
const FROGS = 3;






// Exercise 2.1 - Set up the track


for (i = 0; i < FROGS; i++)
{
   
    const lane = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = i;

    let lane_id = "lane-"+i;
    lane.id = lane_id;

    track.appendChild(lane);
    lane.appendChild(span);


}

// Exercise 2.2 - Call in the frogs!

let racers =[];

let frogs = frogStable;

//### Challenge 1 shuffle the frogs

var shuffledFrogs = [];
while (shuffledFrogs.length < frogs.length) {

    let randomNumber = Math.floor(Math.random() * frogs.length);
    if (shuffledFrogs.includes(frogs[randomNumber]) === false)
    {
        shuffledFrogs.push(frogs[randomNumber]);
    }    
 }


for (i = 0; i < FROGS; i++) {
    let frog = shuffledFrogs[i];

    frog.progress = 0;
    racers.push(frog);
}

var racing = [];
// sdsdsd






const styleSheetLink = document.createElement('link');
styleSheetLink.rel = "stylesheet";

document.head.appendChild(styleSheetLink);

console.log(racers);


// ### Exercise 2.3 - Line 'em up!


for (i = 0; i < FROGS; i++) {
    let lane_id = "lane-"+i;

    let laneToAddFrogTo = document.getElementById(lane_id);
    let frog = racers[i];

    let frogElement = document.createElement('frog');
    frogElement.innerText = frog.number;
    frogElement.classList.add("frog");

    let frogImage = document.createElement('img');
    frogImage.src = "../assets/frogx50.png";
    frogImage.alt = "Robin Sparkles";
  //  frogImage.width = "50";
    frogImage.style.transform = 'rotate(90deg)';

    frogElement.appendChild(frogImage);
    

    //frogElement.style.backgroundColor = frog.color;

    laneToAddFrogTo.appendChild(frogElement);

    racers[i].progress = 0;

}
styleSheetLink.href = "../assets/styles.css";

// ### Exercise 2.4 - Make 'em hop!

let ranking = [];

function racingFrog(frog, laneID) {
    let hopLength = Math.random()*10;
    let variableDelay = Math.random()*100;
    variableDelay = variableDelay + 200;

   //console.log(hopLength);
    
    let progress = 0;

  let frogHopInterval = setInterval(
        function(){
            if (progress < 100) {
                progress = progress + hopLength;

            //console.log(progress);
            }
            if (progress >= 100) {
                progress = 100;
            }

            let laneToMoveFrogIn = document.getElementById(laneID);
            const frogInLane = laneToMoveFrogIn.querySelector('frog');
            frogInLane.style.left = progress+'%';
            //frogInLane.innerText = hopLength;

            if (progress >= 100 ) {
                //console.log('frog has reached the end');
                clearInterval(frogHopInterval);
                var rankString = "Position "+(ranking.length+1)+": "+frog.name+" number "+frog.number;
                ranking.push(rankString);
                // ranking.push("Position ",ranking.legnth+1,": ",frog.name," number",frog.number);
            }
         }, 
         variableDelay);
}



 

for (i = 0; i < FROGS; i++) {
    let laneID = "lane-"+i;
    racingFrog(racers[i], laneID);
}

// ### Exercise 2.5 - And the Winner is...

let rankingInterval = setInterval(
    function()
    {
        if (racers.length === ranking.length)
        {
            console.log('race finished');

            ranking.forEach(
                function(element) {
                    const announcement = document.createElement('p');
                    announcement.innerText = element;
                    announcement.style.textAlign = 'center';
                    document.body.appendChild(announcement);
                }
            )

            console.log(ranking);
    
            clearInterval(rankingInterval);
        }
    }, 200);








