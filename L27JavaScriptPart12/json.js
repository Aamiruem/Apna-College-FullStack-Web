// 🧱 What is JSON Data?

// JSON stands for JavaScript Object Notation.
// It is a lightweight format used to store and exchange data between a server and a web app.

// 🧠 In simple words:

// JSON is a way to send data in text format that looks like a JavaScript object.

// 💡 Example:

// Here’s some JSON data:

// {
//   "name": "Aamir",
//   "age": 20,
//   "isStudent": true
// }


// It looks like a JS object, but it’s actually just text.

// 🖥️ How it’s used:

// When you call an API (like a weather API or cat fact API),
// the server sends data in JSON format, and JavaScript reads it.

// fetch("https://catfact.ninja/fact")
//   .then(res => res.json())   // converts JSON text → JS object
//   .then(data => console.log(data.fact));

// 🧩 Rules of JSON
// Rule	Example
// Data is in key-value pairs	"name": "Aamir"
// Keys are always in double quotes	✅ "age" ❌ age
// Strings are in double quotes	"Hello"
// Can contain numbers, strings, booleans, arrays, objects	✅
// No comments allowed	❌
// 🧠 In short:

// JSON = a simple text-based way to share data between computers, especially between a server and JavaScript.

// Would you like me to show how to convert between JSON and JavaScript objects using JSON.stringify() and JSON.parse()?
