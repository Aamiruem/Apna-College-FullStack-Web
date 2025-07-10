if (true) {
    console.log("It has true value, Condition is true");
} else {
    console.log(" It has false value, Condition is false");
}



let string = " ";
if (string) {
    console.log("string is not empty");
} else {
    console.log("string is empty");

}



let num = -10;
if (num) {
    console.log("num is not equal to 0");
} else {
    console.log("num is equal to 0");
}






// In JavaScript, values are considered either "truthy" or "falsy" when evaluated in a boolean context(like in if conditions or logical operations).

// Falsy Values(Evaluate to false)
// These values are treated as false in boolean conditions:

// false

// 0(zero)

// "" or ''(empty string)

// null

// undefined

// NaN(Not a Number)

// 0n(BigInt zero)

// Example:

// javascript
if (0) {
    console.log("This won't run"); // 0 is falsy
} else {
    console.log("0 is falsy"); // ✅ This runs
}
// Truthy Values(Evaluate to true)
// Everything else is truthy, including:

// true

// Any non - zero number(1, -1, 3.14, etc.)

// Any non - empty string("hello", "0", "false")

// Objects({}, [], new Date())

// Functions

// Example:

// javascript
if ("hello") {
    console.log("Non-empty strings are truthy"); // ✅ This runs
}

if ([]) {
    console.log("Empty arrays are truthy"); // ✅ This runs
}
// Common Use Cases
// Checking if a variable has a value:

// javascript
let name = "";
if (name) {
    console.log("Name exists"); // ❌ Won't run (empty string is falsy)
} else {
    console.log("Name is empty"); // ✅ Runs
}
// Default values with || (OR operator):

// javascript
let username = null;
let defaultName = username || "Guest"; // "Guest" (since `null` is falsy)
console.log(defaultName); // Output: "Guest"


// Optional chaining(?.) with truthy / falsy checks:
// javascript
const user = { name: "Alice", age: 25 };
console.log(user.address?.city || "No city"); // "No city" (since `address` is undefined)
// Key Takeaways
// ✅ Falsy values: false, 0, "", null, undefined, NaN, 0n
// ✅ Everything else is truthy(including "0", [], {}, functions)
// ✅ Use Boolean(value) or!!value to explicitly check truthiness 

