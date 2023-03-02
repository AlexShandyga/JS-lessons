let number_1 = prompt('Enter first number: ');
let number_2 = prompt('Enter second number: ');

if(number_1 < number_2) {
    alert('Do you want to continue?');
} 

let sum = Number(number_1) + Number(number_2);
let subtraction = Number(number_1) - Number(number_2);
let multiplication = Number(number_1) * Number(number_2);
let division;
 if (Number(number_2) === 0){
    division = 'Error';
    
} else division = Number(number_1) / Number(number_2);


alert('The sum of your numbers is: ' + sum + '; the subtraction of your numbers is: ' + subtraction + '; the multiplication of your numbers is: ' + multiplication + '; the division of your numbers is: ' + division);
