const images = ["newyork1.jpeg", "newyork2.jpeg", "newyork3.jpeg"];

const body = document.querySelector("body");

function paintImage(chosenImage) {
  const image = new Image();
  image.src = `img/${chosenImage}`;
  image.classList.add("bgImage");
  console.log(image.src);
  body.appendChild(image);
}

function genRandom() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  return chosenImage;
}

function init() {
  const randomImg = genRandom();
  paintImage(randomImg);
}

init();
