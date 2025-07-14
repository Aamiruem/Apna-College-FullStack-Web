// 🔹 Examples of String Immutability
// 1. Accessing Characters(No Direct Modification)
// javascript
let str = "hello";
str[0] = "H"; // ❌ Attempt to modify the string (won't work)
console.log(str); // Output: "hello" (unchanged)

// 2. String Methods Return New Strings
// javascript
let original = "hello";
let upper = original.toUpperCase(); // Creates a new string
console.log(original); // "hello" (unchanged)
console.log(upper);    // "HELLO" (new string)

// 3. Concatenation Creates a New String
// javascript
let str1 = "Hello";
let str2 = " World";
let combined = str1 + str2; // New string created
console.log(combined); // "Hello World"
console.log(str1); // "Hello" (unchanged)


// 🔹 Why Are Strings Immutable ?
//     Performance Optimization: JavaScript engines optimize string storage(e.g., string interning).

// Thread Safety: Immutability prevents unexpected changes in multi - threaded environments(though JS is single - threaded).

//     Consistency: Ensures predictable behavior when strings are passed around.

// 🔹 Common String Methods(All Return New Strings)
// Method	Example	Result(New String)
// toUpperCase()	"abc".toUpperCase()	"ABC"
// toLowerCase()	"ABC".toLowerCase()	"abc"
// trim()	" hello ".trim()	"hello"
// slice()	"hello".slice(1, 3)	"el"
// replace()	"hello".replace("h", "H")	"Hello"
// 🔹 Conclusion
// You cannot modify a string directly in JavaScript.

// Every string operation returns a new string.

// Original strings remain unchanged.

// If you need to modify a string frequently(e.g., in a loop), consider converting it into an array(mutable), modifying it, and then joining it back into a string.

//     Example:

// javascript
let str3 = "hello";
let arr = str3.split(''); // Convert to array
arr[0] = 'H'; // Modify array
let newStr = arr.join(''); // Convert back to string
console.log(newStr); // "Hello"
