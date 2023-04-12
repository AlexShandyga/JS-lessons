/////////////////////////////
function checkIfNumber(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return true;
    } else {
        alert("One of your parameters is not a number");
    }
};

////////////subtraction////////////////
function subtraction(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 - num2;
    };
    return result;
}


////////////sum///////////////////////

function sum(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 + num2;
    };
    return result;
}


/////////////multiplication////////////////

function multiplication(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 * num2;
    };
    return result;
}


/////////////division////////////////


function division(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 / num2;
    };
    return result;
}
///////////////////////////////////////////
const arr = [23, 'day', false, 5, 13, 'green', 58, null, 82, 1];

//функція для пошуку МІНІМАЛЬНОГО числа в масиві

function findMin(numbers) {
    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (typeof arr[i] === "number") {
            if (numbers[i] < min) {
                min = numbers[i];
            };
        };
    };
    return min;
};
findMin(arr);


//функція для пошуку МАКСИМАЛЬНОГО числа в масиві

function findMax(numbers) {
    let max = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        i++;
        if (typeof arr[i] === "number") {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        };
    };
    return max;
};

//////////////////////////////////////////////

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
console.log(acc.clear());
console.log(acc.number);

////////////////////////////////////////////




