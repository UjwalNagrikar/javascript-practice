// funcation in js

// function declaration
function sum(a, b) {
    return a + b;
}
console.log("Sum: ", sum(5, 10));

// function expression
const multiply = function (a, b) {
    return a * b;
}
console.log("Multiply: ", multiply(5, 10));

// arrow function   
const divide = (a, b) => {
    return a / b;
}
console.log("Divide: ", divide(10, 5));

// subtraction using arrow function

const subtract = (a, b) => a - b;
console.log("Subtract: ", subtract(10, 5));