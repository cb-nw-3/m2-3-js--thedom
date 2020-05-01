const main = document.createElement('main');

document.body.appendChild(main);


const h1 = document.createElement('h1');

main.appendChild(h1);

h1.innerText = "The best How I Met Your Mother episode (according to fans)";


const paragraph = document.createElement("p");

main.appendChild(paragraph)

paragraph.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';


const secondHeader = document.createElement("h2")

secondHeader.innerText = "The Slap Bet (Season 2, Episode 9)"

main.appendChild(secondHeader)


const paraTwo = document.createElement("p")

paraTwo.innerText = "IMDB Rating: 9.5"

main.appendChild(paraTwo)


const image = document.createElement("img")

image.src = "images/robin-sparkles.jpg"

image.alt ="Robin Sparkles"

main.appendChild(image)


const paraThree = document.createElement("p")

paraThree.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased."

main.appendChild(paraThree)


const paraFour = document.createElement("p")

paraFour.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."

main.appendChild(paraFour)

const link = document.createElement("a")

link.innerText = "Source"

link.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"

main.appendChild(link)


const styleLink = document.createElement("link")

styleLink.rel ="stylesheet"

styleLink.href ="styles.css"

document.head.appendChild(styleLink)
