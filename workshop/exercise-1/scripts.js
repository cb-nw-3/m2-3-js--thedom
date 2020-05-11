document.body.style.backgroundImage = "url('./images/yellow-umbrella.jpg')"; 
document.body.style.backgroundColor = "rgba(246, 187, 33, 0.8)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
document.body.style.color="black";
var mainDiv=document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.setAttribute("id", "mainDiv")
document.getElementById('mainDiv').style.display = "flex";
document.getElementById('mainDiv').style.flexDirection = "column";
document.getElementById('mainDiv').style.Maxwidth = "50%";
document.getElementById('mainDiv').style.border = "thick solid white";
document.getElementById('mainDiv').style.borderRadius = "5px";
document.getElementById('mainDiv').style.top = "100px";
document.getElementById('mainDiv').style.backgroundColor = "white";
document.getElementById('mainDiv').style.margin = "36px";
document.getElementById('mainDiv').style.minWidth = "320px";
document.getElementById('mainDiv').style.maxWidth = "600px";
document.getElementById('mainDiv').style.padding = "4px 32px 32px";
document.getElementById('mainDiv').style.minHeight = "1000px";
var H1=document.createElement('H1');
mainDiv.appendChild(H1);
H1.innerHTML = "The best How I Met Your Mother episode (according to fans)";
H1.style.fontFamily = "Playfair Display, serif";
var p1 = document.createElement('p');
p1.style.fontFamily = "Playfair Display, serif";
mainDiv.appendChild(p1);
p1.innerHTML = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
var H21 = document.createElement('H2');
H21.style.fontFamily = "Playfair Display, serif";
mainDiv.appendChild(H21);
H21.innerHTML = "The Slap Bet (Season 2, Episode 9)"
var p2 = document.createElement('p');
p2.style.fontFamily = "Playfair Display, serif";
mainDiv.appendChild(p2);
p2.innerHTML = "IMDB Rating 9.5";
var mainImage = document.createElement("img");
mainDiv.setAttribute("id", "mainImage")
mainDiv.appendChild(mainImage);
document.getElementById('mainImage').style.overflow = "hidden";
document.getElementById('mainImage').style.width = "100%";
mainImage.src = "images/robin-sparkles.jpg";
document.getElementById('mainImage').style.display = "flex";
document.getElementById('mainImage').style.justifyContent = "center";
var p3 = document.createElement('p');
p3.style.fontFamily = "Playfair Display, serif";
mainDiv.appendChild(p3);
p3.innerHTML = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased."
var p4 = document.createElement('p');
p4.style.fontFamily = "Playfair Display, serif";
mainDiv.appendChild(p4);
p4.innerHTML = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."
var anchor = document.createElement('a');
anchor.innerHTML = "Source";
anchor.style.textAlign = "right";
anchor.style.textDecoration = "none";
anchor.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
mainDiv.appendChild(anchor);