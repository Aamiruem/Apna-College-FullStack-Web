// Perfect 👍 You’re learning async/await with the Fetch API — that’s a modern and cleaner way to handle asynchronous requests!

// Your code idea is 💯 correct — just needs a few small syntax fixes (like missing URL variable, brackets, and semicolons).

// Here’s the correct and working version 👇

// ✅ Fixed JavaScript Code
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        // First request
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 =", data1.fact);

        // Second request
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 =", data2.fact);

    } catch (e) {
        console.log("error:", e);
    }
}

// Call the function
getFacts();

// 🧠 Explanation Step-by-Step

// async function getFacts()
// → Declares an asynchronous function so we can use await inside it.

// await fetch(url)
// → Sends a request to the API and waits until the response comes back.

// await res.json()
// → Converts the API response (JSON format) into a JavaScript object.

// console.log(data1.fact)
// → Logs the cat fact from the first request.

// The second fetch repeats to get another random cat fact.

// catch(e)
// → Catches and logs any errors (like no internet connection).

// 🖥️ Example Output
// data1 = Cats have excellent night vision.
// data2 = A group of cats is called a clowder.


// ✅ In short:

// async/await makes your fetch() code look synchronous and easier to read, while still being asynchronous under the hood.








