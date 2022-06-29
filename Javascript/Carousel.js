document.querySelectorAll(".carousel").forEach(carousel => {
	const items = carousel.querySelectorAll(".carousel_item");
	const buttonsHtml = Array.from(items, () => {
		return `<span class="carousel_pin"></span>`;
	});

	carousel.insertAdjacentHTML("beforeend", `
		<div class="carousel_nav">
			${ buttonsHtml.join("") }
		</div>
		`);

	const buttons = carousel.querySelectorAll(".carousel_pin");

	buttons.forEach((button, i) => {
		button.addEventListener("click", () => {
			//deselect all items
			items.forEach(item => item.classList.remove("carousel_item--selected"));
			buttons.forEach(button => button.classList.remove("carousel_pin--selected"));

			items[i].classList.add("carousel_item--selected");
			button.classList.add("carousel_pin--selected");
		});
	});

	items[0].classList.add("carousel_item--selected");
	buttons[0].classList.add("carousel_pin--selected");
});