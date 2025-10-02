// 🔹 1. Results in JS

// A result is the successful output of a function or operation.

// In synchronous code → returned directly.

// In asynchronous code → delivered through Promise resolution.

// 👉 Example (synchronous result):

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // ✅ 5


// 👉 Example (asynchronous result via Promise):

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("✅ Data received"), 1000);
  });
}

getData().then(result => console.log(result));
// after 1s → "✅ Data received"

// 🔹 2. Errors in JS

// An error is an unexpected issue (wrong input, failed operation, etc.).

// In synchronous code → handled with try...catch.

// In asynchronous code → handled with .catch() or try...catch (with async/await).

// 👉 Example (synchronous error):

try {
  throw new Error("❌ Something went wrong!");
} catch (err) {
  console.log("Caught error:", err.message);
}


// 👉 Example (asynchronous error with Promise):

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ Failed to fetch"), 1000);
  });
}

getData()
  .then(result => console.log(result))
  .catch(error => console.log("Caught error:", error));

// 🔹 3. Async/Await with Results & Errors
async function fetchData() {
  try {
    // success
    let result = await Promise.resolve("✅ Success result");
    console.log("Result:", result);

    // failure
    await Promise.reject("❌ Failure occurred");
  } catch (error) {
    console.log("Caught error:", error);
  }
}

fetchData();


// 👉 Output:

// Result: ✅ Success result
// Caught error: ❌ Failure occurred

// ✅ Summary

// Result → what you expect from successful execution.

// Error → what happens when something goes wrong.

// Sync code → return + try/catch.

// Async code → resolve/reject + .then() / .catch() OR async/await + try/catch.
