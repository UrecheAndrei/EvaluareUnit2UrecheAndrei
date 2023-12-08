let index = 0;
let transitionDelay = 3000;
let isRunning = false;

let slideContainer = document.querySelector(".slideshow");
let slides = slideContainer.querySelectorAll(".slide");

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay / 1000}s linear`;
}

showSlide(index);

function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  index++;
  if (index >= slides.length) {
    index = 0;
  }
}

function toggleSlideshow() {
  if (isRunning) {
    clearInterval(slideshowInterval);
  } else {
    slideshowInterval = setInterval(() => showSlide(index), transitionDelay);
  }
  isRunning = !isRunning;
}

let monitorizareResurseTitle = document.querySelector("h3");

monitorizareResurseTitle.addEventListener("dblclick", toggleSlideshow);
