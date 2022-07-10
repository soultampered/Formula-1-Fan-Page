
//will need to refactor this into an object but for now it works.

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel_btn--next');
const prevBtn = document.querySelector('.carousel_btn--prev');
const navPins = document.querySelector('.carousel_nav');
const pins = Array.from(navPins.children);
const slideWidth = slides[0].getBoundingClientRect().width;

console.log(navPins);

//arrange slides next to each other
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current_slide');
	targetSlide.classList.add('current_slide');
}

const updatePins = (currentPin, targetPin) => {
	currentPin.classList.remove('current_slide');
	targetPin.classList.add('current_slide');
}

const hideArrows = (slides, prevBtn, nextBtn, targetIndex) => {
	if (targetIndex === 0) {
		prevBtn.classList.add('is_hidden');
		nextBtn.classList.remove('is_hidden');
	} else if (targetIndex === slides.length - 1) {
		prevBtn.classList.remove('is_hidden');
		nextBtn.classList.add('is_hidden');
	} else {
		prevBtn.classList.remove('is_hidden');
		nextBtn.classList.remove('is_hidden');
	}
}

//Move slides to the left on click
prevBtn.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current_slide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentPin = navPins.querySelector('.current_slide');
	const prevPin = currentPin.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);

	moveSlide(track, currentSlide, prevSlide);
	updatePins(currentPin, prevPin);
	hideArrows(slides, prevBtn, nextBtn, prevIndex);
})

//Move slides to the right on click
nextBtn.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current_slide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentPin = navPins.querySelector('.current_slide');
	const nextPin = currentPin.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);
	 
	moveSlide(track, currentSlide, nextSlide);
	updatePins(currentPin, nextPin);
	hideArrows(slides, prevBtn, nextBtn, nextIndex);
})

//when I click nav pins, move to that slide
navPins.addEventListener('click', e => {
	const targetPin = e.target.closest('button');

	if(!targetPin) return;

	const currentSlide = track.querySelector('.current_slide');
	const currentPin = navPins.querySelector('.current_slide');
	const targetIndex = pins.findIndex(pin => pin === targetPin);
	const targetSlide = slides[targetIndex];

	moveSlide(track, currentSlide, targetSlide);
	updatePins(currentPin, targetPin);
	hideArrows(slides, prevBtn, nextBtn, targetIndex);
})