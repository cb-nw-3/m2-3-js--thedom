const main = document.createElement('main');
document.body.appendChild(main);

const headingText = "The best How I Met Your Mother episode (according to fans)";
const heading = document.createElement('h1');
heading.innerText = headingText;
main.appendChild(heading);

const p1 = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
const paragraph = document.createElement('p');
paragraph.innerText = p1;
main.appendChild(paragraph);

const h2Text = "The Slap Bet (Season 2, Episode 9)";
const heading2 = document.createElement('h2');
heading2.innerText = h2Text;
main.appendChild(heading2);

const p2 = "IMDB Rating: 9.5";
const paragraph2 = document.createElement('p');
paragraph2.innerText = p2;
main.appendChild(paragraph2);

const pic = document.createElement('img');
pic.src = './images/robin-sparkles.jpg';
pic.alt = 'Robin Sparkles';
main.appendChild(pic);

const p3 = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
const paragraph3 = document.createElement('p');
paragraph3.innerText = p3;
main.appendChild(paragraph3);

const p4 = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
const paragraph4 = document.createElement('p');
paragraph4.innerText = p4;
main.appendChild(paragraph4);

const aUrl = document.createElement('a');
aUrl.innerText = 'Source';
aUrl.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/';
main.appendChild(aUrl);

/* CSS STUFF */

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);