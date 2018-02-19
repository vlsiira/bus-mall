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
    //productsClicked: [],
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
        
        //console.log('draw function working?')
        
        // for (let t = 0; t < 5; t++) {
            //     const randomSize = Math.floor(Math.random() * t * 10);
            //     for (let i = 0; i < 3; i++) {
                //         const randomX = Math.floor(Math.random() * (700 - 100));
                //         ctx.beginPath();
                //         ctx.ellipse(randomX, ctx.canvas.height - t * 70, randomSize, randomSize, 45 * Math.PI/180, 0, 2 * Math.PI);
                //         ctx.strokeStyle = 'white';
                //         ctx.stroke();
                //     };
                // }
        // const canvas = document.getElementById('chart');  **sec
        // const ctx = canvas.getContext('2d');
        // //ctx.fillstyle = 'blue';
        // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        // setInterval(draw, 1000);  **sec

        //function draw () {
            //ctx.fillstyle = 'blue';
            //ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //this.end();
        //}
    },

    // draw: function () {
    //     ctx.fillstyle = 'blue';
    //     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //     this.end();
    // },

    // end: function () {
    //     //this.researchStudy.removeEventListener('click', handleClicks);
    //     //this.board.classList.add('game-over');
    //     this.drawChart();
    //     console.log('calling drawChart in end function');
    // },
    // drawChart: function () {
    //     // get the canvas to show chart
    //     const chartCanvas = document.getElementById('chart');
    //     const chartCtx = chartCanvas.getContext('2d');


    //     // todo create arrays with just names and just timesClicked
    //     const names = [];
    //     const timesClicked = [];
    //     for(let i = 0; i < this.products.length; i ++) {
    //         names.push(this.products[i].name);
    //         timesClicked.push(this.products[i].timesClicked);
    //     }

    //     console.log('names');
    //     console.log('timesClicked', timesClicked);

    //     const chart = new Chart(chartCtx, { // eslint-disable-line
    //         type: 'bar',
    //         data: {
    //             labels: names,
    //             datasets: [{
    //                 label: 'number of times clicked',
    //                 data: timesClicked
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero:true
    //                     }
    //                 }]
    //             }
    //         }
    //     });

    // },

    end: function () {
        var ctx = document.getElementById("chart").getContext('2d');

        const names = [];
        const productsClicked = [];
        for (let i = 0; i < this.products.length; i++) {
            names.push(this.products[i].name);
            productsClicked.push(researchStudy.products[i].timesClicked);
        }

        //console.log('times clicked', timesClicked);

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
        // for (let i = 0; i < researchStudy.products.length; i++) {
        //     researchStudy.productsClicked.push(product.timesClicked);
        // }

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
            //console.log('product clicked', product.timesClicked);
            //console.log('product pushed into array', researchStudy.productsClicked);
        }
    }
}

researchStudy.start();
