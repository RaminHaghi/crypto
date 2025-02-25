const hamburgerMenu = document.querySelector('.mobile-menu');
const mainMenu = document.querySelector('.main-menu');

function openMobileMenu() {
    hamburgerMenu.classList.toggle('menu-open');
}

hamburgerMenu.addEventListener('click', openMobileMenu);
