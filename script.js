function findMinMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return `the min number is ${min} and max number is ${max}`;
}
const arr = [23, 5, 13, 58, 82, 1];
const maxNumber = findMinMax(arr);
alert(maxNumber);



let number_1 = prompt('Enter first number: ');
let number_2 = prompt('Enter second number: ');

number_1 = Number(number_1);
number_2 = Number(number_2);

function subtraction(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        alert(num1 - num2);
    } else {
        alert("One of your parameters is not a number");
    }
}

subtraction(number_1, number_2);



function sum(num1, num2) {

    if (typeof num1 === "number" && typeof num2 === "number") {
        alert(num1 + num2);
    } else {
        alert("One of your parameters is not a number");
    }
}
sum(number_1, number_2);

function multiplication(num1, num2) {

    if (typeof num1 === "number" && typeof num2 === "number") {
        alert(num1 * num2);
    } else {
        alert("One of your parameters is not a number");
    }
}
multiplication(number_1, number_2);

function division(num1, num2) {

    if (typeof num1 === "number" && typeof num2 === "number") {
        alert(num1 / num2);
    } else {
        alert("One of your parameters is not a number");
    }
}
division(number_1, number_2);



