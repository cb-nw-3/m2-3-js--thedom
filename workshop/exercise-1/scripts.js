function addStyleTag() {
  let styleTag = document.createElement("link");
  styleTag.rel = "stylesheet";
  styleTag.href = "styles.css";
  return styleTag;
}

function setBackgroundImage() {
  document.body.style.backgroundImage = "url(images/yellow-umbrella.jpg)";
}

function theHeading() {
  let heading = document.createElement("h1");
  heading.innerText =
    "The best How I Met Your Mother episode (according to fans)";
  return heading;
}

function theDescription() {
  let description = document.createElement("p");
  description.innerText = `As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…`;
  return description;
}

function headingTwo() {
  let thesecond = document.createElement("h2");
  //   this is the container =the right side creates a dom element and returns a reference(memory address)
  thesecond.innerText = "The Slap Bet (Season 2, Episode 9)";
  return thesecond;
}

function theRating() {
  let therate = document.createElement("p");
  therate.innerText = "IMDB Rating: 9.5";
  return therate;
}

function theImage() {
  let image = document.createElement("img");
  image.setAttribute("src", "images/robin-sparkles.jpg");
  image.setAttribute("alt", "Robin Sparkles");
  return image;
}

function paraOne() {
  let para = document.createElement("p");
  para.innerText =
    "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversionto the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
  return para;
}

function paraTwo() {
  let parat = document.createElement("p");
  parat.innerText =
    "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
  return parat;
}

function theLink() {
  let anchor = document.createElement("a");
  // Create anchor element.
  let link = document.createTextNode("Source");
  // Create the text node for anchor element.
  anchor.appendChild(link);
  // Append the text node to anchor element.
  anchor.setAttribute("title", "Source");
  // Set the title.
  anchor.setAttribute(
    "href",
    "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
  );
  // Set the href property.
  return anchor;
}

function parentWrapper() {
  let wrapper = document.createElement("main");
  wrapper.appendChild(theHeading());
  wrapper.appendChild(theDescription());
  wrapper.appendChild(headingTwo());
  wrapper.appendChild(theRating());
  wrapper.appendChild(theImage());
  wrapper.appendChild(paraOne());
  wrapper.appendChild(paraTwo());
  wrapper.appendChild(theLink());
  return wrapper;
}

(function () {
  document.head.appendChild(addStyleTag());
  setBackgroundImage();
  document.body.appendChild(parentWrapper());
})();
