const navBtn = document.querySelector('.nav--btn');
const navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', () => {
	if (navBtn.classList.contains('hamburger')) {
		navBtn.classList.replace('hamburger', 'close');
		navMenu.style.display = 'block';
	} else if (navBtn.classList.contains('close')) {
		navBtn.classList.replace('close', 'hamburger');
		navMenu.style.display = 'none';
	}
});

document.querySelectorAll('.nav__sub-menu').forEach(_ => {
	_.addEventListener('click', e => {
		const subMenuList = e.currentTarget.children[1];
		const arrow = e.currentTarget.children[0].children[0];
		// toggle sub menu
		subMenuList.style.display === 'flex'
			? (subMenuList.style.display = 'none')
			: (subMenuList.style.display = 'flex');
		// rotate arrow
		arrow.style.transform === 'rotate(180deg)'
			? (arrow.style.transform = 'unset')
			: (arrow.style.transform = 'rotate(180deg)');
	});
});
