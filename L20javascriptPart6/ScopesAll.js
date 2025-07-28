// 🔢 1. Scope(What is it ?)
// Scope refers to the area in a program where a variable is defined and can be accessed.

// Think of scope as visibility:
// "Where can I see and use this variable?"

// 📁 There are 3 Main Types of Scope in JavaScript:
// Type	Meaning
// Global Scope	Variables you can use anywhere in your code
// Function Scope	Variables you can use only inside a function
//     Block Scope	Variables you can use only inside a { } block, like in if, for, etc.

// 🌍 1. Global Scope
// Definition:
// A variable declared outside all functions or blocks.

// Accessible everywhere in your code — inside or outside functions.

//     js
// Copy
// Edit
let name = "Aamir"; // 🌍 Global Scope

function greet() {
    console.log(name); // ✅ Can access global variable
}

greet();
console.log(name); // ✅ Can access outside too
// 🔧 2. Function Scope
// Definition:
// A variable declared inside a function is accessible only in that function.

// js
// Copy
// Edit
function showAge() {
    let age = 25; // 🛠 Function Scope
    console.log(age); // ✅ Accessible here
}

showAge();
console.log(age); // ❌ Error: age is not defined outside
// 🔑 var, let, and const all obey function scope when used inside functions.

// 🧱 3. Block Scope
// Definition:
// A variable declared inside a block { } is accessible only within that block.

// Applies to: let and const (not var)

//     Example with if block:
//         js
// Copy
// Edit
if (true) {
    let msg = "Hello"; // 🧱 Block Scope
    console.log(msg);  // ✅ OK inside block
}

console.log(msg); // ❌ Error: msg is not defined outside
// Example with for loop:
//     js
// Copy
// Edit
for (let i = 0; i < 3; i++) {
    console.log(i); // ✅ OK
}
console.log(i); // ❌ Error: i is block scoped
// ⚠️ Note: var ignores block scope — that's why we avoid using it in modern JavaScript.

// js
// Copy
// Edit
if (true) {
    var color = "red";
}
console.log(color); // ✅ (bad practice)
// 🧠 Summary Chart:
// Scope Type	Declared Where ? Visible Where ? Uses
// Global	Outside all blocks	Everywhere	For shared config or data
// Function	Inside a function Only inside that function For local, private logic
// Block	Inside { } using let or const Only inside that block	For loop/condition logic
