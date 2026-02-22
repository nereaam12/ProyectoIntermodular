const images = [
    'img/proyectos/rafalet.png',
    'img/proyectos/villahorizonte.png',
    'img/proyectos/villanocturna.jpg',
    'img/proyectos/benaguacil.jpg',
];

let index = 0;
const jumbo = document.getElementsByTagName('header')[0];

// imagen inicial
jumbo.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
    index = (index + 1) % images.length;
    jumbo.style.backgroundImage = `url(${images[index]})`;
}, 5000);
