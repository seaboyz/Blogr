const navMenu = document.querySelector('.nav__menu');
const subMenuListArr = document.querySelectorAll('.sub-menu__list');
const navHamburger = document.querySelector('.nav__hamburger');
const navClose = document.querySelector('.nav__close');
const headerNavWapper = document.querySelector('.header__nav__wapper');

/* ************ toggle using display attribute ********** */
// // toggle sub-menu
// // set inital state
// subMenuListArr.forEach(_ => (_.style.display = 'none'));
// // add event listener to the whole navMenu
// navMenu.addEventListener('click', e => {
// 	// toogle the subMenuList only when the e.target.parent is sub-menu
// 	if (e.target.parentElement.className === 'sub-menu') {
// 		const subMenu = e.target.parentElement;
// 		const subMenuList = subMenu.children[1];
// 		console.log(subMenuList.display);
// 		subMenuList.style.display === 'none'
// 			? (subMenuList.style.display = 'flex')
// 			: (subMenuList.style.display = 'none');
// 	}
// });

// // toggle nav-menu
// // set initial state
// navMenu.style.display = 'none';
// // navHamburger.style.display = 'flex';
// navClose.style.display = 'none';
// headerNavWapper.addEventListener('click', () => {
// 	navHamburger.style.display === 'none'
// 		? (navHamburger.style.display = 'revert')
// 		: (navHamburger.style.display = 'none');
// 	navClose.style.display === 'none'
// 		? (navClose.style.display = 'revert')
// 		: (navClose.style.display = 'none');
// 	navMenu.style.display === 'none'
// 		? (navMenu.style.display = 'flex')
// 		: (navMenu.style.display = 'none');
// });

/* ************ toggle using .hide class ********** */
headerNavWapper.addEventListener('click', () => {
	navHamburger.classList.toggle('hide');
	navClose.classList.toggle('hide');
	navMenu.classList.toggle('hide');
});

navMenu.addEventListener('click', e => {
	// toogle the subMenuList only when the e.target.parent is sub-menu
	if (e.target.parentElement.className === 'sub-menu') {
		const subMenu = e.target.parentElement;
		const subMenuList = subMenu.children[1];
		subMenuList.classList.toggle('hide');
	}
});
