const hamburgerMenu = document.querySelector('.hamburger-btn');
const backgroundBlur = document.querySelector('.background-blur');
const navMobile = document.querySelector('.nav-mobile');
const menuCrossClose = document.querySelector('.nav-close-btn');
const bgSignUp = document.querySelector('.bg-sign-up');
const signInBtnDesktop = document.querySelector('.sign-in-btn-desktop');
const signUpBtnDesktop = document.querySelector('.sign-up-btn-desktop');
const accountForm = document.querySelector('.account-window');
const closesubmitForm = document.querySelector('.sign-close-btn');
const formBtns = document.querySelector('.account-window__btn');
const orElem = document.querySelector('.or-text');
const nameInput = document.querySelector('.name-input');
const phoneInput = document.querySelector('.phone-input');
const submitForm = document.querySelector('.sign-btn');
const footerSignIn = document.querySelector('.sign-in-footer');
const footerSignUp = document.querySelector('.sign-up-footer');
const footerSignUpBtn = document.querySelector('.footer-signup');
const footerSignInBtn = document.querySelector('.footer-signin');
const mobileSignInBtn = document.querySelector('.sign-in-btn-mobile');
const mobileSignUpBtn = document.querySelector('.sign-up-btn-mobile');
const faqContents = document.querySelectorAll('.faq-content');
const scrollToTop = document.querySelector('.scroll-to-top');

function mobileNavOpen() {
    hamburgerMenu.classList.add('menu-open');
    hamburgerMenu.classList.add('hidden');
    backgroundBlur.classList.remove('hidden');
    navMobile.style.right = '0';
    document.body.classList.add('overflow-y-hidden');
}

function closeNavMobile() {
    hamburgerMenu.classList.remove('menu-open');
    hamburgerMenu.classList.remove('hidden');
    backgroundBlur.classList.add('hidden');
    navMobile.style.right = '-22.5rem';
    document.body.classList.remove('overflow-y-hidden');
}

function openSignInDesktop() {
    bgSignUp.classList.remove('hidden');
    accountForm.style.display = 'flex';
    document.body.classList.add('overflow-y-hidden');
}

function openSignUpDesktop() {
    bgSignUp.classList.remove('hidden');
    accountForm.style.display = 'flex';
    formBtns.classList.add('hidden');
    orElem.classList.add('hidden');
    nameInput.classList.remove('hidden');
    phoneInput.classList.remove('hidden');
    submitForm.innerHTML = 'Sign up';
    footerSignIn.classList.add('hidden');
    footerSignUp.classList.remove('hidden');
    document.body.classList.add('overflow-y-hidden');
}

function closeSignWindow() {
    bgSignUp.classList.add('hidden');
    accountForm.style.display = 'none';
    document.body.classList.remove('overflow-y-hidden');
}

function toSignUp() {
    formBtns.classList.add('hidden');
    orElem.classList.add('hidden');
    nameInput.classList.remove('hidden');
    phoneInput.classList.remove('hidden');
    submitForm.innerHTML = 'Sign up';
    footerSignIn.classList.add('hidden');
    footerSignUp.classList.remove('hidden');
}

function toSignIn() {
    formBtns.classList.remove('hidden');
    orElem.classList.remove('hidden');
    nameInput.classList.add('hidden');
    phoneInput.classList.add('hidden');
    submitForm.innerHTML = 'Sign in';
    footerSignIn.classList.remove('hidden');
    footerSignUp.classList.add('hidden');
}

function closeSignEsc(event) {
    if (event.key === 'Escape') {
        bgSignUp.classList.add('hidden');
        accountForm.style.display = 'none';
    }
}

function scrollTopBody() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

hamburgerMenu.addEventListener('click', mobileNavOpen);
backgroundBlur.addEventListener('click', closeNavMobile);
menuCrossClose.addEventListener('click', closeNavMobile);
closesubmitForm.addEventListener('click', closeSignWindow);
signInBtnDesktop.addEventListener('click', openSignInDesktop);
signUpBtnDesktop.addEventListener('click', openSignUpDesktop);
footerSignUpBtn.addEventListener('click', toSignUp);
footerSignInBtn.addEventListener('click', toSignIn);
document.body.addEventListener('keydown', closeSignEsc);
mobileSignInBtn.addEventListener('click', openSignInDesktop);
mobileSignUpBtn.addEventListener('click', openSignUpDesktop);

window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header');
    if (window.scrollY > 80) {
        header.classList.add('bg-scroll-header');
        header.classList.remove('py-8');
        header.classList.add('py-3');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.add('bg-transparent');
        header.classList.remove('py-3');
        header.classList.add('py-8');
        header.classList.remove('bg-scroll-header');
    }
});

submitForm.addEventListener('click', function (event) {
    event.preventDefault();
});

faqContents.forEach(function (faq) {
    faq.addEventListener('click', function () {
        faq.classList.toggle('before:rotate-180');
        const faqText = faq.querySelector('.faq-content__text');
        if (faqText) {
            faqText.classList.toggle('hidden');
        }
    });
});

window.addEventListener('scroll', function () {
    if (scrollY > 2000) {
        scrollToTop.classList.remove('hidden');
        scrollToTop.classList.add('flex');
    } else {
        scrollToTop.classList.add('hidden');
        scrollToTop.classList.remove('flex');
    }
});

scrollToTop.addEventListener('click', scrollTopBody);
