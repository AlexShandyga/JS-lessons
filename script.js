function Accumulator(number) {
    this.number = number;
    this.increment = function() {
      this.number++;
      return this.number;
    };
    this.decrement = function() {
      this.number--;
      return this.number;
    };
  };

    function CancelableAccumulator(number) {
    Accumulator.call(this, number);
  
    this.clear = function() {
      this.number = number;
    };
  }
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

let acc = new CancelableAccumulator(4);

console.log(acc.increment());
console.log(acc.decrement());
console.log(acc.decrement());
acc.clear()
console.log(acc.number);
