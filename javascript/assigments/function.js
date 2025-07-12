// Assignment 1: Greeting function using template literal
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript world.`;
}
console.log(greet("Aman"));

// Assignment 2: Check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log("even or no even", isEven(4));   // true
console.log(" 7 even or no even ", isEven(7));   // false

// Assignment 3: Arrow functions for math
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

console.log("Add: 5 + 3 =", add(5, 3));
console.log("Subtract: 10 - 4 =", subtract(10, 4));
console.log("Multiply: 6 * 2 =", multiply(6, 2));
