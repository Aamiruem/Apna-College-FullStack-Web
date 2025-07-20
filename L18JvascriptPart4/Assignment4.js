// let prompt = require("prompt-sync")();

// let n = prompt("enter the number ");
// let factorial = 1;

// for(let i = 1; i<= n; i++){
//     factorial = factorial * i;

// }
// console.log((`factorial of ${n} is ${factorial}`));





// let n = 7;          // Input number (you can change this value to test other numbers)
// let factorial = 1;  // Initialize factorial to 1 (since 0! = 1 by definition)

// // Loop from 1 to n
// for (let i = 1; i <= n; i++) {
//     factorial *= i;  // Multiply factorial by i in each iteration
// }

// // Print the result
// console.log(`The factorial of ${n} is: ${factorial}`);







const prompt = require("prompt-sync")(); // Import prompt-sync for user input

// Ask user for input
let n = parseInt(prompt("Enter the number: ")); // Convert input string to number

let factorial = 1; // Initialize factorial to 1 (important for multiplication)

// Loop from 1 to n and multiply each number
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

// Output the result
console.log(`Factorial of ${n} is ${factorial}`);
