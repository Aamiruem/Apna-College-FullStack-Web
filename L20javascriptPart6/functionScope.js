// 🔧 functionScope — Explained in Simple Terms
// ✅ Definition:
// A function scope means that variables declared inside a function are only accessible within that function.

// JavaScript creates a new scope each time a function is called.

// 📌 Only These Keywords Respect Function Scope:
// Keyword	Function Scope ?
// var	✅ Yes
// let	✅ Yes(but also block scoped)
// const	✅ Yes (but also block scoped)

// 🧠 Basic Example:
// js
// Copy
// Edit
function greet() {
    var name = "Aamir"; // 🛠 function-scoped
    console.log(name); // ✅ "Aamir"
}

greet();
console.log(name);   // ❌ ReferenceError: name is not defined
// The variable name is declared inside the function greet, so it can’t be used outside.

// ⚠️ Why Function Scope is Important
// Prevents variable name conflicts

// Keeps data private and safe within functions

// Helps organize code better

// 🧪 More Examples
// ✅ With let:
// js
// Copy
// Edit
function showAge() {
    let age = 22; // only visible here
    console.log(age); // ✅
}
showAge();
console.log(age); // ❌ ReferenceError
// ✅ With const:
//     js
// Copy
// Edit
function calculate() {
    const pi = 3.14;
    console.log(pi); // ✅
}
calculate();
console.log(pi); // ❌
// ❗ var is only function-scoped, NOT block - scoped
// js
// Copy
// Edit
function example() {
    if (true) {
        var x = 10; // still available in whole function
    }
    console.log(x); // ✅ 10
}
// But with let or const, this would fail outside the block!

// ✅ Summary Table:
// Concept	Meaning
// Function Scope	Variables declared inside a function are visible only inside that function
//     Used By	var, let, const
//         Useful For	Encapsulation, preventing pollution of global scope
