//! Ah, you’re talking about “Activity Using Query Strings” — basically using query parameters in URLs to pass data in HTTP requests. Let’s break it down and explain clearly.

// 🌐 What Are Query Strings?

// A query string is the part of a URL that comes after the ? and passes key-value pairs to the server.

// Syntax:

// https://example.com/api?key1=value1&key2=value2


// ? → starts the query string

//! & → separates multiple key-value pairs

// key=value → actual data being sent

// ⚙️ Example URL
// https://api.example.com/search?query=cat&limit=10


// query=cat → search for “cat”

// limit=10 → return 10 results

// ✅ Using Axios with Query Strings

// There are two main ways to send query parameters in Axios:

// 1️⃣ Appending to URL manually
// import axios from "axios";

// async function getData() {
//   const url = "https://api.example.com/search?query=cat&limit=10";

//   try {
//     let res = await axios.get(url);
//     console.log(res.data);
//   } catch (error) {
//     console.log("ERROR:", error.message);
//   }
// }

// getData();

// 2️⃣ Using params option (recommended)

// Axios allows you to send query parameters as an object:

// import axios from "axios";

// async function getData() {
//   const url = "https://api.example.com/search";

//   const config = {
//     params: {
//       query: "cat",
//       limit: 10
//     }
//   };

//   try {
//     let res = await axios.get(url, config);
//     console.log(res.data);
//   } catch (error) {
//     console.log("ERROR:", error.message);
//   }
// }

// getData();


// Axios automatically converts the params object into a query string:

// https://api.example.com/search?query=cat&limit=10

// 🧩 Example Output

// For a fake API that returns search results:

// {
//   "results": [
//     "Cats sleep 70% of their lives.",
//     "Cats have five toes on their front paws."
//   ],
//   "count": 2
// }

// 💡 Advantages of using params in Axios

// ✅ Cleaner and easier than concatenating strings manually

// ✅ Handles encoding automatically (spaces, special characters)

// ✅ Can dynamically add/remove parameters

// ⚡ Bonus: Dynamic Query Strings in React
// axios.get("/search", {
//   params: { query: searchTerm, limit: resultsLimit }
// });


// searchTerm and resultsLimit can come from a user input dynamically.
