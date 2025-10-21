// Http Verbs
// Examples:
// • GET
// • POST
// • DELETE




// Exactly ✅
// You’ve listed some of the most common HTTP verbs. Let’s explain each with examples 👇

// 🧱 HTTP Verbs
// 1️⃣ GET

// Purpose: Retrieve data from the server.

// Does not change any data.

// Example:

// GET /users


// Fetches all users from the server.

// Used in browsers when you visit a URL.

// 2️⃣ POST

// Purpose: Send new data to the server (create something).

// Example:

// POST /users
// Body: {
//   "name": "Aamir",
//   "age": 20
// }


// Adds a new user to the server database.

// Usually includes data in the request body.

// 3️⃣ DELETE

// Purpose: Remove data from the server.

// Example:

// DELETE /users/1


// Deletes the user with ID = 1 from the server.

// 🧠 In short:
// Verb	Action	Example Purpose
// GET	Read data	Fetch users, posts
// POST	Create data	Add new user, post
// DELETE	Remove data	Delete user, post







// Great question 👏 — let’s understand AJAX simply and clearly 👇

// ⚙️ What is AJAX?

// AJAX stands for Asynchronous JavaScript and XML.

// 👉 Short answer:
// AJAX allows a web page to send or receive data from a server without reloading the whole page.

// 💡 In simple words:

// Normally, when you submit a form or click a button, the entire web page reloads.
// But with AJAX, only part of the page updates — making the website faster and smoother.

// 🧠 How it works (step-by-step):

// JavaScript sends a request to the server (in the background).

// The server processes it and sends data back (usually JSON).

// JavaScript updates the web page — without refreshing it.

// 🧩 Example using fetch() (modern AJAX):
// fetch("https://catfact.ninja/fact")
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById("fact").innerText = data.fact;
//   });

// <p id="fact">Loading...</p>


// 🖥️ Output:

// The page shows a new cat fact without reloading.

// ⚡ AJAX Uses:

// Live search suggestions (like Google)

// Chat apps (new messages appear instantly)

// Auto-refresh feeds (like Twitter)

// Submitting forms without page reload

// 🔍 Old vs New
// Type	Method
// Old way	XMLHttpRequest
// New modern way	fetch() or axios
// 🧠 In short:

// AJAX = Technique that lets JavaScript fetch or send data from a server without refreshing the page.
