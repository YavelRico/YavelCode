/*Fade-in Animation*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on the page load
reveal();

//TypeWriter Animation
const helloElement = document.getElementById('typewriter-hello');
const subtextElement = document.getElementById('typewriter-subtext');
const subtextElement2 = document.getElementById('typewriter-subtext2');
const programacionElement = document.createElement('span');
const cierreElement = document.createElement('span');
const underscoreElement = document.createElement('span');
underscoreElement.classList.add('typewriter-underscore');
underscoreElement.textContent = '|';

const helloText = ' Hola! ';
const subtext = '< Bienvenido a mi portafolio';
const subtext2 = '       profesional de Programación >  ';
let helloIndex = 0;

function typeHello() {
    if (helloIndex < helloText.length) {
        helloElement.textContent += helloText[helloIndex];
        helloIndex++;
        setTimeout(typeHello, 150); // Ajusta la velocidad de tipeo aquí (en milisegundos)
    } else {
        typeSubtext();
    }
}

let subtextIndex = 0;

function typeSubtext() {
    if (subtextIndex < subtext.length) {
        subtextElement.textContent += subtext[subtextIndex];
        subtextIndex++;
        setTimeout(typeSubtext, 40); // Ajusta la velocidad de tipeo aquí (en milisegundos)
    } else {
        typeSubtext2();
    }
}

let subtextIndex2 = 0;

function typeSubtext2() {
    if (subtextIndex2 < subtext2.length) {
        subtextElement2.textContent += subtext2[subtextIndex2];
        subtextIndex2++;
        setTimeout(typeSubtext2, 40); // Ajusta la velocidad de tipeo aquí (en milisegundos)
    } else {
        subtextElement2.appendChild(underscoreElement);
        underscoreElement.classList.add('typewriter-underscore-loop');
    }
}


typeHello();

//slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dota");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto slideshow
setInterval(() => {
    plusSlides(1);
}, 4000);

