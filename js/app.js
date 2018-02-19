'use strict';

function Product (name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0;
    this.timesClicked = 0;
    
}

Product.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src = this.filepath;
    ele.setAttribute('alt', this.name);
    return ele;
};

const researchStudy = {
    products: [],
    selectedProducts: [],
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
        
        this.getRandomProducts();
        this.showProducts();
        
        const container = document.getElementById('container');
        container.addEventListener('click', handleClicks);
    },

    end: function () {

        var ctx = document.getElementById("chart").getContext('2d');

        const names = [];
        const productsClicked = [];
        console.log(productsClicked);
        for (let i = 0; i < this.products.length; i++) {
            names.push(this.products[i].name);
            productsClicked.push(researchStudy.products[i].timesClicked);
        }

        // if (localStorage.getItem('products')) {
        //     let oldPlayCount = localStorage.getItem('products');
        //     oldPlayCount++;
        //     localStorage.setItem('products', oldPlayCount);
        //     //console.log(oldPlayCount);
        // } else {
            localStorage.setItem('products', productsClicked);
        //}

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: '# of Clicks',
                    data: productsClicked,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        })
    },

    getRandomProducts: function () {
        this.selectedProducts = [];
        while (this.selectedProducts.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.products.length);
            const product = this.products[randomNumber];
            if (!this.selectedProducts.includes(product)) {
                product.timesShown++;
                this.selectedProducts.push(product);
            }
        }
        return this.selectedProducts;
    },

    showProducts: function () {
        const div = document.getElementById('container');
        for (let i = 0; i < this.selectedProducts.length; i++) {
            div.appendChild(this.selectedProducts[i].render());
        }
    },
    
    clearBoard: function () {
        const div = document.getElementById('container');
        div.textContent = '';
    }
}

let boardClicked = 0;
function handleClicks() {

    researchStudy.clearBoard();
    researchStudy.getRandomProducts();
    researchStudy.showProducts();
    researchStudy.end();
    
    const alt = event.target.alt;

    if (boardClicked < 26) {
        boardClicked++;
    } else {
        researchStudy.clearBoard();
        const list = document.getElementById('list');
        for (let i = 0; i < researchStudy.products.length; i++) {
            const liEle = document.createElement('li');
            liEle.textContent = researchStudy.products[i].timesClicked + ' votes for ' + researchStudy.products[i].name;
            list.appendChild(liEle);
        }
    }
    
    for (let i = 0; i < researchStudy.products.length; i++) {
        const product = researchStudy.products[i];
        
        if (alt === product.name) {
            product.timesClicked++;
        }
    }
}

researchStudy.start();
