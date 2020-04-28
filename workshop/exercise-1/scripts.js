let CSSLink = document.createElement('link');
CSSLink.href = 'styles.css';
CSSLink.rel = 'stylesheet';
document.head.appendChild(CSSLink);

let mainBody = document.createElement('main');
document.body.prepend(mainBody);

let h1 = document.createElement('h1');
h1.innerText = 'The best How I Met Your Mother episode (according to fans)'
mainBody.appendChild(h1);

let firstP = document.createElement('p');
firstP.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
mainBody.appendChild(firstP);

let h2 = document.createElement('h2');
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';
mainBody.appendChild(h2);

let ratingP = document.createElement('p');
ratingP.innerText = 'IMDB Rating: 9.5';
mainBody.appendChild(ratingP);

let textImage = document.createElement('img');
textImage.src = 'images/robin-sparkles.jpg';
textImage.alt = 'Robin Sparkles';
mainBody.appendChild(textImage);

let firstDescP = document.createElement('p');
firstDescP.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
mainBody.appendChild(firstDescP);

let secondDescP = document.createElement('p');
secondDescP.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
mainBody.appendChild(secondDescP);

let a = document.createElement('a');
a.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/';
a.innerText = 'Source';
mainBody.appendChild(a);