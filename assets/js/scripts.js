const hamburger = document.querySelector('.header__hamburger');
const overlay = document.querySelector('.nav__overlay');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', (e) => {

    overlay.classList.toggle('nav__overlay--open');
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')) {
        e.target.src = 'assets/images/icon-close-menu.svg';
    } else {
        e.target.src = 'assets/images/icon-hamburger.svg';
    }

});