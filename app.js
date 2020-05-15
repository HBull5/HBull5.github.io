const navbars = document.querySelectorAll('.navbar');
const desktopNav = document.querySelector('#desktop-nav');
const mobileNav = document.querySelector('#mobile-nav');
const desktopToggle = document.querySelector('#desktop-toggle');
const mobileToggle = document.querySelector('#mobile-toggle');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const darkOverlays = document.querySelectorAll('.overlay-dark');
const buttons = document.querySelectorAll('.btn');
const homeBtn = document.querySelector('#home-btn');
const logos = document.querySelectorAll('.logo img');
const mobileLogo = document.querySelector('#mobile-logo');
const menuItems = document.querySelector('#menu-items');
const mobileLinks = document.querySelectorAll('.mobile-link');
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
    if(currentScrollPos === 0) {
        desktopNav.style.background = 'none';
    }
    else if (prevScrollpos > currentScrollPos) {
        desktopNav.style.top = "0";
        mobileNav.style.top = "0";
        desktopNav.style.background = bg;
        mobileNav.style.background = bg;
    } else {
        desktopNav.style.top = '-68px';
        mobileNav.style.top = '-68px';
        desktopNav.style.background = bg;
        mobileNav.style.background = bg;
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
        desktopToggle.innerHTML = '<i class="fas fa-sun"></i>';
        mobileToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        bg = '#fff';
        text = '#333';
        filter = 'rgba(255, 255, 255, 0.6)';
        darkFilter = 'rgba(0, 0, 0, 0.7)';
        logoColor = 'black';
        desktopToggle.innerHTML = '<i class="fas fa-moon"></i>';
        mobileToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    if(currentScrollPos === 0) {
        desktopNav.style.background = 'none';
    } else {
        desktopNav.style.background = bg;
        mobileNav.style.background = bg;
    }
    for(logo of logos) {
        logo.setAttribute('src', `img/${logoColor}-logo.png`);
    }
    body.style.background = bg;
    mobileNav.style.background = bg;
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

desktopToggle.addEventListener('click', () => {
    darkMode();
});

mobileToggle.addEventListener('click', () => {
    darkMode();
});

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
});

close.addEventListener('click', () => {
    body.style.overflow = 'scroll';
    mobileNav.style.height = '70px';
    mobileLogo.style.display = 'block';
    open.style.display = 'block';
    menuItems.style.display = 'none';
});

for(link of mobileLinks) {
    link.addEventListener('click', () => {
        body.style.overflow = 'scroll';
        mobileNav.style.height = '70px';
        mobileLogo.style.display = 'block';
        open.style.display = 'block';
        menuItems.style.display = 'none';
    })
};

class Typewriter {
    constructor(element, strArr) {
        this.element = element;
        this.strArr = strArr;
        this.str = strArr[0];
        this.txt = '';
        this.strPos = 0;
        this.arrIndex = 0;
        this.complete = false;
        this.type();
    }

    type() {
        if(!this.complete) {
            if(this.strPos < this.str.length) {
                this.txt = this.str.substring(this.strPos, (this.strPos + 1));
                this.element.innerHTML += this.txt;
                this.strPos++;
                setTimeout(() => this.type(), 300);
            } else {
                setTimeout(() => {
                  this.complete = true;
                  this.type();
                }, 2000);
            }
        } else {
            if(this.strPos > 0) {
                this.txt = this.str.substring(0, (this.strPos - 1));
                this.element.innerHTML = this.txt;
                this.strPos--;
            } else {
                if(this.arrIndex < (this.strArr.length - 1)) {
                    this.arrIndex++;
                } else {
                    this.arrIndex = 0;
                }
                this.str = this.strArr[this.arrIndex];
                this.complete = false;
            }
            setTimeout(() => this.type(), 100);
        }
    }
}

let element = document.querySelector('#typewriter');
let strArr = ['Developer', 'Computer Wizard', 'Designer'];
new Typewriter(element, strArr);