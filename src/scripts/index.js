// accept nth fibonacci and display tree.
// utilizes treant-js, which should be loaded prior to this file.

const fibonacciTree = {
  chart: {
    container: '#fibonacci-tree',
    connectors: { type: 'straight' }
  },
  nodeStructure: {
    text: { name: 'Parent node' },
    children: [
      {
        text: { name: 'First child' }
      },
      {
        text: { name: 'Second child' }
      }
    ]
  }
};

const inputFibonacci = document.querySelector('#input-fibonacci');
const enterFibonacci = document.querySelector('#enter-fibonacci');

function handleClick() {
  var nthFibonacci = inputFibonacci.value;
  var chart = new Treant(fibonacciTree);
}

enterFibonacci.addEventListener('click', handleClick);
