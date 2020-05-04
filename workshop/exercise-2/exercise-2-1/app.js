// Preset values
const FROGS = 3;

// ========================
// 2.1
// ========================

// Get ol element
const myOl = document.getElementById("track");

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let index = 1; index <= FROGS; index++) {
  // 2. Create li
  // <li id="lane-1"> <span> </span> </li>
  // <li id="lane-2"> <span> </span> </li>
  // <li id="lane-3"> <span> </span> </li>
  const myLane = document.createElement("li");

  // 4. Assign an id to each lane
  myLane.id = "lane-" + index;

  // 3. Create span and add it to the li
  const mySpan = document.createElement("span");
  mySpan.textContent = index;

  myLane.appendChild(mySpan); // li with specific(lane-X) IDs will have span added as child
  myOl.appendChild(myLane);
}

// ========================
// 2.2
// ========================
let racers = [];

for (let index = 0; index < FROGS; index++) {
  //Add frogStable to my racers Array
  racers.push(frogStable[index]);
}

console.log(racers);

// ========================
// 2.3
// ========================
for (let index = 0; index < racers.length; index++) {
  const mySecondSpan = document.createElement("span");
  mySecondSpan.textContent = racers[index].number;
  mySecondSpan.classList.add("frog");
  mySecondSpan.id = "frog-" + (index + 1);
  mySecondSpan.style.background = racers[index].color;

  const myLane = document.getElementById("lane-" + (index + 1));
  myLane.appendChild(mySecondSpan);
}

const myHead = document.querySelector("head");
const myCss = document.createElement("link");
// <link rel="stylesheet" type="text/css" href="test.css" />
myCss.rel = "stylesheet";
myCss.type = "text/css";
myCss.href = "../assets/styles.css";
myHead.appendChild(myCss);

// ========================
// 2.4 **?**
// ========================
function racingFrog() {
  const finish = 100;

  setInterval(function () {
    if (document.getElementById("frog-1").style.left != finish) {
      const speed = (Math.floor(Math.random() * 100) / myOl.offsetWidth) * 8000;
      document.getElementById("frog-1").style.left += speed + "px";
    }
    if (document.getElementById("frog-2").style.left != finish) {
      const speed = (Math.floor(Math.random() * 100) / myOl.offsetWidth) * 8000;
      document.getElementById("frog-2").style.left += speed + "px";
    }
    if (document.getElementById("frog-3").style.left != finish) {
      const speed = (Math.floor(Math.random() * 100) / myOl.offsetWidth) * 8000;
      document.getElementById("frog-3").style.left += speed + "px";
    }
  }, Math.random() * 1000);
}

racingFrog();

// ========================
// 2.5 **?**
// ========================
