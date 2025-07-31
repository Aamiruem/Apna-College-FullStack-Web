// Higher-Order Function: Returns a function based on request
function oddEvenTest(request) {
    if (request === "odd") {
        return function (n) {
            console.log(n % 2 !== 0); // true if n is odd
        };
    } else if (request === "even") {
        return function (n) {
            console.log(n % 2 === 0); // true if n is even
        };
    } else {
        console.log("Wrong request");
    }
}

let oddFunction = oddEvenTest("odd");
let evenFunction = oddEvenTest("even");


const isOdd = oddEvenTest("odd");   // returns a function
const isEven = oddEvenTest("even"); // returns another function

isOdd(5);   // true ✅
isOdd(4);   // false ❌

isEven(10); // true ✅
isEven(3);  // false ❌

oddEvenTest("prime"); // "Wrong request" ❌

console.log(isOdd === oddFunction); // true
















// ✅ Higher - Order Function(HOF) That Returns Another Function — Explained
// A higher - order function is a function that either:

// Takes one or more functions as arguments, or

// Returns a function as its result. ✅ (this is your focus)

// 🔄 Example: HOF that returns a function
//     javascript
// Copy
// Edit
function greetGenerator(greeting) {
    // This is a higher-order function that returns another function
    return function (name) {
        // Inner function has access to 'greeting' via closure
        console.log(`${greeting}, ${name}!`);
    };
}
// 🔍 Explanation:
// greetGenerator is a function that takes a greeting string(e.g., "Hello").

// It returns a new function that takes name as a parameter.

// That inner function can use greeting thanks to lexical scope / closure.

// ✅ Usage:
// javascript
// Copy
// Edit
const sayHello = greetGenerator("Hello");
// Now sayHello is: function(name) { console.log("Hello, " + name); }

sayHello("Alice");  // Output: Hello, Alice!
sayHello("Bob");    // Output: Hello, Bob!

const sayHi = greetGenerator("Hi");
sayHi("Aamir");     // Output: Hi, Aamir!
// 💡 Why Use This ?
//     It's great for creating customized or pre-configured functions.

// Common in:

// Closures

// Currying

// Functional programming

// React hooks / event handlers

// 🧠 Bonus: Arrow Function Version
// javascript
// Copy
// Edit
// const greetGenerator = (greeting) => (name) => {
//     console.log(`${greeting}, ${name}!`);
// };
// Usage is the same.

// Let me know if you'd like to see:

// Real - world use cases(e.g.in React or event handling)

// A visual diagram of closures and HOFs

// A code challenge using HOFs
