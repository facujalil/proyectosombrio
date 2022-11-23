/*Preloader*/

const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
    preloader.style.display = "none";
    body.className = "loaded";
})

/*Ventana emergente*/
const ventanaEmergente = document.getElementById("ventana-emergente");
let button = document.querySelector(".button-ventana-emergente");

if (!localStorage.getItem('ingreso')) {
    document.getElementById('mensaje').style.display = 'block';
    button.addEventListener('click', () => {
        ventanaEmergente.style.display = "none";
        localStorage.setItem('ingreso', 1);
    })

} else {
    document.getElementById('mensaje').style.display = 'none';
}

/*Slider*/

const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "0%";
    }, 500)
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "0%";
    }, 500)
}

btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

setInterval(function () {
    Next();
}, 5000);