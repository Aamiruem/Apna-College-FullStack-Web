// 🔢 Goal: Generate a random integer from 1 to 10(inclusive)
// ✅ Step - by - step process in JavaScript
// javascript
// Copy code
// Step 1:
// let num = Math.random();
// ✅ Math.random() generates a random decimal number between 0(inclusive) and 1(exclusive), e.g. 0.46747741318127045.

//     javascript
// Copy code
// Step 2:
// num = num * 10;
// ✅ Multiply the decimal by 10. Now num is between 0 and 10(exclusive).
//     E.g. 0.46747741318127045 * 10 = 4.674774131812704

// javascript
// Copy code
// Step 3:
// num = Math.floor(num);
// ✅ Math.floor() removes the decimal part — rounds down to the nearest whole number.
//     So 4.674... becomes 4.
// Now num is between 0 and 9.

// javascript
// Copy code
// Step 4:
// num = num + 1;
// ✅ Add 1 to shift the range from 0–9 to 1–10.
// So 4 + 1 = 5.

// ✅ Final Value
// So num is a random integer from 1 to 10.

// 🔁 Full Code
// javascript
// Copy code
let num = Math.random();     // Step 1: 0 <= num < 1
num = num * 10;              // Step 2: 0 <= num < 10
num = Math.floor(num);       // Step 3: 0 <= num <= 9 (integer)
num = num + 1;               // Step 4: 1 <= num <= 10
console.log(num);            // Example output: 5
