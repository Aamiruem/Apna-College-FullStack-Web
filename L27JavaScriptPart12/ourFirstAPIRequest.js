let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => res.json())          // first fetch: convert response to JSON
    .then((data) => {
        console.log("data1 =", data.fact); // log first cat fact
        return fetch(url);                 // fetch again
    })
    .then((res) => res.json())          // second fetch: convert response to JSON
    .then((data2) => {
        console.log("data2 =", data2.fact); // log second cat fact
    })
    .catch((err) => {
        console.log("ERROR -", err);      // catch any error
    });

console.log("I am happy with you");

// 🧠 Output in console
// data1 = Cats make about 100 different sounds.
// data2 = A cat's brain is 90% similar to a human's brain.
