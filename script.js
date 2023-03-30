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

    const resultMin = document.createElement('p');
    const resultMax = document.createElement('p');


    if (min < 0) {
        resultMin.style.color = 'red';
    }
    else {
        resultMin.style.color = 'green';
    }

    const minText = `The min number is ${min}`;


    if (max < 0) {
        resultMax.style.color = 'red';
    }
    else {
        resultMax.style.color = 'green';
    }
    const maxText = `The max number is ${max}`;

    resultMin.textContent = minText;
    resultMax.textContent = maxText;

    document.body.appendChild(resultMin);
    document.body.appendChild(resultMax);
}

let arr = [3, 5, 6, -79, 23];
findMinMax(arr);

let number_1 = prompt('Enter first number: ');
let number_2 = prompt('Enter second number: ');

number_1 = Number(number_1);
number_2 = Number(number_2);

function subtraction(num1, num2) {
    let resultSub = 0;
    let subtractionResult = document.createElement('p');

    if (typeof num1 === "number" && typeof num2 === "number") {
        resultSub = num1 - num2;
    } else {
        alert("One of your parameters is not a number");
    }

    const subtractionText = document.createTextNode(`The result of subtraction is ${resultSub}`);
    subtractionResult.appendChild(subtractionText);
    document.body.appendChild(subtractionResult);

    if (resultSub < 0) {
        subtractionResult.style.color = 'red';
    }
    else {
        subtractionResult.style.color = 'green';
    }
    return resultSub;
}

const result = subtraction(number_1, number_2);
console.log(result);