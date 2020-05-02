// Add your code here!

let main = document.createElement("main");

document.body.appendChild(main);

// header

let topHeader = document.createElement("h1");
topHeader.innerText = "The best How I Met Your Mother episode (according to fans)";

document.querySelector("main").appendChild(topHeader);

// main paragraph

let mainPara = document.createElement("p");
mainPara.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…"

document.querySelector("main").appendChild(mainPara);

// h2

let secondHeader = document.createElement("h2");
secondHeader.innerText = "The Slap Bet (Season 2, Episode 9)";

document.querySelector("main").appendChild(secondHeader);

// imdb rating

let imdb = document.createElement("p");
imdb.innerText = "IMDB Rating: 9.5";

document.querySelector("main").appendChild(imdb);

// img

let sparkly = document.createElement("img");
sparkly.setAttribute("src", "images/robin-sparkles.jpg");
sparkly.setAttribute("alt", "Robin Sparkles");

document.querySelector("main").appendChild(sparkly);

// summary 1

let summaryOne = document.createElement("p");
summaryOne.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";

document.querySelector("main").appendChild(summaryOne);

// summary 2

let summaryTwo = document.createElement("p");
summaryTwo.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";

document.querySelector("main").appendChild(summaryTwo);

// anchor guy

let anchor = document.createElement("a");
anchor.setAttribute("href", "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");
anchor.innerText = "Source";

document.querySelector("main").appendChild(anchor);

// style

let styleLink = document.createElement("link");
styleLink.setAttribute("rel", "stylesheet");
styleLink.setAttribute("href", "styles.css");

document.head.appendChild(styleLink);