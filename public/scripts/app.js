const hamburgerMenu = document.querySelector('.hamburger-btn');
const backgroundBlur = document.querySelector('.background-blur');
const navMobile = document.querySelector('.nav-mobile');
const menuCrossClose = document.querySelector('.nav-close-btn');

function mobileNavOpen() {
    hamburgerMenu.classList.add('menu-open');
    hamburgerMenu.classList.add('hidden');
    backgroundBlur.classList.remove('hidden');
    navMobile.style.right = '0';
}

function closeNavMobile() {
    hamburgerMenu.classList.remove('menu-open');
    hamburgerMenu.classList.remove('hidden');
    backgroundBlur.classList.add('hidden');
    navMobile.style.right = '-22.5rem';
}

hamburgerMenu.addEventListener('click', mobileNavOpen);
backgroundBlur.addEventListener('click', closeNavMobile);
menuCrossClose.addEventListener('click', closeNavMobile);
