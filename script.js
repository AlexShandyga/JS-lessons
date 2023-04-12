//1. Зробити функції для додавання, віднімання, множення і ділення чисел. В тілі функції обовʼязково добавити перевірку на те, чи є параметр числом

let number_1 = prompt('Enter first number: ');
let number_2 = prompt('Enter second number: ');

number_1 = Number(number_1);
number_2 = Number(number_2);

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
    alert(`The result of subtraction is ${result}`);
}

subtraction(number_1, number_2);

////////////sum///////////////////////

function sum(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 + num2;
    };
    alert(`The result of sum is ${result}`);
}

sum(number_1, number_2);

/////////////multiplication////////////////

function multiplication(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 * num2;
    };
    alert(`The result of multiplication is ${result}`);
}
multiplication(number_1, number_2);

/////////////division////////////////


function division(num1, num2) {
    let result = 0;
    if (checkIfNumber(num1, num2)) {
        result = num1 / num2;
    };
    alert(`The result of division is ${result}`);
}
division(number_1, number_2);


//2. Зробити функції для пошуку мінімального і максимального числа в масиві. Масив має бути аргументом функції. Для пошуку мінімального та максимального чисел використовуйте різні цикли.

const arr = [23, 5, 13, 58, 82, 1];

//функція для пошуку МІНІМАЛЬНОГО числа в масиві

function findMin(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return `the min number is ${min}`;
};


//функція для пошуку МАКСИМАЛЬНОГО числа в масиві

function findMax(numbers) {
    let max = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        i++;
        if (numbers[i] > max) {
            max = numbers[i];
        }
    };
    return `the max number is ${max}`;
};