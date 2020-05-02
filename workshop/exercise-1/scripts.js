// Create page element
const main = document.createElement('main');
document.body.appendChild(main);

const h1 = document.createElement('h1');
h1.innerText = 'The best How I Met Your Mother episode (according to fans)';
main.appendChild(h1);

const p1 = document.createElement('p');
p1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
main.appendChild(p1);

const h2 = document.createElement('h2')
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';
main.appendChild(h2);

const p2 = document.createElement('p');
p2.innerText = 'IMDB Rating: 9.5';
main.appendChild(p2);

const img = document.createElement('img');
img.setAttribute('src', 'images/robin-sparkles.jpg');
img.setAttribute('alt', 'Robin Sparkles')
main.appendChild(img);

const p3 = document.createElement('p');
p3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
main.appendChild(p3);

const p4 = document.createElement('p');
p4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
main.appendChild(p4);

const a = document.createElement('a');
a.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
a.innerText = 'Source';
main.appendChild(a);

// Create head link ref to css page
link=document.createElement('link');
link.href='styles.css';
link.rel='stylesheet';
document.getElementsByTagName('head')[0].appendChild(link);


