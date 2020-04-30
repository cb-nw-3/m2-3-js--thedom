// Add your code here!

// top elements


const title = document.createElement('title');
title.innerText = "EXAMPLE";
document.head.appendChild(title);

const fontLink = document.createElement('link');
fontLink.href = "https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display&display=swap/";
fontLink.rel = "stylesheet";

document.head.appendChild(fontLink);

const styleSheetLink = document.createElement('link');
styleSheetLink.rel = "stylesheet";
styleSheetLink.href = "styles.css";

document.head.appendChild(styleSheetLink);


// main body elements

const headerText = 'The best How I Met Your Mother episode (according to fans)'

const subheaderText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…'

const header2Text = 'The Slap Bet (Season 2, Episode 9)'

const IMDBText = "IMDB Rating: 9.5"

const episodeSummary1Text = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hardas he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';

const episodeSummary2Text = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';


const main = document.createElement('main');


const h1 = document.createElement('h1');
h1.innerText = headerText;


const subHeader = document.createElement('p');
subHeader.innerText = subheaderText;



const h2 = document.createElement('h2');
h2.innerText = header2Text;

const IMDB = document.createElement('p');
IMDB.innerText = IMDBText;

const image = document.createElement('img');
image.src = "images/robin-sparkles.jpg";
image.alt = "Robin Sparkles";

const episodeSummary1 = document.createElement('p');
episodeSummary1.innerText = episodeSummary1Text;

const episodeSummary2 = document.createElement('p');
episodeSummary2.innerText = episodeSummary2Text;


const link = document.createElement('a');
link.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
link.innerHTML = "Source";



document.body.appendChild(main);
main.appendChild(h1);
main.appendChild(subHeader);
main.appendChild(h2);
main.appendChild(IMDB);
main.appendChild(image);
main.appendChild(episodeSummary1);
main.appendChild(episodeSummary2);
main.appendChild(link);

