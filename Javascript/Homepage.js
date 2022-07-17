//Use this file to create objects for the index page.

import Carousel from "./Carousel.js"

//Carousel Data
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel_btn--next');
const prevBtn = document.querySelector('.carousel_btn--prev');
const navPins = document.querySelector('.carousel_nav');
const pins = Array.from(navPins.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const indexCarousel = new Carousel(
    track,
    slides,
    nextBtn,
    prevBtn,
    navPins,
    pins,
    slideWidth
);