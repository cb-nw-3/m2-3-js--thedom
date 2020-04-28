// Add your code here!
let text = {};

//Getting the body tag
const body = document.querySelector('body');
// const body = document.getElementsByTagName('body')[0];

// Creating main tag
const mainTag = document.createElement('main');
body.appendChild(mainTag);
const main = document.getElementsByTagName('main')[0];

//Creating h1
const h1Tag = document.createElement('h1');
// text = document.createTextNode('The best How I Met Your Mother episode (according to fans)');
h1Tag.innerText = 'The best How I Met Your Mother episode (according to fans)';
main.appendChild(h1Tag);

//Creating the first paragraph
let pTag = document.createElement('p')
text = document.createTextNode('As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…');
pTag.appendChild(text);
main.appendChild(pTag);

//Creating a h2
let h2Tag = document.createElement('h2');
text = document.createTextNode('The Slap Bet (Season 2, Episode 9)');
h2Tag.appendChild(text);
main.appendChild(h2Tag);


text = document.createTextNode('IMDB Rating: 9.5');
pTag = document.createElement('p')
pTag.appendChild(text);
main.appendChild(pTag);
let imgTag = document.createElement('img');
main.appendChild(imgTag);
document.getElementsByTagName('img')[0].setAttribute("src", "images/robin-sparkles.jpg");
document.getElementsByTagName('img')[0].setAttribute("alt", "Robin Sparkles");
text = document.createTextNode('In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.');
pTag = document.createElement('p')
pTag.appendChild(text);
main.appendChild(pTag);
text = document.createTextNode('In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).');
pTag = document.createElement('p')
pTag.appendChild(text);
main.appendChild(pTag);
let aTag = document.createElement('a');
text = document.createTextNode('Source');
aTag.appendChild(text);
main.appendChild(aTag);
document.getElementsByTagName('a')[0].setAttribute("href", "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");
const head = document.getElementsByTagName('head')[0];
let linkTag = document.createElement('link');
head.appendChild(linkTag);
document.getElementsByTagName('link')[1].setAttribute('rel', 'stylesheet');
document.getElementsByTagName('link')[1].setAttribute('href', 'styles.css');