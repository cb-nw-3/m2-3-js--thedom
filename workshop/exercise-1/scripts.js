var bodyTag = document.querySelector("body");
var mainTag = document.createElement("main");
var mainHeader = document.createElement("h1");
mainHeader.innerText =
  "The best How I Met Your Mother episode (according to fans)";
mainTag.append(mainHeader);
var paragraphDesc = document.createElement("p");
paragraphDesc.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
mainTag.append(paragraphDesc);
var episodeHeader = document.createElement("h2");
episodeHeader.innerText = "The Slap Bet (Season 2, Episode 9)";

mainTag.append(episodeHeader);
var ratingParagraph = document.createElement("p");
ratingParagraph.innerText = "IMDB Rating: 9.5";
mainTag.append(ratingParagraph);
var imageRobin = document.createElement("img");
imageRobin.setAttribute("src", "images/robin-sparkles.jpg");
imageRobin.setAttribute("alt", "Robin Sparkles");
mainTag.append(imageRobin);
var bodyParagraph = document.createElement("p");
bodyParagraph.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
mainTag.append(bodyParagraph);
var conclusionParagraph = document.createElement("p");
conclusionParagraph.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
mainTag.append(conclusionParagraph);
var sourceTag = document.createElement("a");
sourceTag.setAttribute(
  "href",
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
);
var source = document.createTextNode("Source");
sourceTag.append(source);
mainTag.append(sourceTag);
bodyTag.append(mainTag);
