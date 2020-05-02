// Preset values
const FROGS = 5;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane

for (let i = 1; i <= 3; i++) {
    let lane = document.createElement("li");
    let laneId = "lane-" + i;
    lane.setAttribute("id", laneId);
    lane.innerHTML = "<span>" + i + "</span>";
    document.querySelector("ol").appendChild(lane);
}

let racers = [];

for (let i = 1; i <= 3; i++) {
    let pickNum = Math.floor(Math.random() * FROGS);
    if (racers.includes(frogStable[pickNum]) != true) {
        racers.push(frogStable[pickNum])
    } else {
        i--;
    }
}

for (let i = 0; i < 3; i++) {
    let frogContender = document.createElement("span");
    frogContender.classList.add("frog");
    frogContender.style.background = racers[i]["color"];
    frogContender.setAttribute("id", racers[i]["name"]);
    racers[i]["progress"] = 0;
    frogContender.innerText = racers[i]["name"] + " / " + racers[i]["number"] + " / " + racers[i]["progress"];
    document.querySelectorAll("li")[i].appendChild(frogContender);
}

let ranking = [];

function racingFrog(frogRacer) {
    let raceProgress = setInterval(function () {
        if (frogRacer["progress"] < 100) {
            frogRacer["progress"] += Math.floor(Math.random() * 50);
            if (frogRacer["progress"] > 100) {
                document.querySelector("#" + frogRacer["name"]).style.left = 100 + "%";
            } else {
                document.querySelector("#" + frogRacer["name"]).style.left = frogRacer["progress"] + "%";
            }
        } else {
            ranking.push(frogRacer);
            clearInterval(raceProgress);
        }
    }, Math.random() * 1000);
};

for (let i = 0; i < 3; i++) {
    racingFrog(racers[i]);
}

function finishLine() {
    console.log("Congratulations to all the contestants!");
    console.log("First place: " + ranking[0]["name"]);
    console.log("Second place: " + ranking[1]["name"]);
    console.log("Third place: " + ranking[2]["name"]);
}

let finalRank = setInterval(function () {
    if (ranking.length === 3) {
        finishLine();
        clearInterval(finalRank);
    }
}, 5)
