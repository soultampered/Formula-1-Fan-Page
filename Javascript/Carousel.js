class Carousel {
	constructor (
		track,
		slides,
		nextBtn,
		prevBtn,
		navPins,
		pins,
		slideWidth
	) {
		this.track = track;
		this.slides = slides;
		this.nextBtn = nextBtn;
		this.prevBtn = prevBtn;
		this.navPins = navPins;
		this.pins = pins;
		this.slideWidth = slideWidth;

		this.eventListener();
		this.setSlidePosition();
	}
	//arrange slides next to each other
	setSlidePosition() {
		this.slides.forEach((slide, index) => {
			slide.style.left = this.slideWidth * index + 'px';
		})
	}

	//moves carousel slides when pins or arrows are clicked
	moveSlide(track, currentSlide, targetSlide) {
		this.track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
		currentSlide.classList.remove('current_slide');
		targetSlide.classList.add('current_slide');
	}

	//updates the pins on bottom of carousel to indicate which slide user is on
	updatePins(currentPin, targetPin) {
		currentPin.classList.remove('current_slide');
		targetPin.classList.add('current_slide');
	}

	//hides appropriate arrow if at either end of carousel
	hideArrows(slides, prevBtn, nextBtn, targetIndex) {
		if (targetIndex === 0) {
			this.prevBtn.classList.add('is_hidden');
			this.nextBtn.classList.remove('is_hidden');
		} else if (targetIndex === this.slides.length - 1) {
			this.prevBtn.classList.remove('is_hidden');
			this.nextBtn.classList.add('is_hidden');
		} else {
			this.prevBtn.classList.remove('is_hidden');
			this.nextBtn.classList.remove('is_hidden');
		}
	}

	eventListener() {
		//Move slides to the left on click
		this.prevBtn.addEventListener('click', e => {
			const currentSlide = this.track.querySelector('.current_slide');
			const prevSlide = currentSlide.previousElementSibling;
			const currentPin = this.navPins.querySelector('.current_slide');
			const prevPin = currentPin.previousElementSibling;
			const prevIndex = this.slides.findIndex(slide => slide === prevSlide);
	
			this.moveSlide(this.track, currentSlide, prevSlide);
			this.updatePins(currentPin, prevPin);
			this.hideArrows(this.slides, this.prevBtn, this.nextBtn, prevIndex);
		})
	
	//Move slides to the right on click
		this.nextBtn.addEventListener('click', e => {
			const currentSlide = this.track.querySelector('.current_slide');
			const nextSlide = currentSlide.nextElementSibling;
			const currentPin = this.navPins.querySelector('.current_slide');
			const nextPin = currentPin.nextElementSibling;
			const nextIndex = this.slides.findIndex(slide => slide === nextSlide);
			
			this.moveSlide(this.track, currentSlide, nextSlide);
			this.updatePins(currentPin, nextPin);
			this.hideArrows(this.slides, this.prevBtn, this.nextBtn, nextIndex);
		})
	
	//when I click nav pins, move to that slide
		this.navPins.addEventListener('click', e => {
			const targetPin = e.target.closest('button');
	
			if(!targetPin) return;
	
			const currentSlide = this.track.querySelector('.current_slide');
			const currentPin = this.navPins.querySelector('.current_slide');
			const targetIndex = this.pins.findIndex(pin => pin === targetPin);
			const targetSlide = this.slides[targetIndex];
	
			this.moveSlide(this.track, currentSlide, targetSlide);
			this.updatePins(currentPin, targetPin);
			this.hideArrows(this.slides, this.prevBtn, this.nextBtn, targetIndex);
		})	
	}
}

export default Carousel;