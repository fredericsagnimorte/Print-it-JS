const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// recuperation d'elements
const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")
const slide = document.querySelector(".slide")
const dots = document.querySelector(".dots")
const imgBanner = document.querySelector(".banner-img")
const pBanner = document.querySelector(".slide p")


// declaration de variables
let compteurSlide = 0
const nombreSlides = slides.length

// autres actions
for (let i = 0; i < nombreSlides; i++) {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    if (i === 0) {
        dot.classList.add("dot_selected")
    }
    dots.appendChild(dot)
}

// events listeners
arrow_right.addEventListener("click", () => {
    if (compteurSlide < nombreSlides - 1) {
        modifieApparenceDot()
        compteurSlide++
        modifieApparenceDot()
    }
    else {
        modifieApparenceDot()
        compteurSlide = 0
        modifieApparenceDot()
    }

    // modification de l'image et du texte
    imgBanner.src = `./assets/images/slideshow/${slides[compteurSlide].image}`;
    pBanner.innerHTML = `${slides[compteurSlide].tagLine}`
})

arrow_left.addEventListener("click", () => {
    if (compteurSlide > 0) {
        modifieApparenceDot()
        compteurSlide--
        modifieApparenceDot()
    } else {
        modifieApparenceDot()
        compteurSlide = nombreSlides - 1
        modifieApparenceDot()
    }
    // modification de l'image et du texte
    imgBanner.src = `./assets/images/slideshow/${slides[compteurSlide].image}`;
    pBanner.innerHTML = `${slides[compteurSlide].tagLine}`
})

const allDot = document.querySelectorAll("#banner .dot")

// fonctions
/**
 * Cette fonction permet l'ajout ou suppression (en fonction de l'absence ou presence)
 * de la classe dot_selected dans chacun des dots de la banner
 */
function modifieApparenceDot() {
    allDot[compteurSlide].classList.toggle("dot_selected")
}