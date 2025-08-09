// implicit return with arrow functions means that the function automatically returns the result of an expression without needing to explicitly write return—but it only works if the function body is one expression and does not use curly braces { }.

// Syntax
// javascript
// Copy
// Edit
// Explicit return (normal way)
const add1 = (a, b) => {
    return a + b;
};

// Implicit return (shorter way)
const add2 = (a, b) => a + b;
// Examples
// 1. Single - line expression
// javascript
// Copy
// Edit
const square = x => x * x;
console.log(square(5)); // 25
// No { } → No return keyword needed → Automatically returns x * x.

// 2. Returning an object(wrap in parentheses)
// If you want to implicitly return an object literal, you must wrap it in () to avoid { } being mistaken for a function block.

//     javascript
// Copy
// Edit
const getUser = () => ({ name: "Aamir", age: 25 });

console.log(getUser());
// { name: "Aamir", age: 25 }
// 3. Using with map, filter, reduce
// javascript
// Copy
// Edit
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
// ✅ Key Points

// Works only for single expressions without curly braces.

// If using { }, you must explicitly write return.

// Wrap returned objects in ().






















// 1. Sum of two numbers (fixed variable name)
const sum = (a, b) => a + b;

// 2. Cube of a number (implicit return)
const cube = n => n * n * n;

// 3. Power of a number (explicit return, multiple lines)
const pow = (a, b) => {
    return a ** b;
};

// 4. Function that prints "hello world"
const hello = () => console.log("hello world");

// 5. Multiplication of two numbers (implicit return)
const mul = (a, b) => a * b;

// Testing them:
console.log(sum(2, 3));   // 5
console.log(cube(3));     // 27
console.log(pow(2, 4));   // 16
hello();                  // hello world
console.log(mul(4, 5));   // 20
