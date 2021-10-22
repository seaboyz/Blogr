const navBtn = document.querySelector('.nav--btn');
const navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', () => {
	if (navBtn.classList.contains('hamburger')) {
		navBtn.classList.replace('hamburger', 'close');
	} else if (navBtn.classList.contains('close')) {
		navBtn.classList.replace('close', 'hamburger');
	}
	navMenu.classList.toggle('hidden');
});

document.querySelectorAll('.sub-menu-title').forEach(_ =>
	_.addEventListener('click', e => {
		e.currentTarget.children[0].classList.toggle('arrow--up');
		e.currentTarget.nextElementSibling.classList.toggle('hidden');
	})
);
