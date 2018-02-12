'use strict';

// TODO - make constructor function
//      - create properties- name, filepath, times shown, times clicked, string id
//      - make instances of each object

////////////Constructor///////////////

function Product (name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0;
    this.timesClicked = 0;
}

const researchStudy = {
    products: [],
    start: function () {

        this.products.push(
            new Product('bag', 'img/bag.jpg'),
            new Product('banana', 'img/banana.jpg'),
            new Product('bathroom', 'img/bathroom.jpg'),
            new Product('boots', 'img/boots.jpg'),
            new Product('breakfast', 'img/breakfast.jpg'),
            new Product('bubblegum', 'img/bubblegum.jpg'),
            new Product('chair', 'img/chair.jpg'),
            new Product('cthulhu', 'img/cthulhu.jpg'),
            new Product('dog-duck', 'img/dog-duck.jpg'),
            new Product('dragon', 'img/dragon.jpg'),
            new Product('pen', 'img/pen.jpg'),
            new Product('pet-sweep', 'img/pet-sweep.jpg'),
            new Product('scissors', 'img/scissors.jpg'),
            new Product('shark', 'img/shark.jpg'),
            new Product('sweep', 'img/sweep.png'),
            new Product('tauntaun', 'img/tauntaun.jpg'),
            new Product('unicorn', 'img/unicorn.jpg'),
            new Product('usb', 'img/usb.gif'),
            new Product('water-can', 'img/water-can.jpg'),
            new Product('wine-glass', 'img/wine-glass.jpg'),
        );
        this.showProducts();
    },
    showProducts: function () {
        const div = document.getElementById('container');
        for (let i = 0; i < this.products.length; i++) {
            div.appendChild(this.products[i].render());
        }
    }
}

Product.prototype.render = function () { // render = shows on screen
    const ele = document.createElement('img');
    ele.src = this.filepath;
    ele.setAttribute('alt', this.name);
    return ele;
};

researchStudy.start();