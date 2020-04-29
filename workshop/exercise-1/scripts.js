// Testing stuff
// let newElement = document.createElement('h1');
// newElement.innerText = 'Hello World!';
// document.body.appendChild(newElement);

// #########################################################################
// ########################### HTML STUFF ##################################
// #########################################################################
let body = document.querySelector('body');
let main = document.createElement('main');
body.appendChild(main);

//Title
let title = document.createElement('h1');
title.innerText = 'The best How I Met Your Mother episode (according to fans)';
main.appendChild(title);

//Sub title
let subTitle = document.createElement('p');
subTitle.innerText = 'As impossible as it seems to name just 1 of the\
  208 legendary episodes as the “best”, the fans have spoken and the highest\
  rated episode is… wait for it…';
  main.appendChild(subTitle);

//ep Title
let epTitle = document.createElement('h2');
epTitle.innerText = 'The Slap Bet (Season 2, Episode 9)';
main.appendChild(epTitle);

//imdb rating
let rating = document.createElement('p');
rating.innerText = 'IMDB Rating: 9.5';
main.appendChild(rating);

//Picture of robin sparkles
let pic = document.createElement('img');
pic.src = 'images/robin-sparkles.jpg';
main.appendChild(pic);

//2 p tags
let p1 = document.createElement('p');
p1.innerText = 'In this episode, Ted is learning a few secrets about\
  Robin, namely that she has an unexplained aversion\
  to the mall. Robin refuses to tell Ted and the\
  others why she won’t go to the mall, so the gang\
  forms their own theories. Marshall believes it’s\
  because she got married in a mall and is still\
  married. Barney believes it has something to do with\
  Robin having performed in a porn video. The two of\
  them make a slap bet with each other: whoever is\
  right gets to slap the other across the face as hard\
  as he can. Lily is named the Slap Bet Commissioner,\
  as long as she promises to be unbiased.';
  main.appendChild(p1);

let p2 = document.createElement('p');
p2.innerText = 'In the end, Robin’s big secret was revealed- she was\
  a Canadian, teen pop sensation named Robin Sparkles.\
  Barney finds the music video for her hit single\
  “Lets Go To The Mall”. The slap bet takes a few\
  turns throughout the episode, but ends with Marshall\
  having the right to slap Barney 5 times- available\
  for all of eternity (horrible call Barney).';
  main.appendChild(p2);

//a link
let sourcelink = document.createElement('a');
sourcelink.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/';
sourcelink.innerText = 'Source';
main.appendChild(sourcelink);

// #########################################################################
// ############################ CSS STUFF ##################################
// #########################################################################
body.style.cssText = 'background:  rgba(246, 187, 33, 0.8)\
  url(./images/yellow-umbrella.jpg) no-repeat;\
  background-size: 100%;\
  font-family: Playfair Display, serif;'


main.style.cssText = 
  'background: #fafafa;\
  border-radius: 4px;\
  box-shadow: 8px 10px 25px 0 rgba(128, 128, 128, 0.44);\
  min-width: 320px;\
  max-width: 600px;\
  margin: 36px;\
  padding: 4px 32px 32px;'

title.style.cssText = 
  'font-family: Open Sans, sans-serif;\
  text-align: center;'

subTitle.style.cssText = 
  'font-family: Open Sans, sans-serif;\
  text-align: left;'

epTitle.style.cssText = 
  'font-family: Open Sans, sans-serif;\
  text-align: left;'

//When you want to apply the CSS to all P tags
document.querySelectorAll('p').forEach(para => {
  para.style.cssText = 
  'font-size: 17px;\
  line-height: 1.5em;'
})

pic.style.cssText = 
  'border: #fafafa;\
  border-radius: 4px;\
  box-shadow: 4px 4px 14px rgba(128, 128, 128, 0.4);\
  width: 100%;'


sourcelink.style.cssText = 
  'color: #174e7c;\
  display: block;\
  font-weight: 700;\
  margin-top: auto;\
  text-align: right;\
  text-decoration: none;'