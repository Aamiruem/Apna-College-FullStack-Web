let a = 25;
console.log(a);

let b = 30;
console.log(b);

console.log(a + b);



// Yes, JavaScript is a single-threaded language, meaning:

// ✅ What Does "Single-Threaded" Mean in JavaScript?
// JavaScript has one call stack and can only execute one task at a time.

// That means:

// Code runs sequentially, one line at a time.

// If one function is executing, the next line must wait for it to finish.

// 💡 But Wait… What About setTimeout, fetch, or async/await?
// Great question! These are asynchronous, but they don’t change the single-threaded nature of JS.

// JavaScript handles this using the event loop and Web APIs provided by the browser (or Node.js).

// ⚙️ How Asynchronous JS Works (with Event Loop)
// Here's how JavaScript handles multiple tasks without being multi-threaded:


console.log("Start");

setTimeout(() => {
  console.log("Timeout done");
}, 1000);

console.log("End");
// Output:

// Start
// End
// Timeout done
// ✅ Even though setTimeout is asynchronous, it doesn't block console.log("End").

// 📌 Key Concepts
// Concept	Description
// Call Stack	Keeps track of function calls
// Web APIs	Browser-provided async APIs like setTimeout, fetch
// Callback Queue	Stores callbacks from async tasks
// Event Loop	Sends callbacks from the queue to the stack when it's empty

// 🧠 Summary
// JavaScript is single-threaded.

// It uses asynchronous patterns and the event loop to handle tasks efficiently without blocking.

// Tools like Promises, async/await, setTimeout, etc., work with this system.
