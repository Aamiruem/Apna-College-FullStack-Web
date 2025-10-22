// Perfect 👍 — you’re now learning how to send headers with Axios — an important and common part of working with APIs.

// Let’s fix your code syntax and understand it clearly step-by-step 👇

// 🧠 What Are Headers?

// HTTP headers carry extra information with a request or response — like:

// Content type (application/json)

// Authorization tokens (for login)

// API keys

// Accepted response format

// ✅ Correct Axios Syntax for Sending Headers
import axios from "axios";

async function getData() {
  const url2 = "https://catfact.ninja/fact";

  // 👇 define headers config
  const config = {
    headers: {
      Accept: "application/json",     // server should respond in JSON
      "User-Agent": "AxiosExample/1.0" // optional: custom user agent
    }
  };

  try {
    // 👇 pass config as 2nd argument
    let res = await axios.get(url2, config);
    console.log(res.data); // print response body
  } catch (error) {
    console.log("ERROR:", error.message);
  }
}

getData();

// 🧱 Explanation
// Part	Meaning
// axios.get(url2, config)	Sends a GET request with custom headers
// config.headers	Object containing key-value pairs of headers
// "Accept": "application/json"	Tells server you expect JSON data
// "User-Agent"	Identifies your client (optional)
// 💡 Example with Authorization Header

// If an API needs authentication (like a token):

// const config = {
//   headers: {
//     Authorization: "Bearer YOUR_TOKEN_HERE",
//     Accept: "application/json"
//   }
// };

// let res = await axios.get("https://api.example.com/user", config);

// // 🧠 POST Request with Headers and Body
// const config = {
//   headers: {
//     "Content-Type": "application/json"
//   }
// };

const data = {
  name: "Aamir",
  age: 25
};

let res = await axios.post("https://example.com/api/users", data, config);
console.log(res.data);

// 📦 Summary Table
// Method	Syntax	Headers Location
// GET	axios.get(url, config)	2nd argument
// POST	axios.post(url, data, config)	3rd argument
// PUT	axios.put(url, data, config)	3rd argument
// DELETE	axios.delete(url, config)	2nd argument

// ✅ Output Example (for catfact API)

// {
//   "fact": "Cats sleep 70% of their lives.",
//   "length": 30
// }
