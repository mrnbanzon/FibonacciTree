// fibonacci class
class Fibonacci {
  constructor() {
    // array holding fibonacci sequence
    this.fibSequence = [0, 1];
  }

  // calculates the nth fibonacci; stores it in FibSequence by index n
  calculate(n) {
    if (typeof n !== 'number') return null;

    if (n < 0) return null;

    if (n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    if (this.fibSequence[n] === undefined) {
      this.fibSequence[n] = this.calculate(n - 1) + this.calculate(n - 2);
    }

    return this.fibSequence[n];
  }

  // creates fibonacci tree. Formatted for treant-js
  createTree(n) {
    if (typeof n !== 'number') return null;

    if (n < 0) return null;

    if (n === 0) {
      return {
        text: { name: 0 }
      };
    }

    if (n === 1) {
      return {
        text: { name: 1 }
      };
    }

    if (this.fibSequence[n] === undefined) {
      this.calculate(n);
    }

    // text: value at tree node
    // children[0]: fibTree of n - 1
    // children[1]: fibTree of n - 2
    var root = {
      text: { name: this.fibSequence[n] },
      children: [this.createTree(n - 1), this.createTree(n - 2)]
    };

    return root;
  }
}
