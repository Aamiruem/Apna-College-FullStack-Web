// Absolutely 👍 — let’s explain Axios clearly and completely.

// 🌐 What is Axios?

// Axios is a JavaScript library used to make HTTP requests (like GET, POST, PUT, DELETE) from:

// Browsers (frontend)

// Node.js (backend)

// It’s promise-based, meaning it uses async / await or .then() / .catch() syntax for handling responses and errors.

// ⚙️ Why We Use Axios

// Axios is used to communicate with APIs (Application Programming Interfaces).
// For example — getting data from a server or sending user input to a database.

// ✅ Example:

// You have an API endpoint like:

// https://api.example.com/users


// You can use Axios to fetch or send data to it.

// 💻 Basic Syntax
// axios.get(url)
// axios.post(url, data)
// axios.put(url, data)
// axios.delete(url)


// All of these return a Promise, which resolves to a response object.

// 🧠 Example 1: GET Request
import axios from 'axios';

async function getData() {
    try {
        const res = await axios.get("https://catfact.ninja/fact");
        console.log(res.data); // actual data from server
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getData();

// 📤 Output
// {
//   "fact": "Cats sleep 70% of their lives.",
//   "length": 30
// }

// 🧱 Example 2: POST Request

// Used when sending data to a server (like submitting a form).

import axios from 'axios';

async function sendData() {
    try {
        const res = await axios.post("https://example.com/api/user", {
            name: "Aamir",
            age: 25
        });
        console.log(res.data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 📦 How to Install Axios

// If you’re using Node.js or React, install it via npm:

// npm install axios


// Then import it:

// import axios from 'axios';

// 🧩 Axios Response Structure

// When you make a request:

// const res = await axios.get(url);


// The res object has:

// Property	Description
// res.data	Actual response data from server
// res.status	HTTP status code (e.g., 200, 404)
// res.statusText	Status message (e.g., “OK”)
// res.headers	Response headers
// res.config	Axios config for the request
// ⚡ Advantages of Axios over fetch()
// Feature	Axios	fetch()
// Automatically converts JSON	✅ Yes	❌ No (you must use .json())
// Better error handling	✅	⚠️ Less detailed
// Request timeout support	✅	❌ Manual
// Easy interceptors (e.g., auth tokens)	✅	❌ Not built-in
// 🧩 Example in React (Common Use Case)
import axios from 'axios';
import { useEffect, useState } from 'react';

function CatFact() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        axios.get("https://catfact.ninja/fact")
            .then(res => setFact(res.data.fact))
            .catch(err => console.log(err));
    }, []);

    return <h3>{fact}</h3>;
}

export default CatFact;

// 🔍 Summary
// Concept	Meaning
// Axios	JS library for HTTP requests
// Type	Promise-based
// Used for	API calls (GET, POST, PUT, DELETE)
// Environment	Browser & Node.js
// Advantages	Easy syntax, better error handling, automatic JSON, supports async/await
