const body = document.querySelector("body");
const head = document.querySelector("head");

const main = document.createElement("main");
body.appendChild(main);

const mainH1 = document.createElement("h1");
mainH1.innerText = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(mainH1);

const mainP1 = document.createElement("p");
mainP1.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
main.appendChild(mainP1);

const mainH2 = document.createElement("h2");
mainH2.innerText = "The Slap Bet (Season 2, Episode 9)";
main.appendChild(mainH2);

const mainP2 = document.createElement("p");
mainP2.innerText = "IMDB Rating: 9.5";
main.appendChild(mainP2);

const mainImg1 = document.createElement("img");
mainImg1.setAttribute("src", "images/robin-sparkles.jpg");
mainImg1.setAttribute("alt", "Robin Sparkles");
main.appendChild(mainImg1);

const mainP3 = document.createElement("p");
mainP3.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
main.appendChild(mainP3);

const mainP4 = document.createElement("p");
mainP4.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
main.appendChild(mainP4);

const mainA = document.createElement("a");
mainA.href =
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
mainA.innerText = "Source";
main.appendChild(mainA);

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";
head.appendChild(cssLink);
