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
        this.clearBoard();
        //this.showProducts();
        //researchStudy.getRandomProducts();
        
        const container = document.getElementById('container');
        container.addEventListener('click', function() {
            console.log('was clicked', event.target);
            
            const alt = event.target.alt;
            for (let i = 0; i < researchStudy.products.length; i++) {
                const product = researchStudy.products[i];
                
                console.log("alt ", alt);
                
                if (alt === product.name) {
                    product.timesClicked++;
                    console.table(product);
                }
            }
        });
        
    },
    
    // showProducts: function () {
    //     const div = document.getElementById('container');
    //     for (let i = 0; i < selectedProducts.length; i++) {
    //         div.appendChild(selectedProducts[i].render());
    //     }
    // },
    getRandomProducts: function () {
        const selectedProducts = [];
        while (selectedProducts.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.products.length);
            const product = this.products[randomNumber];
            if (!selectedProducts.includes(product)) {
                product.timesShown++;
                console.log('product',product);
                selectedProducts.push(product);
            }
        }
        console.table(selectedProducts);
    },
    
    // after click, 3 new random images
    //     - call random in click fx?
    clearBoard: function () {
        const div = document.getElementById('container');
        div.textContent = '';
        console.log('test', div.textContent);
    }
}

researchStudy.start();

//////////chart//////////
var ctx = document.getElementById("chart");
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
});