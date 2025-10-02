function saveToDBPromise(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(`Internet speed: ${internetSpeed}`);

        setTimeout(() => {
            const statusDiv = document.getElementById("status");

            const message = `Trying to save "${data}"...<br>`;
            statusDiv.innerHTML += message;

            if (internetSpeed > 4) {
                const successMsg = `✅ Success: "${data}" saved.<br>`;
                statusDiv.innerHTML += successMsg;
                resolve(successMsg);
            } else {
                const errorMsg = `❌ Failure: Could not save "${data}" due to weak connection.<br>`;
                statusDiv.innerHTML += errorMsg;
                reject(errorMsg);
            }
        }, 1000);
    });
}

// Promise chaining
saveToDBPromise("apnacollege")
    .then((result) => {
        console.log(result);
        return saveToDBPromise("hello world");
    })
    .then((result) => {
        console.log(result);
        return saveToDBPromise("final save");
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error("Some promise was rejected:");
        console.error(err);
    });












//     🔹 What is Promise Chaining?

// Promise chaining means linking multiple .then() calls one after another.

// Each .then() returns a new Promise, so you can pass results step by step.

// It helps avoid callback hell and makes async flows clean and sequential.

// 🔹 Basic Example
new Promise((resolve, reject) => {
  resolve(2);
})
  .then(num => {
    console.log("Step 1:", num); // 2
    return num * 2;             // returns 4
  })
  .then(num => {
    console.log("Step 2:", num); // 4
    return num * 3;             // returns 12
  })
  .then(num => {
    console.log("Step 3:", num); // 12
    return num * 4;             // returns 48
  })
  .then(num => {
    console.log("Final result:", num); // 48
  })
  .catch(err => console.error("Error:", err));


// 👉 Output:

// Step 1: 2
// Step 2: 4
// Step 3: 12
// Final result: 48

// 🔹 Example with Async Task
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Aamir" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post1", "Post2"]), 1000);
  });
}

fetchUser()
  .then(user => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return posts.length;
  })
  .then(count => {
    console.log("Total posts:", count);
  })
  .catch(err => console.error("Error:", err));


// 👉 Execution flow:

// fetchUser resolves with user → goes to first .then().

// fetchPosts called → goes to second .then().

// Post count logged in third .then().

// 🔹 Key Points

// Each .then() returns a new Promise.

// The return value of one .then() is passed to the next.

// Errors anywhere in the chain jump to the nearest .catch().

// Use .finally() if you want code to run at the end, no matter what.

// ✅ In short: Promise chaining lets you run async tasks in sequence without messy nested callbacks.
