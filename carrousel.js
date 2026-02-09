const images = [
    'img/proyectos/1.png',
    'img/proyectos/2.png',
    'img/proyectos/3.png',
];

let index = 0;
const jumbo = document.getElementsByTagName('header')[0];

// imagen inicial
jumbo.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
    index = (index + 1) % images.length;
    jumbo.style.backgroundImage = `url(${images[index]})`;
}, 5000);
