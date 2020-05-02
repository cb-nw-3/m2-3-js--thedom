// Add your code here!

let body = document.querySelector('body');
let main = document.createElement('main');
let titleHeader = document.createElement('h1');
let titlePara = document.createElement('p');
let episodeHeader = document.createElement('h2');
let episodeSubTitle = document.createElement('p');
let episodePara1 = document.createElement('p');
let episodePara2 = document.createElement('p');
let episodeImg = document.createElement('img');
let source = document.createElement('a');

body.appendChild(main);
main.appendChild(titleHeader);
main.appendChild(titlePara);
main.appendChild(episodeHeader);
main.appendChild(episodeSubTitle);
main.appendChild(episodeImg);
main.appendChild(episodePara1);
main.appendChild(episodePara2);
main.appendChild(source);


titleHeader.innerText = 'The best How I Met Your Mother episode (according to fans)';
titlePara.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
episodeHeader.innerText = 'The Slap Bet (Season 2, Episode 9)';
episodeSubTitle.innerText = 'IMDB Rating: 9.5';
episodeImg.src = "images/robin-sparkles.jpg";
episodeImg.alt = "Robin Sparkles";
episodePara1.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.'
episodePara2.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).'
source.innerText = "Source";
source.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.body.appendChild(stylesheet);