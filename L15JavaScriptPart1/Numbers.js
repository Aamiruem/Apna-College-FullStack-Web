// Numbers in JavaScript
// In JavaScript, numbers are used to represent both integers and floating-point values. JavaScript uses the Number data type for all numeric values, including integers, decimals, and special numeric values like Infinity and NaN.

// 1. Number Basics
// Integer & Floating-Point Numbers

let integer = 42;        // Integer
let float = 3.14;       // Floating-point
let scientific = 2.5e4; // 2.5 × 10⁴ = 25000
// Hexadecimal, Binary & Octal (ES6+)

let hex = 0xFF;      // Hexadecimal (255 in decimal)
let binary = 0b1010; // Binary (10 in decimal)
let octal = 0o10;    // Octal (8 in decimal)
// 2. Special Numeric Values
// Value	Description
// Infinity	Represents ∞ (e.g., 1 / 0)
// -Infinity	Represents -∞ (e.g., -1 / 0)
// NaN	"Not a Number" (e.g., 0 / 0)

console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log(Math.sqrt(-1)); // NaN
// 3. Number Methods & Properties
// Number Methods
// Method	Example	Description
// toString()	(10).toString()	Converts number to string
// toFixed(n)	3.14159.toFixed(2) → "3.14"	Rounds to n decimal places
// parseInt()	parseInt("10px") → 10	Parses string into integer
// parseFloat()	parseFloat("3.14.15") → 3.14	Parses string into float
// Number Properties
// Property	Value	Description
// Number.MAX_VALUE	1.7976931348623157e+308	Largest possible number
// Number.MIN_VALUE	5e-324	Smallest possible positive number
// Number.POSITIVE_INFINITY	Infinity	Same as Infinity
// Number.NEGATIVE_INFINITY	-Infinity	Same as -Infinity
// Number.NaN	NaN	Represents "Not a Number"
// 4. Math Operations
// Basic Arithmetic

let sum = 5 + 3;    // 8
let diff = 5 - 3;   // 2
let product = 5 * 3; // 15
let quotient = 5 / 2; // 2.5
let remainder = 5 % 2; // 1 (modulus)
let power = 5 ** 2; // 25 (exponentiation, ES6+)
// Math Object (Common Functions)

Math.abs(-5);      // 5 (absolute value)
Math.round(3.6);   // 4 (rounds to nearest integer)
Math.ceil(3.2);    // 4 (rounds up)
Math.floor(3.9);   // 3 (rounds down)
Math.max(1, 2, 3); // 3 (returns max value)
Math.min(1, 2, 3); // 1 (returns min value)
Math.random();     // Random number between 0 and 1
Math.sqrt(16);     // 4 (square root)
Math.pow(2, 3);    // 8 (2³)
// 5. Precision Issues (Floating-Point Quirk)
// JavaScript uses 64-bit floating-point numbers (IEEE 754), leading to precision issues:


console.log(0.1 + 0.2); // 0.30000000000000004 (not 0.3!)
// Solution: Use toFixed() or Math.round()

let result = (0.1 + 0.2).toFixed(1); // "0.3" (string)
let fixedNum = parseFloat(result);    // 0.3 (number)
// 6. BigInt (ES2020)
// For very large integers (beyond Number.MAX_SAFE_INTEGER), use BigInt:


let bigNum = 9007199254740991n; // 'n' suffix
let hugeCalc = bigNum + 1n;     // Works correctly
// Summary
// ✅ JavaScript has one number type (Number) for integers & floats.
// ✅ Special values: Infinity, -Infinity, NaN.
// ✅ Use Math for advanced operations.
// ✅ Beware of floating-point precision errors.
// ✅ Use BigInt for very large integers (ES2020+).

// Would you like more details on any specific part? 😊
