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

let alt = [
    'Beagle',
    'Rotmilan',
    'Flamingo',
    'Teichfrosch',
    'Meerschweinchen',
    'Pferd',
    'Polarfuchs',
    'Waschbär',
    'Jemenchamäleon',
    'Nashorn',
    'Grüne Mamba',
    'Wolf',
    'Zebra'
]

let container = document.getElementById('image-container');
let dialog = document.getElementById('image-big');
let screen = window.matchMedia("(max-width: 400px)");

function init() {
    showImages();
}

function showImages() {
    for (let i = 0; i < images.length; i++) {
        container.innerHTML += `<img class="album" onclick="toggleOverlay(); showDialog(${i})" src="${images[i]}" alt="${alt[i]}">`;
    }
}

function toggleOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('d_none');
}

function showDialog(index) {
    dialog.show(index);
    dialog.innerHTML = dialogTemplate(index);
}

function closeDialog() {
    dialog.close();
}

function previousImg(index) {
    if (index > 0) {
        index--;
        dialog.innerHTML = dialogTemplate(index);
    } else if (index == 0) {
        index = 12;
        dialog.innerHTML = dialogTemplate(index);
    }
}

function nextImg(index) {
    if (index < 12) {
        index++;
        dialog.innerHTML = dialogTemplate(index);
    } else if (index == 12) {
        index = 0;
        dialog.innerHTML = dialogTemplate(index);
    }

}

function dialogTemplate(index) {
    return `<div class="dialog-flex"><img class="image-dialog" src="${images[index]}" alt=""> <span>${alt[index]}</span>         
            <div class="btn-left-right">
                <img class="btn" onclick="previousImg(${index})" src="./img/arrow-left-solid.svg">
                <p>${index + 1} / 13</p>
                <img class="btn" onclick="nextImg(${index})" src="./img/arrow-right-solid.svg">
            </div> 
            </div>`;
}