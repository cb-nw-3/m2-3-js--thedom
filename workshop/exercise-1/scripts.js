// Get main element
const mainBloc = document.getElementById("main");

//Creat H1 and adding it in main
//appendChild creat a child to insert element in parent (Child is the const)
const h1 = document.createElement("h1");
h1.textContent = "The best How I Met Your Mother episode (according to fans)";
mainBloc.appendChild(h1);

//H2 and adding it in main
const h2 = document.createElement("h2");
h2.textContent = "The Slap Bet (Season 2, Episode 9)";
mainBloc.appendChild(h2);

//IMDB (p) and adding it in main
const pIMDB = document.createElement("p");
pIMDB.textContent = "IMDB Rating: 9.5";
mainBloc.appendChild(pIMDB);

//Photo Robin Sparkles and adding it in main
const photo = document.createElement("img");
photo.src = "images/robin-sparkles.jpg";
mainBloc.appendChild(photo);

//Paragraphe (p) and adding it in main
//--------------p1
const p1 = document.createElement("p");
p1.textContent =
  "As impossible as it seems to name just 1 of the\
  208 legendary episodes as the “best”, the fans have spoken and the highest\
  rated episode is… wait for it…";
mainBloc.appendChild(p1);

//--------------p2
const p2 = document.createElement("p");
p2.textContent =
  "In this episode, Ted is learning a few secrets about Robin, namely\
  that she has an unexplained aversion to the mall. Robin refuses to tell\
  Ted and the others why she won’t go to the mall, so the gang forms their own theories.\
  Marshall believes it’s because she got married in a mall and is still married. Barney believes\
  it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other:\
  whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner,\
  as long as she promises to be unbiased.";
mainBloc.appendChild(p2);

//--------------p3
const p3 = document.createElement("p");
p3.textContent =
  "In the end, Robin’s big secret was revealed- she was\
  a Canadian, teen pop sensation named Robin Sparkles.\
  Barney finds the music video for her hit single “Lets Go To The Mall”.\
  The slap bet takes a few turns throughout the episode, but ends with\
  Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
mainBloc.appendChild(p3);

// Source (a) and adding it in main
const link = document.createElement("a");
link.href =
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
link.textContent = "Source";
mainBloc.appendChild(link);

// -----------------
// Import external css and adding it in head
const headBloc = document.querySelector("head"); //querySelector get unik tag in html (only for head and body in html)
const myCss = document.createElement("link"); //takes a link to creat css normaly in html = ("link")
/*
Link to creat CSS in HTML. With JS, have to detail what we have inside the link.
<link rel="stylesheet" type="text/css" href="test.css" />
*/
myCss.type = "text/css";
myCss.rel = "stylesheet";
myCss.href = "styles.css";
//Put CSS in head as a child.
headBloc.appendChild(myCss);
