// a little bit of linkage and preparation

const headHTML = document.querySelector("head");
const bodyHTML = document.querySelector("body");

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./styles.css";
headHTML.appendChild(cssLink);

const clockDiv = document.createElement("div");
clockDiv.classList.add("clock");
bodyHTML.appendChild(clockDiv);

//get clock datas

const exampleDate = new Date();
const exampleDateElements = String(exampleDate).split(" ");

exampleDateElements.forEach(function (i) {
  console.log(i);
});

function clock() {
  const currentDate = new Date();
  const dateElements = String(currentDate).split(" ");
  clockDiv.innerText = dateElements[4];
}

let clockinterval = setInterval(clock, 1000);
