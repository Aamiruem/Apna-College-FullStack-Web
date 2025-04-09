a = 25
typeof a
console.log(a)


// Variable Declaration in JavaScript
// You can declare variables using:

// var (older, function-scoped)

// let (block-scoped, can be reassigned)

// const (block-scoped, cannot be reassigned)

// Using 'var' (older way, function-scoped)
var name = "John";
name = "Doe"; // Can be reassigned

// Using 'let' (modern, block-scoped)
let age = 25;
age = 26; // Can be reassigned

// Using 'const' (constant, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable

// Example with different data types
let isActive = true; // Boolean
let score = 100; // Number
let user = { id: 1, name: "Alice" }; // Object
let colors = ["red", "green", "blue"]; // Array

// console.log(name, age, PI, isActive, score, user, colors);
// Key Points:
// var is function-scoped and hoisted (avoid in modern JS).

// let allows reassignment and is block-scoped.

// const does not allow reassignment (but objects/arrays can be modified).

// Always prefer const unless you need to reassign a variable.

// Would you like a more specific example or explanation? Let me know how I can help! 🚀
