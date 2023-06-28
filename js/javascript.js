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

//Boton de experiencia 1
// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("desaFE");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


//Boton de experiencia 2
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("DisGra");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


//Boton de experiencia 3
// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("DisCom");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal3) {
        modal.style.display = "none";
    }
}


//Boton de experiencia 4
// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("Artista");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}