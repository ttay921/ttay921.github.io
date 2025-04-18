import { ImageContainer } from "./imageSetUp.js";


const imageFiles = [
  { img: "bluetooth", alt: "Pink bluetooth headset" },
  {
    img: "candle",
    alt: "Candle shaped like a dessert with a wax strawberry on top",
  },
  { img: "candy", alt: "Rendez vous candy container" },
  { img: "duckies", alt: "Two minature rubber ducks with four leaf clovers" },
  { img: "hand", alt: "A plastic mini hand pencil topper" },
  { img: "heart", alt: "Heart-shaped doilies" },
  {
    img: "jomo",
    alt: "Pink and white trucker hat with blue writing saying Joy of Missing Out",
  },
  { img: "mag", alt: "Old issue of Jet from the early aughts featuring Ciara" },
  { img: "magic8", alt: "Magic 8 ball shaped photo holder" },
  { img: "nails", alt: "Essie nail polish in pink" },
  { img: "sew", alt: "A sewing tomato" },
  { img: "stickers", alt: "A sticker with an illustriative heart" },
  { img: "swoosh", alt: "A nike swoosh shaped whistle" },
  { img: "tape", alt: "Guy self-titled album on tape" },
  { img: "bluetooth", alt: "Pink bluetooth headset" },
  {
    img: "candle",
    alt: "Candle shaped like a dessert with a wax strawberry on top",
  },
  { img: "candy", alt: "Rendez vous candy container" },
  { img: "duckies", alt: "Two minature rubber ducks with four leaf clovers" },
  { img: "hand", alt: "A plastic mini hand pencil topper" },
  { img: "heart", alt: "Heart-shaped doilies" },
  {
    img: "jomo",
    alt: "Pink and white trucker hat with blue writing saying Joy of Missing Out",
  },
  { img: "mag", alt: "Old issue of Jet from the early aughts featuring Ciara" },
  { img: "magic8", alt: "Magic 8 ball shaped photo holder" },
  { img: "nails", alt: "Essie nail polish in pink" },
  { img: "sew", alt: "A sewing tomato" },
  { img: "stickers", alt: "A sticker with an illustriative heart" },
  { img: "swoosh", alt: "A nike swoosh shaped whistle" },
  { img: "tape", alt: "Guy self-titled album on tape" },
];

const slider = document.querySelector(".right-slider");
let slides = Array.from(document.querySelectorAll(".right-slider .slide"));

let slidesArr = [...slides];
let slidesHeight = slides[0].getBoundingClientRect().height;
console.log(slidesHeight);

const oppSlider = document.querySelector(".left-slider");
let oppSlides = Array.from(document.querySelectorAll(".left-slider .slide"));
let oppSlidesArr = [...oppSlides];

let transform = 0;
let oppTransform = 0;

window.addEventListener("resize", () => {
  slidesHeight = slides[0].getBoundingClientRect().height;
});

function cloneEls(els, newArr) {
  els.forEach((el, i) => {
    let clone = el.cloneNode(true);
    clone.classList.add("clone");
    el.parentElement.appendChild(clone);
    newArr.push(clone);
  });
}
function positionEls(els, position) {
  els.forEach((el, i) => {
    // 100/3 since three on screen at once
    let percent = (i - els.length / 2) * 100;
    el.style[`${position}`] = `${percent}%`;
  });
}

cloneEls(slides, slidesArr);
positionEls(slidesArr, "top");

cloneEls(oppSlides, oppSlidesArr);
positionEls(oppSlidesArr, "top");

let imageCs = [];

slidesArr.forEach((d, i) => {
  let imageC = new ImageContainer(
    imageFiles[i].img,
    imageFiles[i].alt,
    d,
    "right"
  );
  imageCs.push(imageC);
});

let oppImageCs = [];

oppSlidesArr.forEach((d, i) => {
  let imageC = new ImageContainer(
    imageFiles[i].img,
    imageFiles[i].alt,
    d,
    "left"
  );
  oppImageCs.push(imageC);
});

// desktop transform
window.addEventListener("wheel", (e) => {
  transform -= e.deltaY;
  oppTransform -= e.deltaY;
});
// touch device
let startY = 0;
let speedY = 0;
let isTouching = false;
let startTime = 0;
let elapsedTime = 0;

slider.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
  speedY = 0;
  isTouching = true;
  startTime = performance.now();
});
slider.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const deltaY = e.touches[0].clientY - startY;
  transform += deltaY;
  oppTransform +=deltaY;
  startY = e.touches[0].clientY;
  elapsedTime = performance.now() - startTime;
  speedY -= (deltaY / (elapsedTime * 0.1)) * -1;
});
slider.addEventListener("touchend", (e) => {
  startY = 0;
  isTouching = false;
});

function scrollDownAnim() {
  if (!isTouching && Math.abs(speedY) > 0.1) {
    speedY *= 0.95;
    transform += speedY;
  }

  if (oppTransform > slidesHeight * (slidesArr.length / 7)) {
    oppTransform = slidesHeight * (slidesArr.length / 7);
  }
  if (oppTransform < -(slidesHeight * (slidesArr.length / 7))) {
    oppTransform = -(slidesHeight * (slidesArr.length / 7));
  }

  if (transform > slidesHeight * (slidesArr.length / 7)) {
    transform = -(slidesHeight * (slidesArr.length / 7));
  }
  if (transform < -(slidesHeight * (slidesArr.length / 7))) {
    transform = slidesHeight * (slidesArr.length / 7);
  }

  slidesArr.forEach((s, i) => {
    s.style.transform = `translateY(${
      (transform / (window.innerHeight * (1 / 3))) * 100
    }%)`;

    imageCs[i].animate();
  });
  oppSlidesArr.forEach((s, i) => {
    s.style.transform = `translateY(${
      (transform / (window.innerHeight * (1 / 3))) * -100
    }%)`;

    oppImageCs[i].animate();
  });

  requestAnimationFrame(scrollDownAnim);
}
scrollDownAnim();
