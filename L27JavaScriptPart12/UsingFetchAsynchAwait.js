// Good try 👏 — you’ve got the right logic, but the code has a few syntax errors (missing parentheses, wrong variable names, misplaced dots, etc.).

// Here’s the correct and working version 👇

// ✅ Fixed JavaScript Code
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        // First request
        let res = await fetch(url);
        let data = await res.json();
        console.log("data.fact =", data.fact);

        // Second request
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2.fact =", data2.fact);

    } catch (e) {
        console.log("error -", e);
    }

    console.log("bye");
}

// Call the function
getFacts();

// 🧠 Explanation

// await fetch(url) → waits for the API response.

// await res.json() → converts the response to JSON.

// console.log(data.fact) → logs the random cat fact.

// The process repeats to get another random fact.

// catch(e) handles any network or API errors.

// console.log("bye") runs after all awaits are done (or if an error occurs).

// 🖥️ Example Output
// data.fact = Cats sleep 70% of their lives.
// data2.fact = A cat can jump up to six times its body length.
// bye


// ✅ In short:

// This async/await example fetches two random cat facts one after another, then logs “bye” at the end.
