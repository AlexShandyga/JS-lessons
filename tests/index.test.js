


/////////////////////////////////////////////

describe("Check if entered data is a number", () => {
    const desc = "<p>User entered numbers</p>";

    describe(desc, () => {
        it("Should return true", () => {
            const result = checkIfNumber(2, 3)
            expect(result).toBe(true);
        });
    });
});



describe("Subtraction of two numbers", () => {
    const desc = "<p>Subtraction of two numbers</p>";

    describe(desc, () => {
        it("Should return 1", () => {
            const result = subtraction(3, 2)
            expect(result).toBe(1);
        });
    });
});

describe("Sum of two numbers", () => {
    const desc = "<p>Sum of two numbers</p>";

    describe(desc, () => {
        it("Should return 5", () => {
            const result = sum(3, 2)
            expect(result).toBe(5);
        });
    });
});

describe("Multiplication of two numbers", () => {
    const desc = "<p>Multiplication of two numbers</p>";

    describe(desc, () => {
        it("Should return 6", () => {
            const result = multiplication(3, 2)
            expect(result).toBe(6);
        });
    });
});

describe("Division of two numbers", () => {
    const desc = "<p>Division of two numbers</p>";

    describe(desc, () => {
        it("Should return 3", () => {
            const result = division(6, 2)
            expect(result).toBe(3);
        });
    });
});

////////////////////////////////


describe("The min number in the array", () => {
    const desc = "<p>The min number in the array</p>";

    describe(desc, () => {
        it("The min number in the array is 1", () => {
            const result = findMin(arr);
            expect(result).toBe(1);
            console.log(result);
        });
    });
});

describe("The max number in the array", () => {
    const desc = "<p>The max number in the array</p>";

    describe(desc, () => {
        it("The max number in the array is 82", () => {
            const arr = [23, 'day', false, 5, 13, 'green', 58, null, 82, 1];
            const result = findMax(arr);
            expect(result).toBe(82);
            console.log(result);
        });
    });
});

///////////////////////////////////////////////

describe("Acc increment", () => {
    const desc = "<p>Acc increment</p>";

    describe(desc, () => {
        it("Acc increment is 5", () => {
            const result = acc.increment();
            expect(result).toBe(5);
        });
    });
});

describe("Acc decrement", () => {
    const desc = "<p>Acc decrement</p>";

    describe(desc, () => {
        it("Acc decrement is 4", () => {
            const result = acc.decrement();
            expect(result).toBe(4);
        });
    });
});

describe("Acc clear", () => {
    const desc = "<p>Acc clear</p>";

    describe(desc, () => {
        it("Acc decrement is undefined", () => {
            const result = acc.clear();
            expect(result).toBe(undefined);

        });
    });
});

describe("Acc number", () => {
    const desc = "<p>Acc number</p>";

    describe(desc, () => {
        it("Acc number is 4", () => {
            const result = acc.number;
            expect(result).toBe(4);
            console.log(result);
        });
    });
});

//////////////////////////////////////////////////





