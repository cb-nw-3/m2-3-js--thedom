// Add your code here!
let main = document.createElement("main");
main.style.background = "#fafafa";
main.style.borderRadius = "4px";
main.style.boxShadow = "8px 10px 25px 0 rgba(128, 128, 128, 0.44)";
main.style.minWidth = "320px";
main.style.maxWidth = "600px";
main.style.margin = "36px";
main.style.padding = "4px 32px 32px";

let h1 = document.createElement("h1");
h1.innerText = "The best How I Met Your Mother episode (according to fans)";
h1.style.fontFamily = "'Open Sans', sans-serif";
h1.style.textAlign = "center";
main.appendChild(h1);

let p1 = document.createElement("p");
p1.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
p1.style.fontSize = "17px";
p1.style.lineHeight = "1.5em";
main.appendChild(p1);

let h2 = document.createElement("h2");
h2.innerText = "The Slap Bet (Season 2, Episode 9)";
h2.style.fontFamily = "'Open Sans', sans-serif";
h2.style.textAlign = "left";
main.appendChild(h2);

let p2 = document.createElement("p");
p2.innerText = "IMDB Rating: 9.5";
p2.style.fontSize = "17px";
p2.style.lineHeight = "1.5em";
main.appendChild(p2);

let img = document.createElement("img");
img.setAttribute("src", "images/robin-sparkles.jpg");
img.setAttribute("alt", "Robin Sparkles");
img.style.border = "#fafafa";
img.style.borderRadius = "4px";
img.style.boxShadow = "4px 4px 14px rgba(128, 128, 128, 0.4)";
img.style.width = "100%";
main.appendChild(img);

let p3 = document.createElement("p");
p3.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
p3.style.fontSize = "17px";
p3.style.lineHeight = "1.5em";
main.appendChild(p3);

let p4 = document.createElement("p");
p4.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
p4.style.fontSize = "17px";
p4.style.lineHeight = "1.5em";
main.appendChild(p4);

let a = document.createElement("a");
a.innerText = "Source";
a.setAttribute(
  "href",
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
);
a.style.color = "#174e7c";
a.style.display = "block";
a.style.fontWeight = "700";
a.style.marginTop = "auto";
a.style.textAlign = "right";
a.style.textDecoration = "none";
main.appendChild(a);

document.body.appendChild(main);
document.body.style.background =
  "rgba(246, 187, 33, 0.8) url(./images/yellow-umbrella.jpg) no-repeat";
document.body.style.backgroundSize = "100%";
document.body.style.fontFamily = "'Playfair Display', serif";
