// Assignment 1: Create array of 5 products and print using forEach
let products = ["Laptop", "Fan", "Mobile", "Monitor", "tv"];
console.log("Product List:");
products.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});

// Assignment 2: Convert Celsius to Fahrenheit using map
let celsiusTemps = [0, 20, 30, 37, 100];
let fahrenheitTemps = celsiusTemps.map(temp => (temp * 9/5) + 32);
console.log("\nCelsius to Fahrenheit:");
console.log("Celsius:", celsiusTemps);
console.log("Fahrenheit:", fahrenheitTemps);

// Assignment 3: Filter strings longer than 4 characters
let words = ["pen", "notebook", "apple", "cat", "laptop", "bag"];
let longWords = words.filter(word => word.length > 4);
console.log("\nWords longer than 4 characters:");
console.log(longWords);  /
