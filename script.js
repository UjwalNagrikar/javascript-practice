// // data types in java script

// // String = text

// let name = "Ujwal";
// console.log(name);

// // Number

// let age = 19;
// console.log("Age is ", age);

// // Array 

// let arr = [1, 2, 3, 4, 5];
// console.log("These is an array:", arr);

// // Object

// let person = {
//     name: "Ujwal",
//     age: 19,
//     city: "Nagpur"
// }
// console.log("This is an object:", person);


// // Operators

// // Arithmetic Operators
// let a = 10;
// let b = 20;
// console.log("Addition: ", a + b);
// console.log("Subtraction: ", a - b);
// console.log("Multiplication: ", a * b);
// console.log("Division: ", a / b);
// console.log("Modulus: ", a % b);

// // Assignment Operators
// let c = 5;
// c += 10;
// console.log("Assignment Operator (+=): ", c);

// // Comparison Operators
// console.log("Equal to (==): ", a == b);
// console.log("Not equal to (!=): ", a != b);
// console.log("Greater than (>): ", a > b);
// console.log("Less than (<): ", a < b);
// console.log("Greater than or equal to (>=): ", a >= b);
// console.log("Less than or equal to (<=): ", a <= b);

// // Logical Operators
// let x = true;
// let y = false;
// console.log("Logical AND (&&): ", x && y);
// console.log("Logical OR (||): ", x || y);
// console.log("Logical NOT (!): ", !x);

// // Increment and Decrement Operators
// let d = 5;
// console.log("Increment (d++): ", d++);
// console.log("Decrement (d--): ", d--);


// // Conditional Statements

// // vote 

// let age1 = 18;

// if (age1 >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }

// // even and odd
// let num = 10;

// if (num % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// // nested if

// let marks = 85;

// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else if (marks >= 70) {
//     console.log("Grade: C");
// } else if (marks >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// // Conditional statements are used to execute different blocks of code based on whether a condition is true or false.

// let time = 14;

// if (time < 12) {
//     console.log("Good morning!");
// } else if (time < 18) {
//     console.log("Good afternoon!");
// } else {
//     console.log("Good evening!");
// }

// Loops in js 

// for loop

// for (let i = 0; i < 5; i++) {
//     console.log("For loop iteration: ", i);
// }

// // while loop

// let j = 0;
// while (j < 5) {
//     console.log("While loop iteration: ", j);
//     j++;
// }

// // do-while loop

// let k = 0;
// do {
//     console.log("Do-While loop iteration: ", k);
//     k++;
// } while (k < 5);

// arrays 

let arr1 = [1, 2, 3, 4, 5];
console.log("Array: ", arr1);

// array methods
console.log("Array length: ", arr1.length);
console.log("Array push: ", arr1.push(6));
console.log("Array pop: ", arr1.pop());

// update values
arr1[0] = 10;
console.log("Updated Array: ", arr1);

// loop through array

for (let i = 0; i < arr1.length; i++) {
    console.log("Array element at index ", i, ": ", arr1[i]);
}



