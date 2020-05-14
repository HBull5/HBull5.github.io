let navbar = document.querySelector('#navbar');
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let buttons = document.querySelectorAll('.btn');
let homeBtn = document.querySelector('#home-btn');
let logo = document.querySelector('#logo');
let prevScrollpos = window.pageYOffset;
let bg = '#fff';
let text = '#333';
let filter = 'rgba(255, 255, 255, 0.7)';
let logoColor = 'black';

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if(currentScrollPos === 0) {
        navbar.style.background = 'none';
    }
    else if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.background = bg;
    } else {
        navbar.style.top = "-68px";
        navbar.style.background = bg;
    }
    prevScrollpos = currentScrollPos;
}

toggle.addEventListener('click', () => {
    let currentScrollPos = window.pageYOffset;
    if(bg === '#fff') {
        bg = '#333';
        text = '#fff';
        filter = 'rgba(0, 0, 0, 0.7)';
        logoColor = 'white';
    } else {
        bg = '#fff';
        text = '#333';
        filter = 'rgba(255, 255, 255, 0.7)';
        logoColor = 'black';
    }
    if(currentScrollPos === 0) {
        navbar.style.background = 'none';
    } else {
        navbar.style.background = bg;
    }
    logo.setAttribute('src', `img/${logoColor}-logo.png`);
    body.style.background = bg;
    body.style.color = text;
    overlay.style.background = filter;
    for(button of buttons) {
        button.style.background = text;
        button.style.color = bg;
    }
})

homeBtn.addEventListener('mouseover', () => {
    logo.setAttribute('src', 'img/green-logo.png');
})

homeBtn.addEventListener('mouseout', () => {
    logo.setAttribute('src', `img/${logoColor}-logo.png`);
})