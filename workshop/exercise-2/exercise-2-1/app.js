// Preset values
const FROGS = 3;

function addStyleTag() {
  let style = document.createElement("link");
  styleTag.rel = "stylesheet";
  styleTag.href = "styles.css";
  return styleTag;
}

let ol = document.querySelector("#track");

// 4. Assign an id to each lane
function theLaneOne() {
  let lane = document.createElement("li");
  myDiv.classlist.add("track");
  return lane;
}

function theLaneTwo() {
  let lane = document.createElement("li");
  myDiv.classlist.add("track li");
  return lane;
}

function theLaneThree() {
  let lane = document.createElement("li");
  myDiv.classlist.add("track li:last-child");
  return lane;
}

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
// 3. Create span and add it to the li

// appending all children nodes or lanes to main parent lane
function theLane() {
  let allTheLanes = document.createElement("ol");
  allTheLanes.appendChild(theLaneOne("track"));
  allTheLanes.appendChild(theLaneTwo("track li"));
  allTheLanes.appendChild(theLaneThree("track li:last-child"));
}

// appending style tag and ol
document.head.appendChild(addStyleTag());
ol.appendChild(theLane());

// function theRating() {
//     let therate = document.createElement("p");
//     therate.innerText = "IMDB Rating: 9.5";
//     return therate;
//   }
