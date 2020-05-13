// Add your code here!

//MAIN
const bodyDiv = document.querySelector('body');
const main = document.createElement('main')
bodyDiv.appendChild(main);
const mainDiv = document.querySelector('main');

//ELEMENTS
const h1 = document.createElement('h1');
h1.innerText = "The best How I Met Your Mother episode (according to fans)";
const h2 = document.createElement('h2');
h2.innerText = "The Slap Bet (Season 2, Episode 9)";
const parag1 = document.createElement('p');
parag1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
const parag2 = document.createElement('p');
parag2.innerText = "IMDB Rating: 9.5";
const parag3 = document.createElement('p');
parag3.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
const parag4 = document.createElement('p');
parag4.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
const img = document.createElement('img');
img.src = './images/robin-sparkles.jpg';
const a = document.createElement('a');
a.innerText= "Source";
a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";

//ADDING THEM
mainDiv.appendChild(h1);
mainDiv.appendChild(parag1);
mainDiv.appendChild(h2);
mainDiv.appendChild(parag2);
mainDiv.appendChild(img);
mainDiv.appendChild(parag3);
mainDiv.appendChild(parag4);
mainDiv.appendChild(a);

//STYLE
const style = document.createElement('link');
style.href = 'styles.css';
style.rel = 'stylesheet';
document.head.appendChild(style);

