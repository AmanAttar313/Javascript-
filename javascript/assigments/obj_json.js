// Assignment 1: Create an object with 4 properties
let student = {
  name: "Aman",
  age: 20,
  grade: "A",
  city: "Baramati"
};


console.log("Dot Notation:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);
console.log("City:", student.city);


console.log("\nBracket Notation:");
console.log("Name:", student["name"]);
console.log("Age:", student["age"]);
console.log("Grade:", student["grade"]);
console.log("City:", student["city"]);

// Assignment 2: Add a method that prints a greeting
student.greet = function() {
  console.log(`\nHello, my name is ${this.name} and I'm from ${this.city}.`);
};
student.greet();

// Assignment 3: Create array of student objects and convert to JSON
let students = [
  { name: "Aman", age: 20, grade: "A", city: "Baramati" },
  { name: "Ravi", age: 21, grade: "B", city: "Pune" },
  { name: "Sneha", age: 19, grade: "A", city: "Mumbai" }
];

let jsonStudents = JSON.stringify(students);
console.log("\nStudent Array as JSON:");
console.log(jsonStudents);
