const styles = document.createElement("link");
document.head.appendChild(styles);
styles.setAttribute("rel", "stylesheet");
styles.setAttribute("href", "styles.css");

const main = document.createElement("main");
document.body.appendChild(main);

const h1 = document.createElement("h1");
h1.innerText = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(h1);

const pHeader = document.createElement("p");
pHeader.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
main.appendChild(pHeader);

const h2 = document.createElement("h2");
h2.innerText = "The Slap Bet (Season 2, Episode 9)";
main.append(h2);

const pRating = document.createElement("p");
pRating.innerText = "IMDB Rating: 9.5";
main.append(pRating);

const imgRobin = document.createElement("img");
imgRobin.setAttribute("src", "images/robin-sparkles.jpg");
imgRobin.setAttribute("alt", "Robin Sparkles");
main.append(imgRobin);

const pContent1 = document.createElement("p");
pContent1.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";

main.append(pContent1);

const pContent2 = document.createElement("p");
pContent2.innerText =
  "In the end, Robin’s big secret was revealed- she was  a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single  “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";

main.append(pContent2);

const source = document.createElement("a");
source.innerText = "Source";
main.append(source);

source.setAttribute(
  "href",
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
);
