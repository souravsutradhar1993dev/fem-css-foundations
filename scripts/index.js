const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const body = document.querySelector('.body');

menu.addEventListener('click', function () {
    body.classList.add('body--no-scroll')
    nav.classList.add('nav--visible');
    menu.classList.add('menu--hide');
    close.classList.add('close--show');
});

close.addEventListener('click', function () {
    body.classList.remove('body--no-scroll')
    nav.classList.remove('nav--visible');
    menu.classList.remove('menu--hide');
    close.classList.remove('close--show');
});