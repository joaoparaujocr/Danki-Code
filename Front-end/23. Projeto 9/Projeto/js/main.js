const navA = document.querySelectorAll('nav a');
navA.forEach(i => i.addEventListener('mouseover',() => {
    navA.forEach(index => index.classList.remove('select'));
    i.classList.add('select');
}));

//Menu mobile
const btnMobile = document.getElementById('btn-mobile');
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
btnMobile.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    menu.classList.toggle('active');
})