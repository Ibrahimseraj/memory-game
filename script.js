const fruits = [
    {
        name: 'apple',
        img: 'imgs/apple.png'
    },

    {
        name: 'avocado',
        img: 'imgs/avocado.avif'
    }, 

    {
        name: 'banana',
        img: 'imgs/banana.png'
    },

    {
        name: 'mango',
        img: 'imgs/mango.jpg'
    },

    {
        name: 'orange',
        img: 'imgs/orange.jpg'
    },

    {
        name: 'strawberry',
        img: 'imgs/strawberry.jpg'
    },

    {
        name: 'apple',
        img: 'imgs/apple.png'
    },

    {
        name: 'avocado',
        img: 'imgs/avocado.avif'
    }, 

    {
        name: 'banana',
        img: 'imgs/banana.png'
    },

    {
        name: 'mango',
        img: 'imgs/mango.jpg'
    },

    {
        name: 'orange',
        img: 'imgs/orange.jpg'
    },

    {
        name: 'strawberry',
        img: 'imgs/strawberry.jpg'
    }
];

const div = document.querySelector('#grid');
let choosenFruitimgs = [];
let fruitIds = [];
const correctFruits = [];
const result = document.querySelector('#result');

fruits.sort(() => 0.5 - Math.random());

let fruitsDisplay = () => {
    for (let i = 0; i < fruits.length; i++) {
        const fruit = document.createElement('img');
        fruit.setAttribute('src', 'imgs/Breaking.png');
        fruit.setAttribute('data-id', i);
        fruit.addEventListener('click', fruitFruits);
        div.appendChild(fruit);
    }
}

fruitsDisplay();

function checkTheFruit() {

    const fruitsImgs = document.querySelectorAll('img');
    const optionOneId = fruitIds[0];
    const optionTwoId = fruitIds[1];

    if (optionOneId == optionTwoId) {
        fruitsImgs[optionOneId].setAttribute('src', 'imgs/Breaking.png');
        fruitsImgs[optionTwoId].setAttribute('src', 'imgs/Breaking.png');
    }

    if (choosenFruitimgs[0] == choosenFruitimgs[1]) {
        alert('you found match')
        fruitsImgs[optionOneId].setAttribute('src', 'imgs/green.jpg');
        fruitsImgs[optionTwoId].setAttribute('src', 'imgs/green.jpg');
        fruitsImgs[optionOneId].removeEventListener('click', fruitFruits);
        fruitsImgs[optionTwoId].removeEventListener('click', fruitFruits);
        correctFruits.push(choosenFruitimgs);
    } else {
        fruitsImgs[optionOneId].setAttribute('src', 'imgs/Breaking.png');
        fruitsImgs[optionTwoId].setAttribute('src', 'imgs/Breaking.png');
    }

    result.innerHTML = correctFruits.length;
    choosenFruitimgs = [];
    fruitIds = [];

    if (correctFruits.length == fruits.length/2) {
        result.innerHTML = 'congrats you win!!!';
    }
}

function fruitFruits() {
    let fruitId = this.getAttribute('data-id');
    choosenFruitimgs.push(fruits[fruitId].name);
    fruitIds.push(fruitId);
    this.setAttribute('src', fruits[fruitId].img);
    if (choosenFruitimgs.length === 2) {
        setTimeout(checkTheFruit, 800);
    }
}