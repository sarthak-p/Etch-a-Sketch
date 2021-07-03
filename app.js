//vars for elements 
const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const section = document.querySelector('.section');

//buttons for each color and size 
const black = document.createElement('button');
const rgb = document.createElement('button');
const gray = document.createElement('button');
const size = document.createElement('button');


window.onload = () => {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black';
    }))
}

//creates a grid of (cols * rows) size 
function makeGrid(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

makeGrid(16, 16);

//makes button for gray color 
function makeGray() {
    const boxes = container.querySelectorAll('.box');
    gray.textContent = "Gray"
    gray.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rand = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${rand},${rand},${rand})`;
            box.style.background = GrayScale;
        }))
    })
    buttons.appendChild(gray).classList.add('btn');
}

makeGray();


//makes button for RGB color 
function makeRGB() {
    const boxes = container.querySelectorAll('.box');
    rgb.textContent = "RGB";
    rgb.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    buttons.appendChild(rgb).classList.add('btn');
}

makeRGB(); 

//makes button for black color 
function makeBlack() {
    const boxes = container.querySelectorAll('.box');
    black.textContent = 'Black';
    black.addEventListener('click', function () {
        boxes.forEach(box => box.addEventListener('mouseover', function () {
            this.style.background = 'black';
        }))
    })
    buttons.appendChild(black).classList.add('btn');
}

makeBlack();

function sizeSet() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}

//allows user to chose custom grid size 
function customSize() {
    size.textContent = 'Grid Size';
    size.addEventListener('click', () => {
        let input = prompt('Please Enter a Grid Size');
        if (input === null || input < 1) {
            sizeSet();
            makeGrid(16, 16);
            makeGray();
            makeBlack();
            makeRGB();
        } else {
            sizeSet();
            makeGrid(input, input);
            makeGray();
            makeRGB();
            makeBlack();
        }
    })
    buttons.appendChild(size).classList.add('btn');
}

customSize(); 
