var nav = document.querySelector('#nav');
var sideMenu = document.querySelector('.side-menu');
var ptext = document.querySelectorAll('.ptext');
var section = document.querySelectorAll('.section');
var close = document.querySelector('#close');
var flip = document.querySelectorAll('.flip');
var line = document.querySelectorAll('.line');
var home = document.querySelector('#home');
var contact = document.querySelector('#contact');
var topPage = document.querySelector('#topPage');
var icons = document.querySelector('i');

nav.addEventListener('click', () => {
    sideMenu.style.width = '20%';
    ptext.forEach(element => {
        element.classList.add('cs');
    });
    section.forEach(element => {
        element.classList.add('cs');
    });
});

nav.addEventListener('mouseover', () => {
    line.forEach(element => {
        element.style.width = '40px';
    });
});

nav.addEventListener('mouseout', () => {
    line.forEach(element => {
        element.style.width = '35px';
    });
});

close.addEventListener('click', () => {
    sideMenu.style.width = '0';
    ptext.forEach(element => {
        element.classList.remove('cs');
    });
    section.forEach(element => {
        element.classList.remove('cs');
    });
});

flip.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.background = "rgba(255, 255, 255, 0)";
        element.style.color = "#fff";
        element.style.border = "#fff 3px solid";
    });
    element.addEventListener('mouseout', () => {
        element.style.background = "#000";
        element.style.color = "#fff";
        element.style.border = "#000 3px solid";
    });
});

home.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

contact.addEventListener('click', () => {
    window.scrollTo(0, 1000000000);
});

topPage.addEventListener('click', () => {
    window.scrollTo(0, 0);
});