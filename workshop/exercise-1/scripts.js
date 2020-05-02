// Add your code here!
const main = document.createElement('main');

document.body.appendChild(main); 

const headingText = "The best How I Met Your Mother episode (according to fans)";

const heading = document.createElement('h1');
heading.innerText = headingText;


main.appendChild(heading);

let pText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";

const para = document.createElement('p');
para.innerText = pText;
main.appendChild(para);

const headingText2 = "The Slap Bet (Season 2, Episode 9)";
const heading2 = document.createElement('h2');

heading2.innerText = headingText2;
main.appendChild(heading2);

const pText2 = "IMDB Rating: 9.5";
const para2 = document.createElement('p');
para2.innerText = pText2;
main.appendChild(para2);

const image1 = document.createElement('img');
image1.setAttribute('src', 'images/robin-sparkles.jpg');
main.appendChild(image1);


const pText3 = "In this episode, Ted is learning a few secrets about Robin, namely\
    that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the\
    others why she won’t go to the mall, so the gang forms their own theories. Marshall \
    believes it’s because she got married in a mall and is still married. Barney believes \
    it has something to do with Robin having performed in a porn video. The two of them \
    make a slap bet with each other: whoever is right gets to slap the other across the \
    face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises \
    to be unbiased.";
const para3 = document.createElement('p');
para3.innerText = pText3;
main.appendChild(para3);

const pText4 = "In the end, Robin’s big secret was revealed- she was a Canadian,\
    teen pop sensation named Robin Sparkles. Barney finds the music video for her hit\
    single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode,\
    but ends with Marshall having the right to slap Barney 5 times- available for all of\
    eternity (horrible call Barney).";
const para4 = document.createElement('p');
para4.innerText = pText4;
main.appendChild(para4);

const anchorText = "Source";
const anchor = document.createElement('a');
anchor.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
anchor.innerHTML = anchorText;
main.appendChild(anchor);

document.querySelectorAll('p').forEach(para => {
    para.style.cssText = 
    'font-size: 17px;\
    line-height: 1.5em;'
})

document.querySelectorAll('a').forEach(a => {
    a.style.cssText =
    'color: #174e7c;\
    display: block;\
    font-weight: 700;\
    margin-top: auto;\
    text-align: right;\
    text-decoration: none;'
})

document.querySelectorAll('img').forEach(img => {
    img.style.cssText =
    'border: #fafafa;\
    border-radius: 4px;\
    box-shadow: 4px 4px 14px rgba(128, 128, 128, 0.4);\
    width: 100%;'
})

document.querySelectorAll('h1').forEach(h1 => {
    h1.style.cssText =
    "font-family: 'Open Sans', sans-serif;\
    text-align: center;"
})

document.querySelectorAll('h2').forEach(h2 => {
    h2.style.cssText =
    "font-family: 'Open Sans', sans-serif;\
    text-align: left;"
})

document.querySelectorAll('main').forEach(main => {
    main.style.cssText = 
    "background: #fafafa;\
    border-radius: 4px;\
    box-shadow: 8px 10px 25px 0 rgba(128, 128, 128, 0.44);\
    min-width: 320px;\
    max-width: 600px;\
    margin: 36px;\
    padding: 4px 32px 32px;"
})

document.querySelectorAll('body').forEach(body => {
    body.style.cssText =
    "background: rgba(246, 187, 33, 0.8) url(./images/yellow-umbrella.jpg) no-repeat;\
    background-size: 100%;\
    font-family: 'Playfair Display', serif;"
})