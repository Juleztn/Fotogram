let images = [
    './img/dog.jpg',
    './img/eagle.jpg',
    './img/flamingo.jpg',
    './img/frog.jpg',
    './img/guinea-pig.jpg',
    './img/horse.jpg',
    './img/iceland.jpg',
    './img/raccoon.jpg',
    './img/reptile.jpg',
    './img/rhino.jpg',
    './img/snake.jpg',
    './img/wolf.jpg',
    './img/zebra.jpg'
]

let container = document.getElementById('image-container')

function init() {
    showImages();
}

function showImages() {

    for (let i = 0; i < images.length; i++) {
        let img = document.createElement('img');
        img.src = images[i];
        container.appendChild(img);
    }
}