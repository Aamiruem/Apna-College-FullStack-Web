// 🧠 1. Scope
// Scope determines where variables are accessible.

// There are 3 main types in JavaScript:

// Type	Description
// Global	Accessible everywhere
// Function	Only inside the function where it's declared
// Block	Only inside { } (if, for, let, const)

// 🧠 2. Function Scope
// Variables declared inside a function are only accessible within that function.

// js
// Copy
// Edit
function example() {
    let a = 10; // only available inside 'example'
    console.log(a); // ✅
}
console.log(a); // ❌ ReferenceError
// 🧠 3. Block Scope
// let and const are block-scoped: only accessible inside the { } they are declared in.

//     js
// Copy
// Edit
if (true) {
    let x = 5;
    const y = 6;
    console.log(x, y); // ✅
}
console.log(x); // ❌
// Note: var is not block-scoped — only function-scoped!

// js
// Copy
// Edit
if (true) {
    var z = 7;
}
console.log(z); // ✅ (bad practice)
// 🧠 4. Lexical Scope(Closure)
// Lexical scope means inner functions can access variables from their outer function.

// js
// Copy
// Edit
function outer() {
    let msg = "Hello";

    function inner() {
        console.log(msg); // ✅ Has access to outer's variables
    }

    inner();
}
outer();
// ✅ Even though msg is declared in outer, inner can access it.This is lexical scoping.

// 🧠 Summary Table:
// Term	Meaning
// Scope	Where a variable is visible
// Function Scope	Variables inside a function are not visible outside
// Block Scope	let /const visible only in {}
// Lexical Scope	Inner functions can access outer function variables

// 🔁 Bonus Example(Lexical Scope + Block Scope):
// js
// Copy
// Edit
function greet(name) {
    const greeting = "Hello";

    if (name) {
        const punctuation = "!";
        console.log(greeting + " " + name + punctuation); // ✅
    }

    // console.log(punctuation); // ❌ block scoped
}

greet("Aamir");
