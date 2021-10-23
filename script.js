// toggle sub-menu
const subMenuListArr = document.querySelectorAll('.sub-menu__list');
subMenuListArr.forEach(_ => (_.style.display = 'none'));
const navMenu = document.querySelector('.nav__menu');
navMenu.addEventListener('click', e => {
	const subMenu = e.target.parentElement;
	const subMenuList = subMenu.children[1];
	subMenuList.style.display === 'none'
		? (subMenuList.style.display = 'flex')
		: (subMenuList.style.display = 'none');
});

// toggle nav-menu
const navHamburger = document.querySelector('.nav__hamburger');
const navClose = document.querySelector('.nav__close');
const headerNavWapper = document.querySelector('.header__nav__wapper');
navMenu.style.display = 'none';
navHamburger.style.display = 'initial';
navClose.style.display = 'none';
headerNavWapper.addEventListener('click', () => {
	navHamburger.style.display === 'initial'
		? (navHamburger.style.display = 'none')
		: (navHamburger.style.display = 'initial');
	navClose.style.display === 'initial'
		? (navClose.style.display = 'none')
		: (navClose.style.display = 'initial');
	navMenu.style.display === 'none'
		? (navMenu.style.display = 'flex')
		: (navMenu.style.display = 'none');
});
