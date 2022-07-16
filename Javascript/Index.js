//Use this file to create objects for the index page.

import Carousel from "./Carousel.js"

const indexCarousel = new Carousel(
    document.querySelector('.carousel_track'),
    slides = Array.from(track.children),
    document.querySelector('.carousel_btn--next'),
    document.querySelector('.carousel_btn--prev'),
    document.querySelector('.carousel_nav'),
    Array.from(navPins.children),
    slides[0].getBoundingClientRect().width
);