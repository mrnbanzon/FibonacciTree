// accept nth fibonacci and display tree.
// utilizes fibonacciTree.js, which should be loaded prior to this file.
// utilizes treant-js, which should be loaded prior to this file.

// initial state of tree input for treant-js
// documentation for treant-js: http://fperucic.github.io/treant-js/
const fibonacciTree = {
  chart: {
    container: '#fibonacci-tree',
    connectors: { type: 'straight' },
    levelSeparation: 15,
    siblingSeparation: 10,
    subTeeSeparation: 10
  },
  nodeStructure: {}
};

const fibonacci = new Fibonacci();
const inputFibonacci = document.querySelector('#input-fibonacci');
const enterFibonacci = document.querySelector('#enter-fibonacci');

// upon clicking enter create fibonacci tree
function handleClick() {
  var nth = parseInt(inputFibonacci.value);

  if (isNaN(nth)) {
    alert('n must be a number');
  } else if (nth < 0) {
    alert('n must be greater than or equal to 0');
  } else {
    fibonacciTree.nodeStructure = fibonacci.createTree(nth);
    var chart = new Treant(fibonacciTree);
  }
}

// allow for pressing enter upon input
function handleKeyUp(e) {
  if (e.keyCode === 13) {
    handleClick();
  }
}

enterFibonacci.addEventListener('click', handleClick);
inputFibonacci.addEventListener('keyup', handleKeyUp);
