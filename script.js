const arr = [23, 'day', false, 5, 13, 'green', 58, null, 82, 1];

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
}

console.log(min);
console.log(max);


// Написати скрипт який виведе наступне:
const rowLength = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "#";
    }
    console.log(pattern);
}

