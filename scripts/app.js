let navbar = document.querySelector('#navbar');
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let prevScrollpos = window.pageYOffset;
let bg = '#fff';
let text = '#333';
let filter = 'rgba(255, 255, 255, 0.7)';

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
    if(bg === '#fff') {
        bg = '#333';
        text = '#fff';
        filter = 'rgba(0, 0, 0, 0.7)';
    } else {
        bg = '#fff';
        text = '#333';
        filter = 'rgba(255, 255, 255, 0.7)';
    }
    body.style.background = bg;
    body.style.color = text;
    overlay.style.background = filter;
})