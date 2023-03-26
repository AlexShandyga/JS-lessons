function isObjectEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        console.log('Object is empty');
    }
    else return 'Object is not empty'
};

const user = {
    name: 'Alex',
    age: 33,
    sayHello() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`)
    }
};



let Calculator = {
    num1: 0,
    num2: 0,
    ask() {
        this.num1 = +prompt('Enter first digit: ');
        this.num2 = +prompt('Enter second digit: ');
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};
