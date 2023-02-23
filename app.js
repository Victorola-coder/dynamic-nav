const open = document.querySelector('.open');
const close = document.querySelector('.close');
const container = document.querySelector('.container');


open.addEventListener('click', () => {
    container.classList.add('nav-show')
})

close.addEventListener('click', () => {
    container.classList.remove('nav-show')
})