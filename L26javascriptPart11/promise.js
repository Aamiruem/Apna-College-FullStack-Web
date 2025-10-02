// 🔹 What is a Promise?

// A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.

// It’s like a placeholder for a value that will be available in the future.

// 🔹 Promise States

// A Promise has 3 states:

// Pending → operation not finished yet.

// Fulfilled → operation completed successfully (resolved).

// Rejected → operation failed (error).

// 🔹 Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Operation successful!");
  } else {
    reject("❌ Something went wrong!");
  }
});

// 🔹 Consuming a Promise

// We use .then(), .catch(), and .finally():

myPromise
  .then(result => {
    console.log(result); // runs if resolved
  })
  .catch(error => {
    console.log(error); // runs if rejected
  })
  .finally(() => {
    console.log("Promise completed (success or fail).");
  });

// 🔹 Example with Async Task
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { user: "Aamir", age: 21 };
      resolve(data);
      // reject("Error fetching data");
    }, 2000);
  });
}

fetchData()
  .then(data => console.log("Data received:", data))
  .catch(err => console.log(err));


// ⏳ After 2 seconds →

// Data received: { user: "Aamir", age: 21 }

// 🔹 Async / Await (syntactic sugar for Promises)
async function getData() {
  try {
    const data = await fetchData();
    console.log("Async/Await:", data);
  } catch (err) {
    console.log(err);
  }
}

getData();


// ✅ Summary:

// Promise = object for async result (future value).

// States → pending → fulfilled / rejected.

// Handled with .then(), .catch(), .finally() or async/await.




// Let’s break down async and await in JavaScript:

// 🔹 async

// Declares a function as asynchronous.

// An async function always returns a Promise.

// If you return a value → it’s wrapped in a resolved Promise.

// If you throw an error → it becomes a rejected Promise.

// 👉 Example:

async function greet() {
  return "Hello!";
}

greet().then(msg => console.log(msg)); // "Hello!"

// 🔹 await

// Can be used only inside async functions.

// It pauses execution until the Promise is settled (fulfilled or rejected).

// Makes async code look like synchronous code.

// 👉 Example:

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let result = await fetchData();  // waits here until promise resolves
  console.log(result);
  console.log("Done");
}

getData();


// ⏳ Output:

// Fetching...
// (Data loaded after 2 sec)
// Data loaded
// Done

// 🔹 Key Points

// async = always returns a Promise.

// await = waits for a Promise to resolve/reject.

// Makes code cleaner than using .then() chains.

// ✅ In simple words:

// async tells JS: “this function works with promises.”

// await tells JS: “wait here until the promise is done, then continue.”
