const navbars = document.querySelectorAll('.navbar');
const desktopNav = document.querySelector('#desktop-nav');
const mobileNav = document.querySelector('#mobile-nav');
const toggles = document.querySelectorAll('.toggle');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const darkOverlays = document.querySelectorAll('.overlay-dark');
const buttons = document.querySelectorAll('.btn');
const homeBtn = document.querySelector('#home-btn');
const logos = document.querySelectorAll('.logo img');
const mobileLogo = document.querySelector('#mobile-logo');
const menuItems = document.querySelector('#menu-items');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
let prevScrollpos = window.pageYOffset;
let bg = '#fff';
let text = '#333';
let filter = 'rgba(255, 255, 255, 0.7)';
let darkFilter = 'rgba(0, 0, 0, 0.7)';
let logoColor = 'black';

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    for(navbar of navbars) {
        if(currentScrollPos === 0) {
            desktopNav.style.background = 'none';
        }
        else if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
            navbar.style.background = bg;
        } else {
            navbar.style.top = "-68px";
            navbar.style.background = bg;
        }
    }
    prevScrollpos = currentScrollPos;
};

const darkMode = () => {
    let currentScrollPos = window.pageYOffset;
    if(bg === '#fff') {
        bg = '#333';
        text = '#fff';
        filter = 'rgba(0, 0, 0, 0.7)';
        darkFilter = 'rgba(100, 100, 100, 0.6)';
        logoColor = 'white';
        for(toggle of toggles) {
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        bg = '#fff';
        text = '#333';
        filter = 'rgba(255, 255, 255, 0.6)';
        darkFilter = 'rgba(0, 0, 0, 0.7)';
        logoColor = 'black';
        for(toggle of toggles) {
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
    for(navbar of navbars) {
        if(currentScrollPos === 0) {
            desktopNav.style.background = 'none';
        } else {
            navbar.style.background = bg;
        }
    }
    for(logo of logos) {
        logo.setAttribute('src', `img/${logoColor}-logo.png`);
    }
    body.style.background = bg;
    body.style.color = text;
    overlay.style.background = filter;
    for(button of buttons) {
        button.style.background = text;
        button.style.color = bg;
    }
    for(darkOverlay of darkOverlays) {
        darkOverlay.style.background = darkFilter;
    }
};

for(toggle of toggles) {
    toggle.addEventListener('click', () => {
        darkMode();
    })
};

homeBtn.addEventListener('mouseover', () => {
    for(logo of logos) {
        logo.setAttribute('src', 'img/green-logo.png');
    }
});

homeBtn.addEventListener('mouseout', () => {
    for(logo of logos) {
        logo.setAttribute('src', `img/${logoColor}-logo.png`);
    }
});

open.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    mobileNav.style.height = '100vh';
    mobileLogo.style.display = 'none';
    open.style.display = 'none';
    menuItems.style.display = 'flex';
})

close.addEventListener('click', () => {
    body.style.overflow = 'scroll';
    mobileNav.style.height = '70px';
    mobileLogo.style.display = 'block';
    open.style.display = 'block';
    menuItems.style.display = 'none';
})