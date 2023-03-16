let number_1 = prompt('Enter first number: ');
let number_2 = prompt('Enter second number: ');

if (number_1 === "" || number_2 === "") {
  alert("You did not entered one of the numbers");
} else if (number_2 == 0) {
  alert("Error: you can't divide by 0");
} else if (number_1 < number_2) {
  let confirmMessage = confirm(
    "Do you want to continue?"
  );
  if (confirmMessage) {
    let subtraction = number_1 - number_2;
    alert(`the subtraction of your numbers is ${subtraction}`);
  }
} 
let sum = Number(number_1) + Number(number_2);
alert(`The sum of your numbers is: ${sum}`);

let multiplication = Number(number_1) * Number(number_2);
alert(`The multiplication of your numbers is: ${multiplication}`);

let division = Number(number_1) / Number(number_2);
alert(`The division of your numbers is: ${division}`);




