// transforming images

class ImageContainer {
  constructor(imgSrc, imgAlt, parentEl, direction) {
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.direction = direction;
    this.parentElement = parentEl;
    this.translateY = 0;
    this.translateNum = +this.parentElement.dataset.transform;
    this.appendImg();
    this.setDimensions();
    this.addEventListeners();
  }

  appendImg() {
    this.el = document.createElement("div");
    this.el.classList.add("img-c");
    this.el.classList.add(`${this.direction}`);
    this.image = document.createElement("img");
    this.image.src = `./assets/halves/${this.direction}/${this.imgSrc}-${this.direction}.png`;
    this.image.alt = `${this.direction} split of ${this.imgAlt}`;
    this.el.appendChild(this.image);
    this.parentElement.appendChild(this.el);
  }

  setDimensions() {
    this.centerRef = window.innerHeight / 2;
  }

  addEventListeners() {
    window.addEventListener("resize", () => {
      this.setDimensions();
    });
  }

  animate() {
    let { top, height } = this.parentElement.getBoundingClientRect();
    this.parentCenter = top + height / 2;
    this.el.style.transform = `translateY(${
      (this.centerRef - this.parentCenter) * -this.translateNum
    }px)`;
  }
}

export { ImageContainer };
