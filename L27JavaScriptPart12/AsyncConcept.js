// 🔹 What is async/await?

// async/await is syntactic sugar built on top of Promises in JavaScript.

// It makes asynchronous code look and behave like synchronous code.

// async functions always return a Promise.

// await is used inside an async function to wait until a Promise is resolved/rejected.

// 🔹 Syntax
async function myFunction() {
  let result = await someAsyncTask();
  console.log(result);
}

// 🔹 Example without async/await (using .then)
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received ✅"), 2000);
  });
}

getData().then(result => console.log(result));

// 🔹 Example with async/await
async function fetchData() {
  console.log("Fetching...");
  let result = await getData();
  console.log(result); // waits until promise resolves
}

fetchData();


// ⏳ Output:

// Fetching...
// (2 seconds later)
// Data received ✅

// 🔹 Error Handling

// With Promises:

getData()
  .then(res => console.log(res))
  .catch(err => console.log("Error:", err));


// With async/await:

async function fetchData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }
}

// 🔹 Real-Life Example (API Fetch)
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

getUsers();


// ✅ Key Points to Remember:

// async makes a function return a Promise.

// await makes JS wait for the Promise (only inside async functions).

// It makes async code cleaner and easier to read than .then() chains.
