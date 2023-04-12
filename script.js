// homework 23

const arr = [23, 'day', false, 5, 13, 'green', 58, null, 82, 1];

let min = Infinity;
let max = -Infinity;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i]) {
            sum += arr[i];
        }
    }
}
console.log(min);
console.log(max);
console.log(sum);



const rowLength = 5;
let pattern = '';
for (let i = 1; i <= rowLength; i++) {
    pattern += '#';
    console.log(pattern);
}

// homework 26

function Accumulator(number) {
    this.number = number;
    this.increment = function () {
        this.number++;
        return this.number;
    };
    this.decrement = function () {
        this.number--;
        return this.number;
    };
};

function CancelableAccumulator(number) {
    Accumulator.call(this, number);

    this.clear = function () {
        this.number = number;
    };
}
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

let acc = new CancelableAccumulator(4);

console.log(acc.increment());
console.log(acc.decrement());
console.log(acc.decrement());
console.log(acc.clear());
console.log(acc.number);

// homework 28