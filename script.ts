const hamburgerBtn = document.querySelector('.icon-hamburger');
const closeBtn = document.querySelector('.icon-close');

function toggle(element: Element) {
	if (element.style.display === 'none') {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
}

hamburgerBtn?.addEventListener('click', () => {
	closeBtn && toggle(closeBtn);
});
