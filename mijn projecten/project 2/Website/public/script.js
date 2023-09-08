var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);
let slidesRoot = document.getElementById("slider");
var r = document.querySelector(':root');
let img = document.getElementById("imgSlider");
setTimeout(function() { kaasblokje(); }, 500);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active';
}

addEventListener("resize", () => {
    console.log(img.offsetHeight);
    r.style.setProperty('--slider-height', img.offsetHeight + "px");
})

function kaasblokje(){
    console.log(img.offsetHeight);
    r.style.setProperty('--slider-height', img.offsetHeight + "px");
}