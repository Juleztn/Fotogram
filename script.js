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

let container = document.getElementById('image-container');
let dialog = document.getElementById('image-big');

function init() {
    showImages();
}

function showImages() {
    for (let i = 0; i < images.length; i++) {
        container.innerHTML += `<img class="album" onclick="toggleOverlay(); showDialog(${i})" src="${images[i]}" alt="">`;
    }
}

function toggleOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('d_none');
}

function showDialog(index) {
    dialog.show(index);
    dialog.innerHTML = `<div class="dialog-flex"><img class="image-dialog" src="${images[index]}" alt="">         
            <div class="btn-left-right">
                <img class="btn" src="./img/arrow-left-solid.svg">
                <img class="btn" src="./img/arrow-right-solid.svg">
            </div> 
            </div>`;
}

function closeDialog() {
    dialog.close();
}