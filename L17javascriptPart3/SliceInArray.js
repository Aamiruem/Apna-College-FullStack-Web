// 🧩 What .slice() Does
// Syntax: array.slice(start, end?)

// start: Index to begin copy (inclusive). Defaults to 0.

// end: Index to end copy (exclusive). Defaults to array’s length.

// Both parameters can be negative, meaning counted from the end.
// W3Schools


// Returns: A new array containing elements from index start up to (but not including) end.

// Does not modify the original array—you get a separate copy.

// Shallow copy:

// Primitive values (numbers, strings, booleans) are fully copied.

// Non-primitives (objects/arrays) are copied by reference—if you mutate a nested object, both arrays reflect the change.



const letters = ["a","b","c","d","e","f"];

// 1. Partial slice
letters.slice(2, 5); // → ["c","d","e"]

// 2. Open-ended slice
letters.slice(3);    // → ["d","e","f"]

// 3. Full clone
const clone = letters.slice(); // → ["a","b","c","d","e","f"]

// 4. Negative indices
letters.slice(-3);   // → ["d","e","f"]
letters.slice(-4, -1); // → ["c","d","e"]
// Platforms like W3Schools, MDN, and CodeAcademy all agree that this returns a new array without altering the original 

// 🆚 slice() vs splice()
// A common point of confusion:

// .slice(): Non-destructive → returns a new array.

// .splice(): Destructive → modifies the original array and returns the removed elements.

const arr = [1,2,3,4,5];
const part = arr.slice(1,4);  // arr remains [1,2,3,4,5]
const removed = arr.splice(1,3); // arr becomes [1,5], removed = [2,3,4]
// A handy mnemonic: slice = non‑destructive, splice = in‑place (“p” in splice = place/in-place) 


// ⚠️ Why Shallow Copy Matters
// From Reddit:

// “slice() keeps empty (sparse) array slots” … and
// “slice() gives us a slice(a portion) of … objects … returns a shallow copy” 
// That means if you slice() an array of objects:


const objs = [{a:1}, {b:2}];
const copy = objs.slice();
copy[0].a = 99;
console.log(objs[0].a); // → 99 (the same object reference)
// ✅ When to Use slice()
// To extract a segment of an array without touching the original.

// To clone an array when you need to prevent accidental modifications (useful in React, Redux, etc.)


// To support immutability—especially when updating state.

// 🧠 Quick Reference Table
// Feature	.slice()
// Operates on	Array/String
// Starts at index	begin (default 0; negative works)
// Ends at index	end (exclusive; defaults to length)
// Returns	New array
// Original changed?	❌ No
// Copy type	Shallow
// Good for	Slicing/cloning without mutation












// JavaScript Array Slicing
// The slice() method in JavaScript returns a shallow copy of a portion of an array into a new array object.Here's how it works:

// Basic Syntax
// javascript
// array.slice(start, end)
// Parameters
// start(optional): Zero - based index at which to begin extraction

// If negative, it's treated as array.length + start

// If omitted, starts from index 0

// end(optional): Zero - based index before which to end extraction

// If negative, it's treated as array.length + end

// If omitted, extracts through the end of the array


const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// Get elements from index 1 to 3 (not including 3)
console.log(fruits.slice(1, 3)); // ['banana', 'orange']

// Get elements from index 2 to end
console.log(fruits.slice(2)); // ['orange', 'mango', 'kiwi']

// Get last two elements
console.log(fruits.slice(-2)); // ['mango', 'kiwi']

// Get all elements except last two
console.log(fruits.slice(0, -2)); // ['apple', 'banana', 'orange']

// Create a shallow copy of the array
console.log(fruits.slice()); // ['apple', 'banana', 'orange', 'mango', 'kiwi']
// Important Notes
// slice() doesn't modify the original array

// It returns a new array containing the extracted elements

// The original array remains unchanged

// Works similarly for strings with String.prototype.slice()

// String Slicing
// For strings, the syntax is similar:


const str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(6)); // "World"
console.log(str.slice(-5)); // "World"
console.log(str.slice(-11, -6)); // "Hello"
console.log(str.slice()); // "Hello World"
