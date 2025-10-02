// Perfect 👍 Let’s break down .then() and .catch() methods in JavaScript (used with Promises).

// 🔹 .then()

// Used to handle the resolved (fulfilled) value of a Promise.

// Takes two optional callbacks:

// First → runs when Promise is fulfilled.

// Second → runs when Promise is rejected (though .catch() is preferred).

// 👉 Example:

let promise = new Promise((resolve, reject) => {
  resolve("✅ Success!");
});

promise.then(
  result => console.log(result),   // if resolved
  error => console.log(error)      // if rejected
);


// Output:

// ✅ Success!

// 🔹 .catch()

// Used to handle rejections (errors) from a Promise.

// Cleaner than passing the second callback to .then().

// 👉 Example:

let promise1 = new Promise((resolve, reject) => {
  reject("❌ Something went wrong!");
});

promise1
  .then(result => console.log(result))  // not called
  .catch(error => console.log(error));  // handles rejection


// Output:

// ❌ Something went wrong!

// 🔹 Chaining .then() and .catch()

// You can chain multiple .then() calls and add .catch() at the end for error handling.

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
});

promise2
  .then(num => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then(num => {
    console.log("Step 2:", num);
    return num * 3;
  })
  .then(num => {
    console.log("Step 3:", num);
  })
  .catch(err => {
    console.log("Error:", err);
  });


// Output:

// Step 1: 10
// Step 2: 20
// Step 3: 60

// 🔹 Key Points

// .then() → handles success (and optionally failure).

// .catch() → handles errors.

// If an error occurs anywhere in the chain, it jumps to the nearest .catch().

// Promises make async code more readable and manageable compared to callbacks.
